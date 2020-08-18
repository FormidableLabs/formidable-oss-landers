import React from "react";
// import { action } from "@storybook/addon-actions";
import Button from "../components/Button";

// We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

// Each story then reuses that template
export const Dark = Template.bind({});
export const Light = Template.bind({});

Dark.args = {
  // onClick: action("clicked"),
  color: "dark",
  children: "Button",
  full: false,
};

Light.args = {
  // onClick: action("clicked"),
  color: "light",
  children: "Button",
  full: false,
};

export default {
  title: "Button",
  component: Button,
  argTypes: {
    color: {
      control: {
        type: "inline-radio",
        options: ["light", "dark"],
      },
    },
    full: { control: { type: "boolean" } },
    children: { control: { type: "array" } },
  },
};
