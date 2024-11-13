import React, { useState } from 'react';
import {
  Grid,
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
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  determinePrimary4FType,
  matchMBTIType,
  MBTIProfiles,
} from '../utils/mbtiMapping';

const statements = [
  { text: 'I am open to exploring new ideas and perspectives.', trait: 'openness', weight: 1.2 },
  { text: 'I often think about abstract concepts and like to ponder deep questions.', trait: 'openness', weight: 0.9 },
  { text: 'I am comfortable with change and easily adapt to new situations.', trait: 'openness', weight: 1.0 },

  { text: 'I prefer organized, planned activities over spontaneous events.', trait: 'conscientiousness', weight: 0.9 },
  { text: 'I often take charge in group settings and feel energized by social interactions.', trait: 'extraversion', weight: 1.0 },
  { text: 'I often prioritize harmony and avoid conflict in my relationships.', trait: 'agreeableness', weight: 1.0 },
  { text: 'I tend to feel anxious or worried in stressful situations.', trait: 'neuroticism', weight: 1.0 },

  { text: 'I feel a strong responsibility to meet my goals and commitments.', trait: 'conscientiousness', weight: 1.1 },
  { text: 'I enjoy discussing ideas and debating with others.', trait: 'extraversion', weight: 1.1 },
  { text: 'I strive to be understanding and supportive towards others.', trait: 'agreeableness', weight: 1.2 },
  { text: 'I often feel uneasy or second-guess myself when making decisions.', trait: 'neuroticism', weight: 0.8 },

  { text: 'I tend to make decisions based on logic rather than emotions.', trait: 'conscientiousness', weight: 1.3 },
  { text: 'I tend to stay calm and assertive when solving challenges.', trait: 'extraversion', weight: 1.3 },
  { text: 'I’m sensitive to other people’s feelings and try to meet their needs.', trait: 'agreeableness', weight: 1.0 },
  { text: 'I often dwell on past mistakes and worry about future outcomes.', trait: 'neuroticism', weight: 0.9 },

  { text: 'I am detail-oriented and take time to think through tasks carefully.', trait: 'conscientiousness', weight: 0.9 },
  { text: 'I’m known for being independent and bold in my approach to problems.', trait: 'extraversion', weight: 1.0 },
  { text: 'I prefer to work as part of a team and value cooperation.', trait: 'agreeableness', weight: 0.9 },
  { text: 'I tend to overthink situations and feel uneasy about the unknown.', trait: 'neuroticism', weight: 1.0 }
];


// Group statements into stages
const stages = [
  statements.slice(0, 3), // Stage 0
  statements.slice(3, 7), // Stage 1
  statements.slice(7, 11), // Stage 2
  statements.slice(11, 15), // Stage 3
  statements.slice(15, 19), // Stage 4
];

const BigFiveQuestionnaire: React.FC<{ onComplete: (responses: any) => void }> = ({
  onComplete,
}) => {
  const navigate = useNavigate();

  // Initialize responses for each trait
  const initialResponses = statements.reduce((acc, s) => {
    if (!acc[s.trait]) acc[s.trait] = [];
    acc[s.trait].push(0.5);
    return acc;
  }, {} as { [trait: string]: number[] });

  const [responses, setResponses] = useState(initialResponses);
  const [currentStage, setCurrentStage] = useState(0);

  // Initialize selected types
  const [selectedTypes, setSelectedTypes] = useState<{ [key: string]: string }>({
    Fight: '',
    Flight: '',
    Freeze: '',
    Fawn: '',
  });

  const [primary4FType, setPrimary4FType] = useState<string | null>(null);
  const [matchedMBTIType, setMatchedMBTIType] = useState<string | null>(null);

  // Handle selection for each 4F type
  const handleTypeSelection =
    (mode: string) => (event: SelectChangeEvent<string>) => {
      const selectedType = event.target.value;

      // Clear other selections
      const updatedTypes = Object.keys(selectedTypes).reduce(
        (acc, key) => {
          acc[key] = key === mode ? selectedType : '';
          return acc;
        },
        {} as { [key: string]: string }
      );

      setSelectedTypes(updatedTypes);

      // Update responses and calculations if needed
      const profile = MBTIProfiles.find((p) => p.name === selectedType)?.traits;
      if (profile) {
        const updatedResponses = { ...responses };
        Object.keys(updatedResponses).forEach((trait) => {
          updatedResponses[trait] = updatedResponses[trait].map(
            () => profile[trait as keyof typeof profile]
          );
        });
        setResponses(updatedResponses);

        const primary4F = determinePrimary4FType(profile);
        const mbtiType = matchMBTIType(profile, primary4F);

        setPrimary4FType(primary4F);
        setMatchedMBTIType(mbtiType);
      } else {
        // Clear calculations if no type is selected
        setPrimary4FType(null);
        setMatchedMBTIType(null);
      }
    };

  // Handle slider changes
  const handleSliderChange =
    (trait: string, index: number) =>
    (event: Event, value: number | number[], activeThumb: number) => {
      setResponses((prev) => {
        const updatedResponses = { ...prev };
        updatedResponses[trait][index] = value as number;

        const weightedScores = Object.keys(updatedResponses).reduce(
          (acc, traitKey) => {
            const traitScores = updatedResponses[traitKey].map((score, i) => 
              score * (statements.find(s => s.trait === traitKey && statements.indexOf(s) === i)?.weight || 1)
            );
            acc[traitKey] = traitScores.reduce((sum, score) => sum + score, 0) / traitScores.length;
            return acc;
          },
          {} as { [trait: string]: number }
        );

        const primary4F = determinePrimary4FType(weightedScores);
        const mbtiType = matchMBTIType(weightedScores, primary4F);

        setPrimary4FType(primary4F);
        setMatchedMBTIType(mbtiType);

        return updatedResponses;
      });
    };

  // Navigation functions
  const handleNext = () => {
    if (currentStage < stages.length - 1) setCurrentStage(currentStage + 1);
  };

  const handleBack = () => {
    if (currentStage > 0) setCurrentStage(currentStage - 1);
  };

  const handleSubmit = () => {
    const weightedScores = Object.keys(responses).reduce((acc, trait) => {
      const traitScores = responses[trait].map((score, i) => 
        score * (statements.find(s => s.trait === trait && statements.indexOf(s) === i)?.weight || 1)
      );
      acc[trait] = traitScores.reduce((sum, score) => sum + score, 0) / traitScores.length;
      return acc;
    }, {} as { [trait: string]: number });

    const primary4F = determinePrimary4FType(weightedScores);
    const mbtiType = matchMBTIType(weightedScores, primary4F);

    onComplete({ primary4F, mbtiType, profile: weightedScores });
    navigate('/result');
  };

  const progress = ((currentStage + 1) / stages.length) * 100;

  return (
    <Paper
      elevation={3}
      style={{ padding: 20, margin: '20px auto', maxWidth: 600 }}
    >
      <Typography variant="h5" gutterBottom>
        Personality Assessment
      </Typography>

      {/* 4F Type Dropdowns */}
      <Grid container spacing={2}>
        {['Fight', 'Flight', 'Freeze', 'Fawn'].map((mode) => (
          <Grid item xs={3} key={mode}>
            <FormControl fullWidth>
              <InputLabel>{mode}</InputLabel>
              <Select
                value={selectedTypes[mode]}
                onChange={handleTypeSelection(mode)}
                size="small"
              >
                {MBTIProfiles.filter((profile) => profile.mode === mode).map(
                  (profile) => (
                    <MenuItem key={profile.name} value={profile.name}>
                      {profile.name}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>

      <Box my={3}>
        {primary4FType && (
          <Typography variant="subtitle1">
            Primary 4F Type: {primary4FType}
          </Typography>
        )}
        {matchedMBTIType && (
          <Typography variant="subtitle1">
            Matched MBTI Type: {matchedMBTIType}
          </Typography>
        )}
      </Box>

      {/* Display current stage statements */}
      {stages[currentStage].map((s, index) => (
        <Box key={`${s.trait}-${index}`} my={3}>
          <Typography variant="subtitle1" gutterBottom>
            {s.text}
          </Typography>
          <Slider
            value={responses[s.trait][s.trait === 'openness' ? index : currentStage - 1]}
            onChange={handleSliderChange(s.trait, s.trait === 'openness' ? index : currentStage - 1)}
            min={0}
            max={1}
            step={0.01}
          />
        </Box>
      ))}

      {/* Progress Bar */}
      <Box my={3}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>

      {/* Navigation Buttons */}
      <Box display="flex" justifyContent="space-between" mt={3}>
        <Button onClick={handleBack} disabled={currentStage === 0}>
          Back
        </Button>
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
