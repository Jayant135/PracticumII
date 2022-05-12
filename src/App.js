import "./App.css";
import Web3 from "web3";
import Web3Data from "./Web3Data";
import Upload from "./components/Upload";
import { useEffect, useState } from "react";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [Loader, setLoader] = useState(true);

  const loadWeb3 = async () => {
    //connect web3 with http provider
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const loadBlockchainData = async () => {
    const ethereum = window.ethereum;

    try {
      // Request account access if needed
      const accounts = await ethereum.send("eth_requestAccounts");
      const account = accounts.result[0];
      console.log(account);
      setAccount(account);
      // Accounts now exposed, use them
    } catch (error) {
      // User denied account access
      console.log(error);
    }
    //connect smart contract with web3
    setLoader(false);
    setContract(Web3Data);
  };

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  return (
    <div className="App">
      <Upload />
    </div>
  );
}

export default App;
//UPLOAD
//REGISTER
//ADD INSTITUTE
//GET DOC
//VERIFY DOC
