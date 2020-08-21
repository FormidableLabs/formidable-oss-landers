import React, { Suspense } from 'react';
import { Root, Routes } from 'react-static';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'formidable-oss-landers';
import { theme } from './styles/theme';

const App = () => {
  return (
    <Root>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Suspense fallback={<div>loading</div>}>
          <Routes />
        </Suspense>
      </ThemeProvider>
    </Root>
  );
};

export default App;
