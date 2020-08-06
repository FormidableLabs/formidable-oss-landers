import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "./Button";
import Grid from "./Grid";
import Section from "./Section";

const ButtonWrapper = styled.div`
  margin-top: ${(props) => props.theme.spacing(4)};
`;

const CustomSection = ({
  button,
  color,
  components,
  description,
  linkComponent,
  title,
}) => {
  const Link = linkComponent;
  const renderButton =
    button && button.label && button.href ? (
      <Button as={Link} href={button.href} color={button.color || "light"}>
        {button.label}
      </Button>
    ) : null;

  return (
    <Section color={color}>
      <Section.Title>{title}</Section.Title>
      <Grid>
        <Section.Text>{description}</Section.Text>
        {components}
        <ButtonWrapper>{renderButton}</ButtonWrapper>
      </Grid>
    </Section>
  );
};

CustomSection.propTypes = {
  linkComponent: PropTypes.any,
  color: Section.propTypes.color,
  /* Section title */
  title: PropTypes.string,
  /* One sentence about how to get started using this thing.  */
  description: PropTypes.string,
  /* Array of custom components */
  components: PropTypes.array,
  button: PropTypes.shape({
    color: Button.propTypes.color,
    label: PropTypes.string,
    href: PropTypes.string,
  }),
};

export default CustomSection;
