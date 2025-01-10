import React, { useState } from 'react';
import {
  Grid,
  IconButton,
  Box,
  Typography,
  Slider,
  Button,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  LinearProgress,
  Modal,
  useMediaQuery,
  useTheme,
  Tooltip,
  Stack
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  determinePrimary4FType,
  matchMBTIType,
  MBTIProfiles,
} from '../utils/mbtiMapping';
import Matrix from './Matrix';
import { 
  HelpOutline,  
  Close,
  Check,
  SwitchAccount,
  ShuffleOn,
  RestartAlt,
  RestartAltOutlined
} from '@mui/icons-material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { guid } from '../utils/guid';
import { typesData } from '../utils/typesData';
import { Helmet } from 'react-helmet';
import PremiumModal from './PremiumModal';
import { statements, stages } from '../utils/mbtiMapping';

const BigFiveQuestionnaireHelmet: React.FC = () => (
  <Helmet>
    <title>Discover Your Personality with the TRPI Test</title>
    <meta
      name="description"
      content="Take the TRPI Assessment Tool to uncover your personality type, explore Big Five traits, and learn how trauma responses shape your personality. Start your journey today on TraumaIndicator.com!"
    />
    <meta
      property="og:title"
      content="Discover Your Personality with the TRPI Test"
    />
    <meta
      property="og:description"
      content="Uncover your true self with the TRPI Test. Analyze your Big Five traits and discover how your personality aligns with 4F trauma responses. Take the test now on TraumaIndicator.com!"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://traumaindicator.com/#/test"
    />
    <meta
      property="og:image"
      content="https://traumaindicator.com/logo.png"
    />
  </Helmet>
);



const BigFiveQuestionnaire: React.FC<{ onComplete: (responses: any) => void }> = ({
  onComplete,
}) => {
  const navigate = useNavigate();

  const initialResponses = () => {
    if(localStorage.getItem('responses')) {
      return JSON.parse(localStorage.getItem('responses')  || '')
    }
    return statements.reduce((acc, s) => {
    if (!acc[s.trait]) acc[s.trait] = [];
    acc[s.trait].push(0.5);
    return acc;
  }, {} as { [trait: string]: number[] })
};

  const [responses, setResponses] = useState(initialResponses)
  const [currentStage, setCurrentStage] = useState(parseInt(localStorage.getItem('stage') || "0"));
  const [lastStage, setLastStage] = useState(parseInt(localStorage.getItem('stage')|| "0"))
  const [primary4FType, setPrimary4FType] = useState<string | null>(null);
  const [matchedMBTIType, setMatchedMBTIType] = useState<string | null>(null);
  const [matchedType, setMatchedType] = useState<string | null>(null);
  const [selectedMbtiType, setSelectedMbtiType] = useState<string | null>(null);
  const [selectedStatement, setSelectedStatement] = useState<string | null>(null)
  const [premiumModalOpen, SetPremiumModalOpen] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState(false); // Modal is pre-opened by default
  const type = typesData.find(t => t.type === matchedMBTIType);


  const reset = () => {
   setLastStage(0)
   setCurrentStage(0)
  //  setResponses(statements.reduce((acc, s) => {
  //   if (!acc[s.trait]) acc[s.trait] = [];
  //   acc[s.trait].push(0.5);
  //   return acc;
  // }, {} as { [trait: string]: number[] }));
  // }
  }


  const setRandomly = () => {
    const randomResponses = statements.reduce((acc, s) => {
      if (!acc[s.trait]) acc[s.trait] = [];
      acc[s.trait].push(Math.random());
      return acc;
    }, {} as { [trait: string]: number[] });
    setResponses(randomResponses)
    setLastStage(0)

    const weightedScores = Object.keys(randomResponses).reduce(
      (acc, traitKey) => {
        const traitScores = randomResponses[traitKey].map((score, i) => 
          score * (statements.find(s => s.trait === traitKey && statements.indexOf(s) === i)?.weight || 1)
        );
        acc[traitKey] = traitScores.reduce((sum, score) => sum + score, 0) / traitScores.length;
        return acc;
      },
      {} as { [trait: string]: number }
    );
    const primary4F = determinePrimary4FType(weightedScores);
    const mbtiType = matchMBTIType(weightedScores, primary4F);
    const type = matchMBTIType(weightedScores, primary4F, false);

    setPrimary4FType(primary4F);
    setMatchedMBTIType(mbtiType);
    setMatchedType(type);
  }

  const getSubtrait = (trait: string, index: number, value: number) => {
    const statement = statements.filter((s) => s.trait === trait)[index];
    if (!statement) return null;

    const percentage = Math.round(value * 100);
    const range = Object.keys(statement.subtext).find((key) => {
      const [min, max] = key.split('-').map(Number);
      return percentage >= min && percentage <= max;
    });

    return range ? (statement.subtext as any)[range]?.text : null;
  };

  const handleSliderChange =
    (trait: string, index: number) =>
    (event: Event, value: number | number[], activeThumb: number) => {
     // console.log('handleSliderChange',  currentStage, lastStage)
      if(currentStage !== lastStage) {
        const sub = getSubtrait(trait, index, responses[trait][index] as number);

        setSelectedStatement(sub)
        return;
      }
      setResponses((prev: any) => {
        const updatedResponses = { ...prev };
        updatedResponses[trait][index] = value as number;

        
        const weightedScores = Object.keys(updatedResponses).reduce(
          (acc, traitKey) => {
            const traitScores = updatedResponses[traitKey].map((score: any, i: any) => 
              score * (statements.find(s => s.trait === traitKey && statements.indexOf(s) === i)?.weight || 1)
            );
            acc[traitKey] = traitScores.reduce((sum: any, score: any) => sum + score, 0) / traitScores.length;
            return acc;
          },
          {} as { [trait: string]: number }
        );

        const primary4F = determinePrimary4FType(weightedScores);
        const mbtiType = matchMBTIType(weightedScores, primary4F);
        const type = matchMBTIType(weightedScores, primary4F,false);
        const sub = getSubtrait(trait, index, value as number);

        setSelectedStatement(sub)
        setPrimary4FType(primary4F);
        setMatchedMBTIType(mbtiType);
        setMatchedType(type);

        localStorage.setItem('responses', JSON.stringify(updatedResponses))
        return updatedResponses;
      });
    };

  const handleNext = () => {
    console.log('current stage first: ', currentStage )
    console.log('isCurrentStage: ', currentStage, lastStage);
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1);
      if(currentStage + 1 > lastStage) {
        setLastStage(currentStage + 1);
        localStorage.setItem('stage', (currentStage + 1).toString());
      }
      console.log('current stage first: ', currentStage + 1)

    }
    setSelectedStatement(null)
  };

  const handleBack = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
      //localStorage.setItem('stage', (currentStage - 1).toString());
    }
    setSelectedStatement(null)
  };

  const handleSubmit = async () => {
    const weightedScores = Object.keys(responses).reduce((acc, trait) => {
      const traitScores = responses[trait].map((score: any, i: any) => 
        score * (statements.find(s => s.trait === trait && statements.indexOf(s) === i)?.weight || 1)
      );
      acc[trait] = traitScores.reduce((sum: any, score: any) => sum + score, 0) / traitScores.length;
      return acc;
    }, {} as { [trait: string]: number });

    const primary4F = determinePrimary4FType(weightedScores);
    const mbtiType = matchMBTIType(weightedScores, primary4F);
    const profile = typesData.find(t => t.type === mbtiType);

    const newJson = {
      type: mbtiType,
      primary4FType: primary4F,
      bigFiveResponses: weightedScores,
    }
    localStorage.setItem(guid(), JSON.stringify(newJson));
    localStorage.removeItem('responses')
    localStorage.removeItem('stage')
    const binId = await onComplete({ primary4F, mbtiType, selectedMbtiType, profile: weightedScores, description: '', responses: Object.values(responses).flat()});
    navigate(`/result/${binId}`);
  };

  const progress = ((currentStage + 1) / stages.length) * 100;
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenPremiumModal = () => SetPremiumModalOpen(true)
  const handleClosePremiumModal = () => SetPremiumModalOpen(false)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMatrixSelect = (type: string) => {
    console.log('Selected Type:', type)
    if (type === 'XXXX') {
      // If the user doesn't know their type, we can just log it or set states accordingly
     // setPrimary4FType(null);
      //setMatchedMBTIType('XXXX');
      //setMatchedType('XXXX');
      handleCloseModal();
      return;
    }

    const profile = MBTIProfiles.find((p) => p.name === type)?.traits;
    setSelectedMbtiType(type);
    if (profile) {
      console.log(profile)
      const updatedResponses = { ...responses };
      Object.keys(updatedResponses).forEach((trait) => {
        updatedResponses[trait] = updatedResponses[trait].map(
          () => profile[trait as keyof typeof profile]
        );
      });
      setResponses(updatedResponses);
      setLastStage(0)

      const primary4F = determinePrimary4FType(profile);
      const mbtiType = matchMBTIType(profile, primary4F);
      const typeNo4F = matchMBTIType(profile, primary4F,false);

      setPrimary4FType(primary4F);
      setMatchedMBTIType(mbtiType);
      setMatchedType(typeNo4F);
    } else {
      setPrimary4FType(null);
      setMatchedMBTIType(null);
      setMatchedType(null);
    }
    handleCloseModal();
  };

  return (
    <Paper elevation={3} style={{ padding: 20, margin: '20px auto', maxWidth: isMobile ? 300 : 750, width: isMobile ? 300 : 750 }}>
     <BigFiveQuestionnaireHelmet/>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" gutterBottom>
          TRPI Assessment Tool
        </Typography>
        {isMobile ? (
          <Stack>
            {currentStage !== lastStage && (
              <IconButton onClick={handleOpenPremiumModal} color='primary'>
              <LockOpenIcon/>
            </IconButton>
            )}
          <IconButton onClick={setRandomly} color="primary">
            <ShuffleOn />
          </IconButton>
          <IconButton onClick={handleOpenModal} color="primary">
            <SwitchAccount />
          </IconButton>
        </Stack>
        ) : (
          <Grid spacing={3}>
            {currentStage !== lastStage && (
              <IconButton onClick={(handleOpenPremiumModal)} color='primary'>
              <LockOpenIcon/>
            </IconButton>
            )}
          <IconButton onClick={setRandomly} color="primary">
            <ShuffleOn />
          </IconButton>
          <IconButton onClick={handleOpenModal} color="primary">
            <SwitchAccount />
          </IconButton>
        </Grid>
        )
      }
      </Box>
      {/* Modal for Matrix selection */}
      <PremiumModal open={premiumModalOpen} onClose={handleClosePremiumModal} handlePaymentSuccess={reset} price={0.99} title='Unlock Your Answers' description='Pay €0.99 to change your previous answers!'/>

      <Modal open={openModal} onClose={handleCloseModal}>
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
          <Typography sx={{marginRight:"50px"}} variant="h6" gutterBottom>
            Select Your Type Here
          </Typography>
          <Typography variant="body2" gutterBottom>
            Use this as a preset if you already know your type!
          </Typography>
          <Matrix onSelectType={handleMatrixSelect} width={isMobile ? '60%' : '90%'}/>
          <Box sx={{position:'relative', right:'50px'}} mt={2} display="flex" justifyContent="center">
            <Button variant="contained" color="secondary" onClick={() => handleMatrixSelect('XXXX')}>
              I (don't) know my type!
            </Button>
          </Box>
          </Box>
        </Box>
      </Modal>

     

      {/* Display current stage statements */}
      {stages[currentStage].map((s, index) => (
        <Box key={`${s.trait}-${index}`} my={3}>
          <Typography variant="subtitle1" gutterBottom>
            {s.text}
          </Typography>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Typography variant="subtitle2" gutterBottom>
                <Close/>
              </Typography>
            </Grid>
            <Grid item xs>
              {/* The index mapping here depends on how you originally mapped sliders. 
                  If you notice any indexing issues, adjust accordingly. */}
              <Slider
               value={responses[s.trait][s.trait === 'openness' ? index : currentStage - 1]}
               onChange={handleSliderChange(s.trait, s.trait === 'openness' ? index : currentStage - 1)}
                max={1}
                step={0.01}
                color={`${currentStage !== lastStage ? 'error' : 'primary'}`}
                sx={{color: `${currentStage !== lastStage ? '#7705cc' : 'primary'}`}}
              />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" gutterBottom>
                <Check/>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
      
      <Box display={'flex'} justifyContent={'center'} my={3}>
        {/* Display matched MBTI type or anything else as needed */}
        <Typography variant='h6' fontWeight='bold' gutterBottom>
          {selectedStatement && '"'}{selectedStatement}{selectedStatement && '"'}
        </Typography>
      </Box>

      {/* Progress Bar */}
      <Box my={3}>
        <LinearProgress color="info" variant="determinate" value={progress} />
      </Box>

      {/* Navigation Buttons */}
      <Box display="flex" justifyContent="space-between" mt={3}>
        <Button onClick={handleBack} disabled={currentStage === 0}>
          Back
        </Button>
        {matchedMBTIType && matchedMBTIType !== 'XXXX' && type && (
          <Tooltip title={type.mode}>
            <Box
              bgcolor={type.bgColor}
              color="white"
              p={isMobile ? 1 : 2}
              textAlign="center"
              borderRadius={2}
              style={{ textDecoration: 'none' }}
              sx={{ fontSize: isMobile ? '0.75rem' : '1rem' }}
            >
              <Typography variant="subtitle1">{type.type}</Typography>
            </Box>
          </Tooltip>
        )}
        {currentStage === stages.length - 1 ? (
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        ) : (
          <Button onClick={handleNext} variant="contained" color="primary">
            Next
          </Button>
        )}
      </Box>
    </Paper>
  );
};

export default BigFiveQuestionnaire;
