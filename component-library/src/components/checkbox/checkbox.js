import React from "react";
import "./checkbox.css";

const Checkbox = (props) => (
  <form>
    <div>
      <label class="container">
        {props.label}
        <input type="checkbox" id="checkbox"></input>
        <span className={`checkmark-${props.color}`}></span>
      </label>
    </div>
  </form>
);

export default Checkbox;
