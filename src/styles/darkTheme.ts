// src/styles/darkTheme.js
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#2f4f4f', // dark green for primary
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4a706e', // muted green
      contrastText: '#ffffff',
    },
    background: {
      default: '#4b5c56', // dark background
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff', // white text for readability
      secondary: '#b3b3b3', // light gray for secondary text
    },
    error: {
      main: '#e57373',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#9b6bf5',
      contrastText: '#000000',
    },
    info: {
      main: '#2e57e0',
      contrastText: '#ffffff',
    },
    success: {
      main: '#5cd15c',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 800,
      color: '#ffffff',
      letterSpacing: '0.05em',
    },
    body1: {
      color: '#ffffff',
      fontSize: '1rem',
      fontWeight: 500,
    },
    body2: {
      color: '#b3b3b3',
      fontSize: '0.875rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
          color: '#ffffff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: '#ffffff',
          borderRadius: 6,
          backgroundColor: '#4a706e',
          ':hover': {
            backgroundColor: '#5c827a',
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#4a706e',
          '& .MuiSlider-thumb': {
            backgroundColor: '#2f4f4f',
            width: 12,
            height: 12,
          },
          '& .MuiSlider-track': {
            backgroundColor: '#4a706e',
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#333333',
          },
        },
      },
    },
  },
});

export default darkTheme;
