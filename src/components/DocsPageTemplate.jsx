import React from "react";
import { arrayOf, string, number, shape } from "prop-types";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "../components/docs/Header";
import Sidebar from "../components/docs/Sidebar";
import Doc from "../components/docs/Doc";

const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.layout.footerHeight});
`;

const ContentContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
`;

const DocsPageContainer = styled.div`
  display: flex;
  min-height: 100%;
`;

const DocContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.layout.headerHeight};

  ${(props) => props.theme.media.desktop`
    padding: ${({ theme }) => theme.spacing(7.5)};
    margin-top: ${({ theme }) => theme.layout.headerHeight};
  `}
`;

function DocsPageTemplate({ projectName, pages }) {
  return (
    <Wrapper>
      <DocsPageContainer>
        <Sidebar navLinks={pages} projectName={projectName} />
        <ContentContainer>
          <Header title={projectName} />
          <DocContainer>
            <Doc />
          </DocContainer>
        </ContentContainer>
      </DocsPageContainer>
      <Footer />
    </Wrapper>
  );
}

const Page = shape({
  content: string.isRequired,
  filePath: string.isRequired,
  metadata: shape({
    title: string.isRequired,
    order: number.isRequired,
  }),
  name: string.isRequired,
  parentRoute: string.isRequired,
  route: string.isRequired,
});

DocsPageTemplate.propTypes = {
  projectName: string.isRequired,
  pages: arrayOf(Page).isRequired,
};

export default DocsPageTemplate;
