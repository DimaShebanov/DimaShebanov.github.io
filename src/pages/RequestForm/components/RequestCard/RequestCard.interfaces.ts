import { RequestItem } from "../../../../recoil/interfaces";

export interface RequestCardProps {
  item: RequestItem;
  index: number;
  onRemove: (id: string) => void;
  onEdit: (item: RequestItem) => void;
}
