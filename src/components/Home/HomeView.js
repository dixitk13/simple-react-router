import React from "react";
import {
  HomeViewContainer,
  HomeSubText,
  Buttons,
  MangoButton,
  BlackButton,
  TomatoButton
} from "./styled";

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
        <BlackButton as="a" href="/cubes">
          Cubes
        </BlackButton>
      </Buttons>
    </HomeViewContainer>
  );
};

export default HomeView;
