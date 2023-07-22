import styled from "styled-components";
import { ColorName } from "@/styling/types";
import { color, spacing } from "@/styling/mixins";
import { down } from "styled-breakpoints";

const Section = styled.section<{ background?: ColorName }>`
  padding: ${spacing(12)} 0;
  background-color: ${(p) => color(p.background ?? "white")};

  ${down("lg")} {
    padding: ${spacing(4)} 0;
  }
`;

export default Section;
