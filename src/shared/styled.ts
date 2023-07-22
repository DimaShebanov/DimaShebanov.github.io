import styled from "styled-components";
import { Container } from "@material-ui/core";

import { spacing } from "../styling/mixins";
import nervousGoose from "../img/nervous_goose.png";

export const ScrollContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex-grow: 1;
  padding-bottom: ${spacing(2)};
  padding-top: ${spacing(2)};
`;

export const NervousGoose = styled.img.attrs({
  src: nervousGoose,
  alt: "nervous goose",
})`
  height: ${spacing(6)};
`;
