import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Tooltip } from '@mui/material';
import { typesData } from '../utils/typesData';

const Matrix: React.FC = () => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2} mt={4}>
      {typesData.map((type) => {
        // Extracting the archetype description
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
              },
              [`& .MuiTooltip-arrow`]: {
                color: type.bgColor,
              },
            }}
          >
            <Box
              component={Link}
              to={`/about/${type.type}`}
              bgcolor={type.bgColor}
              color="white"
              p={2}
              textAlign="center"
              borderRadius={2}
              style={{ textDecoration: 'none' }}
            >
              <Typography variant="h6">{type.type}</Typography>
            </Box>
          </Tooltip>
        );
      })}
    </Box>
  );
};

export default Matrix;
