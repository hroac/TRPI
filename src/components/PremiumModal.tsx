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
const reconstructedSecretKey = `pk_live_51PViCzHKnNyKk3kl1f3BOo3GMKcy68HDSO8RsjwIydff8UnKUnXtAk04aYmsmV8EHN6m3khoe8G0f7FsEQtYpO8400wOf5kqGe`
//atob(secretKeyParts.join(''));

const stripePromise = loadStripe(reconstructedSecretKey);

interface PremiumModalProps {
  open: boolean;
  onClose: () => void;
  handlePaymentSuccess: (paymentData: any) => void;
  title: string,
  description: string
  price: number,
  blockClose?: boolean
}

const PremiumModal: React.FC<PremiumModalProps> = ({ open, onClose, handlePaymentSuccess, title, description, price, blockClose = false }) => {
  const handleModalClose = (
    event: {},
    reason?: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (blockClose && reason === 'backdropClick' || reason === 'escapeKeyDown') {
      // Prevent closing the modal if the user clicks outside or presses Esc.
      return;
    }
    onClose();
  };

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
    <Modal open={open} onClose={handleModalClose} aria-labelledby="premium-modal-title" aria-describedby="premium-modal-description">
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
          {title}
        </Typography>
        <Typography id="premium-modal-description" variant="body1" gutterBottom>
          {description}
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
              totalPrice: `${price}`,
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
