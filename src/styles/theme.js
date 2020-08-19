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
    darkGradient: `linear-gradient(208deg, ${colors.darkPrimary} 0%, ${colors.darkerPrimary} 100%)`,
    reverseDarkGradient: `linear-gradient(-161deg, ${colors.darkPrimary} 0%, ${colors.darkerPrimary} 100%)`,
  };
};

const boxShadows = (colors) => {
  return {
    small: (color) => `-5px 5px 0px 0px ${colors[color] || color}`,
    large: (color) => `-15px 15px 0px 0px ${colors[color] || color}`,
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

export const getTheme = (userColors) => {
  const colors = { ...universalColors, ...userColors };
  return {
    breakpoints,
    boxShadows: boxShadows(colors),
    colors: colors,
    fonts,
    gradients: gradients(colors),
    spacing,
  };
};
