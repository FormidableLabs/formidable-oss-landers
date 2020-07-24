import React from "react";
import styled from "styled-components";

import Grid from "./Grid";
import Section from "./Section";

const Wrapper = styled(Section)`
  background-color: ${(props) => props.theme.colors.darkerNeutral};
  color: ${(props) => props.theme.colors.white};
`;

const Footer = () => {
  /* Let us take care of this for you */
  return (
    <Wrapper>
      <Grid>
        <Section.Text>
          Formidable is a Seattle, Denver, and London-based engineering
          consultancy and open source software organization, specializing in
          React.js, React Native, GraphQL, Node.js, and the extended JavaScript
          ecosystem. For more information about Formidable, please visit
          formidable.com.
        </Section.Text>
      </Grid>
    </Wrapper>
  );
};

export default Footer;
