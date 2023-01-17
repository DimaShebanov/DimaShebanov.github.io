import React, { MouseEventHandler, useCallback, useRef } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";

import { useRecoilValue } from "recoil";

import logoImg from "../../img/logo.jpg";

import useToggleState from "../../shared/hooks";

import Auth from "../Auth";
import { userAtom } from "../../recoil/user/atoms";
import { auth } from "../../firebase/localFirebase";
import routes from "../../routes";
import { DOUBLE_TAP_THRESHOLD } from "../../constants";

import { Content, Logo, LogoWrapper } from "./Header.styled";

const Header: React.FC = () => {
  const { push } = useHistory();
  const [authOpen, openAuth, closeAuth] = useToggleState(false);
  const [menuOpen, openMenu, closeMenu] = useToggleState(false);
  const tapTime = useRef<number | null>(null);
  const menuAnchor = useRef(null);
  const user = useRecoilValue(userAtom);
  const { name, photoUrl, isLogged } = user;

  const logout = useCallback(() => {
    auth.signOut();
  }, []);

  const goToOrders = useCallback(() => {
    push(routes.orders.path);
    closeMenu();
  }, [closeMenu, push]);

  const onLogoClick: MouseEventHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (!tapTime.current) {
        tapTime.current = Date.now();
        return;
      }
      if (Date.now() - tapTime.current < DOUBLE_TAP_THRESHOLD) {
        openAuth();
      }

      tapTime.current = null;
    },
    [openAuth]
  );

  const onTitleClick = useCallback(() => {
    push(routes.home.path);
  }, [push]);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Content>
            <Box display="flex" alignItems="center">
              <LogoWrapper
                isLogged={isLogged}
                display="flex"
                alignItems="center"
              >
                <Logo src={logoImg} alt="GUS" onClick={onLogoClick} />
                <Typography variant="h6" color="inherit" onClick={onTitleClick}>
                  MAMA I GUS
                </Typography>
              </LogoWrapper>
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
            <MenuItem onClick={logout}>Вийти</MenuItem>
            <MenuItem onClick={goToOrders}>Список замовленнь</MenuItem>
          </Menu>
        ) : null}
      </AppBar>
    </>
  );
};

export default Header;
