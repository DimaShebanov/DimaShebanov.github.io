import React from "react";
import { Container, Section, SectionTitle } from "@/components/landing";
import styled from "styled-components";
import { color, spacing } from "@/styling/mixins";
import contactPersonSrc from "@/assets/landing/images/contact_person.jpeg";

import { down } from "styled-breakpoints";

import { CONTACTS_DESCRIPTION, CONTACTS_WARNING, SECTIONS } from "../constants";

import ContactInfo from "./ContactInfo";

import ContactsCTA from "./ContactsCTA";

const Contacts = () => (
  <Section>
    <Container>
      <SectionTitle id={SECTIONS.contacts.href} accentColor="yellow">
        <span>Контакти</span>
      </SectionTitle>
      <Content>
        <LeftSide>
          <h6>{CONTACTS_DESCRIPTION}</h6>
          <h5>Зв'яжися з нашим менеджером Лєрою:</h5>
          <ContactInfo iconsColor="yellow" />
          <h6>{CONTACTS_WARNING}</h6>
        </LeftSide>
        <RightSide>
          <ContactPerson src={contactPersonSrc} alt="I'm Lera, write me!" />
          <ContactsCTA placement="left" />
          <ContactsCTA placement="top" />
          <ContactsCTA placement="right" />
          <ContactsCTA placement="bottom" />
        </RightSide>
      </Content>
    </Container>
  </Section>
);

export default Contacts;

const Content = styled.div`
  display: grid;
  grid-template-columns: 4fr 5fr;
  grid-gap: ${spacing(2)};

  ${down("lg")} {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};

  ${down("lg")} {
    order: 1;
  }
`;

const ContactPerson = styled.img`
  height: 100%;
  width: 100%;
  border: ${spacing(4)} solid ${color("yellow")};

  ${down("lg")} {
    border-width: ${spacing(3)};
  }
`;

const RightSide = styled.div`
  position: relative;
  background-color: ${color("primaryBlack")};
  padding: ${spacing(6)};

  ${down("lg")} {
    padding: ${spacing(4)};
    min-width: auto;
    max-width: 500px;
  }
`;
