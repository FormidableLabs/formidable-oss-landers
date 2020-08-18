import React from "react";
import GetStarted from "../components/GetStarted";

// We create a “template” of how args map to rendering
const Template = (args) => <GetStarted {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  linkComponent: `a`,
  title: undefined,
  description: "A short description here",
  button: { label: "Button", href: "#button" },
};

export default {
  title: "GetStarted",
  component: GetStarted,
};
