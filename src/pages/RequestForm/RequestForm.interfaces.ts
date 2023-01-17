import { RequestItem } from "../../types/request-types";

export interface RequestFormValues {
  requests: Array<RequestItem>;
}

export interface RequestItemDrawerState {
  isOpen: boolean;
  editItem?: RequestItem;
}
