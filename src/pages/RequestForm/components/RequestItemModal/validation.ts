import { array, mixed, number, object, string } from "yup";

import { SIZES } from "../../contants";

const REQUIRED_MESSAGE = "Это поле обязательно для заполнения";

const STRING_RULE = string()
  .trim()
  .required(REQUIRED_MESSAGE)
  .min(3, "Введите минимум три символа");

const requestItemSchema = object().shape({
  name: STRING_RULE,
  colors: array().of(
    object().shape({
      color: STRING_RULE,
      sizes: array().of(
        object().shape({
          size: mixed()
            .required(REQUIRED_MESSAGE)
            .oneOf(SIZES, "Выберите размер"),
          count: number()
            .typeError("Количество должно быть цифрой")
            .required(REQUIRED_MESSAGE)
            .min(1, "Количество не может быть меньше одного"),
        })
      ),
    })
  ),
});

export default requestItemSchema;
