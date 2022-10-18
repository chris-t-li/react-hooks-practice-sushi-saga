import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ API, addEmptyPlate, moneyLeft }) {
  const [count, setCount] = useState(0)
  const [sushiArray, setSushiArray] = useState([])

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(allSushi => {
        const sushiArr = allSushi.slice(count * 4, (count + 1) * 4)
        sushiArr.length === 0 ? setCount(0) : setSushiArray(sushiArr);
      })
  }, [count])

  console.log(sushiArray)

  function handleMoreSushi() {
    // console.log("SushiContainer: more sushi")
    setCount(count => count + 1);

  }

  return (
    <div className="belt">
      {sushiArray.map(sushi => <Sushi key={sushi.id} sushi={sushi} addEmptyPlate={addEmptyPlate} moneyLeft={moneyLeft} />)}
      <MoreButton handleMoreSushi={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
