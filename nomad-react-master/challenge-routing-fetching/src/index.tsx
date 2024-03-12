import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme";
import {QueryClient, QueryClientProvider} from "react-query";
import {RouterProvider} from "react-router-dom";
import {router} from "./Router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

