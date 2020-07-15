import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Text from "./Text";
import Title from "./Title";
import { tablet, desktop, linkStyles } from "../styles";

import { ReactComponent as Logo } from "../assets/formidable.svg";

const Wrapper = styled.div`
  position: relative;

  background: ${(props) => props.theme.gradients.darkGradient};
  ${(props) => props.bg && `background-image: url(${props.bg});`}
  background-size: cover;
  color: ${(props) => props.theme.colors.white};

  ${tablet`  
    padding-top: ${(props) => props.theme.spacing(14)};
    padding-bottom: ${(props) => props.theme.spacing(15)};
  `};

  ${desktop`  
    padding-top: ${(props) => props.theme.spacing(30)};
    padding-bottom: ${(props) => props.theme.spacing(15)};
  `};
`;

/* TODO: Make responsive */
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 0 auto;
  max-width: 1000px;

  ${desktop`
    flex-wrap: nowrap;
  `};
`;

const Cell = styled.div`
  flex: 1 1 auto;
`;

const Badge = styled.div`
  width: 350px;
  height: 350px;
  margin: 0 auto;

  ${desktop`
    margin-right: ${(props) => props.theme.spacing(12)};
  `};
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
  border-top-width: ${(props) => props.theme.spacing(36)};
  border-right-width: ${(props) => props.theme.spacing(35)};
  border-bottom-width: 0;
  border-left-width: 0;
  border-color: ${(props) => props.theme.colors.primary} transparent transparent
    transparent;
`;

const RibbonText = styled(Text)`
  position: relative;

  padding-top: ${(props) => props.theme.spacing(5)};
  padding-left: ${(props) => props.theme.spacing(6)};
`;

const StyledLogo = styled(Logo)`
  display: block;
  margin-top: ${(props) => props.theme.spacing(1)};
  width: ${(props) => props.theme.spacing(6)};
`;

const Nav = styled.ul`
  margin-top: ${(props) => props.theme.spacing(3)};

  display: flex;
  flex-direction: row;

  > * + * {
    margin-left: ${(props) => props.theme.spacing(3)};
  }

  ${linkStyles({ color: "white" })};
`;

const Header = ({ content, linkComponent }) => {
  const Link = linkComponent;
  return (
    <Wrapper bg={content.background}>
      <Row>
        <Cell>
          <Badge>{content.badge}</Badge>
        </Cell>
        <Cell>
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
              <StyledLogo />
            </RibbonText>
          </Ribbon>
          <Nav>
            {content.nav.map((navItem) => {
              return (
                <Text size="large" as="li">
                  <Link href={navItem.href}>{navItem.label}</Link>
                </Text>
              );
            })}
          </Nav>
        </Cell>
      </Row>
    </Wrapper>
  );
};

Header.propTypes = {
  linkComponent: PropTypes.element,
  content: PropTypes.shape({
    /* Optional background image for entire header */
    background: PropTypes.string,
    /* Name of OSS project */
    title: PropTypes.string,
    /* Short description of OSS Project */
    description: PropTypes.string,
    /* Quick instructions for installation, e.g. `npm install renature` */
    install: PropTypes.string,
    /* Button that appears next to install instructions */
    heroButton: PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    }),
    /* Nav menu for OSS project site (typically Docs, Gallery, Issues, Github) */
    nav: PropTypes.arrayOf({
      label: PropTypes.string,
      href: PropTypes.string,
    }),
  }),
};

export default Header;
