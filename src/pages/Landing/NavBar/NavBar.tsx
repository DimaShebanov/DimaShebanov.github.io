import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { color, spacing } from "@/styling/mixins";
import logoSrc from "@/assets/landing/logo_goose_black_dark.svg";
import { ReactComponent as IconMenu } from "@/assets/landing/menu.svg";

import { down } from "styled-breakpoints";
import { Container, Section, Show } from "@/components/landing";
import { IconButton } from "@mui/material";

import NavMenu from "./NavMenu";

import NavDrawer from "./NavDrawer";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <>
      <Dummy />
      <StyledSection background="yellow">
        <Container>
          <Root>
            <CompanyName>
              <Logo src={logoSrc} alt="Mama I Gus" />
              <Show up="lg">Швацьке виробництво</Show>
            </CompanyName>
            <Show up="lg">
              <NavMenu />
            </Show>
            <Show down="lg">
              <DrawerButton onClick={openDrawer}>
                <IconMenu />
              </DrawerButton>
            </Show>
            <NavDrawer open={drawerOpen} onClose={closeDrawer} />
          </Root>
        </Container>
      </StyledSection>
    </>
  );
};

export default NavBar;

const StyledSection = styled(Section)`
  position: sticky;
  top: 0;
  z-index: 2;

  padding: ${spacing(2)};
`;

const Dummy = styled.div`
  background: ${color("yellow")};
  height: ${spacing(6)};
`;

const Root = styled.div`
  border: 1px solid ${color("primaryBlack")};
  display: flex;

  ${down("lg")} {
    position: sticky;
    top: 0;
    border: none;
  }
`;

const CompanyName = styled.h5`
  padding: ${spacing(3)};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  gap: ${spacing(4)};
  border-right: 1px solid ${color("primaryBlack")};

  ${down("lg")} {
    border: none;
    padding: 0;
  }
`;

const Logo = styled.img`
  width: ${spacing(8)};
  height: ${spacing(8)};
`;

const DrawerButton = styled(IconButton)`
  && {
    margin: auto;
    margin-right: 0;
  }
`;
