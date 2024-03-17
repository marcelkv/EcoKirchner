import {
  DocumentData,
  query,
  Query,
  QueryFieldFilterConstraint,
  where,
} from "firebase/firestore";
import { Collections } from "@/common/services/client-service";

export class Queries {
  static orderedProducts(
    collections: Collections,
    orderId: string | string[],
    uid: string
  ): Query<DocumentData, DocumentData> {
    const queryConditions: QueryFieldFilterConstraint[] = [];

    if (!Array.isArray(orderId)) {
      queryConditions.push(where("orderId", "==", orderId));
    } else if (orderId.length === 1) {
      queryConditions.push(where("orderId", "==", orderId[0]));
    } else {
      queryConditions.push(where("orderId", "in", orderId));
    }

    if (uid) {
      queryConditions.push(where("uid", "==", uid));
    }

    return query(collections.orderedProducts, ...queryConditions);
  }

  static orders(collections: Collections, uid: string): Query {
    return query(collections.orders, where("uid", "==", uid));
  }
}
