import React from "react";
import styled, { css } from "styled-components";
import { color, fontSize, spacing } from "@/styling/mixins";
import { CONTACTS_CTA } from "@/pages/Landing/constants";
import { down } from "styled-breakpoints";

const Text = styled.h3`
  color: ${color("white")};
  font-weight: 400;
  padding-left: ${spacing(3)};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  && {
    ${down("lg")} {
      ${fontSize("sm")};
      font-weight: 400;
    }
  }
`;

const CTA_PLACEMENTS = {
  top: css`
    top: 0;
    left: 0;
  `,
  bottom: css`
    bottom: 0;
    left: 0;
    width: 100%;

    ${Text} {
      transform: rotateZ(180deg);
    }
  `,
  right: css`
    right: 0;
    bottom: 0;

    ${Text} {
      position: absolute;
      top: 100%;
      transform-origin: top right;
      transform: rotateZ(90deg);
    }
  `,
  left: css`
    left: 0;
    bottom: 0;

    ${Text} {
      position: absolute;
      top: 100%;
      transform-origin: top left;
      transform: rotateZ(-90deg);
    }
  `,
};

const ContactsCTA = styled.div.attrs({
  children: <Text>{CONTACTS_CTA}</Text>,
})<{
  placement: keyof typeof CTA_PLACEMENTS;
}>`
  position: absolute;
  width: 100%;
  height: ${spacing(6)};

  ${(p) => CTA_PLACEMENTS[p.placement]};

  ${down("lg")} {
    height: ${spacing(4)};
  }
`;

export default ContactsCTA;
