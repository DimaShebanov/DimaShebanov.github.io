import React, { memo, useCallback, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { find } from "lodash";

import { Button, IconButton, Typography } from "@material-ui/core";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useMutation } from "react-query";

import { ScrollContainer } from "../../../../shared/styled";

import { renderTable } from "../../utils/renderTable";

import { printHTMLString } from "../../utils/printHTMLString";

import useOrders from "../../../../store/orders/hooks/useOrders";

import { updateLastVisitedMutation } from "../../../../store/orders/mutations";

import { Header, HeaderNav, ItemsGrid } from "./OrdersDetails.styled";

import OrderItem from "./components/OrderItem";

const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { orders } = useOrders();
  const { mutate } = useMutation(updateLastVisitedMutation);

  const order = useMemo(() => find(orders, ["id", id]), [id, orders]);
  const { brandName = "", dateCreated = "", requestItems = [] } = order ?? {};

  useEffect(() => {
    if (order?.id) {
      mutate({ id: order.id });
    }
  }, [order, mutate]);

  const handlePDFClick = useCallback(() => {
    const allItemsString = renderTable(requestItems, brandName, dateCreated);

    if (allItemsString) {
      printHTMLString(allItemsString);
    }
  }, [brandName, requestItems]);

  if (!order) {
    return null;
  }

  return (
    <ScrollContainer>
      <Header>
        <HeaderNav>
          <Link to="/orders" replace>
            <IconButton color="secondary">
              <FontAwesomeIcon icon={faArrowLeft} />
            </IconButton>
          </Link>
          <div>
            <Typography variant="h5">Назва бренду: {brandName}</Typography>
            <Typography variant="h6">
              Замовлення створене: {dateCreated}
            </Typography>
          </div>
        </HeaderNav>

        <Button variant="outlined" color="primary" onClick={handlePDFClick}>
          PDF
        </Button>
      </Header>
      <ItemsGrid>
        {requestItems?.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </ItemsGrid>
    </ScrollContainer>
  );
};

export default memo(OrderDetails);
