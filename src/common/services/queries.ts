import {
  DocumentData,
  query,
  Query,
  QueryFieldFilterConstraint,
  where,
} from "firebase/firestore";
import { Collections } from "@/common/services/client-service";
import { OrderQuery } from "@/common/models/order-query";

export class Queries {
  static orderedProducts(
    collections: Collections,
    orderId: string | string[] = null,
    uid: string = null,
    queryOptions: OrderQuery = null
  ): Query<DocumentData, DocumentData> {
    const queryConditions: QueryFieldFilterConstraint[] = [];

    const orderIdQuery = this._getOrderIdQuery(orderId);
    if (orderIdQuery) {
      queryConditions.push(orderIdQuery);
    }

    if (uid) {
      queryConditions.push(where("uid", "==", uid));
    }

    if (queryOptions) {
      queryConditions.push(where("payed", "==", queryOptions.payed));
      queryConditions.push(where("delivered", "==", queryOptions.delivered));
    }

    return query(collections.orderedProducts, ...queryConditions);
  }

  static orders(
    collections: Collections,
    orderId: string | string[] = null,
    uid: string = null
  ): Query {
    const queryConditions: QueryFieldFilterConstraint[] = [];

    if (uid) {
      queryConditions.push(where("uid", "==", uid));
    }

    const orderIdQuery = this._getOrderIdQuery(orderId);
    if (orderIdQuery) {
      queryConditions.push(orderIdQuery);
    }

    return query(collections.orders, ...queryConditions);
  }

  private static _getOrderIdQuery(
    orderId: string | string[] = null
  ): QueryFieldFilterConstraint {
    if (orderId && !Array.isArray(orderId)) {
      return where("orderId", "==", orderId);
    } else if (Array.isArray(orderId) && orderId.length === 1) {
      return where("orderId", "==", orderId[0]);
    } else if (Array.isArray(orderId) && orderId.length > 1) {
      return where("orderId", "in", orderId);
    }
    return null;
  }
}
