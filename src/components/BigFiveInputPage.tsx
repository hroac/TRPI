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
} from '@mui/material';
import OpennessIcon from '@mui/icons-material/EmojiObjects';
import ConscientiousnessIcon from '@mui/icons-material/CheckCircle';
import ExtraversionIcon from '@mui/icons-material/People';
import AgreeablenessIcon from '@mui/icons-material/Favorite';
import NeuroticismIcon from '@mui/icons-material/MoodBad';

import { matchMBTIType as calculateMbtiType, determinePrimary4FType } from '../utils/mbtiMapping';
import { useNavigate } from 'react-router-dom';
import { guid } from '../utils/guid';
import { typesData } from './typesData';

type Trait = 'Openness' | 'Conscientiousness' | 'Extraversion' | 'Agreeableness' | 'Neuroticism';

const traitInfo: { label: Trait; icon: React.ReactNode; color: string }[] = [
  { label: 'Openness', icon: <OpennessIcon />, color: '#1E90FF' },
  { label: 'Conscientiousness', icon: <ConscientiousnessIcon />, color: '#32CD32' },
  { label: 'Extraversion', icon: <ExtraversionIcon />, color: '#FF8C00' },
  { label: 'Agreeableness', icon: <AgreeablenessIcon />, color: '#FF69B4' },
  { label: 'Neuroticism', icon: <NeuroticismIcon />, color: '#DC143C' },
];



const BigFiveInputPage: React.FC<{ onComplete: (responses: any) => void }> = ({
  onComplete,
}) => {
  const navigate = useNavigate();
  const [traits, setTraits] = useState<Record<Trait, number>>({
    Openness: 50,
    Conscientiousness: 50,
    Extraversion: 50,
    Agreeableness: 50,
    Neuroticism: 50,
  });

  const [mbtiType, setMbtiType] = useState<string | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const type = typesData.find(t => t.type === mbtiType);

  const handleSliderChange = (trait: Trait) => (event: Event, newValue: number | number[]) => {
    setTraits((prev) => {
      const traits = ({ ...prev, [trait]: newValue as number });
      const bigFiveData = {
        openness: traits.Openness / 100,
        conscientiousness: traits.Conscientiousness / 100,
        extraversion: traits.Extraversion / 100,
        agreeableness: traits.Agreeableness / 100,
        neuroticism: traits.Neuroticism / 100,
      };
      const fourF = determinePrimary4FType(bigFiveData);
      const type = calculateMbtiType(bigFiveData, fourF, false);
      setMbtiType(type);
      return traits
    });
    
  };

  const calculateType = async () => {
    const bigFiveData = {
      openness: traits.Openness / 100,
      conscientiousness: traits.Conscientiousness / 100,
      extraversion: traits.Extraversion / 100,
      agreeableness: traits.Agreeableness / 100,
      neuroticism: traits.Neuroticism / 100,
    };
    const fourF = determinePrimary4FType(bigFiveData);
    const type = calculateMbtiType(bigFiveData, fourF, false);
    setMbtiType(type);
    const newJson = {
      type: type,
      primary4FType: fourF,
      bigFiveResponses: bigFiveData,
  }
  localStorage.setItem(guid(), JSON.stringify(newJson));
    const binId = await onComplete({profile: bigFiveData, mbtiType: type, primary4F: fourF});
    navigate(`/result/${binId}`);

  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '40px', textAlign: 'center' }}>
      <Paper elevation={4} sx={{ padding: '30px', borderRadius: '15px' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Enter Your Big Five Values
        </Typography>
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

        {mbtiType && (
          <Grid container spacing={1} justifyContent={'center'} marginTop={5}>
            <Box
          bgcolor={type.bgColor}
          color="white"
          p={isMobile ? 1 : 2} // Reduce padding for mobile
          textAlign="center"
          borderRadius={2}
          style={{ textDecoration: 'none' }}
          sx={{
            width: 75,
            fontSize: isMobile ? '0.75rem' : '1rem', // Adjust text size for mobile
          }}
        >
          <Typography variant="subtitle1">{type.type}</Typography>
        </Box>
          </Grid>
        )}
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={calculateType}
          sx={{
            marginTop: '30px',
            padding: '10px 30px',
            borderRadius: '20px',
            fontWeight: 'bold',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          Submit MBTI Type
        </Button>

      </Paper>
    </Container>
  );
};

export default BigFiveInputPage;
