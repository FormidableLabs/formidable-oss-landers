import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Link } from "react-router-dom";
import nightOwl from "prism-react-renderer/themes/nightOwl";

import { ProjectBadge } from "formidable-oss-badges";
import {
  Header,
  Features,
  Preview,
  CustomSection,
  GetStarted,
  FeaturedOSS,
  Footer,
} from "formidable-oss-landers";

const Wrapper = styled.div`
  margin: 1em auto 0;
  width: ${(props) => props.width}px;
`;

const EditorWrapper = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

const StyledButton = styled.button`
  display: block;
  margin: 1em auto;
  padding: 0.25em 1em;
  border: 1px solid black;
  border-radius: 20rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary};
  }

  ${(props) =>
    props.isVisible &&
    `
    background-color: ${props.theme.colors.lighterNeutral};
    border-color: ${props.theme.colors.lightNeutral};
    color: ${props.theme.colors.neutral};
  `};
`;

const ComponentPreview = ({ code, media, width, theme }) => {
  const [isVisible, setVisible] = useState(false);
  const toggleEditor = (ev) => {
    setVisible(!isVisible);
  };
  return (
    <ThemeProvider theme={theme}>
      <LiveProvider
        theme={nightOwl}
        code={code}
        scope={{
          ProjectBadge,
          Header,
          Features,
          Preview,
          CustomSection,
          GetStarted,
          FeaturedOSS,
          Footer,
          theme,
          Link,
          Wrapper,
          width,
          media,
        }}
      >
        <Wrapper className={media} width={width}>
          <LivePreview />
        </Wrapper>
        <LiveError />
        <StyledButton
          type="button"
          onClick={toggleEditor}
          isVisible={isVisible}
        >
          View code
        </StyledButton>
        <EditorWrapper isVisible={isVisible}>
          <LiveEditor />
        </EditorWrapper>
      </LiveProvider>
    </ThemeProvider>
  );
};

export default ComponentPreview;
