import {
  IClientService,
  ImageReferences,
  StorageFolder,
  StorageImage,
} from "@/common/services/client-service.interface";
import { Product } from "@/common/models/product";
import firebaseConfig from "@/firebase/firebaseConfig";
import { FirebaseApp, initializeApp } from "firebase/app";
import {
  collection,
  doc,
  Firestore,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  setDoc,
  deleteDoc,
  writeBatch,
  Transaction,
  DocumentData,
  CollectionReference,
  Timestamp,
  where,
} from "firebase/firestore";
import { UserEntry, UserRole } from "@/common/models/user-entry";
import {
  deleteObject,
  FirebaseStorage,
  getDownloadURL,
  getStorage,
  listAll,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { CartOrderItem } from "@/common/models/cart-order-item";
import { SimpleEvent } from "../simple-event";
import { clamp } from "lodash";
import { CartOrder } from "@/common/models/cart-order";
import { CartOrderContact } from "../models/cart-order-contact";
import { Order } from "@/common/models/order";
import { getOldDate } from "@/common/string-helper";
import { OrderSummary } from "../models/order-summary";
import { OrderQuery } from "@/common/models/order-query";
import { BankingData } from "@/common/models/banking-data";
import { DataToObjectMapper } from "@/common/services/data-to-object-mapper";
import { Queries } from "@/common/services/queries";
import { ProductCost } from "@/common/models/product-cost";
import { RangeOrderedProduct } from "@/common/models/range-ordered-product";
import { DashboardPreferences } from "@/common/models/dashboard-preferences";

export class Collections {
  readonly products: CollectionReference<DocumentData, DocumentData>;
  readonly orders: CollectionReference<DocumentData, DocumentData>;
  readonly orderedProducts: CollectionReference<DocumentData, DocumentData>;
  readonly paymentData: CollectionReference<DocumentData, DocumentData>;
  readonly userRoles: CollectionReference<DocumentData, DocumentData>;
  readonly userProfiles: CollectionReference<DocumentData, DocumentData>;
  readonly productCosts: CollectionReference<DocumentData, DocumentData>;
  readonly settings: CollectionReference<DocumentData, DocumentData>;
  readonly dashboardPreferences: CollectionReference<
    DocumentData,
    DocumentData
  >;

  constructor(firestore: Firestore) {
    this.products = collection(firestore, "products");
    this.orders = collection(firestore, "orders");
    this.orderedProducts = collection(firestore, "orderedProducts");
    this.paymentData = collection(firestore, "paymentData");
    this.userRoles = collection(firestore, "userRoles");
    this.userProfiles = collection(firestore, "userProfiles");
    this.productCosts = collection(firestore, "productCosts");
    this.settings = collection(firestore, "settings");
    this.dashboardPreferences = collection(firestore, "dashboardPreferences");
  }
}

const BATCH_SIZE = 30;
export class ClientService implements IClientService {
  private readonly _firebaseApp: FirebaseApp;
  private readonly _firestore: Firestore;
  private readonly collections: Collections;
  private readonly _storage: FirebaseStorage;
  private _products: Product[];
  private _order: CartOrder = new CartOrder();

  currentOrderId: string = null;
  backPath: string = null;
  backFilterIndex = 0;
  onProductsAddedToCart = new SimpleEvent();

  get cartItems(): CartOrderItem[] {
    return this._order.cartItems.map((cartItem) => cartItem);
  }

  get contact(): CartOrderContact {
    return this._order.contact;
  }

  get totalCostCart(): number {
    let totalCost = 0;
    this.cartItems.forEach((cartItem) => (totalCost += cartItem.cost));
    return parseFloat(totalCost.toFixed(2));
  }

  get totalCostCartAsString(): string {
    return this.totalCostCart.toFixed(2).replace(".", ",") + " €";
  }

  constructor() {
    this._firebaseApp = initializeApp(firebaseConfig);
    this._firestore = getFirestore(this._firebaseApp);
    this.collections = new Collections(this._firestore);
    this._storage = getStorage(this._firebaseApp);
  }

  async getBankingData(): Promise<BankingData> {
    const bankingSnapshot = await getDocs(this.collections.paymentData);

    if (bankingSnapshot.empty || bankingSnapshot.docs.length < 1) {
      return null;
    }

    return DataToObjectMapper.toBankingData(bankingSnapshot.docs[0].data());
  }

  async getProductsAsync(forceUpdate = false): Promise<Product[]> {
    if (!forceUpdate && this._products) {
      return this._products;
    }

    const productsSnapshot = await getDocs(this.collections.products);
    return productsSnapshot.docs.map((doc) =>
      DataToObjectMapper.toProduct(doc.data()),
    );
  }

  async setProductImageAsync(product: Product): Promise<void> {
    product.imageUrl = await this._getImageDownloadUrl(product.imageReference);
  }

  async getOrdersAsync(uid: string, orderId: string = null): Promise<Order[]> {
    const ordersData = await this._fetchOrders(orderId, uid);
    const orderIds = ordersData.map((data) =>
      DataToObjectMapper.toOrderId(data),
    );
    const orderProductsData = await this._fetchOrderProductsBatched(
      orderIds,
      uid,
    );
    const orders = this._mapOrders(ordersData, orderProductsData);
    return this._sortOrdersByDateDesc(orders);
  }

  async getAllOrdersAsync(queryOptions: OrderQuery): Promise<OrderSummary[]> {
    const orderIds = await this._fetchUserOrderIds(queryOptions);
    let orderSummaries = await this._fetchOrderSummaries(
      orderIds,
      queryOptions,
    );
    if (this._hasSearchString(queryOptions)) {
      orderSummaries = this._filterOrderSummaries(orderSummaries, queryOptions);
    }
    return this._sortOrderSummariesByDateDesc(orderSummaries);
  }

  async addProductToCart(product: Product, numItems: number): Promise<void> {
    if (!product) {
      return;
    }

    const existingProduct = this._order.cartItems.find(
      (cartItem) => cartItem.product.productId === product.productId,
    );

    if (existingProduct) {
      const newTotal = existingProduct.numItems + numItems;
      existingProduct.numItems = clamp(newTotal, 1, product.quantity);
    } else {
      this._order.cartItems.push(new CartOrderItem(product, numItems));
    }

    this.onProductsAddedToCart.emit();
  }

  updateProductFromCart(product: Product, numItems: number): Promise<void> {
    const existingProduct = this._order.cartItems.find(
      (cartItem) => cartItem.product.productId === product.productId,
    );

    if (!existingProduct) {
      return;
    }

    existingProduct.numItems = clamp(numItems, 1, product.quantity);
  }

  deleteProductFromCart(product: Product): Promise<void> {
    const index = this._order.cartItems.findIndex(
      (cartItem) => cartItem.product.productId === product.productId,
    );

    if (index === -1) {
      return;
    }

    this._order.cartItems.splice(index, 1);
  }

  async addContactToCart(contact: CartOrderContact): Promise<void> {
    this._order.contact = contact;
  }

  async buyAsync(uid: string): Promise<string | null> {
    if (this._order.cartItems.length === 0 || !this._order.contact) {
      return null;
    }

    let orderId: string | null = null;
    try {
      await runTransaction(this._firestore, async (transaction) => {
        await this._updateProductsQuantities(transaction);
        orderId = this._createNewOrder(uid, transaction);
        this._order.cartItems = [];
        this._order.contact = null;
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      orderId = null;
    }

    await this.getProductsAsync(true);
    return orderId;
  }

  private async _updateProductsQuantities(transaction: Transaction) {
    const productsCollection = collection(this._firestore, "products");

    const updatePromises = this._order.cartItems.map(async (cartItem) => {
      const productRef = doc(productsCollection, cartItem.product.productId);
      const productDoc = await transaction.get(productRef);

      if (!productDoc.exists()) {
        throw Error(
          "Product does not exist. ProductId: " + cartItem.product.productId,
        );
      }

      const productData = productDoc.data();
      const newTotalItems = productData.totalItems - cartItem.numItems;

      if (newTotalItems < 0) {
        throw new Error("Insufficient quantity for some products.");
      }

      return transaction.update(productRef, { totalItems: newTotalItems });
    });
    await Promise.all(updatePromises);
  }

  private _createNewOrder(uid: string, transaction: Transaction): string {
    const orderId = this._getOrderId();

    const orderedProductsCollection = collection(
      this._firestore,
      "orderedProducts",
    );

    this._order.cartItems.map((cartItem) => {
      const newOrderedProduct = {
        uid: uid,
        orderId: orderId,
        productId: cartItem.product.productId,
        productName: cartItem.product.name,
        cost: cartItem.product.cost,
        imageReference: cartItem.product.imageReference,
        quantity: cartItem.numItems,
        totalCost: cartItem.cost,
        totalCostString: cartItem.costAsString,
        payedAt: getOldDate(),
        deliveredAt: getOldDate(),
        returnedAt: getOldDate(),
        payedBackAt: getOldDate(),
        payed: false,
        delivered: false,
        returned: false,
        payedBack: false,
      };
      const orderedProductId = orderId + "-" + cartItem.product.productId;
      const newOrderedProductRef = doc(
        orderedProductsCollection,
        orderedProductId,
      );
      transaction.set(newOrderedProductRef, newOrderedProduct);
    });

    const ordersCollection = collection(this._firestore, "orders");

    const newOrder = {
      uid: uid,
      orderId: orderId,
      contact: {
        firstName: this.contact.firstName,
        lastName: this.contact.lastName,
        street: this.contact.street,
        city: this.contact.city,
        zipCode: this.contact.zipCode,
        phoneNumber: this.contact.phoneNumber,
      },
      createdAt: serverTimestamp(),
      totalCost: this.totalCostCart,
      totalCostString: this.totalCostCartAsString,
    };
    const newOrderRef = doc(ordersCollection, orderId);
    transaction.set(newOrderRef, newOrder);
    return orderId;
  }

  private async _getImageDownloadUrl(imagePath: string): Promise<string> {
    const imageReference = storageRef(this._storage, imagePath);
    return await getDownloadURL(imageReference);
  }

  getChangedProducts(): {
    deleted: Product[];
    modified: Product[];
  } {
    const deletedProducts: Product[] = [];
    const modifiedProducts: Product[] = [];

    for (let i = this._order.cartItems.length - 1; i >= 0; i--) {
      const cartItem = this._order.cartItems[i];
      const product = this._products.find(
        (product) => product.productId === cartItem.product.productId,
      );

      if (product && product.quantity > 0) {
        const newNumItems = clamp(cartItem.numItems, 1, product.quantity);
        if (newNumItems !== cartItem.numItems) {
          modifiedProducts.push(cartItem.product);
          cartItem.numItems = newNumItems;
        }
      } else {
        deletedProducts.push(cartItem.product);
        this._order.cartItems.splice(i, 1);
      }
    }

    return { deleted: deletedProducts, modified: modifiedProducts };
  }

  private _getOrderId() {
    const first3FirstName = this._order.contact.firstName.slice(0, 3);
    const first3LastName = this._order.contact.lastName.slice(0, 3);
    const currentYearLast2Digits = new Date()
      .getFullYear()
      .toString()
      .slice(-2);
    const currentMonth = (new Date().getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const currentDay = new Date().getDate().toString().padStart(2, "0");
    const currentHour = new Date().getHours().toString().padStart(2, "0");
    const currentMinute = new Date().getMinutes().toString().padStart(2, "0");

    return `${first3FirstName}${first3LastName}${currentYearLast2Digits}${currentMonth}${currentDay}${currentHour}${currentMinute}`;
  }

  async updateOrder(order: Order): Promise<boolean> {
    try {
      await runTransaction(this._firestore, async (transaction) => {
        const updatePromises = order.products.map(async (product) => {
          const orderedProductId = order.orderId + "-" + product.productId;
          const orderedProductRef = doc(
            this.collections.orderedProducts,
            orderedProductId,
          );
          const orderedProductDoc = await transaction.get(orderedProductRef);

          if (!orderedProductDoc.exists()) {
            throw Error(
              "OrderedProductDoc does not exist. OrderedProductId: " +
                orderedProductId,
            );
          }

          return transaction.update(orderedProductRef, {
            payedAt: product.payedAt,
            deliveredAt: product.deliveredAt,
            payed: product.isPayed,
            delivered: product.isDelivered,
            returned: product.isReturned,
            payedBack: product.isPayedBack,
          });
        });
        await Promise.all(updatePromises);
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      return false;
    }
  }

  async getTotalOrderedProducts(): Promise<string[]> {
    const startDate = Timestamp.fromDate(getOldDate());
    const q = where("deliveredAt", "==", startDate);
    const orderProductsQuery = query(this.collections.orderedProducts, q);
    const orderProductsSnapshot = await getDocs(orderProductsQuery);
    const productsQuery = query(this.collections.products);
    const productsSnapshot = await getDocs(productsQuery);
    const productNames: { [key: string]: string } = {};
    productsSnapshot.docs.forEach((productDoc) => {
      const productData = productDoc.data();
      productNames[productData.productId] = productData.name;
    });
    const productQuantities: { [key: string]: number } = {};
    orderProductsSnapshot.docs.forEach((productDoc) => {
      const productData = productDoc.data();
      productQuantities[productData.productId] =
        (productQuantities[productData.productId] || 0) + productData.quantity;
    });

    const result: string[] = [];
    for (const key in productQuantities) {
      const productName =
        productNames[key] !== undefined ? productNames[key] : "Invalid name";
      result.push(productQuantities[key] + ": " + productName);
    }
    return result;
  }

  async getOrderedProductsInRange(
    from: Date,
    to: Date,
  ): Promise<RangeOrderedProduct[]> {
    const fromTs = Timestamp.fromDate(from);
    const toTs = Timestamp.fromDate(to);
    const ordersQuery = query(
      this.collections.orders,
      where("createdAt", ">=", fromTs),
      where("createdAt", "<=", toTs),
    );
    const ordersSnapshot = await getDocs(ordersQuery);
    const orderIds = ordersSnapshot.docs.map((d) => d.data().orderId as string);

    if (orderIds.length === 0) {
      return [];
    }

    const batched = this._batchArray(orderIds, BATCH_SIZE);
    const snapshots = await Promise.all(
      batched.map((batch) =>
        getDocs(
          query(
            this.collections.orderedProducts,
            where("orderId", "in", batch),
          ),
        ),
      ),
    );

    const result: RangeOrderedProduct[] = [];
    snapshots.forEach((snap) => {
      snap.docs.forEach((d) => {
        const data = d.data();
        const payedAt: Date =
          data.payedAt && typeof data.payedAt.toDate === "function"
            ? data.payedAt.toDate()
            : getOldDate();
        const isPayed = payedAt.getFullYear() > 2000 && !!data.payed;
        result.push(
          new RangeOrderedProduct(
            data.productId,
            data.productName,
            data.cost,
            data.quantity,
            data.totalCost,
            isPayed,
          ),
        );
      });
    });
    return result;
  }

  async getProductCosts(): Promise<ProductCost[]> {
    const snapshot = await getDocs(this.collections.productCosts);
    return snapshot.docs.map((d) => {
      const data = d.data();
      return new ProductCost(
        data.productId,
        data.rohkosten ?? 0,
        data.behaelter ?? 0,
        data.verpackung ?? 0,
        data.mwst ?? 0,
      );
    });
  }

  async saveProductCost(cost: ProductCost): Promise<void> {
    const ref = doc(this.collections.productCosts, cost.productId);
    await setDoc(ref, {
      productId: cost.productId,
      rohkosten: Number(cost.rohkosten) || 0,
      behaelter: Number(cost.behaelter) || 0,
      verpackung: Number(cost.verpackung) || 0,
      mwst: Number(cost.mwst) || 0,
    });
  }

  async getShipmentCost(): Promise<number> {
    const ref = doc(this.collections.settings, "global");
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      return 0;
    }
    const data = snap.data();
    return Number(data.shipmentCost) || 0;
  }

  async saveShipmentCost(amount: number): Promise<void> {
    const ref = doc(this.collections.settings, "global");
    await setDoc(ref, { shipmentCost: Number(amount) || 0 }, { merge: true });
  }

  async getDashboardPreferences(
    uid: string,
  ): Promise<DashboardPreferences | null> {
    const ref = doc(this.collections.dashboardPreferences, uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      return null;
    }
    const data = snap.data();
    const from =
      data.fromDate && typeof data.fromDate.toDate === "function"
        ? data.fromDate.toDate()
        : null;
    const to =
      data.toDate && typeof data.toDate.toDate === "function"
        ? data.toDate.toDate()
        : null;
    if (!from || !to) {
      return null;
    }
    return new DashboardPreferences(from, to);
  }

  async saveDashboardPreferences(
    uid: string,
    from: Date,
    to: Date,
  ): Promise<void> {
    const ref = doc(this.collections.dashboardPreferences, uid);
    await setDoc(ref, {
      fromDate: Timestamp.fromDate(from),
      toDate: Timestamp.fromDate(to),
    });
  }

  private _batchArray<T>(array: T[], batchSize: number): T[][] {
    const batchedArray: T[][] = [];
    for (let i = 0; i < array.length; i += batchSize) {
      batchedArray.push(array.slice(i, i + batchSize));
    }
    return batchedArray;
  }

  private async _fetchOrderBatched(
    orderIds: string[],
    uid: string,
    batchSize = BATCH_SIZE,
  ): Promise<DocumentData[]> {
    const batchedOrderIds = this._batchArray(orderIds, batchSize);
    const orderPromises = batchedOrderIds.map((batch) =>
      this._fetchOrders(batch, uid),
    );
    return (await Promise.all(orderPromises)).flat();
  }

  private async _fetchOrders(
    orderId: string | string[] = null,
    uid: string = null,
  ): Promise<DocumentData[]> {
    const ordersQuery = Queries.orders(this.collections, orderId, uid);
    const ordersSnapshot = await getDocs(ordersQuery);
    return ordersSnapshot.docs.map((doc) => doc.data());
  }

  private async _fetchOrderProductsBatched(
    orderIds: string[],
    uid: string,
    batchSize = BATCH_SIZE,
  ): Promise<DocumentData[]> {
    const batchedOrderIds = this._batchArray(orderIds, batchSize);
    const orderProductsPromises = batchedOrderIds.map((batch) =>
      this._fetchOrderProducts(batch, uid),
    );
    return (await Promise.all(orderProductsPromises)).flat();
  }

  private async _fetchOrderProducts(
    orderIds: string[],
    uid: string,
  ): Promise<DocumentData[]> {
    const orderProductsQuery = Queries.orderedProducts(
      this.collections,
      orderIds,
      uid,
    );
    const orderProductsSnapshot = await getDocs(orderProductsQuery);
    return orderProductsSnapshot.docs.map((doc) => doc.data());
  }

  private async _fetchUserOrderIds(
    queryOptions: OrderQuery,
  ): Promise<{ [uid: string]: Set<string> }> {
    const orderId: string = null;
    const uid: string = null;
    const orderProductsQuery = Queries.orderedProducts(
      this.collections,
      orderId,
      uid,
      queryOptions,
    );
    const orderProductsSnapshot = await getDocs(orderProductsQuery);
    const orderIds: { [uid: string]: Set<string> } = {};
    orderProductsSnapshot.docs.forEach((productDoc) => {
      const data = productDoc.data();
      const uid = DataToObjectMapper.toUserId(data);
      const orderId = DataToObjectMapper.toOrderId(data);
      if (!orderIds[uid]) {
        orderIds[uid] = new Set<string>();
      }
      orderIds[uid].add(orderId);
    });

    return orderIds;
  }

  private async _fetchOrderSummaries(
    orderIds: { [p: string]: Set<string> },
    queryOptions: OrderQuery,
  ) {
    const orderSummaries: OrderSummary[] = [];

    const promises = Object.entries(orderIds).map(async ([uid, orderIdSet]) => {
      const currentOrderIds = Array.from(orderIdSet);
      const ordersData = await this._fetchOrderBatched(currentOrderIds, uid);
      const currentOrderSummaries = ordersData.map((orderData) =>
        DataToObjectMapper.toOrderSummary(orderData, queryOptions),
      );
      orderSummaries.push(...currentOrderSummaries);
    });

    await Promise.all(promises);

    return orderSummaries;
  }

  private _mapOrders(
    ordersData: DocumentData[],
    orderProductsData: DocumentData[],
  ): Order[] {
    return ordersData.map((order) => {
      const productsForOrder = orderProductsData.filter(
        (product) => product.orderId === DataToObjectMapper.toOrderId(order),
      );
      return DataToObjectMapper.toOrder(order, productsForOrder);
    });
  }

  private _sortOrdersByDateDesc(orders: Order[]): Order[] {
    return orders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  private _sortOrderSummariesByDateDesc(
    orderSummaries: OrderSummary[],
  ): OrderSummary[] {
    return orderSummaries.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );
  }

  private _hasSearchString(queryOptions: OrderQuery): boolean {
    return !!queryOptions.searchString || queryOptions.searchString.length > 0;
  }

  private _filterOrderSummaries(
    orderSummaries: OrderSummary[],
    queryOptions: OrderQuery,
  ): OrderSummary[] {
    const searchString = queryOptions.searchString.toLowerCase().trim();
    return orderSummaries.filter(
      (os) =>
        os.orderId.toLowerCase().includes(searchString) ||
        os.orderContact.firstName.toLowerCase().includes(searchString) ||
        os.orderContact.lastName.toLowerCase().includes(searchString),
    );
  }

  async saveProductAsync(
    productId: string | null,
    name: string,
    cost: number,
    totalItems: number,
    imageFile: File | null,
    existingImageRef: string | null,
  ): Promise<void> {
    const productsCollection = collection(this._firestore, "products");
    const docRef = productId
      ? doc(productsCollection, productId)
      : doc(productsCollection);
    const id = docRef.id;

    let imageRef = existingImageRef ?? "";
    if (imageFile) {
      const ext = imageFile.name.split(".").pop() ?? "jpg";
      imageRef = `products/${id}-${Date.now()}.${ext}`;
      await uploadBytes(storageRef(this._storage, imageRef), imageFile);
    }

    await setDoc(docRef, {
      productId: id,
      name,
      cost,
      totalItems,
      image: imageRef,
    });
    this._products = null;
  }

  async getUsersPageAsync(
    roleFilter: string | null,
    pageSize: number,
    cursor: unknown,
  ): Promise<{ users: UserEntry[]; nextCursor: unknown; hasMore: boolean }> {
    const [profilesSnap, rolesSnap] = await Promise.all([
      getDocs(query(this.collections.userProfiles, orderBy("email"))),
      getDocs(this.collections.userRoles),
    ]);

    const roleMap = new Map<string, UserRole>();
    rolesSnap.docs.forEach((d) => {
      const role = d.data().role as UserRole;
      if (role) roleMap.set(d.id, role);
    });

    // Primary list: all users who have signed in (have a profile)
    let users: UserEntry[] = profilesSnap.docs.map((d) => ({
      uid: d.id,
      email: d.data().email ?? d.id,
      role: roleMap.get(d.id) ?? "customer",
    }));

    // Append users who have a role entry but no profile yet (signed in before deploy)
    const profileUids = new Set(profilesSnap.docs.map((d) => d.id));
    rolesSnap.docs.forEach((d) => {
      if (!profileUids.has(d.id)) {
        users.push({
          uid: d.id,
          email: d.data().email ?? d.id,
          role: (d.data().role as UserRole) ?? "customer",
        });
      }
    });

    if (roleFilter) {
      users = users.filter((u) => u.role === roleFilter);
    }

    const startIdx = (cursor as number) ?? 0;
    const page = users.slice(startIdx, startIdx + pageSize);
    const nextIdx = startIdx + pageSize;
    return {
      users: page,
      nextCursor: nextIdx < users.length ? nextIdx : null,
      hasMore: nextIdx < users.length,
    };
  }

  async updateUserRoleAsync(uid: string, role: string): Promise<void> {
    const ref = doc(this.collections.userRoles, uid);
    await setDoc(ref, { role }, { merge: true });
  }

  async deleteOrderAsync(orderId: string): Promise<void> {
    const orderProductsQuery = Queries.orderedProducts(
      this.collections,
      orderId,
    );
    const orderProductsSnapshot = await getDocs(orderProductsQuery);

    const batch = writeBatch(this._firestore);
    orderProductsSnapshot.docs.forEach((d) => batch.delete(d.ref));
    batch.delete(doc(this.collections.orders, orderId));
    await batch.commit();
  }

  async deleteProductAsync(productId: string): Promise<void> {
    const docRef = doc(collection(this._firestore, "products"), productId);
    await deleteDoc(docRef);
    this._products = null;
  }

  async listStorageImagesAsync(folder: StorageFolder): Promise<StorageImage[]> {
    const folderRef = storageRef(this._storage, folder);
    const result = await listAll(folderRef);
    const items = await Promise.all(
      result.items.map(async (itemRef) => ({
        path: itemRef.fullPath,
        name: itemRef.name,
        url: await getDownloadURL(itemRef),
      })),
    );
    return items.sort((a, b) => a.name.localeCompare(b.name));
  }

  async getReferencedImagePathsAsync(): Promise<ImageReferences> {
    const [productsSnap, orderedProductsSnap] = await Promise.all([
      getDocs(this.collections.products),
      getDocs(this.collections.orderedProducts),
    ]);

    const byCurrentProducts = new Set<string>();
    productsSnap.docs.forEach((d) => {
      const path = d.data().image as string | undefined;
      if (path) byCurrentProducts.add(path);
    });

    const byPastOrders = new Set<string>();
    orderedProductsSnap.docs.forEach((d) => {
      const path = d.data().imageReference as string | undefined;
      if (path) byPastOrders.add(path);
    });

    return { byCurrentProducts, byPastOrders };
  }

  async deleteStorageImageAsync(path: string): Promise<void> {
    await deleteObject(storageRef(this._storage, path));
  }
}
