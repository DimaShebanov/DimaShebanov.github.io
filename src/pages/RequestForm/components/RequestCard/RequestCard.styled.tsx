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

import { spacing } from "../../../../styling/mixins";

export const StyledCard = styled(Card)`
  position: relative;
  cursor: pointer;
`;

export const SizeWrap = styled(FormControl)`
  min-width: 80px;
  margin-right: ${spacing(1)};
`;

export const StyledDivider = styled(Divider)`
  background-color: rgba(0, 0, 0, 0.24);
  margin-top: ${spacing(2)};
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
  margin-top: ${spacing(2)};
`;

export const RemoveIcon = styled(IconButton)`
  position: absolute;
  top: ${spacing(1)};
  right: ${spacing(1)};
  color: ${({ theme }) => theme.palette.error.main};
  width: ${spacing(4)};
  height: ${spacing(4)};
  font-size: ${spacing(3)};
`;

export const Colors = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Comments = styled.div`
  margin-top: ${spacing(1)};
`;
