import React, { useCallback } from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { Controller } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { SIZES } from "../../../../contants";

import { DeleteSize, Root, StyledSelect } from "./SizeItem.styled";
import { SizeItemProps } from "./SizeItem.interfaces";

const sizes = SIZES.map((size) => (
  <MenuItem key={size} value={size}>
    {size}
  </MenuItem>
));

const SizeItem: React.FC<SizeItemProps> = (props) => {
  const { index, basePath, onRemove, getError } = props;

  const handleDelete = useCallback(() => {
    onRemove(index);
  }, [index, onRemove]);

  return (
    <Root>
      <FormControl>
        <InputLabel>Размер</InputLabel>
        <Controller
          name={`${basePath}.size`}
          render={(field, { invalid }) => (
            <>
              <StyledSelect
                {...field}
                inputProps={field.value ? { shrink: true } : {}}
              >
                {sizes}
              </StyledSelect>
              <FormHelperText error={invalid}>
                {getError(field.name)}
              </FormHelperText>
            </>
          )}
        />
      </FormControl>
      <Controller
        name={`${basePath}.count`}
        render={(field, { invalid }) => (
          <FormControl>
            <TextField {...field} label="Количество" type="number" />
            <FormHelperText error={invalid}>
              {getError(field.name)}
            </FormHelperText>
          </FormControl>
        )}
      />
      <DeleteSize onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} size="xs" />
      </DeleteSize>
    </Root>
  );
};

export default SizeItem;
