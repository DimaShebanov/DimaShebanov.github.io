import React, { useCallback, useMemo } from "react";

import {
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { uniq } from "lodash";

import { OrderItemProps } from "./OrderItem.interfaces";
import OrderColor from "./components/OrderColor";
import { StyledCard, StyledCardContent } from "./OrderItem.styled";

const OrderItem: React.FC<OrderItemProps> = (props) => {
  const { item } = props;
  const { name, comments, colors } = item;

  const handleCardClick = useCallback(() => {
    const winPrint = window.open(
      "",
      "",
      "left=0,top=0,width=800,height=600,toolbar=0,scrollbars=0,status=0"
    );
    winPrint?.document.write(
      "<title>Print  Report</title><br /><br /> Hello World"
    );
    // winPrint?.document.close();
    winPrint?.focus();
    winPrint?.print();
    winPrint?.close();
  }, []);

  // TODO try to make it simpler
  const presentSizes = useMemo(
    () =>
      uniq(
        colors.reduce(
          (acc, { sizes }) => [...acc, ...sizes.map(({ size }) => size)],
          [] as string[]
        )
      ),
    [colors]
  );

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
              {presentSizes.map((size) => (
                <TableCell key={size}>{size}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {colors.map((color) => (
              <OrderColor key={color.id} item={color} sizes={presentSizes} />
            ))}
          </TableBody>
        </Table>
      </StyledCardContent>
    </StyledCard>
  );
};

export default OrderItem;
