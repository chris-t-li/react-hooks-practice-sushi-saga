import React, { useState } from "react";

function Sushi({ sushi, addEmptyPlate, moneyLeft }) {
  const [isSushiEaten, setIsSushiEaten] = useState(false);

  function takeSushi() {
    if (moneyLeft >= sushi.price) {
      setIsSushiEaten(true);
      addEmptyPlate(sushi)
      deleteSushifromDB(sushi.id);
      console.log(sushi)
    }
  }
  function deleteSushifromDB(id) {
    fetch(`http://localhost:3001/sushis/${id}`, {
      method: "DELETE"
    })
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={takeSushi}>
        {isSushiEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
