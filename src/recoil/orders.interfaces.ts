import { RequestObject } from "./interfaces";

export interface FirebaseOrder extends RequestObject {
  dateCreated: {
    seconds: number;
  };
}

export interface Order extends RequestObject {
  dateCreated: string;
  id: string;
}

export type OrdersState = Array<Order>;
