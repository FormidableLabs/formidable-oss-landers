import React from "react";
import styled from "styled-components";

import Title from "./Title";
import Text from "./Text";

const StyledSection = styled.div`
  padding-top: ${(props) => props.theme.spacing(props.padding)};
  padding-bottom: ${(props) => props.theme.spacing(props.padding)};

  text-align: center;
`;

const SectionTitle = styled(Title).attrs((props) => ({
  as: props.as || "h3",
  size: props.size || "large",
}))``;

const SectionText = styled(Text)`
  margin: ${(props) => props.theme.spacing(2)} auto 0;
  max-width: 60ch;
`;

const Section = ({ children, className, padding }) => {
  return (
    <StyledSection className={className} padding={padding}>
      {children}
    </StyledSection>
  );
};

Section.defaultProps = {
  /* Top and bottom padding for Section (as Grid controls side padding) */
  padding: 8,
};

Section.Title = SectionTitle;
Section.Text = SectionText;

export default Section;
