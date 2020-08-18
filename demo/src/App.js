import React, { Suspense } from "react";
import { Root, Routes } from "react-static";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../../src/styles/global";
import Analytics from "./google-analytics";
import { theme } from "formidable-oss-landers";
// import { theme } from "./styles/theme";

const App = () => {
  return (
    <Root>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Analytics id="UA-43290258-1">
          <Suspense fallback={<div>loading</div>}>
            <Routes />
          </Suspense>
        </Analytics>
      </ThemeProvider>
    </Root>
  );
};

export default App;
