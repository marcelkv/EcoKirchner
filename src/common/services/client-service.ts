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

export class ClientService implements IClientService {
  private readonly _firebaseApp: FirebaseApp;
  private readonly _firestore: Firestore;
  private readonly _productsCol;
  private readonly _storage: FirebaseStorage;
  private _products: Product[];
  private _cartItems: CartItem[] = [];

  onProductsAddedToCart = new SimpleEvent();

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
      existingProduct.numItems += numItems;
    } else {
      this._cartItems.push(new CartItem(product, numItems));
    }
    this.onProductsAddedToCart.emit();
  }

  private async _getImageDownloadUrl(imagePath: string): Promise<string> {
    const imageReference = storageRef(this._storage, imagePath);
    return await getDownloadURL(imageReference);
  }
}
