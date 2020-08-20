import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { color, tablet, desktop } from "../styles";

const getStyles = (styleType) => {
  switch (styleType) {
    case "xlarge":
      // Title/h1 of site
      return css`
        font-size: 45px;
        font-weight: 500;
        letter-spacing: 0.04em;
        line-height: 1.3;
        text-transform: uppercase;
        ${(props) => props.theme.media.tablet`
          font-size: 60px;
          line-height: 1.5;
        `};
        ${(props) => props.theme.media.desktop`
          font-size: 90px;
        `};
      `;
    case "large":
      // Section title
      return css`
        font-size: 24px;
        font-weight: 500;
        line-height: 1.2;
        letter-spacing: 0.02em;
        ${(props) => props.theme.media.desktop`
          font-size: 30px;
          line-height: ${38 / 30};
        `};
      `;
    case "medium":
    default:
      // Section subtitle
      return css`
        font-size: 18px;
        font-weight: 500;
        line-height: 1.3;
        ${(props) => props.theme.media.desktop`
          font-size: 22px;
          line-height: ${26 / 22};
        `};
      `;
  }
};

const Title = styled.p.withConfig({
  // do not pass 'color' or 'align' to DOM
  shouldForwardProp: (prop) => !["color", "align"].includes(prop),
})`
  ${(props) => props.size && getStyles(props.size)};
  ${(props) => props.color && color(props.color)};

  font-family: ${(props) => props.theme.fonts.title};
  text-align: ${(props) => props.align};
`;

Title.defaultProps = {
  align: "inherit",
};

Title.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOf(["xlarge", "large", "medium"]),
};

export default Title;
