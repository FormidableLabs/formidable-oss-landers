import React from "react";
import { ThemeProvider } from "styled-components";
import { IndexPageTemplate, createTheme } from "formidable-oss-landers";

// TODO: can't pass config via route data since it contains react components
// Is there some other solution that allows us to centralize?
import config from "../renature-config";

// TODO: create theme from within IndexPageTemplate with provided config
const renatureTheme = createTheme({ colors: config.colors, type: "dark" });

const RenaturePage = () => {
  return (
    <ThemeProvider theme={renatureTheme}>
      <IndexPageTemplate config={config} />
    </ThemeProvider>
  );
};

export default RenaturePage;
