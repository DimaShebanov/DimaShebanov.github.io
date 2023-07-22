import React from "react";

import Breakpoint, { BreakpointProps } from "./Breakpoint";

const Show = ({ children, ...props }: BreakpointProps) => (
  <Breakpoint {...props} show>
    {children}
  </Breakpoint>
);

export default Show;
