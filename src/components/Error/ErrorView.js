import React from "react";
import { ErrorViewContainer, ErrorSubTitle, ErrorTitle } from "./styled";
const ErrorView = () => {
  return (
    <ErrorViewContainer>
      <ErrorTitle>404</ErrorTitle>
      <ErrorSubTitle>this is the end of the world</ErrorSubTitle>
    </ErrorViewContainer>
  );
};

export default ErrorView;
