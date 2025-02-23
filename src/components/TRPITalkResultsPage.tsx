// ResultsPage.tsx
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Box, Typography, Paper } from "@mui/material";

// ------------------------------------
// Big Five Statements Array (Same as in TrpiTalk)
// ------------------------------------
const statements = [
  { text: 'I am open to exploring new ideas and perspectives.', trait: 'openness' },
  { text: 'I often think about abstract concepts and like to ponder deep questions.', trait: 'openness' },
  { text: 'I am comfortable with change and easily adapt to new situations.', trait: 'openness' },
  { text: 'I prefer organized, planned activities over spontaneous events.', trait: 'conscientiousness' },
  { text: 'I often take charge in group settings and feel energized by social interactions.', trait: 'extraversion' },
  { text: 'I often prioritize harmony and avoid conflict in my relationships.', trait: 'agreeableness' },
  { text: 'I tend to feel anxious or worried in stressful situations.', trait: 'neuroticism' },
  { text: 'I feel a strong responsibility to meet my goals and commitments.', trait: 'conscientiousness' },
  { text: 'I enjoy discussing ideas and debating with others.', trait: 'extraversion' },
  { text: 'I strive to be understanding and supportive towards others.', trait: 'agreeableness' },
  { text: 'I often feel uneasy or second-guess myself when making decisions.', trait: 'neuroticism' },
  { text: 'I tend to make decisions based on logic rather than emotions.', trait: 'conscientiousness' },
  { text: 'I tend to stay calm and assertive when solving challenges.', trait: 'extraversion' },
  { text: 'I’m sensitive to other people’s feelings and try to meet their needs.', trait: 'agreeableness' },
  { text: 'I often dwell on past mistakes and worry about future outcomes.', trait: 'neuroticism' },
  { text: 'I am detail-oriented and take time to think through tasks carefully.', trait: 'conscientiousness' },
  { text: 'I’m known for being bold and independent in my approach to problems.', trait: 'extraversion' },
  { text: 'I prefer to work as part of a team and value cooperation.', trait: 'agreeableness' },
  { text: 'I tend to overthink situations and feel uneasy about the unknown.', trait: 'neuroticism' },
];

const TRPiTalkResultsPage: React.FC = () => {
  const location = useLocation();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const encodedData = params.get('data');
    if (encodedData) {
      try {
        const decodedData = atob(decodeURIComponent(encodedData));
        const parsedData = JSON.parse(decodedData);
        setData(parsedData);
      } catch (error) {
        console.error("Error decoding data:", error);
        setData(null);
      }
    }
  }, [location.search]);

  if (!data) {
    return (
      <Box
        sx={{
          maxWidth: 800,
          margin: "50px auto",
          padding: 3,
          backgroundColor: "#f9fafb",
          borderRadius: 2,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" color="error">
          Invalid or Missing Results Data.
        </Typography>
      </Box>
    );
  }

  const { bigFiveResponses, type, primary4FType, responses } = data;

  // Map traits to readable names
  const traitNames: Record<string, string> = {
    openness: "Openness",
    conscientiousness: "Conscientiousness",
    extraversion: "Extraversion",
    agreeableness: "Agreeableness",
    neuroticism: "Neuroticism",
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "50px auto",
        padding: 3,
        backgroundColor: "#f9fafb",
        borderRadius: 2,
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          color: "#2c3e50",
          marginBottom: 3,
          fontSize: "2rem",
          fontWeight: 600,
          fontFamily: "Roboto, sans-serif",
        }}
      >
        Your TRPI and Big Five Results
      </Typography>
      <Paper
        sx={{
          border: "1px solid #e0e0e0",
          borderRadius: 2,
          padding: 2,
          marginBottom: 3,
          backgroundColor: "#fff",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>Big Five Personality Traits</Typography>
        <Box sx={{ mb: 2 }}>
          {Object.entries(bigFiveResponses).map(([trait, score]) => (
            <Typography key={trait}>
              <strong>{traitNames[trait]}:</strong> {(score as any).toFixed(2)}
            </Typography>
          ))}
        </Box>
        <Typography variant="h4" sx={{ mb: 2 }}>TRPI Type</Typography>
        <Box sx={{ mb: 2 }}>
          <Typography><strong>Type:</strong> {type}</Typography>
          <Typography><strong>Primary 4F Type:</strong> {primary4FType}</Typography>
        </Box>
        <Typography variant="h4" sx={{ mb: 2 }}>Your Responses</Typography>
        <Box>
          {responses.map((rating: any, index: any) => (
            <Typography key={index}>
              <strong>{index + 1}. </strong>{statements[index].text} - <em>Rating: {rating}</em>
            </Typography>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default TRPiTalkResultsPage;
