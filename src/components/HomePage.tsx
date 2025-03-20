// Enhanced Home.tsx with fancier UI elements
import React, { useEffect, useState } from 'react';
import { Typography, Button, Grid, Box, Container, List, ListItem, Paper, ListItemText, CircularProgress } from '@mui/material';
import Carousel from '../components/Carousel';
import Matrix from './Matrix';
import { Link } from 'react-router-dom';
import JsonBinApi from '../utils/jsonBin';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

interface Review {
  id: string;
  name: string;
  comment: string;
  date: string;
}

const Home = () => {
  const [total, setTotal] = useState<number>(0)
  const [collection, setCollection] = useState<any[]>([])
  const [collected, setCollected] = useState<boolean[]>([])
  const [slides, setSlides] = useState<Array<any>>([]); // State for slides
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loadingBins, setLoadingBins] = useState<boolean>(false);
  const [loadingReviews, setLoadingReviews] = useState<boolean>(false);
 


  const getBins = async () => {
    const collection = await JsonBinApi.getBinsInCollection();
    const bins: any[] = [];
    setTotal(collection.length);
    setCollection(collection);
  };

  const loadBins = async () => {
    setCollected(new Array<boolean>(collection.length).fill(false));
    for (const key of collection) {
      const index = collection.indexOf(key);

     /*  if(collected[index]) {
        continue;
      } */
      setCollected((prevCollected: boolean[]) => {
        prevCollected[index] = true;
        return prevCollected
      })
      const bin = await JsonBinApi.getBinById(key.record);
  
      const options = {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Big Five Personality Scores' },
        },
        scales: { y: { beginAtZero: true, max: 100 } },
      };
  
      const data = {
        labels: [
          'Openness',
          'Conscientiousness',
          'Extraversion',
          'Agreeableness',
          'Neuroticism',
        ],
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
  
     // console.log(index, key)
      // Append the new slide content to the existing slides
      
      setSlides((prevSlides: any[]) => {
        prevSlides[index] = {
          content: (
            
<Box
  component={Link}
  to={`/result/${key.record}`}
  sx={{
    textAlign: 'center',
    textDecoration: 'none', // Remove underline from the entire Box if any
    color: 'inherit',        // Inherit color to prevent default link color
    '&:hover': {
      textDecoration: 'none', // Prevent underline on hover
    },
  }}
>
  <Typography
    variant="h5"
    gutterBottom
    sx={{
      color: 'inherit',        // Inherit color to match parent and remove link color
      textDecoration: 'none',  // Remove any text decoration
      cursor: 'default',       // Optional: Change cursor to default if you don't want it to look clickable
    }}
  >
    TRPI Test Results - {bin.primary4FType} - {bin.type}  {bin.accuracy ? `- ${bin.accuracy.toFixed(1)}%` : ''}
  </Typography>
  <Box display="flex" justifyContent="center" my={3}>
    <Bar data={data} options={options} />
  </Box>
</Box>

          ),
        }
        return prevSlides;
      });
     
    }
  }
  
  const fetchReviews = async () => {
   // setLoading(true);
    try {
      
const API_KEY = "$2a$10$q3P7Zn7sUJLykm7PHc2d4.zvCgVdfmt8tVVK38jEdNC947RlZgoOG";
const COLLECTION_ID = "678e2e23ad19ca34f8f154c5";
      const url = `https://api.jsonbin.io/v3/c/${COLLECTION_ID}/bins`;
      const response = await axios.get(url, {
        headers: {
          "X-Master-Key": API_KEY,
          "Content-Type": "application/json",
        },
      });
      
      const fetchedReviews = response.data.map((bin: any) => bin.record);
      const reviews = [];

      for (const review of fetchedReviews) {
        const bin = await JsonBinApi.getBinById(review)
        reviews.push(bin)
      }
      setReviews(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      //setLoading(false);
    }
  };

  useEffect(() => {
    if(loadingBins) {
      return;
    }

    //loadingBins = true;
    setLoadingBins(true);
    if(!total) {
    getBins(); 
    }
  }, [total, loadingBins])


  useEffect(() => {
    if(collection.length > 0) {
      loadBins();
    }
  }, [collection])
  useEffect(() => {
    if(loadingReviews) {
      return;
    }
    //loadingReviews = true;
    setLoadingReviews(true);
    fetchReviews();
  }, []);

  const heroSlidesData = [
    {
      content: (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', px: 4, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              color: '#333',
              mb: 2,
            }}
          >
            Welcome to TRPI
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              color: '#666',
              maxWidth: 600,
              mb: 4,
            }}
          >
            Discover your true personality type with TRPI's unique approach. Dive deeper, correct mistypes, and gain a complete understanding of yourself.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/test"
            sx={{
              mt: 2,
              px: 4,
              py: 1.5,
              borderRadius: 4,
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            Start the Test
          </Button>
        </Box>
      ),
    },
    {
      content: (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', px: 4, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              color: '#333',
              mb: 2,
            }}
          >
            Explore with Open-Ended Questions
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              color: '#666',
              maxWidth: 600,
              mb: 4,
            }}
          >
            Engage with our TRPI Talk feature powered by ChatGPT for a different perspective on your personality.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/talk"
            sx={{
              mt: 2,
              px: 4,
              py: 1.5,
              borderRadius: 4,
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            Try TRPI Talk
          </Button>
        </Box>
      ),
    },
    {
      content: (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', px: 4, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              color: '#333',
              mb: 2,
            }}
          >
            Take the Long Format Test
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              color: '#666',
              maxWidth: 600,
              mb: 4,
            }}
          >
            For a more detailed personality analysis, try our extended TRPI Assessment Tool.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/assessment"
            sx={{
              mt: 2,
              px: 4,
              py: 1.5,
              borderRadius: 4,
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            Take the test!
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Container sx={{marginTop: '64px'}}>
      {/* Hero Section */}
      <Box sx={{ py: 8, textAlign: 'center', borderRadius: 3 }}>
        <Carousel slides={heroSlidesData} settings={{
      autoplay: {
        delay: 500, // Change the delay to 5000 milliseconds (5 seconds)
        disableOnInteraction: false, // Optional: Keep autoplaying even after user interaction
      },
      pagination: { clickable: true },
    }} />
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
        <Matrix />
      </Box>
      <Grid container spacing={1} sx={{ 
          mt: 6, 
          px: 3, 
          justifyContent: 'center' 
        }}>

      <Carousel slides={slides}/>
        
      </Grid>
      
      <List>
          {reviews.map((review) => (
           
           <ListItem key={review.id} alignItems="flex-start" sx={{ mb: 2 }}>
           <Paper sx={{ p: 2, width: "100%" }} elevation={3}>
             <ListItemText
               primary={
                 <Typography variant="h6" gutterBottom>
                   {review.name}
                 </Typography>
               }
               secondary={
                 <>
                   <Typography
                     component="span"
                     variant="body2"
                     color="text.secondary"
                     gutterBottom
                   >
                     {new Date(review.date).toLocaleString()}
                   </Typography>
                   <Typography variant="body1">{review.comment}</Typography>
                 </>
               }
             />
           </Paper>
         </ListItem>
          ))}
        </List>
      
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
