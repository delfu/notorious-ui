import React from "react";
import { action } from "@storybook/addon-actions";

import Checkbox from "../components/Checkbox";
import Surface from "../components/Surface";

export default {
  title: "Checkbox",
  component: Checkbox,
};

const items = ["shampoo", "toilet paper", "rubber ducky"];

export const Default = () => (
  <Surface style={{ width: 400, height: 400 }}>
    <Surface style={{ width: 200, height: 200 }} raised>
      <div>
        {items.map((item) => (
          <div key={item} style={{ margin: "25px" }}>
            <Checkbox onChange={action("changed")}>{item}</Checkbox>
          </div>
        ))}
      </div>
    </Surface>
  </Surface>
);
