import React from "react";
import { useRecoilValue } from "recoil";

import { List, ListItem, ListItemText, Paper } from "@material-ui/core";

import { Link } from "react-router-dom";

import { ordersState } from "../../../../recoil/orders";

const OrdersList = () => {
  const orders = useRecoilValue(ordersState);

  return (
    <>
      <Paper>
        <List>
          {orders.map(({ brandName, id, dateCreated }) => (
            <ListItem component={Link} to={`/orders/${id}`} button key={id}>
              <ListItemText primary={brandName} secondary={dateCreated} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </>
  );
};

export default OrdersList;
