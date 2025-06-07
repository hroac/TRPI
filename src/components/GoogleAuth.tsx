// src/components/GoogleAuth.tsx
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { Button } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

// Full-colour Google “G” from Wikimedia Commons
const GOOGLE_SVG = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_logo.svg';

export default function GoogleAuthButton({
  onSuccess,
  onError,
}: {
  onSuccess: (tokenResponse: { access_token: string }) => void;
  onError?: (error: unknown) => void;
}) {
  const login = useGoogleLogin({
    flow: 'implicit',
    scope: 'https://www.googleapis.com/auth/calendar.events',
    onSuccess,
    onError,
  });

  return (
    <Button
      onClick={() => login()}
      variant="outlined"
      startIcon={
        <SvgIcon component="svg" viewBox="0 0 24 24">
    <image href="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" width="24" height="24"/>
  </SvgIcon>
      }
      sx={{
        textTransform: 'none',
        backgroundColor: '#fff',
        color: 'rgba(0, 0, 0, 0.54)',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        fontSize: 14,
        fontWeight: 500,
        height: 42,
        px: 3,                     // horizontal padding
        borderRadius: '9999px',    // pill shape
        '&:hover': {
          backgroundColor: '#f5f5f5',
          borderColor: 'rgba(0, 0, 0, 0.23)',
        },
      }}
    >
      Sign in with Google
    </Button>
  );
}
