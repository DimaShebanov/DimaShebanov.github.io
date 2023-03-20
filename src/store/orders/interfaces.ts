import { RequestObject } from "../../types/request-types";

export interface FirebaseOrder extends RequestObject {
  dateCreated: {
    seconds: number;
  };
  lastVisited: {
    seconds: number;
  };
}

export interface Order extends RequestObject {
  dateCreated: string;
  lastVisited: number;
  id: string;
}

export type OrdersState = Array<Order>;
