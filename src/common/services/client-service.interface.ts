import { Product } from "@/common/models/product";
import { ISimpleEvent } from "../simple-event.interface";
import { CartItem } from "@/common/models/cart-item";
import { Contact } from "@/common/models/Contact";

export interface IClientService {
  totalCostCart: number;
  totalCostCartAsString: string;
  cartItems: CartItem[];
  contact: Contact;
  onProductsAddedToCart: ISimpleEvent;
  getProductsAsync(): Promise<Product[]>;
  setProductsImagesAsync(products: Product[]): Promise<void>;
  setProductImageAsync(product: Product): Promise<void>;
  addProductToCart(product: Product, numItems: number): Promise<void>;
  addContactToCart(contact: Contact): Promise<void>;
  updateProductFromCart(product: Product, numItems: number): Promise<void>;
  deleteProductFromCart(product: Product): Promise<void>;
  buy(): Promise<void>;
}
