import React from 'react';
import { Box, Typography, Tooltip, useMediaQuery, Theme, Grid } from '@mui/material';
import { typesData } from '../utils/typesData';
import { Link } from 'react-router-dom';

interface MatrixProps {
  onSelectType?: (type: string) => void;
  width?: string;
}

const Matrix: React.FC<MatrixProps> = ({ onSelectType, width }) => {
  // Define a media query for screens 600px or smaller
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Box 
      display="grid" 
      gridTemplateColumns="repeat(4, 1fr)" 
      gap={isMobile ? 1 : 2} // Reduce gap on mobile
      mt={4} 
      width={width}
    >
      {typesData.map((type) => {
        const archetypeDescription = type.description.slice(
          type.description.indexOf(',') + 2,
          type.description.indexOf(':')
        );

        return (
          <Tooltip
            title={archetypeDescription}
            arrow
            key={type.type}
            sx={{
              [`& .MuiTooltip-tooltip`]: {
                backgroundColor: type.bgColor,
                color: 'white',
                fontWeight: 'bold',
                fontSize: isMobile ? '0.75rem' : '1rem', // Adjust font size for mobile
              },
              [`& .MuiTooltip-arrow`]: {
                color: type.bgColor,
              },
            }}
          >
            {typeof onSelectType === 'function' ? (
              <Box
                onClick={() => onSelectType(type.type)}
                bgcolor={type.bgColor}
                color="white"
                p={isMobile ? 1 : 2} // Reduce padding for mobile
                textAlign="center"
                borderRadius={2}
                height="75px"
                sx={{
                  cursor: 'pointer',
                  fontSize: isMobile ? '0.75rem' : '1rem', // Adjust text size for mobile
                }}
              >
                <Typography variant="h5">{type.type}</Typography>
              </Box>
            ) : (
              <Box
                component={Link}
                to={`/about/${type.type}`}
                bgcolor={type.bgColor}
                color="white"
                p={isMobile ? 1 : 2} // Reduce padding for mobile
                textAlign="center"
                borderRadius={2}
                height="75px"
                style={{ textDecoration: 'none' }}
                sx={{
                  fontSize: isMobile ? '0.75rem' : '1rem', // Adjust text size for mobile
                }}
              >
                <Typography sx={{ fontWeight: 'bold' }} variant="h5">{type.type}</Typography>
              </Box>
            )}
          </Tooltip>
        );
      })}
    </Box>
  );
};

export default Matrix;
