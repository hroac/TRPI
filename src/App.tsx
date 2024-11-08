import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import { Box, Container, ThemeProvider, Typography } from '@mui/material';
import pastelTheme from './styles/theme';
import { saveResultsToJsonBin } from './utils/saveResults';
import BigFiveQuestionnaire from './components/BigFiveQuestionnaire';
import ResultsPage from './pages/Result';
import BigFiveInputPage from './components/BigFiveInputPage';
import AboutPage from './pages/About';
import TRPIExplanationPage from './components/TRPIExplanationPage';
import TRPIExplanation from './components/TRPIExplanation';
import Homepage from './components/HomePage';
import Footer from './components/Footer';

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
    <ThemeProvider theme={pastelTheme}>
    <Router>
      {/* Header with routing-aware menu items */}
      <Header 
      logo='./logo192.png'
        brand="Trauma Indicator" 
        menuItems={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about'},
          { label: 'Take the test', path: '/test' },
          { label: 'Result', path: '/result'},
          { label: 'Big Five Input', path: '/input'},
          { label: 'Contact', path: '/contact' }
        ]}
      />
      
      <Box sx={{ marginTop: '64px' }}>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path="/test" element={<BigFiveQuestionnaire onComplete={handleComplete} />} />
            <Route path="/result" element={<ResultsPage mbtiType={mbtiType} primary4FType={fourFMode} bigFiveScores={profile} />} />
            <Route path="/input" element={<BigFiveInputPage />} />
            <Route path="/about/:type" element={<AboutPage />} />
            <Route path="/about" element={<TRPIExplanation/>}/>
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Footer/>
    </Router>
    
    </ThemeProvider>
  );
}

export default App;
