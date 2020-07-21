import React from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Button from "./Button";
import Text from "./Text";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  margin-top: ${(props) => props.theme.spacing(9)};
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

const InstallWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  flex: 1 1 auto;

  background-color: #d5d5d5;
  padding-left: ${(props) => props.theme.spacing(2)};
`;

const AnimatedSpan = styled.span`
  display: block;
  transition: transform 300ms ease-out;
  transform: ${(props) =>
    props.animating ? "translateY(-0.5rem)" : "translateY(0)"};
`;

const CopyText = ({ text }) => {
  const [animating, setAnimating] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleCopy = React.useCallback((ev) => {
    ev.preventDefault();
    setAnimating(true);
    setCopied(true);

    setTimeout(() => {
      setAnimating(false);
    }, 200);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, []);

  return (
    <CopyToClipboard text={text}>
      <Wrapper>
        <InstallWrapper>
          <Text size="xsmall" color="darkNeutral" as="span">
            {text}
          </Text>
        </InstallWrapper>
        <Button color="light" onClick={handleCopy} disabled={copied}>
          <AnimatedSpan animating={animating}>
            {copied ? "Copied" : "Copy"}
          </AnimatedSpan>
        </Button>
      </Wrapper>
    </CopyToClipboard>
  );
};

export default CopyText;
