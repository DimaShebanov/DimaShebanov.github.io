import styled from "styled-components";

import { FormControl, IconButton, Select } from "@material-ui/core";

import { spacing } from "../../../../../../styling/mixins";

export const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr min-content;
  grid-column-gap: ${spacing(1)};
  align-items: stretch;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: ${spacing(1)};
  }
`;

export const DeleteSize = styled(IconButton)`
  align-self: center;
`;

export const StyledSelect = styled(Select)`
  margin: ${spacing(2)} 0 ${spacing(0.5)};
`;

export const SizeWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const SizeFormControl = styled(FormControl)`
  flex: 1 0 30%;
`;
