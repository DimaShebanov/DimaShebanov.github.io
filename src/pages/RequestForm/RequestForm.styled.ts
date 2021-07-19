import styled from "styled-components";
import { Button, Card, CircularProgress } from "@material-ui/core";

import { spaceMixin } from "../../styling/mixins";
import { ScrollContainer } from "../../shared/styled";

export const ItemsWrapper = styled.div`
  display: grid;
  grid-column-gap: ${spaceMixin(2)};
  grid-row-gap: ${spaceMixin(2)};
  grid-template-columns: repeat(auto-fill, minmax(${spaceMixin(40)}, 1fr));
  grid-auto-rows: minmax(${spaceMixin(19)}, 1fr);
`;

export const NewItemCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddNewItem = styled(Button)`
  && {
    font-size: 3em;
  }
  width: 100%;
  height: 100%;
  border: none;

  &:hover {
    border: none;
  }
`;

export const StyledProgress = styled(CircularProgress)`
  color: ${({ theme }) => theme.palette.secondary.contrastText};
`;

export const SubmitButton = styled(Button)`
  margin-left: auto;
`;

export const StyledScrollContainer = styled(ScrollContainer)`
  padding-top: 0;
`;
