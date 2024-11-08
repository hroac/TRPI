import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Container, Typography } from '@mui/material';
import 'swiper/css';

interface Slide {
  title: string;
  description: string;
}

interface CarouselProps {
  slides: Slide[];
  settings?: any;  // Use `any` for flexibility; alternatively, define a strict type for settings
}

// Default Swiper settings
const defaultSettings = {
  spaceBetween: 50,
  slidesPerView: 1,
  autoplay: { delay: 3000 },
  loop: true,
};

const Carousel: React.FC<CarouselProps> = ({ slides, settings = defaultSettings }) => {
  // Merge custom settings with default settings
  const mergedSettings = { ...defaultSettings, ...settings };

  return (
    <Box sx={{ width: '80%', margin: 'auto', paddingTop: '20px' }}>
      <Swiper {...mergedSettings}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ padding: '20px', backgroundColor: 'background', borderRadius: '8px' }}>
            <Box>
          <Box style={{ marginBottom: '100px' }} />
            <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
              <Typography variant="h1" component="h2" gutterBottom>
                  {slide.title}
              </Typography>
            </Container>
            <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
              <Typography variant="h3" component="h2" gutterBottom>
                  {slide.description}
              </Typography>
            </Container>
          </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
