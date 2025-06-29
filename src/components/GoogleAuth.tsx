import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { Box, Button, Typography } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

const GOOGLE_SVG = 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg';

export default function GoogleAuthButton({
  onSuccess,
  onError,
  size = 'large',
}: {
  onSuccess: (tokenResponse: { access_token: string }) => void;
  onError?: (error: unknown) => void;
  size?: 'small' | 'large';
}) {
  const login = useGoogleLogin({
    flow: 'implicit',
    scope: 'https://www.googleapis.com/auth/calendar.events',
    onSuccess,
    onError,
  });

  // ─────────────── Animated Small ───────────────
  if (size === 'small') {
    return (
      <Box
        component="button"
        onClick={() => login()}
        sx={{
          all: 'unset',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '9999px',
          boxShadow: 1,
          height: 40,
          width: 40,
          overflow: 'hidden',
          px: 0,
          minWidth: 0,
          maxWidth: 180,
          transition: 'width 320ms cubic-bezier(.5,1.5,.5,1),box-shadow 0.2s',
          position: 'relative',

          '&:hover': {
            width: 180,
            boxShadow: 3,
          },

          // Label fades in on hover
          '& .google-label': {
            opacity: 0,
            transform: 'translateX(8px)',
            transition: 'opacity 200ms 90ms, transform 200ms 90ms',
            ml: '20px',
            color: 'black',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            letterSpacing: 0.1,
            fontSize: 14,
          },
          '&:hover .google-label': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        }}
      >
        <Box sx={{position: 'relative', left: '9px', top: '2px'}}>
          <SvgIcon component="svg" viewBox="0 0 24 24" sx={{ fontSize: 22 }}>
          <image href={GOOGLE_SVG} width="24" height="24" />
        </SvgIcon>
        </Box>
        <Typography
          component="span"
          className="google-label"
          sx={{ml: 1}}
        >
          Sign in to Google
        </Typography>
      </Box>
    );
  }

  // ─────────────── Standard Large ───────────────
  return (
    <Button
      onClick={() => login()}
      variant="outlined"
      startIcon={
        <SvgIcon component="svg" viewBox="0 0 24 24">
          <image href={GOOGLE_SVG} width="24" height="24" />
        </SvgIcon>
      }
      sx={{
        textTransform: 'none',
        backgroundColor: '#fff',
        color: 'rgba(0, 0, 0, 0.68)',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        fontSize: 16,
        fontWeight: 500,
        height: 44,
        px: 3,
        borderRadius: '9999px',
        letterSpacing: 0.1,
        '&:hover': {
          backgroundColor: '#f5f5f5',
          borderColor: 'rgba(0, 0, 0, 0.23)',
        },
      }}
    >
      Sign in to Google
    </Button>
  );
}
