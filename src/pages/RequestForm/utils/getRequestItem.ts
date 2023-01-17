import faker from "faker";

import { RequestItem } from "../../../types/request-types";

import getColor from "./getColor";

const getRequestItem = (): RequestItem => ({
  id: faker.random.uuid(),
  colors: [getColor()],
  name: "",
  comments: "",
});

export default getRequestItem;
