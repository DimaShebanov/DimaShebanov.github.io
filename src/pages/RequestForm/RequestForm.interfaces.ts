import { RequestItem } from "../../recoil/interfaces";

export interface RequestFormValues {
  requests: Array<RequestItem>;
}

export interface RequestItemDrawerState {
  isOpen: boolean;
  editItem?: RequestItem;
}
