/* Mixins for styled-components */
import { css } from "styled-components";

/* 
Media query template
Usage: ${mobile`border: 1px solid black;`}
*/
export function mobile(...args) {
  return css`
    @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
      ${css(...args)};
    }
  `;
}

/* 
Media query template
Usage: ${tablet`border: 1px solid black;`}
*/
export function tablet(...args) {
  return css`
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      ${css(...args)};
    }
  `;
}

/* 
Media query template
Usage: ${desktop`border: 1px solid black;`}
*/
export function desktop(...args) {
  return css`
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
      ${css(...args)};
    }
  `;
}

export function linkStyles({ color }) {
  switch (color) {
    case "white":
      return css`
        a,
        a:link {
          color: ${(props) => props.theme.colors.white};
        }

        a:hover,
        a:focus {
          color: ${(props) => props.theme.colors.lighterPrimary};
        }

        a:active {
          color: ${(props) => props.theme.colors.lightPrimary};
        }
      `;
    default:
      return css`
        a,
        a:link {
          color: ${(props) => props.theme.colors.darkerPrimary};
        }

        a:hover,
        a:focus {
          color: ${(props) => props.theme.colors.darkerNeutral};
        }

        a:active {
          color: ${(props) => props.theme.colors.darkPrimary};
        }
      `;
  }
}
