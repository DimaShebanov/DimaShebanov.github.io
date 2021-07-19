import { selector } from "recoil";

import { sortBy } from "lodash";

import dateformat from "dateformat";

import { firestore } from "../firebase/localFirebase";
import { REQUESTS_COLLECTION } from "../firebase/constants";

import { FirebaseOrder, OrdersState } from "./orders.interfaces";

export const ordersState = selector<OrdersState>({
  key: "orderState",
  // eslint-disable-next-line consistent-return
  get: async () => {
    const orders = (
      await firestore.collection(REQUESTS_COLLECTION).get()
    ).docs.map((snapshot) => {
      const data = snapshot.data() as FirebaseOrder;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      console.log("data.toDate()", data.dateCreated.toMillis());
      return {
        ...data,
        id: snapshot.id,
        dateCreated: data.dateCreated?.seconds,
      };
    });

    console.log("orders", orders);

    return sortBy(orders, "dateCreated").map((order) => ({
      ...order,
      dateCreated: dateformat(order.dateCreated, "dd.mm.yyyy HH:MM"),
    }));
  },
});
