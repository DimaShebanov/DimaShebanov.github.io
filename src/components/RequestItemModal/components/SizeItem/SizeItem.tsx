import React, { useCallback } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { Controller } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { SIZES } from "../../../RequestForm/contants";

import { DeleteSize, Root, StyledSelect } from "./SizeItem.styled";
import { SizeItemProps } from "./SizeItem.interfaces";

const sizes = SIZES.map((size) => (
  <MenuItem key={size} value={size}>
    {size}
  </MenuItem>
));

const SizeItem: React.FC<SizeItemProps> = (props) => {
  const { index, colorIndex, onRemove } = props;

  const handleDelete = useCallback(() => {
    onRemove(colorIndex, index);
  }, [colorIndex, index, onRemove]);

  return (
    <Root>
      <FormControl>
        <InputLabel>Размер</InputLabel>
        <Controller
          name={`colors[${colorIndex}].sizes[${index}].size`}
          render={(field) => <StyledSelect {...field}>{sizes}</StyledSelect>}
        />
      </FormControl>
      <Controller
        name={`colors[${colorIndex}].sizes[${index}].count`}
        render={(field) => (
          <TextField {...field} label="Количество" type="number" />
        )}
      />
      <DeleteSize onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} size="xs" />
      </DeleteSize>
    </Root>
  );
};

export default SizeItem;
