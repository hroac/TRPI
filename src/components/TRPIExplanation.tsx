
import React from 'react';
import { Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Matrix from './Matrix';

const TRPIExplanation: React.FC = () => {
  return (
    <Box sx={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Trauma Response Personality Indicator (TRPI)
      </Typography>

      <Typography variant="body1" paragraph>
        The Trauma Response Personality Indicator (TRPI) is an advanced personality framework that combines elements
        of the MBTI, Big Five personality traits, and the 4F trauma response system. It offers insights into personality
        through the dynamics of brain hemispheres, trauma responses, and cognitive functions.
      </Typography>

      <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Personality Types Matrix
        </Typography>
        <Matrix />
      </Box>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Function Pairings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            TRPI uses function pairings rather than individual functions to describe personality. Each type has dominant
            and auxiliary pairings that create dynamic interactions, categorized as Gold, Silver, and Bronze pairings.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default TRPIExplanation;
