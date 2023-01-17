import { useFieldArray, useWatch } from "react-hook-form";
import { useCallback, useLayoutEffect, useMemo } from "react";

import getSize from "../../../../../utils/getSize";
import { ColorItemProps } from "../ColorItem.interfaces";
import { RequestItemColorSize } from "../../../../../../../types/request-types";

const useColorItem = (props: ColorItemProps) => {
  const { index, onColorRemove, item, getError } = props;
  const { fields: sizes, append, remove } = useFieldArray({
    name: `colors[${index}].sizes`,
  });

  const sizeObjects = useWatch<Array<RequestItemColorSize>>({
    name: `colors[${index}].sizes`,
  });

  const usedSizes = useMemo(() => sizeObjects?.map(({ size }) => size) || [], [
    sizeObjects,
  ]);

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
    usedSizes,
    handleAddSize,
    handleRemoveSize,
    handleRemoveColor,
  };
};

export default useColorItem;
