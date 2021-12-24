import { atom } from "recoil";

import { RequestObject } from "../interfaces";
import { BRAND_NAME_STORAGE_KEY } from "../../constants";

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
export const requestLoadingAtom = atom({
  key: "requestLoading",
  default: false,
});
