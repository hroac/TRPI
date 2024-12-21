import React from 'react';
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Matrix from './Matrix';
import ModeSelector from './ModeSelector';
import { Helmet } from 'react-helmet';

const TRPIHelmet: React.FC = () => (
  <Helmet>
    <title>Understanding Personality with TRPI</title>
    <meta
      name="description"
      content="The Trauma Response Personality Indicator (TRPI) combines the MBTI, Big Five traits, and 4F trauma responses to help you understand how personality and trauma interact. Explore your unique personality profile today on traumaindicator.com!"
    />
    <meta
      property="og:title"
      content="Understanding Personality with TRPI"
    />
    <meta
      property="og:description"
      content="Learn how trauma shapes personality with the TRPI framework. Integrating MBTI, Big Five traits, and 4F responses, TRPI provides unique insights into personality development. Visit TraumaIndicator.com to explore."
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://traumaindicator.com/#/explanation"
    />
    <meta
      property="og:image"
      content="https://traumaindicator.com/logo.png"
    />
  </Helmet>
);
const TRPIExplanation: React.FC = () => {
  const functionPairings = [
    { type: 'ENTP', f4: 'Fight', stack: 'Ne > Ti > Fe > Si', dominant: 'Ne + Ti (Id + Ego)', auxiliary: 'Ni + Fe (Id + Superego)' },

    { type: 'INTJ', f4: 'Freeze', stack: 'Ni > Te > Fi > Se', dominant: 'Ni + Te (Id + Ego)', auxiliary: 'Ne + Fi (Id + Superego)' },
    
    { type: 'ISFJ', f4: 'Fawn', stack: 'Si > Fe > Ti > Ne', dominant: 'Si + Fe (Id + Ego)', auxiliary: 'Se + Ti (Id + Superego)' },
    
    { type: 'ESFP', f4: 'Flight', stack: 'Se > Fi > Te > Ni', dominant: 'Se + Fi (Id + Ego)', auxiliary: 'Si + Te (Id + Superego)' },
    
    
    { type: 'ESTP', f4: 'Fight', stack: 'Se > Ti > Fe > Ni', dominant: 'Se + Ti (Id + Superego)', auxiliary: 'Si + Fe (Id + Ego)' },
    
    { type: 'ISTJ', f4: 'Freeze', stack: 'Si > Te > Fi > Ne', dominant: 'Si + Te (Id + Superego)', auxiliary: 'Se + Fi (Id + Ego)' },
    
    { type: 'INFJ', f4: 'Fawn', stack: 'Ni > Fe > Ti > Se', dominant: 'Ni + Fe (Id + Superego)', auxiliary: 'Ne + Ti (Id + Ego)' },
    
    { type: 'ENFP', f4: 'Flight', stack: 'Ne > Fi > Te > Si', dominant: 'Ne + Fi (Id + Superego)', auxiliary: 'Ni + Te (Id + Ego)' },
    
    
    { type: 'INTP', f4: 'Fight', stack: 'Ti > Ne > Si > Fe', dominant: 'Ti + Ne (Ego + Id)', auxiliary: 'Te + Si (Superego + Id)' },
    
    { type: 'ENTJ', f4: 'Freeze', stack: 'Te > Ni > Se > Fi', dominant: 'Te + Ni (Ego + Id)', auxiliary: 'Ti + Se (Superego + Id)' },
    
    { type: 'ESFJ', f4: 'Fawn', stack: 'Fe > Si > Ne > Ti', dominant: 'Fe + Si (Ego + Id)', auxiliary: 'Fi + Ne (Superego + Id)' },
    
    { type: 'ISFP', f4: 'Flight', stack: 'Fi > Se > Ni > Te', dominant: 'Fi + Se (Ego + Id)', auxiliary: 'Fe + Ni (Superego + Id)' },
    
    { type: 'ISTP', f4: 'Fight', stack: 'Ti > Se > Ni > Fe', dominant: 'Ti + Se (SuperEgo + Id)', auxiliary: 'Te + Ni (Ego + Id)' },
    
    { type: 'ESTJ', f4: 'Freeze', stack: 'Te > Si > Ne > Fi', dominant: 'Te + Si (Superego + Id)', auxiliary: 'Ti + Ne (Ego + Id)' },
    
    { type: 'ENFJ', f4: 'Fawn', stack: 'Fe > Ni > Se > Ti', dominant: 'Fe + Ni (Superego + Id)', auxiliary: 'Fi + Se (Ego + Id)' },
    
    { type: 'INFP', f4: 'Flight', stack: 'Fi > Ne > Si > Te', dominant: 'Fi + Ne (Superego + Id)', auxiliary: 'Fe + Si (Ego + Id)' },
  ];
  return (
    <Container sx={{marginTop: '64px'}}>
      <TRPIHelmet/>
    <Box sx={{maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Trauma Response Personality Indicator (TRPI)
      </Typography>

      <Typography variant="body1" paragraph>
        The Trauma Response Personality Indicator (TRPI) combines elements of the MBTI, Big Five traits, and the 4F trauma
        response system to provide insights into personality. It’s rooted in the idea that responses to stress and trauma
        play a significant role in personality development, influencing our information processing, social interactions,
        and coping mechanisms.
      </Typography>


      
    
      <Box justifyContent={'center'} sx={{ marginTop: '20px', marginBottom: '20px' }}>
        <Matrix />
      </Box>
      <Box justifyContent={'center'}>
        <ModeSelector/>
      </Box>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Id, Ego, and Superego in Cognitive Function Theory</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            Reinterpreting classic psychological constructs, we map the Id, Ego, and Superego onto cognitive functions and their roles in perception, judgment, and defense mechanisms within personality psychology.
          </Typography>

          <Typography variant="body2" paragraph>
            <strong>The Id: Instinctual Perception (Se, Si, Ne, Ni)</strong>
          </Typography>
          <Typography variant="body2" paragraph>
            <em>Role:</em> The Id represents our instinctual way of taking in information and experiencing the world through perceiving functions.
          </Typography>
          <Typography variant="body2" paragraph>
            <em>Functions:</em>
          </Typography>
          <Box component="ul" sx={{ paddingLeft: '20px' }}>
            <li>
              <Typography variant="body2">
                <strong>Se (Extraverted Sensing):</strong> Engages with the present moment and sensory experiences.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Si (Introverted Sensing):</strong> Relies on past experiences and memories.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Ne (Extraverted Intuition):</strong> Explores possibilities and generates ideas.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Ni (Introverted Intuition):</strong> Focuses on deep insights and future implications.
              </Typography>
            </li>
          </Box>
          <Typography variant="body2" paragraph>
            <em>Trauma Effect:</em> If the Id is disrupted, perception may become distorted, causing stress on the individual's ability to process information effectively.
          </Typography>

          <Typography variant="body2" paragraph>
            <strong>The Ego: Judging and Organizing (Te, Ti, Fe, Fi) for SF and NT Types</strong>
          </Typography>
          <Typography variant="body2" paragraph>
            <em>Role:</em> For SF (Sensing Feeling) and NT (Intuitive Thinking) types, the Ego consists of their judging functions, guiding decision-making and structuring perceptions.
          </Typography>
          <Typography variant="body2" paragraph>
            <em>Functions:</em>
          </Typography>
          <Box component="ul" sx={{ paddingLeft: '20px' }}>
            <li>
              <Typography variant="body2">
                <strong>Te (Extraverted Thinking):</strong> Organizes and structures the external world logically.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Ti (Introverted Thinking):</strong> Analyzes and categorizes concepts internally.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Fe (Extraverted Feeling):</strong> Seeks harmony and connection in external relationships.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Fi (Introverted Feeling):</strong> Assesses experiences based on internal values.
              </Typography>
            </li>
          </Box>
          <Typography variant="body2" paragraph>
            <em>Trauma Effect:</em> When the Ego is overwhelmed, judgment functions may become rigid or unbalanced, leading to overreliance on external rules or withdrawal into internal logic or emotions.
          </Typography>

          <Typography variant="body2" paragraph>
            <strong>The Superego: Defensive Mechanisms (Te, Ti, Fe, Fi) for ST and NF Types</strong>
          </Typography>
          <Typography variant="body2" paragraph>
            <em>Role:</em> For ST (Sensing Thinking) and NF (Intuitive Feeling) types, the Superego comprises their judging functions, activating defensive mechanisms under stress.
          </Typography>
          <Typography variant="body2" paragraph>
            <em>Functions:</em>
          </Typography>
          <Box component="ul" sx={{ paddingLeft: '20px' }}>
            <li>
              <Typography variant="body2">
                <strong>Te (Extraverted Thinking):</strong> May impose excessive control or rigidity.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Ti (Introverted Thinking):</strong> Can become overly analytical or self-critical.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Fe (Extraverted Feeling):</strong> Might seek approval excessively or over-adapt to others.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Fi (Introverted Feeling):</strong> Could withdraw deeply into personal values, becoming inflexible.
              </Typography>
            </li>
          </Box>
          <Typography variant="body2" paragraph>
            <em>Trauma Effect:</em> The Superego reflects unresolved trauma, leading to exaggerated or maladaptive responses.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Trauma, Brain Hemispheres, and Cognitive Shifts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            Trauma can significantly impact cognitive functions and processing within the brain:
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Early Trauma and Hemispheric Switching</strong>
          </Typography>
          <Typography variant="body2" paragraph>
            When individuals experience trauma at a young age, significant shifts in brain processing can occur:
          </Typography>
          <Box component="ul" sx={{ paddingLeft: '20px' }}>
            <li>
              <Typography variant="body2">
                <strong>Switching Hemispheres:</strong> The inability of sensing functions (Se, Si) to process traumatic experiences may lead to reliance on intuitive functions (Ne, Ni).
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Driven by Feelings (Fi):</strong> This shift is often guided by internal feelings, seeking new ways to make sense of trauma.
              </Typography>
            </li>
          </Box>
          <Typography variant="body2" paragraph>
            <strong>Impact on Empathy:</strong> Without utilizing sensing functions, individuals may struggle with empathy rooted in shared experiences. They might need to consciously engage intuitive functions to develop empathy, requiring active effort. Some may never fully engage these functions, leading to lifelong challenges with empathy.
          </Typography>

          <Typography variant="body2" paragraph>
            <strong>Trauma and Personality Development</strong>
          </Typography>
          <Typography variant="body2" paragraph>
            Some individuals may close off from the world instead of processing trauma through their Superego. This avoidance can lead to a dominant reliance on judgment functions, focusing on structure and decision-making to maintain control.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">The Inversion of the Dominant Function Under Stress</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            Under stress or trauma, our natural way of interacting with the world can invert, causing reliance on less effective cognitive processes.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Adaptive Mechanism:</strong> This inversion represents a shift from proactive engagement to a defensive stance.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Perception Shift:</strong> Involves shifts between Sensing and Intuition functions (Se ↔ Si, Ne ↔ Ni), altering how we perceive information.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Judging Shift:</strong> For certain types, there may be shifts between Thinking and Feeling functions (Te ↔ Ti, Fe ↔ Fi), affecting decision-making processes.
          </Typography>
          <Typography variant="body2" paragraph>
            In stress, individuals may shift from their dominant pairing to their auxiliary pairing, leading to rigid or maladaptive behaviors due to underdevelopment.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">TRPI Function Pairings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            Understanding how trauma influences cognitive functions requires examining the shifts between dominant and auxiliary function pairings. This involves analyzing the dynamics across different personality types, incorporating the concepts of Id, Ego, and Superego.
          </Typography>
          <Typography variant="body2" paragraph>
            In this framework, cognitive functions are grouped into pairings that emphasize dynamic relationships rather than individual functions alone. This pairing structure allows for more nuanced personality profiles and facilitates adaptability across situations.
          </Typography>
          <Typography variant="body2" paragraph>
            The inversion of dominant functions under stress represents a shift from proactive engagement to a defensive stance. This can involve shifts in perception (Sensing ↔ Intuition) and judging functions (Thinking ↔ Feeling), leading to reliance on less effective cognitive processes.
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Type</strong></TableCell>
                  <TableCell><strong>4F</strong></TableCell>
                  <TableCell><strong>Grant Stack</strong></TableCell>
                  <TableCell><strong>Dominant Pairing</strong></TableCell>
                  <TableCell><strong>Auxiliary Pairing</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {functionPairings.map((pairing, index) => (
                  <TableRow key={index}>
                    <TableCell>{pairing.type}</TableCell>
                    <TableCell>{pairing.f4}</TableCell>
                    <TableCell>{pairing.stack}</TableCell>
                    <TableCell>{pairing.dominant}</TableCell>
                    <TableCell>{pairing.auxiliary}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
    </Container>

  );
};

export default TRPIExplanation;
