import React, { useState, useCallback, Suspense } from "react";
import { Root, Routes } from "react-static";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "formidable-oss-landers";
import { guideTheme } from "./styles/theme";

const App = () => {
  return (
    <Root>
      <ThemeProvider theme={guideTheme}>
        <GlobalStyles />
        <Suspense fallback={<div>loading</div>}>
          <Routes />
        </Suspense>
      </ThemeProvider>
    </Root>
  );
};

export default App;