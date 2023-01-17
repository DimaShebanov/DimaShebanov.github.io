import { Snack } from "../../types/snack-types";

export interface SnackbarContextType {
  showSnack: (config: Partial<Snack>) => void;
}
