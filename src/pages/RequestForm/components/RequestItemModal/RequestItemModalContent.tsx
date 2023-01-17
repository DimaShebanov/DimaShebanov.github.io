import React from "react";

import { Controller, FormProvider } from "react-hook-form";

import {
  Button,
  DialogContent,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@material-ui/core";
import { get, isEmpty } from "lodash";

import { RequestItemModalProps } from "./RequestItemModalContent.interfaces";

import {
  ColorsWrap,
  Footer,
  Header,
  Root,
  SubmitButton,
  TitleInputs,
  TitleWrap,
} from "./RequestItemModalContent.styled";

import ColorItem from "./components/ColorItem";
import useRequestItemModalContent from "./hooks";
import ImageInput from "./components/ImageInput/ImageInput";

const RequestItemModal: React.FC<RequestItemModalProps> = (props) => {
  const {
    isOpen,
    formContext,
    colors,
    onColorRemove,
    onColorAdd,
    onClose,
    onSubmit,
    getError,
  } = useRequestItemModalContent(props);

  const {
    formState: { isDirty, errors },
  } = formContext;
  const itemError = get(errors, "requestItem.message");
  const hasItemError = !isEmpty(itemError);

  return (
    <Root open={isOpen} onClose={onClose}>
      <Header>Додати новий виріб</Header>
      <DialogContent>
        <FormHelperText error={hasItemError}>{itemError}</FormHelperText>
        <FormProvider {...formContext}>
          <TitleWrap>
            <Controller
              name="image"
              render={(field) => (
                <ImageInput
                  value={field.value}
                  onChange={(file) => field.onChange(file)}
                  error={getError(field.name)}
                />
              )}
            />
            <TitleInputs>
              <Controller
                name="name"
                render={(field, { invalid }) => (
                  <FormControl fullWidth>
                    <TextField
                      {...field}
                      label="Що шиємо?"
                      fullWidth
                      margin="none"
                    />
                    <FormHelperText error={invalid}>
                      {getError(field.name)}
                    </FormHelperText>
                  </FormControl>
                )}
              />
              <Controller
                name="comments"
                render={(field) => (
                  <TextField
                    {...field}
                    margin="none"
                    fullWidth
                    label="Коментарі?"
                    multiline
                  />
                )}
              />
            </TitleInputs>
          </TitleWrap>

          <Typography variant="h6">Кольори</Typography>
          <ColorsWrap>
            {colors.map((color, colorIndex) => (
              <ColorItem
                key={color.id}
                item={color}
                getError={getError}
                index={colorIndex}
                onColorRemove={onColorRemove}
              />
            ))}
          </ColorsWrap>
          <Button
            variant="outlined"
            fullWidth
            color="secondary"
            onClick={onColorAdd}
          >
            + Додати колір
          </Button>
        </FormProvider>
      </DialogContent>
      <Footer>
        <Button onClick={onClose}>Відміна</Button>
        <SubmitButton
          onClick={onSubmit}
          disabled={!isDirty || !isEmpty(errors)}
          color="primary"
          variant="contained"
        >
          Зберегти
        </SubmitButton>
      </Footer>
    </Root>
  );
};

export default RequestItemModal;
