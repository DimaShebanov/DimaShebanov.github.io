import React from "react";
import { Container, Section } from "@/components/landing";
import styled from "styled-components";
import { color, fontSize, spacing } from "@/styling/mixins";

import { down } from "styled-breakpoints";

import { FOOTER_CONTACTS } from "./constants";

const Footer = () => (
  <Section background="primaryBlack">
    <Container>
      <Divider />
      <Content>
        {FOOTER_CONTACTS.map(({ title, values }) => (
          <ContactGroup key={title}>
            <GroupTitle>{title}</GroupTitle>
            {values.map(({ text, value }) => (
              <GroupValue key={text}>
                <a rel="noreferrer noopener" href={value} target="_blank">
                  {text}
                </a>
              </GroupValue>
            ))}
          </ContactGroup>
        ))}
      </Content>
    </Container>
  </Section>
);

export default Footer;

const Divider = styled.hr`
  height: 1px;
  width: 100%;
  border: none;
  background: ${color("yellow")};
  margin-bottom: ${spacing(8)};

  ${down("lg")} {
    margin-bottom: ${spacing(3)};
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${spacing(3)};
  color: ${color("yellow")};

  ${down("lg")} {
    flex-direction: column;
    gap: ${spacing(4)};
  }
`;

const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  white-space: break-spaces;
`;

const GroupTitle = styled.h3`
  margin-bottom: ${spacing(8)};

  ${down("lg")} {
    margin-bottom: ${spacing(2)};
    font-weight: 300;
  }
`;

const GroupValue = styled.h5`
  ${down("lg")} {
    && {
      ${fontSize("md")};
      font-weight: 300;
    }
  }
`;
