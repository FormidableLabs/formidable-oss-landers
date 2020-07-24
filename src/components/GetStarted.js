import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Grid from "./Grid";
import Section from "./Section";
import Button from "./Button";

const Wrapper = styled(Section)`
  background-color: ${(props) => props.theme.colors.lighterNeutral};
  text-align: center;
`;

const GetStarted = ({ content, linkComponent }) => {
  const Link = linkComponent;
  const { button } = content;
  const renderButton =
    button && button.label && button.href ? (
      <Button as={Link} href={button.href}>
        {button.label}
      </Button>
    ) : null;
  return (
    <Wrapper>
      <Section.Title>{content.title}</Section.Title>
      <Grid>
        <Section.Text>{content.description}</Section.Text>
        {renderButton}
      </Grid>
    </Wrapper>
  );
};

GetStarted.propTypes = {
  linkComponent: PropTypes.any.isRequired,
  content: PropTypes.shape({
    /* Section title that defaults to "Get Started" */
    title: PropTypes.string,
    /* One sentence about how to get started using this thing.  */
    description: PropTypes.string,
    button: PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    }),
  }).isRequired,
};

GetStarted.defaultProps = {
  title: "Get Started",
};

export default GetStarted;
