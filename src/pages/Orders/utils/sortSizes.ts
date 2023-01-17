import { orderBy } from "lodash";

import { Size } from "../../../types/request-types";

const WeightBySize = {
  [Size.XXS]: 0,
  [Size.XS]: 1,
  [Size.S]: 2,
  [Size.M]: 3,
  [Size.L]: 4,
  [Size.XL]: 5,
  [Size.XXL]: 6,
  custom: 7,
};

export const sortSizes = (sizes: Size[]) =>
  orderBy(sizes, (size) => WeightBySize[size] ?? WeightBySize.custom);
