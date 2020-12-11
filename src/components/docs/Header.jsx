import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FormidableTextLogo from "../../assets/FormidableTextLogo";
import BurgerIcon from "../../assets/BurgerIcon";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows.header};
  height: ${({ theme }) => theme.layout.headerHeight};
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(10)};
  position: fixed;
  width: 100%;
  z-index: ${({ sidebarOpen }) => (sidebarOpen ? "-1" : "2")};

  ${(props) => props.theme.media.desktop`
    width: calc(100% - ${({ theme }) => theme.layout.sidebarWidth});
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
  display: none;

  ${(props) => props.theme.media.tablet`
    display: block;
  `}
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const MenuButton = styled.button`
  margin-right: 15px;

  ${(props) => props.theme.media.desktop`
    display: none;
  `}
`;

const Header = ({ title, sidebarOpen, onMenuClick }) => {
  return (
    <HeaderContainer sidebarOpen={sidebarOpen}>
      <InnerContainer>
        <LeftContainer>
          <MenuButton onClick={onMenuClick}>
            <BurgerIcon />
          </MenuButton>
          <Title>{title}</Title>
        </LeftContainer>
        <FormidableLogoWrapper>
          <FormidableTextLogo />
        </FormidableLogoWrapper>
      </InnerContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

export default Header;
