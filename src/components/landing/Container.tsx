import styled from "styled-components";
import { Theme } from "@mui/material";
import { spacing } from "@/styling/mixins";
import { down } from "styled-breakpoints";

type MaxWidth = keyof Theme["breakpoints"]["values"];

const Container = styled.div<{ maxWidth?: MaxWidth }>`
  max-width: ${(p) =>
    p.theme.breakpoints.values[p.maxWidth ?? "lg"] ??
    p.theme.breakpoints.values.lg}px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 ${spacing(3)};

  ${down("lg")} {
    padding: 0 ${spacing(2)};
  }
`;

export default Container;
