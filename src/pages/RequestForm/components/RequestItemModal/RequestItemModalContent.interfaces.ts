import { RequestItem } from "../../../../recoil/interfaces";

export interface RequestItemModalProps {
  isOpen: boolean;
  editItem?: RequestItem;
  onSave: (resultItem: RequestItem) => void;
  onClose: () => void;
}
