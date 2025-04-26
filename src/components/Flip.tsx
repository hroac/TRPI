// src/components/FlipLetter.tsx
import React, { FC } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// Opposite mapping for each dichotomy
export const OPPOSITE: Record<string, string> = {
  E: "I", I: "E",
  S: "N", N: "S",
  T: "F", F: "T",
  P: "J", J: "P",
};

interface FlipLetterProps {
  letter: keyof typeof OPPOSITE;
  onClick: () => void;
}

export const FlipLetter: FC<FlipLetterProps> = ({ letter, onClick }) => {
  const variants = {
    enter: { y: -40, opacity: 0 },
    center: { y: 0,   opacity: 1 },
    exit:  { y: 40,  opacity: 0 },
  };

  return (
    <Box
      onClick={onClick}
      sx={{
        width: 100,
        height: 120,
        cursor: "pointer",
      }}
    >
      <Card
        elevation={3}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <CardContent
          sx={{
            p: 0,
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={letter}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              style={{
                position: "absolute",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                component="div"
                sx={{ fontSize: "4rem", lineHeight: 1.75 }}
              >
                {letter}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </Box>
  );
};