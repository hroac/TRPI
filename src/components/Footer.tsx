import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, GitHub, Launch } from '@mui/icons-material';
import KickstarterIcon from '@mui/icons-material/Launch'; // Placeholder for Kickstarter

const Footer: React.FC = () => {
  return (
    <Box component="footer" bgcolor="primary.main" color="white" py={5} mt={4}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography color="inherit" variant="body1" paragraph>
              We aim to provide the most insightful and accurate personality assessments. Our mission is to help you discover more about yourself and others.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box display="flex" flexDirection="column">
              <Link href="/#/about" color="inherit" underline="hover">About</Link>
              <Link href="/#/services" color="inherit" underline="hover">Services</Link>
              <Link href="/#/contact" color="inherit" underline="hover">Contact Us</Link>
              <Link href="/#/privacy-policy" color="inherit" underline="hover">Privacy Policy</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex" gap={2}>
              <IconButton href="https://facebook.com/" target="_blank" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" color="inherit">
                <LinkedIn />
              </IconButton>
              <IconButton href="https://github.com" target="_blank" color="inherit">
                <GitHub />
              </IconButton>
              <IconButton href="https://www.kickstarter.com/projects/2090755632/trpi-a-next-gen-alternative-to-mbti-with-deeper-insights" target="_blank" color="inherit">
                <Launch />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Trauma Indicator. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
