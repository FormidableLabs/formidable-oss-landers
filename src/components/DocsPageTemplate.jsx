import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Footer from "./Footer";

const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.layout.footerHeight});
`;

function DocsPageTemplate({ children }) {
  return (
    <Wrapper>
      {children}
      <Footer />
    </Wrapper>
  );
}

DocsPageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DocsPageTemplate;
