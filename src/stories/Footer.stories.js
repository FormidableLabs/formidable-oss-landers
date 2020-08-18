import React from "react";
import Footer from "../components/Footer";

// We create a “template” of how args map to rendering
const Template = (args) => <Footer {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};

export default {
  title: "Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <div>
        <p>
          <strong>Editor&rsquo;s Note</strong>: Let us take care of this for you
        </p>
        <Story />
      </div>
    ),
  ],
};
