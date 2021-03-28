import React, { useCallback, useState } from "react";
import {
  Button,
  DialogContent,
  TextField,
  Typography,
} from "@material-ui/core";
import { Controller, FormProvider, useForm } from "react-hook-form";

import produce from "immer";

import getRequestItem from "../RequestForm/utils/getRequestItem";

import { RequestItemColor } from "../RequestForm/RequestForm.interfaces";

import getColor from "../RequestForm/utils/getColor";

import getSize from "../RequestForm/utils/getSize";

import { RequestItemModalProps } from "./RequestItemModalContent.interfaces";
import {
  Footer,
  Header,
  Root,
  SubmitButton,
} from "./RequestItemModalContent.styled";
import ColorItem from "./components/ColorItem";

const RequestItemModalContent: React.FC<RequestItemModalProps> = (props) => {
  const { isOpen, onClose } = props;
  const item = getRequestItem();
  const formContext = useForm({
    defaultValues: item,
  });
  const [colors, setColors] = useState<RequestItemColor[]>(item.colors);
  // const { fields: colors, append } = useFieldArray<RequestItemColor>({
  //   name: "colors",
  //   control,
  // });

  const onColorAdd = useCallback(() => {
    setColors((prevColors) => [...prevColors, getColor()]);
  }, []);

  const onColorRemove = useCallback((colorIndex: number) => {
    setColors((prevColors) =>
      produce(prevColors, (draft) => {
        draft.splice(colorIndex, 1);
      })
    );
  }, []);

  const onSizeAdd = useCallback((colorIndex: number) => {
    setColors((prevColors) =>
      produce(prevColors, (draft) => {
        draft[colorIndex]?.sizes?.push(getSize());
      })
    );
  }, []);

  const onSizeRemove = useCallback((colorIndex: number, sizeIndex: number) => {
    setColors((prevColors) =>
      produce(prevColors, (draft) => {
        draft[colorIndex]?.sizes?.splice(sizeIndex, 1);
      })
    );
  }, []);

  return (
    <Root open={isOpen} onClose={onClose}>
      <Header>Добавить новое изделие</Header>
      <DialogContent>
        <FormProvider {...formContext}>
          <Controller
            name="name"
            render={(field) => (
              <TextField {...field} label="Модель" fullWidth margin="dense" />
            )}
          />
          <Typography variant="subtitle1">Цвета</Typography>
          {colors.map((color, colorIndex) => (
            <ColorItem
              key={color.id}
              color={color}
              index={colorIndex}
              onColorRemove={onColorRemove}
              onSizeAdd={onSizeAdd}
              onSizeRemove={onSizeRemove}
            />
          ))}
          <Button
            variant="outlined"
            fullWidth
            color="secondary"
            onClick={onColorAdd}
          >
            + Добавить цвет
          </Button>
        </FormProvider>
      </DialogContent>
      <Footer>
        <Button onClick={onClose}>Отмена</Button>
        <SubmitButton color="primary" variant="contained">
          Сохранить
        </SubmitButton>
      </Footer>
    </Root>
  );
};

export default RequestItemModalContent;
