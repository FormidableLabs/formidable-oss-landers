/* Mixins for styled-components */
import { css } from "styled-components";

/* 
Media query template
Usage: ${largeViewport`border: 1px solid black;`}
*/
export function largeViewport(...args) {
  return css`
    @media (min-width: ${(props) => props.theme.breakpoints.large}px) {
      ${css(...args)};
    }
  `;
}
