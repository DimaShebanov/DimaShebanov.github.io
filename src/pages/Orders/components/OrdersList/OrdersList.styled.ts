import styled from "styled-components";
import { ListItemText } from "@material-ui/core";

export const StyledListItemText = styled(ListItemText)`
  position: relative;
`;

export const NewLabel = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  color: ${({ theme }) => theme.palette.primary.main};
  transform: translateY(-50%);
`;
