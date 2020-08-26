import { css, createGlobalStyle } from "styled-components";

const normalize = css`
  * {
    box-sizing: inherit;
  }

  html,
  body {
    box-sizing: border-box;
    font-size: 100%;
  }

  button {
    padding: 0;
    border: 0;
    border-radius: 0;

    background: transparent;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  ol,
  ul {
    list-style: none;
  }

  a,
  a:link {
    text-decoration: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol {
    margin: 0;
    padding: 0;
    font-weight: inherit;
  }

  svg,
  img {
    width: 100%;
    height: auto;
  }
`;

export default createGlobalStyle`
  ${normalize};

  html, body {
    font-family: "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 15px;
    line-height: ${24 / 15};
  }
`;
