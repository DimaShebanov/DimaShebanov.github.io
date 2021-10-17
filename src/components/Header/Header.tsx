import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";

import Auth from "../Auth";

import logoImg from "../../img/logo.jpg";

import { Content, Logo } from "./Header.styled";
import useHeader from "./hooks";

const Header: React.FC = () => {
  const {
    authOpen,
    closeAuth,
    menuOpen,
    openMenu,
    closeMenu,
    menuAnchor,
    name,
    photoUrl,
    isLogged,
    logout,
    goToOrders,
    onLogoClick,
    onTitleClick,
  } = useHeader();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Content>
            <Box display="flex" alignItems="center">
              <Box display="flex" alignItems="center">
                <Logo src={logoImg} alt="GUS" onClick={onLogoClick} />
                <Typography variant="h6" color="inherit" onClick={onTitleClick}>
                  MAMA I GUS
                </Typography>
              </Box>
            </Box>
            {isLogged ? (
              <Avatar
                src={photoUrl || ""}
                alt={name || ""}
                ref={menuAnchor}
                onClick={openMenu}
                variant="circular"
              />
            ) : null}
          </Content>
        </Toolbar>
        <Auth open={authOpen} onClose={closeAuth} />
        {isLogged ? (
          <Menu
            anchorEl={menuAnchor?.current}
            keepMounted
            open={menuOpen}
            onClose={closeMenu}
          >
            <MenuItem onClick={logout}>Выйти</MenuItem>
            <MenuItem onClick={goToOrders}>Список заказов</MenuItem>
          </Menu>
        ) : null}
      </AppBar>
    </>
  );
};

export default Header;
