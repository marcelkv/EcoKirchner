import { Product } from "@/common/models/product";

export class CartItem {
  readonly product: Product;
  numItems: number;

  get costAsString(): string {
    const totalCost = this.product.cost * this.numItems;
    return Number(totalCost).toFixed(2).replace(".", ",") + " €";
  }

  constructor(product: Product, numItems: number) {
    this.product = product;
    this.numItems = numItems;
  }
}
