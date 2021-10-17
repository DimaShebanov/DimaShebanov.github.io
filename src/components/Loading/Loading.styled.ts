import styled, { css } from "styled-components";

import { spaceMixin } from "../../styling/mixins";

const BackdropPositionStyles = css`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  ${BackdropPositionStyles};

  &:before {
    content: "";
    position: absolute;
    ${BackdropPositionStyles};
    opacity: 0.2;
    background-color: ${({ theme }) => theme.palette.common.white};
  }
`;

export const LoadingImage = styled.img`
  width: ${spaceMixin(20)};
  height: ${spaceMixin(10)};
`;
