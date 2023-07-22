import React, { ReactNode, useMemo } from "react";
import { useBreakpoint } from "styled-breakpoints/react-styled";
import { isNil } from "lodash";
import { down as downBP, up as upBP } from "styled-breakpoints";

export interface BreakpointProps {
  up?: string;
  down?: string;
  show?: boolean;
  hide?: boolean;
  children: ReactNode;
}

const Breakpoint = ({ up, down, hide, children, show }: BreakpointProps) => {
  const breakpoint = useMemo(() => {
    switch (true) {
      case !isNil(up):
        return upBP(up as string);
      case !isNil(down):
        return downBP(down as string);

      default:
        return () => null;
    }
  }, [down, up]);
  const isActive = useBreakpoint(breakpoint);

  const getContent = () => {
    if (hide) {
      if (isActive) {
        return null;
      }

      return children;
    }

    if (show) {
      if (isActive) {
        return children;
      }

      return null;
    }

    return null;
  };

  return <>{getContent()}</>;
};

export default Breakpoint;
