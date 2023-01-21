import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [provider, setProvider] = useState(null);
  const connectWallet = async () => {
    try {
      if (typeof window.ethereum != "undefined") {
        //console.log("There is metamask");
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const tprovider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(tprovider);
        setCurrentAccount(accounts[0]);
      } else {
        console.log("You don't have metamask");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    connectWallet();
  }, [currentAccount]);
  return (
    <div className="main">
        <div className="header">
          <p className="logo">WEB3LOTTO</p>
          {currentAccount === "" ? (
            <button className="deposit" onClick={() => connectWallet()}>
              Connect Wallet
            </button>
          ) : (
            <p>...{currentAccount.substring(currentAccount.length - 7)}</p>
          )}
        </div>
        <div className="text">
          Web3 Lottery is a suer centred lottery, deposit any amount of Eth into
          the contract, wait for the timestamp to end , and you might win a
          share of the pool, get your exact Usd deposited equivalent in Eth .
        </div>
      
    </div>
  );
}

export default App;
