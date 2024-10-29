// src/components/ResultPage.tsx

import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const ResultPage: React.FC<{ mbtiType: string }> = ({ mbtiType }) => (
  <Paper elevation={3} style={{ padding: 20, marginTop: 20, textAlign: 'center' }}>
    <Box>
      <Typography variant="h4" color="primary" gutterBottom>
        Your MBTI Type is:
      </Typography>
      <Typography variant="h3" color="secondary" gutterBottom>
        {mbtiType}
      </Typography>
    </Box>
  </Paper>
);

export default ResultPage;
