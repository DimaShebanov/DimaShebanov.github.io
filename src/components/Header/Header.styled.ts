import styled from "styled-components";
import { Avatar, Box } from "@material-ui/core";

import { spaceMixin } from "../../styling/mixins";

export const LogoWrapper = styled(Box)<{ isLogged?: boolean }>`
  ${({ isLogged }) => isLogged && "cursor: pointer"}
`;

export const Logo = styled(Avatar)`
  margin-right: ${spaceMixin(1)};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
