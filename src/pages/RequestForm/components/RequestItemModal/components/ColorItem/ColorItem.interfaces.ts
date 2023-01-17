import { RequestItemColor } from "../../../../../../types/request-types";

export interface ColorItemProps {
  index: number;
  // onSizeRemove: (colorIndex: number, sizeIndex: number) => void;
  // onSizeAdd: (colorIndex: number) => void;
  onColorRemove: (colorIndex: number) => void;
  item: Partial<RequestItemColor>;
  getError: (name: string) => string | null;
}
