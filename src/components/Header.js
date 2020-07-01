import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "./Text";
import Title from "./Title";
import background from "../assets/renature/background.svg";

const Wrapper = styled.div`
  position: relative;
  padding: 237px 0 123px;

  background-color: ${(props) => props.theme.colors.darkPrimary};
  background-image: url(${background});
  background-size: cover;
  color: ${(props) => props.theme.colors.white};
`;
const Ribbon = styled.div`
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
  border-width: 292px 283px 0 0;
  border-color: ${(props) => props.theme.colors.primary} transparent transparent
    transparent;

  transform: skew(0deg);
`;

const RibbonText = styled(Text)`
  position: relative;

  padding: 43px 0 0 53px;
`;

const Nav = styled.ul``;

const Header = ({ content }) => (
  <Wrapper>
    <Title size="xlarge" as="h1">
      {content.title}
    </Title>
    <Text size="xlarge" as="h2">
      {content.description}
    </Text>
    <Ribbon>
      <Triangle aria-hidden="true" />
      <RibbonText size="xxsmall">
        Another OSS
        <br /> project by
        <br /> Formidable
      </RibbonText>
    </Ribbon>
    <Nav>
      {content.nav.map((navItem) => {
        // TODO: Create a smart Link component
        return (
          <li>
            <Text size="large" as="span">
              {navItem.label}
            </Text>
          </li>
        );
      })}
    </Nav>
  </Wrapper>
);

Header.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    nav: PropTypes.arrayOf({
      label: PropTypes.string,
      href: PropTypes.string,
    }),
  }),
};

export default Header;
