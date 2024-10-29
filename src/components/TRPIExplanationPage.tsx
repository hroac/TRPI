
import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const TRPIExplanationPage = () => (
  <Box padding={3}>
    <Typography variant="h4" gutterBottom>
      Understanding the Trauma Response Personality Indicator (TRPI)
    </Typography>
    <Typography variant="body1" paragraph>
      The Trauma Response Personality Indicator (TRPI) framework integrates the 4F trauma response types 
      (Fight, Freeze, Fawn, and Flight) with Big Five traits and Myers-Briggs function pairings.
    </Typography>
    <Typography variant="h5" gutterBottom>Bronze, Silver, and Golden Pairings</Typography>
    <Typography variant="body1" paragraph>TRPI includes these pairings:</Typography>
    <List>
      <ListItem><ListItemText primary="Bronze Pairings" secondary="Opposite types with complementary functions." /></ListItem>
      <ListItem><ListItemText primary="Silver Pairings" secondary="Function pairings with opposite attitudes." /></ListItem>
      <ListItem><ListItemText primary="Golden Pairings" secondary="Complementary dominant and auxiliary functions." /></ListItem>
    </List>
  </Box>
);

export default TRPIExplanationPage;
