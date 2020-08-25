import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Grid from "./Grid";
import Section from "./Section";
import Title from "./Title";
import { boxShadow, tablet, desktop } from "../styles";

const Wrapper = styled(Section).attrs({ color: "light", padding: 5 })``;

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

  ${boxShadow("lightNeutral")};

  ${desktop`
    max-width: ${(props) => props.theme.spacing(35)};
  `};
`;

const StyledSubtitle = styled(Title)`
  margin-top: ${(props) => props.theme.spacing(3)};

  ${desktop`
    margin-top: ${(props) => props.theme.spacing(6)};
  `};
`;

const Features = ({ title, list }) => {
  return (
    <Wrapper>
      <Section.Title>{title}</Section.Title>
      <StyledGrid>
        {list.map((feature, index) => {
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
  /* Section title defaults to "Features" */
  title: PropTypes.string,
  /* An array of each feature */
  list: PropTypes.arrayOf(
    PropTypes.shape({
      /* Illustration/Visual: value for `src` of an <img> element */
      image: PropTypes.string,
      /* Feature heading */
      title: PropTypes.string,
      /* Feature short paragraph */
      description: PropTypes.string,
    })
  ),
};

Features.defaultProps = {
  title: "Features",
};

export default Features;
