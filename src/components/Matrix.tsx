import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { typesData } from './typesData';

interface TypeProps {
  type: string;
  functions: string[];
  mode: string;
  bgColor: string;
  bronze: string;
  silver: string;
  gold: string;
}

const Type: React.FC<TypeProps> = ({ type, functions, mode, bgColor, bronze, silver, gold }) => {
  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        margin: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover .hover-card': {
          opacity: 1,
          visibility: 'visible',
          transform: 'translateY(0)',
        }
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '10px' }}>
        {type}
      </Typography>
      {functions.map((func, index) => (
        <Typography key={index} sx={{ fontSize: '14px', marginBottom: '5px' }}>
          {func}
        </Typography>
      ))}
      <Box
        className="hover-card"
        sx={{
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%) translateY(10px)',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '10px',
          borderRadius: '8px',
          opacity: 0,
          visibility: 'hidden',
          transition: 'all 0.3s ease',
          whiteSpace: 'nowrap',
          textAlign: 'center',
        }}
      >
        <div><span style={{ color: '#cd7f32' }}>Bronze:</span> {bronze}</div>
        <div><span style={{ color: '#c0c0c0' }}>Silver:</span> {silver}</div>
        <div><span style={{ color: '#ffd700' }}>Gold:</span> {gold}</div>
      </Box>
    </Box>
  );
};

const Matrix: React.FC = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px',
      }}
    >
      {typesData.map((typeData) => (
        <Grid item xs={12} sm={6} md={3} key={typeData.type}>
          <Type
            type={typeData.type}
            functions={typeData.functions}
            mode={typeData.mode}
            bgColor={typeData.bgColor}
            bronze={typeData.bronze}
            silver={typeData.silver}
            gold={typeData.gold}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Matrix;
