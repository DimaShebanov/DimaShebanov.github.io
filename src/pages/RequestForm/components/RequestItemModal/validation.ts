import { isNumber } from "lodash";
import { array, number, object, string } from "yup";

import { RequestItem, RequestItemColor } from "../../../../types/request-types";

const REQUIRED_MESSAGE = "Це поле обов'язкове";

const STRING_RULE = string()
  .trim()
  .required(REQUIRED_MESSAGE)
  .min(3, "Впишіть мінімум три символи");

const requestItemSchema = object()
  .test({
    name: "requestItem",
    message: "Загальна кількіть одиниць має бути не меньше 10",
    test: (value) => {
      const res = ((value as unknown) as RequestItem)?.colors?.reduce(
        (acc, { sizes }: RequestItemColor) => {
          sizes.forEach(({ count }) => {
            if (isNumber(count) && !Number.isNaN(count)) {
              acc += count;
            }
          });

          return acc;
        },
        0
      );

      return res > 9;
    },
  })
  .shape({
    name: STRING_RULE,
    image: object()
      .shape({
        url: string().required("Обов'язково додайте фото виробу"),
      })
      .required("Обов'язково додайте фото виробу"),
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
              .min(4, "Мінімальна кількість - 4"),
          })
        ),
      })
    ),
  });

export default requestItemSchema;
