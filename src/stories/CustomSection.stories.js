import React from "react";
import CustomSection from "../components/CustomSection";

const Template = (args) => <CustomSection {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: "",
  title: "Title",
  description: "A short description goes here!",
  components: [],
};

export const Dark = Template.bind({});

Dark.args = {
  color: "dark",
  title: "Title",
  description: "A short description goes here!",
  components: [],
};

export const Light = Template.bind({});

Light.args = {
  color: "light",
  title: "Title",
  description: "A short description goes here!",
  components: [],
};

export const Primary = Template.bind({});

Primary.args = {
  color: "primary",
  title: "Title",
  description: "A short description goes here!",
  components: [],
};

export default {
  title: "CustomSection",
  component: CustomSection,
  argTypes: {
    color: { control: { type: "text" } },
    title: { control: { type: "text" } },
    description: { control: { type: "text" } },
    components: { control: { type: "array" } },
  },
};
