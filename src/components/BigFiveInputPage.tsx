import React, { useState } from 'react';
import {
  Typography,
  Box,
  Container,
  Slider,
  Button,
  Paper,
  Grid,
  Tooltip,
  useMediaQuery,
  useTheme,
  Modal,
  IconButton
} from '@mui/material';
import {
  ShuffleOn,
  SwitchAccount
} from '@mui/icons-material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoodBadIcon from '@mui/icons-material/MoodBad';

import { matchMBTIType as calculateMbtiType, determinePrimary4FType, matchMBTI, MBTIProfiles, pearsonProfile } from '../utils/mbtiMapping';
import { useNavigate } from 'react-router-dom';
import { guid } from '../utils/guid';
import { typesData } from './typesData';
import Matrix from './Matrix';

type Trait = 'Openness' | 'Conscientiousness' | 'Extraversion' | 'Agreeableness' | 'Neuroticism';

const traitInfo: { 
  label: Trait; 
  icon: React.ReactNode; 
  color: string; 
  subtext: Record<string, { text: string; subtraits: Record<string, string> }>;
}[] = [
  {
    label: 'Openness',
    icon: <EmojiObjectsIcon />,
    color: '#1E90FF',
    subtext: {
      '0-10': { text: 'I am slightly open to new ideas.', subtraits: { curiosity: 'slight', creativity: 'low' } },
      '10-20': { text: 'I have a mild interest in exploring new perspectives.', subtraits: { curiosity: 'mild', creativity: 'emerging' } },
      '20-30': { text: 'I sometimes consider new ideas.', subtraits: { curiosity: 'moderate', creativity: 'developing' } },
      '30-40': { text: 'I moderately explore new perspectives.', subtraits: { curiosity: 'engaged', creativity: 'balanced' } },
      '40-50': { text: 'I am fairly open to exploring different ideas.', subtraits: { curiosity: 'notable', creativity: 'active' } },
      '50-60': { text: 'I am quite open to considering new perspectives.', subtraits: { curiosity: 'high', creativity: 'evident' } },
      '60-70': { text: 'I regularly explore new ideas and perspectives.', subtraits: { curiosity: 'strong', creativity: 'flourishing' } },
      '70-80': { text: 'I am highly open to trying different approaches.', subtraits: { curiosity: 'keen', creativity: 'profound' } },
      '80-90': { text: 'I am extremely open to all kinds of ideas.', subtraits: { curiosity: 'exceptional', creativity: 'dynamic' } },
      '90-100': { text: 'I am exceptionally open to exploring and embracing new perspectives.', subtraits: { curiosity: 'superior', creativity: 'innovative' } },
    },
  },
  {
    label: 'Conscientiousness',
    icon: <CheckCircleIcon />,
    color: '#32CD32',
    subtext: {
      '0-10': { text: 'I am slightly organized and dependable.', subtraits: { organization: 'minimal', reliability: 'low' } },
      '10-20': { text: 'I have a mild tendency to stay organized.', subtraits: { organization: 'basic', reliability: 'emerging' } },
      '20-30': { text: 'I sometimes act in an organized manner.', subtraits: { organization: 'developing', reliability: 'moderate' } },
      '30-40': { text: 'I moderately focus on organization and dependability.', subtraits: { organization: 'balanced', reliability: 'consistent' } },
      '40-50': { text: 'I am fairly organized and dependable.', subtraits: { organization: 'solid', reliability: 'notable' } },
      '50-60': { text: 'I am quite focused on staying dependable.', subtraits: { organization: 'high', reliability: 'trustworthy' } },
      '60-70': { text: 'I regularly stay organized and follow through.', subtraits: { organization: 'strong', reliability: 'dependable' } },
      '70-80': { text: 'I am highly dependable and maintain strong organization.', subtraits: { organization: 'keen', reliability: 'exceptional' } },
      '80-90': { text: 'I am extremely reliable in my actions.', subtraits: { organization: 'exceptional', reliability: 'superior' } },
      '90-100': { text: 'I am exceptionally organized and dependable in all aspects.', subtraits: { organization: 'outstanding', reliability: 'perfect' } },
    },
  },
  {
    label: 'Extraversion',
    icon: <PeopleIcon />,
    color: '#FF8C00',
    subtext: {
      '0-10': { text: 'I am slightly social and outgoing.', subtraits: { assertiveness: 'low', sociability: 'minimal' } },
      '10-20': { text: 'I have a mild tendency to engage with others.', subtraits: { assertiveness: 'emerging', sociability: 'basic' } },
      '20-30': { text: 'I sometimes enjoy social activities.', subtraits: { assertiveness: 'moderate', sociability: 'developing' } },
      '30-40': { text: 'I moderately engage in social situations.', subtraits: { assertiveness: 'balanced', sociability: 'consistent' } },
      '40-50': { text: 'I am fairly outgoing and social.', subtraits: { assertiveness: 'notable', sociability: 'reliable' } },
      '50-60': { text: 'I am quite enthusiastic in social settings.', subtraits: { assertiveness: 'strong', sociability: 'dependable' } },
      '60-70': { text: 'I regularly enjoy interacting with others.', subtraits: { assertiveness: 'keen', sociability: 'exceptional' } },
      '70-80': { text: 'I am highly energized by social activities.', subtraits: { assertiveness: 'high', sociability: 'superior' } },
      '80-90': { text: 'I am extremely outgoing and thrive socially.', subtraits: { assertiveness: 'exceptional', sociability: 'flourishing' } },
      '90-100': { text: 'I am exceptionally social and enjoy constant engagement.', subtraits: { assertiveness: 'perfect', sociability: 'outstanding' } },
    },
  },
  {
    label: 'Agreeableness',
    icon: <FavoriteIcon />,
    color: '#FF69B4',
    subtext: {
      '0-10': { text: 'I am slightly empathetic and considerate.', subtraits: { compassion: 'low', cooperation: 'minimal' } },
      '10-20': { text: 'I have a mild tendency to care for others.', subtraits: { compassion: 'emerging', cooperation: 'basic' } },
      '20-30': { text: 'I sometimes consider others’ feelings.', subtraits: { compassion: 'moderate', cooperation: 'developing' } },
      '30-40': { text: 'I moderately empathize with others.', subtraits: { compassion: 'balanced', cooperation: 'consistent' } },
      '40-50': { text: 'I am fairly caring and considerate.', subtraits: { compassion: 'notable', cooperation: 'reliable' } },
      '50-60': { text: 'I am quite compassionate and understanding.', subtraits: { compassion: 'high', cooperation: 'trustworthy' } },
      '60-70': { text: 'I regularly prioritize others’ feelings.', subtraits: { compassion: 'strong', cooperation: 'dependable' } },
      '70-80': { text: 'I am highly empathetic and considerate.', subtraits: { compassion: 'keen', cooperation: 'exceptional' } },
      '80-90': { text: 'I am extremely caring and attuned to others’ needs.', subtraits: { compassion: 'exceptional', cooperation: 'superior' } },
      '90-100': { text: 'I am exceptionally understanding and empathetic towards everyone.', subtraits: { compassion: 'perfect', cooperation: 'outstanding' } },
    },
  },
  {
    label: 'Neuroticism',
    icon: <MoodBadIcon />,
    color: '#DC143C',
    subtext: {
      '0-10': { text: 'I am slightly affected by emotions and stress.', subtraits: { anxiety: 'low', emotional_stability: 'high' } },
      '10-20': { text: 'I have a mild tendency to feel emotions intensely.', subtraits: { anxiety: 'mild', emotional_stability: 'moderate' } },
      '20-30': { text: 'I sometimes feel emotions and stress strongly.', subtraits: { anxiety: 'moderate', emotional_stability: 'balanced' } },
      '30-40': { text: 'I moderately experience emotional intensity.', subtraits: { anxiety: 'balanced', emotional_stability: 'notable' } },
      '40-50': { text: 'I am fairly affected by stress and emotions.', subtraits: { anxiety: 'notable', emotional_stability: 'consistent' } },
      '50-60': { text: 'I am quite prone to intense emotional experiences.', subtraits: { anxiety: 'strong', emotional_stability: 'low' } },
      '60-70': { text: 'I regularly experience strong emotions.', subtraits: { anxiety: 'keen', emotional_stability: 'minimal' } },
      '70-80': { text: 'I am highly sensitive to stress and emotional fluctuations.', subtraits: { anxiety: 'high', emotional_stability: 'rare' } },
      '80-90': { text: 'I am extremely affected by emotional experiences.', subtraits: { anxiety: 'exceptional', emotional_stability: 'rare' } },
      '90-100': { text: 'I am exceptionally sensitive to stress and emotions.', subtraits: { anxiety: 'superior', emotional_stability: 'exceptional' } },
    },
  },
];


interface BigFiveValues {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
}

const BigFiveInputPage: React.FC<{ onComplete: (responses: any) => void }> = ({ onComplete }) => {
  const navigate = useNavigate();

  // State to store the slider values as percentages (0-100)
  const [traits, setTraits] = useState<Record<Trait, number>>({
    Openness: 50,
    Conscientiousness: 50,
    Extraversion: 50,
    Agreeableness: 50,
    Neuroticism: 50,
  });

  const [mbtiType, setMbtiType] = useState<string | null>(null);
  const [selectedMbtiType, setSelectedMbtiType] = useState<string | null>(null);
  const [selectedStatement, setSelectedStatement] = useState<string | null>(null)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Modal state
  const [openModal, setOpenModal] = useState(false);
  
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // Helper function to convert the current trait values into the bigFive object (0.0 - 1.0)
  const getBigFiveData = (): BigFiveValues => ({
    openness: traits.Openness / 100,
    conscientiousness: traits.Conscientiousness / 100,
    extraversion: traits.Extraversion / 100,
    agreeableness: traits.Agreeableness / 100,
    neuroticism: traits.Neuroticism / 100,
  });

  const getSubtext = (trait: string, value: number) => {
    const statement = traitInfo.filter((s) => { 
      console.log(s.label === trait, s.label, trait)
      return s.label === trait})[0];
    if (!statement) return null;

    const percentage = value;
    const range = Object.keys(statement.subtext).find((key) => {
      const [min, max] = key.split('-').map(Number);
      return percentage >= min && percentage <= max;
    });

    return range ? (statement.subtext as any)[range]?.text : null;
  };

  // Recalculate MBTI type when a trait changes
  const handleSliderChange = (trait: Trait) => (_event: Event, newValue: number | number[]) => {
    const value = newValue as number;
    const sub = getSubtext(trait, traits[trait] as number);

    setSelectedStatement(sub)
    setTraits((prev) => {
      const updatedTraits = { ...prev, [trait]: value };
      const bigFiveData = {
        openness: updatedTraits.Openness / 100,
        conscientiousness: updatedTraits.Conscientiousness / 100,
        extraversion: updatedTraits.Extraversion / 100,
        agreeableness: updatedTraits.Agreeableness / 100,
        neuroticism: updatedTraits.Neuroticism / 100,
      };

      const primary4F = determinePrimary4FType(bigFiveData);
      const calculatedType = matchMBTI(bigFiveData)// calculateMbtiType(bigFiveData, primary4F, true);
      setMbtiType(calculatedType.type);
      return updatedTraits;
    });
  };

  // Set random trait values
  const setRandomly = () => {
    const randomTraits: Record<Trait, number> = {
      Openness: Math.floor(Math.random() * 100),
      Conscientiousness: Math.floor(Math.random() * 100),
      Extraversion: Math.floor(Math.random() * 100),
      Agreeableness: Math.floor(Math.random() * 100),
      Neuroticism: Math.floor(Math.random() * 100),
    };
    setTraits(randomTraits);

    // Recalculate MBTI based on random traits
    const bigFiveData = {
      openness: randomTraits.Openness / 100,
      conscientiousness: randomTraits.Conscientiousness / 100,
      extraversion: randomTraits.Extraversion / 100,
      agreeableness: randomTraits.Agreeableness / 100,
      neuroticism: randomTraits.Neuroticism / 100,
    };
    const primary4F = determinePrimary4FType(bigFiveData);
    const calculatedType = matchMBTI(bigFiveData)//calculateMbtiType(bigFiveData, primary4F, true);
    setMbtiType(calculatedType.type);
  };

  // Handle selection from matrix modal
  const handleMatrixSelect = (selected: string) => {
    console.log('Selected Type:', selected);
    setSelectedMbtiType(selected);

    if (selected === 'XXXX') {
      // User doesn't know their type
      //setMbtiType('XXXX');
      handleCloseModal();
      return;
    }

    // If user selected a known type, load its profile and adjust traits
    const profile = MBTIProfiles.find((p) => p.name === selected)?.traits;
    if (profile) {
      // Convert profile traits (0.0-1.0) to percentage and update sliders
      const updatedTraits: Record<Trait, number> = {
        Openness: Math.round(profile.openness * 100),
        Conscientiousness: Math.round(profile.conscientiousness * 100),
        Extraversion: Math.round(profile.extraversion * 100),
        Agreeableness: Math.round(profile.agreeableness * 100),
        Neuroticism: Math.round(profile.neuroticism * 100),
      };

      setTraits(updatedTraits);

      const primary4F = determinePrimary4FType(profile);
      const calculatedType =  matchMBTI(profile)//calculateMbtiType(profile, primary4F, true);
      setMbtiType(calculatedType.type);
    } else {
      setMbtiType(null);
    }

    handleCloseModal();
  };

  // On submit, persist data and navigate to the result page
  const calculateType = async () => {
    const bigFiveData = getBigFiveData();
    const primary4F = determinePrimary4FType(bigFiveData);
    const calculatedType = matchMBTI(bigFiveData) //calculateMbtiType(bigFiveData, primary4F, true);
    setMbtiType(calculatedType.type);

    const newJson = {
      type: calculatedType.type,
      primary4FType: primary4F,
      bigFiveResponses: bigFiveData,
    };

    localStorage.setItem(guid(), JSON.stringify(newJson));

    const binId = await onComplete({
      profile: bigFiveData,
      selectedMbtiType: selectedMbtiType,
      mbtiType: calculatedType.type,
      primary4F,
    });
    navigate(`/result/${binId}`);
  };

  // Find the type data for styling the MBTI preview
  const currentTypeData = mbtiType ? typesData.find((t) => t.type === mbtiType) : null;

  return (
    <Container maxWidth="sm" sx={{ marginTop: '40px', textAlign: 'center' }}>
      <Paper elevation={4} sx={{ padding: '30px', borderRadius: '15px' }}>
        
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
          <IconButton onClick={setRandomly} color="primary" sx={{ marginRight: 1 }}>
              <ShuffleOn />
            </IconButton>
          </Box>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Enter Your Big Five Values
          </Typography>
          <Box>
            <IconButton onClick={handleOpenModal} color="primary">
              <SwitchAccount />
            </IconButton>
          </Box>
        </Box>

        <Typography variant="body1" sx={{ marginBottom: '30px', color: 'text.secondary' }}>
          Adjust the sliders to reflect your personality on each Big Five trait. These values help us determine your unique profile.
        </Typography>

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
                <Tooltip title={`${traits[label]}%`} arrow>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {traits[label]}%
                  </Typography>
                </Tooltip>
              </Box>
              <Slider
                value={traits[label]}
                onChange={handleSliderChange(label)}
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

        <Box display={'flex'} justifyContent={'center'} my={3}>
        {/* Display matched MBTI type or anything else as needed */}
        <Typography variant='h6' fontWeight='bold' gutterBottom>
          {selectedStatement && '"'}{selectedStatement}{selectedStatement && '"'}
        </Typography>
        </Box>
        {/* Display the currently matched MBTI type, if available */}
        {mbtiType && currentTypeData && (
          <Grid container spacing={1} justifyContent={'center'} marginTop={5}>
            <Box
              bgcolor={currentTypeData.bgColor}
              color="white"
              p={isMobile ? 1 : 2}
              textAlign="center"
              borderRadius={2}
              sx={{
                width: 75,
                fontSize: isMobile ? '0.75rem' : '1rem',
              }}
            >
              <Typography variant="subtitle1">{currentTypeData.type}</Typography>
            </Box>
          </Grid>
        )}
       
        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={calculateType}
            sx={{
              marginTop: { xs: '20px', sm: '0px' },
              padding: '10px 30px',
              borderRadius: '20px',
              fontWeight: 'bold',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            Submit
          </Button>
        </Box>
      </Paper>

      {/* Modal for Matrix selection */}
      <Modal /*sx={{position: 'relative', top: '50px', left: '50px'}}*/ open={openModal} onClose={handleCloseModal}>
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
            <Matrix onSelectType={handleMatrixSelect} width={isMobile ? '60%' : '90%'}/>
            <Box sx={{position:'relative', right:'50px'}} mt={2} display="flex" justifyContent="center">
            <Button variant="contained" color="secondary" onClick={() => handleMatrixSelect('XXXX')}>
                I (don't) know my type!
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default BigFiveInputPage;
