import styled from "styled-components";
import { Button, Card } from "@material-ui/core";

import { spaceMixin } from "../../styling/mixins";

export const ItemsWrapper = styled.div`
  margin: ${spaceMixin(2)} 0;
  display: grid;
  grid-column-gap: ${spaceMixin(2)};
  grid-row-gap: ${spaceMixin(2)};
  grid-template-columns: repeat(auto-fit, minmax(${spaceMixin(40)}, 1fr));
  grid-auto-rows: minmax(${spaceMixin(19)}, 1fr);
`;

export const NewItemCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddNewItem = styled(Button)`
  font-size: 3em;
  width: 100%;
  height: 100%;
  border: none;

  &:hover {
    border: none;
  }
`;
