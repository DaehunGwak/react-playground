import React from 'react';
import {GlobalStyle} from "./styles/GlobalStyle";
import CountiesViewModel from "./view-models/CountiesViewModel";

function App() {
  return (
    <>
      <GlobalStyle/>
      <CountiesViewModel/>
    </>
  );
}

export default App;
