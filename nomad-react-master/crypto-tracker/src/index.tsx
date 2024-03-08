import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from "styled-components";
import {theme} from "./theme";
import {RouterProvider} from "react-router-dom";
import {router} from "./Router";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);
