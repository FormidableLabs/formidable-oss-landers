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

export const theme = {
  breakpoints: {
    small: 0,
    medium: 414,
    large: 768,
    xlarge: 1024,
    xxlarge: 1440,
  },
  colors: { ...universalColors, ...colors },
  fonts,
  gradients,
  spacing,
};
