import { createTheme } from '@mui/material/styles';

const softRetroTheme = createTheme({
  palette: {
    primary: {
      main: '#527e79', // sage green
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#fa695e', // soft coral
      contrastText: '#ffffff',
    },
    background: {
      default: '#fdfdfd', // soft cream
      paper: '#ffffff',
    },
    text: {
      primary: '#1e1e1e',
      secondary: '#4f4f4f',
    },
    error: {
      main: '#e57373',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#fbc96d',
      contrastText: '#1e1e1e',
    },
    info: {
      main: '#c0e5e3',
      contrastText: '#1e1e1e',
    },
    success: {
      main: '#b2d8b2',
      contrastText: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
    h4: {
      fontWeight: 700,
      color: '#1e1e1e',
      letterSpacing: '0.03em',
    },
    body1: {
      color: '#1e1e1e',
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      color: '#4f4f4f',
      fontSize: '0.9rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#1e1e1e',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
          borderRadius: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 8,
          padding: '10px 20px',
          //backgroundColor: '#ff847c',
          color: '#ffffff',
          ':hover': {
            //backgroundColor: '#e8746c',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#527e79',
          '& .MuiSlider-thumb': {
            backgroundColor: '#527e79',
            border: '2px solid #2f4f4f',
            width: 14,
            height: 14,
            ':hover': {
              boxShadow: '0px 0px 0px 8px rgba(168, 199, 161, 0.2)',
            },
          },
          '& .MuiSlider-track': {
            backgroundColor: '#527e79',
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#527e79',
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#2f4f4f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#527e79',
      contrastText: '#ffffff',
    },
    background: {
      default: '#4b5c56',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
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
          backgroundColor: '#527e79',
          ':hover': {
            backgroundColor: '#5c827a',
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#527e79',
          '& .MuiSlider-thumb': {
            backgroundColor: '#2f4f4f',
            width: 12,
            height: 12,
          },
          '& .MuiSlider-track': {
            backgroundColor: '#527e79',
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#333333',
          },
        },
      },
    },
  },
});

export default softRetroTheme;
