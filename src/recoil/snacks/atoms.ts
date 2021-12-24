import { atom } from "recoil";

import { SnacksAtom } from "./interfaces";

export const snackbarAtom = atom<SnacksAtom>({
  key: "snackbarAtom",
  default: {
    isOpen: false,
  },
});
