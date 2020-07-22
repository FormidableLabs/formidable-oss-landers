import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { desktop } from "../styles";

export const defaultButtonStyles = css`
  padding: 0.75em 1.4em;
  font-size: 12px;
  letter-spacing: 0.1em;
  line-height: 1.2;
  text-transform: uppercase;

  ${desktop`font-size: 14px;`};
`;

export const lightButtonStyles = css`
  background-color: ${(props) => props.theme.colors.lighterNeutral};
  color: ${(props) => props.theme.colors.darkNeutral};
  &:not([disabled]):focus,
  &:not([disabled]):hover {
    background-color: ${(props) => props.theme.colors.lightPrimary};
  }
  &:not([disabled]):active {
    background-color: ${(props) => props.theme.colors.white};
  }
`;

export const darkButtonStyles = css`
  background-color: ${(props) => props.theme.colors.darkNeutral};
  color: ${(props) => props.theme.colors.white};
  &:focus,
  &:hover {
    background-color: ${(props) => props.theme.colors.darkerPrimary};
  }
`;

const StyledButton = styled.button.withConfig({
  // do not pass 'color' to DOM
  shouldForwardProp: (prop) => !["color"].includes(prop),
})`
  ${defaultButtonStyles};
  ${(props) => props.color === "light" && lightButtonStyles};
  ${(props) => props.color === "dark" && darkButtonStyles};
`;

const Button = ({ children, ...props }) => {
  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: "dark",
};

Button.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

export default Button;
