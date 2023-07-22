import styled from "styled-components";
import { Avatar, Card, CardContent } from "@material-ui/core";

import { spacing } from "../../../../../../styling/mixins";

export const StyledCard = styled(Card)`
  margin-bottom: ${spacing(3)};
`;

export const StyledCardContent = styled(CardContent)`
  overflow-x: auto;
`;

export const StyledAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
`;

export const Description = styled.div`
  white-space: pre-wrap;
`;
