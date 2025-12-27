import React, { useState } from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";

const ModeSelector = () => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  const modes = [
    {
      name: "Fight",
      color: "#ef4444", // Red
      description: "You are assertive and proactive, often facing challenges head-on. This mode is characterized by a readiness to take action, a strong drive to overcome obstacles, and confidence in leadership roles."
    },
    {
      name: "Fawn",
      color: "#a855f7", // Purple
      description: "You are empathetic and accommodating, often striving to maintain harmony in relationships. This mode emphasizes collaboration, emotional connection, and finding ways to support others while navigating challenges together."
    },
    {
      name: "Freeze",
      color: "#3b82f6", // Blue
      description: "You are analytical and observant, preferring to take a step back and evaluate situations before acting. This mode often involves processing information carefully, maintaining a calm demeanor, and excelling in logical problem-solving."
    },
    {
      name: "Flight",
      color: "#22c55e", // Green
      description: "You are creative and adaptive, focusing on finding innovative ways to navigate challenges. This mode often involves exploring new possibilities, embracing change, and seeking freedom to achieve your goals."
    }
  ];

  const handleSelect = (mode: string) => {
    setSelectedMode(mode);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, textAlign: "center" }}>
      <Typography variant="body1" paragraph color="text.secondary">
        The 4F trauma responses are fundamental to the TRPI framework, each representing
        different approaches to managing stress:
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="stretch">
        {modes.map((mode) => (
          <Grid item xs={6} md={3} key={mode.name} sx={{ display: 'flex' }}>
            <Card
              onClick={() => handleSelect(mode.name)}
              elevation={selectedMode === mode.name ? 8 : 2}
              sx={{
                width: '100%',
                backgroundColor: mode.color,
                color: "white",
                cursor: "pointer",
                borderRadius: "12px",
                transform: selectedMode === mode.name ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease-in-out",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 80,
                "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
              }}
            >
              <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                  {mode.name}
                </Typography>
              </CardContent>
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
  const modeDetails: Record<string, { functions: string, mbti: string[]; description: string }> = {
    Fight: {
      functions: "Se/Ne + Ti",
      mbti: ["ENTP", "ESTP", "INTP", "ISTP"],
      description: "The Fight mode signifies a proactive and assertive approach to challenges. You likely excel in taking charge, solving problems, and pushing through adversity. You thrive in high-energy situations and value decisive action to overcome obstacles effectively."
    },
    Freeze: {
      functions: "Si/Ni + Te",
      mbti: ["INTJ", "ISTJ", "ENTJ", "ESTJ"],
      description: "The Freeze mode highlights a calm and analytical response to challenges. You excel at observing, gathering detailed information, and making well-thought-out decisions. This mode reflects your ability to stay composed and logical under pressure."
    },
    Fawn: {
      functions: "Si/Ni + Fe",
      mbti: ["ISFJ", "INFJ", "ESFJ", "ENFJ"],
      description: "The Fawn mode emphasizes empathy and collaboration. You excel in creating harmony and nurturing relationships. This mode showcases your natural ability to build trust, support others, and foster cooperation in challenging situations."
    },
    Flight: {
      functions: "Se/Ne + Fi",
      mbti: ["ESFP", "ENFP", "ISFP", "INFP"],
      description: "The Flight mode represents creativity and adaptability. You excel in thinking outside the box and exploring innovative solutions. This mode highlights your resilience, flexibility, and ability to transform challenges into opportunities for growth."
    },
  };

  const details = modeDetails[selectedMode];

  return (
    <Card
      elevation={0}
      sx={{
        mt: 4,
        p: 3,
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        border: '1px solid #e0e0e0'
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#444" }}>
        {selectedMode} Mode
      </Typography>
      <Typography sx={{ mt: 2, fontSize: "1rem", color: "#666", lineHeight: 1.6 }}>
        {details.description}
      </Typography>
      <Box mt={2}>
        <Typography variant="body2" sx={{ fontStyle: "italic", color: "#888" }}>
          Linked functions: <strong>{details.functions}</strong>
        </Typography>
        <Typography variant="body2" sx={{ fontStyle: "italic", color: "#888", mt: 0.5 }}>
          MBTI: {details.mbti.join(", ")}
        </Typography>
      </Box>
    </Card>
  );
};

export default ModeSelector;
