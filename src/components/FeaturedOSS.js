import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "./Button";
import Grid from "./Grid";
import Section from "./Section";
import Title from "./Title";
import { linkStyles, tablet, desktop } from "../styles";

const Wrapper = styled(Section)`
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`;

const StyledGrid = styled(Grid)`
  grid-template-columns: 1fr;

  ${tablet`
    grid-gap: ${(props) => props.theme.spacing(8)};
    grid-template-columns: 1fr 1fr;
    margin-top: ${(props) => props.theme.spacing(8)};
    
    text-align: left;
  `}
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;

  ${tablet`
    flex-direction: row;
    grid-column: span 1;
  `};
`;

const BadgeWrapper = styled.div`
  max-width: 90px;
  margin: ${(props) => props.theme.spacing(8)} auto 0;

  ${tablet`
    margin-top: 0;
    margin-right: ${(props) => props.theme.spacing(3)};
    max-width: none;
    flex: 1;
  `};
`;

const TextWrapper = styled.div`
  flex: 2;
  ${linkStyles({ color: "white" })};
`;

const StyledTitle = styled(Title).attrs({ size: "medium" })`
  display: block;
  margin-top: ${(props) => props.theme.spacing(1)};
`;

const ButtonWrapper = styled.div`
  margin-top: ${(props) => props.theme.spacing(4)};

  ${tablet`
    margin-top: 0;
    grid-column: span 2;
    text-align: center;
  `};
`;

const FeaturedOSS = ({ title, list }) => {
  return (
    <Wrapper>
      <Section.Title>{title}</Section.Title>
      <StyledGrid>
        {list.map((project, index) => {
          return (
            <Project key={`project-${index}`}>
              <BadgeWrapper>{project.badge}</BadgeWrapper>
              <TextWrapper>
                <StyledTitle
                  as="a"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </StyledTitle>
                {project.description ? (
                  <Section.Text>{project.description}</Section.Text>
                ) : null}
              </TextWrapper>
            </Project>
          );
        })}
        <ButtonWrapper>
          <Button
            color="light"
            as="a"
            href="https://formidable.com/open-source/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All
          </Button>
        </ButtonWrapper>
      </StyledGrid>
    </Wrapper>
  );
};

FeaturedOSS.propTypes = {
  /* Section title */
  title: PropTypes.string,
  /* An array of code examples */
  list: PropTypes.arrayOf(
    PropTypes.shape({
      /* Badge */
      badge: PropTypes.node,
      /* Link to project OSS page */
      href: PropTypes.string,
      /* Project Name */
      title: PropTypes.string,
      /* Short description of project */
      description: PropTypes.string,
    })
  ),
};

FeaturedOSS.defaultProps = {
  title: "More Open Source from Formidable",
};

export default FeaturedOSS;
