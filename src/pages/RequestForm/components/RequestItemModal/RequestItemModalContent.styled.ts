import styled from "styled-components";
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";

import { spacing } from "../../../../styling/mixins";

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
  margin: ${spacing(2)} 0;
`;

export const TitleInputs = styled.div`
  margin-left: ${spacing(3)};
  flex-grow: 1;
`;

export const ColorsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: ${spacing(1)} -${spacing(1)} ${spacing(2)};
`;

export const Header = styled(DialogTitle)`
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spacing(1)};
`;

export const Footer = styled(DialogActions)`
  box-shadow: 0 1px 6px 0 rgb(255 255 255 / 20%);
  font-weight: bold;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
`;

export const SubmitButton = styled(Button)`
  margin-left: ${spacing(2)};
`;
