import React from "react";

import Routes from "./routes";

import { GlobalStyle } from "./styles/global";

import {  ThemeProvider } from "@material-ui/core";
import theme from "./styles/theme";


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>  
    </>
  );
}

export default App;
