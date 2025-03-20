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
  matchMBTI,
  matchMBTIType,
  MBTIProfiles,
  pearsonCorrelationBigFive,
  pearsonProfile,
  longStages,
longStatements,
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
import { statements, stages as shortStages } from '../utils/mbtiMapping'; // Importing original for reference

const LongBigFiveQuestionnaireHelmet: React.FC = () => (
  <Helmet>
    <title>Discover Your Personality with the TRPI Test (Long Form)</title>
    <meta
      name="description"
      content="Take the extended TRPI Assessment Tool for a more detailed personality analysis, explore Big Five traits, and learn how trauma responses shape your personality. Start your journey today on TraumaIndicator.com!"
    />
    <meta
      property="og:title"
      content="Discover Your Personality with the TRPI Test (Long Form)"
    />
    <meta
      property="og:description"
      content="Uncover your true self with the extended TRPI Test. Analyze your Big Five traits with more granularity and discover how your personality aligns with 4F trauma responses. Take the test now on TraumaIndicator.com!"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://traumaindicator.com/#/long-test" // Update URL if needed
    />
    <meta
      property="og:image"
      content="https://traumaindicator.com/logo.png"
    />
  </Helmet>
);

const LongBigFiveQuestionnaire: React.FC<{ onComplete: (responses: any) => void }> = ({
  onComplete,
}) => {
  const navigate = useNavigate();

  const initialResponses = () => {
    console.log(longStatements)

    if(localStorage.getItem('longResponses')) {
      return JSON.parse(localStorage.getItem('longResponses')  || '')
    }
    return longStatements.reduce((acc, s) => {
    if (!acc[s.trait]) acc[s.trait] = [];
    acc[s.trait].push(0.500001);
    return acc;
  }, {} as { [trait: string]: number[]})
};

  const [responses, setResponses] = useState(initialResponses)
  const [currentStage, setCurrentStage] = useState(parseInt(localStorage.getItem('longLastStage') || "0"));
  const [lastStage, setLastStage] = useState(parseInt(localStorage.getItem('longStage')|| "0"))
  const [primary4FType, setPrimary4FType] = useState<string | null>(null);
  const [matchedMBTIType, setMatchedMBTIType] = useState<string | null>(null);
  const [accuracy, setAccuracy] = useState<number>(0);
  const [list, setList] = useState<Record<any, any>>();
  const [matchedType, setMatchedType] = useState<string | null>(null);
  const [selectedMbtiType, setSelectedMbtiType] = useState<string | null>(null);
  const [selectedStatement, setSelectedStatement] = useState<string | null>(null)
  const [premiumModalOpen, SetPremiumModalOpen] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState(false); // Modal is pre-opened by default
  const [submitted, setSubmitted] = useState<boolean>(false)
  const type = typesData.find(t => t.type === matchedMBTIType);

    

  const unlock = () => {
   setLastStage(0)
   setCurrentStage(0)
  //  setResponses(longStatements.reduce((acc, s) => {
  //   if (!acc[s.trait]) acc[s.trait] =;
  //   acc[s.trait].push(0.5);
  //   return acc;
  // }, {} as { [trait: string]: number}));
  // }
  }

  const reset = () => {
    console.log(longStatements)
    setLastStage(0)
    setCurrentStage(0)
    setResponses(longStatements.reduce((acc, s) => {
     if (!acc[s.trait]) acc[s.trait] = [];
     acc[s.trait].push(0.500001);
     return acc;
   }, {} as { [trait: string]: number[]}));
   localStorage.removeItem('longResponses');
   localStorage.removeItem('longStage');
   localStorage.removeItem('longLastStage');
console.log(responses)
   }



  const setRandomly = () => {
    const stageResponses = longStages.slice(lastStage, longStages.length).flat();

    console.log(stageResponses)
    const randomResponses = stageResponses.reduce((acc, s) => {
      if (!acc[s.trait]) acc[s.trait] = responses[s.trait].slice(0, lastStage ? lastStage : lastStage); // Adjusted slice end
      acc[s.trait].push(Math.random());
      return acc;
    }, {} as { [trait: string]: number[]});
    setResponses(((prevResponses: any) => {
      //console.log(prevResponses, randomResponses);
      return {...prevResponses, ...randomResponses}
    }))
   // setLastStage(0)

   const weightedScores = Object.keys(responses).reduce((acc, trait) => {
    const traitScores = responses[trait].map((score: any, i: any) =>
      score * (getStatement(trait, i).weight || 1)
    );
    acc[trait] = traitScores.reduce((sum: any, score: any) => sum + score, 0) / traitScores.length;
    return acc;
  }, {} as { [trait: string]: number });
    const primary4F = determinePrimary4FType(weightedScores);

    const mbtiType = matchMBTI(weightedScores )//matchMBTIType(weightedScores, primary4F );
    const type = matchMBTIType(weightedScores, primary4F, false);

    setPrimary4FType(primary4F);
    setMatchedMBTIType(mbtiType.type);
    setAccuracy((mbtiType.scores as any)[mbtiType.type].score);
      setList(mbtiType.scores);
    setMatchedType(type);
  }

  const getSubtext = (trait: string, index: number, value: number) => {
    const statement = longStatements.filter((s) => s.trait === trait)[index];
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
    (event: Event, value: number | number[], activeThumb: number) => { // Changed type of value to number
     // //console.log('handleSliderChange',  currentStage, lastStage)
      if(currentStage < lastStage) {
        const sub = getSubtext(trait, index, responses[trait][index] as number);

        setSelectedStatement(sub)
        return;
      }
console.log(trait, index, value)
console.log(responses)
      setResponses((prev: any) => {
        const updatedResponses = { ...prev };
        updatedResponses[trait][index] = value;
        const sub = getSubtext(trait, index, value as number);
        setSelectedStatement(sub)

        localStorage.setItem('longResponses', JSON.stringify(updatedResponses))
        return updatedResponses;
      });
    };

  const handleNext = () => {
    //console.log('current stage first: ', currentStage )
    //console.log('isCurrentStage: ', currentStage, lastStage);
    window.scrollTo(0, 0);
    if (currentStage < longStages.length - 1) {
      setCurrentStage(currentStage + 1);
      localStorage.setItem('longStage', (currentStage + 1).toString());

      const stageAnswers: any = longStages[currentStage].map((statement, index) => {
        const trait = statement.trait;
        const indexInTrait = determineIndex(currentStage, statement.trait, index);
        return responses[trait]?.[indexInTrait];
      });
      console.log(stageAnswers);
      const changed = stageAnswers.every((answer: number) => answer !== 0.500001);

      if(changed && currentStage + 1 > lastStage) {
        setLastStage(currentStage + 1);
        localStorage.setItem('longLastStage', (currentStage + 1).toString());

      }
      //console.log('current stage first: ', currentStage + 1)

    }
    setSelectedStatement(null)
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
      //localStorage.setItem('longStage', (currentStage - 1).toString());
    }
    setSelectedStatement(null)
  };

  const handleSubmit = async () => {
    setSubmitted(true)
    const weightedScores = Object.keys(responses).reduce((acc, trait) => {
      const traitScores = responses[trait].map((score: any, i: any) =>
        score * (getStatement(trait, i).weight || 1)
       );
      acc[trait] = traitScores.reduce((sum: any, score: any) => sum + score, 0) / traitScores.length;
      return acc;
    }, {} as { [trait: string]: number });

    const primary4F = determinePrimary4FType(weightedScores);
    const mbtiType = matchMBTI(weightedScores)//matchMBTIType(weightedScores, primary4F);
    const profile = typesData.find(t => t.type === mbtiType.type);
    const accuracy = (mbtiType.scores as any)[mbtiType.type].score
    setAccuracy(accuracy)
    setList(mbtiType.scores)
    const newJson = {
      type: mbtiType.type,
      primary4FType: primary4F,
      bigFiveResponses: weightedScores,
    }

    localStorage.removeItem('longResponses')
    localStorage.removeItem('longStage')
    localStorage.removeItem('longLastStage');
    const binId = await onComplete({ primary4F, mbtiType: mbtiType.type, selectedMbtiType, profile: weightedScores, description: '', responses: responses, statements: longStatements, accuracy, list: mbtiType.scores});
    navigate(`/result/${binId}`); // Ensure your result route can handle potentially different data
  };

  const progress = ((currentStage + 1) / longStages.length) * 100;
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenPremiumModal = () => SetPremiumModalOpen(true)
  const handleClosePremiumModal = () => SetPremiumModalOpen(false)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const flattenResponses = (responses: any) : number[] => {
    const allResponses : number[] = [];
    Object.keys(responses).forEach(trait => {
      if (Array.isArray(responses[trait])) {
        allResponses.push(...responses[trait]);
      }
    });
    return allResponses;
  }

  const handleMatrixSelect = (type: string) => {
    //console.log('Selected Type:', type)
    if (type === 'XXXX') {
      // If the user doesn't know their type, we can just log it or set states accordingly
     // setPrimary4FType(null);
      //setMatchedMBTIType('XXXX');
      //setMatchedType('XXXX');
      handleCloseModal();
      return;
    }

    const profile: any = MBTIProfiles.find((p) => p.name === type)?.traits;
    setSelectedMbtiType(type);
    if (profile) {
      //console.log(profile)
      const stageResponses = longStages.slice(0, longStages.length).flat();

    const updatedResponses = stageResponses.reduce((acc, s) => {
      if (!acc[s.trait]) acc[s.trait] = [];
      acc[s.trait].push(profile[s.trait]);
      return acc;
    }, {} as { [trait: string]: number[]});

      const resp = { ...responses };
      /* Object.keys(updatedResponses).forEach((trait) => {
        updatedResponses[trait] = updatedResponses[trait].map(
          () => profile[trait as keyof typeof profile]
        );
      }); */
      setResponses({...updatedResponses});
      //setLastStage(0)

      const primary4F = determinePrimary4FType(profile);
      const mbtiType = matchMBTI(profile)// matchMBTIType(profile, primary4F);
      //const typeNo4F = matchMBTIType(profile, primary4F,false);

      const typeNo4F = matchMBTI(profile)// matchMBTIType(profile, typeNo4F
      setPrimary4FType(primary4F);
      setMatchedMBTIType(mbtiType.type);
      setAccuracy((mbtiType.scores as any)[mbtiType.type].score);
      setList(mbtiType.scores);
      setMatchedType(typeNo4F.type);
    } else {
      setPrimary4FType(null);
      setMatchedMBTIType(null);
      setMatchedType(null);
    }
    handleCloseModal();
  };

  const getStatement = (trait: any, i: any) => {
    const stage = longStatements.filter((s) => s.trait === trait)
    const statement = stage[i]
    return statement

  }

const determineIndex = (currentStage: number, trait: string, index: number) : number => {
    if(trait === 'openness') {
       if(currentStage === 10) {
        console.log(responses[trait][index + 3])
         return index + 3
       }
       return index
     }
     return currentStage - 1
   }
 

  return (
    <Paper elevation={3} style={{ padding: 20, margin: '20px auto', maxWidth: isMobile ? 300 : 750, width: isMobile ? 300 : 750 }}>
     <LongBigFiveQuestionnaireHelmet/>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" gutterBottom>
          TRPI Assessment Tool
        </Typography>
        {isMobile ? (
          <Stack>
            {currentStage < lastStage && (
              <IconButton onClick={window.location.hostname === "localhost" ? unlock : handleOpenPremiumModal} color='primary'>
              <LockOpenIcon/>
            </IconButton>
            )}
             <IconButton onClick={reset} color='primary'>
            <RestartAlt/>
          </IconButton>
          <IconButton onClick={setRandomly} color="primary">
            <ShuffleOn />
          </IconButton>
          <IconButton onClick={handleOpenModal} color="primary">
            <SwitchAccount />
          </IconButton>
        </Stack>
        ) : (
          <Grid spacing={4}>
            {currentStage < lastStage && (
              <IconButton onClick={(window.location.hostname === "localhost" ? unlock : handleOpenPremiumModal)} color='primary'>
              <LockOpenIcon/>
            </IconButton>
            )}
             <IconButton onClick={reset} color='primary'>
            <RestartAlt/>
          </IconButton>
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
      <PremiumModal open={premiumModalOpen} onClose={handleClosePremiumModal} handlePaymentSuccess={unlock} price={0.99} title='Unlock Your Answers' description='Pay €0.99 to change your previous answers!'/>

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
      {longStages[currentStage].map((s: any, index: number) => (
        <Box key={`${s.trait}-${index}`} my={3}>
          <Typography variant="subtitle1" gutterBottom align='center'>
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
               value={responses[s.trait][determineIndex(currentStage, s.trait, index)]}
               onChange={handleSliderChange(s.trait, determineIndex(currentStage, s.trait, index))}
                max={1}
                step={0.01}
                color={`${currentStage < lastStage ? 'error' : 'primary'}`}
                sx={{color: `${currentStage < lastStage ? '#7705cc' : 'primary'}`}}
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
        <LinearProgress color="secondary" variant="determinate" value={progress} />
        <LinearProgress color="secondary" variant="determinate" value={progress} />
      </Box>

      {/* Navigation Buttons */}
      <Box display="flex" justifyContent="space-between" mt={3}>
        <Button onClick={handleBack} disabled={currentStage === 0}>
          Back
        </Button>
        {lastStage >= 7 && matchedMBTIType && matchedMBTIType !== 'XXXX' && type && (
          <Tooltip title={`${type.mode} \n ${(accuracy).toFixed(1)}%`}>
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
        {currentStage === longStages.length - 1 ? (
          <Button onClick={handleSubmit} variant="contained" color="primary" disabled={submitted}>
            {submitted ? 'Submitted' : 'Submit'}
             
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

export default LongBigFiveQuestionnaire;