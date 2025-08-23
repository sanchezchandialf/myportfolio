import type { ThemeOptions } from '@mui/material/styles';

export const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#1976d2' },
          secondary: { main: '#ff4081' },
          background: {
            default: '#f0f2f5',
            paper: '#e3e7ec',
          },
          text: {
            primary: '#1e1e1e',
          },
        }
      : {
          primary: { main: '#90caf9' },
          secondary: { main: '#f48fb1' },
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
          text: {
            primary: '#ffffff',
          },
        }),
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(','),
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.6 },
    body2: { lineHeight: 1.6 },
  },
});
