import React, { useState, useRef, useEffect } from "react";
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
  width: 100%;
`;

const DocsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const DocContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.layout.headerHeight};
  z-index: ${({ sidebarOpen }) => (sidebarOpen ? "-1" : "1")};
  max-width: ${({ theme }) => theme.layout.maxWidth};

  ${(props) => props.theme.media.desktop`
    padding: ${({ theme }) => theme.spacing(7.5)};
    margin-top: ${({ theme }) => theme.layout.headerHeight};
  `}
`;

const StyledContent = styled.div`
  margin-left: 24px;
  z-index: 1;
  ${(props) => props.theme.media.desktop`
    margin-left: ${({ theme }) => theme.layout.sidebarWidth};
  `}
`;

function DocsPageTemplate({ projectName, doc, toc, pages }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ref = useRef();

  const handleOutsideClick = (e) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      sidebarOpen === true
    ) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <Wrapper className="Page-content">
      <DocsPageContainer>
        <ContentContainer>
          <div ref={ref}>
            <Sidebar
              navLinks={pages}
              projectName={projectName}
              sidebarOpen={sidebarOpen}
              onCloseClick={() => setSidebarOpen(false)}
            />
          </div>
          <StyledContent>
            <Header
              title={projectName}
              sidebarOpen={sidebarOpen}
              onMenuClick={() => setSidebarOpen(true)}
            />
            <DocContainer sidebarOpen={sidebarOpen}>
              <Doc doc={doc} toc={toc} />
            </DocContainer>
          </StyledContent>
        </ContentContainer>
        <Footer sidebar />
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
