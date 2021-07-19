import faker from "faker";

import { RequestItemColorSize } from "../../../recoil/interfaces";

const getSize = (): RequestItemColorSize => ({
  id: faker.random.uuid(),
  count: "",
  size: "",
});

export default getSize;
