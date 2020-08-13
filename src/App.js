import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Features from "./components/Features";
import Preview from "./components/Preview";
import CustomSection from "./components/CustomSection";
import GetStarted from "./components/GetStarted";
import FeaturedOSS from "./components/FeaturedOSS";
import Footer from "./components/Footer";

import config from "./example/config";

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
