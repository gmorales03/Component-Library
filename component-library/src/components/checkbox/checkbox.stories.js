import React from "react";
import { storiesOf } from "@storybook/react";

import Checkbox from "./checkbox";

storiesOf("Checkbox", module)
  .add("checkbox blue", () => <Checkbox color="blue" label="optional label" />)
  .add("checkbox black", () => <Checkbox color="black" label="" />);
