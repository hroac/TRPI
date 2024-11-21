// Enhanced Home.tsx with fancier UI elements
import React, { useEffect, useState } from 'react';
import { Typography, Button, Grid, Box, Container } from '@mui/material';
import Carousel from '../components/Carousel';
import Matrix from './Matrix';
import { Link } from 'react-router-dom';
import JsonBinApi from '../utils/saveResults';
import { Bar } from 'react-chartjs-2';


const Home = () => {
  const [total, setTotal] = useState<number>(0)
  const [bins, setBins] = useState<Array<any>>([])
  
  const getBins = async () => {
    const collection = await JsonBinApi.getBinsInCollection();
      const bins =  []
      setTotal(collection.length);

            for(const key of collection) { 
               const bin = await JsonBinApi.getBinById(key.record);
               bins.push(bin);
               setBins(bins)

            }
  }

  useEffect(() => {
    if(!total) {
    getBins();
      
    }
  })

  const slides = total ? bins.map((bin: any) => {
    const options = {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Big Five Personality Scores' },
      },
      scales: { y: { beginAtZero: true, max: 100 } },
    };
    const data = {
      labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
      datasets: [
        {
          label: 'Big Five Scores',
          data: [
            bin.bigFiveResponses.openness * 100,
            bin.bigFiveResponses.conscientiousness * 100,
            bin.bigFiveResponses.extraversion * 100,
            bin.bigFiveResponses.agreeableness * 100,
            bin.bigFiveResponses.neuroticism * 100,
          ],
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 99, 132, 0.6)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    return {content:(
      <Box sx={{textAlign: 'center'}}>
        <Typography variant="h5" gutterBottom>
          TRPI Test Results - {bin.primary4FType} - {bin.type}
        </Typography>
        <Box  display="flex" justifyContent="center" my={3}>
          <Bar data={data} options={options} />
        </Box>
      </Box>
    )}
  }) 
  : [{content: (<div/>)}]
  return (
    <Container sx={{marginTop: '64px'}}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          py: 8, 
          //background: 'linear-gradient(to right, rgb(217 236 236), rgb(217 246 236))',
          textAlign: 'center',
          borderRadius: 3
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
          Discover your true personality type with TRPI's unique approach. Dive deeper, correct mistypes, and gain a complete understanding of yourself.
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
      {/* <Typography variant='h4'  sx={{ 
            fontWeight: '500', 
            mb: 4, 
            textAlign: 'center' 
          }}>
            {total} people have taken the test!
          </Typography> */}
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

      <Grid container spacing={1} sx={{ 
          mt: 6, 
          px: 3, 
          justifyContent: 'center' 
        }}>

      <Carousel slides={slides}/>
        
      </Grid>
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
