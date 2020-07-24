import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Grid from "./Grid";
import Section from "./Section";
import Button from "./Button";

const Wrapper = styled(Section)`
  background-color: ${(props) => props.theme.colors.lighterNeutral};
`;

const ButtonWrapper = styled.div`
  margin-top: ${(props) => props.theme.spacing(4)};
`;

const GetStarted = ({ title, description, button, linkComponent }) => {
  const Link = linkComponent;
  const renderButton =
    button && button.label && button.href ? (
      <Button as={Link} href={button.href}>
        {button.label}
      </Button>
    ) : null;

  return (
    <Wrapper>
      <Section.Title>{title}</Section.Title>
      <Grid>
        <Section.Text>{description}</Section.Text>
        <ButtonWrapper>{renderButton}</ButtonWrapper>
      </Grid>
    </Wrapper>
  );
};

GetStarted.propTypes = {
  linkComponent: PropTypes.any,
  /* Section title that defaults to "Get Started" */
  title: PropTypes.string,
  /* One sentence about how to get started using this thing.  */
  description: PropTypes.string,
  button: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
};

GetStarted.defaultProps = {
  title: "Get Started",
};

export default GetStarted;
