import React from 'react';
import { Chip } from '@mui/material';

interface LabelProps {
  text: string;
  color: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

const Label: React.FC<LabelProps> = ({ text, color }) => {
  return <Chip label={text} color={color} variant="outlined" />;
};

export default Label;
