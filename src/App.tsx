import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

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
import Services from './components/Services';
import PrivacyPolicy from './components/PrivacyPolicy';
import ScrollToTop from './utils/ScrollToTop';

function App() {
    const [mbtiType, setMbtiType] = useState<string>('');
    const [fourFMode, set4FMode] = useState<string>('');
    const [profile, setProfile] = useState<{ [trait: string]: number }>({});

    // Load saved results from local storage on app initialization
    useEffect(() => {
        const savedResults = JSON.parse(localStorage.getItem("savedResults") || "{}");

        if (savedResults && savedResults.type && savedResults.primary4FType && savedResults.bigFiveResponses) {
            setMbtiType(savedResults.type);
            set4FMode(savedResults.primary4FType);
            setProfile(savedResults.bigFiveResponses);
            console.log("Loaded saved results from local storage:", savedResults);
        }
    }, []);

    const handleComplete = (responses: any) => {
        console.log(responses);
        saveResultsToJsonBin({
            type: responses.mbtiType,
            primary4FType: responses.primary4F,
            bigFiveResponses: responses.profile,
        });

        // Set state for 4F mode, MBTI type, and profile
        set4FMode(responses.primary4F);
        setMbtiType(responses.mbtiType);
        setProfile(responses.profile);

        // Save results locally in the browser's local storage
        const localResults = {
            type: responses.mbtiType,
            primary4FType: responses.primary4F,
            bigFiveResponses: responses.profile,
        };

        localStorage.setItem("savedResults", JSON.stringify(localResults));
    };

    return (
        <ThemeProvider theme={pastelTheme}>
            <HashRouter>
                <ScrollToTop/>
                {/* Header with routing-aware menu items */}
                <Header
                    logo='./logo192.png'
                    brand="Trauma Indicator"
                    menuItems={[
                        { label: 'Home', path: '/' },
                        { label: 'About', path: '/about' },
                        { label: 'Take the test', path: '/test' },
                        { label: 'Result', path: '/result' },
                        { label: 'Big Five Input', path: '/input' },
                        { label: 'Contact', path: '/contact' }
                    ]}
                />

                <Box sx={{ marginTop: '64px', background: 'linear-gradient(0deg, rgb(247, 248, 252), rgb(217 236 236))',}}>
                    <Routes>
                        <Route path='/' element={<Homepage />} />
                        <Route path="/test" element={<BigFiveQuestionnaire onComplete={handleComplete} />} />
                        <Route path="/result" element={<ResultsPage mbtiType={mbtiType} primary4FType={fourFMode} bigFiveScores={profile} />} />
                        <Route path="/input" element={<BigFiveInputPage onComplete={handleComplete} />} />
                        <Route path="/about/:type" element={<AboutPage />} />
                        <Route path="/about" element={<TRPIExplanation />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    </Routes>
                </Box>
            </HashRouter>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
