// src/components/TypeCompatibilityChecker.tsx

import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Container,
  Button,
  Paper,
  Grid,
  Tooltip,
  useMediaQuery,
  useTheme,
  IconButton,
  TextField,
  CircularProgress,
  Alert,
  LinearProgress,
  Slider,
  Modal,
} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import Carousel from './Carousel';
import JsonBinApi from '../utils/jsonBin';
import {
  calculateAnswerCorrelation,
  calculateCompatibilityScore,
  pearsonProfile,
  calculateTraitCorrelation,
  pearsonCorrelationBigFive,
  matchMBTI,
} from '../utils/mbtiMapping';
import {
  determinePrimary4FType,
  getSubtext,
  MBTIProfiles,
  statements,
  stages,
} from '../utils/mbtiMapping';
import { guid } from '../utils/guid';
import {
  getRemainingUses,
  needsPayment,
  incrementUsage,
  resetUsage,
} from '../utils/usageTracker';
import PremiumModal from './PremiumModal';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import { typesData } from './typesData';
import { ShuffleOn, SwitchAccount } from '@mui/icons-material';
import Matrix from './Matrix';
import { useParams } from 'react-router-dom';

interface BigFiveValues {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
}

interface BinData {
  type: string;
  primary4FType: string;
  bigFiveResponses: BigFiveValues;
  description?: string;
  responses?: Record<any, number[]>;
  statements: Array<any>;
  date?: string;
  userId?: string;
  binId?: string; // Optional, used for updates
}

// By default, everyone is at 0.5 for all Big Five traits
const defaultTraits: BigFiveValues = {
  openness: 0.5,
  conscientiousness: 0.5,
  extraversion: 0.5,
  agreeableness: 0.5,
  neuroticism: 0.5,
};

type Trait = 'Openness' | 'Conscientiousness' | 'Extraversion' | 'Agreeableness' | 'Neuroticism';

const traitInfo: { label: Trait; icon: React.ReactNode; color: string }[] = [
  { label: 'Openness', icon: <EmojiObjectsIcon />, color: '#1E90FF' },
  { label: 'Conscientiousness', icon: <CheckCircleIcon />, color: '#32CD32' },
  { label: 'Extraversion', icon: <PeopleIcon />, color: '#FF8C00' },
  { label: 'Agreeableness', icon: <FavoriteIcon />, color: '#FF69B4' },
  { label: 'Neuroticism', icon: <MoodBadIcon />, color: '#DC143C' },
];

/**
 * Attempts to fetch data from JSONBin given a binId. If it fails, we return default 0.5 data.
 */
async function fetchBinDataById(binId: string): Promise<BinData> {
  try {
    const binData = await JsonBinApi.getBinById(binId);
    return { ...binData, binId };
  } catch (error) {
    console.error('Error fetching bin:', error);
    // fallback: return a default 0.5 profile
    const type = matchMBTI(defaultTraits);
    const profile = MBTIProfiles.find(profile => profile.name === type.type) || MBTIProfiles[0];
    return {
      type: type.type,
      primary4FType: profile.mode,
      bigFiveResponses: { ...defaultTraits },
      binId,
      responses: [],
    };
  }
}

/**
 * A small link sharing component that generates a shareable URL for userA / userB bins.
 * Opening that URL will automatically load the two user profiles.
 */
const LinkSharing: React.FC<{
    userAId?: string;
    userBId?: string;
  }> = ({ userAId, userBId }) => {
    // Construct a share link including bin IDs if they exist
    const shareLink = `https://traumaindicator.com/#/check/${userAId || ''}/${userBId || ''}`;
  
    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(shareLink);
        alert('Link copied to clipboard!');
      } catch (error) {
        console.error('Failed to copy text:', error);
        alert('Unable to copy to clipboard.');
      }
    };
  
    if(userAId && userBId) {
    return (
      <Paper sx={{ p: 2, width: "100%" }} elevation={3}>
      <Box mt={3}>
        <Typography variant="body1" gutterBottom>
          Share this with someone:
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <TextField
            variant="outlined"
            size="small"
            value={shareLink}
            sx={{ width: '100%' }}
            InputProps={{ readOnly: true }}
          />
          <Button variant="contained" onClick={copyToClipboard}>
            Copy
          </Button>
        </Box>
      </Box>
      </Paper>
    );
  }
  return <></>
  };

const TypeCompatibilityChecker: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const params = useParams();
  // -- States for user A and user B data
  const [userAData, setUserAData] = useState<BinData>(() => {
    // Attempt to load from localStorage
    const saved = localStorage.getItem('binAData');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        // fallback
      }
    }
    const type =  matchMBTI(defaultTraits);
    const profile = MBTIProfiles.find(profile => profile.name === type.type) || MBTIProfiles[0];

    return {
      primary4FType: profile.mode,
      type: type.type,
      bigFiveResponses: { ...defaultTraits },
    };
  });

  const [userBData, setUserBData] = useState<BinData>(() => {
    // Attempt to load from localStorage
    const saved = localStorage.getItem('binBData');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        // fallback
      }
    }
    const type = matchMBTI(defaultTraits);
    const profile = MBTIProfiles.find(profile => profile.name === type.type) || MBTIProfiles[0];
    return {
      primary4FType: profile.mode,
      type: type.type,
      bigFiveResponses: { ...defaultTraits },
    };
  });

  // Modals for manually pasting links
  const [openModalA, setOpenModalA] = useState<boolean>(false);
  const [openModalB, setOpenModalB] = useState<boolean>(false);

  // Modals for matrix-based selection
  const [openTypeModalA, setOpenTypeModalA] = useState<boolean>(false);
  const [openTypeModalB, setOpenTypeModalB] = useState<boolean>(false);

  // The link text fields
  const [userALink, setUserALink] = useState<string>('');
  const [userBLink, setUserBLink] = useState<string>('');

  // Errors and loading states for link submission
  const [errorA, setErrorA] = useState<string>('');
  const [errorB, setErrorB] = useState<string>('');
  const [loadingA, setLoadingA] = useState<boolean>(false);
  const [loadingB, setLoadingB] = useState<boolean>(false);

  // For display correlations
  const [traitCorrelation, setTraitCorrelation] = useState<number | null>(null);
  const [responseCorrelation, setResponseCorrelation] = useState<number | null>(null);
  const [compatibilityScore, setCompatibilityScore] = useState<number | null>(null);

  // Usage tracking / premium
  const [remainingUses, setRemainingUses] = useState<number>(getRemainingUses());
  const [premiumModalOpen, setPremiumModalOpen] = useState<boolean>(false);

  // Stage navigation
  const [currentStage, setCurrentStage] = useState<number>(0);

  // -- Open/Close Handlers --

  const handleOpenModalA = () => setOpenModalA(true);
  const handleCloseModalA = () => {
    setOpenModalA(false);
    setErrorA('');
  };

  const handleOpenModalB = () => setOpenModalB(true);
  const handleCloseModalB = () => {
    setOpenModalB(false);
    setErrorB('');
  };

  const handleOpenTypeModalA = () => setOpenTypeModalA(true);
  const handleCloseTypeModalA = () => {
    setOpenTypeModalA(false);
    setErrorA('');
  };

  const handleOpenTypeModalB = () => setOpenTypeModalB(true);
  const handleCloseTypeModalB = () => {
    setOpenTypeModalB(false);
    setErrorB('');
  };

  // -- Utility: random 0..1 for each trait
  const setRandomlyA = () => {
    const randVal = () => Math.floor(Math.random() * 100) / 100;
    const newTraits: BigFiveValues = {
      openness: randVal(),
      conscientiousness: randVal(),
      extraversion: randVal(),
      agreeableness: randVal(),
      neuroticism: randVal(),
    };
    const newType = matchMBTI(newTraits);
    const profile = MBTIProfiles.find(profile => profile.name === newType.type) || MBTIProfiles[0];
    setResponseCorrelation(null);
    setCompatibilityScore(null);
    setUserAData((prev) => ({
      ...prev,
      bigFiveResponses: newTraits,
      primary4FType: profile.mode,
      type: newType.type,
    }));
  };

  const setRandomlyB = () => {
    const randVal = () => Math.floor(Math.random() * 100) / 100;
    const newTraits: BigFiveValues = {
      openness: randVal(),
      conscientiousness: randVal(),
      extraversion: randVal(),
      agreeableness: randVal(),
      neuroticism: randVal(),
    };
    const newType = matchMBTI(newTraits);
    const profile = MBTIProfiles.find(profile => profile.name === newType.type) || MBTIProfiles[0];
    setResponseCorrelation(null);
    setCompatibilityScore(null);
    setUserBData((prev) => ({
      ...prev,
      bigFiveResponses: newTraits,
      primary4FType: profile.mode,
      type: newType.type,
    }));
  };

  // -- Matrix selection callbacks --
  const handleMatrixSelectA = (selected: string) => {
    if (selected === 'XXXX') {
      handleCloseTypeModalA();
      return;
    }
    setResponseCorrelation(null);
    setCompatibilityScore(null);

    const profile = MBTIProfiles.find((p) => p.name === selected)?.traits;
    if (profile) {
      const calcType = matchMBTI(profile);
    const fourF = MBTIProfiles.find(profile => profile.name === calcType.type) || MBTIProfiles[0];
      setUserAData((prev) => ({
        ...prev,
        bigFiveResponses: profile,
        primary4FType: fourF.mode,
        type: calcType.type,
      }));
    }
    handleCloseTypeModalA();
  };

  const handleMatrixSelectB = (selected: string) => {
    if (selected === 'XXXX') {
      handleCloseTypeModalB();
      return;
    }
    setResponseCorrelation(null);
    setCompatibilityScore(null);

    const profile = MBTIProfiles.find((p) => p.name === selected)?.traits;
    if (profile) {
      
      const calcType = matchMBTI(profile);
      const fourF = MBTIProfiles.find(profile => profile.name === calcType.type) || MBTIProfiles[0];
      setUserBData((prev) => ({
        ...prev,
        bigFiveResponses: profile,
        primary4FType: fourF.mode,
        type: calcType.type,
      }));
    }
    handleCloseTypeModalB();
  };

  // -- Submit link (like the "link icon" approach) --
  const fetchDataByShareLink = async (link: string): Promise<BinData> => {
    // We expect the format: https://.../#/result/<binId>
    try {
      const url = new URL(link);
      const hash = url.hash; // e.g., '#/result/abcd1234'
      const hashParts = hash.split('/');
      const binId = hashParts.length > 2 ? hashParts[2] : null;

      if (!binId) {
        throw new Error('Invalid link format. Bin ID not found.');
      }
      return await fetchBinDataById(binId);
    } catch (error) {
      throw new Error('Invalid URL format or bin fetch error.');
    }
  };

  const handleSubmitA = async () => {
    setLoadingA(true);
    setErrorA('');

    if(remainingUses < 1) {
      handleCloseModalA();
      checkPaymentRequirement();
      setLoadingA(false);
      return;
    }
    try {
      const data = await fetchDataByShareLink(userALink);
      setUserAData(data);
      setTraitCorrelation(null);
      setResponseCorrelation(null);
      setCompatibilityScore(null);
      incrementUsage();
      setRemainingUses(getRemainingUses());
      handleCloseModalA();
      checkPaymentRequirement();
    } catch (error: any) {
      setErrorA(error.message);
    } finally {
      setLoadingA(false);
    }
  };

  const handleSubmitB = async () => {
    setLoadingB(true);
    setErrorB('');

    if(remainingUses < 1) {
      handleCloseModalA();
      checkPaymentRequirement();
      setLoadingB(false);
      return;
    }
    try {
      const data = await fetchDataByShareLink(userBLink);
      setUserBData(data);
      setTraitCorrelation(null);
      setResponseCorrelation(null);
      setCompatibilityScore(null);
      incrementUsage();
      setRemainingUses(getRemainingUses());
      handleCloseModalB();
      checkPaymentRequirement();
    } catch (error: any) {
      setErrorB(error.message);
    } finally {
      setLoadingB(false);
    }
  };

  // -- Payment logic --
  const checkPaymentRequirement = () => {
    if (needsPayment()) {
      setPremiumModalOpen(true);
    }
  };

  const handlePaymentSuccess = () => {
    resetUsage();
    setRemainingUses(getRemainingUses());
    setPremiumModalOpen(false);
    alert('Payment successful! Your usage count has been reset.');
  };

  // -- On mount, parse ?r1= & ?r2= from the URL
  useEffect(() => {
   
    const r1 = params['r1'];
    const r2 = params['r2'];

    // If none, do nothing. 
    // If we do have r1 / r2, it loads them from JSONBin as if user had used the link approach.
    const loadData = async () => {
      if (!r1 && !r2) {
        return;
      }
      try {
        let newAData = { ...userAData };
        let newBData = { ...userBData };

        if (r1) {
          newAData = await fetchBinDataById(r1);
        } else {
          const type = matchMBTI(defaultTraits)
          const profile = MBTIProfiles.find(profile => profile.name === type.type) || MBTIProfiles[0];
          newAData = {
            type: type.type,
            primary4FType: profile.mode,
            bigFiveResponses: { ...defaultTraits },
            binId: 'defaultA',
          };
        }

        if (r2) {
          newBData = await fetchBinDataById(r2);
        } else {
          const type = matchMBTI(defaultTraits)
          const profile = MBTIProfiles.find(profile => profile.name === type.type) || MBTIProfiles[0];
          newBData = {
            type: type.type,
            primary4FType: profile.mode,
            bigFiveResponses: { ...defaultTraits },
            binId: 'defaultB',
          };
        }

        setUserAData(newAData);
        setUserBData(newBData);
      } catch (err) {
        console.error('Error loading from query params:', err);
        // fallback
        const type = matchMBTI(defaultTraits)
        const profile = MBTIProfiles.find(profile => profile.name === type.type) || MBTIProfiles[0];
        setUserAData({
          type: type.type,
          primary4FType: profile.mode,
          bigFiveResponses: { ...defaultTraits },
        });
        setUserBData({
          type: type.type,
          primary4FType: profile.mode,
          bigFiveResponses: { ...defaultTraits },
        });
      }
    };
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // -- Whenever user A or B changes, recalc correlations
  useEffect(() => {
    if (userAData && userBData) {
      try {
        // Big Five trait correlation
        const traitCorr = pearsonCorrelationBigFive(
          Object.values(userAData.bigFiveResponses || {}),
          Object.values(userBData.bigFiveResponses || {})
        );
        setTraitCorrelation(Math.abs(traitCorr));

        // check responses
        const responsesA = flattenResponses(userAData.responses) || [];
        const responsesB = flattenResponses(userBData.responses) || [];
        if (responsesA.length !== responsesB.length || responsesA.length === 0) {
          // skip if mismatch or empty
          setResponseCorrelation(null);
          setCompatibilityScore(null);
        } else {
          const respCorr = calculateAnswerCorrelation(responsesA, responsesB);
          setResponseCorrelation(Math.abs(respCorr));

          const compScore = calculateCompatibilityScore(userAData, userBData);
          setCompatibilityScore(Math.abs(compScore));
        }
      } catch (error) {
        console.error('Error in correlation calculations:', error);
      }
    }
  }, [userAData, userBData]);
  
const flattenResponses = (responses: any) : number[] => {
    const flat : number[] = Object.values(responses).flat() as number[]
    const allResponses : number[] = []

    allResponses.push(...flat.slice(0, 3))
    allResponses.push(...flat.slice(6, 26))
    allResponses.push(...flat.slice(3, 6))
    return allResponses;
  }
  // Build slides if we have responses in both
  const prepareCarouselSlides = () => {
    if (
      !userAData ||
      !userBData ||
      !userAData.responses ||
      !userBData.responses ||
      flattenResponses(userAData.responses).length === 0 ||
      flattenResponses(userBData.responses).length === 0
    )
      return [];

    const userData = flattenResponses(userAData.responses).map((response, idx) => {
      const statementA = (userAData.statements || statements)[idx];
      const statementB = (userBData.statements || statements)[idx]
      const subtextA = getSubtext(statement.trait, idx, response);
      const subtextB = getSubtext(statement.trait, idx, flattenResponses(userBData.responses)![idx]);
      const compatibilityPercent = Math.round(
        (1 - Math.abs(response - flattenResponses(userBData.responses)![idx])) * 100
      );
      return {
        question: statement.text,
        trait: statement.trait,
        userAResponse: response,
        userBResponse: flattenResponses(userBData.responses)![idx],
        subtextA,
        subtextB,
        compatibilityPercent,
      };
    });

    const stagesA =  [
        userData.slice(0, 3), // Stage 0
        userData.slice(3, 7), // Stage 1
        userData.slice(7, 11), // Stage 2
        userData.slice(11, 15), // Stage 3
        userData.slice(15, 19), // Stage 4
        userData.slice(19, 23), // Stage 5
        userData.slice(23, 26)
        ];

      return stagesA;
  };

  const slides = prepareCarouselSlides();

  const handleNextStage = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const handlePrevStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
    }
  };

  // get type display info
  const typeA = typesData.find((t) => t.type === userAData.type);
  const typeB = typesData.find((t) => t.type === userBData.type);

  return (
    <Container maxWidth="lg" sx={{ marginTop: '40px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Type Comparator
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '30px', color: 'text.secondary' }}>
        Input the links to both users' profiles, pick your known type, or manually adjust your Big Five traits.
      </Typography>

      {/* Usage Info */}
      <Box mb={4}>
        <Typography variant="body2" color="text.secondary">
          Remaining Uses This Week: {remainingUses}
        </Typography>
      </Box>

      {/* User A + User B columns */}
      <Grid container spacing={4} justifyContent="center">
        {/* USER A */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: '20px', borderRadius: '10px' }}>
            <Typography variant="h6" sx={{ fontWeight: '500' }}>
              User A
            </Typography>
            <Box display="flex" justifyContent="center">
              <Box>
                <IconButton onClick={handleOpenModalA} color="primary">
                  <LinkIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton onClick={setRandomlyA} color="primary" sx={{ marginRight: 1 }}>
                  <ShuffleOn />
                </IconButton>
              </Box>
              <Box>
                <IconButton onClick={handleOpenTypeModalA} color="primary">
                  <SwitchAccount />
                </IconButton>
              </Box>
            </Box>
            <Box mt={2}>
              <Grid container spacing={4}>
                {traitInfo.map(({ label, icon, color }) => {
                  const numericVal =
                    userAData.bigFiveResponses[label.toLowerCase() as keyof BigFiveValues] * 100;
                  return (
                    <Grid item xs={12} key={label}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '10px',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          {icon}
                          <Typography variant="h6" sx={{ marginLeft: '10px', fontWeight: '500', color }}>
                            {label}
                          </Typography>
                        </Box>
                        <Tooltip title={`${numericVal.toFixed(0)} %`} arrow>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {numericVal.toFixed(0)}%
                          </Typography>
                        </Tooltip>
                      </Box>
                      <Slider
                        value={Math.round(numericVal)}
                        onChange={(e: any, newValue: number | number[]) => {
                          const updatedVal = Array.isArray(newValue) ? newValue[0] : newValue;
                          setUserAData((prev) => {
                            const bigFiveResponses = {
                              ...prev.bigFiveResponses,
                              [label.toLowerCase()]: updatedVal / 100,
                            };
                            const newType = matchMBTI(bigFiveResponses);
                            const profile = MBTIProfiles.find(profile => profile.name === newType.type) || MBTIProfiles[0];
                            setResponseCorrelation(null);
                            setCompatibilityScore(null);
                            return {
                              ...prev,
                              bigFiveResponses,
                              primary4FType: profile.mode,
                              type: newType.type,
                            };
                          });
                        }}
                        min={0}
                        max={100}
                        step={1}
                        valueLabelDisplay="auto"
                        sx={{
                          color,
                          '& .MuiSlider-thumb': { width: 24, height: 24 },
                        }}
                      />
                    </Grid>
                  );
                })}
              </Grid>
              <Box display="flex" justifyContent="center" mt={2}>
                <Tooltip title={typeA?.mode || ''}>
                  <Box
                    bgcolor={typeA?.bgColor || '#999'}
                    color="white"
                    p={isMobile ? 1 : 2}
                    textAlign="center"
                    borderRadius={2}
                    style={{ textDecoration: 'none' }}
                    sx={{ fontSize: isMobile ? '0.75rem' : '1rem' }}
                  >
                    <Typography variant="subtitle1">{userAData.type}</Typography>
                  </Box>
                </Tooltip>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* USER B */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: '20px', borderRadius: '10px' }}>
            <Typography variant="h6" sx={{ fontWeight: '500' }}>
              User B
            </Typography>
            <Box display="flex" justifyContent="center">
              <Box>
                <IconButton onClick={handleOpenModalB} color="primary">
                  <LinkIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton onClick={setRandomlyB} color="primary" sx={{ marginRight: 1 }}>
                  <ShuffleOn />
                </IconButton>
              </Box>
              <Box>
                <IconButton onClick={handleOpenTypeModalB} color="primary">
                  <SwitchAccount />
                </IconButton>
              </Box>
            </Box>
            <Box mt={2}>
              <Grid container spacing={4}>
                {traitInfo.map(({ label, icon, color }) => {
                  const numericVal =
                    userBData.bigFiveResponses[label.toLowerCase() as keyof BigFiveValues] * 100;
                  return (
                    <Grid item xs={12} key={label}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '10px',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          {icon}
                          <Typography variant="h6" sx={{ marginLeft: '10px', fontWeight: '500', color }}>
                            {label}
                          </Typography>
                        </Box>
                        <Tooltip title={`${numericVal.toFixed(0)} %`} arrow>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {numericVal.toFixed(0)}%
                          </Typography>
                        </Tooltip>
                      </Box>
                      <Slider
                        value={Math.round(numericVal)}
                        onChange={(e: any, newValue: number | number[]) => {
                          const updatedVal = Array.isArray(newValue) ? newValue[0] : newValue;
                          setUserBData((prev) => {
                            const bigFiveResponses = {
                              ...prev.bigFiveResponses,
                              [label.toLowerCase()]: updatedVal / 100,
                            };
                            const newType = matchMBTI(bigFiveResponses);
                            const profile = MBTIProfiles.find(profile => profile.name === newType.type) || MBTIProfiles[0];
                            setResponseCorrelation(null);
                            setCompatibilityScore(null);
                            return {
                              ...prev,
                              bigFiveResponses,
                              primary4FType: profile.mode,
                              type: newType.type,
                            };
                          });
                        }}
                        min={0}
                        max={100}
                        step={1}
                        valueLabelDisplay="auto"
                        sx={{
                          color,
                          '& .MuiSlider-thumb': { width: 24, height: 24 },
                        }}
                      />
                    </Grid>
                  );
                })}
              </Grid>
              <Box display="flex" justifyContent="center" mt={2}>
                <Tooltip title={typeB?.mode || ''}>
                  <Box
                    bgcolor={typeB?.bgColor || '#999'}
                    color="white"
                    p={isMobile ? 1 : 2}
                    textAlign="center"
                    borderRadius={2}
                    style={{ textDecoration: 'none' }}
                    sx={{ fontSize: isMobile ? '0.75rem' : '1rem' }}
                  >
                    <Typography variant="subtitle1">{userBData.type}</Typography>
                  </Box>
                </Tooltip>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Compatibility Scores */}
      {(traitCorrelation !== null || responseCorrelation !== null) && (
        <Box mt={5}>
          <Paper elevation={3} sx={{ padding: '30px', borderRadius: '10px' }}>
            <Typography variant="h5" gutterBottom>
              Compatibility Scores
            </Typography>
            {/* Big Five Trait correlation */}
            {traitCorrelation !== null && (
              <Box mt={3}>
                <Typography variant="h6">Big Five Traits Correlation</Typography>
                <Tooltip title={`Pearson Correlation: ${traitCorrelation.toFixed(2)}`} arrow>
                  <LinearProgress
                    variant="determinate"
                    value={(traitCorrelation + 1) * 50} // [-1..1] => [0..100]
                    sx={{
                      height: '10px',
                      borderRadius: '5px',
                      backgroundColor: '#e0e0e0',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor:
                          traitCorrelation > 0.7
                            ? 'green'
                            : traitCorrelation > 0.3
                            ? 'orange'
                            : 'red',
                      },
                    }}
                  />
                </Tooltip>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {traitCorrelation > 0.7
                    ? 'Strong Positive Correlation'
                    : traitCorrelation > 0.3
                    ? 'Moderate Positive Correlation'
                    : 'Weak or Negative Correlation'}
                </Typography>
              </Box>
            )}

            {/* Individual Responses Correlation */}
            {responseCorrelation !== null && (
              <Box mt={3}>
                <Typography variant="h6">Individual Responses Correlation</Typography>
                <Tooltip title={`Pearson Correlation: ${(responseCorrelation || 0).toFixed(2)}`} arrow>
                  <LinearProgress
                    variant="determinate"
                    value={(responseCorrelation + 1) * 50}
                    sx={{
                      height: '10px',
                      borderRadius: '5px',
                      backgroundColor: '#e0e0e0',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor:
                          responseCorrelation > 0.7
                            ? 'green'
                            : responseCorrelation > 0.3
                            ? 'orange'
                            : 'red',
                      },
                    }}
                  />
                </Tooltip>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {responseCorrelation > 0.7
                    ? 'Strong Positive Correlation'
                    : responseCorrelation > 0.3
                    ? 'Moderate Positive Correlation'
                    : 'Weak or Negative Correlation'}
                </Typography>
              </Box>
            )}

            {/* Overall Compatibility */}
            {compatibilityScore !== null && (
              <Box mt={3}>
                <Typography variant="h6">Overall Compatibility Score</Typography>
                <Tooltip title={`${compatibilityScore.toFixed(0)}%`} arrow>
                  <LinearProgress
                    variant="determinate"
                    value={compatibilityScore}
                    sx={{
                      height: '10px',
                      borderRadius: '5px',
                      backgroundColor: '#e0e0e0',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor:
                          compatibilityScore > 80
                            ? 'green'
                            : compatibilityScore > 50
                            ? 'orange'
                            : 'red',
                      },
                    }}
                  />
                </Tooltip>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {compatibilityScore > 80
                    ? 'Highly Compatible'
                    : compatibilityScore > 50
                    ? 'Moderately Compatible'
                    : 'Low Compatibility'}
                </Typography>
              </Box>
            )}
          </Paper>
        </Box>
      )}

      {/* Responses Comparison Carousel */}
      {slides.length > 0 && (
        <Paper sx={{ p: 2, width: '100%' }} elevation={3}>
          <Box mt={5}>
            <Typography variant="h5" gutterBottom>
              Responses Comparison
            </Typography>
            <Carousel
              slides={isMobile ? slides.flat().map(slide => ({ content: (
                <Box> 
                     <Typography variant="h6" gutterBottom>
                      {slide.question}
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                      {/* User A's Answer */}
                      <Grid item xs={5}>
                        {typeof slide.userAResponse !== "string"
                        ? (
                          <Paper sx={{ p: 2 }}>
                          <Typography variant="subtitle1" gutterBottom>
                            User A
                          </Typography>
                          <Typography variant="body2">
                            {(slide.userAResponse * 100).toFixed(0)}%
                          </Typography>
                          <LinearProgress
                            color="secondary"
                            variant="determinate"
                            value={slide.userAResponse * 100}
                          />
                          {slide.subtextA && (
                            <Typography variant="caption" color="text.secondary">
                              {slide.subtextA}
                            </Typography>
                          )}
                        </Paper>
                        )
                        : (
<Paper sx={{ p: 2 }}>
                          <Typography variant="subtitle1" gutterBottom>
                            User A
                          </Typography>
                          <Typography variant="body2">
                            {(slide.userAResponse as string).slice(0, (slide.userAResponse as string).indexOf('.') || 100)}
                          </Typography>
                        
                        </Paper>
                        )
                      }
                      </Grid>

                      {/* Compatibility in the middle */}
                      <Grid item xs={2}>
                        {slide.compatibilityPercent && (
                          <Box textAlign="center">
                          <Typography variant="body2">Compatibility</Typography>
                          <Typography variant="h6">{slide.compatibilityPercent || 0}%</Typography>
                        </Box>
                        )}
                      </Grid>

                      {/* User B's Answer */}
                      <Grid item xs={5}>
                        { typeof slide.userBResponse !== "string" ? (
                          <Paper sx={{ p: 2 }}>
                          <Typography variant="subtitle1" gutterBottom>
                            User B
                          </Typography>
                          <Typography variant="body2">
                            {(slide.userBResponse * 100).toFixed(0)}%
                          </Typography>
                          <LinearProgress
                            color="secondary"
                            variant="determinate"
                            value={slide.userBResponse * 100}
                          />
                          {slide.subtextB && (
                            <Typography variant="caption" color="text.secondary">
                              {slide.subtextB}
                            </Typography>
                          )}
                        </Paper>
                        ) : (
<Paper sx={{ p: 2 }}>
                          <Typography variant="subtitle1" gutterBottom>
                            User B
                          </Typography>
                          <Typography variant="body2">
                            {slide.userBResponse}
                          </Typography>
                        
                        </Paper>
                        )
                        }
                      </Grid>
                    </Grid>
                </Box>
              )})) : slides.map((slide, idx) => ({
                content: (
                  <Box key={idx} sx={{ padding: '20px' }}>
                   {slide.map(item => (
                    <Box>
                         <Typography variant="h6" gutterBottom>
                      {item.question}
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                      {/* User A's Answer */}
                      <Grid item xs={5}>
                        {
                           typeof item.userAResponse !== 'string' ? (
                            <Paper sx={{ p: 2 }}>
                          <Typography variant="subtitle1" gutterBottom>
                            User A
                          </Typography>
                          <Typography variant="body2">
                            {(item.userAResponse * 100).toFixed(0)}%
                          </Typography>
                          <LinearProgress
                            color="secondary"
                            variant="determinate"
                            value={item.userAResponse * 100}
                          />
                          {item.subtextA && (
                            <Typography variant="h6" color="text.secondary">
                              {item.subtextA}
                            </Typography>
                          )}
                        </Paper>
                           ) : (
<Paper sx={{ p: 2 }}>
                          <Typography variant="subtitle1" gutterBottom>
                            User A
                          </Typography>
                          <Typography variant="body2">
                            {(item.userAResponse as string).slice(0, (item.userAResponse as string).indexOf(".") || 100)}
                          </Typography>
                        </Paper>
                           )
                        }
                      </Grid>

                      {/* Compatibility in the middle */}
                      <Grid item xs={2}>
                        <Box textAlign="center">
                          <Typography variant="body2">Compatibility</Typography>
                          <Typography variant="h6">{item.compatibilityPercent || 0}%</Typography>
                        </Box>
                      </Grid>

                      {/* User B's Answer */}
                      <Grid item xs={5}>
                        {
                          typeof item.userBResponse !== "string" ? (
                        <Paper sx={{ p: 2 }}>
                          <Typography variant="subtitle1" gutterBottom>
                            User B
                          </Typography>
                          <Typography variant="body2">
                            {(item.userBResponse * 100).toFixed(0)}%
                          </Typography>
                          <LinearProgress
                            color="secondary"
                            variant="determinate"
                            value={item.userBResponse * 100}
                          />
                          {item.subtextB && (
                            <Typography variant="h6" color="text.secondary">
                              {item.subtextB}
                            </Typography>
                          )}
                        </Paper>
                          ) : (
                            <Paper sx={{ p: 2 }}>
                            <Typography variant="subtitle1" gutterBottom>
                              User B
                            </Typography>
                            <Typography variant="body2">
                              {(item.userBResponse as unknown as string).slice(0, (item.userBResponse as unknown as string).indexOf(".") || 100)}
                            </Typography>
                          </Paper>
                          )
                        }
                      </Grid>
                    </Grid>
                    </Box>
                   ))}
                  </Box>
                ),
              }))}
              settings={{
                spaceBetween: 50,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                infinite: false,
                dots: true,
                arrows: true,
              }}
            />
          </Box>
        </Paper>
      )}

      {/* Link Sharing: pass each user's binId */}
      <LinkSharing userAId={userAData.binId} userBId={userBData.binId} />

      {/* Premium modal */}
      <PremiumModal
        open={premiumModalOpen}
        onClose={() => setPremiumModalOpen(false)}
        title="Find out your compatibility now!"
        description="For only €0.99, see how compatible you really are!"
        price={0.99}
        handlePaymentSuccess={handlePaymentSuccess}
      />

      {/* Modal for Type Selection: User A */}
      <Modal open={openTypeModalA} onClose={handleCloseTypeModalA}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            outline: 'none',
            width: { xs: '90%', sm: '60%' },
            borderRadius: '8px',
          }}
        >
          <Box sx={{ margin: '5% 10%' }}>
            <Typography variant="h6" gutterBottom>
              Select Your Type Here
            </Typography>
            <Typography variant="body2" gutterBottom>
              Use this as a preset if you already know your type!
            </Typography>
            <Matrix onSelectType={handleMatrixSelectA} width={isMobile ? '60%' : '90%'} />
            <Box mt={2} display="flex" justifyContent="center">
              <Button variant="contained" color="secondary" onClick={() => handleMatrixSelectA('XXXX')}>
                I (don't) know my type!
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      {/* Modal for Type Selection: User B */}
      <Modal open={openTypeModalB} onClose={handleCloseTypeModalB}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            outline: 'none',
            width: { xs: '90%', sm: '60%' },
            borderRadius: '8px',
          }}
        >
          <Box sx={{ margin: '5% 10%' }}>
            <Typography variant="h6" gutterBottom>
              Select Your Type Here
            </Typography>
            <Typography variant="body2" gutterBottom>
              Use this as a preset if you already know your type!
            </Typography>
            <Matrix onSelectType={handleMatrixSelectB} width={isMobile ? '60%' : '90%'} />
            <Box mt={2} display="flex" justifyContent="center">
              <Button variant="contained" color="secondary" onClick={() => handleMatrixSelectB('XXXX')}>
                I (don't) know my type!
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      {/* Modal for User A Link Input */}
      <Modal open={openModalA} onClose={handleCloseModalA}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
            width: { xs: '90%', sm: '400px' },
          }}
        >
          <Typography variant="h6" gutterBottom>
            Enter User A&apos;s Profile Link
          </Typography>
          <TextField
            fullWidth
            label="Profile Link"
            variant="outlined"
            value={userALink}
            onChange={(e) => setUserALink(e.target.value)}
            sx={{ marginBottom: '20px' }}
          />
          {errorA && (
            <Alert severity="error" sx={{ marginBottom: '10px' }}>
              {errorA}
            </Alert>
          )}
          <Box display="flex" justifyContent="flex-end">
            <Button onClick={handleCloseModalA} sx={{ marginRight: '10px' }}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmitA} disabled={loadingA}>
              {loadingA ? <CircularProgress size={24} /> : 'Submit'}
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Modal for User B Link Input */}
      <Modal open={openModalB} onClose={handleCloseModalB}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
            width: { xs: '90%', sm: '400px' },
          }}
        >
          <Typography variant="h6" gutterBottom>
            Enter User B&apos;s Profile Link
          </Typography>
          <TextField
            fullWidth
            label="Profile Link"
            variant="outlined"
            value={userBLink}
            onChange={(e) => setUserBLink(e.target.value)}
            sx={{ marginBottom: '20px' }}
          />
          {errorB && (
            <Alert severity="error" sx={{ marginBottom: '10px' }}>
              {errorB}
            </Alert>
          )}
          <Box display="flex" justifyContent="flex-end">
            <Button onClick={handleCloseModalB} sx={{ marginRight: '10px' }}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmitB} disabled={loadingB}>
              {loadingB ? <CircularProgress size={24} /> : 'Submit'}
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default TypeCompatibilityChecker;
