import React, { useEffect } from "react";
import { List, ListItem, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { isNumber } from "lodash";

import useOrders from "../../../../store/orders/hooks/useOrders";

import { NewLabel, StyledListItemText } from "./OrdersList.styled";

const OrdersList = () => {
  const { orders, refetch } = useOrders();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <Paper>
        <List>
          {orders?.map(
            ({ brandName, id, dateCreated, requestItems, lastVisited }) => {
              const isOld = isNumber(lastVisited) && !Number.isNaN(lastVisited);
              return (
                <ListItem component={Link} to={`/orders/${id}`} button key={id}>
                  <StyledListItemText
                    primary={
                      <div>
                        {brandName} ({requestItems?.length} од.)
                        {!isOld && <NewLabel>NEW</NewLabel>}
                      </div>
                    }
                    secondary={dateCreated}
                  />
                </ListItem>
              );
            }
          )}
        </List>
      </Paper>
    </>
  );
};

export default OrdersList;
