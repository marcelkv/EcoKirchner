import { getDateFormatted_2 } from "@/common/string-helper";
import { calculateCost, costAsString } from "@/common/currency-helper";
import { Product } from "./product";

export default class {
  private _payedAt: Date;
  private _deliveredAt: Date;
  private _returnedAt: Date;
  private _payedBackAt: Date;
  private readonly _cost: number;
  private _totalCost: number;
  private _totalCostString: string;
  private _quantity: number;
  private _product: Product = null;

  readonly productId: string;
  readonly productName: string;
  readonly imageReference: string;

  get quantity(): number {
    return this._quantity;
  }

  get totalCostString(): string {
    return this._totalCostString;
  }

  get totalCost(): number {
    return this._totalCost;
  }

  get cost(): number {
    return this._cost;
  }

  get isPayed(): boolean {
    return this._isDateSet(this._payedAt);
  }

  get isDelivered(): boolean {
    return this._isDateSet(this._deliveredAt);
  }

  get isReturned(): boolean {
    return this._isDateSet(this._returnedAt);
  }

  get isPayedBack(): boolean {
    return this._isDateSet(this._payedBackAt);
  }

  get payedAt(): Date {
    return this._payedAt;
  }

  get payedAtAsString(): string {
    return getDateFormatted_2(this._payedAt);
  }

  get deliveredAt(): Date {
    return this._deliveredAt;
  }

  get deliveredAtAsString(): string {
    return getDateFormatted_2(this._deliveredAt);
  }

  get product(): Product {
    if (!this._product) {
      this._product = new Product(
        this.productId,
        this.productName,
        this.cost,
        this._quantity,
        this.imageReference
      );
    }

    return this._product;
  }

  constructor(
    productId: string,
    productName: string,
    imageReference: string,
    cost: number,
    totalCost: number,
    totalCostAsString: string,
    quantity: number,
    payedAt: Date,
    deliveredAt: Date,
    returnedAt: Date,
    payedBackAt: Date
  ) {
    this.productId = productId;
    this.productName = productName;
    this.imageReference = imageReference;
    this._cost = cost;
    this._quantity = quantity;
    this._totalCost = totalCost;
    this._totalCostString = totalCostAsString;
    this._payedAt = payedAt;
    this._deliveredAt = deliveredAt;
    this._returnedAt = returnedAt;
    this._payedBackAt = payedBackAt;
  }

  setPayed(): void {
    this._payedAt = new Date();
  }

  setDelivered(): void {
    this._deliveredAt = new Date();
  }

  setReturned(): void {
    this._returnedAt = new Date();
  }

  setPayedBack(): void {
    this._payedBackAt = new Date();
  }

  updateQuantity(quantity: number): void {
    if (quantity < 1 || quantity >= this._quantity) {
      return;
    }

    this._quantity = quantity;
    this._totalCost = calculateCost(this._quantity, this._cost);
    this._totalCostString = costAsString(this._totalCost);
  }

  private _isDateSet(date: Date): boolean {
    return date.getFullYear() > 2000;
  }
}
