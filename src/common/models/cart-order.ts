import { CartOrderItem } from "@/common/models/cart-order-item";
import { CartOrderContact } from "@/common/models/cart-order-contact";

export class CartOrder {
  contact: CartOrderContact;
  cartItems: CartOrderItem[] = [];
}
