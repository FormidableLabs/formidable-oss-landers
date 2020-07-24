import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Features from "./components/Features";
import Preview from "./components/Preview";
import GetStarted from "./components/GetStarted";
import FeaturedOSS from "./components/FeaturedOSS";
import Footer from "./components/Footer";

import config from "./example/config";

const Container = styled.div`
  width: 100%;
`;

function App() {
  return (
    <Container>
      <Header {...config.header} linkComponent={config.linkComponent} />
      <Features {...config.features} />
      <Preview {...config.preview} />
      <GetStarted {...config.getStarted} linkComponent={config.linkComponent} />
      <FeaturedOSS {...config.featuredOss} />
      <Footer />
    </Container>
  );
}

export default App;
