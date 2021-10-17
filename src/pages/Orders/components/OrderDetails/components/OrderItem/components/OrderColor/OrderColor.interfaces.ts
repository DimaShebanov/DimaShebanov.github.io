import { RequestItemColor } from "../../../../../../../../recoil/interfaces";

export interface OrderColorProps {
  item: RequestItemColor;
  sizes: Array<string>;
  countsMap: Record<string, string>;
}
