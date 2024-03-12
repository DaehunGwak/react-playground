import {Outlet} from "react-router-dom";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {ReactQueryDevtools} from "react-query/devtools";
import {darkTheme, lightTheme} from "./darkTheme";
import {useState} from "react";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`;

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(current => !current);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle/>
        <Outlet context={{ toggleTheme }}/>
        <ReactQueryDevtools initialIsOpen={true}/>
      </ThemeProvider>
    </>
  );
}

export default App;
