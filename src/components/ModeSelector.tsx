import React, { useState } from "react";
import { Box, Grid, Typography, Card, ListItem, List } from "@mui/material";

const ModeSelector = () => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  const modes = [
    {
      name: "Fight",
      color: "#ff0000",
      description: "You are assertive and proactive, often facing challenges head-on. This mode is characterized by a readiness to take action, a strong drive to overcome obstacles, and confidence in leadership roles."
    },
    {
      name: "Freeze",
      color: "#3b82f6",
      description: "You are analytical and observant, preferring to take a step back and evaluate situations before acting. This mode often involves processing information carefully, maintaining a calm demeanor, and excelling in logical problem-solving."
    },
    {
      name: "Fawn",
      color: "#a855f7",
      description: "You are empathetic and accommodating, often striving to maintain harmony in relationships. This mode emphasizes collaboration, emotional connection, and finding ways to support others while navigating challenges together."
    },
    {
      name: "Flight",
      color: "#22c55e",
      description: "You are creative and adaptive, focusing on finding innovative ways to navigate challenges. This mode often involves exploring new possibilities, embracing change, and seeking freedom to achieve your goals."
    }
  ];

  const handleSelect = (mode: string) => {
    setSelectedMode(mode);
  };

  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="body1" paragraph>
            The 4F trauma responses are fundamental to the TRPI framework, each representing
            different approaches to managing stress:
          </Typography>
      <Grid container spacing={4} justifyContent="center">
        {modes.map((mode) => (
          <Grid item xs={12} sm={6} md={3} key={mode.name}>
            <Card
              onClick={() => handleSelect(mode.name)}
              sx={{
                p: 3,
                backgroundColor: mode.color,
                color: "white",
                textAlign: "center",
                cursor: "pointer",
                borderRadius: "12px",
                boxShadow: selectedMode === mode.name ? "0px 4px 20px rgba(0, 0, 0, 0.2)" : "0px 2px 10px rgba(0, 0, 0, 0.1)",
                transform: selectedMode === mode.name ? "scale(1.1)" : "scale(1)",
                transition: "all 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.1)", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)" },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>{mode.name}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedMode && <ResultDisplay selectedMode={selectedMode} />}
    </Box>
  );
};

interface ResultProps {
  selectedMode: string;
}

const ResultDisplay: React.FC<ResultProps> = ({ selectedMode }) => {
  const modeDetails: Record<string, { mbti: string[]; description: string }> = {
    Fight: {
      mbti: ["ENTP", "ESTP", "ENTJ", "ESTJ"],
      description: "The Fight mode signifies a proactive and assertive approach to challenges. You likely excel in taking charge, solving problems, and pushing through adversity. You thrive in high-energy situations and value decisive action to overcome obstacles effectively."
    },
    Freeze: {
      mbti: ["INTP", "ISTP", "INTJ", "ISTJ"],
      description: "The Freeze mode highlights a calm and analytical response to challenges. You excel at observing, gathering detailed information, and making well-thought-out decisions. This mode reflects your ability to stay composed and logical under pressure."
    },
    Fawn: {
      mbti: ["ISFJ", "INFJ", "ESFJ", "ENFJ"],
      description: "The Fawn mode emphasizes empathy and collaboration. You excel in creating harmony and nurturing relationships. This mode showcases your natural ability to build trust, support others, and foster cooperation in challenging situations."
    },
    Flight: {
      mbti: ["ESFP", "ENFP", "ISFP", "INFP"],
      description: "The Flight mode represents creativity and adaptability. You excel in thinking outside the box and exploring innovative solutions. This mode highlights your resilience, flexibility, and ability to transform challenges into opportunities for growth."
    },
  };

  const details = modeDetails[selectedMode];

  return (
    <Card
      sx={{
        mt: 4,
        p: 4,
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#555" }}>
        {selectedMode} Mode
      </Typography>
      <Typography sx={{ mt: 2, fontSize: "1.1rem", color: "#666" }}>
        {details.description}
      </Typography>
      <Typography sx={{ mt: 2, fontStyle: "italic", color: "#888" }}>
        Linked MBTI Types: {details.mbti.join(", ")}
      </Typography>
    </Card>
  );
};

export default ModeSelector;
