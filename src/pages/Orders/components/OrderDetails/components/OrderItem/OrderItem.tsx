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

  useEffect(() => {
    const aaaa = async () => {
      console.log("sending");
      const awdw = await fileTypeFromFile(
        "https://firebasestorage.googleapis.com/v0/b/client-form-mama-gus.appspot.com/o/897c08a581028b80011b94a22d1f3b48?alt=media&token=05fe766c-4318-4aea-9f8d-74c526e0bb38"
      );
      console.log("awdw", awdw);
    };

    aaaa();
  }, []);

  // https://firebasestorage.googleapis.com/v0/b/client-form-mama-gus.appspot.com/o/897c08a581028b80011b94a22d1f3b48?alt=media&token=05fe766c-4318-4aea-9f8d-74c526e0bb38

  return (
    <StyledCard>
      <CardHeader
        avatar={
          <StyledAvatar
            variant="square"
            src={`${item.image?.url}.jpg`}
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
