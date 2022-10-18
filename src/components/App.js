import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Wallet from "./Wallet";

const API = "http://localhost:3001/sushis";

function App() {
  const [plates, setPlates] = useState([]);
  const [moneyLeft, setMoneyLeft] = useState(100);

  function addEmptyPlate(sushi) {
    setPlates([...plates, sushi])
    setMoneyLeft(cashleft => cashleft - sushi.price)
  }

  function addMoney(amt) {
    setMoneyLeft(cash => cash + amt);
  }

  return (
    <div className="app">
      <SushiContainer API={API} addEmptyPlate={addEmptyPlate} moneyLeft={moneyLeft} />
      <Table plates={plates} moneyLeft={moneyLeft} />
      <Wallet addMoney={addMoney} />
    </div>
  );
}

export default App;
