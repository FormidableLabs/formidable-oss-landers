import config from "../example/config";
const { colors } = config;

const universalColors = {
  white: "#FFFFFF",
  lighterNeutral: "#F0F0F0",
  lightNeutral: "#9A9A9A",
  neutral: "#717171",
  darkNeutral: "#3B3B3B",
  darkerNeutral: "#1F1F1F",
};

const gradients = {
  darkGradient: `linear-gradient(208deg, ${colors.darkPrimary} 0%, ${colors.darkerPrimary} 100%)`,
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

export const theme = {
  breakpoints,
  colors: { ...universalColors, ...colors },
  fonts,
  gradients,
  spacing,
};
