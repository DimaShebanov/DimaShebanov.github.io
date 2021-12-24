import styled from "styled-components";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
} from "@material-ui/core";

import { spaceMixin } from "../../../../styling/mixins";

export const Root = styled(Dialog)`
  .MuiPaper-root {
    max-width: 100vw;
    max-height: 80vh;
    width: 700px;
    margin: 0;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: flex-end;
  margin: ${spaceMixin(2)} 0;
`;

export const TitleInputs = styled.div`
  margin-left: ${spaceMixin(3)};
  flex-grow: 1;
`;

export const ColorsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: ${spaceMixin(1)} -${spaceMixin(1)} ${spaceMixin(2)};
`;

export const Header = styled(DialogTitle)`
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spaceMixin(1)};
`;

export const StyledDivider = styled(Divider)`
  background-color: ${({ theme }) => theme.palette.grey[400]};
  margin-top: ${spaceMixin(1)};
`;

export const Footer = styled(DialogActions)`
  font-weight: bold;
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
  //box-shadow: 0 7px 16px 4px rgb(0 0 0 / 45%);
`;

export const SubmitButton = styled(Button)`
  margin-left: ${spaceMixin(2)};
`;
