import React from "react";
import styled, { css } from "styled-components";

import Button from "./Button";
import CopyText from "./CopyText";
import { tablet } from "../styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin-top: ${(props) => props.theme.spacing(6)};
  margin-left: ${(props) => props.theme.spacing(-2)};
  margin-bottom: ${(props) => props.theme.spacing(1)};

  ${tablet`
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
        <Button as={Link} href={button.href} color="light">
          {button.label}
        </Button>
      ) : null}
    </Wrapper>
  );
};

export default HeaderInstall;
