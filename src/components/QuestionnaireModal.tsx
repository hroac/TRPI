import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Stack,
} from '@mui/material';
import GooglePayButton from '@google-pay/button-react';
import { loadStripe } from '@stripe/stripe-js';

// Replace with your actual keys (note: the secret key should not be exposed in production)

const stripePublishableKey =
  'pk_live_51PViCzHKnNyKk3kl1f3BOo3GMKcy68HDSO8RsjwIydff8UnKUnXtAk04aYmsmV8EHN6m3khoe8G0f7FsEQtYpO8400wOf5kqGe';

// Obfuscate secret key parts (note: this does not secure it)
const constructionParts = [
  'c2tfbGl2ZV81MVBWaUN6SEtuTnlLazNrbFZZREZEWWJWWllT',
  'bnlsSWVUOEVMSXdmOVExeEdqd3pnS2FlQVF4c0gwS3JsMlZG',
  'c2FOc28xcldFUzk0S3lHcm1qTVVjU0hSTTAwSW5zd0ZURmY=',
];
const stripeSecretKey = atob(constructionParts.join(''));


const stripePromise = loadStripe(stripePublishableKey);

interface QuestionnaireModalProps {
  open: boolean;
  onClose: () => void;
  handlePaymentSuccess: (fullProfile: any) => void;
  price: number;
}

const QuestionnaireModal: React.FC<QuestionnaireModalProps> = ({
  open,
  onClose,
  handlePaymentSuccess,
  price,
}) => {
  // Enhanced questionnaire state variables
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');
  const [education, setEducation] = useState('');
  const [relationshipStatus, setRelationshipStatus] = useState('');
  const [interests, setInterests] = useState('');
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handleModalClose = (
    event: {},
    reason?: 'backdropClick' | 'escapeKeyDown'
  ) => {
    onClose();
  };

  const handleSubmit = async () => {
    const fullProfile = {
      demographics: {
        age,
        gender,
        occupation,
        education,
        relationshipStatus,
        interests,
      },
    };
    if (paymentSuccessful) {
      handlePaymentSuccess(fullProfile);
      onClose();
    } else {
      console.error('Payment has not been completed successfully.');
    }
  };

  const processPayment = async (paymentData: any) => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        console.error('Stripe failed to initialize.');
        return;
      }

      // Create a Payment Intent via Stripe's API
      const params = new URLSearchParams({
        amount: (price * 100).toString(), // amount in cents
        currency: 'eur',
        'payment_method_types[]': 'card',
      });

      const response = await fetch('https://api.stripe.com/v1/payment_intents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${stripeSecretKey}`,
        },
        body: params.toString(),
      });

      const data = await response.json();
      if (!data.client_secret) {
        console.error('Failed to create Payment Intent:', data);
        return;
      }
      const clientSecret = data.client_secret;

      // Extract the token from Google Pay's response
      let tokenId: string;
      try {
        const tokenData = JSON.parse(
          paymentData.paymentMethodData.tokenizationData.token
        );
        tokenId = tokenData.id;
      } catch (parseError) {
        console.error('Error parsing tokenization data:', parseError);
        return;
      }

      // Confirm the card payment using the extracted token
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: {
              token: tokenId,
            },
          },
        }
      );

      if (error) {
        console.error('Payment failed:', error.message);
      } else if (paymentIntent?.status === 'succeeded') {
        console.log('Payment successful!', paymentIntent);
        setPaymentSuccessful(true);
      } else {
        console.warn('Unexpected payment status:', paymentIntent?.status);
      }
    } catch (err) {
      console.error('Error processing payment:', err);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      aria-labelledby="questionnaire-modal-title"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography
          id="questionnaire-modal-title"
          variant="h6"
          component="h2"
          gutterBottom
        >
          Create Your Personalized Profile
        </Typography>
        <Typography variant="body2" gutterBottom>
          Please answer the following questions to help us tailor your experience:
        </Typography>

        {/* Enhanced Questionnaire */}
        <Stack spacing={2} mt={2}>
          <TextField
            label="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            fullWidth
          />
          <TextField
            label="Gender"
            select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            fullWidth
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Non-binary">Non-binary</MenuItem>
            <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>
          <TextField
            label="Occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            fullWidth
          />
          <TextField
            label="Education Level"
            select
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            fullWidth
          >
            <MenuItem value="High School">High School</MenuItem>
            <MenuItem value="Bachelor's">Bachelor's</MenuItem>
            <MenuItem value="Master's">Master's</MenuItem>
            <MenuItem value="Doctorate">Doctorate</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>
          <TextField
            label="Relationship Status"
            select
            value={relationshipStatus}
            onChange={(e) => setRelationshipStatus(e.target.value)}
            fullWidth
          >
            <MenuItem value="Single">Single</MenuItem>
            <MenuItem value="Relationship">In a relationship</MenuItem>
            <MenuItem value="Married">Married</MenuItem>
            <MenuItem value="Divorced">Divorced</MenuItem>
            <MenuItem value="Widowed">Widowed</MenuItem>
          </TextField>
          <TextField
            label="Interests/Questions"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            fullWidth
            multiline
            rows={3}
          />
        </Stack>

        {/* Payment Section */}
        <Box mt={4} display="flex" justifyContent="center">
          <Stack spacing={2}>
            <Typography variant="h6">Price: €{price.toFixed(2)}</Typography>
            <GooglePayButton
              environment="PRODUCTION"
              buttonSizeMode="fill"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: 'CARD',
                    parameters: {
                      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                      allowedCardNetworks: ['AMEX', 'DISCOVER', 'MASTERCARD', 'VISA'],
                    },
                    tokenizationSpecification: {
                      type: 'PAYMENT_GATEWAY',
                      parameters: {
                        gateway: 'stripe',
                        'stripe:version': '2018-10-31',
                        'stripe:publishableKey': stripePublishableKey,
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: 'BCR2DN4TWXNYFJL5',
                  merchantName: 'Trauma Indicator',
                },
                transactionInfo: {
                  totalPriceStatus: 'FINAL',
                  totalPrice: price.toFixed(2),
                  currencyCode: 'EUR',
                  countryCode: 'NL',
                },
              }}
              onLoadPaymentData={processPayment}
            />
          </Stack>
        </Box>

        {/* Submit Button */}
        <Box mt={4} textAlign="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!paymentSuccessful}
          >
            Submit Profile
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default QuestionnaireModal;
