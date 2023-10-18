import styled from "styled-components";
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";

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

export const Footer = styled(DialogActions)`
  box-shadow: 0 1px 6px 0 rgb(255 255 255 / 20%);
  font-weight: bold;
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
  
  gap: ${spaceMixin(1)};
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

export const SubmitButton = styled(Button)`
  margin-left: ${spaceMixin(2)};
`;
