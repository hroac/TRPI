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

// Secret key for Stripe
const stripePromise = loadStripe('your-stripe-public-key'); // Replace with your Stripe public key

interface QuestionnaireModalProps {
  open: boolean;
  onClose: () => void;
  handlePaymentSuccess: (fullProfile: any) => void;
  price: number;
}

const QuestionnaireModal: React.FC<QuestionnaireModalProps> = ({ open, onClose, handlePaymentSuccess, price }) => {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [career, setCareer] = useState('');
  const [familyStatus, setFamilyStatus] = useState('');
  const [paymentSuccessful, setPaymentSuccessful] = useState(true);

  const handleSubmit = async () => {
    const fullProfile = {
      demographics: {
        age,
        sex,
        career,
        familyStatus,
      },
    };

    if (paymentSuccessful) {
      handlePaymentSuccess(fullProfile);
      onClose();
    }
  };

  const processPayment = async (paymentData: any) => {
    const stripe = await stripePromise;
    if (stripe) {
      const result = await stripe.confirmCardPayment(`pk_live_51PViCzHKnNyKk3kl1f3BOo3GMKcy68HDSO8RsjwIydff8UnKUnXtAk04aYmsmV8EHN6m3khoe8G0f7FsEQtYpO8400wOf5kqGe`
        , {
        payment_method: {
          card: {
            token: paymentData.paymentMethodData.tokenizationData.token,
          },
        },
      });

      if (result.error) {
        console.error('Payment failed:', result.error.message);
      } else if (result.paymentIntent?.status === 'succeeded') {
        console.log('Payment successful!');
        setPaymentSuccessful(true);
      }
    }
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="questionnaire-modal-title">
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
        <Typography id="questionnaire-modal-title" variant="h6" component="h2" gutterBottom>
          Generate Your Questionnaire Profile
        </Typography>
        <Typography variant="body2" gutterBottom>
          Answer the following questions to personalize your profile:
        </Typography>

        {/* Questionnaire */}
        <Stack spacing={2} mt={2}>
          <TextField
            label="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            fullWidth
          />
          <TextField
            label="Sex"
            select
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            fullWidth
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>
          <TextField
            label="Career"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
            fullWidth
          />
          <TextField
            label="Family Status"
            select
            value={familyStatus}
            onChange={(e) => setFamilyStatus(e.target.value)}
            fullWidth
          >
            <MenuItem value="Single">Single</MenuItem>
            <MenuItem value="Married">Married</MenuItem>
            <MenuItem value="Divorced">Divorced</MenuItem>
          </TextField>
        </Stack>

        {/* Payment Section */}
        <Box mt={4} display='flex' justifyContent={'center'}>
            <Stack>
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
                      'stripe:publishableKey': 'your-stripe-public-key', // Replace with your public key
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
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default QuestionnaireModal;
