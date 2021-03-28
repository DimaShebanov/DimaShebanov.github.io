import React, { memo, useCallback } from "react";
import { CardContent, CardHeader } from "@material-ui/core";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Color from "../Color";

import { RequestCardProps } from "./RequestCard.interfaces";
import { Colors, RemoveIcon, Root } from "./RequestCard.styled";

const RequestCard: React.FC<RequestCardProps> = (props) => {
  const { item, index } = props;
  const { name, colors, id } = item;

  const removeRequest = useCallback(() => {}, [id]);

  return (
    <Root elevation={5}>
      <RemoveIcon onClick={removeRequest}>
        <FontAwesomeIcon icon={faTimes} size="xs" />
      </RemoveIcon>
      <CardHeader title={name || `Изделие №${index}`} />
      <CardContent>
        <Colors>
          {colors.map((color) => (
            <Color key={color.id} color={color} />
          ))}
        </Colors>
      </CardContent>
    </Root>
  );
};
export default memo(RequestCard);
