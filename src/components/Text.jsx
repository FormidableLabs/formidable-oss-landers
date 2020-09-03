import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { color } from "../styles";

function getStyles(styleType) {
  switch (styleType) {
    case "xlarge":
      // Subtitle
      return css`
        font-size: 15px;
        line-height: ${22 / 15};
        ${(props) => props.theme.media.tablet`
          font-size: 18px;
          line-height: ${25 / 18};
        `};
        ${(props) => props.theme.media.desktop`
          font-size: 24px; 
          line-height: ${30 / 24};
        `};
      `;
    case "large":
      // Nav Item Label
      return css`
        font-size: 14px;
        line-height: ${24 / 18};
        letter-spacing: 0.1em;
        text-transform: uppercase;
        ${(props) => props.theme.media.desktop`font-size: 18px;`};
      `;
    case "small":
      // Button label
      return css`
        font-size: 12px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        ${(props) => props.theme.media.desktop`font-size: 14px;`};
      `;
    case "xsmall":
      // Textfield Input
      return css`
        font-size: 12px;
        letter-spacing: 0.02em;
        ${(props) => props.theme.media.desktop`font-size: 14px;`};
      `;
    case "xxsmall":
      // Ribbon text
      return css`
        font-size: 12px;
        line-height: ${18 / 12};
        letter-spacing: 0.07em;
        text-transform: uppercase;
      `;
    case "medium":
    default:
      return css`
        font-size: 12px;
        line-height: ${18 / 12};
        ${(props) => props.theme.media.tablet`
          font-size: 14px;
          line-height: ${18 / 14};
        `};
        ${(props) => props.theme.media.desktop`
          font-size: 15px;
          line-height: ${24 / 15};
        `};
      `;
  }
}

const Text = styled.p.withConfig({
  // do not pass 'color' or 'align' to DOM
  shouldForwardProp: (prop) => !["color", "align"].includes(prop),
})`
  ${(props) => getStyles(props.size)};
  ${(props) => props.color && color(props.color)};

  font-family: ${(props) => props.theme.fonts.text};
  font-weight: normal;
  text-align: ${(props) => props.align};
`;

Text.defaultProps = {
  align: "inherit",
};

Text.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
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
