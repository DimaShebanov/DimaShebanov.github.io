export interface PricesPageData {
  model: string;
  pricePerUnit: string;
  examplePrice: string;
  templatePrice: string;
  templateMultiplyPrice: string;
  consumption: string;
}

export enum PricesTableColumnName {
  MODEL = "Модель",
  PRICE = "Пошиття партії \n(ціна за 1 од. в партії від 10 од.)",
  EXAMPLE = "Пошиття зразка",
  TEMPLATE = "Лекало",
  TEMPLATE_MULT = "Розмноження лекал на розміри",
  CONSUMPTION = "Витрата тканини",
}