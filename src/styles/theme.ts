import { createTheme } from '@mui/material/styles';

const darkGreenTheme = createTheme({
  palette: {
    primary: {
      main: '#2f4f4f', // dark desaturated green
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4a706e', // muted medium green
      contrastText: '#ffffff',
    },
    background: {
      default: '#f3f3f3', // light neutral background to make text stand out
      paper: '#ffffff',
    },
    text: {
      primary: '#000000', // black for main readability
      secondary: '#333333', // dark grey for secondary text
    },
    error: {
      main: '#e57373', // subtle desaturated red for errors
      contrastText: '#ffffff',
    },
    warning: {
      main: '#f5c26b', // muted amber for warnings
      contrastText: '#000000',
    },
    info: {
      main: '#6b9080', // muted teal
      contrastText: '#ffffff',
    },
    success: {
      main: '#89a889', // soft, desaturated green
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 800, // Thicker font weight for headers
      color: '#000000',
      letterSpacing: '0.05em',
    },
    body1: {
      color: '#000000', // Black for high contrast
      fontSize: '1rem',
      fontWeight: 500, // Slightly thicker for readability
    },
    body2: {
      color: '#333333', // Dark grey for secondary text
      fontSize: '0.875rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#000000',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
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
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
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
            ':hover': {
              boxShadow: '0px 0px 0px 8px rgba(79, 98, 98, 0.16)',
            },
          },
          '& .MuiSlider-track': {
            backgroundColor: '#4a706e',
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#cccccc', // Light grey for contrast with the track
          },
        },
      },
    },
  },
});

export default darkGreenTheme;
