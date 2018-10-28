import React from "react";
import styled from "styled-components";

const CubeView = ({ name, ...rest }) => {
  return <CubeViewContainer {...rest}>{name}</CubeViewContainer>;
};

const CubeViewContainer = styled.div`
  flex-basis: 20%;
  height: 20%;
  margin: 15px;
  border-radius: 3px;
  border: 0.5px solid red;
  text-align: center;
  color: ${props => props.color || "black"};
  background: ${props => props.background || "white"};
`;

export default CubeView;
