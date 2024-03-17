import { Product } from "@/common/models/product";
import { DocumentData } from "firebase/firestore";
import { BankingData } from "@/common/models/banking-data";
import OrderProduct from "@/common/models/order-product";
import { Order } from "@/common/models/order";
import { OrderContact } from "@/common/models/order-contact";
import { OrderSummary } from "@/common/models/order-summary";
import { OrderQuery } from "@/common/models/order-query";

export class DataToObjectMapper {
  static toBankingData(data: DocumentData): BankingData {
    return new BankingData(data.iban, data.bic, data.email, data.phone);
  }

  static toProduct(productData: DocumentData): Product {
    return new Product(
      productData.productId,
      productData.name,
      productData.cost,
      productData.totalItems,
      productData.image
    );
  }

  static toOrderProduct(orderProductData: DocumentData): OrderProduct {
    return new OrderProduct(
      orderProductData.productId,
      orderProductData.productName,
      orderProductData.imageReference,
      orderProductData.cost,
      orderProductData.totalCost,
      orderProductData.totalCostString,
      orderProductData.quantity,
      orderProductData.payedAt.toDate(),
      orderProductData.deliveredAt.toDate(),
      orderProductData.returnedAt.toDate(),
      orderProductData.payedBackAt.toDate(),
      orderProductData.payed,
      orderProductData.delivered,
      orderProductData.returned,
      orderProductData.payedBack
    );
  }

  static toOrderId(orderData: DocumentData): string {
    return orderData.orderId;
  }

  static toUserId(orderData: DocumentData): string {
    return orderData.uid;
  }

  static toOrder(
    orderData: DocumentData,
    orderProductsData: DocumentData[]
  ): Order {
    const orderProducts = orderProductsData.map((data) =>
      DataToObjectMapper.toOrderProduct(data)
    );
    return new Order(
      orderData.uid,
      orderData.orderId,
      orderProducts,
      DataToObjectMapper.toOrderContact(orderData.contact),
      orderData.createdAt.toDate(),
      orderData.totalCost,
      orderData.totalCostString
    );
  }

  static toOrderContact(contactData: DocumentData): OrderContact {
    return new OrderContact(
      contactData.firstName,
      contactData.lastName,
      contactData.street,
      contactData.zipCode,
      contactData.city,
      contactData.phoneNumber
    );
  }

  static toOrderSummary(
    orderData: DocumentData,
    queryOptions: OrderQuery
  ): OrderSummary {
    return new OrderSummary(
      orderData.orderId,
      DataToObjectMapper.toOrderContact(orderData.contact),
      orderData.createdAt.toDate(),
      queryOptions.payed,
      queryOptions.delivered
    );
  }
}
