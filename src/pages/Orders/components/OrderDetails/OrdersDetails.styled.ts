import styled from "styled-components";

import { spaceMixin } from "../../../../styling/mixins";

export const ItemsGrid = styled.div`
  display: grid;
  grid-column-gap: ${spaceMixin(2)};
  grid-row-gap: ${spaceMixin(2)};
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(${spaceMixin(19)}, 1fr);
`;

export const HeaderNav = styled.div`
  margin-bottom: ${spaceMixin(2)};
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
