import React from "react";
import "./button.css";

const Button = (props) => {
  let classList = "";
  let types = ["primary", "danger", "success", "warning"];

  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }
  if (!types.includes(props.type)) {
    classList += `button-`;
    if (props.fill) {
      classList += ` button-${props.fill}`;
    }
  }
  if (props.size) {
    classList += ` button-${props.size}`;
  }
  if (props.fill) {
    classList += ` button-${props.type}-${props.fill}`;
  }

  return (
    <button className={classList} onClick={props.action}>
      {props.icon} {props.label}
    </button>
  );
};

export default Button;
