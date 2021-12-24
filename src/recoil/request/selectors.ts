import { selector } from "recoil";

import { RequestItem, RequestObject } from "../interfaces";

import { requestAtom } from "./atoms";

export const requestItemsSelector = selector<Array<RequestItem>>({
  key: "requestItemsSelector",
  get: ({ get }) => get(requestAtom).requestItems,
  set: ({ set, get }, newValue) =>
    set(requestAtom, {
      ...get(requestAtom),
      requestItems: newValue,
    } as RequestObject),
});
export const requestBrandNameSelector = selector<string>({
  key: "requestBrandName",
  get: ({ get }) => get(requestAtom).brandName,
  set: ({ get, set }, newValue) =>
    set(requestAtom, {
      ...get(requestAtom),
      brandName: newValue,
    } as RequestObject),
});
