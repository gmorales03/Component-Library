import React, { useState } from "react";
import "./counter.css";

function Counter(props) {
  let [count, updateCount] = useState(props.starting);

  function handleMinus() {
    if (count > props.min) {
      updateCount(count - props.amount);
    }
  }
  function handlePlus() {
    if (count < props.max) updateCount(count + props.amount);
  }

  return (
    <div className="wrapper">
      <button className="counter-button" onClick={handleMinus}>
        -
      </button>
      <p>{count}</p>
      <button className="counter-button" onClick={handlePlus}>
        +
      </button>
    </div>
  );
}

export default Counter;
