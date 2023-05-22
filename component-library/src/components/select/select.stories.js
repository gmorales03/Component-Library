import React from "react";
import { storiesOf } from "@storybook/react";

import Select from "./select";

storiesOf("Select", module)
  .add("select outline", () => <Select placeholder="Select outline" />)
  .add("select filled", () => (
    <Select placeholder="Select filled" fill="filled" />
  ))
  .add("select small", () => <Select placeholder="Select small" size="small" />)
  .add("select large", () => (
    <Select placeholder="Select small" size="large" />
  ));
