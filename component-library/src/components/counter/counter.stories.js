import React from "react";
import Counter from "./counter.js";

import { storiesOf } from "@storybook/react";

storiesOf("Counter", module).add("counter", () => (
  <Counter starting={0} min={0} max={10} amount={2} />
));
