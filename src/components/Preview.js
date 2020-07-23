import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import Grid, { breakGrid } from "./Grid";
import Title from "./Title";
import Text from "./Text";
import { mobileOnly, tablet, desktop } from "../styles";

const Wrapper = styled.div`
  padding-top: ${(props) => props.theme.spacing(5)};
  padding-bottom: ${(props) => props.theme.spacing(5)};

  background: ${(props) => props.theme.gradients.darkGradient};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

const StyledGrid = styled(Grid)`
  grid-template-columns: 1fr;

  ${desktop`
    grid-template-columns: 1fr 3fr;
    grid-gap: ${(props) => props.theme.spacing(3)};
  `};
`;

const Copy = styled.div`
  margin-top: ${(props) => props.theme.spacing(3)};
`;

const StyledTitle = styled(Title)`
  margin-top: ${(props) => props.theme.spacing(4)};
  color: ${(props) => props.theme.colors.lightPrimary};
`;

const StyledText = styled(Text)`
  margin: ${(props) => props.theme.spacing(2)} auto 0;
  max-width: 60ch;
`;

const StyledCodeWrapper = styled.div`
  margin-top: ${(props) => props.theme.spacing(4)};

  ${tablet`
    box-shadow: -5px 5px 0px 0px rgba(0, 0, 0, 0.5);
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
      <Title size="large">{title}</Title>
      <StyledGrid>
        {examples.map((example, index) => {
          return (
            <React.Fragment key={`example-${index}`}>
              <Copy>
                <StyledTitle size="medium">{example.title}</StyledTitle>
                <StyledText>{example.description}</StyledText>
              </Copy>
              <LiveProvider
                {...example.props}
                transformCode={removeImportFromPreview}
              >
                <StyledCodeWrapper>
                  <StyledPreview />
                  <StyledError />
                  <StyledEditor />
                </StyledCodeWrapper>
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
