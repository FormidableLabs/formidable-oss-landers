import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Grid from "./Grid";
import HeaderInstall from "./HeaderInstall";
import Link from "./Link";
import Ribbon from "./Ribbon";
import Text from "./Text";
import Title from "./Title";
import { color, linkStyles } from "../styles";

const Wrapper = styled.div`
  position: relative;
  padding-top: ${(props) => props.theme.spacing(14)};
  padding-bottom: ${(props) => props.theme.spacing(4)};

  background: ${(props) =>
    props.theme.type === "dark"
      ? props.theme.gradients.darkGradient
      : props.theme.gradients.lightGradient};
  ${(props) =>
    props.bg &&
    `
    background-image: url(${props.bg}); 
    background-size: cover;
  `};

  ${(props) => (props.theme.type === "dark" ? color("white") : color("black"))};

  ${(props) => props.theme.media.tablet`
    padding-top: ${(props) => props.theme.spacing(19)};
  `};

  ${(props) => props.theme.media.desktop`
    padding-bottom: ${(props) => props.theme.spacing(15)};
  `};
`;

const StyledGrid = styled(Grid)`
  grid-template-areas:
    "badge"
    "content"
    "nav";

  ${(props) => props.theme.media.tablet`
    grid-column-gap: ${(props) => props.theme.spacing(8)};
    grid-row-gap: ${(props) => props.theme.spacing(8)};
    grid-template-columns: ${(props) => props.theme.spacing(27)} auto;
    grid-template-areas:
      "badge content"
      "nav nav";
  `};

  ${(props) => props.theme.media.desktop`
    grid-column-gap: ${(props) => props.theme.spacing(12)};
    grid-row-gap: 0;
    grid-template-columns: ${(props) => props.theme.spacing(44)} auto;
    grid-template-areas: 
      "badge content"
      "badge nav";
  `}
`;

const Badge = styled.div`
  grid-area: badge;

  min-width: 130px;
  width: 40%;
  height: auto;
  margin: 0 auto;

  ${(props) => props.theme.media.tablet`
    width: auto;
  `};
`;

const Content = styled.div`
  grid-area: content;

  margin-top: ${(props) => props.theme.spacing(3)};
  text-align: center;

  ${(props) => props.theme.media.tablet`
    text-align: left;
  `};
`;

const Nav = styled(Text)`
  grid-area: nav;

  margin-top: ${(props) => props.theme.spacing(3)};
  padding-top: ${(props) => props.theme.spacing(2)};
  border-top: 2px solid
    ${(props) =>
      props.theme.type === "dark"
        ? props.theme.colors.white
        : props.theme.colors.black};

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${(props) =>
    props.theme.type === "dark"
      ? linkStyles({ color: "white" })
      : linkStyles({ color: "default" })};

  ${(props) => props.theme.media.tablet`
    justify-content: center;

    > * + * {
      margin-left: ${(props) => props.theme.spacing(2)};
    }
  `};

  ${(props) => props.theme.media.desktop`
    justify-content: space-between;
  `};
`;

const Header = ({
  background,
  badge,
  button,
  description,
  install,
  nav,
  title,
}) => {
  // TODO: Mobile nav switches to "Learn More"
  return (
    <Wrapper bg={background}>
      <StyledGrid>
        <Badge>{badge}</Badge>
        <Content>
          <Title size="xlarge" as="h1">
            {title}
          </Title>
          <Text size="xlarge" as="h2">
            {description}
          </Text>
          <Ribbon />
          <HeaderInstall button={button} install={install} />
        </Content>
        <Nav size="large" as="ul">
          {nav.map((navItem, index) => {
            return (
              <Text size="large" as="li" key={`navItem-${index}`}>
                <Link to={navItem.href}>{navItem.label}</Link>
              </Text>
            );
          })}
        </Nav>
      </StyledGrid>
    </Wrapper>
  );
};

Header.propTypes = {
  /* Optional background image for entire header */
  background: PropTypes.string,
  /* See: `formidable-oss-badges` repo */
  badge: PropTypes.element,
  /* Name of OSS project */
  title: PropTypes.string,
  /* Short description of OSS Project */
  description: PropTypes.string,
  /* Quick instructions for installation, e.g. `npm install renature` */
  install: PropTypes.string,
  /* Button that appears next to install instructions */
  button: PropTypes.shape({
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
};

export default Header;
