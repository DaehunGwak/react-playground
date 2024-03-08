import {Outlet} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import {Fragment} from "react";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`;

// Fragment: React 에서 제공하는 유령 태그
function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <Outlet/>
    </Fragment>
  );
}

export default App;
