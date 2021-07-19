import { useCallback, useState } from "react";

import { UseToggleState } from "./useToggleState.interfaces";

const useToggleState: UseToggleState = (initialState) => {
  const [state, setState] = useState(initialState);

  const setTrue = useCallback(() => {
    setState(true);
  }, []);

  const setFalse = useCallback(() => {
    setState(false);
  }, []);

  const toggle = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  return [state, setTrue, setFalse, toggle];
};

export default useToggleState;
