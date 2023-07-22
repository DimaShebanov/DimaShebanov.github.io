import React from "react";
import styled from "styled-components";
import { color } from "@/styling/mixins";
import { FONT_SIZE } from "@/styling/constants";

const SIZE = 50;

const CircleText = () => (
  <Root viewBox="0 0 150 150" width="130" height="130">
    <defs>
      <path
        id="circle"
        d={`
        M 75, 75 
        m -${SIZE}, 0
        a ${SIZE},${SIZE} 0 1,1 ${SIZE * 2},0 
        a ${SIZE},${SIZE} 0 1,1 -${SIZE * 2},0
        `}
      />
    </defs>
    <text fontSize={FONT_SIZE.md}>
      <textPath href="#circle">де ціни? ціни ціни ціни,</textPath>
    </text>
  </Root>
);

export default CircleText;

const Root = styled.svg`
  fill: ${color("primaryBlack")};
  transform-origin: center;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(35%, -35%);

  text {
    text-transform: uppercase;
  }
`;
