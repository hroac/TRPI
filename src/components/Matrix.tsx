import React from 'react';
import { Box, Typography, Tooltip, useMediaQuery, Theme } from '@mui/material';
import { typesData } from '../utils/typesData';
import { Link } from 'react-router-dom';

interface MatrixProps {
  onSelectType?: (type: string) => void;
  width?: string;
}

const Matrix: React.FC<MatrixProps> = ({ onSelectType, width }) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gap={isMobile ? 1 : 2}
      mt={4}
      width={width}
      maxWidth={width}
      position="relative"
      right={width && isMobile ? 30 : 0}
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
                fontSize: isMobile ? '0.75rem' : '1rem',
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
                p={isMobile ? 1 : 2}
                textAlign="center"
                borderRadius={2}
                height="75px"
                sx={{
                  cursor: 'pointer',
                  fontSize: isMobile ? '0.75rem' : '1rem',
                  // Hover styling
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <Typography sx={{ fontWeight: 'bold' }} variant="h5">
                  {type.type}
                </Typography>
              </Box>
            ) : (
              <Box
                component={Link}
                to={`/about/${type.type}`}
                bgcolor={type.bgColor}
                color="white"
                p={isMobile ? 1 : 2}
                textAlign="center"
                borderRadius={2}
                height="75px"
                style={{ textDecoration: 'none' }}
                sx={{
                  fontSize: isMobile ? '0.75rem' : '1rem',
                  // Hover styling
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <Typography sx={{ fontWeight: 'bold' }} variant="h5">
                  {type.type}
                </Typography>
              </Box>
            )}
          </Tooltip>
        );
      })}
    </Box>
  );
};

export default Matrix;
