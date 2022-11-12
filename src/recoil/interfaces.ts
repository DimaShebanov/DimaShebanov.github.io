import { CallbackInterface } from "recoil";

export type RecoilCallback<T = undefined> = (
  opts: CallbackInterface
) => (args: T) => void | Promise<void>;

export enum Size {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
  XXXL = "XXXL",
  XXXXL = "XXXXL",
}

export interface RequestItemColorSize {
  id: string;
  size: Size;
  count: string;
}

export interface RequestItemColor {
  id: string;
  sizes: Array<RequestItemColorSize>;
  color: string;
}

export interface RequestItemImage {
  file: File;
  url: string;
}

export interface RequestItem {
  id: string;
  colors: Array<RequestItemColor>;
  name: string;
  comments?: string;
  image?: RequestItemImage;
  imageUrl?: string;
}

export interface RequestObject {
  brandName: string;
  requestItems: Array<RequestItem>;
}
