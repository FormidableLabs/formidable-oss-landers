import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FormidableTextLogo from "../../assets/FormidableTextLogo";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows.header};
  height: ${({ theme }) => theme.layout.headerHeight};
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  position: fixed;
  width: calc(100% - ${({ theme }) => theme.layout.sidebarWidth});

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

const MenuButton = styled.button`
  margin-right: 15px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: baseline;
`;

const Header = ({ title, onMenuClick }) => {
  return (
    <HeaderContainer>
      <InnerContainer>
        <LeftSection>
          <MenuButton onClick={onMenuClick}>
            <BurgerIcon />
          </MenuButton>
          <Title>{title}</Title>
        </LeftSection>
        <FormidableLogoWrapper>
          <FormidableTextLogo />
        </FormidableLogoWrapper>
      </InnerContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

export default Header;

const BurgerIcon = () => (
  <svg
    width="20px"
    height="16px"
    viewBox="0 0 20 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="Documentation-Desktop-Copy-2"
        transform="translate(-20.000000, -30.000000)"
        fill="#000"
      >
        <g id="Burger" transform="translate(20.000000, 30.000000)">
          <rect id="Rectangle" x="0" y="7" width="20" height="2"></rect>
          <rect id="Rectangle-Copy-2" x="0" y="0" width="20" height="2"></rect>
          <rect id="Rectangle-Copy-3" x="0" y="14" width="20" height="2"></rect>
        </g>
      </g>
    </g>
  </svg>
);
