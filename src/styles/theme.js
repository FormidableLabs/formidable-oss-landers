import { mobile, tablet, desktop } from "./index";

const universalColors = {
  white: "#FFFFFF",
  lighterNeutral: "#F0F0F0",
  lightNeutral: "#9A9A9A",
  neutral: "#717171",
  darkNeutral: "#3B3B3B",
  darkerNeutral: "#1F1F1F",
  black: "#000",
};

const gradients = (colors) => {
  return {
    lightGradient: `linear-gradient(208deg, ${colors.lighterPrimary} 0%, ${colors.lightPrimary} 100%)`,
    reverseLightGradient: `linear-gradient(-161deg, ${colors.lighterPrimary} 0%, ${colors.lightPrimary} 100%)`,
    darkGradient: `linear-gradient(208deg, ${colors.darkPrimary} 0%, ${colors.darkerPrimary} 100%)`,
    reverseDarkGradient: `linear-gradient(-161deg, ${colors.darkPrimary} 0%, ${colors.darkerPrimary} 100%)`,
  };
};

const boxShadows = (colors) => {
  return {
    small: (color) => `-5px 5px 0px 0px ${colors[color] || color}`,
    large: (color) => `-15px 15px 0px 0px ${colors[color] || color}`,
    header: "0px 2px 7px 0px rgba(0, 0, 0, 0.14)",
  };
};

const fonts = {
  text: `"Helvetica Neue", "Helvetica", sans-serif`,
  title: `"Helvetica Neue", "Helvetica", sans-serif`,
};

const BASE_UNIT = 8;

const spacing = (multiplier) => `${parseInt(multiplier, 10) * BASE_UNIT}px`;

const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1200,
};

const layout = {
  maxWidth: "80rem",
  headerHeight: "3.6rem",
  footerHeight: "18.6rem",
  sidebarWidth: "15rem",
};

export const createTheme = (options = {}) => {
  const { colors = {}, ...rest } = options;
  const allColors = { ...universalColors, ...colors };
  return {
    breakpoints,
    boxShadows: boxShadows(allColors),
    colors: allColors,
    fonts,
    gradients: gradients(allColors),
    layout,
    media: {
      mobile,
      tablet,
      desktop,
    },
    spacing,
    type: "light",
    ...rest,
  };
};
