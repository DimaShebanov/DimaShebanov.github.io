import { RequestItemColor } from "../../../RequestForm/RequestForm.interfaces";

export interface ColorItemProps {
  index: number;
  onSizeRemove: (colorIndex: number, sizeIndex: number) => void;
  onSizeAdd: (colorIndex: number) => void;
  onColorRemove: (colorIndex: number) => void;
  color: RequestItemColor;
}
