import React from "react";
import { useRecoilValue } from "recoil";

import { List, ListItem, ListItemText, Paper } from "@material-ui/core";

import { ordersState } from "../../../../recoil/orders";

const OrdersList = () => {
  const orders = useRecoilValue(ordersState);
  return (
    <>
      <Paper>
        <List>
          {orders.map(({ brandName, id, dateCreated }) => (
            <ListItem button key={id}>
              <ListItemText primary={brandName} secondary={dateCreated} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </>
  );
};

export default OrdersList;
