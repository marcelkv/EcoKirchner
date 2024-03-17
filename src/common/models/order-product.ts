import { getDateFormatted_2 } from "@/common/string-helper";
import { calculateCost, costAsString } from "@/common/currency-helper";
import { Product } from "./product";

export default class {
  private _payedAt: Date;
  private _deliveredAt: Date;
  private _returnedAt: Date;
  private _payedBackAt: Date;

  private _payed: boolean;
  private _delivered: boolean;
  private _returned: boolean;
  private _payedBack: boolean;

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
    return this._isDateSet(this._payedAt) && this._payed;
  }

  get isDelivered(): boolean {
    return this._isDateSet(this._deliveredAt) && this._delivered;
  }

  get isReturned(): boolean {
    return this._isDateSet(this._returnedAt) && this._returned;
  }

  get isPayedBack(): boolean {
    return this._isDateSet(this._payedBackAt) && this._payedBack;
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
    payedBackAt: Date,
    payed: boolean,
    delivered: boolean,
    returned: boolean,
    payedBack: boolean
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
    this._payed = !!payed;
    this._delivered = !!delivered;
    this._returned = !!returned;
    this._payedBack = !!payedBack;
  }

  setPayed(): void {
    this._payedAt = new Date();
    this._payed = true;
  }

  setDelivered(): void {
    this._deliveredAt = new Date();
    this._delivered = true;
  }

  setReturned(): void {
    this._returnedAt = new Date();
    this._returned = true;
  }

  setPayedBack(): void {
    this._payedBackAt = new Date();
    this._payedBack = true;
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
