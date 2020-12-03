import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { useRouteData } from "react-static";
import { createTheme, DocsPageTemplate } from "formidable-oss-landers";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Doc from "./doc";

// TODO: can't pass config via route data since it contains react components
// Is there some other solution that allows us to centralize?
import config from "../renature-config";

// TODO: create theme from within IndexPageTemplate with provided config
const renatureTheme = createTheme({ colors: config.colors, type: "dark" });

const ContentContainer = styled.div`
  width: 100%;
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

export default function Docs() {
  const { pages } = useRouteData();
  // Probably a better way to get project title, maybe from metadata?
  const projectName = config.header.title;
  return (
    <ThemeProvider theme={renatureTheme}>
      <DocsPageTemplate>
        <DocsPageContainer>
          <Sidebar navLinks={pages} projectName={projectName} />
          <ContentContainer>
            <Header title={projectName} />
            <DocContainer>
              <Doc />
            </DocContainer>
          </ContentContainer>
        </DocsPageContainer>
      </DocsPageTemplate>
    </ThemeProvider>
  );
}
