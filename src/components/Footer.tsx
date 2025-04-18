import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, GitHub, Launch } from '@mui/icons-material';

import { SvgIcon } from '@mui/material';


function KickstarterIcon(props: any) {
  return (
    <img
    src={`${process.env.PUBLIC_URL}/kickstarter.svg`}
    alt="Kickstarter"
    style={{ width: '18px', height: '18px' }}
  />);
}

function DiscordIcon(props: any) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/discord.svg`}
      alt="Discord"
      style={{ width: '18px', height: '18x' }}
    />);
}




const Footer: React.FC = () => {
  return (
    <Box component="footer" bgcolor="primary.main" color="white" py={3} mt={4}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          {/* About Us Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography color="inherit" variant="body2" paragraph>
              We aim to provide the most insightful and accurate personality assessments. 
              Our mission is to help you discover more about yourself and others.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box display="flex" flexDirection="column">
              <Link href="/#/about" color="inherit" underline="hover">About</Link>
              <Link href="/#/services" color="inherit" underline="hover">Services</Link>
              <Link href="/#/contact" color="inherit" underline="hover">Contact Us</Link>
              <Link href="/#/terms" color="inherit" underline="hover">Terms of Service</Link>
              <Link href="/#/privacy-policy" color="inherit" underline="hover">Privacy Policy</Link>
            </Box>
          </Grid>

          {/* Follow Us Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex" gap={1}>
              <IconButton href="https://www.facebook.com/profile.php?id=61564992932140" target="_blank" color="inherit">
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="inherit">
                <Twitter fontSize="small" />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="inherit">
                <Instagram fontSize="small" />
              </IconButton>
              <IconButton href="https://github.com/hroac/TRPI" target="_blank" color="inherit">
                <GitHub fontSize="small" />
              </IconButton>
              <IconButton href="https://discord.gg/rSHSrb75Nj" target="_blank" color="inherit">
                <DiscordIcon fontSize="small" />
              </IconButton>
              <IconButton href="https://www.kickstarter.com/projects/2090755632/trpi-a-next-gen-alternative-to-mbti-with-deeper-insights" target="_blank" color="inherit">
                <KickstarterIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box mt={3} textAlign="center" borderTop="1px solid rgba(255, 255, 255, 0.2)" pt={2}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Trait Indicator. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
