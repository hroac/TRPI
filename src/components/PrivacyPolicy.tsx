// PrivacyPolicy.tsx
import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container>
      <Box sx={{ py: 6 }}>
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}>
          Privacy Policy
        </Typography>

        <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>1. Data Collection</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          We collect personal data such as your test responses to provide accurate personality assessments and to improve our services. Your data is stored securely and will not be shared with third parties.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, fontWeight: 'bold' }}>2. Data Usage</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Your data is used to generate personalized insights and improve the TRPI framework. Aggregate, non-identifiable data may be used for research purposes.
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
          We may update this Privacy Policy periodically. Notifications of changes will be posted on our website.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
