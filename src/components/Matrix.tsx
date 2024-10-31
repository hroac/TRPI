
import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const types = [
  { type: 'INTJ', label: 'INTJ' },
  { type: 'ENTJ', label: 'ENTJ' },
  { type: 'INFJ', label: 'INFJ' },
  { type: 'ENFJ', label: 'ENFJ' },
  { type: 'ISTJ', label: 'ISTJ' },
  { type: 'ESTJ', label: 'ESTJ' },
  { type: 'ISFJ', label: 'ISFJ' },
  { type: 'ESFJ', label: 'ESFJ' },
  { type: 'INTP', label: 'INTP' },
  { type: 'ENTP', label: 'ENTP' },
  { type: 'INFP', label: 'INFP' },
  { type: 'ENFP', label: 'ENFP' },
  { type: 'ISTP', label: 'ISTP' },
  { type: 'ESTP', label: 'ESTP' },
  { type: 'ISFP', label: 'ISFP' },
  { type: 'ESFP', label: 'ESFP' },
];

const Matrix: React.FC = () => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2} mt={4}>
      {types.map(({ type, label }) => (
        <Box
          key={type}
          component={Link}
          to={`/about/${type}`}
          bgcolor="primary.main"
          color="white"
          p={2}
          textAlign="center"
          borderRadius={2}
          style={{ textDecoration: 'none' }}
        >
          {label}
        </Box>
      ))}
    </Box>
  );
};

export default Matrix;
