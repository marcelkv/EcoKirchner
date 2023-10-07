import { Product } from "@/common/models/product";
import { ISimpleEvent } from "../simple-event.interface";

export interface IClientService {
  onProductsAddedToCart: ISimpleEvent;
  getProductsAsync(): Promise<Product[]>;
  setProductsImagesAsync(products: Product[]): Promise<void>;
  setProductImageAsync(product: Product): Promise<void>;
  addProductToCart(product: Product, numItems: number): Promise<void>;
}
