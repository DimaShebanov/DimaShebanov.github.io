import { RequestItem } from "../../../../types/request-types";

export interface RequestCardProps {
  item: RequestItem;
  index: number;
  onRemove: (id: string) => void;
  onEdit: (item: RequestItem) => void;
}
