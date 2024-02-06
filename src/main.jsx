import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "/Routes";

import GlobalStyle from "/Styles/global";
import { ThemeProvider } from "styled-components";
import theme from "/Styles/theme";

import { AuthProvider } from "/Hooks/auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
