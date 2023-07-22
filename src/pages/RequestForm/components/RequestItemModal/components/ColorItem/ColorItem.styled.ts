import styled from "styled-components";
import { IconButton } from "@material-ui/core";

import { spacing } from "../../../../../../styling/mixins";

export const Root = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.palette.grey[400]};
  padding: 0 ${spacing(1)} ${spacing(1)};

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ColorHeader = styled.div`
  display: grid;
  align-items: end;
  grid-template-columns: 8fr 1fr;
`;

export const RemoveColor = styled(IconButton)`
  color: ${({ theme }) => theme.palette.error.main};
  font-size: ${spacing(2.5)};
  margin-left: auto;
  position: absolute;
  top: 0;
  right: 0;
  width: ${spacing(5)};
  height: ${spacing(5)};
`;

export const SizesWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
