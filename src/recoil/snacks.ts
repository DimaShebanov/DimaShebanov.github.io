import { ReactNode } from "react";

import { atom } from "recoil";

import { RecoilCallback } from "./interfaces";
import { SNACKBAR_TYPES, SnacksAtom } from "./snacks.interfaces";

export const snackbarAtom = atom<SnacksAtom>({
  key: "snackbarAtom",
  default: {
    isOpen: false,
  },
});

export const showSnackbar: RecoilCallback<{
  type: SNACKBAR_TYPES;
  content: ReactNode;
  icon?: ReactNode;
}> = ({ set }) => ({ content, type, icon }) => {
  set(snackbarAtom, {
    isOpen: true,
    content,
    type,
    icon,
  });
};

export const hideSnackbar: RecoilCallback<unknown> = ({
  set,
  snapshot,
}) => async () => {
  set(snackbarAtom, {
    ...(await snapshot.getPromise(snackbarAtom)),
    isOpen: false,
  });
};
