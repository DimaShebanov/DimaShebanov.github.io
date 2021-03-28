import faker from "faker";

import { RequestItem } from "../RequestForm.interfaces";

import getColor from "./getColor";

const getRequestItem = (): RequestItem => ({
  id: faker.random.uuid(),
  colors: [getColor()],
  name: "",
});

export default getRequestItem;
