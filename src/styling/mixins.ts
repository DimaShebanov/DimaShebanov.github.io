import { css } from "styled-components";

import { ColorName, FontSizeName } from "@/styling/types";

import theme from "./theme";
import { COLORS, FONT_SIZE } from "./constants";

export const spacing = (value: number, removeUnits?: boolean) =>
  `${theme.spacing(value)}${removeUnits ? "" : "px"}`;

export const color = (colorName: ColorName) => COLORS[colorName];

export const fontSize = (size: FontSizeName) =>
  css`
    font-size: ${FONT_SIZE[size]};
  `;
