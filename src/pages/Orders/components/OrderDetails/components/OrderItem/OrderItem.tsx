import React, { useEffect, useMemo } from "react";

import {
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { isEmpty } from "lodash";

import { getTableData } from "../../../../utils/getTableData";

import { OrderItemProps } from "./OrderItem.interfaces";
import OrderColor from "./components/OrderColor";

import {
  Description,
  StyledAvatar,
  StyledCard,
  StyledCardContent,
} from "./OrderItem.styled";

const OrderItem: React.FC<OrderItemProps> = (props) => {
  const { item } = props;
  const { name, comments, colors } = item;

  const { sizes, countsMap } = useMemo(() => getTableData(colors), [colors]);
  const hasComment = !isEmpty(comments);

  return (
    <StyledCard>
      <CardHeader
        avatar={
          <StyledAvatar
            variant="square"
            src={item.image?.url}
            alt={item.name}
          />
        }
        title={`Назва виробу: ${name}`}
        subheader={
          <Description>
            Коментарі до виробу: {hasComment && "\n"}
            {comments}
          </Description>
        }
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
