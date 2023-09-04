import { firestore } from "../firebase/localFirebase";
import { LOGS_COLLECTION } from "../firebase/constants";

const todayString = new Date().toLocaleDateString().replaceAll("/", "-");

export const log = (...args: Array<string | number>) => {
  const key = `${new Date().toLocaleTimeString()}:${Date.now()}`;
  firestore
    .collection(LOGS_COLLECTION)
    .doc(todayString)
    .update({
      [key]: JSON.stringify(args),
    });
};
