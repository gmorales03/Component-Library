import React from "react";
import { storiesOf } from "@storybook/react";
import { FaHeart } from "react-icons/fa";

import Button from "./button";

storiesOf("Button", module)
  .add("Primary", () => <Button label="Do Something" type="primary" />)
  .add("Danger", () => <Button label="Do Something" type="danger" />)
  .add("success", () => <Button label="Do Something" type="success" />)
  .add("warning", () => <Button label="Do Something" type="warning" />)
  .add("default", () => <Button label="Do Something" type="" fill="fill" />)
  .add("outline", () => (
    <Button label="Do Something" type="success" fill="outline" />
  ))
  .add("filled", () => (
    <Button label="Do Something" type="danger" fill="fill" />
  ))
  .add("large", () => (
    <Button label="Do Something" type="primary" size="large" />
  ))
  .add("small", () => (
    <Button label="Do Something" type="primary" size="small" />
  ))
  .add("With Icon", () => (
    <Button
      label="Add to Favorites"
      type="primary"
      size="smaller"
      icon={<FaHeart />}
    />
  ))
  .add("Icon only", () => (
    <Button label="" type="primary" size="smaller" icon={<FaHeart />} />
  ));
