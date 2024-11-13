import React from 'react';
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
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
        The Trauma Response Personality Indicator (TRPI) combines elements of the MBTI, Big Five traits, and the 4F trauma
        response system to provide insights into personality. It’s rooted in the idea that responses to stress and trauma
        play a significant role in personality development, influencing our information processing, social interactions,
        and coping mechanisms.
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
            4F Trauma Responses
          </Typography>
          <Typography variant="body1" paragraph>
            The 4F trauma responses—Fight, Flight, Freeze, and Fawn—are fundamental to the TRPI framework, each associated
            with specific personality types and approaches to managing stress:
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Fight:</strong> Types like ENTP and ESTP represent the Fight response, handling challenges through
            confidence and adaptability. Known for quick decision-making, they confront obstacles head-on.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Flight:</strong> Types such as ENFP and ISFP align with Flight, using creativity and flexibility to
            navigate stressful situations. These types may withdraw from conflict, focusing on values and exploration.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Freeze:</strong> Types like INTJ and ISTJ embody the Freeze response, prioritizing structure and careful
            planning when under stress. They value stability and systematic thinking to manage uncertainty.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Fawn:</strong> Fawn types, including INFJ and ISFJ, prioritize harmony and empathy, adapting behavior
            to support others and avoid conflict in high-stress situations.
          </Typography>
        </CardContent>
      </Card>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Function Pairings and the EIEI Rule</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            In TRPI, cognitive functions are grouped into **pairings** that emphasize dynamic relationships rather than
            individual functions alone. This pairing structure allows for more nuanced personality profiles and
            facilitates adaptability across situations.
          </Typography>
          <Typography variant="body2" paragraph>
            The **EIEI Rule** (Extraverted-Introverted-Extraverted-Introverted) is a foundational principle in TRPI for 
            balancing extraverted and introverted functions within a personality type. This alternation between 
            extraverted and introverted functions ensures a harmonious approach to internal and external experiences.
            For example, ENTP’s primary **Ne-Ti** pairing (Extraverted Intuition and Introverted Thinking) enables 
            both exploration and critical analysis. Their auxiliary pairing **Ni-Fe** (Introverted Intuition and 
            Extraverted Feeling) provides a complementary approach, balancing insight with social awareness.
          </Typography>
          <Typography variant="body2" paragraph>
            Unlike the MBTI’s tertiary loop, where the tertiary function pairs with the dominant, TRPI’s auxiliary
            pairing leverages an **inverted dominant function** with the tertiary to create a complementary and adaptable
            pairing. The auxiliary pairing respects the EIEI structure and avoids cognitive imbalance. For ENTP, instead 
            of relying on Ne looping with Fe, which could lead to superficial engagement, the Ni-Fe auxiliary pairing 
            introduces depth and nuanced social awareness.
          </Typography>
          <Typography variant="body2" paragraph>
            The tertiary loop in traditional MBTI is limited as it often encourages repetitive, less adaptive thinking by
            reinforcing the dominant function. In contrast, the auxiliary pairing in TRPI uses the inverted attitude of
            the dominant function, forming a more effective and balanced partnership with the tertiary. This enables the 
            personality to engage with new perspectives and integrate diverse insights, making the auxiliary pairing a 
            much more comprehensive solution for personality growth and adaptability.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Type Pairings and Examples</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            TRPI identifies four type pairings, each reflecting unique relationships and dynamics:
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Gold Pairing:</strong> Connects types with mirrored dominant functions, offering complementary yet
            contrasting perspectives. For instance, ENTP (Ne-Ti) and INFJ (Ni-Fe) are Gold pairings, balancing
            exploration and insight with empathetic understanding.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Silver Pairing:</strong> Consists of types with inverted attitudes, fostering adaptability through
            balancing exploration with strategic precision. An example is ENTP (Ne-Ti) paired with INTJ (Ni-Te).
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Bronze Pairing:</strong> Involves flipped functions but maintains the same attitudes. For instance,
            ENTP (Ne-Ti) and ESFP (Se-Fi) represent Bronze pairings, contrasting abstract thinking with grounded, sensory engagement.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Copper Pairing:</strong> Both functions and attitudes are flipped, such as ENTP (Ne-Ti) and ISFJ (Si-Fe),
            creating highly contrasting perspectives.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Id, Ego, and Superego</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            TRPI uses the concepts of Id, Ego, and Superego to provide a multi-layered perspective of personality:
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Id:</strong> Represents natural tendencies and innate drives, associated with the **dominant functions**. For ENTP, this includes Se/Si and Ne/Ni, reflecting curiosity, exploration, and adaptability.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Ego:</strong> Balances internal and external needs, represented by the **auxiliary functions**. For ENTP, this is represented by Fi/Fe and Te/Ti, allowing flexibility in both logical thinking and empathetic engagement with the external world.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Superego:</strong> Associated with the **tertiary functions**, guiding self-regulation and value alignment. In the case of ENTP, this includes Ti/Te and Fi/Fe, which play a role in modulating responses through empathy and structured thinking, providing an ethical or value-oriented dimension to their interactions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Big Five Personality Traits</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            The Big Five traits—Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism—add an additional
            layer of understanding to TRPI:
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Openness:</strong> Reflects creativity and curiosity. High Openness individuals, such as ENFPs, enjoy
            exploring new ideas, while those with low Openness prefer routines and structure.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Conscientiousness:</strong> Indicates organization and dependability. Highly Conscientious types, like
            ISTJs, prioritize structure, whereas low-Conscientiousness types are more spontaneous.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Extraversion:</strong> In TRPI, Extraversion focuses on assertiveness, highlighting individuals who take
            initiative and engage actively with their environments. Extraverts, such as ENTPs, are energized by active
            involvement in social and intellectual exchanges.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Agreeableness:</strong> Associated with empathy and cooperation. High Agreeableness types, like INFJs,
            prioritize harmony, whereas low Agreeableness types are more independent.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Neuroticism:</strong> Describes emotional sensitivity. High-Neuroticism types, like INFPs, may experience
            heightened emotions, while low-Neuroticism types are more emotionally stable.
          </Typography>
        </AccordionDetails>
      </Accordion>

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
