import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, IconButton } from '@mui/material';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Slide {
  content: React.ReactNode;
}

interface CarouselProps {
  slides: Slide[];
  settings?: any;
  arrows?: boolean;
}

const defaultSettings = {
  spaceBetween: 50,
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
};

const Carousel: React.FC<CarouselProps> = ({ slides, settings = {}, arrows = false}) => {
  const mergedSettings = { ...defaultSettings, ...settings };
  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <Box sx={{ width: '100%', position: 'relative', pt: 2 }}>
      <Swiper
        {...mergedSettings}
        modules={[Autoplay, Navigation]}
        onSwiper={(swiper: any) => (swiperRef.current = swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide.content}</SwiperSlide>
        ))}
      </Swiper>

      {/* Left Arrow */}
     { arrows && (
       <IconButton
       onClick={handlePrev}
       sx={{
         position: 'absolute',
         top: '50%',
         left: '20px',
         transform: 'translateY(-50%)',
         backgroundColor: 'primary',
         color: '#fff',
         zIndex: 2,
         '&:hover': { backgroundColor: 'secondary' },
         width: 60,
         height: 60,
       }}
     >
       <ArrowBackIosNewIcon fontSize="large" />
     </IconButton>
     )}
      {/* Right Arrow */}
     {arrows && (
       <IconButton
       onClick={handleNext}
       sx={{
         position: 'absolute',
         top: '50%',
         right: '20px',
         transform: 'translateY(-50%)',
         backgroundColor: 'primary',
         color: '#fff',
         zIndex: 2,
         '&:hover': { backgroundColor: 'secondary' },
         width: 60,
         height: 60,
       }}
     >
       <ArrowForwardIosIcon fontSize="large" />
     </IconButton>
     )}
    </Box>
  );
};

export default Carousel;

