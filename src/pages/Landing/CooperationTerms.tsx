import React from "react";
import styled from "styled-components";
import { SECTIONS, TERMS_OF_COOPERATION } from "@/pages/Landing/constants";
import { Container, Section, SectionTitle } from "@/components/landing";
import { color, spacing } from "@/styling/mixins";
import { down } from "styled-breakpoints";

const CooperationTerms = () => (
  <Section background="yellow">
    <Container>
      <SectionTitle id={SECTIONS.cooperationTerms.href} accentColor="white">
        <span>Умови</span> співпраці
      </SectionTitle>
    </Container>
    <TermsTable>
      {TERMS_OF_COOPERATION.map(({ title, value }) => (
        <TermsRow key={title}>
          <StyledContainer>
            <h4>{title}</h4>
            <h6>{value}</h6>
          </StyledContainer>
        </TermsRow>
      ))}
    </TermsTable>
  </Section>
);

export default CooperationTerms;

const TermsTable = styled.div``;

const TermsRow = styled.div`
  border-top: 1px solid ${color("primaryBlack")};
  padding: ${spacing(3)} 0;

  &:last-child {
    border-bottom: 1px solid ${color("primaryBlack")};
  }
`;

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: ${spacing(3)};
  white-space: pre-line;

  h4 {
    text-transform: uppercase;
  }

  ${down("lg")} {
    grid-template-columns: 1fr;
    grid-gap: ${spacing(2)};
    grid-template-rows: min-content 1fr;
  }
`;
