import firebase from "firebase";

import { RecoilCallback } from "../interfaces";
import { firestore } from "../../firebase/localFirebase";
import { REQUESTS_COLLECTION } from "../../firebase/constants";

export const updateLastVisitedQuery: RecoilCallback<string> = () => (
  id: string
) =>
  firestore.collection(REQUESTS_COLLECTION).doc(id).update({
    lastVisited: firebase.firestore.Timestamp.now(),
  });
