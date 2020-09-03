import React from "react";
import { ThemeProvider } from "styled-components";
import { IndexPageTemplate, createTheme } from "formidable-oss-landers";

import config from "../renature-config";

const renatureTheme = createTheme({ colors: config.colors, type: "dark" });

function RenaturePage() {
  return (
    <ThemeProvider theme={renatureTheme}>
      <IndexPageTemplate config={config} />
    </ThemeProvider>
  );
}

export default RenaturePage;
