import { useCallback, useEffect, useMemo, useRef } from "react";

import { useFieldArray, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { get, isEmpty, isNil } from "lodash";

import { useMutation } from "react-query";

import getRequestItem from "../../../utils/getRequestItem";
import getColor from "../../../utils/getColor";
import { RequestItemModalProps } from "../RequestItemModalContent.interfaces";
import requestItemSchema from "../validation";
import {
  RequestItem,
  RequestItemColor,
} from "../../../../../types/request-types";
import {
  deleteImageMutation,
  uploadImageMutation,
} from "../../../../../store/request/mutations";

const resolver = yupResolver<RequestItem>(requestItemSchema);

const useRequestItemModalContent = (props: RequestItemModalProps) => {
  const { onSave, editItem } = props;
  const editItemRef = useRef<RequestItem | undefined>(editItem);
  editItemRef.current = editItem;
  const { isLoading: deleteLoading, mutateAsync: deleteImage } = useMutation(
    deleteImageMutation
  );
  const { isLoading: uploadLoading, mutateAsync: uploadImage } = useMutation(
    uploadImageMutation
  );

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

  const handleSave = useCallback(async (requestItem: RequestItem) => {
    if (editItemRef.current?.image) {
      await deleteImage(editItemRef.current.image);
    }

    const image = await uploadImage(requestItem.image);
    const preparedRequestItem = {
      ...requestItem,
      image,
    };

    onSave(preparedRequestItem);
  }, []);

  const onSubmit = useMemo(() => handleSubmit(handleSave), [
    handleSubmit,
    onSave,
  ]);

  const isEdit = !isEmpty(editItem);
  const imageLoading = deleteLoading || uploadLoading;

  return {
    ...props,
    formContext,
    colors,
    isEdit,
    imageLoading,
    onColorRemove,
    onColorAdd,
    onSubmit,
    getError,
  };
};

export default useRequestItemModalContent;
