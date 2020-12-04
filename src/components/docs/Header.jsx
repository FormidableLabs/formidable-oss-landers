import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

const FormidableTextLogo = () => {
  return (
    <svg
      width="136"
      height="20"
      viewBox="0 0 136 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#000" fillRule="nonzero">
        <path d="M.9 1.5c0-.3.1-.5.5-.5h11.5c.4 0 .5.2.5.5v1.7c0 .3-.1.4-.4.4H3.7v5.2h7.4c.4 0 .5.2.5.5v1.5c0 .4-.2.5-.5.5H3.7V19c0 .4-.2.5-.5.5H1.4c-.4.1-.5-.1-.5-.5V1.5zM13.3 13.3c0-4 2.7-6.5 6.5-6.5s6.5 2.5 6.5 6.5c0 4.3-3 6.5-6.5 6.5s-6.5-2.2-6.5-6.5zm10.1.1c0-2.7-1.6-4.2-3.7-4.2S16 10.7 16 13.4c0 2.4 1.4 4.1 3.7 4.1 2.3 0 3.7-1.7 3.7-4.1zM28.5 7.6c0-.4.2-.5.5-.5h1.6c.4 0 .5.2.5.5v1.1c.9-1.1 2.2-1.9 4-1.9 2.4 0 3.9 1.5 3.9 3.7 0 .4-.2.5-.5.5h-1.6c-.3 0-.4-.1-.4-.4-.1-.9-.7-1.5-1.8-1.5s-2 .7-2.5 1.5c-.6.8-.9 1.8-.9 3.4v5c0 .4-.2.5-.5.5h-1.6c-.4 0-.5-.2-.5-.5l-.2-11.4zM40.9 7.6c0-.4.2-.5.5-.5H43c.4 0 .5.2.5.5v1.1c.8-1.2 1.9-1.9 3.7-1.9 1.6 0 2.7.6 3.2 1.8.8-1 2.1-1.8 4-1.8 2.2 0 3.7 1.2 3.7 3.7V19c0 .4-.2.5-.5.5H56c-.4 0-.5-.2-.5-.5v-8.1c0-1.1-.5-1.7-1.6-1.7-.8 0-1.5.4-2.2 1.1-.7.8-1 1.5-1 2.9V19c0 .4-.2.5-.5.5h-1.6c-.4 0-.5-.2-.5-.5v-8.2c0-1.1-.5-1.7-1.6-1.7-.7 0-1.5.4-2.1 1.1-.6.7-.8 1.2-.8 2.6V19c0 .4-.2.5-.5.5h-1.6c-.4 0-.5-.2-.5-.5l-.1-11.4zM62.5 1.5c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8c-.1-1 .7-1.8 1.8-1.8zm-1.4 6.1c0-.4.2-.5.5-.5h1.6c.4 0 .5.2.5.5V19c0 .4-.2.5-.5.5h-1.6c-.4 0-.5-.2-.5-.5V7.6zM76.2 18.5c-1 .9-1.9 1.4-3.8 1.4-3.1 0-5.8-2.2-5.8-6.5 0-4.1 2.8-6.5 6.1-6.5 1.6 0 2.8.5 3.5 1.3V1c0-.4.2-.5.5-.5h1.6c.4 0 .6.1.6.5v18c0 .4-.2.5-.5.5h-1.3c-.4 0-.6-.1-.7-.5l-.2-.5zm0-6.2c0-.8-.2-1.4-.7-2-.6-.7-1.5-1.2-2.5-1.2-2 0-3.5 1.6-3.5 4.2 0 2.4 1.4 4.1 3.5 4.1 1.2 0 2.1-.5 2.7-1.2.5-.6.6-1.2.6-2.1l-.1-1.8zM91.5 18.3c-1 1-2 1.5-4 1.5-3.4 0-6.2-2.2-6.2-6.5 0-4.1 2.9-6.5 6.4-6.5 1.9 0 3.1.7 3.8 1.5v-.7c0-.4.2-.5.5-.5h1.6c.4 0 .5.2.5.5V19c0 .4-.2.5-.5.5h-1.3c-.3 0-.6-.1-.7-.5l-.1-.7zm0-6.1c0-.8-.2-1.3-.8-1.9-.6-.6-1.5-1.1-2.7-1.1-2.2 0-3.9 1.6-3.9 4.2 0 2.5 1.6 4.1 3.8 4.1 1.4 0 2.4-.7 2.9-1.4.5-.6.6-1.1.6-2l.1-1.9zM97.2 1c0-.4.2-.5.5-.5h1.6c.4 0 .5.2.5.5v8c1-1.2 2.5-2.1 4.4-2.1 3.6 0 5.5 2.4 5.5 6.4 0 3.7-2.3 6.6-6.2 6.6-1.5 0-2.7-.4-3.7-1.1v.2c0 .4-.2.5-.5.5h-1.6c-.4 0-.5-.2-.5-.5V1zm2.7 14.4c0 .6.3 1 .7 1.2.8.6 1.8.9 2.7.9 2.4 0 3.7-1.8 3.7-4.2 0-2.8-1.4-4.1-3.2-4.1-1.7 0-2.8 1.2-3.3 2.1-.3.6-.5 1-.5 2l-.1 2.1zM112.1 1c0-.4.2-.5.5-.5h1.6c.4 0 .5.2.5.5v15.2c0 1 .4 1.3 1 1.3s.8-.3 1.1-.3c.2 0 .3.1.3.3v1.6c0 .2-.1.3-.3.4-.4.2-1.2.3-1.8.3-1.5 0-3-.8-3-3l.1-15.8zM130.3 16.9c.1.1.1.2.1.3 0 .1-.1.2-.2.3-1.7 1.7-3 2.3-5.4 2.3-3.3 0-6.5-2.3-6.5-6.5 0-4 2.9-6.5 6.4-6.5 4.2 0 6.2 3.3 6.2 6.3v.5c0 .4-.2.5-.5.5h-9.3c.3 2 1.8 3.3 3.9 3.3 1.8 0 2.7-.7 3.5-1.6.1-.2.2-.2.4-.2.1 0 .2.1.3.2l1.1 1.1zm-2.1-4.9c-.5-1.9-1.9-2.8-3.4-2.8-1.7 0-3.3 1-3.7 2.8h7.1z" />
        <g>
          <path d="M130.9 7.7h.2c0 .2.1.3.3.3.2 0 .3-.1.3-.2s-.1-.2-.4-.2c-.3-.1-.4-.2-.4-.4s.2-.4.5-.4.5.2.5.4h-.2c0-.2-.1-.2-.3-.2-.2 0-.3.1-.3.2s.1.2.2.2c.3.1.5.1.5.4 0 .2-.2.4-.5.4-.2 0-.4-.2-.4-.5zM132.2 6.8h.3l.3.9c.1.2.1.3.1.3s0-.1.1-.3l.3-.9h.3v1.3h-.2V7s0 .1-.1.3l-.3.9h-.2l-.3-.9c-.1-.2-.1-.3-.1-.3v1.1h-.2V6.8z" />
        </g>
      </g>
    </svg>
  );
};
