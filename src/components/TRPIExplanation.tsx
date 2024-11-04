import React from 'react';
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Matrix from './Matrix';

const TRPIExplanation: React.FC = () => {
  return (
    <Box sx={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Trauma Response Personality Indicator (TRPI)
      </Typography>

      <Typography variant="body1" paragraph>
        The Trauma Response Personality Indicator (TRPI) is an advanced personality framework that combines elements
        of the MBTI, Big Five personality traits, and the 4F trauma response system. It offers insights into personality
        through the dynamics of brain hemispheres, trauma responses, and cognitive functions. TRPI is rooted in the idea
        that the brain's response to stress and trauma plays a significant role in personality development, influencing
        how we process information, interact with others, and cope with challenges.
      </Typography>

      <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Personality Types Matrix
        </Typography>
        <Matrix />
      </Box>

      <Card sx={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Core Concepts
          </Typography>
          <Typography variant="body1" component="ul">
            <li>
              <strong>4F Trauma Responses:</strong> The four primary trauma responses—Fight, Flight, Freeze, and Fawn—
              that influence personality adaptation.
            </li>
            <li>
              <strong>MBTI Cognitive Functions:</strong> Builds on the MBTI’s 16 types, offering a dynamic view of
              function pairings (dominant and auxiliary) that interact and adapt under stress.
            </li>
            <li>
              <strong>Big Five Personality Traits:</strong> TRPI incorporates Openness, Conscientiousness, Extraversion,
              Agreeableness, and Neuroticism, focusing on how these traits shape our responses.
            </li>
          </Typography>
        </CardContent>
      </Card>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Function Pairings and Type Pairings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            TRPI uses function pairings, rather than individual functions, to describe personality dynamics. Each type
            has dominant and auxiliary pairings, creating dynamic interactions across four categories:
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Gold Pairing:</strong> Dominant function pairing with mirrored functions. Example: ENTP and INFJ
            share an Ne-Ti/Fe-Ni combination, bringing complementary perspectives through opposite attitudes.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Silver Pairing:</strong> Functions with inverted attitudes, creating flexibility. Example: ENTP and
            INTJ combine Ne-Ti with Ni-Te, allowing for adaptive thinking between exploration (Ne) and conceptual
            precision (Ni).
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Bronze Pairing:</strong> Flipped functions, maintaining the same attitude. Example: ENTP and ESFP
            share Ne-Ti and Se-Fi, balancing exploratory intuition with grounded sensation.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Copper Pairing:</strong> Both functions and attitudes flipped, creating least related pairings. Example:
            ENTP and ISFJ pair Ne-Ti with Si-Fe, resulting in opposing perspectives on adaptability and detail orientation.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Card sx={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            How TRPI Works
          </Typography>
          <Typography variant="body1" paragraph>
            TRPI assesses personality by focusing on dominant function pairings, how individuals use the 4F responses,
            and tendencies among the Big Five personality traits. This approach provides insights not just on
            personality preferences but also on real-world coping mechanisms and behavioral patterns.
          </Typography>
          <Typography variant="body1" paragraph>
            For instance, someone with a high Fight response may exhibit the traits of types like ENTP or ESTP, favoring
            assertive, action-oriented thinking (Ti dominance). In contrast, a Freeze response type, like INTJ or
            ISTJ, might lean towards cautious planning (Te dominance).
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            TRPI’s mission is to empower individuals with a deeper understanding of themselves and their responses to
            the world. By recognizing how trauma responses shape personality, TRPI helps people embrace their unique
            traits, improve interpersonal relationships, and navigate their lives with clarity and purpose.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TRPIExplanation;
