import React from "react";
import styled from "styled-components";

const HomeView = () => {
  return (
    <HomeViewContainer>
      <h1>Home</h1>
      <HomeSubText>Click to visit specific sections</HomeSubText>
      <Buttons>
        <MangoButton as="a" href="/doesnt-exists">
          404
        </MangoButton>
        <TomatoButton as="a" href="/person">
          People
        </TomatoButton>
      </Buttons>
    </HomeViewContainer>
  );
};

const Buttons = styled.div``;

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  min-width: 100px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-decoration: none;
  text-align: center;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const MangoButton = styled(Button)`
  color: mango;
  border-color: mango;
`;

const HomeViewContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const HomeSubText = styled.div`
  font-size: 15px;
  font-weight: 400;
`;

export default HomeView;
