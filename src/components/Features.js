import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Grid from "./Grid";
import Section from "./Section";
import Title from "./Title";
import { tablet } from "../styles";

const Wrapper = styled(Section).attrs({ padding: 5 })`
  background-color: ${(props) => props.theme.colors.lighterNeutral};
  color: ${(props) => props.theme.colors.darkNeutral};
`;

const StyledGrid = styled(Grid)`
  grid-template-columns: 1fr;

  ${tablet`
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: ${(props) => props.theme.spacing(6)};
  `}
`;

const Feature = styled.div``;

const Image = styled.img`
  margin: ${(props) => props.theme.spacing(5)} auto 0;
  max-width: ${(props) => props.theme.spacing(20)};
`;

const StyledSubtitle = styled(Title)`
  margin-top: ${(props) => props.theme.spacing(3)};
`;

const Features = ({ content }) => {
  const { items } = content;

  return (
    <Wrapper>
      <Section.Title>{content.title}</Section.Title>
      <StyledGrid>
        {items.map((feature, index) => {
          return (
            <Feature key={`feature-${index}`}>
              {feature.image ? <Image src={feature.image} alt="" /> : null}
              <StyledSubtitle size="medium">{feature.title}</StyledSubtitle>
              <Section.Text>{feature.description}</Section.Text>
            </Feature>
          );
        })}
      </StyledGrid>
    </Wrapper>
  );
};

Features.propTypes = {
  content: PropTypes.shape({
    /* Section title defaults to "Features" */
    title: PropTypes.string,
    /* An array of each feature */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /* Illustration/Visual: value for `src` of an <img> element */
        image: PropTypes.string,
        /* Feature heading */
        title: PropTypes.string,
        /* Feature short paragraph */
        description: PropTypes.string,
      })
    ),
  }),
};

Features.defaultProps = {
  title: "Features",
};

export default Features;
