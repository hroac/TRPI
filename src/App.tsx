// src/App.tsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BigFiveQuestionnaire from './components/BigFiveQuestionnaire';
import ResultPage from './components/ResultPage';
import TRPIExplanationPage from './components/TRPIExplanationPage';
import { matchMBTIType } from './utils/mbtiMapping';
import { determinePrimary4FType } from './utils/scoring';

import { Button, Box, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Deep blue
    },
    secondary: {
      main: '#ff4081', // Pink accent
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h4: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '1.1rem',
    },
  },
});

function App() {
  const [mbtiType, setMbtiType] = useState<string>('');

  const handleComplete = (responses: any) => {
    console.log(responses)
    const primary4F = determinePrimary4FType(responses);
    const mbti = matchMBTIType(responses, primary4F);
    setMbtiType(mbti);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container maxWidth="md">
          <Box my={4}>
            <Box display="flex" justifyContent="space-around" mb={2}>
              <Button component={Link} to="/" variant="contained" color="primary">
                Start Test
              </Button>
              <Button component={Link} to="/trpi-explanation" variant="contained" color="secondary">
                TRPI Explanation
              </Button>
              <Button component={Link} to="/result" variant="contained" color="primary">
                View Result
              </Button>
            </Box>

            <Routes>
              <Route path="/" element={<BigFiveQuestionnaire onComplete={handleComplete} />} />
              <Route path="/trpi-explanation" element={<TRPIExplanationPage />} />
              <Route path="/result" element={<ResultPage mbtiType={mbtiType} />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
