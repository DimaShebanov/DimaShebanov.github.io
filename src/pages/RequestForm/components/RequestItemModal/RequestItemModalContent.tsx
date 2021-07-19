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
import { isEmpty } from "lodash";

import { RequestItemModalProps } from "./RequestItemModalContent.interfaces";

import {
  ColorsWrap,
  Footer,
  Header,
  Root,
  SubmitButton,
} from "./RequestItemModalContent.styled";

import ColorItem from "./components/ColorItem";
import useRequestItemModalContent from "./hooks";

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

  return (
    <Root open={isOpen} onClose={onClose}>
      <Header>Добавить новое изделие</Header>
      <DialogContent>
        <FormProvider {...formContext}>
          <Controller
            name="name"
            render={(field, { invalid }) => (
              <FormControl fullWidth>
                <TextField
                  {...field}
                  label="Что шьем?"
                  fullWidth
                  margin="dense"
                />
                <FormHelperText error={invalid}>
                  {getError(field.name)}
                </FormHelperText>
              </FormControl>
            )}
          />
          <Typography variant="h6">Цвета</Typography>
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
            + Добавить цвет
          </Button>
          <Controller
            name="comments"
            render={(field) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label="Комментарии?"
                multiline
              />
            )}
          />
        </FormProvider>
      </DialogContent>
      <Footer>
        <Button onClick={onClose}>Отмена</Button>
        <SubmitButton
          onClick={onSubmit}
          disabled={!isDirty || !isEmpty(errors)}
          color="primary"
          variant="contained"
        >
          Сохранить
        </SubmitButton>
      </Footer>
    </Root>
  );
};

export default RequestItemModal;
