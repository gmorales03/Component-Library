import React from "react";
import "./inputButton.css";
import Form from "../form/form.js";
import "../form/form.css";
import Button from "../button/button.js";
import "../button/button.css";

function InputButton(props) {
  function clicked() {
    let formInput = document.getElementById("inputForm").value;
    alert(formInput);
  }
  return (
    <div>
      <Form placeholder={props.placeholder} size={props.size} />
      <button className={`input-button-${props.size}`} onClick={clicked}>
        {props.label}
      </button>
    </div>
  );
}

export default InputButton;
