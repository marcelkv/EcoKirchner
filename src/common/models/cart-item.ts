import { Product } from "@/common/models/product";

export class CartItem {
  readonly product: Product;
  numItems: number;

  get cost(): number {
    const totalCost = this.product.cost * this.numItems;
    return parseFloat(totalCost.toFixed(2));
  }

  get costAsString(): string {
    return this.cost.toFixed(2).replace(".", ",") + " €";
  }

  constructor(product: Product, numItems: number) {
    this.product = product;
    this.numItems = numItems;
  }
}
