import React, { useEffect } from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const routes = [
  "/", "/test", "/result/:binId", "/input",
  "/about/:type", "/about", "/contact",
  "/services", "/privacy-policy", "/talk",
  "/sources", "/reviews", "/compare",
  "/scheduler", "/terms", "/assessment", "/oracle"
];

function matchRoute(path: string) {
  return routes.some(route => {
    if (route.includes(":")) {
      // Convert :param to [^/]+
      const regex = new RegExp('^' +
        route.replace(/:[^/]+/g, '[^/]+')
             .replace(/\//g, '\\/') +
        '$');
      return regex.test(path);
    }
    return route === path;
  });
}

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Only do this redirect logic for deployments that use hash routing + static hosting
    const { pathname, search, hash } = window.location;
    if (matchRoute(pathname) && !hash.startsWith("#/")) {
      window.location.replace(`${window.location.origin}/#${pathname}${search}`);
    }
  }, []);

  return (
    <Box sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}>
      <Box
        component="main"
        sx={{
          position: "relative",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Container
          maxWidth="xs"
          sx={{
            position: "relative",
            zIndex: 1,
            background: "rgba(255,255,255,1)",
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center",
            p: 4,
          }}
        >
          <Typography variant="h1" sx={{ fontSize: "4rem", mb: 1, color: "#527e79" }}>
            404
          </Typography>
          <Typography sx={{ fontSize: "1.125rem", mb: 3, color: "#527e79" }}>
            Oops! The page you’re looking for doesn’t exist or has been moved.
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "#fa695e",
              color: "#fff",
              borderRadius: 1,
              px: 3,
              py: 1.5,
              "&:hover": {
                background: "#d14e45"
              }
            }}
            onClick={() => navigate("/")}
          >
            Go Back Home
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
