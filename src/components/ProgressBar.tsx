import React from 'react';
import { LinearProgress, Typography, Box } from '@mui/material';

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => (
  <Box sx={{ width: '100%', padding: '10px' }}>
    <Typography variant="body1">Progress</Typography>
    <LinearProgress variant="determinate" value={value} sx={{ height: '10px', borderRadius: '5px' }} />
  </Box>
);

export default ProgressBar;
