import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const getStyles = (styleType) => {
  switch (styleType) {
    case "xlarge":
      // Subtitle
      return css`
        font-size: 24px;
        line-height: ${30 / 24};
      `;
    case "large":
      // Large Button Label
      return css`
        font-size: 18px;
        line-height: ${24 / 18};
        letter-spacing: 1.29px;
        text-transform: uppercase;
      `;
    case "small":
      // Button label
      return css`
        font-size: 14px;
        letter-spacing: 1px;
        text-transform: uppercase;
      `;
    case "xsmall":
      // Textfield Input
      return css`
        font-size: 14px;
        letter-spacing: 0.2px;
      `;
    case "xxsmall":
      // Ribbon text
      return css`
        font-size: 12px;
        line-height: ${18 / 12};
        letter-spacing: 0.86px;
        text-transform: uppercase;
      `;
    case "medium":
    default:
      return css`
        font-size: 15px;
        line-height: ${24 / 15};
      `;
  }
};

const StyledText = styled.p`
  ${(props) => props.size && getStyles(props.size)};

  font-family: ${(props) => props.theme.fonts.text};
  text-align: ${(props) => props.align};
`;

const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

Text.defaulProps = {
  align: "inherit",
};

Text.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([
    "xxsmall",
    "xsmall",
    "small",
    "medium",
    "large",
    "xlarge",
  ]),
};

export default Text;
