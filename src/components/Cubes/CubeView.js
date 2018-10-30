import React from "react";
import { CubeViewContainer } from "./styled";

const CubeView = ({ name, ...rest }) => {
  return <CubeViewContainer {...rest}>{name}</CubeViewContainer>;
};

export default CubeView;
