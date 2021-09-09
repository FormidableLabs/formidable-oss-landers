import React from "react";
import { ThemeProvider } from "styled-components";
import {
  IndexPageTemplate,
  createTheme,
  Features,
  Preview,
  CustomSection,
} from "formidable-oss-landers";
import { data } from "../data";

// TODO: can't pass config via route data since it contains react components
// Is there some other solution that allows us to centralize?
import config from "../renature-config";

// TODO: create theme from within IndexPageTemplate with provided config
const renatureTheme = createTheme({ colors: config.colors, type: "dark" });

const RenaturePage = () => (
  <ThemeProvider theme={renatureTheme}>
    <IndexPageTemplate config={config}>
      <Features {...data.features} />
      <Preview {...data.preview} />
      <CustomSection {...data.customSection} />
    </IndexPageTemplate>
  </ThemeProvider>
);

export default RenaturePage;
