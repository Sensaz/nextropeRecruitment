import { AccountPage } from "./Pages/AccountPage";
import { LoginPage } from "./Pages/LoginPage";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [network, setNetwork] = useState<string | null>(null);

  const handleChangeNetwork = async (networkName: string) => {
    setNetwork(networkName);
  };

  const handleSendETH = (recipient: string, amount: string) => {
    console.log(recipient, amount);
  };

  const handleSendERC20Token = (
    recipient: string,
    amount: string,
    tokenAddress: string,
  ) => {
    console.log(recipient, amount, tokenAddress);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              setNetwork={setNetwork}
              setBalance={setBalance}
              setAccount={setAccount}
            />
          }
        />
        <Route
          path="/account"
          element={
            <AccountPage
              account={account}
              balance={balance}
              setBalance={setBalance}
              setAccount={setAccount}
              network={network}
              onChangeNetwork={handleChangeNetwork}
              onSendETH={handleSendETH}
              onSendERC20Token={handleSendERC20Token}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
