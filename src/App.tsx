import React from "react";
import UserContextProvider from "./contexts/UserContext";
import MainRoutes from "./routes";

import Routes from "./routes";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <UserContextProvider>
        <GlobalStyle />
        <MainRoutes />
      </UserContextProvider>
    </>
  );
}

export default App;
