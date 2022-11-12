import React, { memo, useCallback, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { find } from "lodash";

import { Button, IconButton, Typography } from "@material-ui/core";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ScrollContainer } from "../../../../shared/styled";

import { ordersSelector } from "../../../../recoil/orders/selectors";

import { getTableData } from "../../utils/getTableData";

import { renderTable } from "../../utils/renderTable";

import { printHTMLString } from "../../utils/printHTMLString";

import { Header, HeaderNav, ItemsGrid } from "./OrdersDetails.styled";

import OrderItem from "./components/OrderItem";

const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const orders = useRecoilValue(ordersSelector);

  const order = useMemo(() => find(orders, ["id", id]), [id, orders]);
  const { brandName, dateCreated, requestItems } = order ?? {};

  const handlePDFClick = useCallback(() => {
    const allItemsString = requestItems
      ?.map((item, index) => {
        const { countsMap, sizes } = getTableData(item.colors);
        return renderTable(item, sizes, countsMap, index !== 0);
      })
      ?.join("");

    console.log("allItemsString", allItemsString);

    if (allItemsString) {
      printHTMLString(allItemsString);
    }
  }, [requestItems]);

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
            <Typography variant="h5">Название бренда: {brandName}</Typography>
            <Typography variant="h6">Заказ создан: {dateCreated}</Typography>
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
