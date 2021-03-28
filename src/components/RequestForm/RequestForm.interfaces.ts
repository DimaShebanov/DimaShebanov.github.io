export interface RequestItemColorSize {
  id: string;
  size: string;
  count: string;
}

export interface RequestItemColor {
  id: string;
  sizes: Array<RequestItemColorSize>;
  color: string;
  // count: string;
}

export interface RequestItem {
  id: string;
  colors: Array<RequestItemColor>;
  name: string;
}

export interface RequestFormValues {
  requests: Array<RequestItem>;
}

export interface RequestItemDrawerState {
  isOpen: boolean;
  editItem: RequestItem | null;
}
