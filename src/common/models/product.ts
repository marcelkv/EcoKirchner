export class Product {
  readonly productId: string;
  readonly name: string;
  readonly cost: number;
  readonly quantity: number;
  readonly imageReference: string;
  imageUrl: string;

  constructor(
    productId: string,
    name: string,
    cost: number,
    totalItems: number,
    imageReference: string,
  ) {
    this.productId = productId;
    this.name = name;
    this.cost = cost;
    this.quantity = totalItems;
    this.imageReference = imageReference;
  }

  get costAsString(): string {
    return Number(this.cost).toFixed(2).replace(".", ",") + " €";
  }
}
