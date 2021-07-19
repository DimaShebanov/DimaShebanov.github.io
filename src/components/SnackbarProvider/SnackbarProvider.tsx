import React from "react";
import { useRecoilCallback, useRecoilValue } from "recoil";

import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { hideSnackbar, snackbarAtom } from "../../recoil/snacks";

import { SNACKBAR_POSITION } from "./constants";

const SnackbarProvider: React.FC = ({ children }) => {
  const { content, isOpen, type, icon } = useRecoilValue(snackbarAtom);

  const handleClose = useRecoilCallback(hideSnackbar);

  return (
    <>
      <Snackbar
        open={isOpen}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={SNACKBAR_POSITION}
      >
        <Alert color={type} variant="filled" {...(!!icon && { icon })}>
          {content}
        </Alert>
      </Snackbar>
      {children}
    </>
  );
};

export default SnackbarProvider;
