import faker from "faker";

import { RequestItemColorSize, Size } from "../../../types/request-types";

const getSize = (): RequestItemColorSize => ({
  id: faker.random.uuid(),
  count: "",
  size: "" as Size,
});

export default getSize;
