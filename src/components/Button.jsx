import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { desktop } from '../styles';

const defaultButtonStyles = css`
  padding: 0.75em 1.4em;
  font-size: 12px;
  letter-spacing: 0.1em;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;

  ${(props) => props.theme.media.desktop`font-size: 14px;`};
`;

const getButtonStyles = (color) => {
  switch (color) {
    case 'light':
      return css`
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

    case 'dark':
    default:
      return css`
        background-color: ${(props) => props.theme.colors.darkNeutral};
        color: ${(props) => props.theme.colors.white};

        &:not([disabled]):focus,
        &:not([disabled]):hover {
          background-color: ${(props) => props.theme.colors.darkerPrimary};
        }
      `;
  }
};

const StyledButton = styled.button.attrs((props) => ({
  type: props.as ? undefined : 'button',
}))`
  ${defaultButtonStyles};
  ${(props) => getButtonStyles(props.$color)};

  display: ${(props) => (props.$full ? `block` : `inline-block`)};
`;

const Button = ({ children, className, color, full, ...props }) => {
  return (
    <StyledButton className={className} $color={color} $full={full} {...props}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  full: false,
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  color: PropTypes.oneOf(['light', 'dark']),
  full: PropTypes.bool,
};

export default Button;
