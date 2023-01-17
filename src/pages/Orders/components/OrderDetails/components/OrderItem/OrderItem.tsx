import React, { useCallback, useMemo } from "react";

import {
  Avatar,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { getTableData } from "../../../../utils/getTableData";

import { renderTable } from "../../../../utils/renderTable";

import { printHTMLString } from "../../../../utils/printHTMLString";

import { OrderItemProps } from "./OrderItem.interfaces";
import OrderColor from "./components/OrderColor";
import {
  StyledAvatar,
  StyledCard,
  StyledCardContent,
} from "./OrderItem.styled";

const OrderItem: React.FC<OrderItemProps> = (props) => {
  const { item } = props;
  const { name, comments, colors } = item;

  const { sizes, countsMap } = useMemo(() => getTableData(colors), [colors]);

  const handleCardClick = useCallback(() => {
    printHTMLString(renderTable(item, sizes, countsMap));
  }, [countsMap, item, sizes]);

  return (
    <StyledCard onClick={handleCardClick}>
      <CardHeader
        avatar={
          <StyledAvatar variant="square" src={item.imageUrl} alt={item.name} />
        }
        title={`Назва виробу: ${name}`}
        subheader={`Коментарі до виробу: ${comments}`}
      />
      <StyledCardContent>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>Колір</TableCell>
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
