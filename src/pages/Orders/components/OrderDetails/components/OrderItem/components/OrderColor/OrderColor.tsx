import React from "react";

import { TableCell, TableRow } from "@material-ui/core";

import { getCountKey } from "../../../../../../utils/getCountKey";

import { OrderColorProps } from "./OrderColor.interfaces";

const OrderColor: React.FC<OrderColorProps> = (props) => {
  const { item, sizes, countsMap } = props;
  const { color } = item;

  return (
    <TableRow>
      <TableCell>{color}</TableCell>
      {sizes.map((size) => (
        <TableCell key={size}>{countsMap[getCountKey(color, size)]}</TableCell>
      ))}
    </TableRow>
  );
};

export default OrderColor;
