import React from "react";
import { ThemeProvider } from "styled-components";

import { getTheme } from "../src/styles/theme";
import GlobalStyle from "../src/styles/global";
import config from "../src/example/config";
const theme = getTheme(config.colors);

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

// Embed a complete ArgsTable doc block in the controls pane
// ArgsTable: https://storybook.js.org/docs/react/writing-docs/doc-blocks#argstable
// export const parameters = {
//   controls: { expanded: true },
// };
