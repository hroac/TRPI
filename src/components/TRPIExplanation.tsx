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
  Grid,
  Chip,
  Divider,
  Stack,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Matrix from './Matrix';
import ModeSelector from './ModeSelector';
import { Helmet } from 'react-helmet';
import { functionPairings } from '../utils/mbtiMapping';
import TypeSelector from './TypeSelector';

// ---------- Data ----------
const anteriorMapping = [
  { region: 'Left lateral (aPFC)', fn: 'Se', label: 'Extraverted Sensing' },
  { region: 'Left medial (aPFC)', fn: 'Si', label: 'Introverted Sensing' },
  { region: 'Right lateral (aPFC)', fn: 'Ne', label: 'Extraverted Intuition' },
  { region: 'Right medial (aPFC)', fn: 'Ni', label: 'Introverted Intuition' },
];

const posteriorMapping = [
  { region: 'Ventrolateral PFC (bilateral)', fn: 'Te', label: 'Extraverted Thinking' },
  { region: 'Dorsolateral PFC (bilateral)', fn: 'Ti', label: 'Introverted Thinking' },
  { region: 'Ventromedial PFC (bilateral)', fn: 'Fi', label: 'Introverted Feeling' },
  { region: 'Dorsomedial PFC (bilateral)', fn: 'Fe', label: 'Extraverted Feeling' },
];

const modulationLines = [
  'Se < Fi/Ti = Si',
  'Si < Te/Fe = Se',
  'Ni < Te/Fe = Se',
  'Ne < Ti/Fi = Si',
];

const bigFive4F = [
  { trait: 'Openness (O)', mapping: 'S / N', mode: '—', note: 'High: N (abstract); Low: S (concrete)' },
  { trait: 'Conscientiousness (C)', mapping: 'Si/Ni + Te', mode: 'Freeze', note: 'Focus on standards and predictability.' },
  { trait: 'Extraversion (E)', mapping: 'Se/Ne + Ti', mode: 'Fight', note: 'Fast, decisive action and exploration.' },
  { trait: 'Agreeableness (A)', mapping: 'Si/Ni + Fe', mode: 'Fawn', note: 'Harmonizing, affiliative adaptation.' },
  { trait: 'Neuroticism (N)', mapping: 'Se/Ne + Fi', mode: 'Flight', note: 'Vigilance, avoidance, emotional charge.' },
];

const structuralMap = [
  { name: 'Id', mapping: 'Se / Ne', desc: 'Raw perception & impulse' },
  { name: 'Superid', mapping: 'Si / Ni', desc: 'Stored memory & foresight' },
  { name: 'Ego', mapping: 'Ti / Fi', desc: 'Individual logic & values' },
  { name: 'Superego', mapping: 'Te / Fe', desc: 'Collective logic & values' },
];

const pairingPrinciples = [
  'Perceiving hubs sit in the anterior PFC; judging hubs are bilateral and extend into medial-lateral networks.',
  'Healthy states balance one perceiving code with one judging code across opposite attitudes.',
  'Modulation (<) stretches or compresses the perceptual window; equilibration (=) anchors the pair.',
];

const survivalMap = [
  { label: 'Freeze', combo: 'Si/Ni + Te', action: 'lock down, analyze, standardize' },
  { label: 'Fight', combo: 'Se/Ne + Ti', action: 'act fast, improvise, compete' },
  { label: 'Fawn', combo: 'Si/Ni + Fe', action: 'conform, affiliate, harmonize' },
  { label: 'Flight', combo: 'Se/Ne + Fi', action: 'scan, retreat, protect values' },
];

// ---------- Utilities ----------
const TRPIHelmet: React.FC = () => (
  <Helmet>
    <title>Understanding Personality with TRPI</title>
    <meta
      name="description"
      content="The Trait Response Personality Indicator (TRPI) combines Jung, Freud, Big Five traits, and 4F trauma responses to map dynamic personality."
    />
    <meta property="og:title" content="Understanding Personality with TRPI" />
    <meta
      property="og:description"
      content="Learn how cognition, stress responses, and traits interact in the TRPI framework."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://traitindicator.com/#/explanation" />
    <meta property="og:image" content="https://traitindicator.com/logo.png" />
  </Helmet>
);

const FunctionChip: React.FC<{ code: string; label?: string }> = ({ code, label }) => {
  const color =
    code.startsWith('S') ? 'default' : code.startsWith('N') ? 'secondary' : code.startsWith('T') ? 'primary' : 'success';
  return (
    <Chip
      label={label ? `${code} — ${label}` : code}
      color={color as any}
      size="small"
      sx={{ mr: 1, mb: 1, fontWeight: 600 }}
    />
  );
};

const KeyValue: React.FC<{ k: React.ReactNode; v: React.ReactNode }> = ({ k, v }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.75 }}>
    <Typography variant="body2" sx={{ opacity: 0.7 }}>
      {k}
    </Typography>
    <Typography variant="body2" sx={{ fontWeight: 600 }}>
      {v}
    </Typography>
  </Box>
);

const GradientPanel: React.FC<{ title: string; subtitle?: string; children?: React.ReactNode }> = ({
  title,
  subtitle,
  children,
}) => (
  <Box
    sx={{
      background: 'linear-gradient(135deg, #111827, #1f2937 45%, #0ea5e9)',
      color: 'white',
      p: { xs: 3, sm: 4 },
      borderRadius: 3,
      boxShadow: 6,
      mb: 4,
    }}
  >
    <Typography variant="h4" fontWeight={700} gutterBottom>
      {title}
    </Typography>
    {subtitle && (
      <Typography variant="subtitle1" sx={{ opacity: 0.85 }} gutterBottom>
        {subtitle}
      </Typography>
    )}
    {children}
  </Box>
);

// ---------- Component ----------
const TRPIExplanation: React.FC = () => {
  return (
    <Container sx={{ mt: '100px', mb: 6 }}>
      <TRPIHelmet />

      <GradientPanel
        title="Trait Response Personality Indicator"
        subtitle="A unified map connecting cognition, motivation, and stress adaptation."
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="body1" paragraph>
              TRPI blends Jungian functions, Freudian structure, Big Five temperaments, and the 4F survival modes into a
              single operational model. It focuses on how perceiving hubs (S/N) and judging hubs (T/F) pair, modulate,
              and invert under pressure to produce real-time behavior.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
              <Card sx={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                    Dynamic snapshots
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.85 }}>
                    64 states (16×4) capture type, pairing, and 4F mode—useful for coaching, therapy, and product design.
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                    Neurology first
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.85 }}>
                    Anchored in anterior PFC perceiving hubs and bilateral judging hubs to mirror cortical flow.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Card sx={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                    Context aware
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.85 }}>
                    Introversion favors longer processing windows; extraversion favors rapid, objective updating.
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                    Actionable pairings
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.85 }}>
                    Track which perceiving–judging pair is online to predict decisions, conflicts, and resilience.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ maxWidth: 520, mx: 'auto', textAlign: 'center' }}>
              <Matrix width={'100%'} />
              <Box sx={{ mt: 2 }}>
                <ModeSelector />
              </Box>
              <Box sx={{ mt: 2 }}>
                <TypeSelector />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </GradientPanel>

      <Paper elevation={3} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 3 }}>
        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Stack spacing={3}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  How TRPI is organized
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <List dense>
                      <ListItem>
                        <ListItemText primary="Architecture" secondary="Perceiving (S/N) lives in the anterior PFC; judging (T/F) runs bilaterally." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="State logic" secondary="Each state pairs one perceiving and one judging code in opposite attitudes." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Context window" secondary="Introverted codes run longer, subjective context; extraverted codes run short, objective updates." />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <List dense>
                      <ListItem>
                        <ListItemText primary="Stress behavior" secondary="4F survival modes show which control system (Ego or Superego) is steering." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Integration" secondary="Growth cycles through all four modes—choosing the right gear instead of being pulled into it." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Use cases" secondary="Performance coaching, therapy, team design, product personalization, conflict mapping." />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Neurocognitive map</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>
                          Anterior PFC — Perceiving (S/N)
                        </Typography>
                        <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2 }}>
                          <Table size="small">
                            <TableHead>
                              <TableRow>
                                <TableCell>
                                  <strong>Region</strong>
                                </TableCell>
                                <TableCell>
                                  <strong>Function</strong>
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {anteriorMapping.map((r) => (
                                <TableRow key={r.region}>
                                  <TableCell>{r.region}</TableCell>
                                  <TableCell>
                                    <FunctionChip code={r.fn} label={r.label} />
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <Box sx={{ mt: 1.5 }}>
                          <Typography variant="caption" sx={{ opacity: 0.8 }}>
                            Left = concrete/retrospective bias (S); Right = abstract/prospective bias (N).
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>
                          Posterior/Medial-Lateral Hubs — Judging (T/F)
                        </Typography>
                        <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2 }}>
                          <Table size="small">
                            <TableHead>
                              <TableRow>
                                <TableCell>
                                  <strong>Region</strong>
                                </TableCell>
                                <TableCell>
                                  <strong>Function</strong>
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {posteriorMapping.map((r) => (
                                <TableRow key={r.region}>
                                  <TableCell>{r.region}</TableCell>
                                  <TableCell>
                                    <FunctionChip code={r.fn} label={r.label} />
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <Box sx={{ mt: 1.5 }}>
                          <Typography variant="caption" sx={{ opacity: 0.8 }}>
                            These judging systems are bilateral and work with the aPFC perceiving hubs.
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>
                          Perceiving–Judging modulation
                        </Typography>
                        <Box sx={{ bgcolor: 'action.hover', p: 2, borderRadius: 2 }}>
                          {modulationLines.map((line) => (
                            <Typography key={line} variant="body2" sx={{ fontFamily: 'monospace', mb: 0.5 }}>
                              {line}
                            </Typography>
                          ))}
                          <Typography variant="caption" sx={{ opacity: 0.8 }}>
                            {'<'} denotes modulation (extension/contraction); {'='} denotes equilibration.
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>
                          Attitude & context window
                        </Typography>
                        <KeyValue k={<strong>Introvert</strong>} v={<>subjective → long-context processing</>} />
                        <KeyValue k={<strong>Extraversion</strong>} v={<>objective → short-context processing</>} />
                        <Box sx={{ mt: 1.5 }}>
                          <Typography variant="caption" sx={{ opacity: 0.8 }}>
                            Context length is a processing orientation applied across functions.
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Big Five traits ↔ 4F responses</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" paragraph>
                  Traits express differently when the nervous system shifts into a survival pattern. Pairings make the
                  shift explicit so you can intervene earlier.
                </Typography>
                <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2 }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <strong>Trait</strong>
                        </TableCell>
                        <TableCell>
                          <strong>Function Basis</strong>
                        </TableCell>
                        <TableCell>
                          <strong>4F Mode</strong>
                        </TableCell>
                        <TableCell>
                          <strong>Notes</strong>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {bigFive4F.map((row) => (
                        <TableRow key={row.trait}>
                          <TableCell>{row.trait}</TableCell>
                          <TableCell>{row.mapping}</TableCell>
                          <TableCell>{row.mode}</TableCell>
                          <TableCell>{row.note}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                  {survivalMap.map((item) => (
                    <Grid item xs={12} sm={6} md={3} key={item.label}>
                      <Card variant="outlined" sx={{ height: '100%' }}>
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', letterSpacing: 0.3 }} gutterBottom>
                            {item.label}
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {item.combo}
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.85 }}>
                            {item.action}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Id, Superid, Ego, Superego — functional roles</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {structuralMap.map((s) => (
                    <Grid item xs={12} md={6} key={s.name}>
                      <Card variant="outlined">
                        <CardContent>
                          <Typography variant="subtitle1" gutterBottom>
                            {s.name}
                          </Typography>
                          <Box sx={{ mb: 1 }}>
                            {s.mapping.split('/').map((code) => (
                              <FunctionChip key={code.trim()} code={code.trim()} />
                            ))}
                          </Box>
                          <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            {s.desc}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Inversion of the dominant under stress</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={7}>
                    <Typography variant="body2" paragraph>
                      Under sustained stress, the dominant attitude can flip, forcing the psyche to rely on less
                      efficient pairings. Two things shift: perception (Sensing ↔ Intuition) and judgment (Thinking ↔
                      Feeling), often crossing attitudes (e.g., Te ↔ Fi, Fe ↔ Ti) and producing rigid or over-
                      accommodating behavior until equilibrium is restored.
                    </Typography>
                    <List dense>
                      {pairingPrinciples.map((principle) => (
                        <ListItem key={principle}>
                          <ArrowOutwardIcon fontSize="small" sx={{ mr: 1, color: 'primary.main' }} />
                          <ListItemText primary={principle} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>
                          Survival pairing quick map
                        </Typography>
                        <List dense>
                          {survivalMap.map((item) => (
                            <ListItem key={item.label}>
                              <ListItemText
                                primary={`${item.label}: ${item.combo}`}
                                secondary={`Tendency to ${item.action}`}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">TRPI function pairings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" paragraph>
                  Pairings emphasize how a perceiving function couples with a judging function (opposite attitudes within
                  the same hemisphere) to drive decisions. Track the top row for the state you are in, then note how the
                  tertiary, inferior, and opposite pairings show up as pressure or support.
                </Typography>
                <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2 }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <strong>Dominant</strong>
                        </TableCell>
                        <TableCell width={180}>
                          <strong>Auxiliary</strong>
                        </TableCell>
                        <TableCell width={160}>
                          <strong>Tertiary</strong>
                        </TableCell>
                        <TableCell width={160}>
                          <strong>Inferior</strong>
                        </TableCell>
                        <TableCell width={160}>
                          <strong>Opposite</strong>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {functionPairings.map((pairing) => (
                        <TableRow key={`${pairing.dominant}-${pairing.auxiliary}`}>
                          <TableCell>
                            <FunctionChip code={pairing.dominant} />
                          </TableCell>
                          <TableCell width={180}>{pairing.auxiliary}</TableCell>
                          <TableCell width={160}>{pairing.tertiary}</TableCell>
                          <TableCell width={160}>{pairing.inferior}</TableCell>
                          <TableCell width={160}>{pairing.opposite}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">TRPI 64‑state reference</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box mb={2}>
                  <Typography variant="subtitle1">
                    <strong>1. Type system</strong>
                  </Typography>
                  <Typography paragraph>
                    All 16 MBTI types operate from either the Ego or Superego by default. Judging types (J) are
                    Superego‑based; Perceiving types (P) are Ego‑based. A two‑letter suffix (ST, SF, NT, NF) indicates
                    the currently active alternate control system.
                  </Typography>
                </Box>
                <Box mb={2}>
                  <Typography variant="subtitle1">
                    <strong>2. Control system logic</strong>
                  </Typography>
                  <Typography paragraph>
                    For J types, the suffix shows the <strong>Ego</strong> pairing (Fight or Flight). For P types, the suffix shows the
                    <strong> Superego</strong> pairing (Freeze or Fawn).
                  </Typography>
                </Box>
                <Box mb={2}>
                  <Typography variant="subtitle1">
                    <strong>3. Function pairing rules</strong>
                  </Typography>
                  <Typography paragraph>
                    Each suffix pairs one perceiving and one judging function with opposite attitudes within the same
                    hemisphere:
                  </Typography>
                  <Typography component="ul">
                    <li>
                      <strong>ST:</strong> Sensing + Thinking
                    </li>
                    <li>
                      <strong>SF:</strong> Sensing + Feeling
                    </li>
                    <li>
                      <strong>NT:</strong> Intuition + Thinking
                    </li>
                    <li>
                      <strong>NF:</strong> Intuition + Feeling
                    </li>
                  </Typography>
                </Box>
                <Box mb={2}>
                  <Typography variant="subtitle1">
                    <strong>4. 4F response mapping</strong>
                  </Typography>
                  <Typography paragraph>
                    Responses under stress map to 4F survival modes based on control‑system base:
                  </Typography>
                  <Typography component="ul">
                    <li>
                      <strong>Superego base (J types):</strong> ST/NT → Fight; SF/NF → Flight
                    </li>
                    <li>
                      <strong>Ego base (P types):</strong> ST/NT → Freeze; SF/NF → Fawn
                    </li>
                  </Typography>
                </Box>
                <Box mb={2}>
                  <Typography variant="subtitle1">
                    <strong>5. Example shifts</strong>
                  </Typography>
                  <Typography component="ul">
                    <li>
                      <strong>ENTJ–ST:</strong> TiSe — Fight
                    </li>
                    <li>
                      <strong>ENTJ–SF:</strong> FiSe — Flight
                    </li>
                    <li>
                      <strong>ISTP–ST:</strong> TeSi — Freeze
                    </li>
                    <li>
                      <strong>ISTP–SF:</strong> FeSi — Fawn
                    </li>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1">
                    <strong>6. System summary</strong>
                  </Typography>
                  <Typography paragraph>
                    64 distinct states (16×4). Each suffix reveals the active function pairing, the engaged control
                    system, and the resulting 4F response, capturing real‑time shifts in cognition and stress adaptation.
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Individuation road‑map</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" paragraph>
                  Growth is sequential: each default response integrates its opposite in turn.
                </Typography>
                <Box component="ul" sx={{ pl: 3 }}>
                  <li>
                    <Typography variant="body2">
                      <strong>Fight</strong> → Fawn → Freeze → Flight
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      <strong>Freeze</strong> → Flight → Fight → Fawn
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      <strong>Fawn</strong> → Fight → Flight → Freeze
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      <strong>Flight</strong> → Freeze → Fawn → Fight
                    </Typography>
                  </li>
                </Box>
                <Typography variant="body2">
                  Mastery means cycling all four—switching gears by choice rather than being yanked by circumstance.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Card sx={{ mt: 1 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Our mission
                </Typography>
                <Typography variant="body1" paragraph>
                  TRPI’s mission is to equip people with a precise mental model of their perception, judgment, and stress
                  responses—so they can intervene intelligently. Recognizing the pairings at play (and when they invert)
                  helps improve relationships, decision‑making, and long‑term development.
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default TRPIExplanation;
