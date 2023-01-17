import { uniq } from "lodash";

import { RequestItemColor, Size } from "../../../types/request-types";

import { getCountKey } from "./getCountKey";
import { sortSizes } from "./sortSizes";

export const getTableData = (colors: Array<RequestItemColor>) => {
  const allSizes: Array<string> = [];
  const countsMap: Record<string, string> = {};

  colors.forEach(
    ({ sizes, color }) =>
      allSizes.push(
        ...sizes.map(({ size, count }) => {
          countsMap[getCountKey(color, size)] = count;
          return size;
        })
      ),
    [] as string[]
  );

  return {
    sizes: sortSizes(uniq(allSizes) as Size[]),
    countsMap,
  };
};
