import React, { useEffect, useState } from 'react';
import {
  Typography,
  Button,
  Grid,
  Box,
  Container,
  Card,
  CardContent,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from '../components/Carousel';
import Matrix from './Matrix';
import { Link } from 'react-router-dom';
import JsonBinApi from '../utils/jsonBin';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import Stories from './Stories';

interface Review {
  id: string;
  name: string;
  comment: string;
  date: string;
}

// --------- HERO SECTION ---------
const HeroSection = () => {
  const slides = [
    {
      content: (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '300px',
            px: 4,
            textAlign: 'center',
          }}
        >
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
            sx={{ mt: 2, color: '#666', maxWidth: 600, mb: 4 }}
          >
            Discover your true personality type with TRPI's unique approach.
            Dive deeper, correct mistypes, and gain a complete understanding of
            yourself.
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '300px',
            px: 4,
            textAlign: 'center',
          }}
        >
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
            sx={{ mt: 2, color: '#666', maxWidth: 600, mb: 4 }}
          >
            Engage with our TRPI Talk feature powered by ChatGPT for a
            different perspective on your personality.
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '300px',
            px: 4,
            textAlign: 'center',
          }}
        >
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
            sx={{ mt: 2, color: '#666', maxWidth: 600, mb: 4 }}
          >
            For a more detailed personality analysis, try our extended TRPI
            Assessment Tool.
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
            Take the Test!
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Carousel
        slides={slides}
        settings={{
          slidesToShow: 3,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
        }}
      />
    </Box>
  );
};

// --------- TEST RESULTS CAROUSEL ---------
interface Slide {
  content: JSX.Element;
}

const TypeMatrix = () => {
  return (
    <Box sx={{ mt: 8, width: '100%', py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: '500', mb: 4, textAlign: 'center' }}>
        Explore the 16 Personality Types
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ display: 'inline-block' }}>
          <Matrix width="100px" />
        </Box>
      </Box>
    </Box>
  );
};
const TestResultsCarousel = ({ slides }: { slides: Slide[] }) => {
  return (
    <Box>
      <Box sx={{ mt: 6 }}>
        {slides.length > 0 ? (
          <Carousel slides={slides} />
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Box>
  );
};

// --------- REVIEWS SECTION ---------
const ReviewsSection = ({ reviews }: { reviews: Review[] }) => (
  <Box sx={{ mt: 8 }}>
    <Grid container spacing={3}>
      {reviews.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <CircularProgress />
        </Box>
      ) : (
        reviews.map((review) => (
          <Grid item xs={12} md={6} key={review.id}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {review.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {new Date(review.date).toLocaleString()}
                </Typography>
                <Typography variant="body1">{review.comment}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  </Box>
);

// --------- BENEFITS SECTION ---------
const BenefitsSection = () => {
  const benefits = [
    { title: 'Accurate Typing', description: 'Get results you can trust, designed to reduce mistypes.' },
    { title: 'Deeper Insights', description: 'Understand how TRPI integrates the Big Five.' },
    { title: '4F Trauma Responses', description: 'Integrate trauma responses for a more nuanced understanding.' },
    { title: 'Adaptive Guidance', description: 'Get adaptable insights that grow with you, not against you.' },
    { title: 'Interconnectedness', description: 'See how the types are interconnected according to TRPI.' },
  ];

  return (
    <Box sx={{ mt: 8 }}>
      <Grid container spacing={4} justifyContent="center">
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                p: 3,
                textAlign: 'center',
                borderRadius: 2,
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#ffffff',
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {benefit.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {benefit.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// --------- HOME COMPONENT ---------
const Home = () => {
  const [slides, setSlides] = useState<Array<Slide>>([]);
  const [reviews, setReviews] = useState<Array<Review>>([]);
  const [isBinsLoading, setIsBinsLoading] = useState<boolean>(false);
  const [isReviewsLoading, setIsReviewsLoading] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // Fetch all bins (test results) using a for loop
  const fetchBins = async () => {
    try {
      const binsCollection = await JsonBinApi.getBinsInCollection();
      
      // Use a for loop to fetch each bin sequentially
      for (const item of binsCollection) {
        const newSlides: Array<Slide> = [];
        const bin = await JsonBinApi.getBinById(item.record);

        // Set up chart options and data
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

        newSlides.push({
          content: (
            <Box
              component={Link}
              to={`/result/${item.record}`}
              sx={{
                width: '80%',
                textAlign: 'center',
                textDecoration: 'none',
                color: 'inherit',
                '&:hover': { textDecoration: 'none' },
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ color: 'inherit' }}>
                TRPI Test Results - {bin.primary4FType} - {bin.type}{' '}
                {bin.accuracy ? `- ${bin.accuracy.toFixed(1)}%` : ''}
              </Typography>
              <Box display="flex" justifyContent="center" my={3}>
                <Bar data={data} options={options} />
              </Box>
            </Box>
          ),
        });
        setSlides((oldSlides: Array<any>) => {
          const allSlides: Set<Slide> = new Set<Slide>(oldSlides);
          allSlides.add(newSlides[0])
          if(new Array(...allSlides).length > 0) {
            setIsBinsLoading(false);
          }
          return new Array<Slide>(...allSlides);
        })
      }
      //setSlides(newSlides);
    } catch (error) {
      console.error('Error fetching bins:', error);
    } finally {
      setIsBinsLoading(false);
    }
  };

  // Fetch reviews using axios and JsonBinApi
  const fetchReviews = async () => {
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
      const newReviews: Review[] = [];
      // Process reviews sequentially
      for (const reviewId of fetchedReviews) {
        const reviewBin = await JsonBinApi.getBinById(reviewId);
        newReviews.push(reviewBin);
        setReviews((oldReviews: Array<any>) => {
          const allReviews: Set<Review> = new Set<Review>(oldReviews);
          allReviews.add(newReviews[0])
  
          console.log(allReviews)
          if(allReviews.size > 0) {
            setIsReviewsLoading(false);
          }
          console.log(allReviews, isReviewsLoading)
          return new Array<Review>(...allReviews);
        })
      }
      //setReviews(reviewsData);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setIsReviewsLoading(false);
    }
  };

  // On mount, initiate data fetching
  useEffect(() => {
    fetchReviews();
    fetchBins();

    setIsBinsLoading(true);
    setIsReviewsLoading(true);
  }, []);

  // --------- Konami Code & Mobile Tapping Easter Egg ---------
  useEffect(() => {
    const konamiCode = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ];
    let konamiIndex = 0;
    let tapCount = 0;
    let lastTap = Date.now();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setModalOpen(true);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    const handleTouchStart = () => {
      const currentTime = Date.now();
      if (currentTime - lastTap > 1000) {
        tapCount = 0;
      }
      tapCount++;
      lastTap = currentTime;
      if (tapCount >= 10) {
        setModalOpen(true);
        tapCount = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <Container sx={{ mt: '128px' }}>
      <HeroSection />
      <TypeMatrix />
      <ReviewsSection reviews={reviews} />
      <TestResultsCarousel slides={slides} />
      <Stories />
      <BenefitsSection />

      {/* Easter Egg Modal */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} fullWidth maxWidth="lg">
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Easter Egg
          <IconButton
            aria-label="close"
            onClick={() => setModalOpen(false)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <iframe
            src="https://traitindicator.com/3d"
            title="3D Trait Indicator"
            style={{ width: '100%', height: '500px', border: 'none' }}
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Home;
