import React, { memo } from "react";

import { useRecoilCallback, useRecoilValueLoadable } from "recoil";

import { Route, Switch, useHistory } from "react-router-dom";

import { Typography } from "@material-ui/core";

import { NervousGoose, ScrollContainer } from "../../shared/styled";
import { ordersState } from "../../recoil/orders";
import { RECOIL_STATES } from "../../constants";
import { showSnackbar } from "../../recoil/snacks";
import { SNACKBAR_TYPES } from "../../recoil/snacks.interfaces";

import Loading from "../../components/Loading";

import OrderDetails from "./components/OrderDetails";

import OrdersList from "./components/OrdersList";

const Orders = () => {
  const { replace } = useHistory();
  const { state } = useRecoilValueLoadable(ordersState);
  const openSnack = useRecoilCallback(showSnackbar);

  if (state === RECOIL_STATES.HAS_ERROR) {
    openSnack({
      type: SNACKBAR_TYPES.error,
      icon: <NervousGoose />,
      content:
        "Частная территория гуся. Мы вернули вас обратно что бы он не нервничал",
    });
    replace("/");
  }

  if (state === RECOIL_STATES.LOADING) {
    return <Loading />;
  }

  return (
    <>
      <Switch>
        <Route path="/orders/:id" component={OrderDetails} />
        <Route path="/orders">
          <ScrollContainer>
            <Typography variant="h6">Список заказов</Typography>
            <OrdersList />
          </ScrollContainer>
        </Route>
      </Switch>
    </>
  );
};

export default memo(Orders);
