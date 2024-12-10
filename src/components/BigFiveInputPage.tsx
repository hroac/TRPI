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

import { matchMBTIType as calculateMbtiType, determinePrimary4FType, MBTIProfiles } from '../utils/mbtiMapping';
import { useNavigate } from 'react-router-dom';
import { guid } from '../utils/guid';
import { typesData } from './typesData';
import Matrix from './Matrix';

type Trait = 'Openness' | 'Conscientiousness' | 'Extraversion' | 'Agreeableness' | 'Neuroticism';

const traitInfo: { label: Trait; icon: React.ReactNode; color: string }[] = [
  { label: 'Openness', icon: <EmojiObjectsIcon />, color: '#1E90FF' },
  { label: 'Conscientiousness', icon: <CheckCircleIcon />, color: '#32CD32' },
  { label: 'Extraversion', icon: <PeopleIcon />, color: '#FF8C00' },
  { label: 'Agreeableness', icon: <FavoriteIcon />, color: '#FF69B4' },
  { label: 'Neuroticism', icon: <MoodBadIcon />, color: '#DC143C' },
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

  // Recalculate MBTI type when a trait changes
  const handleSliderChange = (trait: Trait) => (_event: Event, newValue: number | number[]) => {
    const value = newValue as number;
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
      const calculatedType = calculateMbtiType(bigFiveData, primary4F, false);
      setMbtiType(calculatedType);
      return updatedTraits;
    });
  };

  // Set random trait values
  const setRandomly = () => {
    const randomTraits: Record<Trait, number> = {
      Openness: Math.floor(Math.random() * 101),
      Conscientiousness: Math.floor(Math.random() * 101),
      Extraversion: Math.floor(Math.random() * 101),
      Agreeableness: Math.floor(Math.random() * 101),
      Neuroticism: Math.floor(Math.random() * 101),
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
    const calculatedType = calculateMbtiType(bigFiveData, primary4F, false);
    setMbtiType(calculatedType);
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
      const calculatedType = calculateMbtiType(profile, primary4F, false);
      setMbtiType(calculatedType);
    } else {
      setMbtiType(null);
    }

    handleCloseModal();
  };

  // On submit, persist data and navigate to the result page
  const calculateType = async () => {
    const bigFiveData = getBigFiveData();
    const primary4F = determinePrimary4FType(bigFiveData);
    const calculatedType = calculateMbtiType(bigFiveData, primary4F, false);
    setMbtiType(calculatedType);

    const newJson = {
      type: calculatedType,
      primary4FType: primary4F,
      bigFiveResponses: bigFiveData,
    };

    localStorage.setItem(guid(), JSON.stringify(newJson));

    const binId = await onComplete({
      profile: bigFiveData,
      selectedMbtiType: selectedMbtiType,
      mbtiType: calculatedType,
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
          Adjust the sliders to reflect your personality on each Big Five trait. These values help us determine your unique MBTI profile.
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
      <Modal sx={{position: 'relative', top: '50px', left: '50px'}} open={openModal} onClose={handleCloseModal}>
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
              Use this as a preset if you already know your type, or choose "I don't know" if unsure!
            </Typography>
            <Matrix onSelectType={handleMatrixSelect} width={isMobile ? '60%' : '90%'}/>
            <Box mt={2} display="flex" justifyContent="center">
              <Button variant="contained" color="secondary" onClick={() => handleMatrixSelect('XXXX')}>
                I don't know my type!
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default BigFiveInputPage;
