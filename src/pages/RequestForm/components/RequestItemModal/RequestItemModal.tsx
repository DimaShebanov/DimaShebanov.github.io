import React from "react";

import { Root } from "./RequestItemModalContent.styled";
import { RequestItemModalProps } from "./RequestItemModalContent.interfaces";
import RequestItemModalContent from "./RequestItemModalContent";

const RequestItemModal: React.FC<RequestItemModalProps> = (props) => {
  const { isOpen, onClose } = props;
  return (
    <Root open={isOpen} onClose={onClose}>
      {isOpen && <RequestItemModalContent {...props} />}
    </Root>
  );
};

export default RequestItemModal;
