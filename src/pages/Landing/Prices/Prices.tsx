import React from "react";
import { Container, Section, SectionTitle } from "@/components/landing";
import styled from "styled-components";
import { color, spacing } from "@/styling/mixins";

import { ReactComponent as Goose } from "@/assets/landing/goose.svg";

import { down } from "styled-breakpoints";

import { Link } from "react-router-dom";

import { PRICES_DESCRIPTION, SECTIONS } from "../constants";

import CircleText from "./CircleText";

const Prices = () => (
  <Section>
    <Container>
      <StyledSectionTitle id={SECTIONS.prices.href} accentColor="yellow">
        ШО <span>ПО ЧОМУ?</span>
      </StyledSectionTitle>
      <Content>
        <LeftSide>
          {PRICES_DESCRIPTION}
          <PricesButton to="/prices">
            <h5>Переглянути ціни</h5>
          </PricesButton>
        </LeftSide>
        <RightSide>
          <GooseWrapper>
            <Goose />
            <CircleText />
          </GooseWrapper>
        </RightSide>
      </Content>
    </Container>
  </Section>
);

export default Prices;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  ${down("lg")} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  margin-bottom: ${spacing(5)};
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
  white-space: break-spaces;

  ${down("lg")} {
    order: 1;
  }
`;

const GooseWrapper = styled.div`
  border-radius: 50%;
  background-color: ${color("yellow")};
  border: 1px dashed ${color("primaryBlack")};
  padding: ${spacing(8)};
  width: min-content;
  margin-left: auto;
  margin-right: ${spacing(3)};
  position: relative;

  ${down("lg")} {
    margin-right: auto;
    padding: ${spacing(7)};
  }
`;

const RightSide = styled.div``;

const PricesButton = styled(Link)`
  padding: ${spacing(2)} ${spacing(4)};
  background-color: ${color("white")};
  transition: 300ms ease;
  width: max-content;
  border: 2px solid ${color("primaryBlack")};
  text-align: center;

  &:hover {
    background-color: ${color("yellow")};
  }

  ${down("md")} {
    width: 100%;
  }
`;
