import styled from "styled-components";
import { FormControl } from "@material-ui/core";

import { spaceMixin } from "../../../../styling/mixins";

export const Root = styled.div`
  &:not(:last-child) {
    margin-bottom: ${spaceMixin(1)};
  }
`;

export const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr);
`;

export const Content = styled.div`
  display: flex;
`;

export const ColorControl = styled(FormControl)`
  flex: 1;
  word-break: break-word;
`;

export const SizesWrap = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Value = styled.div``;
