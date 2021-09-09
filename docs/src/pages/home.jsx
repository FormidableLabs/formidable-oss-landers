import React from "react";
import { ThemeProvider } from "styled-components";
import {
  IndexPageTemplate,
  createTheme,
  Features,
} from "formidable-oss-landers";
import featureSvg from "../assets/feature.svg";

// TODO: can't pass config via route data since it contains react components
// Is there some other solution that allows us to centralize?
import config from "../renature-config";

// TODO: create theme from within IndexPageTemplate with provided config
const renatureTheme = createTheme({ colors: config.colors, type: "dark" });

const list = [
  {
    image: featureSvg,
    title: "Declarative React hooks for animating with ease",
    description:
      "Tweak your physics parameters, set from and to values for your CSS properties, and let renature do the rest.",
  },
  {
    image: featureSvg,
    title: "Gravity, Friction, Fluid Resistance, and more",
    description:
      "Renature explores forces that other physics-based animation libraries typically leave out, giving your animations unique feeling and intuitive motion.",
  },
  {
    image: featureSvg,
    title: "An animation library for physics nerds",
    description:
      "Renature emphasizes mathematical precision and correctness, all backed by the type safety and speed of ReasonML.",
  },
];
const RenaturePage = () => {
  return (
    <ThemeProvider theme={renatureTheme}>
      <IndexPageTemplate config={config}>
        <Features title="Features" list={list} />
      </IndexPageTemplate>
    </ThemeProvider>
  );
};

export default RenaturePage;
