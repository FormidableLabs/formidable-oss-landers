import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { desktop } from "../styles";

const defaultButtonStyles = css`
  padding: 0.75em 1.4em;
  font-size: 12px;
  letter-spacing: 0.1em;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;

  ${desktop`font-size: 14px;`};
`;

const lightButtonStyles = css`
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

const darkButtonStyles = css`
  background-color: ${(props) => props.theme.colors.darkNeutral};
  color: ${(props) => props.theme.colors.white};
  &:focus,
  &:hover {
    background-color: ${(props) => props.theme.colors.darkerPrimary};
  }
`;

const StyledButton = styled.button
  .attrs((props) => ({
    type: props.as ? undefined : "button",
  }))
  .withConfig({
    // do not pass 'color' or 'full' to DOM
    shouldForwardProp: (prop) => !["color", "full"].includes(prop),
  })`
  ${defaultButtonStyles};
  ${(props) => props.color === "light" && lightButtonStyles};
  ${(props) => props.color === "dark" && darkButtonStyles};

  display: ${(props) => (props.full ? `block` : `inline-block`)};
`;

const Button = ({ children, className, ...props }) => {
  return (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: "dark",
  full: false,
};

Button.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
  full: PropTypes.bool,
};

export default Button;
