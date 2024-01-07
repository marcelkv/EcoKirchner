export class OrderSummaryQuery {
  payed: boolean;
  delivered: boolean;

  constructor(payed: boolean, delivered: boolean) {
    this.payed = payed;
    this.delivered = delivered;
  }
}
