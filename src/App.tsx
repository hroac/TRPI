import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import { Box, Container, ThemeProvider, Typography } from '@mui/material';
import pastelTheme from './styles/theme';
import JsonBinApi from './utils/saveResults';
import BigFiveQuestionnaire from './components/BigFiveQuestionnaire';
import ResultsPage from './pages/Result';
import BigFiveInputPage from './components/BigFiveInputPage';
import AboutPage from './pages/About';
import TRPIExplanation from './components/TRPIExplanation';
import Homepage from './components/HomePage';
import Footer from './components/Footer';
import Services from './components/Services';
import PrivacyPolicy from './components/PrivacyPolicy';
import ScrollToTop from './utils/ScrollToTop';
import { guid } from './utils/guid';
import GhPagesFS from './utils/GhPagesFS';
import TrpiTalk from './components/TRPITalk';
import { HelmetProvider } from 'react-helmet-async';

function App() {
    console.log(process.env)
    // Load saved results and userId from local storage on app initialization
    const [binId, setBinId] = useState<string>(localStorage.getItem('binId')?.toString() || '')
   const userId = guid();
    const handleComplete = async (responses: any) => {
        console.log(responses);

        // Save results to JSONBin and retrieve the bin ID
         const binId = await JsonBinApi.saveResultsToJsonBin({
            type: responses.mbtiType,
            primary4FType: responses.primary4F,
            bigFiveResponses: responses.profile,
            description: responses.description || '',
            allResponses: responses.responses || [],
        });
        setBinId(binId);
        localStorage.setItem('binId', binId); // Store the bin ID under 'userId'
        console.log("Saved bin ID to local storage:", binId);
    return binId;

    };

    return (
        <ThemeProvider theme={pastelTheme}>
            <HelmetProvider>
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
                            { label: 'Result', path: `/result/${binId || ''}` },
                            { label: 'Big Five Input', path: '/input' },
                            //{label:  'ChatGPT', path: '/talk'},
                            { label: 'Contact', path: '/contact' }
                        ].filter(item => {

                            if(item.label === 'Result' && !binId) {
                                return false
                            }
                            return true
                        })}
                    />

                    <Box sx={{ marginTop: '64px', background: 'linear-gradient(0deg, rgb(247, 248, 252), rgb(217 236 236))', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                        <Routes>
                            <Route path='/' element={<Homepage />} />
                            <Route path="/test" element={<BigFiveQuestionnaire onComplete={handleComplete} />} />
                            <Route path="/result/:binId" element={<ResultsPage binId={binId}/>} />"
                            <Route path="/input" element={<BigFiveInputPage onComplete={handleComplete} />} />
                            <Route path="/about/:type" element={<AboutPage />} />
                            <Route path="/about" element={<TRPIExplanation />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                            <Route path="/talk" element={<TrpiTalk onComplete={handleComplete}/>} />
                        </Routes>
                        <Footer />
                    </Box>
                </HashRouter>
            </HelmetProvider>
        </ThemeProvider>
    );
}

export default App;
