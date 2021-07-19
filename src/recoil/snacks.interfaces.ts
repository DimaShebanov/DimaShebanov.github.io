import { ReactNode } from "react";

export enum SNACKBAR_TYPES {
  error = "error",
  success = "success",
  warning = "warning",
}

export interface SnacksAtom {
  isOpen: boolean;
  content?: ReactNode;
  type?: SNACKBAR_TYPES;
  icon?: ReactNode;
}
