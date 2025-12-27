import React, { useState } from 'react';
import { Box, Typography, Tooltip, useMediaQuery, Theme } from '@mui/material';
import { typesData } from '../utils/typesData';
import { Link } from 'react-router-dom';

interface MatrixProps {
  onSelectType?: (type: string) => void;
  width?: string;
}

const Matrix: React.FC<MatrixProps> = ({ onSelectType, width }) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  // Common styles for each box
  const commonBoxSx = (colIndex: number) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    p: { xs: 0.5, sm: 1 },
    borderRadius: 2,
    width: '100%',
    aspectRatio: '1 / 1',
    opacity: hoveredColumn === null || hoveredColumn === colIndex ? 1 : 0.3,
    fontSize: isMobile ? '0.75rem' : '1.1rem',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'none',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
      zIndex: 2,
    },
  });

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gap={isMobile ? 1 : 2}
      mt={2}
      width="100%"
      maxWidth={width || '400px'} // Default max width if not provided
      mx="auto"
      onMouseLeave={() => setHoveredColumn(null)}
    >
      {typesData.map((type, index) => {
        const colIndex = index % 4;
        const archetypeDescription = type.description.slice(
          type.description.indexOf(',') + 2,
          type.description.indexOf(':')
        );

        const content = (
          <Box
            onMouseEnter={() => setHoveredColumn(colIndex)}
            bgcolor={type.bgColor}
            sx={commonBoxSx(colIndex)}
          >
            <Typography sx={{ fontWeight: 'bold' }} variant={isMobile ? "body2" : "h6"}>
              {type.type}
            </Typography>
          </Box>
        );

        const WrappedContent = (
          <Tooltip
            title={archetypeDescription}
            arrow
            key={type.type}
            placement="top"
          >
            {typeof onSelectType === 'function' ? (
              <Box onClick={() => onSelectType(type.type)} sx={{ width: '100%' }}>
                {content}
              </Box>
            ) : (
              <Link to={`/about/${type.type}`} style={{ textDecoration: 'none', width: '100%', display: 'block' }}>
                {content}
              </Link>
            )}
          </Tooltip>
        );

        return WrappedContent;
      })}
    </Box>
  );
};

export default Matrix;
