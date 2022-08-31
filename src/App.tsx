import React from "react";
import UserContextProvider from "./contexts/UserContext";
import MainRoutes from "./routes";
import { DonationProvider } from "./contexts/DonationContext";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <UserContextProvider>
        <DonationProvider>
          <GlobalStyle />
          <MainRoutes />
        </DonationProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
