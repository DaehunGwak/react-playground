import React from 'react';
import {createGlobalStyle} from "styled-components";

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
      <div>hello</div>
    </>
  );
}

export default App;
