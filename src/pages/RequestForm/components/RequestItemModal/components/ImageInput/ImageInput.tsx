import React, { ChangeEvent, useCallback, useRef } from "react";
import md5 from "md5";

import { ImageInputProps } from "./ImageInput.interfaces";
import {
  AddImageButton,
  HiddenInput,
  InputRoot,
  Preview,
} from "./ImageInput.styled";

const ImageInput: React.FC<ImageInputProps> = (props) => {
  const { value, onChange, error } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || ({} as File);
      const url = URL.createObjectURL(file);
      const name = md5(file?.name + file?.lastModified + file?.size);

      onChange({ file, name, url });
    },
    [onChange]
  );

  const handleOpen = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const getContent = () => {
    if (value?.url) {
      return (
        <Preview src={value?.url} alt={value?.name} onClick={handleOpen} />
      );
    }

    return (
      <AddImageButton
        error={!!error}
        onClick={handleOpen}
        variant="outlined"
        color="primary"
      >
        Додати фото
      </AddImageButton>
    );
  };

  return (
    <InputRoot>
      <HiddenInput type="file" onChange={handleChange} ref={inputRef} />
      {getContent()}
    </InputRoot>
  );
};

export default ImageInput;
