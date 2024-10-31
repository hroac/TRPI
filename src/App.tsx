
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BigFiveQuestionnaire from './components/BigFiveQuestionnaire';
import ResultPage from './components/ResultPage';
import TRPIExplanationPage from './components/TRPIExplanation';
import Header from './components/Header';
import AboutPage from './components/AboutPage';
import BigFiveInputPage from './components/BigFiveInputPage';

import { Button, Box, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { saveResultsToJsonBin } from './utils/saveResults';

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
        <Header mbtiType={mbtiType} /> {/* Header added with MBTI type display */}
        <Container maxWidth="md">
          <Box my={4}>
            <Box display="flex" justifyContent="space-around" mb={2}>
              <Button component={Link} to="/TRPI" variant="contained" color="primary">
                Start Test
              </Button>
              <Button component={Link} to="/trpi-explanation" variant="contained" color="secondary">
                TRPI Explanation
              </Button>
              <Button component={Link} to="/result" variant="contained" color="primary">
                View Result
              </Button>
              {/* New Links for additional pages */}
              <Button component={Link} to="/bigfiveinput" variant="contained" color="secondary">
                Enter Big Five Scores
              </Button>
            </Box>

            <Routes>
              <Route path="/TRPI" element={<BigFiveQuestionnaire onComplete={handleComplete} />} />
              <Route path="/trpi-explanation" element={<TRPIExplanationPage />} />
              <Route path="/result" element={<ResultPage mbtiType={mbtiType} primary4FType={fourFMode} bigFiveScores={profile} />} />
              {/* New Routes for additional pages */}
              <Route path="/bigfiveinput" element={<BigFiveInputPage />} />
              <Route path="/about/:type" element={<AboutPage />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
