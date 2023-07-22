import React from "react";

import Breakpoint, { BreakpointProps } from "./Breakpoint";

const Hide = ({ children, ...props }: BreakpointProps) => (
  <Breakpoint {...props} hide>
    {children}
  </Breakpoint>
);

export default Hide;
