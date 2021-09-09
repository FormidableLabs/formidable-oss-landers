import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "./Header";
import Preview from "./Preview";
import CustomSection from "./CustomSection";
import GetStarted from "./GetStarted";
import FeaturedOSS from "./FeaturedOSS";
import Footer from "./Footer";

const Wrapper = styled.div`
  width: 100%;
`;

const IndexPageTemplate = ({ config, children }) => (
  <Wrapper>
    <Header {...config.header} />
    {children}
    <GetStarted {...config.getStarted} />
    <FeaturedOSS />
    <Footer />
  </Wrapper>
);

IndexPageTemplate.propTypes = {
  config: PropTypes.shape({
    header: Header.propTypes.isRequired,
    preview: PropTypes.shape({ ...Preview.propTypes }),
    customSection: PropTypes.shape({ ...CustomSection.propTypes }),
    getStarted: GetStarted.propTypes.isRequired,
  }),
  children: PropTypes.node,
};

export default IndexPageTemplate;
