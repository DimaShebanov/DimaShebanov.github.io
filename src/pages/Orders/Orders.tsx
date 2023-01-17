import React, { memo } from "react";

import { useRecoilCallback } from "recoil";

import { Route, Switch, useHistory } from "react-router-dom";

import { Typography } from "@material-ui/core";

import { NervousGoose, ScrollContainer } from "../../shared/styled";

import Loading from "../../components/Loading";

import { showSnackbar } from "../../recoil/snacks/actions";
import { SNACKBAR_TYPES } from "../../recoil/snacks/interfaces";

import useOrders from "../../store/orders/hooks/useOrders";

import OrdersList from "./components/OrdersList";

import OrderDetails from "./components/OrderDetails";

const Orders = () => {
  const { replace } = useHistory();
  const { isLoading, isError } = useOrders();
  const openSnack = useRecoilCallback(showSnackbar);

  if (isError) {
    openSnack({
      type: SNACKBAR_TYPES.error,
      icon: <NervousGoose />,
      content:
        "Приватна територія гуся. Ми повернули вас назад щоб він не нервував",
    });
    replace("/");
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Switch>
        <Route path="/orders/:id" component={OrderDetails} />
        <Route path="/orders">
          <ScrollContainer>
            <Typography variant="h6">Список замовленнь</Typography>
            <OrdersList />
          </ScrollContainer>
        </Route>
      </Switch>
    </>
  );
};

export default memo(Orders);
