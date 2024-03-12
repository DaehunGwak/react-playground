import React from 'react';
import {createGlobalStyle} from "styled-components";
import ToDoList from "./pages/ToDoList";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`;
function App() {
  return (
    <>
      <GlobalStyle/>
      <ToDoList/>
    </>
  );
}

export default App;
