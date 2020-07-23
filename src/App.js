import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Features from "./components/Features";
// import Preview from "./components/Preview";
// import GetStarted from "./components/GetStarted";
// import MoreOSS from "./components/MoreOSS";
// import Footer from "./components/Footer";

import config from "./example/config";

const Container = styled.div`
  width: 100%;
`;

function App() {
  return (
    <Container>
      <Header content={config.header} linkComponent={config.linkComponent} />
      <Features content={config.features} />
      {/* 
      <Preview />
      <GetStarted content={config.getStarted} />
      <MoreOSS content={config.oss} />
      <Footer /> */}
    </Container>
  );
}

export default App;
