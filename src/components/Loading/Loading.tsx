import React from "react";

import gooseImage from "../../img/chilling_goose.gif";

import { Backdrop, LoadingImage } from "./Loading.styled";

const Loading = () => (
  <Backdrop>
    <LoadingImage src={gooseImage} alt="" />
  </Backdrop>
);

export default Loading;
