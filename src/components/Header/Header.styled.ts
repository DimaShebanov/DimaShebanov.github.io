import styled from "styled-components";
import { Avatar } from "@material-ui/core";

import { spaceMixin } from "../../styling/mixins";

export const Logo = styled(Avatar)`
  margin-right: ${spaceMixin(1)};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
