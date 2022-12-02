import styled, { css } from "styled-components";
import { Button } from "@material-ui/core";

export const InputRoot = styled.div`
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

export const AddImageButton = styled(Button)<{ error: boolean }>`
  ${imageSizes};
  ${({ error }) => error && "border-color: #f44336"}
`;

export const Preview = styled.img`
  ${imageSizes};
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
`;

export const HiddenInput = styled.input`
  display: none;
`;
