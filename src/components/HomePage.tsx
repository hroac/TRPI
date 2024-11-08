// Enhanced Home.tsx with fancier UI elements
import React from 'react';
import { Typography, Button, Grid, Box, Container } from '@mui/material';
import Carousel from '../components/Carousel';
import Matrix from './Matrix';
import { Link } from 'react-router-dom';
const slides = [
    {
      title: "TRAUMA SHAPES YOU BUT IT DOES NOT DEFINE YOU.",
      description: "Discover your strengths beyond past experiences with TRPI."
    },
    {
      title: "THE JOURNEY TO SELF DISCOVERY BEGINS WITHIN.",
      description: "TRPI helps you explore your true personality, free from mistypes."
    },
    {
      title: "YOUR PERSONALITY IS YOUR FOUNDATION.",
      description: "Uncover the layers of who you are, not just who you've become."
    },
    {
      title: "HEALING IS NOT LINEAR.",
      description: "Discover how the TRPI framework integrates the 4F trauma responses for clarity."
    },
    {
      title: "KNOW YOURSELF AND FIND THE PATH FORWARD.",
      description: "Let TRPI’s insights guide you toward a future defined by self-awareness."
    }
  ];

const Home = () => {
  return (
    <Container>
      {/* Hero Section */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          py: 8, 
          background: 'linear-gradient(to right, #f7f8fc, #e0eafc)',
          textAlign: 'center'
        }}
      >
        <Typography 
          variant='h2' 
          sx={{ 
            fontWeight: 'bold', 
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)', 
            color: '#333' 
          }}
        >
          Welcome to TRPI
        </Typography>
        <Typography 
          variant='h6' 
          sx={{ 
            mt: 2, 
            color: '#666', 
            maxWidth: 600 
          }}
        >
          Discover your true personality with a unique approach. TRPI helps you explore deeper, correcting mistypes and understanding yourself fully.
        </Typography>
        <Button 
          variant='contained' 
          color='primary' 
          size='large' 
          component={Link}
          to='/test'
          sx={{ 
            mt: 4, 
            px: 4, 
            py: 1.5, 
            borderRadius: 4, 
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' 
          }}
        >
          Start the Test
        </Button>
      </Box>

      {/* Carousel Section */}
      <Box sx={{ mt: 8, width: '100%', py: 6 }}>
        <Typography 
          variant='h4' 
          sx={{ 
            fontWeight: '500', 
            mb: 4, 
            textAlign: 'center' 
          }}
        >
          Explore the 16 Personality Types
        </Typography>
        <Matrix/>
      </Box>

      {/* Benefits Section */}
      <Grid 
        container 
        spacing={4} 
        sx={{ 
          mt: 6, 
          px: 3, 
          justifyContent: 'center' 
        }}
      >
        {/* Benefit 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box 
            sx={{ 
              p: 3, 
              textAlign: 'center', 
              borderRadius: 2, 
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#ffffff',
            }}
          >
            <Typography variant='h6' fontWeight='bold'>
              Accurate Typing
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Get results you can trust, designed to reduce mistypes.
            </Typography>
          </Box>
        </Grid>

        {/* Benefit 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box 
            sx={{ 
              p: 3, 
              textAlign: 'center', 
              borderRadius: 2, 
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#ffffff',
            }}
          >
            <Typography variant='h6' fontWeight='bold'>
              Deeper Insights
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Understand how TRPI integrates the Big Five.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box 
            sx={{ 
              p: 3, 
              textAlign: 'center', 
              borderRadius: 2, 
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#ffffff',
            }}
          >
            <Typography variant='h6' fontWeight='bold'>
              4F Trauma Responses
            </Typography>
            <Typography variant='body2' color='text.secondary'>
            Integrate trauma responses for a more nuanced understanding.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box 
            sx={{ 
              p: 3, 
              textAlign: 'center', 
              borderRadius: 2, 
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#ffffff',
            }}
          >
            <Typography variant='h6' fontWeight='bold'>
            Adaptive Guidance
            </Typography>
            <Typography variant='body2' color='text.secondary'>
            Get adaptable insights that grow with you, not against you.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box 
            sx={{ 
              p: 3, 
              textAlign: 'center', 
              borderRadius: 2, 
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#ffffff',
            }}
          >
            <Typography variant='h6' fontWeight='bold'>
              Interconnectedness
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              See how the types are interconnected according to TRPI.
            </Typography>
          </Box>
        </Grid>

        {/* Add more benefits as needed */}
      </Grid>
    </Container>
  );
};

export default Home;
