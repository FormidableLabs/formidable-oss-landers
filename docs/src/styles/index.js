/* Mixins for styled-components */
import { css } from "styled-components";

/*
Set default responsive box-shadow using theme colors
Usage: ${boxShadow("darkNeutral")};
*/
export function boxShadow(color) {
  return css`
    box-shadow: ${(props) => props.theme.boxShadows.small(color)};
    ${(props) => props.theme.media.desktop`
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
