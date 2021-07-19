import React from "react";

import { Typography } from "@material-ui/core";

import { ColorProps } from "./Color.interfaces";
import {
  ColorControl,
  Content,
  HeaderGrid,
  Root,
  SizesWrap,
} from "./Color.styled";

const Color: React.FC<ColorProps> = (props) => {
  const { color: colorItem } = props;
  const { color, sizes } = colorItem;

  return (
    <Root>
      <HeaderGrid>
        <Typography variant="caption">Цвет изделия</Typography>
        <Typography variant="caption">Размер</Typography>
        <Typography variant="caption">Количество</Typography>
      </HeaderGrid>
      <Content>
        <ColorControl>
          <Typography variant="body1">{color}</Typography>
        </ColorControl>
        <SizesWrap>
          {sizes.map(({ count, size }) => (
            <>
              <Typography variant="body1">{size}</Typography>
              <Typography variant="body1">{count}</Typography>
            </>
          ))}
        </SizesWrap>
      </Content>
    </Root>
  );
};

export default Color;
