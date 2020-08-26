import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Title from './Title';
import Text from './Text';

const getSectionStyles = (color) => {
  switch (color) {
    case 'primary':
      return css`
        background: ${(props) =>
          props.theme.type === 'dark'
            ? props.theme.gradients.reverseDarkGradient
            : props.theme.gradients.reverseLightGradient};
        color: ${(props) =>
          props.theme.type === 'dark'
            ? props.theme.colors.white
            : props.theme.colors.black};
      `;

    case 'light':
      return css`
        background-color: ${(props) => props.theme.colors.lighterNeutral};
        color: ${(props) => props.theme.colors.darkNeutral};
      `;

    case 'dark':
      return css`
        background: ${(props) => props.theme.colors.black};
        color: ${(props) => props.theme.colors.white};
      `;

    default:
      return ``;
  }
};

const StyledSection = styled.div`
  padding-top: ${(props) => props.theme.spacing(props.padding)};
  padding-bottom: ${(props) => props.theme.spacing(props.padding)};

  text-align: center;

  ${(props) => getSectionStyles(props.$color)};
`;

const SectionTitle = styled(Title).attrs((props) => ({
  as: props.as || 'h3',
  size: props.size || 'large',
}))``;

const SectionText = styled(Text)`
  margin: ${(props) => props.theme.spacing(2)} auto 0;
  max-width: 60ch;
`;

const Section = ({ children, className, color, padding }) => {
  return (
    <StyledSection className={className} padding={padding} $color={color}>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'light', 'dark']),
  /* Top and bottom padding for Section (as Grid controls side padding) */
  padding: PropTypes.number,
};

Section.defaultProps = {
  padding: 8,
};

Section.Title = SectionTitle;
Section.Text = SectionText;

export default Section;
