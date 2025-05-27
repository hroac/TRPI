// src/components/GoogleAuth.tsx
import React from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';

interface GoogleAuthButtonProps {
  onSuccess: (credential: CredentialResponse) => void;
}

const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ onSuccess }) => (
  <GoogleLogin
    onSuccess={onSuccess}
    onError={() => console.error('error logging in with google')}
    // --- Branding & styling options ---
    theme="outline"           // Google's recommended blue button
    shape="pill"           // rectangular pill shape
    size="large"                  // large button
    text="continue_with"          // "Continue with Google"
    logo_alignment="left"         // Google "G" icon on the left
    width={200}                   // fixed width (optional)
    locale="en"                   // adjust as needed
  />
);

export default GoogleAuthButton;
