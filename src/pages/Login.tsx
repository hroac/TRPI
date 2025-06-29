import React from 'react';
import { Box } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleAuthButton from '../components/GoogleAuth';
import { useNavigate } from 'react-router-dom';

const GOOGLE_CLIENT_ID = '356497060674-ndjka8l1iod2obja36djpah0fckmaot9.apps.googleusercontent.com';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSuccess = (tokenResponse: { access_token: string }) => {
    sessionStorage.setItem('guid', tokenResponse.access_token);
    navigate('/');
  };

  return (
    <Box sx={{ mt: 12, display: 'flex', justifyContent: 'center' }}>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <GoogleAuthButton onSuccess={handleSuccess} onError={console.error} />
      </GoogleOAuthProvider>
    </Box>
  );
};

export default Login;
