import React from "react";
import { MenuItem } from "@material-ui/core";

const optionsMapper = (option: string) => (
  <MenuItem value={option} key={option}>
    {option}
  </MenuItem>
);

export default optionsMapper;
