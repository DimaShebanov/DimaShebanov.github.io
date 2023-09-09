import React from "react";

import { Container, Section, SectionTitle } from "@/components/landing";

import { SECTIONS } from "../constants";

import TermsTable from "./TermsTable";
import { TERMS_OF_COOPERATION } from "./constants";

const CooperationTerms = () => (
  <Section background="yellow">
    <Container>
      <SectionTitle id={SECTIONS.cooperationTerms.href} accentColor="white">
        <span>Умови</span> співпраці
      </SectionTitle>
    </Container>
    <TermsTable tableItems={TERMS_OF_COOPERATION} />
  </Section>
);

export default CooperationTerms;
