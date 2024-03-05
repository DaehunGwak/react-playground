import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from "styled-components";
import "./index.css";
import App from './App';

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
}

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);
