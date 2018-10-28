import React from "react";
import styled from "styled-components";
import CubeView from "./CubeView";

const CubesView = ({ cubes }) => {
  return (
    <CubesViewContainer>
      {cubes &&
        cubes.map((cube, idx) => (
          <CubeView key={`super-cube-${idx}`} {...cube} />
        ))}
    </CubesViewContainer>
  );
};

const CubesViewContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  // margin: 50%;
  // flex-wrap: wrap;
  flex-flow: row wrap;
  align-content: center;
  justify-content: space-around;
  // flex-direction: column;
  align-items: center;
  // background: black;
`;

export default CubesView;
