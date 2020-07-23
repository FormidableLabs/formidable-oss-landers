import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Grid from "./Grid";
import Title from "./Title";
import Text from "./Text";
import { tablet } from "../styles";

const Wrapper = styled.div`
  padding-top: ${(props) => props.theme.spacing(5)};
  padding-bottom: ${(props) => props.theme.spacing(5)};

  background-color: ${(props) => props.theme.colors.lighterNeutral};
  color: ${(props) => props.theme.colors.darkNeutral};
  text-align: center;
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

const StyledTitle = styled(Title)`
  margin-top: ${(props) => props.theme.spacing(3)};
`;

const StyledText = styled(Text)`
  margin: ${(props) => props.theme.spacing(2)} auto 0;
  max-width: 60ch;
`;

const Features = ({ content }) => {
  return (
    <Wrapper>
      <Title size="large">Features</Title>
      <StyledGrid>
        {content.map((feature, index) => {
          return (
            <Feature key={`feature-${index}`}>
              {feature.image ? <Image src={feature.image} alt="" /> : null}
              <StyledTitle size="medium">{feature.title}</StyledTitle>
              <StyledText>{feature.description}</StyledText>
            </Feature>
          );
        })}
      </StyledGrid>
    </Wrapper>
  );
};

Features.propTypes = {
  content: PropTypes.arrayOf(
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
export default Features;
