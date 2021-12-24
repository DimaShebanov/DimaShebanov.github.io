import React, { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { find } from "lodash";

import { Typography } from "@material-ui/core";

import { ScrollContainer } from "../../../../shared/styled";

import { ordersSelector } from "../../../../recoil/orders/selectors";

import { ItemsGrid } from "./OrdersDetails.styled";

import OrderItem from "./components/OrderItem";

const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const orders = useRecoilValue(ordersSelector);

  const order = useMemo(() => find(orders, ["id", id]), [id, orders]);

  if (!order) {
    return null;
  }

  const { brandName, dateCreated, requestItems } = order;

  return (
    <ScrollContainer>
      <Typography variant="h5">Название бренда: {brandName}</Typography>
      <Typography variant="h6">Заказ создан: {dateCreated}</Typography>
      <ItemsGrid>
        {requestItems?.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </ItemsGrid>
    </ScrollContainer>
  );
};

export default memo(OrderDetails);
