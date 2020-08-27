import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Header from "./Header";
import Features from "./Features";
import Preview from "./Preview";
import CustomSection from "./CustomSection";
import GetStarted from "./GetStarted";
import FeaturedOSS from "./FeaturedOSS";
import Footer from "./Footer";

const Wrapper = styled.div`
  width: 100%;
`;

function IndexPageTemplate({ config }) {
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

IndexPageTemplate.propTypes = {
  config: PropTypes.shape({
    linkComponent: PropTypes.element.isRequired,
    header: Header.propTypes.isRequired,
    features: Features.propTypes.isRequired,
    preview: Preview.propTypes,
    customSection: CustomSection.propTypes,
    getStarted: GetStarted.propTypes.isRequired,
    featuredOss: FeaturedOSS.propTypes.isRequired,
  }),
};

export default IndexPageTemplate;
