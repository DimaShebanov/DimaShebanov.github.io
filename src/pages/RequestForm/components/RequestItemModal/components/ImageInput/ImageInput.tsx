import React, { ChangeEvent, useCallback, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

import { ImageInputProps } from "./ImageInput.interfaces";
import { AddImage, HiddenInput, InputRoot, Preview } from "./ImageInput.styled";

const ImageInput: React.FC<ImageInputProps> = (props) => {
  const { value, onChange } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || ({} as File);
      const url = URL.createObjectURL(file);
      onChange({
        file,
        url,
      });
    },
    [onChange]
  );

  const handleOpen = useCallback(() => {
    inputRef.current?.click();
  }, []);

  return (
    <InputRoot>
      <HiddenInput type="file" onChange={handleChange} ref={inputRef} />
      {value ? (
        <Preview src={value?.url} alt="" onClick={handleOpen} />
      ) : (
        <AddImage onClick={handleOpen} variant="outlined" color="primary">
          <FontAwesomeIcon icon={faPlus} size="2x" />
        </AddImage>
      )}
    </InputRoot>
  );
};

export default ImageInput;