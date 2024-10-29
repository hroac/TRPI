// src/components/BigFiveQuestionnaire.tsx

import React, { useState } from 'react';
import { Box, Typography, Slider, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Questions with multiple questions per trait category
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

const BigFiveQuestionnaire: React.FC<{ onComplete: (responses: any) => void }> = ({ onComplete }) => {
  const navigate = useNavigate();

  const initialResponses = questions.reduce((acc, q) => {
    if (!acc[q.trait]) acc[q.trait] = [];
    acc[q.trait].push(50); // Initializing each question slider to 50
    return acc;
  }, {} as { [trait: string]: number[] });

  const [responses, setResponses] = useState(initialResponses);

  const handleSliderChange = (trait: string, index: number) => (event: Event, value: number | number[]) => {
    setResponses((prev) => {
      const updatedResponses = { ...prev };
      updatedResponses[trait][index] = value as number;
      return updatedResponses;
    });
  };

  const handleSubmit = () => {
    const averagedScores = Object.keys(responses).reduce((acc, trait) => {
      const traitScores = responses[trait];
      acc[trait] = traitScores.reduce((sum, score) => sum + score, 0) / traitScores.length || 50;
      return acc;
    }, {} as { [trait: string]: number });

    onComplete(averagedScores);
    navigate('/result'); // Navigate to the results page
  };

  return (
    <Paper elevation={3} style={{ padding: 20, margin: '20px auto', maxWidth: 600 }}>
      <Typography variant="h5" gutterBottom>
        Personality Assessment
      </Typography>
      {questions.map((q, index) => (
        <Box key={`${q.trait}-${index}`} my={3}>
          <Typography variant="subtitle1" gutterBottom>
            {q.text}
          </Typography>
          <Slider
            value={responses[q.trait][index]}
            onChange={handleSliderChange(q.trait, index)}
            aria-labelledby="continuous-slider"
            min={0}
            max={100}
            step={1}
          />
        </Box>
      ))}
      <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
        Submit
      </Button>
    </Paper>
  );
};

export default BigFiveQuestionnaire;
