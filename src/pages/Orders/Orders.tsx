import React, { memo } from "react";

import { useRecoilCallback, useRecoilValueLoadable } from "recoil";

import { useHistory } from "react-router-dom";

import { Typography } from "@material-ui/core";

import { NervousGoose, ScrollContainer } from "../../shared/styled";
import { ordersState } from "../../recoil/orders";
import { RECOIL_STATES } from "../../constants";
import { showSnackbar } from "../../recoil/snacks";
import { SNACKBAR_TYPES } from "../../recoil/snacks.interfaces";

import OrdersList from "./components/OrdersList";

const Orders = () => {
  const { replace } = useHistory();
  const { contents, state } = useRecoilValueLoadable(ordersState);
  const openSnack = useRecoilCallback(showSnackbar);

  console.log("state", state);
  console.log("contents", { ...contents });

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
    return <>LOADING</>;
  }

  return (
    <>
      <ScrollContainer>
        <Typography variant="h6">Список заказов</Typography>

        <OrdersList />
      </ScrollContainer>
    </>
  );
};

export default memo(Orders);
