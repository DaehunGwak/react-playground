import React, {Fragment} from 'react';
import {createGlobalStyle} from "styled-components";
import {ReactQueryDevtools} from "react-query/devtools";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
  }
`;
function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      test
      <ReactQueryDevtools initialIsOpen={true}/>
    </Fragment>
  );
}

export default App;
