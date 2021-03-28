import styled from "styled-components";
import { IconButton } from "@material-ui/core";

import { spaceMixin } from "../../../../styling/mixins";

export const Root = styled.div`
  position: relative;
`;

export const ColorHeader = styled.div`
  display: grid;
  align-items: end;
  grid-template-columns: 1fr min-content;
`;

export const RemoveColor = styled(IconButton)`
  font-size: ${spaceMixin(3)};
`;
