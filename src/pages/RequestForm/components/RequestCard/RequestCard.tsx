import React, { memo, useCallback } from "react";
import { CardContent, CardHeader, Typography } from "@material-ui/core";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Color from "../Color";

import { RequestCardProps } from "./RequestCard.interfaces";
import { Colors, Comments, RemoveIcon, Root } from "./RequestCard.styled";

const RequestCard: React.FC<RequestCardProps> = (props) => {
  const { item, index, onRemove, onEdit } = props;
  const { name, colors, id, comments } = item;

  const handleEdit = useCallback(() => {
    onEdit(item);
  }, [item, onEdit]);

  const removeRequest = useCallback(() => {
    onRemove(id);
  }, [id, onRemove]);

  return (
    <Root elevation={5} onClick={handleEdit}>
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
        <Comments>
          <Typography variant="caption">Комментарии</Typography>
          <Typography variant="body1">{comments}</Typography>
        </Comments>
      </CardContent>
    </Root>
  );
};
export default memo(RequestCard);
