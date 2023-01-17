import { createContext } from "react";

import { SnackbarContextType } from "./types";

const SnackbarContext = createContext<SnackbarContextType>({
  showSnack: () => null,
});

export default SnackbarContext;
