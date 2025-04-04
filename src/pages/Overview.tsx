import React, { useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Carousel from '../components/Carousel'; // Adjust import path as needed
import Notification from '../components/Notification';
import PaginationComponent from '../components/Pagination';
import DropdownMenu from '../components/DropdownMenu';
import Label from '../components/Label';

// Example slides data for the Carousel
const slides = [
  { title: "Welcome to TRPI", description: "Discover your personality with our TRPI framework." },
  { title: "Understand Your Type", description: "Learn about cognitive functions and personality." },
  { title: "Explore Pairings", description: "Dive into Gold, Silver, Bronze, and Copper pairings." },
];

const Home: React.FC = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [paginationPage, setPaginationPage] = useState(1);

  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPaginationPage(value);
  };

  return (
    <Container sx={{ marginTop: '64px', padding: { xs: '10px', md: '20px' } }}>
      {/* Carousel */}
      

      {/* Main Content */}
      <Box>
        <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
          Welcome to Trait Indicator
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
          This page includes examples of custom components including a navigation menu, labels, notifications, pagination, dropdown menus, and more.
        </Typography>

        {/* Labels */}
        <Box sx={{ display: 'flex', gap: 1, marginBottom: '20px', flexDirection: { xs: 'column', sm: 'row' } }}>
          <Label text="New" color="primary" />
          <Label text="Warning" color="warning" />
          <Label text="Success" color="success" />
        </Box>

        {/* Dropdown Menu with dynamic items */}
        <DropdownMenu buttonLabel="Menu" menuItems={['Action', 'Another Action', 'Something Else Here']} />

        {/* Button to Show Notification */}
        <Box sx={{ marginY: 3 }}>
          <Button variant="contained" color="secondary" onClick={() => setNotificationOpen(true)}>
            Show Notification
          </Button>
        </Box>

        {/* Notification Component */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginY: 3 }}>
          <Notification
            open={notificationOpen}
            message="This is a sample notification!"
            type="success"
            onClose={handleNotificationClose}
          />
        </Box>

        {/* Pagination with dynamic count */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginY: 3 }}>
          <PaginationComponent
            count={10}
            page={paginationPage}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
