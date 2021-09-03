import React from "react";

import Surface from "../components/Surface";

export default {
  title: "Surface",
  component: Surface,
};

export const Basic = () => <Surface style={{ width: 300, height: 300 }} />;
export const Raised = () => (
  <Surface style={{ width: 300, height: 300 }}>
    <Surface style={{ width: 100, height: 200 }} raised />
  </Surface>
);
