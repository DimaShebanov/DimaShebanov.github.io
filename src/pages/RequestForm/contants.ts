import { RequestObject, Size } from "../../types/request-types";

import { RequestItemDrawerState } from "./RequestForm.interfaces";

export const SIZES = Object.values(Size);

export const INITIAL_DRAWER_STATE: RequestItemDrawerState = {
  isOpen: false,
};

export const DEFAULT_REQUEST: RequestObject = {
  brandName: "",
  requestItems: [],
};
