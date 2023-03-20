import React, { useCallback, useMemo, useState } from "react";
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  TextField,
} from "@material-ui/core";
import { Controller, useWatch } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";

import { SIZES } from "../../../../contants";

import { CUSTOM_SIZE } from "../../../../../../constants";

import { Size } from "../../../../../../types/request-types";

import {
  DeleteSize,
  Root,
  SizeFormControl,
  StyledSelect,
} from "./SizeItem.styled";
import { SizeItemProps } from "./SizeItem.interfaces";

const SizeItem: React.FC<SizeItemProps> = (props) => {
  const { index, basePath, onRemove, getError, usedSizes } = props;
  const [showCustomSize, setShowCustomSize] = useState(false);
  const sizeValue = useWatch<string>({ name: `${basePath}.size` });
  const someString: string = 99;

  const options = useMemo(
    () =>
      SIZES.filter(
        (sizeOption) =>
          sizeOption === sizeValue || !usedSizes.includes(sizeOption || "")
      ).concat(CUSTOM_SIZE as Size),
    [sizeValue, usedSizes]
  );

  const handleBackToSelectClick = useCallback(() => {
    setShowCustomSize(false);
  }, []);

  const handleDelete = useCallback(() => {
    onRemove(index);
  }, [index, onRemove]);

  return (
    <Root>
      {showCustomSize ? (
        <Controller
          name={`${basePath}.size`}
          render={(field, { invalid }) => (
            <FormControl>
              <TextField
                {...field}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <FontAwesomeIcon
                        cursor="pointer"
                        onClick={handleBackToSelectClick}
                        icon={faTimes}
                        size="xs"
                      />
                    </InputAdornment>
                  ),
                }}
                label={`Напишіть ${CUSTOM_SIZE.toLowerCase()}`}
              />
              <FormHelperText error={invalid}>
                {getError(field.name)}
              </FormHelperText>
            </FormControl>
          )}
        />
      ) : (
        <SizeFormControl>
          <InputLabel>Розмір</InputLabel>
          <Controller
            name={`${basePath}.size`}
            render={(field, { invalid }) => (
              <>
                <StyledSelect
                  {...field}
                  onChange={(e) => {
                    const { value } = e.target;
                    if (value === CUSTOM_SIZE) {
                      setShowCustomSize(true);
                    } else {
                      field.onChange(e);
                    }
                  }}
                  native
                  inputProps={field.value ? { shrink: true } : {}}
                >
                  <option aria-label="None" value="" />
                  {options.map((size) => (
                    <option
                      key={size}
                      value={size}
                      selected={size === field.value}
                    >
                      {size}
                    </option>
                  ))}
                </StyledSelect>
                {!showCustomSize && (
                  <FormHelperText error={invalid}>
                    {getError(field.name)}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </SizeFormControl>
      )}
      <Controller
        name={`${basePath}.count`}
        render={(field, { invalid }) => (
          <FormControl>
            <TextField {...field} label="Кількість" type="number" />
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
