import React, { useCallback, useMemo, useState } from "react";

import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { Snack } from "../../types/snack-types";

import SnackbarContext from "./SnackbarContext";

import { SNACKBAR_POSITION } from "./constants";

const SnackbarProvider: React.FC = ({ children }) => {
  const [snackbar, setSnackbar] = useState<Snack>({ isOpen: false });
  const { content, isOpen, type, icon } = snackbar;

  const showSnack = useCallback((snackConfig: Partial<Snack>) => {
    setSnackbar({
      ...snackConfig,
      isOpen: true,
    });
  }, []);

  const handleClose = useCallback(() => {
    setSnackbar((snack) => ({
      ...snack,
      isOpen: false,
    }));
  }, []);

  const contextValue = useMemo(() => ({ showSnack }), [showSnack]);

  return (
    <SnackbarContext.Provider value={contextValue}>
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
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
