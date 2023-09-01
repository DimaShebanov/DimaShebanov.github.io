import React, { ChangeEvent, useCallback, useRef } from "react";
import md5 from "md5";

import filetypeinfo from "magic-bytes.js";

import { GuessedFile } from "magic-bytes.js/dist/model/tree";

import { first } from "lodash";

import styled, { css } from "styled-components";
import { Button } from "@material-ui/core";

import { ImageInputProps } from "./ImageInput.interfaces";

const ImageInput: React.FC<ImageInputProps> = (props) => {
  const { value, onChange, error } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const getImageInfo = useCallback(
    (image: File): Promise<GuessedFile[]> =>
      new Promise((resolve) => {
        const reader = new FileReader();

        reader.onloadend = (file) => {
          const bytes = new Uint8Array(file.target?.result as ArrayBuffer);
          const info = filetypeinfo(bytes);
          resolve(info);
        };
        reader.readAsArrayBuffer(image);
      }),
    []
  );

  const handleChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || ({} as File);
      const { extension, mime } = first(
        await getImageInfo(file)
      ) as GuessedFile;
      const url = URL.createObjectURL(file);
      const name = `${md5(file?.name + file?.lastModified)}.${extension}`;

      onChange({ file, name, url, mime, extension });
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
      <HiddenInput
        accept="image/*"
        type="file"
        onChange={handleChange}
        ref={inputRef}
      />
      {getContent()}
    </InputRoot>
  );
};

const InputRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

const imageSizes = css`
  max-width: 50vw;
  max-height: 50vh;
  height: 100px;
  width: 100px;
  margin: 0 auto;
`;

const AddImageButton = styled(Button)<{ error: boolean }>`
  ${imageSizes};
  ${({ error }) => error && "border-color: #f44336"}
`;

const Preview = styled.img`
  ${imageSizes};
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
`;

const HiddenInput = styled.input`
  display: none;
`;

export default ImageInput;
