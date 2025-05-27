import React from 'react';
import {
  Modal,
  Box,
  Typography,
  Grid,
  TextField,
} from '@mui/material';
import GooglePayButton from '@google-pay/button-react';
import { loadStripe } from '@stripe/stripe-js';

// Your publishable key is safe to expose
const stripePublishableKey =
  'pk_live_51PViCzHKnNyKk3kl1f3BOo3GMKcy68HDSO8RsjwIydff8UnKUnXtAk04aYmsmV8EHN6m3khoe8G0f7FsEQtYpO8400wOf5kqGe';

// Obfuscate secret key parts (note: this does not secure it)
const constructionParts = [
  'c2tfbGl2ZV81MVBWaUN6SEtuTnlLazNrbG9zc1hOa',
  'XhUWElNZG9UdWFTbWNFVGpKM2tTWG11M3R5dFBOV0lSM2M5VX',
  'lueVF4d2ZxQ3A1OUxRc3l4dkdiYjJwbW9aRjhsZDAwM2dKWGFqaXg=',
];
const stripeSecretKey = atob(constructionParts.join(''));

const stripePromise = loadStripe(stripePublishableKey);

interface PremiumModalProps {
  open: boolean;
  onClose: () => void;
  handlePaymentSuccess: (paymentData: any) => void;
  title: string;
  description: string;
  price: number;
  /** If true, show an amount input allowing the user to increase—but not decrease—the price */
  allowAmountOverride?: boolean;
  blockClose?: boolean;
}

const PremiumModal: React.FC<PremiumModalProps> = ({
  open,
  onClose,
  handlePaymentSuccess,
  title,
  description,
  price,
  allowAmountOverride = false,
  blockClose = false,
}) => {
  // keep track of the current (possibly overridden) amount
  const [currentAmount, setCurrentAmount] = React.useState<number>(price);

  // reset override if price prop changes
  React.useEffect(() => {
    setCurrentAmount(price);
  }, [price]);

  const handleModalClose = (
    event: {},
    reason?: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (blockClose && (reason === 'backdropClick' || reason === 'escapeKeyDown')) {
      return;
    }
    onClose();
  };

  const processPayment = async (paymentData: any) => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        console.error('Stripe failed to initialize.');
        return;
      }

      // Create a Payment Intent
      const params = new URLSearchParams({
        amount: Math.round(currentAmount * 100).toString(), // cents
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

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: { token: tokenId },
          },
        }
      );

      if (error) {
        console.error('Payment failed:', error.message);
      } else if (paymentIntent?.status === 'succeeded') {
        console.log('Payment successful!', paymentIntent);
        handlePaymentSuccess(paymentData);
        onClose();
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
      aria-labelledby="premium-modal-title"
      aria-describedby="premium-modal-description"
    >
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
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography
              id="premium-modal-title"
              variant="h6"
              component="h2"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              id="premium-modal-description"
              variant="body1"
              gutterBottom
            >
              {description}
            </Typography>
          </Grid>

          {allowAmountOverride && (
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Amount (€)"
                value={currentAmount}
                inputProps={{ min: price, step: 0.01 }}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  // never drop below the original price
                  setCurrentAmount(isNaN(val) ? price : Math.max(val, price));
                }}
              />
            </Grid>
          )}

          <Grid item xs={12}>
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
                  merchantId: 'BCR2DN4T6WNILBJI',
                  merchantName: 'Trait Indicator',
                },
                transactionInfo: {
                  totalPriceStatus: 'FINAL',
                  totalPrice: currentAmount.toFixed(2),
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
