import React from 'react';
import styled from 'styled-components';

import Text from './Text';
import Logo from '../assets/formidable.svg';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  max-width: 220px;

  color: ${(props) => props.theme.colors.white};
`;

const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-top-width: ${(props) => props.theme.spacing(21)};
  border-right-width: ${(props) => props.theme.spacing(20)};
  border-bottom-width: 0;
  border-left-width: 0;
  border-color: ${(props) => props.theme.colors.primary} transparent transparent
    transparent;

  ${(props) => props.theme.media.tablet`
    border-top-width: ${(props) => props.theme.spacing(29)};
    border-right-width: ${(props) => props.theme.spacing(28)};
  `};

  ${(props) => props.theme.media.desktop`
    border-top-width: ${(props) => props.theme.spacing(36)};
    border-right-width: ${(props) => props.theme.spacing(35)};
  `};
`;

const Content = styled.div`
  position: relative;

  padding-top: ${(props) => props.theme.spacing(3)};
  padding-left: ${(props) => props.theme.spacing(3)};

  ${(props) => props.theme.media.tablet`
    padding-top: ${(props) => props.theme.spacing(4)};
    padding-left: ${(props) => props.theme.spacing(4)};
  `};

  ${(props) => props.theme.media.desktop`
    padding-top: ${(props) => props.theme.spacing(5)};
    padding-left: ${(props) => props.theme.spacing(6)};
  `};
`;

const StyledText = styled(Text)`
  display: none;
  ${(props) => props.theme.media.tablet`display: inline-block;`};
`;

const StyledLogo = styled(Logo)`
  display: block;
  margin-top: ${(props) => props.theme.spacing(1)};
  width: ${(props) => props.theme.spacing(6)};
`;

const Ribbon = () => {
  return (
    <Wrapper>
      <Triangle aria-hidden="true" />
      <Content>
        <StyledText size="xxsmall" as="span">
          Another OSS
          <br /> project by
        </StyledText>
        <StyledLogo />
      </Content>
    </Wrapper>
  );
};

export default Ribbon;
