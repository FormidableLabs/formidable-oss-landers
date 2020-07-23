import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

import Grid from './Grid';
import Title from './Title';
import Text from './Text';
import { tablet } from '../styles';

const Wrapper = styled.div`
  padding-top: ${props => props.theme.spacing(4)};
  padding-bottom: ${(props) => props.theme.spacing(4)};

  background-color: ${props => props.theme.colors.lighterNeutral};
  color: ${props => props.theme.colors.darkNeutral};
  text-align: center;
`;

const StyledGrid = styled(Grid)`
  grid-template-columns: 1fr;

  ${tablet`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

const Feature = styled.div`
  margin-top: ${props => props.theme.spacing(8)};
`;

const Features = ({ content }) => {
  return (
    <Wrapper>
      <Title size="large">Features</Title>
      <StyledGrid>
        {content.map((feature, index) => {
          return (
            <Feature key={`feature-${index}`}>
              <Title size="medium">{feature.title}</Title>
              <Text>{feature.description}</Text>
            </Feature>
            );
        })}
      </StyledGrid>
    </Wrapper>);
}

Features.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      /* Illustration */
      image: PropTypes.string,
      /* Feature heading */
      title: PropTypes.string,
      /* Feature short description */
      description: PropTypes.string
    })
  )
}
export default Features;