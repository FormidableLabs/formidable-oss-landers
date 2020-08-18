import React from "react";
import Features from "../components/Features";

// We create a “template” of how args map to rendering
const Template = (args) => <Features {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  title: undefined,
  list: [
    {
      image: null,
      title: "Declarative React hooks for animating with ease",
      description:
        "Tweak your physics parameters, set from and to values for your CSS properties, and let renature do the rest.",
    },
    {
      image: null,
      title: "Gravity, Friction, Fluid Resistance, and more",
      description:
        "Renature explores forces that other physics-based animation libraries typically leave out, giving your animations unique feeling and intuitive motion.",
    },
    {
      image: null,
      title: "An animation library for physics nerds",
      description:
        "Renature emphasizes mathematical precision and correctness, all backed by the type safety and speed of ReasonML.",
    },
  ],
};

export default {
  title: "Features",
  component: Features,
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    list: { control: { type: "object" } },
  },
};
