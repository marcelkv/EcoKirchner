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
  Timestamp,
  where,
  getDoc,
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
import { OrderContact } from "@/common/models/order-contact";
import OrderProduct from "@/common/models/order-product";
import { getOldDate } from "@/common/string-helper";
import { OrderSummary } from "../models/order-summary";
import { OrderSummaryQuery } from "@/common/models/order-summary-query";

export class ClientService implements IClientService {
  private readonly _firebaseApp: FirebaseApp;
  private readonly _firestore: Firestore;
  private readonly _productsCol;
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
    this._productsCol = collection(this._firestore, "products");
    this._storage = getStorage(this._firebaseApp);
  }

  async geOrderAsync(orderId: string, uid: string): Promise<Order> {
    const orderRef = doc(collection(this._firestore, "orders"), orderId);

    try {
      const orderSnapshot = await getDoc(orderRef);
      if (orderSnapshot.exists()) {
        const data = orderSnapshot.data();
        const orderProductsCol = collection(this._firestore, "orderedProducts");
        const orderProductsQuery = query(
          orderProductsCol,
          where("orderId", "==", data.orderId),
          where("uid", "==", uid)
        );
        const orderProductsSnapshot = await getDocs(orderProductsQuery);

        const orderProducts = orderProductsSnapshot.docs.map((productDoc) => {
          const productData = productDoc.data();
          return new OrderProduct(
            productData.productId,
            productData.productName,
            productData.imageReference,
            productData.cost,
            productData.totalCost,
            productData.totalCostString,
            productData.quantity,
            productData.payedAt.toDate(),
            productData.deliveredAt.toDate(),
            productData.returnedAt.toDate(),
            productData.payedBackAt.toDate()
          );
        });

        const orderContact = new OrderContact(
          data.contact.firstName,
          data.contact.lastName,
          data.contact.street,
          data.contact.zipCode,
          data.contact.city,
          data.contact.phoneNumber
        );
        return new Order(
          data.uid,
          data.orderId,
          orderProducts,
          orderContact,
          data.createdAt.toDate(),
          data.totalCost,
          data.totalCostString
        );
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }

  async getAllOrdersAsync(
    queryOptions: OrderSummaryQuery
  ): Promise<OrderSummary[]> {
    const ordersCol = collection(this._firestore, "orders");
    const orderProductsCol = collection(this._firestore, "orderedProducts");
    const startDate = Timestamp.fromDate(getOldDate());

    const allOrderIds: string[] = [];

    const q = queryOptions.payed
      ? where("payedAt", ">", startDate)
      : where("payedAt", "==", startDate);
    const orderProductsQuery = query(orderProductsCol, q);
    const orderProductsSnapshot = await getDocs(orderProductsQuery);
    const orderIds = new Set<string>();
    orderProductsSnapshot.docs.forEach((productDoc) => {
      const productData = productDoc.data();
      if (
        (productData.deliveredAt.toDate().getFullYear() > 2000 &&
          queryOptions.delivered) ||
        (productData.deliveredAt.toDate().getFullYear() === 2000 &&
          !queryOptions.delivered)
      ) {
        orderIds.add(productData.orderId);
      }
    });
    allOrderIds.push(...Array.from(orderIds));

    if (allOrderIds.length === 0) {
      return [];
    }

    const ordersQuery = query(ordersCol, where("orderId", "in", allOrderIds));
    const ordersSnapshot = await getDocs(ordersQuery);

    const orderSummaries = ordersSnapshot.docs.map((doc) => {
      const data = doc.data();

      const orderContact = new OrderContact(
        data.contact.firstName,
        data.contact.lastName,
        data.contact.street,
        data.contact.zipCode,
        data.contact.city,
        data.contact.phoneNumber
      );

      return new OrderSummary(
        doc.id,
        orderContact,
        data.createdAt.toDate(),
        queryOptions.payed,
        queryOptions.delivered
      );
    });

    return orderSummaries.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getMyOrdersAsync(uid: string): Promise<Order[]> {
    const ordersCol = collection(this._firestore, "orders");
    const ordersQuery = query(ordersCol, where("uid", "==", uid));
    const ordersSnapshot = await getDocs(ordersQuery);

    const orders = await Promise.all(
      ordersSnapshot.docs.map(async (doc) => {
        const data = doc.data();

        const orderProductsCol = collection(this._firestore, "orderedProducts");
        const orderProductsQuery = query(
          orderProductsCol,
          where("orderId", "==", data.orderId),
          where("uid", "==", uid)
        );
        const orderProductsSnapshot = await getDocs(orderProductsQuery);

        const orderProducts = orderProductsSnapshot.docs.map((productDoc) => {
          const productData = productDoc.data();
          return new OrderProduct(
            productData.productId,
            productData.productName,
            productData.imageReference,
            productData.cost,
            productData.totalCost,
            productData.totalCostString,
            productData.quantity,
            productData.payedAt.toDate(),
            productData.deliveredAt.toDate(),
            productData.returnedAt.toDate(),
            productData.payedBackAt.toDate()
          );
        });

        const orderContact = new OrderContact(
          data.contact.firstName,
          data.contact.lastName,
          data.contact.street,
          data.contact.zipCode,
          data.contact.city,
          data.contact.phoneNumber
        );
        return new Order(
          data.uid,
          data.orderId,
          orderProducts,
          orderContact,
          data.createdAt.toDate(),
          data.totalCost,
          data.totalCostString
        );
      })
    );

    return orders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getProductsAsync(forceUpdate = false): Promise<Product[]> {
    if (!forceUpdate && this._products) {
      return this._products;
    }

    const productsSnapshot = await getDocs(this._productsCol);

    this._products = productsSnapshot.docs.map((doc) => {
      const data = doc.data();
      return new Product(
        data.productId,
        data.name,
        data.cost,
        data.totalItems,
        data.image
      );
    });

    return this._products;
  }

  async setProductsImagesAsync(products: Product[]): Promise<void> {
    const imageUrlPromises = products.map((product) =>
      this._getImageDownloadUrl(product.imageReference)
    );
    const imageUrls = await Promise.all(imageUrlPromises);
    for (let i = 0; i < products.length; i++) {
      products[i].imageUrl = imageUrls[i];
    }
  }

  async setProductImageAsync(product: Product): Promise<void> {
    product.imageUrl = await this._getImageDownloadUrl(product.imageReference);
  }

  async addProductToCart(product: Product, numItems: number): Promise<void> {
    if (!product) {
      return;
    }

    const existingProduct = this._order.cartItems.find(
      (cartItem) => cartItem.product.productId === product.productId
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
      (cartItem) => cartItem.product.productId === product.productId
    );

    if (!existingProduct) {
      return;
    }

    existingProduct.numItems = clamp(numItems, 1, product.quantity);
  }

  deleteProductFromCart(product: Product): Promise<void> {
    const index = this._order.cartItems.findIndex(
      (cartItem) => cartItem.product.productId === product.productId
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
          "Product does not exist. ProductId: " + cartItem.product.productId
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
      "orderedProducts"
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
      };
      const orderedProductId = orderId + "-" + cartItem.product.productId;
      const newOrderedProductRef = doc(
        orderedProductsCollection,
        orderedProductId
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
        (product) => product.productId === cartItem.product.productId
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
}
