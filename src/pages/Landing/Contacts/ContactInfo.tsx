import React from "react";

import styled from "styled-components";
import { color, spacing } from "@/styling/mixins";

import { ColorName } from "@/styling/types";

import { CONTACTS } from "../constants";

interface Props {
  iconsColor?: ColorName;
}

const ContactInfo = ({ iconsColor }: Props) => (
  <ContactsWrapper>
    {CONTACTS.map(({ title, value, icon }) => (
      <Contact
        key={value}
        iconsColor={iconsColor}
        href={value}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
        {title}
      </Contact>
    ))}
  </ContactsWrapper>
);

export default ContactInfo;

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
`;

const Contact = styled.a<Props>`
  display: flex;
  align-items: center;
  gap: ${spacing(1)};
  width: max-content;

  svg {
    color: ${(p) => p.color ?? color("primaryBlack")};
  }
`;
