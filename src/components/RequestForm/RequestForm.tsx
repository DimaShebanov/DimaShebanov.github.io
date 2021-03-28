import React, { memo, useCallback, useMemo, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { sortBy } from "lodash";

import { Container } from "@material-ui/core";

import Header from "../Header";

import RequestItemModal from "../RequestItemModal";

import { AddNewItem, ItemsWrapper, NewItemCard } from "./RequestForm.styled";
import RequestCard from "./components/RequestCard";
import { RequestItem, RequestItemDrawerState } from "./RequestForm.interfaces";

const INITIAL_DRAWER_STATE = {
  isOpen: false,
  editItem: null,
};

const RequestForm = () => {
  const [requestItems, setRequestItems] = useState<Array<RequestItem>>([]);
  const [drawerState, setDrawerState] = useState<RequestItemDrawerState>(
    INITIAL_DRAWER_STATE
  );

  const handleDrawerSubmit = useCallback(
    (submittedItem: RequestItem) => {
      const { id } = submittedItem;
      const { editItem } = drawerState;
      setRequestItems((prevItems) =>
        editItem !== null
          ? prevItems.map((item) => (item.id === id ? submittedItem : item))
          : [...prevItems, submittedItem]
      );
      setDrawerState(INITIAL_DRAWER_STATE);
    },
    [drawerState]
  );

  const openRequestModal = useCallback((editItem?: RequestItem) => {
    setDrawerState({
      editItem: editItem || null,
      isOpen: true,
    });
  }, []);

  const closeRequestModal = useCallback(() => {
    setDrawerState(INITIAL_DRAWER_STATE);
  }, []);

  const handleAddItem = useCallback(() => {
    openRequestModal();
  }, [openRequestModal]);

  // const removeRequestItem = useCallback((targetId) => {
  //   setRequestItems((prevItems) =>
  //     prevItems.filter(({ id }) => id !== targetId)
  //   );
  // }, []);

  const sortedItems = useMemo(
    () => sortBy(requestItems, "colors.length").reverse(),
    [requestItems]
  );

  return (
    <>
      <Header />
      <Container>
        <ItemsWrapper>
          {sortedItems.map((item, index) => (
            <RequestCard item={item} index={index} key={item.id} />
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
          onSubmit={handleDrawerSubmit}
          onClose={closeRequestModal}
        />
      </Container>
    </>
  );
};
export default memo(RequestForm);
