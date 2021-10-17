import styled from "styled-components";

import { spaceMixin } from "../../../../styling/mixins";

export const ItemsGrid = styled.div`
  display: grid;
  grid-column-gap: ${spaceMixin(2)};
  grid-row-gap: ${spaceMixin(2)};
  grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));
  grid-auto-rows: minmax(${spaceMixin(19)}, 1fr);
`;
