import React, { memo } from "react";

import { useRecoilCallback, useRecoilValueLoadable } from "recoil";

import { Route, Switch, useHistory } from "react-router-dom";

import { Typography } from "@material-ui/core";

import { NervousGoose, ScrollContainer } from "../../shared/styled";
import { RECOIL_STATES } from "../../constants";

import Loading from "../../components/Loading";

import { ordersSelector } from "../../recoil/orders/selectors";
import { showSnackbar } from "../../recoil/snacks/actions";
import { SNACKBAR_TYPES } from "../../recoil/snacks/interfaces";

import OrdersList from "./components/OrdersList";

import OrderDetails from "./components/OrderDetails";

const Orders = () => {
  const { replace } = useHistory();
  const { state } = useRecoilValueLoadable(ordersSelector);
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
