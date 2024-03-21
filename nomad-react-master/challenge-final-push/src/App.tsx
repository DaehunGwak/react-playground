import React from 'react';
import {Outlet} from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <AppWrapper>
      <Outlet/>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: antiquewhite;
  color: rgb(0, 24, 0);
`;
