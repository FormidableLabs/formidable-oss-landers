import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Grid from "./Grid";
import HeaderInstall from "./HeaderInstall";
import Ribbon from "./Ribbon";
import Text from "./Text";
import Title from "./Title";
import { linkStyles, tablet, desktop } from "../styles";

const Wrapper = styled.div`
  position: relative;
  padding-top: ${(props) => props.theme.spacing(14)};
  padding-bottom: ${(props) => props.theme.spacing(4)};

  background: ${(props) => props.theme.gradients.darkGradient};
  ${(props) =>
    props.bg &&
    `
    background-image: url(${props.bg}); 
    background-size: cover;
  `};
  color: ${(props) => props.theme.colors.white};

  ${tablet`
    padding-top: ${(props) => props.theme.spacing(19)};
  `};

  ${desktop`
    padding-bottom: ${(props) => props.theme.spacing(15)};
  `};
`;

const StyledGrid = styled(Grid)`
  grid-template-areas:
    "badge"
    "content"
    "nav";

  ${tablet`
    grid-column-gap: ${(props) => props.theme.spacing(8)};
    grid-row-gap: ${(props) => props.theme.spacing(8)};
    grid-template-columns: ${(props) => props.theme.spacing(27)} auto;
    grid-template-areas:
      "badge content"
      "nav nav";
  `};

  ${desktop`
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

  ${tablet`
    width: auto;
  `};
`;

const Content = styled.div`
  grid-area: content;

  margin-top: ${(props) => props.theme.spacing(3)};
  text-align: center;

  ${tablet`
    text-align: left;
  `};
`;

const Nav = styled(Text)`
  grid-area: nav;

  margin-top: ${(props) => props.theme.spacing(3)};
  padding-top: ${(props) => props.theme.spacing(2)};
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

  ${desktop`
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
  linkComponent,
}) => {
  const Link = linkComponent;

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
          <HeaderInstall
            button={button}
            install={install}
            linkComponent={linkComponent}
          />
        </Content>
        <Nav size="large" as="ul">
          {nav.map((navItem, index) => {
            return (
              <Text size="large" as="li" key={`navItem-${index}`}>
                <Link href={navItem.href}>{navItem.label}</Link>
              </Text>
            );
          })}
        </Nav>
      </StyledGrid>
    </Wrapper>
  );
};

Header.propTypes = {
  /* React-router <Link> component? */
  linkComponent: PropTypes.any.isRequired,
  /* Optional background image for entire header */
  background: PropTypes.string,
  /* See: `formidable-oss-badges` repo */
  badge: PropTypes.node,
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
