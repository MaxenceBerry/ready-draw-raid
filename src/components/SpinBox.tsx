import React, { useState } from "react";

function SpinBox() {
  let [cardCounter, setcardCounter] = useState(0);

  const addOneCardToCollection = () => {
    console.log("addOneCardToCollection");
    const tempValue = cardCounter;
    setcardCounter(tempValue + 1);
  };

  const removeOneCardToCollection = () => {
    console.log("removeOneCardToCollection");

    const tempValue = cardCounter;
    if (tempValue > 0) {
      setcardCounter(tempValue - 1);
    }
  };
  return (
    <div className="col-sm-12 text-center">
      <button
        type="button"
        onClick={removeOneCardToCollection}
        className="btn btn-dark"
      >
        -
      </button>
      {cardCounter}
      <button
        type="button"
        onClick={addOneCardToCollection}
        className="btn btn-dark"
      >
        +
      </button>
    </div>
  );
}

export default SpinBox;
