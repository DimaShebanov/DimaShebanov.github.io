import { uniqueId } from "lodash";

import { RequestItem } from "../../../types/request-types";

import getColor from "./getColor";

const getRequestItem = (): RequestItem => ({
  id: uniqueId(),
  colors: [getColor()],
  image: {
    url: "",
    name: "",
  },
  name: "",
  comments: "",
});

export default getRequestItem;
