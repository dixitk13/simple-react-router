import styled from "styled-components";

export const Buttons = styled.div``;

export const Button = styled.button`
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

export const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export const MangoButton = styled(Button)`
  color: mango;
  border-color: mango;
`;

export const BlackButton = styled(Button)`
  background: #4c4c4c;
  color: white;
  border-color: #999999;
`;

export const HomeViewContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const HomeSubText = styled.div`
  font-size: 15px;
  font-weight: 400;
`;
