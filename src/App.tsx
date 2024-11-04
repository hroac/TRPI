
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BigFiveQuestionnaire from './components/BigFiveQuestionnaire';
import ResultPage from './components/ResultPage';
import TRPIExplanationPage from './components/TRPIExplanation';
import Header from './components/Header';
import AboutPage from './components/AboutPage';
import Matrix from './components/Matrix';
import BigFiveInputPage from './components/BigFiveInputPage';

import { Button, Box, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { saveResultsToJsonBin } from './utils/saveResults';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',  // Indigo
    },
    secondary: {
      main: '#b93838',  // Red accent
    },
    background: {
      default: '#f5f5f5',  // Light grey for background
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
  const [fourFMode, set4FMode] = useState<string>('');
  const [profile, setProfile] = useState<{ [trait: string]: number }>({});

  const handleComplete = (responses: any) => {
    console.log(responses)
    saveResultsToJsonBin({type: responses.mbtiType, primary4FType: responses.primary4F, bigFiveResponses: responses.profile})
    set4FMode(responses.primary4F)
    setMbtiType(responses.mbtiType);
    setProfile(responses.profile)
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header mbtiType={mbtiType} />
        <Container maxWidth="md">
          <Box my={4}>
            <Box display="flex" justifyContent="space-around" mb={2}>
              <Button component={Link} to="/TRPI" variant="contained" color="primary">
                Start Test
              </Button>
              <Button component={Link} to="/result" variant="contained" color="secondary">
                View Result
              </Button>
              <Button component={Link} to="/bigfiveinput" variant="contained" color="primary">
                Enter Big Five Scores
              </Button>
            </Box>
            <Routes>
              <Route path="/TRPI" element={<BigFiveQuestionnaire onComplete={handleComplete} />} />
              <Route path="/result" element={<ResultPage mbtiType={mbtiType} primary4FType={fourFMode} bigFiveScores={profile} />} />
              <Route path="/bigfiveinput" element={<BigFiveInputPage />} />
              <Route path="/about/:type" element={<AboutPage />} />
            </Routes>
          </Box>
          <TRPIExplanationPage />

        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
