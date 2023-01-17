import React from "react";

import { Controller } from "react-hook-form";
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
} from "@material-ui/core";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Column } from "../../RequestItemModalContent.styled";
import SizeItem from "../SizeItem";

import { ColorItemProps } from "./ColorItem.interfaces";
import { ColorHeader, RemoveColor, Root, SizesWrap } from "./ColorItem.styled";
import useColorItem from "./hooks/useColorItem";

const ColorItem: React.FC<ColorItemProps> = (props) => {
  const {
    getError,
    handleAddSize,
    handleRemoveColor,
    handleRemoveSize,
    sizes,
    usedSizes,
    index,
  } = useColorItem(props);

  return (
    <Root>
      <RemoveColor onClick={handleRemoveColor}>
        <FontAwesomeIcon icon={faTimes} />
      </RemoveColor>
      <Column>
        <ColorHeader>
          <Controller
            name={`colors[${index}].color`}
            render={(field, { invalid }) => (
              <FormControl>
                <TextField {...field} label="Колір" />
                <FormHelperText error={invalid}>
                  {getError(field.name)}
                </FormHelperText>
              </FormControl>
            )}
          />
        </ColorHeader>
        <SizesWrap>
          {sizes.map(({ id }, sizeIndex) => (
            <SizeItem
              key={id}
              usedSizes={usedSizes}
              basePath={`colors[${index}].sizes[${sizeIndex}]`}
              index={sizeIndex}
              getError={getError}
              onRemove={handleRemoveSize}
            />
          ))}
          <Button onClick={handleAddSize} variant="outlined">
            Додати розмір
          </Button>
        </SizesWrap>
      </Column>
    </Root>
  );
};

export default ColorItem;
