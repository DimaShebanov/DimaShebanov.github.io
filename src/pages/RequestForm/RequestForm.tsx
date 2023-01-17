import React, { memo } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { AppBar, TextField, Toolbar } from "@material-ui/core";

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
import useRequestForm from "./hooks/useRequestForm";

const RequestForm = () => {
  const {
    loading,
    onSubmit,
    closeRequestModal,
    handleAddItem,
    handleDrawerSubmit,
    openRequestModal,
    removeRequestItem,
    drawerState,
    requestItems,
    brandName,
    onBrandNameChange,
  } = useRequestForm();

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
            disabled={loading || !requestItems.length}
            variant="contained"
            color="secondary"
            onClick={onSubmit}
          >
            {loading ? <StyledProgress size={24} /> : "Відправити"}
          </SubmitButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default memo(RequestForm);
