import { atom } from "recoil";

import { auth } from "../../firebase/localFirebase";

import { AuthUser } from "./interfaces";

export const userAtom = atom<AuthUser>({
  key: "auth",
  default: {
    isLogged: false,
    email: null,
    name: null,
    photoUrl: null,
  },
  effects_UNSTABLE: [
    ({ setSelf }) => {
      auth.onAuthStateChanged((user) => {
        setSelf({
          email: user?.email ?? null,
          isLogged: !!user,
          name: user?.displayName ?? null,
          photoUrl: user?.providerData?.[0]?.photoURL ?? null,
        });
      });
    },
  ],
});
