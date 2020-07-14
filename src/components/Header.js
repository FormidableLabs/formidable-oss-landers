import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Text from "./Text";
import Title from "./Title";
import { linkStyles } from "../styles";

import { ReactComponent as Logo } from "../assets/formidable.svg";

const Wrapper = styled.div`
  position: relative;
  padding: 237px 0 123px;

  background-color: ${(props) => props.theme.gradients.darkGradient};
  ${(props) => props.bg && `background-image: url(${props.bg});`}
  background-size: cover;
  color: ${(props) => props.theme.colors.white};
`;

/* TODO: Make responsive */
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  margin: 0 auto;
  max-width: 1000px;
`;

const Cell = styled.div`
  flex: 1 1 auto;
`;

/* TODO: Replace placeholder */
const Badge = styled.div`
  background-color: ${(props) => props.theme.colors.lightNeutral};
  width: 350px;
  height: 350px;
  margin-right: 100px;
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

const StyledLogo = styled(Logo)`
  margin-top: ${(props) => props.theme.spacing(1)};
  display: block;
  width: 48px;
`;

const Nav = styled.ul`
  margin-top: 24px;

  display: flex;
  flex-direction: row;

  > * + * {
    margin-left: 24px;
  }

  ${linkStyles({ color: "white" })};
`;

const Header = ({ content, linkComponent }) => {
  const Link = linkComponent;
  return (
    <Wrapper bg={content.background}>
      <Row>
        <Cell>
          <Badge>Badge Placeholder</Badge>
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
