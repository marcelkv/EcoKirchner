import { CartItem } from "@/common/models/cart-item";
import { Contact } from "@/common/models/Contact";

export class Order {
  contact: Contact;
  cartItems: CartItem[] = [];
}
