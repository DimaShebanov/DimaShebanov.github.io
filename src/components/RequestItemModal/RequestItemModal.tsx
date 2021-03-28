import React from "react";

import { RequestItemModalProps } from "./RequestItemModalContent.interfaces";
import RequestItemModalContent from "./RequestItemModalContent";

const RequestItemModal: React.FC<RequestItemModalProps> = (props) => {
  const { isOpen } = props;
  return isOpen ? <RequestItemModalContent {...props} /> : null;
};

export default RequestItemModal;
