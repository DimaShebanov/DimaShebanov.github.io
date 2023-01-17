import React, { memo, useContext } from "react";

import { Route, Switch, useHistory } from "react-router-dom";

import { Typography } from "@material-ui/core";

import { NervousGoose, ScrollContainer } from "../../shared/styled";

import Loading from "../../components/Loading";

import useOrders from "../../store/orders/hooks/useOrders";

import SnackbarContext from "../../components/SnackbarProvider/SnackbarContext";

import { SNACKBAR_TYPES } from "../../types/snack-types";

import OrdersList from "./components/OrdersList";

import OrderDetails from "./components/OrderDetails";

const Orders = () => {
  const { replace } = useHistory();
  const { isLoading, isError } = useOrders();
  const { showSnack } = useContext(SnackbarContext);

  if (isError) {
    showSnack({
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
