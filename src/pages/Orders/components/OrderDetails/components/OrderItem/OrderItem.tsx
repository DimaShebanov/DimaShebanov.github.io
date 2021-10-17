import React, { useCallback, useMemo } from "react";

import {
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { getTableData } from "../../../../utils/getTableData";

import { renderTable } from "../../../../utils/renderTable";

import { OrderItemProps } from "./OrderItem.interfaces";
import OrderColor from "./components/OrderColor";
import { StyledCard, StyledCardContent } from "./OrderItem.styled";

const OrderItem: React.FC<OrderItemProps> = (props) => {
  const { item } = props;
  const { name, comments, colors } = item;

  // TODO try to make it simpler
  const { sizes, countsMap } = useMemo(() => getTableData(colors), [colors]);

  const handleCardClick = useCallback(() => {
    const winPrint = window.open();

    winPrint?.document.write(renderTable(item, sizes, countsMap));
    // winPrint?.document.close();
    winPrint?.focus();
    // winPrint?.print();
    // winPrint?.close();
  }, [countsMap, item, sizes]);

  return (
    <StyledCard onClick={handleCardClick}>
      <CardHeader
        title={`Название изделия: ${name}`}
        subheader={`Комментарии к изделию: ${comments}`}
      />
      <StyledCardContent>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>Цвет</TableCell>
              {sizes.map((size) => (
                <TableCell key={size}>{size}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {colors.map((color) => (
              <OrderColor
                key={color.id}
                item={color}
                sizes={sizes}
                countsMap={countsMap}
              />
            ))}
          </TableBody>
        </Table>
      </StyledCardContent>
    </StyledCard>
  );
};

export default OrderItem;
