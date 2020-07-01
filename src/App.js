import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
// import Features from "./components/Features";
// import Preview from "./components/Preview";
// import GetStarted from "./components/GetStarted";
// import MoreOSS from "./components/MoreOSS";
// import Footer from "./components/Footer";

const Container = styled.div`
  width: 100%;
`;

const config = {
  header: {
    title: "Renature",
    description:
      "A physics-based animation library for React inspired by the natural world.",
    install: "npm install renature",
    heroButton: {
      label: "Documentation",
      href: "docs/",
    },
    nav: [
      { label: "Docs", href: "docs/" },
      { label: "Gallery", href: "gallery/" },
      {
        label: "Issues",
        href: "https://www.github.com/FormidableLabs/renature/issues",
      },
      {
        label: "Github",
        href: "https://github.com/FormidableLabs/renature",
      },
    ],
  },
  features: [],
  getStarted: {},
  oss: {},
};

function App() {
  return (
    <Container>
      <Header content={config.header} />
      {/* 
      <Features content={config.features} />
      <Preview />
      <GetStarted content={config.getStarted} />
      <MoreOSS content={config.oss} />
      <Footer /> */}
    </Container>
  );
}

export default App;
