import React, { useCallback } from "react";

import { Controller } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Column,
  SizesWrap,
  StyledDivider,
} from "../../RequestItemModalContent.styled";
import SizeItem from "../SizeItem";

import { ColorItemProps } from "./ColorItem.interfaces";
import { ColorHeader, RemoveColor, Root } from "./ColorItem.styled";

const ColorItem: React.FC<ColorItemProps> = (props) => {
  const { index, color, onSizeRemove, onSizeAdd, onColorRemove } = props;

  const handleSizeAdd = useCallback(() => {
    onSizeAdd(index);
  }, [index, onSizeAdd]);

  const handleRemoveColor = useCallback(() => {
    onColorRemove(index);
  }, [index, onColorRemove]);

  return (
    <Root>
      <StyledDivider variant="fullWidth" />
      <Column>
        <ColorHeader>
          <Controller
            name={`colors[${index}].color`}
            render={(field) => (
              <TextField {...field} margin="dense" label="Цвет" />
            )}
          />
          <RemoveColor onClick={handleRemoveColor} color="secondary">
            <FontAwesomeIcon icon={faTimes} />
          </RemoveColor>
        </ColorHeader>
        <SizesWrap>
          {color.sizes.map(({ id }, sizeIndex) => (
            <SizeItem
              key={id}
              colorIndex={index}
              index={sizeIndex}
              onRemove={onSizeRemove}
            />
          ))}
          <Button onClick={handleSizeAdd} variant="outlined">
            Добавить размер
          </Button>
        </SizesWrap>
      </Column>
    </Root>
  );
};

export default ColorItem;
