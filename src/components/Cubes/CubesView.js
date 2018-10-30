import React from "react";
import CubeView from "./CubeView";
import { CubesViewContainer } from "./styled";

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

export default CubesView;
