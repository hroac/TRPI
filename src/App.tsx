// App.tsx
import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  Container,
  Paper,
  ThemeProvider
} from '@mui/material';
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './utils/ScrollToTop';
import pastelTheme from './styles/theme';
import { guid } from './utils/guid';
import JsonBinApi from './utils/jsonBin';

/* ───── Pages & Components ───── */
import Homepage from './components/HomePage';
import BigFiveQuestionnaire from './components/BigFiveQuestionnaire';
import LongBigFiveQuestionnaire from './components/LongBigFiveQuestionaire';
import BigFiveInputPage from './components/BigFiveInputPage';
import ResultsPage from './pages/Result';
import AboutPage from './pages/About';
import TRPIExplanation from './components/TRPIExplanation';
import Contact from './pages/Contact';
import Services from './components/Services';
import PrivacyPolicy from './components/PrivacyPolicy';
import TrpiTalk from './components/TRPITalk';
import Sources from './pages/Sources';
import Reviews from './pages/Reviews';
import SlugResults from './pages/SlugResults';
import TypeComparator from './components/TypeComparator';
import Scheduler from './pages/Scheduler';
import TermsOfService from './pages/Terms';
import PremiumModal from './components/PremiumModal';
import ChatTRPI from './components/ChatTRPI';
import { trackEvent, AnalyticsEvents } from './utils/analytics';

/* ───── Live-chat modal (NEW) ───── */
import ChatContent from './components/LiveChat';   // logic-heavy chat body
import ChatModal, { ChatProvider } from './components/LiveChatModal';
import NotFoundPage from './pages/NotFound';

/* ───── Helmet meta ───── */
const AppHelmet: React.FC = () => (
  <Helmet>
    <title>Understanding Personality with TRPI</title>
    <meta name="title" content="Trait Indicator - Find your MBTI type based on the Big Five!" />
    <meta
      name="description"
      content="Explore the Trait Response Personality Indicator (TRPI) model, a unique approach that integrates Jung, the Big Five, and the 4F responses. Discover how past experiences shape personality and use this insight for personal growth and resilience."
    />

    <meta property="og:title" content="Understanding Personality with TRPI" />
    <meta
      property="og:description"
      content="Learn how trauma shapes personality with the TRPI framework. Integrating MBTI, Big Five traits, and 4F responses, TRPI provides unique insights into personality development. Visit traitindicator.com to explore."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://traitindicator.com/#/explanation" />
    <meta property="og:image" content="https://traitindicator.com/logo.png" />
  </Helmet>
);

/* ══════════════════════════════════════════════ */

export default function App() {
  /* ── state ── */
  const [binId, setBinId] = useState<string>(
    localStorage.getItem('binId') ?? ''
  );
  const [referrer, setReferrer] = useState<string>('');

  /* ── side-effects ── */
  useEffect(() => {
    setReferrer(document.referrer || 'Direct Visit');
  }, []);

  /* ── results save handler ── */
  const handleComplete = async (responses: any) => {
    localStorage.setItem(guid(), JSON.stringify(responses));

    const newBinId = await JsonBinApi.saveResultsToJsonBin({
      referrer,
      prev: responses.prev,
       name: responses.name,
       email: responses.email,
      company: responses.company,
      departement: responses.departement,
      jobTitle: responses.jobTitle,
      jobDescription: responses.jobDescription,
      type: responses.mbtiType,
      primary4FType: responses.primary4F,
      bigFiveResponses: responses.profile,
      accuracy: responses.accuracy ?? 0,
      description: responses.description ?? '',
      responses: responses.responses ?? [],
      list: responses.list ?? {},
      statements: responses.statements ?? [],
      collectionId: responses.collectionId 
    });

    setBinId(newBinId);
    localStorage.setItem('binId', newBinId);
    trackEvent(AnalyticsEvents.ResultsSaved, {
      event_category: 'Results',
      binId: newBinId,
    });
    return newBinId;
  };

  /* ── build header menu ── */
  const menuItems: any[] = [];

  if (binId) {
    menuItems.push({ label: 'Results', path: `/result/${binId}` });
  }

  menuItems.push(
    { label: 'Take the test', path: '/test' },
    { label: 'About', path: '/about' },
    {label: 'ChatTRPI', path: '/oracle'},
    { label: 'Live Chat', modalComponent: <ChatModal open={false} onClose={() => {}} /> },
    { label: 'Appointment', path: '/scheduler'},
    { label: 'Tests' },
    { label: 'Short Format', path: '/test', parent: 'Tests' },
    { label: 'Long Format', path: '/assessment', parent: 'Tests' },
    { label: 'ChatGPT', path: '/talk', parent: 'Tests' },
    { label: 'Tools' },
    { label: 'Big Five Input', path: '/input', parent: 'Tools' },
    { label: 'Type Comparator', path: '/compare', parent: 'Tools' },
    { label: 'Other' },
    { label: 'Sources', path: '/sources', parent: 'Other' },
    { label: 'Reviews', path: '/reviews', parent: 'Other' },
    { label: 'Contact', path: '/contact', parent: 'Other' },
    {
      label: 'Donate',
      modalComponent: (
        <PremiumModal
          open={false}
          title="Donate to a Vision!"
          description="Help us reach a bigger audience"
          price={0.99}
          onClose={() => {}}
          allowAmountOverride
          handlePaymentSuccess={() => {}}
        />
      ),
    }
  );

  /* ── render ── */
  return (
    <ThemeProvider theme={pastelTheme}>
      <AppHelmet />
      <ChatProvider> {/* keep one chat modal mounted globally */}
        <HashRouter>
          <ScrollToTop />

          {/* Header with dynamic menu */}
          <Header brand="Trait Indicator" logo="./logo192.png" menuItems={menuItems} />

          {/* Main content wrapper */}
          <Box
          sx={{
    position: 'relative',
    minHeight: '100vh',  // Optional, for full-page background
    overflow: 'hidden',
    // The background image pseudo-element:
    '&::before': {
      content: '""',
      position: 'absolute',
      zIndex: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      background: 'url("/background.png") repeat',
      opacity: 0.3,
      filter: 'blur(8px)',
      pointerEvents: 'none',
    },
    // Ensure all direct children are above the background
    '& > *': {
      position: 'relative',
      zIndex: 1,
    },
  }}
          >
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/:company/:departement/test" element={<BigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/:company/test" element={<BigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/test" element={<BigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/:company/:departement/test/:binId" element={<BigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/:company/test/:binId" element={<BigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/test/:binId" element={<BigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/result/:binId" element={<ResultsPage binId={binId} />} />
              <Route path="/:company/results" element={<SlugResults />} />
              <Route path="/:company/:departement/results" element={<SlugResults />} />
              <Route path="/input" element={<BigFiveInputPage onComplete={handleComplete} />} />
              <Route path="/about/:type" element={<AboutPage />} />
              <Route path="/about" element={<TRPIExplanation />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/talk" element={<TrpiTalk onComplete={handleComplete} />} />
              <Route path="/sources" element={<Sources />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/compare/:r1/:r2" element={<TypeComparator />} />
              <Route path="/compare" element={<TypeComparator />} />
              <Route path="/scheduler" element={<Scheduler />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/:company/:departement/assessment" element={<LongBigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/:company/assessment" element={<LongBigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/assessment" element={<LongBigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/:company/:departement/assessment/:binId" element={<LongBigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/:company/assessment/:binId" element={<LongBigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/assessment" element={<LongBigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/oracle" element={<ChatTRPI apiPath="https://chattrpi-production.up.railway.app/api/trpi-chat" userId={guid()} />}/>
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>

            {/* Footer pinned near bottom */}
            <Box position="relative" top={225}>
              <Footer />
            </Box>
          </Box>
        </HashRouter>
      </ChatProvider>
    </ThemeProvider>
  );
}
