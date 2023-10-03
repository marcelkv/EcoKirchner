import { Product } from "@/common/models/product";

export interface IClientService {
  getProductsAsync(): Promise<Product[]>;
  setProductsImagesAsync(products: Product[]): Promise<void>;
  setProductImageAsync(product: Product): Promise<void>;
}
