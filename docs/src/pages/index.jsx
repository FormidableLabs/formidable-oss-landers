import React from 'react';

import styled from 'styled-components';
import config from '../config';

import {
  Header,
  Features,
  Preview,
  CustomSection,
  GetStarted,
  FeaturedOSS,
  Footer,
} from 'formidable-oss-landers';

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
