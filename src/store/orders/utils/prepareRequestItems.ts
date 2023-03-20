import { isEmpty } from "lodash";

import { RequestItem } from "../../../types/request-types";

export const prepareRequestItems = (items: RequestItem[]): RequestItem[] =>
  items?.map((item) => {
    if (isEmpty(item.image)) {
      const { image, ...restItem } = item;
      return {
        ...restItem,
        image: {
          url: item.imageUrl as string,
          name: "",
        },
      };
    }

    return item;
  });
