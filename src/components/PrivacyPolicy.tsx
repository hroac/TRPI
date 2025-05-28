// PrivacyPolicy.tsx
import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container>
      <Box sx={{ marginTop: '128px', py: 6 }}>
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}>
          Privacy Policy
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, mb: 3, fontStyle: 'italic', color: 'text.secondary' }}>
          <strong>Google Login & Services:</strong>  
          When you log in with Google or use any Google service via this website, <u>no personal information, email addresses, or contact details are collected, stored, or shared by us</u>. All authentication and data handling is performed directly by Google.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, fontWeight: 'bold' }}>1. Data Collection</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          We collect only the information necessary to provide accurate personality assessments (e.g., your test responses). No additional data is collected without your consent. Your data is stored securely and is never shared with third parties.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, fontWeight: 'bold' }}>2. Data Usage</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Your data is used solely to generate personalized insights and improve the TRPI framework.
          By using our service, you consent to your anonymized data being used for research purposes aimed at improving the TRPI framework and contributing to the field of personality research.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, fontWeight: 'bold' }}>3. Data Security</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          We employ industry-standard measures to protect your data from unauthorized access. Your information is stored in encrypted databases.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, fontWeight: 'bold' }}>4. Data Retention</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Your data will be retained as long as you have an account with us. You may request deletion of your data at any time.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, fontWeight: 'bold' }}>5. Changes to This Policy</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          We may update this Privacy Policy periodically. 
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
