import React, { useMemo } from "react";

import { TableCell, TableRow } from "@material-ui/core";

import { groupBy } from "lodash";

import { OrderColorProps } from "./OrderColor.interfaces";

const OrderColor: React.FC<OrderColorProps> = (props) => {
  const { item, sizes } = props;
  const { color } = item;

  // TODO try to make it simpler
  const groupedSizes = useMemo(() => groupBy(item.sizes, "size"), [item.sizes]);

  return (
    <TableRow>
      <TableCell>{color}</TableCell>
      {sizes.map((size) => (
        <TableCell key={size}>{groupedSizes[size]?.[0]?.count}</TableCell>
      ))}
    </TableRow>
  );
};

export default OrderColor;
