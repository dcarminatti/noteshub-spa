import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Styles/global";

import { SignIn } from "./Pages/SignIn";

import theme from "./Styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>
);
