import React from "react";
import { ThemeProvider } from "styled-components";

import { getTheme } from "../src/styles/theme";
import config from "../src/example/config";
const theme = getTheme(config.colors);

console.log("theme", theme);

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
