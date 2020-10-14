import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FormidableTextLogo from "../assets/formidableTextLogo";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows.header};
  height: ${({ theme }) => theme.layout.headerHeight};
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};

  ${(props) => props.theme.media.desktop`
    padding-left: ${({ theme }) => theme.spacing(7.5)};
    padding-right: ${({ theme }) => theme.spacing(7.5)};
  `}
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 3.72px;
`;

const FormidableLogoWrapper = styled.div`
  height: 1.6rem;
  display: none;

  ${(props) => props.theme.media.tablet`
    display: block;
  `}
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <InnerContainer>
        <Title>{title}</Title>
        <FormidableLogoWrapper>
          <FormidableTextLogo />
        </FormidableLogoWrapper>
      </InnerContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
