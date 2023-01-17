import faker from "faker";

import { RequestItemColorSize } from "../../../types/request-types";

const getSize = (): RequestItemColorSize => ({
  id: faker.random.uuid(),
  count: "",
  size: "",
});

export default getSize;
