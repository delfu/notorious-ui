import React from "react";
import Surface from "../components/Surface";
import Switch from "../components/Switch";

export default {
  title: "Switch",
  component: Switch,
};

export const Default = () => (
  <Surface style={{ width: 300, height: 300 }}>
    <Switch />
  </Surface>
);

export const On = () => (
  <Surface style={{ width: 300, height: 300 }}>
    <Switch checked={true} />
  </Surface>
);
