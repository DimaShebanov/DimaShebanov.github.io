import { ReactNode } from "react";

export enum SNACKBAR_TYPES {
  error = "error",
  success = "success",
  warning = "warning",
}

export interface Snack {
  isOpen: boolean;
  content?: ReactNode;
  type?: SNACKBAR_TYPES;
  icon?: ReactNode;
}
