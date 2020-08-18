import React from "react";
import FeaturedOSS from "../components/FeaturedOSS";
import { FeaturedBadge, ProjectBadge } from "formidable-oss-badges";

const Template = (args) => <FeaturedOSS {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: undefined,
  list: [
    {
      badge: <FeaturedBadge name="victory" />,
      href: "https://formidable.com/open-source/victory",
      title: "Victory",
      description:
        "An ecosystem of modular data visualization components for React. Friendly and flexible.",
    },
    {
      badge: <FeaturedBadge name="urql" />,
      href: "https://formidable.com/open-source/urql",
      title: "urql",
      description:
        "Universal React Query Library is a blazing-fast GraphQL client, exposed as a set of ReactJS components.",
    },
    {
      badge: <FeaturedBadge name="spectacle" />,
      href: "https://formidable.com/open-source/spectacle",
      title: "Spectacle",
      description:
        "A React.js based library for creating sleek presentations using JSX syntax that gives you the ability to live demo your code.",
    },
    {
      badge: (
        <ProjectBadge
          isHoverable={false}
          color="#80EAC7"
          abbreviation="Rp"
          description="Runpkg"
        />
      ),
      href: "https://formidable.com/open-source/runpkg",
      title: "Runpkg",
      description:
        "The online package explorer. Runpkg turns any npm package into an interactive and informative browsing experience.",
    },
  ],
};

export default {
  title: "FeaturedOSS",
  component: FeaturedOSS,
  argTypes: {
    title: { control: { type: "text" } },
    list: { control: { type: "object" } },
  },
};
