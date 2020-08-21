import React from "react";
import styled, { ThemeProvider } from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  width: ${(props) => props.width}px;
`;

const Component = ({ children, media, width, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper className={media} width={width}>
        {children}
      </Wrapper>
    </ThemeProvider>
  );
};

export default Component;
