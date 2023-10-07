import { Product } from "@/common/models/product";

export class CartItem {
  readonly product: Product;
  numItems: number;

  constructor(product: Product, numItems: number) {
    this.product = product;
    this.numItems = numItems;
  }
}
