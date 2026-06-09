export class RangeOrderedProduct {
  productId: string;
  productName: string;
  cost: number;
  quantity: number;
  totalCost: number;
  isPayed: boolean;

  constructor(
    productId: string,
    productName: string,
    cost: number,
    quantity: number,
    totalCost: number,
    isPayed: boolean,
  ) {
    this.productId = productId;
    this.productName = productName;
    this.cost = cost;
    this.quantity = quantity;
    this.totalCost = totalCost;
    this.isPayed = isPayed;
  }
}
