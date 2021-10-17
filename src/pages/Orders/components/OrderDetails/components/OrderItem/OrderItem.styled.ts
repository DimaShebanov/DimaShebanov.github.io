import styled from "styled-components";
import { Card, CardContent } from "@material-ui/core";

import { spaceMixin } from "../../../../../../styling/mixins";

export const StyledCard = styled(Card)`
  margin-bottom: ${spaceMixin(3)};
`;

export const StyledCardContent = styled(CardContent)`
  overflow-x: auto;
`;
