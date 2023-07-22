import styled from "styled-components";
import { ColorName } from "@/styling/types";
import { COLORS } from "@/styling/constants";
import { fontSize, spacing } from "@/styling/mixins";
import { down } from "styled-breakpoints";

const SectionTitle = styled.h1<{
  color?: ColorName;
  accentColor?: ColorName;
  accentTextColor?: ColorName;
  center?: boolean;
  noMargin?: boolean;
}>`
  ${({ center = true }) => center && `text-align: center`};
  color: ${(p) => COLORS[p.color ?? "primaryBlack"]};
  margin-bottom: ${(p) => !p.noMargin && spacing(8)};
  text-transform: uppercase;

  span {
    background-color: ${(p) =>
      COLORS[p.accentColor as ColorName] ?? "transparent"};
    color: ${(p) => COLORS[p.accentTextColor ?? "primaryBlack"]};
    padding: ${spacing(1)};
  }

  ${down("lg")} {
    && {
      ${fontSize("xl")};
    }

    margin-bottom: ${(p) => !p.noMargin && spacing(3)};
    text-align: left;
    span {
      display: inline-block;
    }
  }
`;

export default SectionTitle;
