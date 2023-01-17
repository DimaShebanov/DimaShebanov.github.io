import faker from "faker";

import { RequestItemColor } from "../../../types/request-types";

import getSize from "./getSize";

const getColor = (): RequestItemColor => ({
  id: faker.random.uuid(),
  color: "",
  sizes: [getSize()],
});

export default getColor;
