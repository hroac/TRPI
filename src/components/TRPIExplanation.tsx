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
import { functionPairings } from '../utils/mbtiMapping';
const TRPIHelmet: React.FC = () => (
  <Helmet>
    <title>Understanding Personality with TRPI</title>
    <meta
      name="description"
      content="The Trait Response Personality Indicator (TRPI) combines the MBTI, Big Five traits, and 4F trauma responses to help you understand how personality and trauma interact. Explore your unique personality profile today on traitindicator.com!"
    />
    <meta
      property="og:title"
      content="Understanding Personality with TRPI"
    />
    <meta
      property="og:description"
      content="Learn how trauma shapes personality with the TRPI framework. Integrating MBTI, Big Five traits, and 4F responses, TRPI provides unique insights into personality development. Visit traitindicator.com to explore."
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://traitindicator.com/#/explanation"
    />
    <meta
      property="og:image"
      content="https://traitindicator.com/logo.png"
    />
  </Helmet>
);
const TRPIExplanation: React.FC = () => {

  
  return (
    <Container sx={{marginTop: '100px'}}>
                <Paper elevation={3} sx={{ padding: '20px', borderRadius: '10px' }}>
      
      <TRPIHelmet/>
    <Box sx={{maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Trait Response Personality Indicator (TRPI)
      </Typography>

      <Typography variant="body1" paragraph>
        The Trait Response Personality Indicator (TRPI) combines elements of the MBTI, Big Five traits, and the 4F trauma
        response system to provide insights into personality. It’s rooted in the idea that responses to stress and trauma
        play a significant role in personality development, influencing our information processing, social interactions,
        and coping mechanisms.
      </Typography>

      {/* <iframe src="https://mfr.de-1.osf.io/render?url=https%3A%2F%2Fosf.io%2Fdownload%2Fzrq4v%2F%3Fdirect%26mode%3Drender"
    width="100%"
    scrolling="yes"
    height="677px"
    marginheight="0"
    frameborder="0"
    allowfullscreen
    webkitallowfullscreen
/> */}
      
      <Box justifyContent={'center'}>
        <ModeSelector/>
      </Box>
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginBottom: '50px'
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 420 }}>
              <Matrix width={'100px'} />
              </Box>
            </Box>
      <Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography variant="h6">Big Five Traits and 4F Trauma Responses</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography variant="body2" paragraph>
      The TRPI framework integrates the Big Five personality traits with the 4F trauma responses to provide a deeper understanding of how stress and trauma shape personality. Here’s how they connect:
    </Typography>
    <Typography variant="body2" paragraph>
      <strong>Openness:</strong> Represents the preference for new (Intuition) vs. familiar (Sensing) information. 
      - High Openness aligns with abstract thinking and exploration (<em>Intuition</em>).
      - Low Openness corresponds to concrete thinking and practicality (<em>Sensing</em>).
    </Typography>
    <Typography variant="body2" paragraph>
      <strong>Conscientiousness:</strong> Linked to the <em>Freeze</em> response, it reflects self-discipline and planning. 
      - High Conscientiousness individuals often use structured and logical processes (<em>Te</em>).
    </Typography>
    <Typography variant="body2" paragraph>
      <strong>Extraversion:</strong> Tied to the <em>Fight</em> response, Extraversion drives assertiveness and action.
      - High Extraversion correlates with internal logic and rapid problem-solving (<em>Ti</em>).
    </Typography>
    <Typography variant="body2" paragraph>
      <strong>Agreeableness:</strong> Related to the <em>Fawn</em> response, it emphasizes social harmony and collaboration.
      - High Agreeableness involves prioritizing relationships and others' emotions (<em>Fe</em>).
    </Typography>
    <Typography variant="body2" paragraph>
      <strong>Neuroticism:</strong> Linked to the <em>Flight</em> response, it reflects emotional sensitivity and avoidance.
      - High Neuroticism is associated with heightened awareness of personal values and emotional depth (<em>Fi</em>).
    </Typography>
    <Typography variant="body2" paragraph>
      By combining these traits with the 4F responses, TRPI offers a holistic view of personality, highlighting the dynamic interplay between natural tendencies and adaptive stress responses.
    </Typography>
  </AccordionDetails>
</Accordion>

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
         {/*  <Typography variant="body2" paragraph>
            <em>Trauma:</em> If the Id is disrupted, perception may become distorted, causing stress on the individual's ability to process information effectively.
          </Typography> */}

          <Typography sx={{mt: 2}} variant="body2" paragraph>
            <strong>The Ego: Internal Demands (Ti, Fi) For Perceiving Types</strong>
          </Typography>
          <Typography variant="body2" paragraph>
            <em>Role:</em> For Perceiving types, the Ego consists of their subjective judging functions, guiding decision-making and structuring perceptions.
          </Typography>
          <Box component="ul" sx={{ paddingLeft: '20px' }}>
            <li>
              <Typography variant="body2">
                <strong>Ti (Introverted Thinking):</strong> Analyzes and categorizes concepts internally.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Fi (Introverted Feeling):</strong> Assesses experiences based on internal values.
              </Typography>
            </li>
          </Box>
          <Typography sx={{mt: 2}} variant="body2" paragraph>
            <em>Trauma:</em> When the Ego is overwhelmed, judgment functions may become rigid or unbalanced, leading to overreliance on the superego or withdrawal into concrete logic or abstract values.
          </Typography>

          <Typography variant="body2" paragraph>
            <strong>The Superego: External Rules (Te, Fe) for Judging Types</strong>
          </Typography>
          <Typography variant="body2" paragraph>
            <em>Role:</em> For Judging types, the Superego comprises their objective judging functions, activating defensive mechanisms under stress.
          </Typography>
          <Box component="ul" sx={{ paddingLeft: '20px' }}>
            <li>
              <Typography variant="body2">
                <strong>Te (Extraverted Thinking):</strong> May impose excessive control or rigidity.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Fe (Extraverted Feeling):</strong> Might seek approval excessively or over-adapt to others.
              </Typography>
            </li>
          </Box>
          <Typography sx={{mt: 2}} variant="body2" paragraph>
            <em>Trauma:</em> The Superego reflects unresolved trauma, leading to exaggerated or maladaptive responses.
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
            <strong>Adaptive Mechanism:</strong> This inversion represents a shift from concrete values and abstract logic to abstract values and concrete logic and vice versa.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Perception Shift:</strong> Involves shifts between Sensing and Intuition functions (Se ↔ Si, Ne ↔ Ni), altering how we perceive information.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Judging Shift:</strong> Involves shifts between Thinking and Feeling functions (Te ↔ Ti, Fe ↔ Fi, Te ↔ Fi, Fe ↔ Ti), affecting decision-making processes.
          </Typography>
          <Typography variant="body2" paragraph>
            In stress, individuals may shift from their dominant pairing to their tertiary pairing, leading to rigid or maladaptive behaviors due to underdevelopment.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">TRPI Function Pairings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            Understanding how trauma influences cognitive functions requires examining the shifts between dominant and tertiary function pairings. This involves analyzing the dynamics across different personality types, incorporating the concepts of Id, Ego, and Superego.
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
        <TableCell><strong>Tertiary Pairing</strong></TableCell>
        <TableCell><strong>Inferior Pairing</strong></TableCell>
        <TableCell><strong>Opposite</strong></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {functionPairings.map((pairing: any, index: number) => (
        <TableRow key={index}>
          <TableCell>{pairing.type}</TableCell>
          <TableCell>{pairing.f4}</TableCell>
          <TableCell width={300}>{pairing.stack}</TableCell>
          <TableCell width={150}>{pairing.dominant}</TableCell>
          <TableCell width={150}>{pairing.auxiliary}</TableCell>
          <TableCell width={150}>{pairing.tertiary}</TableCell>
          <TableCell width={150}>{pairing.inferior}</TableCell>
          <TableCell width={150}>{pairing.opposite}</TableCell>
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
    </Paper>
    </Container>

  );
};

export default TRPIExplanation;
