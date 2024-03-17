export class OrderQuery {
  payed: boolean;
  delivered: boolean;
  searchString: string;

  constructor(payed: boolean, delivered: boolean, searchString: string = null) {
    this.payed = payed;
    this.delivered = delivered;
    this.searchString = searchString;
  }
}
