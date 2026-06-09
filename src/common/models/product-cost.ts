export class ProductCost {
  productId: string;
  rohkosten: number;
  behaelter: number;
  verpackung: number;
  mwst: number;

  constructor(
    productId: string,
    rohkosten = 0,
    behaelter = 0,
    verpackung = 0,
    mwst = 0,
  ) {
    this.productId = productId;
    this.rohkosten = rohkosten;
    this.behaelter = behaelter;
    this.verpackung = verpackung;
    this.mwst = mwst;
  }
}
