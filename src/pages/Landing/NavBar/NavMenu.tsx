import React, { MouseEventHandler, useCallback } from "react";
import { SECTIONS } from "@/pages/Landing/constants";
import styled from "styled-components";
import { down } from "styled-breakpoints";
import { color, spacing } from "@/styling/mixins";

interface Props {
  onClick?: (target: string) => void;
}

const NavMenu = ({ onClick }: Props) => {
  const scrollToSection: MouseEventHandler = useCallback(
    (e) => {
      e.preventDefault();
      const { dataset } = e.currentTarget as HTMLAnchorElement;
      const { target } = dataset;
      onClick?.(target as string);

      const targetSection = document.querySelector(`#${target}`);

      targetSection?.scrollIntoView({ behavior: "smooth", block: "center" });
    },
    [onClick]
  );

  return (
    <MenuWrapper>
      <MenuRow>
        <NavItem
          onClick={scrollToSection}
          width="30%"
          data-target={SECTIONS.ourExperience.href}
        >
          <h5>{SECTIONS.ourExperience.name}</h5>
        </NavItem>
        <NavItem
          onClick={scrollToSection}
          width="50%"
          data-target={SECTIONS.cooperationTerms.href}
        >
          <h5>{SECTIONS.cooperationTerms.name}</h5>
        </NavItem>
        <NavItem
          onClick={scrollToSection}
          width="20%"
          data-target={SECTIONS.prices.href}
        >
          <h5>{SECTIONS.prices.name}</h5>
        </NavItem>
      </MenuRow>
      <MenuRow>
        <NavItem
          onClick={scrollToSection}
          width="20%"
          data-target={SECTIONS.howToStart.href}
        >
          <h5>{SECTIONS.howToStart.name}</h5>
        </NavItem>
        <NavItem
          onClick={scrollToSection}
          width="50%"
          data-target={SECTIONS.equipment.href}
        >
          <h5>{SECTIONS.equipment.name}</h5>
        </NavItem>
        <NavItem
          onClick={scrollToSection}
          width="30%"
          data-target={SECTIONS.contacts.href}
        >
          <h5>{SECTIONS.contacts.name}</h5>
        </NavItem>
      </MenuRow>
    </MenuWrapper>
  );
};

export default NavMenu;

const MenuWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  ${down("lg")} {
    border: 1px solid ${color("primaryBlack")};
    flex: 0;
    width: 100%;
  }
`;

const MenuRow = styled.div`
  flex: 1;
  display: flex;
  &:not(:last-child) {
    border-bottom: 1px solid ${color("primaryBlack")};
  }

  ${down("lg")} {
    flex-direction: column;
  }
`;

const NavItem = styled.a<{ width: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing(2)};
  transition: 300ms ease;
  flex-basis: ${(p) => p.width};
  white-space: nowrap;

  &:not(:last-child) {
    border-right: 1px solid ${color("primaryBlack")};

    ${down("lg")} {
      border-bottom: 1px solid ${color("primaryBlack")};
      flex-basis: 0;
      border-right: none;
    }
  }

  &:hover {
    background-color: ${color("primaryBlack")};
    color: ${color("white")};
  }
`;
