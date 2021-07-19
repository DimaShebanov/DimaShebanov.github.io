import { atom, selector } from "recoil";

import firebase from "firebase/app";

import { firestore } from "../firebase/localFirebase";

// import getRequestItem from "../components/RequestForm/utils/getRequestItem";
import { REQUESTS_COLLECTION } from "../firebase/constants";

import { BRAND_NAME_STORAGE_KEY } from "../constants";

import { RecoilCallback, RequestItem, RequestObject } from "./interfaces";
import { showSnackbar } from "./snacks";
import { SNACKBAR_TYPES } from "./snacks.interfaces";

export const requestAtom = atom<RequestObject>({
  key: "requestAtom",
  default: {
    brandName: localStorage.getItem(BRAND_NAME_STORAGE_KEY) || "",
    requestItems: [],
  } as RequestObject,
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue, oldValue) => {
        const { brandName } = newValue as RequestObject;
        const { brandName: oldBrandName } = oldValue as RequestObject;
        if (brandName !== oldBrandName) {
          localStorage.setItem(BRAND_NAME_STORAGE_KEY, brandName);
        }
      });
    },
  ],
});

export const requestLoading = atom({
  key: "requestLoading",
  default: false,
});

export const requestItemsSelector = selector<Array<RequestItem>>({
  key: "requestItemsSelector",
  get: ({ get }) => get(requestAtom).requestItems,
  set: ({ set, get }, newValue) =>
    set(requestAtom, {
      ...get(requestAtom),
      requestItems: newValue,
    } as RequestObject),
});

export const requestBrandName = selector<string>({
  key: "requestBrandName",
  get: ({ get }) => get(requestAtom).brandName,
  set: ({ get, set }, newValue) =>
    set(requestAtom, {
      ...get(requestAtom),
      brandName: newValue,
    } as RequestObject),
});

export const submitRequest: RecoilCallback<unknown> = (opts) => async () => {
  const { set, snapshot } = opts;
  try {
    const data = await snapshot.getPromise(requestAtom);
    set(requestLoading, true);
    await firestore.collection(REQUESTS_COLLECTION).doc().set({
      brandName: data.brandName,
      dateCreated: firebase.firestore.Timestamp.now(),
      items: data.requestItems,
    });

    showSnackbar(opts)({
      content: "Заказ отправлен",
      type: SNACKBAR_TYPES.success,
    });
    set(requestItemsSelector, []);
  } catch (e) {
    console.log("ERROR", e);
  } finally {
    set(requestLoading, false);
  }
};
