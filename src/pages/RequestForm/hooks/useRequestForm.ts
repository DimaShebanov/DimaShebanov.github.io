import { ChangeEvent, useCallback, useState } from "react";
import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";

import {
  requestBrandName,
  requestItemsSelector,
  requestLoading,
  submitRequest,
} from "../../../recoil/request";
import { RequestItemDrawerState } from "../RequestForm.interfaces";
import { INITIAL_DRAWER_STATE } from "../contants";
import { RequestItem } from "../../../recoil/interfaces";

const useRequestForm = () => {
  const [requestItems, setRequestItems] = useRecoilState(requestItemsSelector);
  const [brandName, setBrandName] = useRecoilState(requestBrandName);
  const loading = useRecoilValue(requestLoading);
  const [drawerState, setDrawerState] = useState<RequestItemDrawerState>(
    INITIAL_DRAWER_STATE
  );

  const onBrandNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setBrandName(e.target.value);
    },
    [setBrandName]
  );

  const handleDrawerSubmit = useCallback(
    (submittedItem: RequestItem) => {
      const { id } = submittedItem;
      const { editItem } = drawerState;
      setRequestItems((prevItems) =>
        editItem
          ? prevItems.map((item) => (item.id === id ? submittedItem : item))
          : [...prevItems, submittedItem]
      );
      setDrawerState(INITIAL_DRAWER_STATE);
    },
    [drawerState, setRequestItems]
  );

  const openRequestModal = useCallback((editItem?: RequestItem) => {
    setDrawerState({
      isOpen: true,
      ...(!!editItem && { editItem }),
    });
  }, []);

  const closeRequestModal = useCallback(() => {
    setDrawerState(INITIAL_DRAWER_STATE);
  }, []);

  const handleAddItem = useCallback(() => {
    openRequestModal();
  }, [openRequestModal]);

  const removeRequestItem = useCallback(
    (targetId) => {
      setRequestItems((prevItems) =>
        prevItems.filter(({ id }) => id !== targetId)
      );
    },
    [setRequestItems]
  );

  const onSubmit = useRecoilCallback(submitRequest);

  return {
    requestItems,
    loading,
    handleDrawerSubmit,
    openRequestModal,
    closeRequestModal,
    handleAddItem,
    removeRequestItem,
    onSubmit,
    drawerState,
    brandName,
    onBrandNameChange,
  };
};

export default useRequestForm;
