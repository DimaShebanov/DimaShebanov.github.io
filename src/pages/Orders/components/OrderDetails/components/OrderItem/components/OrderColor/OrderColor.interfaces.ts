import { RequestItemColor } from "../../../../../../../../types/request-types";

export interface OrderColorProps {
  item: RequestItemColor;
  sizes: Array<string>;
  countsMap: Record<string, string>;
}
