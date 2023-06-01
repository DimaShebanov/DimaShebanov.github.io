import firebase from "firebase";

import { firestore } from "../firebase/localFirebase";
import { ERRORS_COLLECTION } from "../firebase/constants";

export const handleError = (err: Error) =>
  firestore.collection(ERRORS_COLLECTION).doc().set({
    message: err.message,
    stack: err.stack,
    dateCreated: firebase.firestore.Timestamp.now(),
  });
