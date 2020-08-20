import { getTheme } from "formidable-oss-landers";
import { css } from "styled-components";

// Using classnames instead of media queries allows the docs to showcase different sizes of each component.
const overrides = {
  media: {
    mobile: function(...args) {
      return css`
        .mobile & {
          ${css(...args)};
        }
      `;
    },
    tablet: function(...args) {
      return css`
        .tablet & {
          ${css(...args)};
        }
      `;
    },
    desktop: function(...args) {
      return css`
        .desktop & {
          ${css(...args)};
        }
      `;
    },
  },
};

export const purple = getTheme(
  {
    lighterPrimary: "#F8F7FE",
    lightPrimary: "#D6CFF9",
    primary: "#7860ED",
    darkPrimary: "#5443A6",
    darkerPrimary: "#30265F",

    lightComplement: "#7A7441",
    darkComplement: "#595112",
  },
  overrides
);

export const blue = getTheme(
  {
    lighterPrimary: "rgb(240, 247, 251)",
    lightPrimary: "rgb(188, 198, 250)",
    primary: "rgb(129, 150, 255)",
    darkPrimary: "rgb(86, 106, 200)",
    darkerPrimary: "rgb(13, 17, 41)",

    lightComplement: "#AD9A5F",
    darkComplement: "#7A631C",
  },
  overrides
);

export const themes = {
  default: purple,
  blue,
  purple,
};
