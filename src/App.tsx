import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import { Box, Container, ThemeProvider, Typography } from '@mui/material';
import pastelTheme from './styles/theme';
import JsonBinApi from './utils/jsonBin';
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
import { Helmet } from 'react-helmet';
import PdfViewer from './components/PdfViewer';
import Sources from './pages/Sources';
import path from 'path';
import Reviews from './pages/Reviews';
import TypeComparator from './components/TypeComparator';
import Scheduler from './pages/Scheduler';
import TermsOfService from './pages/Terms';
import LongBigFiveQuestionnaire from './components/LongBigFiveQuestionaire';

const AppHelmet: React.FC = () => (
  <Helmet>
    <title>Understanding Personality with TRPI</title>
    <meta name="title" content="Trauma Indicator - Find your MBTI type based on the Big Five!"/>
    <meta name="description" content="Explore the Trauma Response Personality Indicator (TRPI) model, a unique approach that integrates MBTI, the Big Five, and the 4F responses. Discover how past experiences shape personality and use this insight for personal growth and resilience."/>
    
    <meta
      property="og:title"
      content="Understanding Personality with TRPI"
    />
    <meta
      property="og:description"
      content="Learn how trauma shapes personality with the TRPI framework. Integrating MBTI, Big Five traits, and 4F responses, TRPI provides unique insights into personality development. Visit TraumaIndicator.com to explore."
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://traumaindicator.com/#/explanation"
    />
    <meta
      property="og:image"
      content="https://traumaindicator.com/logo.png"
    />
  </Helmet>
);

function App() {
    // Load saved results and userId from local storage on app initialization
    const [binId, setBinId] = useState<string>(localStorage.getItem('binId')?.toString() || '')
   const userId = guid();
   const [referrer, setReferrer] = useState<string>("");

  useEffect(() => {
    setReferrer(document.referrer || "Direct Visit");
  }, []);

    const handleComplete = async (responses: any) => {
        console.log(responses);

        localStorage.setItem(guid(), JSON.stringify(responses));
        // Save results to JSONBin and retrieve the bin ID
         const binId = await JsonBinApi.saveResultsToJsonBin({
            referrer,
            type: responses.mbtiType,
            primary4FType: responses.primary4F,
            bigFiveResponses: responses.profile,
            accuracy: responses.accuracy || 0,
            description: responses.description || '',
            responses: responses.responses || [],
            list: responses.list || {},
            statements: responses.statements || [],

        });
        setBinId(binId);
        localStorage.setItem('binId', binId); // Store the bin ID under 'userId'
        console.log("Saved bin ID to local storage:", binId);
    return binId;

    };

    return (
        <ThemeProvider theme={pastelTheme}>
                <AppHelmet/>
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
                           {
                             label: 'Long Format', path: '/assessment'
                           },
                            { label: 'Result', path: `/result/${binId || ''}` },
                            { label: 'Big Five Input', path: '/input' },
                            { label: 'Type Comparator', path: '/compare' },
                            {label:  'ChatGPT', path: '/talk'},
                            {label:  'Sources', path: '/sources'},
                            { label: 'Reviews', path: '/reviews'},
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
                            <Route path='/sources' element={<Sources/>} />
                            <Route path='/reviews' element={<Reviews/>} />
                            <Route path='/check/:r1/:r2'  element={<TypeComparator/>} />
                            <Route path='/compare'  element={<TypeComparator/>} />
                            <Route path='/scheduler' element={<Scheduler/>} />
                            <Route path='/terms' element={<TermsOfService/>} />
                            <Route path='/assessment' element={<LongBigFiveQuestionnaire onComplete={handleComplete}/>} />
                        </Routes>
                        <Box position={'relative'} top={225}>
                        <Footer />
                        </Box>
                    </Box>
                </HashRouter>
        </ThemeProvider>
    );
}

export default App;
