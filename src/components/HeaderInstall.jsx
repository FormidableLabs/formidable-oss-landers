import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "./Button";
import CopyText from "./CopyText";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin-top: ${(props) => props.theme.spacing(6)};
  margin-left: ${(props) => props.theme.spacing(-2)};
  margin-bottom: ${(props) => props.theme.spacing(1)};

  ${(props) => props.theme.media.tablet`
    margin-top: ${(props) => props.theme.spacing(5)};
  `};

  > * {
    margin-top: ${(props) => props.theme.spacing(2)};
    margin-left: ${(props) => props.theme.spacing(2)};
  }

  /* styled(Button) with "as" prop does not get the right styles. so we are commit this crime */
  > *:last-child {
    flex: 1 1 auto;
  }
`;

const StyledCopyText = styled(CopyText)`
  flex: 1 0 auto;
`;

const HeaderInstall = ({ button, install, linkComponent }) => {
  const Link = linkComponent;
  const hasButton = button && button.label && button.href;

  return (
    <Wrapper>
      <StyledCopyText text={install} />
      {hasButton ? (
        <Button as={Link} href={button.href} color="inverse">
          {button.label}
        </Button>
      ) : null}
    </Wrapper>
  );
};

HeaderInstall.propTypes = {
  button: PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string,
  }),
  install: PropTypes.string,
  linkComponent: PropTypes.any,
};

export default HeaderInstall;
