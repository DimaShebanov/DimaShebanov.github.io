import { isEmpty } from "lodash";

import { REQUEST_STORAGE_KEY } from "../../../constants";
import { DEFAULT_REQUEST } from "../contants";
import { RequestObject } from "../../../types/request-types";

export const getLocalStorageRequest = (): RequestObject => {
  const requestString = localStorage.getItem(REQUEST_STORAGE_KEY);

  if (!isEmpty(requestString)) {
    try {
      const request = JSON.parse(requestString as string);

      return request as RequestObject;
    } catch (e) {}
  }

  return DEFAULT_REQUEST;
};

export const setLocalStorageRequest = (newRequest: RequestObject) => {
  try {
    const requestString = JSON.stringify(newRequest);

    localStorage.setItem(REQUEST_STORAGE_KEY, requestString);
  } catch (e) {}
};
