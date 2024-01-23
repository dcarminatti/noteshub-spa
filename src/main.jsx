import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./Styles/global";
import { ThemeProvider } from "styled-components";

import { Routes } from "./Routes";

import theme from "./Styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
