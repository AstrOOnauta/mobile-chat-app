import {extendTheme} from 'native-base';

export const THEME = extendTheme({
  colors: {
    primary: {
      '-1': '#FBBE5A',
      0: '#FBB034',
      1: '#D49122',
    },
    secondary: {
      '-1': '#0A0A0A',
      0: '#303030',
      1: '#575757',
    },
    light: {
      '-1': '#FFFFFF',
      0: '#F3F3F3',
      1: '#CCCCCC',
    },
    success: '#82D46E',
    danger: '#FF5B5B',
    warning: '#FFF96A',
    info: '#138EFF',
    disabled: '#B9B9B9',
  },
});
