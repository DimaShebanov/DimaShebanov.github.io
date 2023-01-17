import { useEffect } from "react";
import { useQuery } from "react-query";

import { queryKeys } from "../../queryKeys";
import { userQuery } from "../queries";
import { auth } from "../../../firebase/localFirebase";
import { queryClient } from "../../queryClient";
import { parseUser } from "../utils/parseUser";

const useUser = () => {
  const { data, ...rest } = useQuery([queryKeys.USER], userQuery);

  useEffect(() => {
    auth.onAuthStateChanged((user) =>
      queryClient.setQueryData([queryKeys.USER], parseUser(user))
    );
  }, []);

  return {
    ...rest,
    user: data,
  };
};

export default useUser;
