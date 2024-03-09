import React from 'react';
import {ReactQueryDevtools} from "react-query/devtools";
import {Outlet} from "react-router-dom";
import {AppWrapper, GlobalStyle} from "./styles/CommonStyles";

function App() {
  return (
    <AppWrapper>
      <GlobalStyle/>
      <Outlet/>
      <ReactQueryDevtools initialIsOpen={true}/>
    </AppWrapper>
  );
}

export default App;
