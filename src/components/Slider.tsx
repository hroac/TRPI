import React from 'react';
import { Slider as MuiSlider, Box, Typography } from '@mui/material';

interface SliderProps {
  label?: string;
  value: number;
  onChange: (event: Event | React.SyntheticEvent<Element, Event>, newValue: number | number[]) => void;
  min?: number;
  max?: number;
  step?: number;
}

const Slider: React.FC<SliderProps> = ({ label, value, onChange, min = 0, max = 100, step = 1 }) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', my: 3 }}>
      {label && <Typography variant="body1" sx={{ mb: 1 }}>{label}</Typography>}
      <MuiSlider
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        sx={{
          color: 'secondary.main',
          '& .MuiSlider-thumb': {
            backgroundColor: 'primary.main',
            width: 10,
            height: 10,
          },
          '& .MuiSlider-track': {
            backgroundColor: 'secondary.main',
          },
          '& .MuiSlider-rail': {
            backgroundColor: 'text.secondary',
          },
        }}
      />
    </Box>
  );
};

export default Slider;
