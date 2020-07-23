/* Example config for Renature OSS Lander */
import React from "react";
import Link from "../components/Link";
import { FeaturedBadge } from "formidable-oss-badges";

const config = {
  colors: {
    lighterPrimary: "#F8F7FE",
    lightPrimary: "#D6CFF9",
    primary: "#7860ED",
    darkPrimary: "#5443A6",
    darkerPrimary: "#30265F",

    lightComplement: "#7A7441",
    darkComplement: "#595112",
  },
  linkComponent: Link,
  header: {
    badge: <FeaturedBadge name="renature" />,
    title: "Renature",
    description:
      "A physics-based animation library for React inspired by the natural world.",
    install: "npm install renature",
    heroButton: {
      label: "Documentation",
      href: "docs/",
    },
    nav: [
      { label: "Docs", href: "docs/" },
      { label: "Gallery", href: "gallery/" },
      {
        label: "Issues",
        href: "https://www.github.com/FormidableLabs/renature/issues",
      },
      {
        label: "Github",
        href: "https://github.com/FormidableLabs/renature",
      },
    ],
  },
  features: [
    { 
      image: "",
      title: "Declarative React hooks for animating with ease",
      description: "Tweak your physics parameters, set from and to values for your CSS properties, and let renature do the rest."
    }, {
      title: "Gravity, Friction, Fluid Resistance, and more",
      description: "Renature explores forces that other physics-based animation libraries typically leave out, giving your animations unique feeling and intuitive motion."
    }, {
      title: "An animation library for physics nerds",
      description: "Renature emphasizes mathematical precision and correctness, all backed by the type safety and speed of ReasonML."
    }
  ],
  getStarted: {},
  oss: {},
};

export default config;
