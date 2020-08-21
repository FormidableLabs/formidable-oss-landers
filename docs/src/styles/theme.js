import { getTheme } from 'formidable-oss-landers';

const colors = {
  lighterPrimary: '#F8F7FE',
  lightPrimary: '#D6CFF9',
  primary: '#7860ED',
  darkPrimary: '#5443A6',
  darkerPrimary: '#30265F',

  lightComplement: '#7A7441',
  darkComplement: '#595112',
};

export const theme = getTheme(colors);
