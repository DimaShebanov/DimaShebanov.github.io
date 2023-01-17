import React, {
  ChangeEvent,
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { AppBar, TextField, Toolbar } from "@material-ui/core";

import { useMutation } from "react-query";

import produce from "immer";

import { BRAND_NAME_STORAGE_KEY } from "../../constants";

import { RequestItem, RequestObject } from "../../types/request-types";

import { sendRequestMutation } from "../../store/request/mutations";

import SnackbarContext from "../../components/SnackbarProvider/SnackbarContext";

import { SNACKBAR_TYPES } from "../../types/snack-types";

import RequestItemModal from "./components/RequestItemModal";

import {
  AddNewItem,
  ItemsWrapper,
  NewItemCard,
  StyledProgress,
  StyledScrollContainer,
  SubmitButton,
} from "./RequestForm.styled";
import RequestCard from "./components/RequestCard";

import { RequestItemDrawerState } from "./RequestForm.interfaces";
import { INITIAL_DRAWER_STATE } from "./contants";

const RequestForm = () => {
  const { showSnack } = useContext(SnackbarContext);
  const storedBrandName = localStorage.getItem(BRAND_NAME_STORAGE_KEY) || "";
  const { isLoading, mutateAsync } = useMutation(sendRequestMutation);

  const [drawerState, setDrawerState] = useState(INITIAL_DRAWER_STATE);
  const [request, setRequest] = useState<RequestObject>({
    brandName: localStorage.getItem(BRAND_NAME_STORAGE_KEY) || "",
    requestItems: [],
  } as RequestObject);

  const { brandName, requestItems } = request;

  useEffect(() => {
    if (storedBrandName !== brandName) {
      localStorage.setItem(BRAND_NAME_STORAGE_KEY, brandName);
    }
  }, [brandName, storedBrandName]);

  const onBrandNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setRequest(
      produce((draft) => {
        draft.brandName = e.target.value;
      })
    );
  }, []);

  const handleDrawerSubmit = useCallback(
    (submittedItem: RequestItem) => {
      const { id } = submittedItem;
      const { editItem } = drawerState;
      setRequest(
        produce((draft) => {
          if (editItem) {
            draft.requestItems = draft.requestItems.map((item) =>
              item.id === id ? submittedItem : item
            );
          } else {
            draft.requestItems.push(submittedItem);
          }
        })
      );
      setDrawerState(INITIAL_DRAWER_STATE);
    },
    [drawerState]
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
    (targetId) =>
      setRequest(
        produce((draft) =>
          draft.requestItems.filter(({ id }) => id !== targetId)
        )
      ),
    []
  );

  const onSubmit = useCallback(async () => {
    try {
      await mutateAsync(request);
      showSnack({
        content: "Замовлення відправлене",
        type: SNACKBAR_TYPES.success,
      });
      setRequest(
        produce((draft) => {
          draft.requestItems = [];
        })
      );
    } catch (e) {
      showSnack({
        content: "Йой, щось пішло не так. Спробуйте ще раз",
        type: SNACKBAR_TYPES.error,
      });
    }
  }, [mutateAsync, request, showSnack]);

  return (
    <>
      <StyledScrollContainer>
        <TextField
          label="Назва бренду"
          value={brandName}
          margin="normal"
          onChange={onBrandNameChange}
        />
        <ItemsWrapper>
          {requestItems.map((item, index) => (
            <RequestCard
              item={item}
              index={index}
              key={item.id}
              onEdit={openRequestModal}
              onRemove={removeRequestItem}
            />
          ))}
          <NewItemCard elevation={5}>
            <AddNewItem
              color="primary"
              onClick={handleAddItem}
              variant="outlined"
            >
              <FontAwesomeIcon icon={faPlus} />
            </AddNewItem>
          </NewItemCard>
        </ItemsWrapper>
        <RequestItemModal
          {...drawerState}
          onSave={handleDrawerSubmit}
          onClose={closeRequestModal}
        />
      </StyledScrollContainer>
      <AppBar elevation={2} position="sticky" component="footer">
        <Toolbar variant="dense">
          <SubmitButton
            disabled={isLoading || !requestItems.length}
            variant="contained"
            color="secondary"
            onClick={onSubmit}
          >
            {isLoading ? <StyledProgress size={24} /> : "Відправити"}
          </SubmitButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default memo(RequestForm);
