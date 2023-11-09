import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

export class ProductDto {
  productId: string;
  productName: string;
  cost: number;
  imageReference: string;
  quantity: number;
  totalCost: number;
  totalCostString: string;
  payedAt: Timestamp;
  deliveredAt: Timestamp;
  returnedAt: Timestamp;
  payedBackAt: Timestamp;
}
