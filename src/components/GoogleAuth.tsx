// src/components/GoogleAuth.tsx
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { Button } from '@mui/material';

export default function GoogleAuthButton({ onSuccess }: { onSuccess: (tokenResponse: any) => void }) {
  const login = useGoogleLogin({
    scope: 'https://www.googleapis.com/auth/calendar',
    onSuccess: onSuccess,
    onError: (err) => console.error('Login failed', err),
    flow: 'implicit',    // or 'auth-code' if you want a code to exchange on your backend
  });

  return (
    <Button variant="contained" onClick={() => login()}>
      Sign in with Google
    </Button>
  );
}
