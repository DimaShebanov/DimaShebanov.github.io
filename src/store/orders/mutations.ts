import { MutationFunction } from "react-query";

import firebase from "firebase";

import { firestore } from "../../firebase/localFirebase";

import { REQUESTS_COLLECTION } from "../../firebase/constants";

import { queryClient } from "../queryClient";
import { queryKeys } from "../queryKeys";

import toMilliseconds from "../../utils/toMilliseconds";

import { Order, OrdersState } from "./interfaces";

export const updateLastVisitedMutation: MutationFunction<
  void,
  {
    id: Order["id"];
  }
> = async ({ id }) => {
  const lastVisitedDate = firebase.firestore.Timestamp.now();

  await firestore.collection(REQUESTS_COLLECTION).doc(id).update({
    lastVisited: lastVisitedDate,
  });

  queryClient.setQueryData([queryKeys.ORDERS], (orders) =>
    (orders as OrdersState).map((order) =>
      order?.id === id
        ? { ...order, lastVisited: toMilliseconds(lastVisitedDate?.seconds) }
        : order
    )
  );
};
