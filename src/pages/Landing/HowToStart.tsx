import React from "react";
import { Container, Section, SectionTitle } from "@/components/landing";
import styled from "styled-components";
import { SECTIONS, STARTING_STEPS } from "@/pages/Landing/constants";
import { color, spacing } from "@/styling/mixins";
import { down } from "styled-breakpoints";

const HowToStart = () => (
  <Section background="primaryBlack">
    <Container>
      <SectionTitle
        id={SECTIONS.howToStart.href}
        accentColor="white"
        color="yellow"
      >
        <span>Як</span> почати?
      </SectionTitle>
      <StepsContainer maxWidth="md">
        {STARTING_STEPS.map(({ title, value }, index) => (
          <Step key={title}>
            <StepLabel>
              <h2>{(index + 1)?.toString()?.padStart(2, "0")}</h2>
              <h4>{title}</h4>
            </StepLabel>
            <h6>{value}</h6>
          </Step>
        ))}
      </StepsContainer>
    </Container>
  </Section>
);

export default HowToStart;

const StepsContainer = styled(Container)`
  color: ${color("yellow")};
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;

const Step = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing(3)};

  ${down("md")} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${spacing(2)};
  }
`;

const StepLabel = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  min-width: ${spacing(12)};
  flex-shrink: 0;

  ${down("lg")} {
    align-items: flex-start;
  }
`;
