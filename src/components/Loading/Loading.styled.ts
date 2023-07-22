import styled, { css } from "styled-components";

import { spacing } from "../../styling/mixins";

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
  width: ${spacing(20)};
  height: ${spacing(10)};
`;
