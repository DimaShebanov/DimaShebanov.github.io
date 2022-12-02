import { array, number, object, string } from "yup";

const REQUIRED_MESSAGE = "Це поле обов'язкове";

const STRING_RULE = string()
  .trim()
  .required(REQUIRED_MESSAGE)
  .min(3, "Впишіть мінімум три символи");

const requestItemSchema = object().shape({
  name: STRING_RULE,
  image: object().required("Обов'язково додайте фото"),
  colors: array().of(
    object().shape({
      color: STRING_RULE,
      sizes: array().of(
        object().shape({
          size: string()
            .required(REQUIRED_MESSAGE)
            .min(1, "Оберіть або впишіть розмір"),
          count: number()
            .typeError("Кількість має бути цифрою")
            .required(REQUIRED_MESSAGE)
            .min(1, "Кількість не може бути меньше одиниці"),
        })
      ),
    })
  ),
});

export default requestItemSchema;
