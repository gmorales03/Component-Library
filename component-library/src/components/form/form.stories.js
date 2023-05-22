import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./form";

storiesOf("Form", module)
  .add("email", () => <Form label="Email" placeholder="" size="" />)
  .add("Email-small", () => <Form label="Email" size="small" />)
  .add("Email-Large", () => <Form label="Email" size="large" />);
