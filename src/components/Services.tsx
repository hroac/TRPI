// Services.tsx
import React from 'react';
import { Typography, Box, Container, List, ListItem, ListItemText } from '@mui/material';

const Services = () => {
  return (
    <Container>
      <Box sx={{ py: 6 }}>
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}>
          Our Services
        </Typography>
        
        <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>1. Personality Assessment</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Comprehensive TRPI assessment" secondary="Discover your personality type based on the 4F trauma response framework." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Custom Results Analysis" secondary="Receive a personalized breakdown of your personality traits." />
          </ListItem>
        </List>

        <Typography variant="h6" sx={{ mt: 4, fontWeight: 'bold' }}>2. Self-Growth Resources</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Guided Articles" secondary="In-depth articles about each personality type and their unique characteristics." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Resources for Personal Growth" secondary="Tips and strategies to support growth based on your type." />
          </ListItem>
        </List>

        <Typography variant="h6" sx={{ mt: 4, fontWeight: 'bold' }}>3. Support</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Customer Service" secondary="Assistance with accessing your results, updating your profile, or understanding your type." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Community Forum" secondary="Connect with others and share insights or ask questions." />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Services;
