import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Grid } from '@mui/material';
import GooglePayButton from '@google-pay/button-react';
import { loadStripe } from '@stripe/stripe-js';

// Secret key parts (Base64 encoded)
const secretKeyParts = [
  'c2tfbGl2ZV81MVBWaUN6SEtuTnlLazNrbFZZREZEWWJWWllT',
  'bnlsSWVUOEVMSXdmOVExeEdqd3pnS2FlQVF4c0gwS3JsMlZG',
  'c2FOc28xcldFUzk0S3lHcm1qTVVjU0hSTTAwSW5zd0ZURmY=',
];

// Decode and reconstruct the secret key
const reconstructedSecretKey = atob(secretKeyParts.join(''));

const stripePromise = loadStripe(reconstructedSecretKey);

interface PremiumModalProps {
  open: boolean;
  onClose: () => void;
  handlePaymentSuccess: (paymentData: any) => void;
}

const PremiumModal: React.FC<PremiumModalProps> = ({ open, onClose, handlePaymentSuccess }) => {
  const processPayment = async (paymentData: any) => {
    const stripe = await stripePromise;
    if (stripe) {
      const clientSecret = reconstructedSecretKey; // Use reconstructed secret key
      const result = await stripe.confirmCardPayment(clientSecret, {
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
        handlePaymentSuccess(paymentData);
      }
    }
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="premium-modal-title" aria-describedby="premium-modal-description">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
<Grid container spacing={1} justifyContent="center" alignItems="center">
    <Grid item> 
    <Typography id="premium-modal-title" variant="h6" component="h2" gutterBottom>
          Unlock Your Answers
        </Typography>
        <Typography id="premium-modal-description" variant="body1" gutterBottom>
          Pay €1.00 to change your results!
        </Typography>
    </Grid>
<Grid item>
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
                  allowedCardNetworks: ['AMEX', 'DISCOVER', 'INTERAC', 'JCB', 'MASTERCARD', 'VISA'],
                },
                tokenizationSpecification: {
                  type: 'PAYMENT_GATEWAY',
                  parameters: {
                    gateway: 'stripe',
                    'stripe:version': '2018-10-31',
                    'stripe:publishableKey': reconstructedSecretKey,
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
              totalPriceLabel: 'Total',
              totalPrice: '1.00',
              currencyCode: 'EUR',
              countryCode: 'NL',
            },
          }}
          onLoadPaymentData={processPayment}
        />
</Grid>
</Grid>
       
      </Box>
    </Modal>
  );
};

export default PremiumModal;