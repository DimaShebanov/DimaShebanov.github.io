export enum Size {
  XXS = "XXS",
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
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
  url: string;
  file?: File;
  name: string;
}

export interface RequestItem {
  // todo remove after monthly wipeout
  imageUrl?: string;
  id: string;
  colors: Array<RequestItemColor>;
  name: string;
  comments?: string;
  image: RequestItemImage;
}

export interface RequestObject {
  brandName: string;
  requestItems: Array<RequestItem>;
}
