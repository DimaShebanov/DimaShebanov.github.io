import React from "react";

import { Typography } from "@material-ui/core";

import { ColorProps } from "./Color.interfaces";
import { ColorControl, Root } from "./Color.styled";

const Color: React.FC<ColorProps> = (props) => {
  const { color: colorItem } = props;
  const { color } = colorItem;

  return (
    <Root>
      <ColorControl>
        <Typography variant="caption">Цвет изделия</Typography>
        <Typography variant="body1">{color}</Typography>
      </ColorControl>
      {/* <StyledControl> */}
      {/*  <Typography variant="caption">Размер</Typography> */}
      {/*  <Typography variant="body1">{size}</Typography> */}
      {/* </StyledControl> */}
      {/* <StyledControl> */}
      {/*  <Typography variant="caption">Количество</Typography> */}
      {/*  <Typography variant="body1">{count}</Typography> */}
      {/* </StyledControl> */}
    </Root>
  );
};

export default Color;
