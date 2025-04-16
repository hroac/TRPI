import React, { useState } from 'react';
import { Box, Typography, Tooltip, useMediaQuery, Theme } from '@mui/material';
import { typesData } from '../utils/typesData';
import { Link } from 'react-router-dom';

interface MatrixProps {
  onSelectType?: (type: string) => void;
  width?: string;
}

const Matrix: React.FC<MatrixProps> = ({ onSelectType, width = '75px' }) => { 
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const cellSize = isMobile ? '18vw' : width || '75px'; // 
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  // Common styles for each box, enhanced with conditional opacity
  const commonBoxSx = (colIndex: number) => ({
    p: isMobile ? 1 : 2,
    pt: '33%',
    textAlign: 'center',
    borderRadius: 2,
    height: cellSize,
width: cellSize,
    // If no column is hovered, or if this box is in the hovered column, show full opacity.
    // Otherwise, gray it out.
    opacity: hoveredColumn === null || hoveredColumn === colIndex ? 1 : 0.3,
    fontSize: isMobile ? '0.75rem' : '1rem',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    },
  });

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gap={isMobile ? 1 : 2}
      mt={4}
      width="fit-content" // centers the grid container width-wise
      mx="auto" // centers the grid horizontally
      onMouseLeave={() => setHoveredColumn(null)} // clear hoveredColumn when leaving the grid
    >
      {typesData.map((type, index) => {
        // Calculate which column this cell belongs to (0-based index)
        const colIndex = index % 4;
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
                onMouseEnter={() => setHoveredColumn(colIndex)}
                bgcolor={type.bgColor}
                color="white"
                sx={commonBoxSx(colIndex)}
              >
                <Typography sx={{ fontWeight: 'bold' }} variant="h5">
                  {type.type}
                </Typography>
              </Box>
            ) : (
              <Box
                component={Link}
                to={`/about/${type.type}`}
                onMouseEnter={() => setHoveredColumn(colIndex)}
                bgcolor={type.bgColor}
                color="white"
                style={{ textDecoration: 'none' }}
                sx={commonBoxSx(colIndex)}
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
