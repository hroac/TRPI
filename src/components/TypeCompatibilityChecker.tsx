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
import JsonBinApi from '../utils/saveResults';
import { calculateTraitCorrelation, calculateAnswerCorrelation, calculateCompatibilityScore, matchMBTIType, determinePrimary4FType, pearsonCorrelation, pearsonCorrelationBigFive, MBTIProfiles } from '../utils/mbtiMapping';
import { getSubtext } from '../utils/mbtiMapping';
import { stages, statements } from '../utils/mbtiMapping';
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
  description: string;
  allResponses: number[];
  date: string;
  userId: string;
  binId?: string; // Optional, used for updates
}
type Trait = 'Openness' | 'Conscientiousness' | 'Extraversion' | 'Agreeableness' | 'Neuroticism'

const traitInfo: { label: Trait; icon: React.ReactNode; color: string }[] = [
  { label: 'Openness', icon: <EmojiObjectsIcon />, color: '#1E90FF' },
  { label: 'Conscientiousness', icon: <CheckCircleIcon />, color: '#32CD32' },
  { label: 'Extraversion', icon: <PeopleIcon />, color: '#FF8C00' },
  { label: 'Agreeableness', icon: <FavoriteIcon />, color: '#FF69B4' },
  { label: 'Neuroticism', icon: <MoodBadIcon />, color: '#DC143C' },
];

const TypeCompatibilityChecker: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const defaultTraits =  {
    openness: 0.5,
    conscientiousness: 0.5,
    extraversion: 0.5,
    agreeableness: 0.5,
    neuroticism: 0.5,
  }

  // State for User A
 
  const [userAData, setUserAData] = useState<BinData>( localStorage.getItem('binAData') && JSON.parse(localStorage.getItem('binAData') || '') || {
    primary4FType: determinePrimary4FType(defaultTraits),
    type: matchMBTIType(defaultTraits, determinePrimary4FType(defaultTraits)),
    bigFiveResponses: {
        openness: 0.5,
        conscientiousness: 0.5,
        extraversion: 0.5,
        agreeableness: 0.5,
        neuroticism: 0.5,
    }
  });
  // State for User B
const [userBData, setUserBData] = useState<BinData>(localStorage.getItem('binBData') && JSON.parse(localStorage.getItem('binBData') || '') || {
    primary4FType: determinePrimary4FType(defaultTraits),
    type: matchMBTIType(defaultTraits, determinePrimary4FType(defaultTraits)),
    bigFiveResponses: {
        openness: 0.5,
        conscientiousness: 0.5,
        extraversion: 0.5,
        agreeableness: 0.5,
        neuroticism: 0.5,
    }
  });
  
  // Modals for Link Inputs
  const [openModalA, setOpenModalA] = useState<boolean>(false);
  const [openModalB, setOpenModalB] = useState<boolean>(false); 
  const [openTypeModalA, setOpenTypeModalA] = useState<boolean>(false);
  const [openTypeModalB, setOpenTypeModalB] = useState<boolean>(false);
  const [userALink, setUserALink] = useState<string>('');
  const [userBLink, setUserBLink] = useState<string>('');
  const [errorA, setErrorA] = useState<string>('');
  const [errorB, setErrorB] = useState<string>('');
  const [loadingA, setLoadingA] = useState<boolean>(false);
  const [loadingB, setLoadingB] = useState<boolean>(false);

  // Compatibility Scores
  const [traitCorrelation, setTraitCorrelation] = useState<number | null>(null);
  const [responseCorrelation, setResponseCorrelation] = useState<number | null>(null);
  const [compatibilityScore, setCompatibilityScore] = useState<number | null>(null);

  // Usage Tracking
  const [remainingUses, setRemainingUses] = useState<number>(getRemainingUses());
  const [premiumModalOpen, setPremiumModalOpen] = useState<boolean>(false);

  // Current Stage for Navigation
  const [currentStage, setCurrentStage] = useState<number>(0);
  

  // Handle opening and closing modals for link input
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

  const handleMatrixSelectA = (selected: string) => {
    console.log('Selected Type:', selected);
   

    if (selected === 'XXXX') {
      // User doesn't know their type
      //setMbtiType('XXXX');
      handleCloseTypeModalA();
      return;
    }

    setResponseCorrelation(null)
    setCompatibilityScore(null)
    // If user selected a known type, load its profile and adjust traits
    const profile = MBTIProfiles.find((p) => p.name === selected)?.traits;
    if (profile) {
      // Convert profile traits (0.0-1.0) to percentage and update sliders
      const updatedTraits: BigFiveValues = {
        openness: Math.round(profile.openness * 100),
        conscientiousness: Math.round(profile.conscientiousness * 100),
        extraversion: Math.round(profile.extraversion * 100),
        agreeableness: Math.round(profile.agreeableness * 100),
        neuroticism: Math.round(profile.neuroticism * 100),
      };


      const primary4F = determinePrimary4FType(profile);
      const calculatedType = matchMBTIType(profile, primary4F, true);
      setCompatibilityScore(null)
      setResponseCorrelation(null)
      setUserAData((prev) => ({
        ...prev,
        bigFiveResponses: profile,
        primary4FType: primary4F,
        type: calculatedType

    }));
    }

    handleCloseTypeModalA();
  };

  const handleMatrixSelectB = (selected: string) => {
    console.log('Selected Type:', selected);
   

    if (selected === 'XXXX') {
      // User doesn't know their type
      //setMbtiType('XXXX');
      handleCloseTypeModalB();
      return;
    }

    setResponseCorrelation(null)
    setCompatibilityScore(null)
    // If user selected a known type, load its profile and adjust traits
    const profile = MBTIProfiles.find((p) => p.name === selected)?.traits;
    if (profile) {
      // Convert profile traits (0.0-1.0) to percentage and update sliders
      const updatedTraits: BigFiveValues = {
        openness: Math.round(profile.openness * 100),
        conscientiousness: Math.round(profile.conscientiousness * 100),
        extraversion: Math.round(profile.extraversion * 100),
        agreeableness: Math.round(profile.agreeableness * 100),
        neuroticism: Math.round(profile.neuroticism * 100),
      };

      const primary4F = determinePrimary4FType(profile);
      const calculatedType = matchMBTIType(profile, primary4F, true);
      setUserBData((prev) => ({
        ...prev,
        primary4FType: primary4F,
        bigFiveResponses: profile,
        type: calculatedType

    }));
    }

    handleCloseTypeModalB();
  };

  const setRandomlyA = () => {
    const randomTraits: Record<Trait, number> = {
      Openness: Math.floor(Math.random() * 100),
      Conscientiousness: Math.floor(Math.random() * 100),
      Extraversion: Math.floor(Math.random() * 100),
      Agreeableness: Math.floor(Math.random() * 100),
      Neuroticism: Math.floor(Math.random() * 100),
    };

    // Recalculate MBTI based on random traits
    const bigFiveData = {
      openness: randomTraits.Openness / 100,
      conscientiousness: randomTraits.Conscientiousness / 100,
      extraversion: randomTraits.Extraversion / 100,
      agreeableness: randomTraits.Agreeableness / 100,
      neuroticism: randomTraits.Neuroticism / 100,
    };
    const primary4F = determinePrimary4FType(bigFiveData);
    const calculatedType = matchMBTIType(bigFiveData, primary4F, true);
    setResponseCorrelation(null)
    setCompatibilityScore(null)
    setUserAData((prev) => ({
        ...prev,
        primary4FType: primary4F,
        bigFiveResponses: bigFiveData,
        type: calculatedType

    }));
  };

  const setRandomlyB = () => {
    const randomTraits: Record<Trait, number> = {
      Openness: Math.floor(Math.random() * 100),
      Conscientiousness: Math.floor(Math.random() * 100),
      Extraversion: Math.floor(Math.random() * 100),
      Agreeableness: Math.floor(Math.random() * 100),
      Neuroticism: Math.floor(Math.random() * 100),
    };

    // Recalculate MBTI based on random traits
    const bigFiveData = {
      openness: randomTraits.Openness / 100,
      conscientiousness: randomTraits.Conscientiousness / 100,
      extraversion: randomTraits.Extraversion / 100,
      agreeableness: randomTraits.Agreeableness / 100,
      neuroticism: randomTraits.Neuroticism / 100,
    };
    const primary4F = determinePrimary4FType(bigFiveData);
    const calculatedType = matchMBTIType(bigFiveData, primary4F, true);
    setResponseCorrelation(null)
    setCompatibilityScore(null)
    setUserBData((prev) => ({
        ...prev,
        bigFiveResponses: bigFiveData,
        primary4FType: primary4F,
        type: calculatedType

    }));
  };
  // Fetch data from link
  const fetchData = async (link: string): Promise<BinData> => {
    // Extract binId from the link
    // Assuming the binId is after '/#/result/'
    try {
      const url = new URL(link);
      const hash = url.hash; // e.g., '#/result/abcd1234'
      const hashParts = hash.split('/');
      const binId = hashParts.length > 2 ? hashParts[2] : null;

      if (!binId) {
        throw new Error('Invalid link format. Bin ID not found.');
      }

      // Fetch bin data using JsonBinApi
      const binData = await JsonBinApi.getBinById(binId);
      return { ...binData, binId };
    } catch (error) {
      throw new Error('Invalid URL format.');
    }
  };

  // Handle submitting link for User A
  const handleSubmitA = async () => {
    setLoadingA(true);
    setErrorA('');
    try {
      const data = await fetchData(userALink);
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

  // Handle submitting link for User B
  const handleSubmitB = async () => {
    setLoadingB(true);
    setErrorB('');
    try {
      const data = await fetchData(userBLink);
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

 
  // Check if payment is required
  const checkPaymentRequirement = () => {
    if (needsPayment()) {
      setPremiumModalOpen(true);
    }
  };

  // Handle payment success
  const handlePaymentSuccess = () => {
    // Reset usage count
    resetUsage();
    setRemainingUses(getRemainingUses());
    setPremiumModalOpen(false);
    alert('Payment successful! Your usage count has been reset.');
  };

  // Calculate Pearson Correlations
  useEffect(() => {
    if (userAData && userBData) {
      try {
        // Trait Correlation
       
        const traitCorr = pearsonCorrelationBigFive(Object.values(userAData.bigFiveResponses), Object.values(userBData.bigFiveResponses));
        setTraitCorrelation(traitCorr);

        // Response Correlation
        const responsesA = userAData.allResponses;
        const responsesB = userBData.allResponses;

        // Ensure both users have the same number of responses
        if ( responsesA && responsesB && responsesA.length !== responsesB.length) {
          setResponseCorrelation(null);
          setCompatibilityScore(null);
          console.warn('Users have different number of responses.');
        } else if (responsesA.length === 0) {
          // If no responses, skip correlation
          setResponseCorrelation(null);
          setCompatibilityScore(null);
        } else {
          const respCorr = calculateAnswerCorrelation(responsesA, responsesB);
          setResponseCorrelation(respCorr);
          // Calculate overall compatibility score
          const compScore = calculateCompatibilityScore(userAData, userBData);
          setCompatibilityScore(compScore);
        }
      } catch (error) {
        console.error('Error in correlation calculations:', error);
      }
    }
  }, [userAData, userBData]);

  // Prepare data for the carousel
  const prepareCarouselSlides = () => {
    if (!userAData || !userBData || !userAData.allResponses || !userBData.allResponses || userAData.allResponses.length === 0 || userBData.allResponses.length === 0) return [];

    const questions = userAData.allResponses.map((response, idx) => {
      const statement = statements[idx];
      const subtextA = getSubtext(statement.trait, idx, response);
      const subtextB = getSubtext(statement.trait, idx, userBData.allResponses[idx]);

      // Calculate compatibility percentage for each answer
      const compatibilityPercent = Math.round((1 - Math.abs(response - userBData.allResponses[idx])) * 100);

      return {
        question: statement.text,
        trait: statement.trait,
        userAResponse: response,
        userBResponse: userBData.allResponses[idx],
        subtextA,
        subtextB,
        compatibilityPercent,
      };
    });

    return questions;
  };

  const slides = prepareCarouselSlides();

  // Handle stage navigation
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
  
  const typeA = typesData.find(type => type.type === userAData.type);
  const typeB = typesData.find(type => type.type === userBData.type)

  return (
    <Container maxWidth="lg" sx={{ marginTop: '40px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Type Compatibility Checker
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '30px', color: 'text.secondary' }}>
        Input the links to both users' profiles or manually input your Big Five traits to calculate compatibility.
      </Typography>

      {/* Usage Information */}
      <Box mb={4}>
        <Typography variant="body2" color="text.secondary">
          Remaining Uses This Week: {remainingUses}
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {/* User A Section */}
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

            
            {/* Display User A Data */}
            <Box mt={2}>
               
                <Grid container spacing={4}>
          {traitInfo.map(({ label, icon, color }) => (
            <Grid item xs={12} key={label}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {icon}
                  <Typography variant="h6" sx={{ marginLeft: '10px', fontWeight: '500', color }}>
                    {label}
                  </Typography>
                </Box>
                <Tooltip title={`${parseInt(((userAData.bigFiveResponses as any)[label.toLowerCase()]  * 100).toString()).toFixed(0)} %`} arrow>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {((userAData.bigFiveResponses as any)[label.toLowerCase()] * 100).toFixed(0)}%
                  </Typography>
                </Tooltip>
              </Box>
              <Slider
                value={parseInt(((userAData.bigFiveResponses as any)[label.toLowerCase()]  * 100).toFixed(0).toString())}
                onChange={(e: any, newValue: any) => {
                    setUserAData((prev) => { 
                        const bigFiveResponses = {
                            ...prev.bigFiveResponses,
                            [label.toLowerCase()]: Number(newValue) / 100,
                          }
                          const primary4FType = determinePrimary4FType(bigFiveResponses)
                          const type = matchMBTIType(bigFiveResponses, primary4FType)
                          setCompatibilityScore(null)
                          setResponseCorrelation(null)
                        return{ 
                        ...prev,
                        type, 
                        primary4FType,
                        bigFiveResponses
                      }})
                    }
                  }
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
          ))}
        </Grid>
        <Box display="flex"  justifyContent={'center'}>
               <Tooltip title={typeA.mode}>
            <Box
              bgcolor={typeA?.bgColor || ''}
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

        {/* User B Section */}
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

            {/* Display User B Data */}
            {userBData ? (
              <Box mt={2}>
              
                <Grid container spacing={4}>
          {traitInfo.map(({ label, icon, color }) => (
            <Grid item xs={12} key={label}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {icon}
                  <Typography variant="h6" sx={{ marginLeft: '10px', fontWeight: '500', color }}>
                    {label}
                  </Typography>
                </Box>
                <Tooltip title={`${parseInt(((userBData.bigFiveResponses as any)[label.toLowerCase()]  * 100).toFixed(0).toString())} %`} arrow>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {((userBData.bigFiveResponses as any)[label.toLowerCase()] * 100).toFixed(0)}%
                  </Typography>
                </Tooltip>
              </Box>
              <Slider
                value={parseInt(((userBData.bigFiveResponses as any)[label.toLowerCase()]  * 100).toString())}
                onChange={(e: any, newValue: any) => {
                    setUserBData((prev) => { 
                        const bigFiveResponses = {
                            ...prev.bigFiveResponses,
                            [label.toLowerCase()]: Number(newValue) / 100,
                          }
                          const primary4FType = determinePrimary4FType(bigFiveResponses)
                          const type = matchMBTIType(bigFiveResponses, primary4FType)
                          setCompatibilityScore(null)
                          setResponseCorrelation(null)
                        return{ 
                        ...prev,
                        type, 
                        primary4FType,
                        bigFiveResponses
                      }})
                    }
                  }
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
          ))}
        </Grid>
        <Box display="flex"  justifyContent={'center'}>
               <Tooltip title={typeB.mode}>
            <Box
              bgcolor={typeB?.bgColor || ''}
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
            ) : (
              <Typography variant="body2" sx={{ marginTop: '20px', color: 'text.secondary' }}>
                No profile linked or manually inputted.
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>

      {/* Compatibility Scores */}
      {(traitCorrelation !== null || responseCorrelation !== null) && (
        <Box mt={5}>
          <Paper elevation={3} sx={{ padding: '30px', borderRadius: '10px'}}>
            <Typography variant="h5" gutterBottom>
              Compatibility Scores
            </Typography>

            {/* Big Five Traits Correlation */}
            {traitCorrelation !== null && (
              <Box mt={3}>
                <Typography variant="h6">Big Five Traits Correlation</Typography>
                <Tooltip title={`Pearson Correlation: ${traitCorrelation.toFixed(2)}`} arrow>
                  <LinearProgress
                    variant="determinate"
                    value={(traitCorrelation + 1) * 50} // Convert from [-1,1] to [0,100]
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
                <Tooltip title={`Pearson Correlation: ${responseCorrelation.toFixed(2)}`} arrow>
                  <LinearProgress
                    variant="determinate"
                    value={(responseCorrelation + 1) * 50} // Convert from [-1,1] to [0,100]
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

            {/* Overall Compatibility Score */}
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

      {/* Carousel for Responses Comparison */}
      {slides.length > 0 && (
      <Paper sx={{ p: 2, width: "100%" }} elevation={3}>
        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            Responses Comparison
          </Typography>
          <Carousel
            slides={slides.map((slide, idx) => ({
              content: (
                <Box key={idx} sx={{ padding: '20px' }}>
                  <Typography variant="h6" gutterBottom>
                    {slide.question}
                  </Typography>
                  <Grid container spacing={2} alignItems="center">
                    {/* User A's Answer */}
                    <Grid item xs={5}>
                      <Paper sx={{ p: 2 }}>
                        <Typography variant="subtitle1" gutterBottom>
                          User A
                        </Typography>
                        <Typography variant="body2">{(slide.userAResponse * 100).toFixed(0)}%</Typography>
                        <LinearProgress color="secondary" variant="determinate" value={slide.userAResponse * 100} />
                        <LinearProgress color="secondary" variant="determinate" value={slide.userAResponse * 100} />
                        {slide.subtextA && (
                          <Typography variant="caption" color="text.secondary">
                            {slide.subtextA}
                          </Typography>
                        )}
                      </Paper>
                    </Grid>

                    {/* Compatibility Chart */}
                    <Grid item xs={2}>
                      <Box textAlign="center">
                        <Typography variant="body2">Compatibility</Typography>
                        <Typography variant="h6">{slide.compatibilityPercent}%</Typography>
                      </Box>
                    </Grid>

                    {/* User B's Answer */}
                    <Grid item xs={5}>
                      <Paper sx={{ p: 2 }}>
                        <Typography variant="subtitle1" gutterBottom>
                          User B
                        </Typography>
                        <Typography variant="body2">{(slide.userBResponse * 100).toFixed(0)}%</Typography>
                        {slide.subtextB && (
                          <Typography variant="caption" color="text.secondary">
                            {slide.subtextB}
                            <LinearProgress color="secondary" variant="determinate" value={slide.userBResponse * 100} />
                           <LinearProgress color="secondary" variant="determinate" value={slide.userBResponse * 100} />
                          </Typography>
                           
                        )}
                      </Paper>
                    </Grid>
                  </Grid>
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
          {/* Navigation Buttons */}
          {/* <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="contained" onClick={handlePrevStage} disabled={currentStage === 0}>
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleNextStage}
              disabled={currentStage === stages.length - 1}
            >
              Next
            </Button>
          </Box> */}
        </Box>
        </Paper>
      )}

        {/* Modal for Matrix selection */}
        <Modal /*sx={{position: 'relative', top: '50px', left: '50px'}}*/ open={openTypeModalA} onClose={handleCloseTypeModalA}>
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
          <Box sx={{
            marginLeft: '10%',
            marginTop: '5%',
            marginBottom: '5%',
            marginRight: '5%',
          }}>
            <Typography variant="h6" gutterBottom>
              Select Your Type Here
            </Typography>
            <Typography variant="body2" gutterBottom>
            Use this as a preset if you already know your type!
            </Typography>
            <Matrix onSelectType={handleMatrixSelectA} width={isMobile ? '60%' : '90%'}/>
            <Box sx={{position:'relative', right:'50px'}} mt={2} display="flex" justifyContent="center">
            <Button variant="contained" color="secondary" onClick={() => handleMatrixSelectA('XXXX')}>
                I (don't) know my type!
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

 {/* Modal for Matrix selection */}
 <Modal /*sx={{position: 'relative', top: '50px', left: '50px'}}*/ open={openTypeModalB} onClose={handleCloseTypeModalB}>
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
          <Box sx={{
            marginLeft: '10%',
            marginTop: '5%',
            marginBottom: '5%',
            marginRight: '5%',
          }}>
            <Typography variant="h6" gutterBottom>
              Select Your Type Here
            </Typography>
            <Typography variant="body2" gutterBottom>
            Use this as a preset if you already know your type!
            </Typography>
            <Matrix onSelectType={handleMatrixSelectB} width={isMobile ? '60%' : '90%'}/>
            <Box sx={{position:'relative', right:'50px'}} mt={2} display="flex" justifyContent="center">
            <Button variant="contained" color="secondary" onClick={() => handleMatrixSelectB('XXXX')}>
                I (don't) know my type!
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      {/* Premium Modal */}
      <PremiumModal
        open={premiumModalOpen}
        onClose={() => setPremiumModalOpen(false)}
        title='Find out your compatibility now!'
        description='for only €0.99 find out how compatible you are with your partner!'
        price={0.99}
        handlePaymentSuccess={handlePaymentSuccess}
      />

      {/* Modals for Link Inputs */}
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
            Enter User A's Profile Link
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
            Enter User B's Profile Link
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
