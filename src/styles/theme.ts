import { createTheme } from '@mui/material/styles';

const softRetroTheme = createTheme({
  palette: {
    primary: {
      main: '#4a706e', // sage green
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
          color: '#4a706e',
          '& .MuiSlider-thumb': {
            backgroundColor: '#4a706e',
            border: '2px solid #2f4f4f',
            width: 14,
            height: 14,
            ':hover': {
              boxShadow: '0px 0px 0px 8px rgba(168, 199, 161, 0.2)',
            },
          },
          '& .MuiSlider-track': {
            backgroundColor: '#4a706e',
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#4a706e',
          },
        },
      },
    },
  },
});

export default softRetroTheme;
