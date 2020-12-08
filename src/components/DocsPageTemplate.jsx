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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 24px;

  ${(props) => props.theme.media.desktop`
    padding-left: ${({ theme }) => theme.layout.sidebarWidth};
  `}
`;

const DocsPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const DocContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.layout.headerHeight};
  max-width: ${({ theme }) => theme.layout.maxWidth};

  ${(props) => props.theme.media.desktop`
    padding: ${({ theme }) => theme.spacing(7.5)};
    margin-top: ${({ theme }) => theme.layout.headerHeight};
  `}
`;

function DocsPageTemplate({ projectName, doc, toc, pages }) {
  return (
    <Wrapper>
      <DocsPageContainer>
        <Sidebar navLinks={pages} projectName={projectName} />
        <ContentContainer>
          <Header title={projectName} />
          <DocContainer>
            <Doc doc={doc} toc={toc} />
          </DocContainer>
          <Footer />
        </ContentContainer>
      </DocsPageContainer>
    </Wrapper>
  );
}

const SingleDoc = shape({
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

const Toc = shape({
  children: arrayOf(
    shape({
      depth: number.isRequired,
      name: string.isRequired,
      slug: string.isRequired,
    })
  ),
  depth: number.isRequired,
  name: string.isRequired,
  slug: string.isRequired,
});

DocsPageTemplate.propTypes = {
  projectName: string.isRequired,
  pages: arrayOf(SingleDoc).isRequired,
  doc: SingleDoc.isRequired,
  toc: arrayOf(Toc),
};

export default DocsPageTemplate;
