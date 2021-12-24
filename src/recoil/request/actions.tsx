import firebase from "firebase/app";

import { RecoilCallback, RequestItem } from "../interfaces";

import { firestore, storageRef } from "../../firebase/localFirebase";

import { showSnackbar } from "../snacks/actions";
import { SNACKBAR_TYPES } from "../snacks/interfaces";

import {
  ERRORS_COLLECTION,
  REQUESTS_COLLECTION,
} from "../../firebase/constants";

import { requestAtom, requestLoadingAtom } from "./atoms";
import { requestItemsSelector } from "./selectors";

export const actions: RecoilCallback<unknown> = (opts) => async () => {
  const { set, snapshot } = opts;
  try {
    const data = await snapshot.getPromise(requestAtom);
    set(requestLoadingAtom, true);
    const preparedItems = [] as Array<RequestItem>;

    await Promise.any(
      data.requestItems.map(async (item) => {
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
        }
      })
    );

    await firestore.collection(REQUESTS_COLLECTION).doc().set({
      brandName: data.brandName,
      dateCreated: firebase.firestore.Timestamp.now(),
      requestItems: preparedItems,
    });

    showSnackbar(opts)({
      content: "Заказ отправлен",
      type: SNACKBAR_TYPES.success,
    });
    set(requestItemsSelector, []);
  } catch (e) {
    console.log("ERROR", e.message);
    firestore.collection(ERRORS_COLLECTION).doc().set({
      message: e.message,
    });
  } finally {
    set(requestLoadingAtom, false);
  }
};
