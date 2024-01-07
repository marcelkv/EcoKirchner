import { OrderContact } from "@/common/models/order-contact";
import { getDateFormatted_1 } from "@/common/string-helper";

export class OrderSummary {
  orderId: string;
  orderContact: OrderContact;
  createdAt: Date;
  payed: boolean;
  delivered: boolean;

  constructor(
    orderId: string,
    orderContact: OrderContact,
    createdAt: Date,
    payed: boolean,
    delivered: boolean
  ) {
    this.orderId = orderId;
    this.orderContact = orderContact;
    this.createdAt = createdAt;
    this.payed = payed;
    this.delivered = delivered;
  }

  get createdAtAsString(): string {
    return getDateFormatted_1(this.createdAt);
  }
}
