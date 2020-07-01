import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const getStyles = (styleType) => {
  switch (styleType) {
    case "xlarge":
      // Title/h1 of site
      return css`
        font-size: 90px;
        font-weight: bold;
        line-height: 1;
        text-transform: uppercase;
      `;
    case "large":
      // Section title
      return css`
        font-size: 30px;
        font-weight: bold;
        line-height: ${38 / 30};
        letter-spacing: 0.5px;
      `;
    case "medium":
    default:
      // Section subtitle
      return css`
        font-size: 22px;
        font-weight: bold;
        line-height: ${26 / 22};
      `;
  }
};

const StyledTitle = styled.p`
  ${(props) => props.size && getStyles(props.size)};

  font-family: ${(props) => props.theme.fonts.heading};
  text-align: ${(props) => props.align};
`;

const Title = ({ children, ...props }) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};

Title.defaulProps = {
  align: "inherit",
};

Title.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["xlarge", "large", "medium"]),
};

export default Title;
