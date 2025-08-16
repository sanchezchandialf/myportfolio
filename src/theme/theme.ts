import type { ThemeOptions } from '@mui/material/styles';

export const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#F50057',
    },
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(','),
  },
});
