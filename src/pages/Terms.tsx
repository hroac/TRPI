import React from 'react';
import { Container, Box, Typography, Divider, Link } from '@mui/material';

const TermsOfService: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Terms of Service
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Effective Date: January 1, 2025
      </Typography>
      <Divider sx={{ my: 2 }} />

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          1. Acceptance of Terms
        </Typography>
        <Typography paragraph>
          By accessing and using traumaindicator.com ("Service"), you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you do not agree to these Terms, please do not use our Service.
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          2. Description of Service
        </Typography>
        <Typography paragraph>
          TraumaIndicator.com provides an online platform for individuals seeking information and resources related to trauma and personality research. We strive to offer accurate and helpful content; however, the Service is provided on an "as is" basis without warranties of any kind.
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          3. User Responsibilities
        </Typography>
        <Typography paragraph>
          You are responsible for your use of the Service. This includes ensuring that any content you post complies with applicable laws and does not infringe on any third-party rights. You agree not to misuse the Service or help anyone else do so.
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          4. Intellectual Property
        </Typography>
        <Typography paragraph>
          All content available on traumaindicator.com is the intellectual property of its respective owners. You agree not to reproduce, distribute, or create derivative works from the content without proper authorization.
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          5. Limitation of Liability
        </Typography>
        <Typography paragraph>
          In no event shall traumaindicator.com or its affiliates be liable for any indirect, incidental, or consequential damages arising out of your use or inability to use the Service.
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          6. Changes to Terms
        </Typography>
        <Typography paragraph>
          We reserve the right to modify these Terms at any time. Your continued use of the Service after any changes constitutes your acceptance of the new Terms.
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          7. Contact Information
        </Typography>
        <Typography paragraph>
          If you have any questions or concerns regarding these Terms, please contact using the provided <Link href="/#/contact" color="inherit" underline="hover">contact form.</Link>.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsOfService;
