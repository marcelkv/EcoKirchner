import OrderProduct from "@/common/models/order-product";
import { OrderContact } from "@/common/models/order-contact";
import { getDateFormatted_1 } from "@/common/string-helper";

export class Order {
  readonly uid: string;
  readonly orderId: string;
  readonly _products: OrderProduct[];
  readonly contact: OrderContact;
  readonly createdAt: Date;

  private _totalCost: number;
  private _totalCostString: string;

  get createdAtAsString(): string {
    return getDateFormatted_1(this.createdAt);
  }

  get products(): OrderProduct[] {
    return this._products.map((orderProduct) => orderProduct);
  }

  get totalCostString(): string {
    return this._totalCostString;
  }

  constructor(
    uid: string,
    orderId: string,
    orderProducts: OrderProduct[],
    contact: OrderContact,
    createdAt: Date,
    totalCost: number,
    totalCostString: string
  ) {
    this.uid = uid;
    this.orderId = orderId;
    this._products = orderProducts;
    this.contact = contact;
    this.createdAt = createdAt;
    this._totalCost = totalCost;
    this._totalCostString = totalCostString;
  }
}
