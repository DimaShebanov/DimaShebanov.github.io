import { MutationFunction } from "react-query";
import firebase from "firebase";

import { RequestObject } from "../interfaces";
import { RequestItem } from "../../types/request-types";
import { firestore, storageRef } from "../../firebase/localFirebase";
import {
  ERRORS_COLLECTION,
  REQUESTS_COLLECTION,
} from "../../firebase/constants";

export const sendRequestMutation: MutationFunction<
  void,
  RequestObject
> = async (request) => {
  try {
    const preparedItems = [] as Array<RequestItem>;

    await Promise.all(
      request.requestItems.map(async (item) => {
        const { image, ...restItem } = item;
        const { file, url } = image || {};

        if (file && url) {
          const firebaseUrl = await storageRef
            .child(file.name)
            .put(file)
            .then((imgSnap) => imgSnap.ref.getDownloadURL());

          URL.revokeObjectURL(url);

          preparedItems.push({
            ...restItem,
            imageUrl: firebaseUrl,
          });
        } else {
          preparedItems.push(restItem);
        }
      })
    );

    await firestore.collection(REQUESTS_COLLECTION).doc().set({
      brandName: request.brandName,
      dateCreated: firebase.firestore.Timestamp.now(),
      requestItems: preparedItems,
    });
  } catch (e) {
    console.log("ERROR", e.message);
    firestore.collection(ERRORS_COLLECTION).doc().set({
      message: e.message,
    });
  }
};
