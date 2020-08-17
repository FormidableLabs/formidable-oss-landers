import React from "react";
import styled from "styled-components";

import Header from "../../../../src/components/Header";
import Features from "../../../../src/components/Features";
import Preview from "../../../../src/components/Preview";
import CustomSection from "../../../../src/components/CustomSection";
import GetStarted from "../../../../src/components/GetStarted";
import FeaturedOSS from "../../../../src/components/FeaturedOSS";
import Footer from "../../../../src/components/Footer";

import config from "./config";

const Wrapper = styled.div`
  width: 100%;
`;

function App() {
  const hasPreview = !!config.preview;
  const hasCustomSection = !!config.customSection;
  return (
    <Wrapper>
      <Header {...config.header} linkComponent={config.linkComponent} />
      <Features {...config.features} />
      {hasPreview ? <Preview {...config.preview} /> : null}
      {hasCustomSection ? <CustomSection {...config.customSection} /> : null}
      <GetStarted {...config.getStarted} linkComponent={config.linkComponent} />
      <FeaturedOSS {...config.featuredOss} />
      <Footer />
    </Wrapper>
  );
}

export default App;
