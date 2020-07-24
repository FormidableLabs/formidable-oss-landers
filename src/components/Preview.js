import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import Grid, { breakGrid } from "./Grid";
import Title from "./Title";
import Text from "./Text";
import Section from "./Section";
import { mobileOnly, tablet, desktop } from "../styles";

const Wrapper = styled(Section)`
  background: ${(props) => props.theme.gradients.reverseDarkGradient};
  color: ${(props) => props.theme.colors.white};
`;

const StyledGrid = styled(Grid)`
  grid-template-columns: 1fr;

  ${desktop`
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: ${(props) => props.theme.spacing(4)};
    grid-row-gap: ${(props) => props.theme.spacing(20)};
    margin-top: ${(props) => props.theme.spacing(8)};
  `};
`;

const TextWrapper = styled.div`
  margin-top: ${(props) => props.theme.spacing(12)};

  &:nth-child(1) {
    margin-top: ${(props) => props.theme.spacing(6)};
  }

  ${desktop`
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

  ${tablet`
    box-shadow: -5px 5px 0px 0px rgba(0, 0, 0, 0.5);
  `};

  ${desktop`
    grid-column: span 3;
    ${(props) => props.gridRow && `grid-row: ${props.gridRow};`};
    margin-top: 0;
  `};
`;

const StyledPreview = styled(LivePreview)`
  ${mobileOnly`
    box-shadow: -5px 5px 0px 0px rgba(0, 0, 0, 0.5);
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
  ${mobileOnly`
    ${breakGrid};
    margin-top: ${(props) => props.theme.spacing(5)};

    box-shadow: -5px 5px 0px 0px rgba(0, 0, 0, 0.5);
  `};

  max-height: ${(props) => props.theme.spacing(40)};
  overflow: auto !important;
`;

const importRegex = /import\s+?(?:(?:(?:[\w*\s{},]*)\s+from\s+?)|)(?:(?:".*?")|(?:'.*?'))[\s]*?(?:;|$|)/g;

function removeImportFromPreview(code) {
  return code.replace(importRegex, "");
}

const Preview = ({ content }) => {
  const { title, examples } = content;
  return (
    <Wrapper>
      <Section.Title>{title}</Section.Title>
      <StyledGrid>
        {examples.map((example, index) => {
          const isOdd = index % 2 > 0;
          return (
            <React.Fragment key={`example-${index}`}>
              <TextWrapper isOdd={isOdd}>
                <Title size="medium" color="lightPrimary">
                  {example.title}
                </Title>
                <Section.Text>{example.description}</Section.Text>
              </TextWrapper>
              <LiveProvider
                {...example.props}
                transformCode={removeImportFromPreview}
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
  content: PropTypes.shape({
    title: PropTypes.string,
    examples: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        props: LiveProvider.PropTypes,
      })
    ),
  }),
};

export default Preview;
