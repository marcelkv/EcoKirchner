import { Product } from "@/common/models/product";
import { ISimpleEvent } from "../simple-event.interface";
import { CartOrderItem } from "@/common/models/cart-order-item";
import { CartOrderContact } from "@/common/models/cart-order-contact";
import { Order } from "@/common/models/order";
import { OrderSummary } from "@/common/models/order-summary";
import { OrderQuery } from "@/common/models/order-query";
import { BankingData } from "@/common/models/banking-data";

export interface IClientService {
  backPath: string;
  backFilterIndex: number;
  totalCostCart: number;
  totalCostCartAsString: string;
  cartItems: CartOrderItem[];
  contact: CartOrderContact;
  onProductsAddedToCart: ISimpleEvent;
  currentOrderId: string;
  getProductsAsync(): Promise<Product[]>;
  setProductImageAsync(product: Product): Promise<void>;
  addProductToCart(product: Product, numItems: number): Promise<void>;
  addContactToCart(contact: CartOrderContact): Promise<void>;
  updateProductFromCart(product: Product, numItems: number): Promise<void>;
  deleteProductFromCart(product: Product): Promise<void>;
  buyAsync(uid: string): Promise<boolean>;
  getChangedProducts(): {
    deleted: Product[];
    modified: Product[];
  };
  getOrdersAsync(uid: string, orderId?: string): Promise<Order[]>;
  getAllOrdersAsync(queryOptions: OrderQuery): Promise<OrderSummary[]>;
  getTotalOrderedProducts(): Promise<string[]>;
  getBankingData(): Promise<BankingData>;
  updateOrder(order: Order): Promise<boolean>;
}
