import React from "react";
import styled from "styled-components";

import Grid from "./Grid";
import Section from "./Section";
import Text from "./Text";
import { linkStyles } from "../styles";

import Logo from "../assets/formidable.svg";

const Wrapper = styled(Section).attrs({ padding: 10 })`
  background-color: ${(props) => props.theme.colors.darkerNeutral};
  color: ${(props) => props.theme.colors.white};
  text-align: left;
  width: 100%;

  ${(props) => props.theme.media.desktop`
    width: calc(100vw - ${({ theme }) => theme.layout.sidebarWidth});
    height: ${(props) => props.theme.layout.footerHeight};
  `}

  ${linkStyles({ color: "white" })};
`;

const StyledGrid = styled(Grid)`
  grid-row-gap: ${(props) => props.theme.spacing(2)};

  ${(props) => props.theme.media.tablet`
    grid-template-columns: 1fr auto;
    grid-column-gap: ${(props) => props.theme.spacing(9)};
  `};
`;

const LinksWrapper = styled.div`
  grid-column: 1;
  display: inline-flex;
  flex-wrap: nowrap;
`;

const StyledLogo = styled(Logo)`
  margin-right: ${(props) => props.theme.spacing(3)};
  width: 70px;

  fill: ${(props) => props.theme.colors.white};
`;

const ListItem = styled.li`
  margin-top: ${(props) => props.theme.spacing(1)};
`;

const StyledLink = styled(Text)`
  letter-spacing: 0.07em;
  text-transform: uppercase;
`;

const StyledText = styled(Text)`
  max-width: 60ch;
`;

const Footer = () => {
  /* Let us take care of this for you */
  return (
    <Wrapper>
      <StyledGrid>
        <LinksWrapper>
          <a
            href="https://formidable.com"
            title="Formidable"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledLogo />
          </a>
          <ul>
            <ListItem>
              <StyledLink
                size="xsmall"
                as="a"
                href="https://formidable.com/contact/"
                title="Contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink
                size="xsmall"
                as="a"
                href="https://formidable.com/careers/"
                title="Careers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Careers
              </StyledLink>
            </ListItem>
          </ul>
        </LinksWrapper>
        <StyledText>
          Formidable is a global design and engineering consultancy and open
          source software organization, specializing in React.js, React Native,
          GraphQL, Node.js, and the extended JavaScript ecosystem. We have
          locations in Seattle, London, Toronto, Denver, and Phoenix with remote
          consultants worldwide. For more information please visit{" "}
          <a href="https://formidable.com">formidable.com</a>.
        </StyledText>
      </StyledGrid>
    </Wrapper>
  );
};

export default Footer;
