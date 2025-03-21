import { IClientService } from "@/common/services/client-service.interface";
import { Product } from "@/common/models/product";
import firebaseConfig from "@/firebase/firebaseConfig";
import { FirebaseApp, initializeApp } from "firebase/app";
import {
  collection,
  doc,
  Firestore,
  getDocs,
  getFirestore,
  query,
  runTransaction,
  serverTimestamp,
  Transaction,
  DocumentData,
  CollectionReference,
  Timestamp,
  where,
} from "firebase/firestore";
import {
  FirebaseStorage,
  getDownloadURL,
  getStorage,
  ref as storageRef,
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

export class Collections {
  readonly products: CollectionReference<DocumentData, DocumentData>;
  readonly orders: CollectionReference<DocumentData, DocumentData>;
  readonly orderedProducts: CollectionReference<DocumentData, DocumentData>;
  readonly paymentData: CollectionReference<DocumentData, DocumentData>;

  constructor(firestore: Firestore) {
    this.products = collection(firestore, "products");
    this.orders = collection(firestore, "orders");
    this.orderedProducts = collection(firestore, "orderedProducts");
    this.paymentData = collection(firestore, "paymentData");
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

  async buyAsync(uid: string): Promise<boolean> {
    if (this._order.cartItems.length === 0 || !this._order.contact) {
      return false;
    }

    let result = true;
    try {
      await runTransaction(this._firestore, async (transaction) => {
        await this._updateProductsQuantities(transaction);
        this._createNewOrder(uid, transaction);
        this._order.cartItems = [];
        this._order.contact = null;
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      result = false;
    }

    await this.getProductsAsync(true);
    return result;
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

  private _createNewOrder(uid: string, transaction: Transaction) {
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
}
