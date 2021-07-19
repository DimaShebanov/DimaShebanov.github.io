import { MouseEventHandler, useCallback, useRef } from "react";
import { useHistory } from "react-router-dom";

import { useRecoilValue } from "recoil";

import useToggleState from "../../../shared/hooks";
import { userAtom } from "../../../recoil/user";
import { auth } from "../../../firebase/localFirebase";
import routes from "../../../routes";
import { DOUBLE_TAP_THRESHOLD } from "../../../constants";

const useHeader = () => {
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

  return {
    authOpen,
    openAuth,
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
  };
};

export default useHeader;
