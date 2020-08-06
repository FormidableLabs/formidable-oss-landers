import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Title from "./Title";
import Text from "./Text";

const primaryStyles = css`
  background: ${(props) => props.theme.gradients.reverseDarkGradient};
  color: ${(props) => props.theme.colors.white};
`;

const lightStyles = css`
  background-color: ${(props) => props.theme.colors.lighterNeutral};
  color: ${(props) => props.theme.colors.darkNeutral};
`;

const darkStyles = css`
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`;

const StyledSection = styled.div`
  padding-top: ${(props) => props.theme.spacing(props.padding)};
  padding-bottom: ${(props) => props.theme.spacing(props.padding)};

  text-align: center;

  ${(props) => props.color === "primary" && primaryStyles};
  ${(props) => props.color === "light" && lightStyles};
  ${(props) => props.color === "dark" && darkStyles};
`;

const SectionTitle = styled(Title).attrs((props) => ({
  as: props.as || "h3",
  size: props.size || "large",
}))``;

const SectionText = styled(Text)`
  margin: ${(props) => props.theme.spacing(2)} auto 0;
  max-width: 60ch;
`;

const Section = ({ children, className, color, padding }) => {
  return (
    <StyledSection className={className} padding={padding} color={color}>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  color: PropTypes.oneOf(["primary", "light", "dark"]),
  /* Top and bottom padding for Section (as Grid controls side padding) */
  padding: PropTypes.number,
};

Section.defaultProps = {
  padding: 8,
};

Section.Title = SectionTitle;
Section.Text = SectionText;

export default Section;
