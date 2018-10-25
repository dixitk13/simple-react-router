import React from "react";
import styled from "styled-components";

const ErrorView = () => {
  return (
    <ErrorViewContainer>
      <ErrorTitle>404</ErrorTitle>
      <ErrorSubTitle>this is the end of the world</ErrorSubTitle>
    </ErrorViewContainer>
  );
};

const ErrorViewContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: papayawhip;
`;

const ErrorTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const ErrorSubTitle = styled.div`
  font-size: 14px;
`;

export default ErrorView;
