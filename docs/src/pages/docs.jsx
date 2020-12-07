import React from "react";
import { ThemeProvider } from "styled-components";
import { useRouteData } from "react-static";
import { createTheme, DocsPageTemplate } from "formidable-oss-landers";

// TODO: can't pass config via route data since it contains react components
// Is there some other solution that allows us to centralize?
import config from "../renature-config";

// TODO: create theme from within IndexPageTemplate with provided config
const renatureTheme = createTheme({ colors: config.colors, type: "dark" });

export default function Docs() {
  const { doc, toc, pages } = useRouteData();
  // Probably a better way to get project title, maybe from metadata?
  const projectName = config.header.title;
  return (
    <ThemeProvider theme={renatureTheme}>
      <DocsPageTemplate
        projectName={projectName}
        doc={doc}
        toc={toc}
        pages={pages}
      />
    </ThemeProvider>
  );
}
