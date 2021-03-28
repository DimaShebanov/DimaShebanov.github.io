import React from "react";
import {
  Button,
  Card,
  Divider,
  FormControl,
  IconButton,
} from "@material-ui/core";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const Root = styled(Card)`
  position: relative;
`;

export const SizeWrap = styled(FormControl)`
  min-width: 80px;
  margin-right: 8px;
`;

export const StyledDivider = styled(Divider)`
  background-color: rgba(0, 0, 0, 0.24);
  margin-top: 16px;
`;

export const AddColorIcon = styled(FontAwesomeIcon).attrs({
  icon: faPlus,
})`
  && {
    font-size: 16px;
  }
`;

export const AddColor = styled(Button).attrs({
  startIcon: <AddColorIcon />,
})`
  margin-top: 16px;
`;

export const RemoveIcon = styled(IconButton)`
  position: absolute;
  top: 8px;
  right: 8px;
  color: ${({ theme }) => theme.palette.secondary.main};
  width: 32px;
  height: 32px;
  font-size: 24px;
`;

export const Colors = styled.div`
  display: flex;
  flex-direction: column;
`;
