import { useQuery } from "react-query";

import { queryKeys } from "../../queryKeys";
import { ordersQuery } from "../queries";

const useOrders = () => {
  const { data, ...rest } = useQuery([queryKeys.ORDERS], ordersQuery);

  return {
    ...rest,
    orders: data,
  };
};

export default useOrders;
