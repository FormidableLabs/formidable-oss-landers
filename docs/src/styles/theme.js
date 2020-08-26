import { createTheme } from 'formidable-oss-landers';
import { css } from 'styled-components';

export const guideTheme = {
  colors: {
    white: '#EBEEFA',
    lighterNeutral: '#C0CAF0',
    lightNeutral: '#4D5C9A',
    neutral: '#394471',
    darkNeutral: '#000C3B',
    darkerNeutral: '#00061F',
    black: '#000517',
  },
  fonts: {
    heading: `'Rubik', sans-serif`,
    body: `'Rubik', sans-serif`,
    code: `'Roboto Mono', monospace`,
  },
};

// Using classnames instead of media queries allows the docs to showcase different sizes of each component.
const overrides = {
  media: {
    mobile: function (...args) {
      return css`
        .mobile & {
          ${css(...args)};
        }
      `;
    },
    tablet: function (...args) {
      return css`
        .tablet & {
          ${css(...args)};
        }
      `;
    },
    desktop: function (...args) {
      return css`
        .desktop & {
          ${css(...args)};
        }
      `;
    },
  },
};

export const themeConfig = {
  cornflower: createTheme({
    key: 'cornflower',
    label: 'Cornflower (Urql)',
    type: 'dark',
    colors: {
      lighterPrimary: '#F7F9FF',
      lightPrimary: '#CFDBFF',
      primary: '#5F8AFF',
      darkPrimary: '#4361B3',
      darkerPrimary: '#263766',

      lightComplement: '#857141',
      darkComplement: '#664E11',
    },
    ...overrides,
  }),
  lime: createTheme({
    key: 'lime',
    label: 'Lime',
    type: 'light',
    colors: {
      lighterPrimary: '#FDFEF6',
      lightPrimary: '#F3FBCD',
      primary: '#D8F459',
      darkPrimary: '#97AB3E',
      darkerPrimary: '#566224',

      lightComplement: '#673F7E',
      darkComplement: '#410F5E',
    },
    ...overrides,
  }),
  orchid: createTheme({
    key: 'orchid',
    label: 'Orchid',
    type: 'dark',
    colors: {
      lighterPrimary: '#FDF8FD',
      lightPrimary: '#F3D5F4',
      primary: '#DA76DD',
      darkPrimary: '#99539B',
      darkerPrimary: '#572F58',

      lightComplement: '#597249',
      darkComplement: '#2F4F1B',
    },
    ...overrides,
  }),
  poppy: createTheme({
    key: 'poppy',
    label: 'Poppy Red',
    type: 'dark',
    colors: {
      lighterPrimary: '#FFF6F6',
      lightPrimary: '#FFC9C9',
      primary: '#FF4D4D',
      darkPrimary: '#B33636',
      darkerPrimary: '#661F1F',

      lightComplement: '#3B8550',
      darkComplement: '#0A6624',
    },
    ...overrides,
  }),
  purple: createTheme({
    key: 'purple',
    label: 'Purple (Renature)',
    type: 'dark',
    colors: {
      lighterPrimary: '#F8F7FE',
      lightPrimary: '#D6CFF9',
      primary: '#7860ED',
      darkPrimary: '#5443A6',
      darkerPrimary: '#30265F',

      lightComplement: '#7A7441',
      darkComplement: '#595112',
    },
    ...overrides,
  }),
  red: createTheme({
    key: 'red',
    label: 'Red',
    type: 'dark',
    colors: {
      lighterPrimary: '#FEF6F6',
      lightPrimary: '#F8CACC',
      primary: '#EA5056',
      darkPrimary: '#A4383C',
      darkerPrimary: '#5E2022',

      lightComplement: '#3D794D',
      darkComplement: '#0C5720',
    },
    ...overrides,
  }),
  teal: createTheme({
    key: 'teal',
    label: 'Teal',
    type: 'light',
    colors: {
      lighterPrimary: '#F7FEFE',
      lightPrimary: '#CFF7F9',
      primary: '#62E7EC',
      darkPrimary: '#45A2A5',
      darkerPrimary: '#275C5E',

      lightComplement: '#7A5943',
      darkComplement: '#592F14',
    },
    ...overrides,
  }),
};

export const themes = {
  default: themeConfig.purple,
  ...themeConfig,
};
