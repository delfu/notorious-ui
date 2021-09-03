import React from "react";
import { action } from "@storybook/addon-actions";

import { TiMediaPlay } from "react-icons/ti";

import Button, { PressedState } from "../components/Button";
import Surface from "../components/Surface";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => (
  <Surface style={{ width: 300, height: 300 }}>
    <Button>click me</Button>
  </Surface>
);

export const Square = () => (
  <Surface style={{ width: 300, height: 300 }}>
    <Button square>
      <TiMediaPlay />
    </Button>
  </Surface>
);

export const Disabled = () => (
  <Surface style={{ width: 300, height: 300 }}>
    <Button disabled>click me</Button>
  </Surface>
);

export const ClickHandler = () => (
  <Surface style={{ width: 300, height: 300 }}>
    <Button onClick={action("clicked")}>click me</Button>
  </Surface>
);

export const Pressed = () => (
  <Surface style={{ width: 300, height: 300 }}>
    <Button state={PressedState.Pressed}>click me</Button>
  </Surface>
);

export const Controlled = () => (
  <Surface style={{ width: 300, height: 300 }}>
    <Button stateful onClick={action("stateful click")}>
      click me
    </Button>
  </Surface>
);
