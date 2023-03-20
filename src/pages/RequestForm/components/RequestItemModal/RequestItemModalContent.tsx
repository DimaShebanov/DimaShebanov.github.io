import React from "react";

import { Controller, FormProvider } from "react-hook-form";

import {
  Button,
  DialogContent,
  FormControl,
  FormHelperText,
  LinearProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import { get, isEmpty } from "lodash";

import { RequestItemModalProps } from "./RequestItemModalContent.interfaces";

import {
  ActionsWrap,
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
    isEdit,
    imageLoading,
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
  const imageError = get(errors, "image.message");
  const hasFooterError =
    !imageLoading && (!isEmpty(itemError) || !isEmpty(imageError));
  const footerError = itemError ?? imageError;

  const getHelperText = () => {
    if (imageLoading) {
      return "Завантажуємо фото...";
    }

    return footerError;
  };

  return (
    <Root open={isOpen} onClose={onClose} disableBackdropClick>
      <Header>
        {isEdit ? "Змінити створений виріб" : "Додати новий виріб"}
      </Header>
      <DialogContent>
        <FormProvider {...formContext}>
          <TitleWrap>
            <Controller name="id" render={() => <div />} />
            <Controller
              name="image"
              render={(field) => (
                <ImageInput
                  value={field.value}
                  onChange={(image) => field.onChange(image)}
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
      {imageLoading && <LinearProgress />}
      <Footer>
        <FormHelperText error={hasFooterError}>
          {getHelperText()}
        </FormHelperText>
        <ActionsWrap>
          <Button onClick={onClose}>Відміна</Button>
          <SubmitButton
            onClick={onSubmit}
            disabled={!isDirty || !isEmpty(errors)}
            color="primary"
            variant="contained"
          >
            Зберегти
          </SubmitButton>
        </ActionsWrap>
      </Footer>
    </Root>
  );
};

export default RequestItemModal;
