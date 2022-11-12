import { orderBy } from "lodash";

import { Size } from "../../../recoil/interfaces";

const WeightBySize = {
  [Size.XS]: 0,
  [Size.S]: 1,
  [Size.M]: 2,
  [Size.L]: 3,
  [Size.XL]: 4,
  [Size.XXL]: 5,
  [Size.XXXL]: 6,
  [Size.XXXXL]: 7,
};

export const sortSizes = (sizes: Size[]) =>
  orderBy(sizes, (size) => WeightBySize[size]);
