import firebase from "firebase";

import { AuthUser } from "../../../types/user-types";

export const parseUser = (user: firebase.User | null): AuthUser => ({
  email: user?.email ?? null,
  isLogged: !!user,
  name: user?.displayName ?? null,
  photoUrl: user?.providerData?.[0]?.photoURL ?? null,
});
