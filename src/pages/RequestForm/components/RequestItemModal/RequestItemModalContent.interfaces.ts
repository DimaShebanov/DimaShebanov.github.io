import { RequestItem } from "../../../../types/request-types";

export interface RequestItemModalProps {
  isOpen: boolean;
  editItem?: RequestItem;
  onSave: (resultItem: RequestItem) => void;
  onClose: () => void;
}
