import React, { useState, useCallback, Suspense } from "react";
import { Root, Routes } from "react-static";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "formidable-oss-landers";
import { themes } from "./styles/theme";

const App = () => {
  const [theme, setTheme] = useState(themes.purple);
  const handleChangeTheme = useCallback((newTheme) => {
    if (themes[newTheme]) {
      setTheme(themes[newTheme]);
    } else {
      console.warn("Could not find a theme for ", newTheme);
    }
  }, theme);
  return (
    <Root>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Suspense fallback={<div>loading</div>}>
          <Routes
            render={({ routePath, getComponentForPath }) => {
              // The routePath is used to retrieve the component for that path
              const element = getComponentForPath(routePath);
              return React.cloneElement(element, {
                onChangeTheme: handleChangeTheme,
              });
            }}
          />
        </Suspense>
      </ThemeProvider>
    </Root>
  );
};

export default App;
