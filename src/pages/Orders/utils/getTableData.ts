import { uniq } from "lodash";

import { RequestItemColor } from "../../../recoil/interfaces";

import { getCountKey } from "./getCountKey";

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
    sizes: uniq(allSizes),
    countsMap,
  };
};
