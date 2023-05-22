import React from "react";
import { storiesOf } from "@storybook/react";
import InputButton from "./inputButton";

import "./inputButton.css";

storiesOf("InputButton", module)
  .add("Inputbutton", () => (
    <InputButton placeholder="voucher" label="Redeem" size="small" />
  ))
  .add("Inputbutton Large", () => (
    <InputButton placeholder="voucher" label="Redeem" size="large" />
  ));
