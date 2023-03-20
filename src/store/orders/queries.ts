import { QueryFunction } from "react-query";

import { orderBy } from "lodash";

import dateformat from "dateformat";

import { queryKeys } from "../queryKeys";

import { firestore } from "../../firebase/localFirebase";
import { REQUESTS_COLLECTION } from "../../firebase/constants";

import toMilliseconds from "../../utils/toMilliseconds";

import { FirebaseOrder, OrdersState } from "./interfaces";
import { prepareRequestItems } from "./utils/prepareRequestItems";

export const ordersQuery: QueryFunction<
  OrdersState,
  [queryKeys.ORDERS]
> = async () => {
  const orders = (
    await firestore.collection(REQUESTS_COLLECTION).get()
  ).docs.map((snapshot) => {
    const data = snapshot.data() as FirebaseOrder;
    const requestItems = prepareRequestItems(data?.requestItems);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return {
      ...data,
      id: snapshot.id,
      requestItems,
      lastVisited: toMilliseconds(data.lastVisited?.seconds),
      dateCreated: toMilliseconds(data.dateCreated?.seconds),
    };
  });

  return orderBy(orders, "dateCreated", "desc").map((order) => ({
    ...order,
    dateCreated: dateformat(order.dateCreated, "dd.mm.yyyy HH:MM"),
  }));
};
