import {Outlet} from "react-router-dom";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {ReactQueryDevtools} from "react-query/devtools";
import {darkTheme, lightTheme} from "./darkTheme";
import {useRecoilValue} from "recoil";
import {isDarkAtom} from "./atoms";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle/>
        <Outlet/>
        <ReactQueryDevtools initialIsOpen={true}/>
      </ThemeProvider>
    </>
  );
}

export default App;
