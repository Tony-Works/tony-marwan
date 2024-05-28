import { createTheme } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  typography: {
    fontFamily: '"Nunito Sans", sans-serif',
    fontSize: 16,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '0 24px',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '.MuiInput-root': { background: ' #110C20 !important' },
        },
      },
    },
  }
})
