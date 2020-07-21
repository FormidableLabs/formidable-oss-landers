import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { defaultButtonStyles, lightButtonStyles } from "./Button";
import CopyText from "./CopyText";
import Ribbon from "./Ribbon";
import Text from "./Text";
import Title from "./Title";
import { tablet, linkStyles } from "../styles";

const Wrapper = styled.div`
  position: relative;
  padding-top: ${(props) => props.theme.spacing(14)};
  padding-right: ${(props) => props.theme.spacing(3)};
  padding-bottom: ${(props) => props.theme.spacing(4)};
  padding-left: ${(props) => props.theme.spacing(3)};

  background: ${(props) => props.theme.gradients.darkGradient};
  ${(props) => props.bg && `background-image: url(${props.bg});`}
  background-size: cover;
  color: ${(props) => props.theme.colors.white};

  ${tablet`
    padding-top: ${(props) => props.theme.spacing(19)};
    padding-right: ${(props) => props.theme.spacing(8)};
    padding-left: ${(props) => props.theme.spacing(8)};
  `};
`;

const Grid = styled.div`
  margin: 0 auto;

  ${tablet`
    display: grid;
    grid-gap: ${(props) => props.theme.spacing(8)};
    grid-template-columns: 220px auto;
    grid-template-areas:
      "badge content"
      "nav nav";
    
    max-width: ${(props) => props.theme.spacing(85)};
  `};
`;

const Badge = styled.div`
  grid-area: badge;

  min-width: 130px;
  width: 40%;
  height: auto;
  margin: 0 auto;

  ${tablet`
    width: auto;
  `};
`;

const Content = styled.div`
  grid-area: content;

  margin-top: ${(props) => props.theme.spacing(3)};
  text-align: center;
  ${tablet`text-align: left;`};
`;

const Nav = styled(Text)`
  grid-area: nav;

  margin-top: 1.6em;
  padding-top: 1.6em;
  border-top: 2px solid ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${linkStyles({ color: "white" })};

  ${tablet`
    justify-content: center;

    > * + * {
      margin-left: ${(props) => props.theme.spacing(2)};
    }
  `};
`;

const ButtonLink = styled.span`
  ${defaultButtonStyles};
  ${lightButtonStyles};

  display: block;
  text-align: center;
`;

const Header = ({ content, linkComponent }) => {
  const Link = linkComponent;
  const { heroButton } = content;
  const renderHeroButton =
    heroButton && heroButton.label && heroButton.href ? (
      <Link href={content.heroButton.href}>
        <ButtonLink>{content.heroButton.label}</ButtonLink>
      </Link>
    ) : null;
  return (
    <Wrapper bg={content.background}>
      <Grid>
        <Badge>{content.badge}</Badge>
        <Content>
          <Title size="xlarge" as="h1">
            {content.title}
          </Title>
          <Text size="xlarge" as="h2">
            {content.description}
          </Text>
          <Ribbon />
          <CopyText text={content.install} />
          {renderHeroButton}
        </Content>
        <Nav size="large" as="ul">
          {content.nav.map((navItem, index) => {
            return (
              <Text size="large" as="li" key={`navItem-${index}`}>
                <Link href={navItem.href}>{navItem.label}</Link>
              </Text>
            );
          })}
        </Nav>
      </Grid>
    </Wrapper>
  );
};

Header.propTypes = {
  linkComponent: PropTypes.any,
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
    nav: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        href: PropTypes.string,
      })
    ),
  }),
};

export default Header;
