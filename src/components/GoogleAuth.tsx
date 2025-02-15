import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { Box, CircularProgress } from "@mui/material";
import { useState } from "react";

interface GoogleAuthButtonProps {
  onSuccess: (user: { email: string; accessToken: string }) => void;
}

const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);

  // ✅ Function to fetch OAuth access token
  const fetchAccessToken = useGoogleLogin({
    scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.email",
    onSuccess: async (response) => {
      console.log("OAuth Token Response:", response);
      const accessToken = response.access_token;
      if (!accessToken) {
        console.error("No access token received");
        return;
      }

      try {
        // ✅ Fetch user email
        const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const userInfo = await res.json();
        console.log("User Info:", userInfo);

        // ✅ Call onSuccess with user data
        onSuccess({ email: userInfo.email, accessToken });
      } catch (error) {
        console.error("Error fetching user info:", error);
      } finally {
        setLoading(false);
      }
    },
    onError: () => console.error("OAuth Login Failed"),
    flow: "implicit",
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
      <GoogleLogin
        onSuccess={() => {
          setLoading(true);
          fetchAccessToken();
        }}
        onError={() => console.error("Google Login Failed")}
      />
      {loading && <CircularProgress size={24} />}
    </Box>
  );
};

export default GoogleAuthButton;
