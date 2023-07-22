import React from "react";
import { Drawer, IconButton } from "@mui/material";
import styled from "styled-components";
import { color, spacing } from "@/styling/mixins";
import { ReactComponent as ArrowLeft } from "@/assets/landing/arrow-left.svg";

import ContactInfo from "../Contacts/ContactInfo";

import NavMenu from "./NavMenu";

interface Props {
  open: boolean;
  onClose: () => void;
}

const drawerSX = {
  sx: { width: "100%", maxWidth: "450px", minWidth: "320px" },
};

const NavDrawer = ({ onClose, open }: Props) => (
  <Drawer
    PaperProps={drawerSX}
    disablePortal
    anchor="right"
    disableRestoreFocus
    disableScrollLock
    open={open}
    onClose={onClose}
  >
    <Root>
      <MenuHead>
        <StyledIconButton onClick={onClose}>
          <ArrowLeft />
        </StyledIconButton>
        <h5>Меню</h5>
      </MenuHead>
      <NavMenu onClick={onClose} />
      <div>
        <ContactsHead>Звʼязатись з нами:</ContactsHead>
        <ContactInfo />
      </div>
    </Root>
  </Drawer>
);

export default NavDrawer;

const Root = styled.div`
  background-color: ${color("yellow")};
  height: 100%;
  padding: ${spacing(4)} ${spacing(2)};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${spacing(3)};
`;

const MenuHead = styled.div`
  display: flex;
  align-items: center;
  //width: 100%;
  position: relative;
  text-transform: uppercase;

  h5 {
    flex-grow: 1;
    text-align: center;
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

const ContactsHead = styled.h5`
  text-transform: uppercase;
  margin-bottom: ${spacing(3)};
`;
