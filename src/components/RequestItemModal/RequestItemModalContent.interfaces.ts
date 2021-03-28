import { RequestItem } from "../RequestForm/RequestForm.interfaces";

export interface RequestItemModalProps {
  isOpen: boolean;
  onSubmit: (resultItem: RequestItem) => void;
  onClose: () => void;
}
