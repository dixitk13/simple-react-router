import styled from "styled-components";

export const CubeViewContainer = styled.div`
  flex-basis: 20%;
  height: 20%;
  margin: 15px;
  border-radius: 3px;
  border: 0.5px solid red;
  text-align: center;
  color: ${props => props.color || "black"};
  background: ${props => props.background || "white"};
`;

export const CubesViewContainer = styled.div`
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
