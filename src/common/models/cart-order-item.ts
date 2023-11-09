import { Product } from "@/common/models/product";
import { calculateCost, costAsString } from "@/common/currency-helper";

export class CartOrderItem {
  readonly product: Product;
  numItems: number;

  get cost(): number {
    return calculateCost(this.numItems, this.product.cost);
  }

  get costAsString(): string {
    return costAsString(this.cost);
  }

  constructor(product: Product, numItems: number) {
    this.product = product;
    this.numItems = numItems;
  }
}
