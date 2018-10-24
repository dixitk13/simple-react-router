import React from "react";
import styled from "styled-components";

const ErrorView = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <SubTitle>this is the end of the world</SubTitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const SubTitle = styled.div`
  font-size: 14px;
`;

export default ErrorView;
