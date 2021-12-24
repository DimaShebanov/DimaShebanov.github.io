import { ReactNode } from "react";

import { RecoilCallback } from "../interfaces";

import { snackbarAtom } from "./atoms";
import { SNACKBAR_TYPES } from "./interfaces";

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
