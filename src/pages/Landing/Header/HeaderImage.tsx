import React from "react";
import styled from "styled-components";
import { color, fontSize, spacing } from "@/styling/mixins";
import headerImageSrc from "@/assets/landing/header_image.jpg";
import { ReactComponent as HeaderCircle } from "@/assets/landing/header_circle.svg";
import { ReactComponent as Zigzag } from "@/assets/landing/zig-zag.svg";
import { ReactComponent as HeaderCross } from "@/assets/landing/header_cross.svg";
import { down } from "styled-breakpoints";
import { Hide } from "@/components/landing";

const HeaderImage = () => (
  <ImageContainer>
    <Image>
      <Circle>
        <HeaderCircle />
        <CircleText>Шиємо все!</CircleText>
      </Circle>
      <BlackRect />
      <Hide down="lg">
        <WhiteRect />
        <SmallWhiteRect />
      </Hide>
      <StyledCross />
      <BottomZigzag>
        <Zigzag />
        <Zigzag />
      </BottomZigzag>
      <TopZigzag>
        <Zigzag />
        <Zigzag />
      </TopZigzag>
    </Image>
  </ImageContainer>
);

export default HeaderImage;

const ImageContainer = styled.div`
  padding: ${spacing(8)} ${spacing(6)} 0;
  box-sizing: border-box;
  position: relative;

  ${down("lg")} {
    padding: ${spacing(8)} 0 0;
  }
`;

const Image = styled.div`
  position: relative;
  background-image: url("${headerImageSrc}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 600px;
  width: 100%;

  ${down("xl")} {
    min-height: 500px;
  }
`;

const BlackRect = styled.div`
  position: absolute;
  background: ${color("primaryBlack")};
  height: ${spacing(7)};
  width: ${spacing(7)};
  bottom: 100%;
  right: 50%;

  ${down("lg")} {
    height: ${spacing(4)};
    width: ${spacing(4)};
  }
`;

const WhiteRect = styled.div`
  position: absolute;
  background: ${color("white")};
  height: ${spacing(6)};
  width: ${spacing(6)};
  right: 100%;
  top: calc(50% + 4px);
`;

const SmallWhiteRect = styled(WhiteRect)`
  position: absolute;
  height: ${spacing(4)};
  width: ${spacing(4)};
  top: auto;
  bottom: calc(50% + 4px);
`;

const Circle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(40%, -40%);

  ${down("lg")} {
    svg {
      width: ${spacing(14)};
      height: ${spacing(14)};
    }
  }
`;

const CircleText = styled.h5`
  text-align: center;
  position: absolute;
  width: min-content;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;

  ${down("lg")} {
    && {
      ${fontSize("xs")};
    }
  }
`;

const ZigzagGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: ${spacing(9)};
  overflow: hidden;
  position: absolute;
  transform-origin: center;
`;

const BottomZigzag = styled(ZigzagGroup)`
  bottom: 0;
  right: 0;
  transform: rotateZ(-45deg) translate(20%, 50%);
`;

const TopZigzag = styled(ZigzagGroup)`
  top: 0;
  left: 0;
  transform: rotateZ(135deg) translate(20%, 50%);
`;

const StyledCross = styled(HeaderCross)`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);

  ${down("lg")} {
    transform: translate(-30%, 30%);
    width: ${spacing(6)};
    height: ${spacing(6)};
  }
`;
