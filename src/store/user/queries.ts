import { QueryFunction } from "react-query";

import { AuthUser } from "../../types/user-types";
import { queryKeys } from "../queryKeys";
import { auth } from "../../firebase/localFirebase";

import { parseUser } from "./utils/parseUser";

export const userQuery: QueryFunction<AuthUser, [queryKeys.USER]> = () =>
  parseUser(auth.currentUser);
