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
        ${tablet`
          font-size: 60px;
          line-height: 1.5;
        `};
        ${desktop`
          font-size: 90px;
        `};
      `;
    case "large":
      // Section title
      return css`
        font-size: 30px;
        font-weight: 500;
        line-height: ${38 / 30};
        letter-spacing: 0.05em;
      `;
    case "medium":
    default:
      // Section subtitle
      return css`
        font-size: 22px;
        font-weight: 500;
        line-height: ${26 / 22};
      `;
  }
};

const Title = styled.p`
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
