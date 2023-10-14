import { IClientService } from "@/common/services/client-service.interface";
import { Product } from "@/common/models/product";
import firebaseConfig from "@/firebase/firebaseConfig";
import { FirebaseApp, initializeApp } from "firebase/app";
import {
  collection,
  Firestore,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import {
  FirebaseStorage,
  getStorage,
  getDownloadURL,
  ref as storageRef,
} from "firebase/storage";
import { CartItem } from "@/common/models/cart-item";
import { SimpleEvent } from "../simple-event";
import { clamp } from "lodash";

export class ClientService implements IClientService {
  private readonly _firebaseApp: FirebaseApp;
  private readonly _firestore: Firestore;
  private readonly _productsCol;
  private readonly _storage: FirebaseStorage;
  private _products: Product[];
  private _cartItems: CartItem[] = [];

  onProductsAddedToCart = new SimpleEvent();

  get cartItems(): CartItem[] {
    return this._cartItems.map((cartItem) => cartItem);
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

  async getProductsAsync(): Promise<Product[]> {
    if (this._products) {
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

    const existingProduct = this._cartItems.find(
      (cartItem) => cartItem.product.productId === product.productId
    );

    if (existingProduct) {
      const newTotal = existingProduct.numItems + numItems;
      existingProduct.numItems = clamp(newTotal, 1, product.quantity);
    } else {
      this._cartItems.push(new CartItem(product, numItems));
    }

    this.onProductsAddedToCart.emit();
  }

  updateProductFromCart(product: Product, numItems: number): Promise<void> {
    const existingProduct = this._cartItems.find(
      (cartItem) => cartItem.product.productId === product.productId
    );

    if (!existingProduct) {
      return;
    }

    existingProduct.numItems = clamp(numItems, 1, product.quantity);
  }

  deleteProductFromCart(product: Product): Promise<void> {
    const index = this._cartItems.findIndex(
      (cartItem) => cartItem.product.productId === product.productId
    );

    if (index === -1) {
      return;
    }

    this._cartItems.splice(index, 1);
  }

  private async _getImageDownloadUrl(imagePath: string): Promise<string> {
    const imageReference = storageRef(this._storage, imagePath);
    return await getDownloadURL(imageReference);
  }
}
