// App.tsx
import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Card,
  Container,
  Paper,
  ThemeProvider,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  HashRouter,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './utils/ScrollToTop';
import pastelTheme, { darkTheme } from './styles/theme';
import { guid } from './utils/guid';
import JsonBinApi from './utils/jsonBin';
import HistoryMeta from './utils/historyMeta';

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
import History from './pages/History';
import TypeComparator from './components/TypeComparator';
import Scheduler from './pages/Scheduler';
import TermsOfService from './pages/Terms';
import PremiumModal from './components/PremiumModal';
import ChatTRPI from './components/ChatTRPI';
import Certification from './components/Certification';
import AdminOverview from './pages/AdminOverview';
import { trackEvent, AnalyticsEvents } from './utils/analytics';

/* ───── Live-chat modal (NEW) ───── */
import ChatContent from './components/LiveChat';   // logic-heavy chat body
import ChatModal, { ChatProvider } from './components/LiveChatModal';
import NotFoundPage from './pages/NotFound';
import Connor from './components/Connor';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleAuthButton from './components/GoogleAuth';
import { isAnyInflated, trainResidualModels } from './utils/model';
import { isWithinBounds } from './utils/mbtiMapping';

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
  const loaded = useRef(false)
  /* ── state ── */
  const [binId, setBinId] = useState<string>(
    localStorage.getItem('binId') ?? ''
  );
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(
    (localStorage.getItem('preferredTheme') as 'light' | 'dark') || 'light'
  );
  const [referrer, setReferrer] = useState<string>('');
  const [users, setUsers] = useState<any>({});
  const [model, setModel] = useState<any>({});
  const userId = guid();
  const email = sessionStorage.getItem("email");

  const toggleTheme = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newMode);
    localStorage.setItem('preferredTheme', newMode);
  };
/* 
  useEffect(() => {
    const model = async ( ) => {
      const users = await (await fetch('./bins-minimized.json')).json()
      const model = trainResidualModels(users);
    
      setUsers(users)
      setModel(model)
    }

    if(loaded.current && Object.keys(users).length) return;
    model()
    loaded.current = true;
  }, [loaded]) */
  /* ── side-effects ── */
  useEffect(() => {
    setReferrer(document.referrer || 'Direct Visit');
  }, []);
    type Trait = "openness" | "conscientiousness" | "extraversion" | "agreeableness" | "neuroticism";
type Responses = Record<Trait, number[]>;
  // Returns true if the pattern is suspiciously idealized/fake-good
  const checkValidity = (responses: Responses): boolean => {
    // Traits to check for "faking good"
    const mainTraits: Trait[] = ["openness", "conscientiousness", "extraversion", "agreeableness"];
    
    // Calculate mean for each main trait
    const traitMeans = mainTraits.map(trait => {
      const vals = responses[trait]?.filter((v: any) => typeof v === "number") || [];
      return vals.length
        ? vals.reduce((sum: any, v: any) => sum + v, 0) / vals.length
        : 0;
    });
  
    // Count how many main traits are very high (mean > 0.85)
    const highTraitCount = traitMeans.filter(mean => mean > 0.80).length;
  
    // Check if all values in all main traits are above 0.9 (extreme faking)
    const allHigh = mainTraits.every(trait =>
      (responses[trait] || []).every((v: any) => v > 0.9)
    );
  
    // Neuroticism should be unusually low if faking good
    const neuroVals = responses.neuroticism?.filter(isFinite);
    const neuroticismLow = neuroVals.length > 0 && neuroVals.every((v: any) => v < 0.3);
  
    // Flag: 4+ high traits + low neuroticism OR all values are extremely high
    if ((highTraitCount >= 4 && neuroticismLow) || allHigh) {
      return false; // suspicious
    }
  
    return true; // pattern plausible
  }

  /* ── results save handler ── */
  const handleComplete = async (responses: any) => {
    const users = await (await fetch('./bins-minimized.json')).json()
      const model = trainResidualModels(users);
    localStorage.setItem(guid(), JSON.stringify(responses));
    const zmodel =isAnyInflated({id: guid(), responses: responses.responses}, model)
    const validity = checkValidity(responses.responses);
    const mahalanobis = isWithinBounds({userId: guid(), responses: responses.responses}, users)
     const honest =  Object.values(zmodel).every(t => !t)  &&  responses.honesty && validity && mahalanobis

    const newBinId = await JsonBinApi.saveResultsToJsonBin({
      referrer,
      honest: honest,
      withinBounds: mahalanobis,
      validity,
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
      zmodel,
      accuracy: responses.accuracy ?? 0,
      description: responses.description ?? '',
      diagnostics: responses.diagnostics,
      responses: responses.responses ?? [],
      list: responses.list ?? {},
      statements: responses.statements ?? [],
      collectionId: responses.collectionId
    });

    // Also update the user's history bin
    try {
      await HistoryMeta.addResult(userId, newBinId);
    } catch (e) {
      console.warn('Failed to update history bin', e);
    }

    setBinId(newBinId);
    localStorage.setItem('binId', newBinId);
    trackEvent(AnalyticsEvents.ResultsSaved, {
      event_category: 'Results',
      binId: newBinId,
    });
    return newBinId;
  };

  /* ── build header menu ── */
   const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isMobile = isMd || isSm || isXs;
  const menuItems: any[] = [];

  if (binId) {
    menuItems.push({ label: 'Results', path: `/result/${binId}` });
  }

    
  
   const handleSuccess = async (tokenResponse: { access_token: string }) => {
    try {
      const resp = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      });
      if (!resp.ok) throw new Error("Failed to fetch user info");
      const userInfo = await resp.json();
      // Store the Google User ID (sub) as your unique, unchanging identifier
      sessionStorage.setItem("guid", userInfo.sub);
      // Optionally, also store email for display/communication
      sessionStorage.setItem("email", userInfo.email || "");
      window.location.href = '/';
    } catch (error) {
      console.error("Google login error:", error);
      // Optionally handle error UI here
    }
  };
  const GOOGLE_CLIENT_ID = '356497060674-ndjka8l1iod2obja36djpah0fckmaot9.apps.googleusercontent.com';


  menuItems.push(
    { label: 'Take the test', path: '/test' },
    { label: 'About', path: '/about' },
    {label: 'ChatTRPI', path: '/oracle'},
    { label: 'Tests' },
    { label: 'Short Format', path: '/test', parent: 'Tests' },
    { label: 'Long Format', path: '/assessment', parent: 'Tests' },
    { label: 'ChatGPT', path: '/talk', parent: 'Tests' },
    { label: 'Tools' },
    { label: 'Big Five Input', path: '/input', parent: 'Tools' },
    { label: 'Type Comparator', path: '/compare', parent: 'Tools' },
    { label: 'Certification', path: '/certification', parent: 'Tools' },
    { label: 'Resources' },
    { label: 'Sources', path: '/sources', parent: 'Resources' },
    { label: 'Reviews', path: '/reviews', parent: 'Resources' },
    { label: 'Contact', path: '/contact', parent: 'Resources' },
    { label: 'History', path: '/history', parent: 'Resources' },
    { label: 'Appointments', path: '/scheduler', parent: 'Resources'},

    { label: 'Live Chat', modalComponent: <ChatModal open={false} onClose={() => {}} />, parent: 'Resources' },

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
    },
    { label: 'Login', nagivate: '/', component: (
      !email && (

    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <GoogleAuthButton size={isMobile ? "large": "small"} onSuccess={handleSuccess} onError={console.error} />
    </GoogleOAuthProvider>


)
    ) },

  );

  /* ── render ── */
  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : pastelTheme}>
      <AppHelmet />
      <ChatProvider> {/* keep one chat modal mounted globally */}
        <HashRouter>
          <ScrollToTop />

          {/* Header with dynamic menu */}
          <Header
            brand="Trait Indicator"
            logo="./logo192.png"
            menuItems={menuItems}
            onToggleTheme={toggleTheme}
            isDarkMode={themeMode === 'dark'}
          />

          {/* Main content wrapper */}
          <Box
          sx={{
  position: 'relative',
  minHeight: '100vh',
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
    animation: 'verticalScroll 60s linear infinite',
    // Inline keyframes for MUI's sx:
    '@keyframes verticalScroll': {
      '0%':   { backgroundPosition: '0 0' },
      '100%': { backgroundPosition: '0 100vh' },
    },
  },
  // Ensure all direct children are above the background
  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
}}

          >
            <Routes>
              <Route path="/" element={userId === '8ce3c907-b5b3-7db4-b087-4bbcb93a800e' ? <Connor userId={userId}/> : <Homepage/>} />
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
              <Route path="/history" element={<History />} />
              <Route path="/history/:userId" element={<History />} />
              <Route path="/:company/:departement/assessment" element={<LongBigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/:company/assessment" element={<LongBigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/assessment" element={<LongBigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/:company/:departement/assessment/:binId" element={<LongBigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/:company/assessment/:binId" element={<LongBigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/assessment" element={<LongBigFiveQuestionnaire onComplete={handleComplete} />}/>
              <Route path="/certification" element={<Certification userId={guid()} />} />
              <Route path="/certification/:binId" element={<Certification userId={guid()} />} />
              <Route path="/certifications/:binId" element={<Connor userId={guid()} />} />
              <Route path="/oracle" element={<ChatTRPI apiPath="https://chattrpi-production.up.railway.app/api/trpi-chat" userId={guid()} />}/>
              <Route path="/admin" element={<AdminOverview />} />
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>

            <Box sx={{mb: 30}}/>
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
