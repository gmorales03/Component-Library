import React from "react";
import "./select.css";

const Select = (props) => (
  <form>
    <select className={`select- ${props.fill} ${props.size}`}>
      <option disabled selected>
        {props.placeholder}
      </option>
    </select>
  </form>
);

export default Select;
