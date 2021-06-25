import React from "react";
import styled from "styled-components";

import Grid from "./Grid";
import Section from "./Section";
import Title from "./Title";
import { boxShadow } from "../styles";
import featureSvg from "../assets/feature.svg";

const Wrapper = styled(Section).attrs({ color: "light", padding: 5 })``;

const StyledGrid = styled(Grid)`
  grid-template-columns: 1fr;

  ${(props) => props.theme.media.tablet`
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: ${(props) => props.theme.spacing(6)};
  `}
`;

const Image = styled.img`
  margin: ${(props) => props.theme.spacing(5)} auto 0;
  max-width: ${(props) => props.theme.spacing(20)};

  ${boxShadow("lightNeutral")};

  ${(props) => props.theme.media.desktop`
    max-width: ${(props) => props.theme.spacing(35)};
  `};
`;

const StyledSubtitle = styled(Title)`
  margin-top: ${(props) => props.theme.spacing(3)};

  ${(props) => props.theme.media.desktop`
    margin-top: ${(props) => props.theme.spacing(6)};
  `};
`;

const Features = () => {
  const list = [
    {
      image: featureSvg,
      title: "Declarative React hooks for animating with ease",
      description:
        "Tweak your physics parameters, set from and to values for your CSS properties, and let renature do the rest.",
    },
    {
      image: featureSvg,
      title: "Gravity, Friction, Fluid Resistance, and more",
      description:
        "Renature explores forces that other physics-based animation libraries typically leave out, giving your animations unique feeling and intuitive motion.",
    },
    {
      image: featureSvg,
      title: "An animation library for physics nerds",
      description:
        "Renature emphasizes mathematical precision and correctness, all backed by the type safety and speed of ReasonML.",
    },
  ];
  return (
    <Wrapper>
      <Section.Title>Features</Section.Title>
      <StyledGrid>
        {list.map((feature, index) => (
          <div key={`feature-${index}`}>
            {feature.image ? <Image src={feature.image} alt="" /> : null}
            <StyledSubtitle size="medium">{feature.title}</StyledSubtitle>
            <Section.Text>{feature.description}</Section.Text>
          </div>
        ))}
      </StyledGrid>
    </Wrapper>
  );
};

export default Features;
