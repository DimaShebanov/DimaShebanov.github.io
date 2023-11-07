import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  memo,
  useCallback,
  useContext,
  useState,
} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { AppBar, TextField, Toolbar } from "@material-ui/core";

import { useMutation } from "react-query";

import produce from "immer";

import { findIndex, isEmpty, isFunction } from "lodash";

import { RequestItem, RequestObject } from "../../types/request-types";

import {
  deleteImageMutation,
  sendRequestMutation,
} from "../../store/request/mutations";

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

import { INITIAL_DRAWER_STATE } from "./contants";
import {
  getLocalStorageRequest,
  setLocalStorageRequest,
} from "./utils/localStorage";

const RequestForm = () => {
  const { showSnack } = useContext(SnackbarContext);
  const { isLoading, mutateAsync } = useMutation(sendRequestMutation);
  const { mutate: deleteImageFromCloud } = useMutation(deleteImageMutation);

  const [drawerState, setDrawerState] = useState(INITIAL_DRAWER_STATE);
  const [request, _setRequest] = useState<RequestObject>(
    getLocalStorageRequest()
  );
  
  const { brandName, requestItems } = request;

  const setRequest: Dispatch<SetStateAction<RequestObject>> = useCallback(
    (updater) => {
      _setRequest((oldRequest) => {
        let newRequest = updater;

        if (isFunction(updater)) {
          newRequest = updater(oldRequest);
        }

        newRequest = newRequest as RequestObject;

        setLocalStorageRequest(newRequest);

        return newRequest;
      });
    },
    []
  );

  const onBrandNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setRequest(
      produce((draft) => {
        draft.brandName = e.target.value;
      })
    );
  }, []);

  const handleDrawerSubmit = useCallback((submittedItem: RequestItem) => {
    const { id } = submittedItem;
    setRequest(
      produce((draft) => {
        const itemIndex = findIndex(draft.requestItems, { id });

        if (itemIndex !== -1) {
          draft.requestItems.splice(itemIndex, 1, submittedItem);
        } else {
          draft.requestItems.push(submittedItem);
        }
      })
    );
    setDrawerState(INITIAL_DRAWER_STATE);
  }, []);

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

  const removeRequestItem = useCallback((targetId) => {
    setRequest(
      produce((draft) => {
        draft.requestItems = draft.requestItems.filter(({ id, image }) => {
          deleteImageFromCloud({ ...image });
          return id !== targetId;
        });
      })
    );
  }, []);

  const onSubmit = useCallback(async () => {
    try {
      if (isEmpty(brandName)) {
        showSnack({
          type: SNACKBAR_TYPES.error,
          content: "Будь ласка, напишіть назву свого бренду",
        });
        return;
      }
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
