import { PricesPageData, PricesTableColumnName } from "./types";

export const PRICES_TABLE_COLUMNS: PricesTableColumnName[] = [
  PricesTableColumnName.MODEL,
  PricesTableColumnName.PRICE,
  PricesTableColumnName.EXAMPLE,
  PricesTableColumnName.TEMPLATE,
  PricesTableColumnName.TEMPLATE_MULT,
  PricesTableColumnName.CONSUMPTION,
];

export const PRICES_TABLE_DATA: PricesPageData[] = [
  {
    model: "Футболка",
    pricePerUnit: "від 150 грн",
    examplePrice: "від 195 грн",
    templatePrice: "від 400 грн",
    templateMultiplyPrice: "200 грн/розмір",
    consumption: `основна тканина: 1 м`,
  },
  {
    model: "Світшот",
    pricePerUnit: "від 180 грн",
    examplePrice: "від 235 грн",
    templatePrice: "від 600 грн",
    templateMultiplyPrice: "350 грн/розмір",
    consumption: `основна тканина: 1.3 м`,
  },
  {
    model: "Худі з кишенею кенгуру",
    pricePerUnit: "від 250 грн",
    examplePrice: "від 325 грн",
    templatePrice: "від 750 грн",
    templateMultiplyPrice: "350 грн/розмір",
    consumption: `основна тканина: 1.7 м`,
  },
  {
    model: "Штани трикотажні",
    pricePerUnit: "від 250 грн",
    examplePrice: "від 325 грн",
    templatePrice: "від 750 грн",
    templateMultiplyPrice: "350 грн/розмір",
    consumption: `основна тканина: 1.2 м \nрезинка 4 см: 0.75 м`,
  },
  {
    model: "Шорти трикотажні",
    pricePerUnit: "від 250 грн",
    examplePrice: "від 325 грн",
    templatePrice: "від 750 грн",
    templateMultiplyPrice: "350 грн/розмір",
    consumption: `основна тканина: 0.6 м \nрезинка 4 см: 0.75 м`,
  },
  {
    model: "Сорочка",
    pricePerUnit: "від 490 грн",
    examplePrice: "від 635 грн",
    templatePrice: "від 1000 грн",
    templateMultiplyPrice: "500 грн/розмір",
    consumption: `основна тканина: 1.5 м \nдублерин: 0.35 м, \nґудзики`,
  },
  {
    model: "Купальник",
    pricePerUnit: "від 390 грн",
    examplePrice: "від 500 грн",
    templatePrice: "від 600 грн",
    templateMultiplyPrice: "300 грн/розмір",
    consumption: "основна тканина: 0.3 м - 1 м",
  },
  {
    model: "Піджак",
    pricePerUnit: "від 1500 грн",
    examplePrice: "від 1950 грн",
    templatePrice: "від 1800 грн",
    templateMultiplyPrice: "900 грн/розмір",
    consumption: `основна тканина: 1.65 м \nдублерин: 1.35 м \nпідклад: 1.5 м`,
  },
  {
    model: "Штани класичні",
    pricePerUnit: "від 550 грн",
    examplePrice: "від 715 грн",
    templatePrice: "від 900 грн",
    templateMultiplyPrice: "450 грн/розмір",
    consumption: `основна тканина: 1.35 м \nдублерин: 0.2 м`,
  },
  {
    model: "Куртка з утеплювачем",
    pricePerUnit: "від 1500 грн",
    examplePrice: "від 1950 грн",
    templatePrice: "від 2000 грн",
    templateMultiplyPrice: "1000 грн/розмір",
    consumption: "прораховується індивідуально",
  },
  {
    model: "Пальто",
    pricePerUnit: "від 1500 грн",
    examplePrice: "від 1950 грн",
    templatePrice: "від 2000 грн",
    templateMultiplyPrice: "1000 грн/розмір",
    consumption: "прораховується індивідуально",
  },
];
