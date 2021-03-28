import theme from "./theme";

export const spaceMixin = (value: number, removeUnits?: boolean) =>
  `${theme.spacing(value)}${removeUnits ? "" : "px"}`;
