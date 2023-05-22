import Counter from "./components/counter/counter";
import Button from "./components/button/button";
import Form from "./components/form/form";
import Select from "./components/select/select";
import InputButton from "./components/inputButton/inputButton";
import Checkbox from "./components/checkbox/checkbox";

import { FaHeart } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <h1>Component Library Demo</h1>
      <h2>Buttons</h2>
      <div className="component-buttons">
        <Button label="Do Something" type="primary" />
        <Button label="Do Something" type="danger" />
        <Button label="Do Something" type="success" />
        <Button label="Do Something" type="warning" />
        <Button label="Do Something" type="" />
        <Button label="Do Something" type="primary" fill="outline" />
        <Button label="Do Something" type="danger" fill="outline" />
        <Button label="Do Something" type="success" fill="outline" />
        <Button label="Do Something" type="warning" fill="outline" />
        <Button label="Do Something" type="" fill="outline" />
        <Button label="Do Something" type="primary" fill="fill" />
        <Button label="Do Something" type="danger" fill="fill" />
        <Button label="Do Something" type="success" fill="fill" />
        <Button label="Do Something" type="warning" fill="fill" />
        <Button label="Do Something" type="" fill="fill" />
        <Button label="Large" type="danger" size="large" />
        <Button label="Small" type="danger" size="small" />
        <Button
          label="Add to Favorites"
          type="primary"
          size="smaller"
          icon={<FaHeart />}
        />
      </div>
      <h2>Forms</h2>
      <div className="component-forms">
        <Form label="Regular" size="" />
        <Form label="Small" size="small" />
        <Form label="Large" size="large" />
        <Form placeholder="No Label" size="" />
      </div>
      <h2>Select Forms</h2>
      <div className="component-select">
        <Select placeholder="Regular" />
        <Select placeholder="Large" size="large" />
        <Select placeholder="Small" size="small" />
        <Select placeholder="Filled" fill="filled" />
      </div>
      <h2>Counter</h2>
      <div className="component-counter">
        <Counter starting={0} min={0} max={10} amount={2} />
      </div>
      <h2>Input With Button</h2>
      <div>
        <InputButton placeholder="voucher large" label="redeem" size="large" />
        <InputButton placeholder="voucher small" label="redeem" size="small" />
      </div>
      <h2>Checkboxes</h2>
      <div className="component-checkbox">
        <Checkbox color="blue" label="placeholder" />
        <Checkbox color="blue" />
        <Checkbox color="black" />
      </div>
    </div>
  );
}

export default App;
