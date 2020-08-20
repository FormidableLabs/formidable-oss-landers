import React from "react";

import styled, { ThemeProvider } from "styled-components";
import config from "../renature-config";

import {
  Header,
  Features,
  Preview,
  CustomSection,
  GetStarted,
  FeaturedOSS,
  Footer,
  getTheme,
} from "formidable-oss-landers";

const Wrapper = styled.div`
  width: 100%;
`;

const renatureTheme = getTheme(config.colors);

function Renature() {
  const hasPreview = !!config.preview;
  const hasCustomSection = !!config.customSection;
  return (
    <ThemeProvider theme={renatureTheme}>
      <Wrapper>
        <Header {...config.header} linkComponent={config.linkComponent} />
        <Features {...config.features} />
        {hasPreview ? <Preview {...config.preview} /> : null}
        {hasCustomSection ? <CustomSection {...config.customSection} /> : null}
        <GetStarted
          {...config.getStarted}
          linkComponent={config.linkComponent}
        />
        <FeaturedOSS {...config.featuredOss} />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default Renature;
