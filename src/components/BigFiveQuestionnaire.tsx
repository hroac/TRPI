import React, { useState } from 'react';
import { Grid, Box, Typography, Slider, Button, Paper, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { determinePrimary4FType, matchMBTIType, normalizeProfile, MBTIProfiles } from '../utils/mbtiMapping'; // Import necessary utilities

const questions = [
  { text: 'I enjoy exploring new ideas and perspectives.', trait: 'openness' },
  { text: 'I am comfortable with change and easily adapt to new situations.', trait: 'openness' },
  { text: 'I often think about abstract concepts and like to ponder deep questions.', trait: 'openness' },
  { text: 'I often take charge in group settings and feel energized by social interactions.', trait: 'extraversion' },
  { text: 'I enjoy discussing ideas and debating with others.', trait: 'extraversion' },
  { text: 'I tend to stay calm and assertive when solving challenges.', trait: 'extraversion' },
  { text: 'I’m known for being independent and bold in my approach to problems.', trait: 'extraversion' },
  { text: 'I prefer organized, planned activities over spontaneous events.', trait: 'conscientiousness' },
  { text: 'I feel a strong responsibility to meet my goals and commitments.', trait: 'conscientiousness' },
  { text: 'I am detail-oriented and take time to think through tasks carefully.', trait: 'conscientiousness' },
  { text: 'I tend to make decisions based on logic rather than emotions.', trait: 'conscientiousness' },
  { text: 'I often prioritize harmony and avoid conflict in my relationships.', trait: 'agreeableness' },
  { text: 'I strive to be understanding and supportive towards others.', trait: 'agreeableness' },
  { text: 'I’m sensitive to other people’s feelings and try to meet their needs.', trait: 'agreeableness' },
  { text: 'I prefer to work as part of a team and value cooperation.', trait: 'agreeableness' },
  { text: 'I tend to feel anxious or worried in stressful situations.', trait: 'neuroticism' },
  { text: 'I often avoid confrontation and prefer peace over asserting my views.', trait: 'neuroticism' },
  { text: 'I am sensitive to criticism and can be self-critical.', trait: 'neuroticism' },
  { text: 'I value my independence and prefer to work on tasks alone.', trait: 'neuroticism' }
];

interface Profile {
  [trait: string]: number,
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
}

const BigFiveQuestionnaire: React.FC<{ onComplete: (responses: any) => void }> = ({ onComplete }) => {
  const navigate = useNavigate();

  const initialResponses = questions.reduce((acc, q) => {
    if (!acc[q.trait]) acc[q.trait] = [];
    acc[q.trait].push(0.5);
    return acc;
  }, {} as { [trait: string]: number[] });

  const [responses, setResponses] = useState(initialResponses);
  const [selectedTypes, setSelectedTypes] = useState<{ [key: string]: string }>({
    Fight: "",
    Flight: "",
    Freeze: "",
    Fawn: ""
  });
  const [primary4FType, setPrimary4FType] = useState<string | null>(null);
  const [matchedMBTIType, setMatchedMBTIType] = useState<string | null>(null);

  const handleTypeSelection = (mode: string) => (event: SelectChangeEvent<string>) => {
    const selectedType = event.target.value;
    
    // Clear all selections except the current mode
    setSelectedTypes({
      Fight: mode === "Fight" ? selectedType : "",
      Flight: mode === "Flight" ? selectedType : "",
      Freeze: mode === "Freeze" ? selectedType : "",
      Fawn: mode === "Fawn" ? selectedType : "",
    });

    // Find profile and set responses based on the selected type
    const profile = MBTIProfiles.find((p) => p.name === selectedType)?.traits;
    if (profile) {
      const updatedResponses = { ...responses };
      console.log(profile, Object.keys(updatedResponses), Object.values(updatedResponses));

      Object.keys(updatedResponses).forEach((trait) => {
        updatedResponses[trait] = updatedResponses[trait].map(() => profile[trait as keyof typeof profile]);
      });
      console.log(updatedResponses);
      setResponses(updatedResponses);

      // Set the primary 4F type and matched MBTI type
     // const normalizedProfile = normalizeProfile(profile);
      const primary4F = determinePrimary4FType(profile);
      const mbtiType = matchMBTIType(profile, primary4F);
      
      setPrimary4FType(primary4F);
      setMatchedMBTIType(mbtiType);
    }
  };

  const handleSubmit = () => {
    const averagedScores = Object.keys(responses).reduce((acc, trait) => {
      const traitScores = responses[trait];
      acc[trait] = traitScores.reduce((sum, score) => sum + score, 0) / traitScores.length;
      return acc;
    }, {} as { [trait: string]: number });

    const normalizedProfile = normalizeProfile(averagedScores);
      const primary4F = determinePrimary4FType(averagedScores);
      const mbtiType = matchMBTIType(averagedScores, primary4F);
      
      setPrimary4FType(primary4F);
      setMatchedMBTIType(mbtiType);
    onComplete({primary4F, mbtiType, profile: averagedScores});
    navigate('/result');
  };

  return (
    <Paper elevation={3} style={{ padding: 20, margin: '20px auto', maxWidth: 600 }}>
      <Typography variant="h5" gutterBottom>Personality Assessment</Typography>
      
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
                {MBTIProfiles.filter((profile) => profile.mode === mode).map((profile) => (
                  <MenuItem key={profile.name} value={profile.name}>
                    {profile.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>

      {/* Display determined 4F type and MBTI type */}
      <Grid container spacing={2} >
        <Box>
        {primary4FType && (
        <Typography variant="subtitle1" style={{ marginTop: 30, marginRight: 15 }}>
          Primary 4F Type: {primary4FType}
        </Typography>
      )}
        </Box>
        <Box> 
        {matchedMBTIType && (
        <Typography variant="subtitle1" style={{ marginTop: 30 }}>
          Matched MBTI Type: {matchedMBTIType}
        </Typography>
      )}
        </Box>
      </Grid>
      

      {questions.map((q, index) => (
        <Box key={`${q.trait}-${index % Object.keys(responses).length}`} my={3}>
          <Typography variant="subtitle1" gutterBottom>{q.text} - ({responses[q.trait][index% Object.values(responses[q.trait]).length]})</Typography>
          <Slider
            value={responses[q.trait][index% Object.values(responses[q.trait]).length]}
            onChange={(event, value) => setResponses((prev) => {
              const updatedResponses = { ...prev };
              updatedResponses[q.trait][index % Object.values(responses[q.trait]).length] = value as number;
              console.log(q.trait, index, (index % Object.values(responses[q.trait]).length), Object.values(responses[q.trait]).length);
              const averagedScores = Object.keys(updatedResponses).reduce((acc, trait) => {
                const traitScores = updatedResponses[trait];
                acc[trait] = traitScores.reduce((sum, score) => sum + score, 0) / traitScores.length;
                return acc;
              }, {} as { [trait: string]: number });
          
              //const normalizedProfile = normalizeProfile(averagedScores);
                const primary4F = determinePrimary4FType(averagedScores);
                const mbtiType = matchMBTIType(averagedScores, primary4F);
                
                setPrimary4FType(primary4F);
                setMatchedMBTIType(mbtiType);
              return updatedResponses;
            })}
            aria-labelledby="continuous-slider"
            min={0}
            max={1}
            step={0.01}
          />
        </Box>
      ))}

      <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>Submit</Button>
    </Paper>
  );
};

export default BigFiveQuestionnaire;
