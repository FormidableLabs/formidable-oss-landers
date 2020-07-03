/* Example config for Renature OSS Lander */
import Link from "../components/Link";
import background from "./background.svg";

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
    background: background,
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
  features: [],
  getStarted: {},
  oss: {},
};

export default config;
