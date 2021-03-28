import faker from "faker";

import { RequestItemColor } from "../RequestForm.interfaces";

import getSize from "./getSize";

const getColor = (): RequestItemColor => ({
  id: faker.random.uuid(),
  color: "",
  sizes: [getSize()],
});

export default getColor;
