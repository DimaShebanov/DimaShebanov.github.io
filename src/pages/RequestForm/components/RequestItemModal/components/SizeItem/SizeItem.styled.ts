import styled from "styled-components";

import { IconButton, Select } from "@material-ui/core";

import { spaceMixin } from "../../../../../../styling/mixins";

export const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr min-content;
  grid-column-gap: ${spaceMixin(1)};
  align-items: stretch;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: ${spaceMixin(1)};
  }
`;

export const DeleteSize = styled(IconButton)`
  align-self: center;
`;

export const StyledSelect = styled(Select)`
  // margin: ${spaceMixin(1)} 0;
  margin: ${spaceMixin(2)} 0 ${spaceMixin(0.5)};
`;
