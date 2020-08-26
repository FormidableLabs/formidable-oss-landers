/* Mixins for styled-components */
import { css } from "styled-components";

/* 
Media query template
Usage: ${mobileOnly`border: 1px solid black;`}
*/
export function mobileOnly(...args) {
  return css`
    @media (min-width: ${(props) =>
        props.theme.breakpoints.mobile}px) and (max-width: ${(props) =>
        props.theme.breakpoints.tablet - 1}px) {
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

/*
Set default responsive box-shadow using theme colors
Usage: ${boxShadow("darkNeutral")};
*/
export function boxShadow(color) {
  return css`
    box-shadow: ${(props) => props.theme.boxShadows.small(color)};
    ${desktop`
      box-shadow: ${(props) => props.theme.boxShadows.large(color)}; 
    `};
  `;
}

/*
Set color by theme
Usage: ${color("darkNeutral")};
*/
export function color(name) {
  return css`
    ${(props) => {
      if (name) {
        if (props.theme.colors[name]) {
          return `color: ${props.theme.colors[name]};`;
        } else {
          /* eslint-disable-next-line no-console */
          console.warn(
            `Could not find '${name}' in available list of theme colors: `,
            Object.keys(props.theme.colors)
          );
        }
      }
    }}
  `;
}

/*
TODO: Revisit this.
Since the <Link> component will be set by config, then the anchor tags need to be styled since that component cannot be styled directly. 
Usage: ${linkStyles({ color: "white "})} 
*/
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
          color: ${(props) => props.theme.colors.lightPrimary};
        }

        a:active {
          color: ${(props) => props.theme.colors.lighterPrimary};
        }
      `;
    default:
    case "default":
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
