import { CallbackInterface } from "recoil";

export type RecoilCallback<T = undefined> = (
  opts: CallbackInterface
) => (args: T) => void | Promise<void>;

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
  comments?: string;
}

export interface RequestObject {
  brandName: string;
  requestItems: Array<RequestItem>;
}
