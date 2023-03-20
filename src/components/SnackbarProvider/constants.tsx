import React, { ReactNode } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

import { SNACKBAR_TYPES } from "../../types/snack-types";

export const SNACKBAR_POSITION = {
  vertical: "bottom",
  horizontal: "left",
} as const;

export const ICON_BY_TYPE: Record<SNACKBAR_TYPES, ReactNode> = {
  [SNACKBAR_TYPES.warning]: <FontAwesomeIcon icon={faExclamationCircle} />,
  [SNACKBAR_TYPES.error]: <FontAwesomeIcon icon={faTimesCircle} />,
  [SNACKBAR_TYPES.success]: <FontAwesomeIcon icon={faCheckCircle} />,
};
