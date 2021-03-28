import styled from "styled-components";
import { FormControl } from "@material-ui/core";

import { spaceMixin } from "../../../../styling/mixins";

export const Root = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: ${spaceMixin(1)};
  }
`;

export const ColorControl = styled(FormControl)`
  flex: 1;
  word-break: break-word;
`;

export const StyledControl = styled(FormControl)`
  margin-left: ${spaceMixin(1)};
`;
