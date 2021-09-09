/* Example config for Renature OSS Lander */

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
  header: {
    title: "Renature",
    badge: "renature",
    description:
      "A physics-based animation library for React inspired by the natural world.",
    install: "npm install renature",
    button: {
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
  getStarted: {
    description:
      "Renature comes equipped with a lightweight set of production ready React hooks. Dig into the documentation to start animating!",
    button: {
      label: "Documentation",
      href: "docs/",
    },
  },
};

export default config;
