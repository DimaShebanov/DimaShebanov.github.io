import { useFieldArray } from "react-hook-form";
import { useCallback, useLayoutEffect } from "react";

import getSize from "../../../../../utils/getSize";
import { ColorItemProps } from "../ColorItem.interfaces";

const useColorItem = (props: ColorItemProps) => {
  const { index, onColorRemove, item, getError } = props;
  const { fields: sizes, append, remove } = useFieldArray({
    name: `colors[${index}].sizes`,
  });

  const handleAddSize = useCallback(() => {
    append(getSize());
  }, [append]);

  const handleRemoveSize = useCallback(
    (sizeIndex) => {
      remove(sizeIndex);
    },
    [remove]
  );

  const handleRemoveColor = useCallback(() => {
    onColorRemove(index);
  }, [index, onColorRemove]);

  useLayoutEffect(() => {
    if (!item?.sizes?.length) {
      handleAddSize();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...props,
    getError,
    sizes,
    handleAddSize,
    handleRemoveSize,
    handleRemoveColor,
  };
};

export default useColorItem;
