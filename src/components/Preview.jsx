import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import nightOwl from "prism-react-renderer/themes/nightOwl";

import Grid, { breakGrid } from "./Grid";
import Section from "./Section";
import Title from "./Title";

const Wrapper = styled(Section).attrs({ color: "primary" })``;

const StyledGrid = styled(Grid)`
  grid-template-columns: 1fr;

  ${(props) => props.theme.media.desktop`
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: ${(props) => props.theme.spacing(4)};
    grid-row-gap: ${(props) => props.theme.spacing(20)};
    margin-top: ${(props) => props.theme.spacing(8)};
  `};
`;

const Subtitle = styled(Title).attrs({
  size: "medium",
})`
  color: ${(props) =>
    props.theme.type === "dark"
      ? props.theme.colors.lightPrimary
      : props.theme.colors.darkerPrimary};
`;

const TextWrapper = styled.div`
  margin-top: ${(props) => props.theme.spacing(12)};

  &:nth-child(1) {
    margin-top: ${(props) => props.theme.spacing(6)};
  }

  ${(props) => props.theme.media.desktop`
    grid-column: ${(props) => (props.isOdd ? 4 : 1)};
    margin-top: 0;
    text-align: left;

    &:nth-child(1) {
      margin-top: 0;
    }
  `};
`;

const CodeWrapper = styled.div`
  margin-top: ${(props) => props.theme.spacing(4)};

  ${(props) => props.theme.media.tablet`
    box-shadow: ${(props) =>
      props.theme.boxShadows.small("rgba(0, 0, 0, 0.5)")};
  `};

  ${(props) => props.theme.media.desktop`
    grid-column: span 3;
    ${(props) => props.gridRow && `grid-row: ${props.gridRow};`};
    margin-top: 0;

    box-shadow: ${(props) =>
      props.theme.boxShadows.large("rgba(0, 0, 0, 0.5)")};
  `};
`;

const StyledPreview = styled(LivePreview)`
  ${(props) => props.theme.media.mobile`
    box-shadow: ${(props) =>
      props.theme.boxShadows.small("rgba(0, 0, 0, 0.5)")};
  `};

  padding: ${(props) => props.theme.spacing(3)};

  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.darkerNeutral};
`;

const StyledError = styled(LiveError)`
  margin: 0;
  padding: ${(props) => props.theme.spacing(3)};
  background-color: ${(props) => props.theme.colors.primary};
`;

const StyledEditor = styled(LiveEditor)`
  ${(props) => props.theme.media.mobile`
    ${breakGrid};
    margin-top: ${(props) => props.theme.spacing(5)};

    box-shadow: ${(props) =>
      props.theme.boxShadows.small("rgba(0, 0, 0, 0.5)")};
  `};

  max-height: ${(props) => props.theme.spacing(40)};
  overflow: auto !important;
`;

const importRegex = /import\s+?(?:(?:(?:[\w*\s{},]*)\s+from\s+?)|)(?:(?:".*?")|(?:'.*?'))[\s]*?(?:;|$|)/g;

function removeImportFromPreview(code) {
  return code.replace(importRegex, "");
}

const Preview = ({ title, list, theme }) => {
  return (
    <Wrapper>
      <Section.Title>{title}</Section.Title>
      <StyledGrid>
        {list.map((example, index) => {
          const isOdd = index % 2 > 0;

          return (
            <React.Fragment key={`example-${index}`}>
              <TextWrapper isOdd={isOdd}>
                <Subtitle>{example.title}</Subtitle>
                {example.description ? (
                  <Section.Text>{example.description}</Section.Text>
                ) : null}
              </TextWrapper>
              <LiveProvider
                theme={theme}
                transformCode={removeImportFromPreview}
                {...example.props}
              >
                <CodeWrapper gridRow={isOdd ? index + 1 : ""}>
                  <StyledPreview />
                  <StyledError />
                  <StyledEditor />
                </CodeWrapper>
              </LiveProvider>
            </React.Fragment>
          );
        })}
      </StyledGrid>
    </Wrapper>
  );
};

Preview.propTypes = {
  /* Main benefit of using this software */
  title: PropTypes.string,
  /* Syntax highlighting theme for the Live Code Editor */
  theme: PropTypes.object,
  /* An array of code examples */
  list: PropTypes.arrayOf(
    PropTypes.shape({
      /* Title for code example */
      title: PropTypes.string,
      /* Description for code example */
      description: PropTypes.string,
      /* Props to pass to LiveProvider */
      props: LiveProvider.PropTypes,
    })
  ),
};

Preview.defaultProps = {
  theme: nightOwl,
};

export default Preview;
