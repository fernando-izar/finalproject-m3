import React from "react";
import { UserProvider } from "./contexts/UserContext";
import { DonationProvider } from "./contexts/DonationContext";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <UserProvider>
        <DonationProvider>
          <GlobalStyle />
          <Routes />
        </DonationProvider>
      </UserProvider>
    </>
  );
}

export default App;
