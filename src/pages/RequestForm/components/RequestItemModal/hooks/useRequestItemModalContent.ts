import { useCallback, useEffect, useMemo } from "react";

import { useFieldArray, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { get, isNil } from "lodash";

import getRequestItem from "../../../utils/getRequestItem";
import getColor from "../../../utils/getColor";
import { RequestItemModalProps } from "../RequestItemModalContent.interfaces";
import requestItemSchema from "../validation";
import {
  RequestItem,
  RequestItemColor,
} from "../../../../../types/request-types";

const resolver = yupResolver<RequestItem>(requestItemSchema);

const useRequestItemModalContent = (props: RequestItemModalProps) => {
  const { onSave, editItem } = props;

  const formContext = useForm<RequestItem>({
    defaultValues: editItem || getRequestItem(),
    resolver,
    mode: "onChange",
    criteriaMode: "firstError",
  });
  const { control, handleSubmit, errors, clearErrors, formState } = formContext;
  const { fields: colors, remove, append } = useFieldArray<RequestItemColor>({
    name: "colors",
    control,
  });

  useEffect(() => {
    if (formState.isValidating && !isNil(get(errors, "requestItem"))) {
      clearErrors("requestItem");
    }
  }, [formState.isValidating]);

  const onColorAdd = useCallback(() => {
    append(getColor());
  }, [append]);

  const onColorRemove = useCallback(
    (colorIndex: number) => {
      remove(colorIndex);
    },
    [remove]
  );

  const getError = useCallback(
    (name: string) => get(errors, `${name}.message`, null),
    [errors]
  );

  const onSubmit = useMemo(() => handleSubmit(onSave), [handleSubmit, onSave]);

  return {
    ...props,
    formContext,
    colors,
    onColorRemove,
    onColorAdd,
    onSubmit,
    getError,
  };
};

export default useRequestItemModalContent;
