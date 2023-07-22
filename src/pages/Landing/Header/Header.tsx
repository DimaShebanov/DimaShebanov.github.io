import React from "react";

import styled from "styled-components";

import { color, fontSize, spacing } from "@/styling/mixins";
import { ReactComponent as ZigZag } from "@/assets/landing/zig-zag.svg";
import { ReactComponent as Pill } from "@/assets/landing/pill.svg";

import HeaderImage from "@/pages/Landing/Header/HeaderImage";

import { Container, Hide, Section, SectionTitle } from "@/components/landing";

import { down } from "styled-breakpoints";

const Header = () => (
  <StyledSection background="yellow">
    <Container>
      <ShortInfoContainer>
        <LeftSide>
          <Hide down="lg">
            <PillContainer>
              <Pill />
            </PillContainer>
          </Hide>
          <TextContainer>
            <Established>
              <TextZigZag />
              Працюємо з 1999 року
            </Established>
            <SectionTitle
              center={false}
              noMargin
              accentColor="white"
              accentTextColor="primaryBlack"
            >
              MAMA I <GusWrap>GUS</GusWrap>
            </SectionTitle>
            <BottomText>Швацьке виробництво яке ти шукав</BottomText>
          </TextContainer>
        </LeftSide>
        <RightSide>
          <HeaderImage />
        </RightSide>
      </ShortInfoContainer>
    </Container>
  </StyledSection>
);

export default Header;

const StyledSection = styled(Section)`
  padding-top: ${spacing(2)};
  padding-bottom: ${spacing(16)};

  ${down("lg")} {
    padding-bottom: ${spacing(6)};
  }
`;

const ShortInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${down("lg")} {
    flex-direction: column;
  }
`;

const Side = styled.div`
  width: 50%;

  ${down("lg")} {
    width: 100%;
  }
`;

const RightSide = styled(Side)``;

const LeftSide = styled(Side)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PillContainer = styled.div``;

const GusWrap = styled.span`
  background-color: ${color("white")};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Established = styled.h4`
  position: relative;
  width: max-content;

  ${down("lg")} {
    margin-top: ${spacing(7)};
    font-weight: 300;
    order: 1;
  }
`;

const BottomText = styled.p`
  font-size: 50px;

  ${down("lg")} {
    text-transform: uppercase;
    margin-top: ${spacing(1)};
    ${fontSize("md")};
    font-weight: 300;
  }
`;

const TextZigZag = styled(ZigZag)`
  position: absolute;
  right: 0;
  bottom: 100%;
`;
