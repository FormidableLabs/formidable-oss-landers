/* Mixins for styled-components */
import { css } from "styled-components";

/*
Set color by theme
Usage: ${color("darkNeutral")};
*/
export const color = (name) => css`
  ${(props) => {
    if (name) {
      if (props.theme.colors[name]) {
        return `color: ${props.theme.colors[name]};`;
      } else {
        console.warn(
          `Could not find '${name}' in available list of theme colors: `,
          Object.keys(props.theme.colors)
        );
      }
    }
  }}
`;
