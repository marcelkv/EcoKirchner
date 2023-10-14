import { Product } from "@/common/models/product";
import { ISimpleEvent } from "../simple-event.interface";
import { CartItem } from "@/common/models/cart-item";

export interface IClientService {
  totalCostCart: number;
  totalCostCartAsString: string;
  cartItems: CartItem[];
  onProductsAddedToCart: ISimpleEvent;
  getProductsAsync(): Promise<Product[]>;
  setProductsImagesAsync(products: Product[]): Promise<void>;
  setProductImageAsync(product: Product): Promise<void>;
  addProductToCart(product: Product, numItems: number): Promise<void>;
  updateProductFromCart(product: Product, numItems: number): Promise<void>;
  deleteProductFromCart(product: Product): Promise<void>;
}
