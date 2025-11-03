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
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
  { trait: 'Conscientiousness (C)', mapping: 'Si/Ni + Te', mode: 'Freeze', note: '' },
  { trait: 'Extraversion (E)', mapping: 'Se/Ne + Ti', mode: 'Fight', note: '' },
  { trait: 'Agreeableness (A)', mapping: 'Si/Ni + Fe', mode: 'Fawn', note: '' },
  { trait: 'Neuroticism (N)', mapping: 'Se/Ne + Fi', mode: 'Flight', note: '' },
];

const structuralMap = [
  { name: 'Id', mapping: 'Se / Ne', desc: 'Raw perception & impulse' },
  { name: 'Superid', mapping: 'Si / Ni', desc: 'Stored memory & foresight' },
  { name: 'Ego', mapping: 'Ti / Fi', desc: 'Individual logic & values' },
  { name: 'Superego', mapping: 'Te / Fe', desc: 'Collective logic & values' },
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
    code.startsWith('S') ? 'default' :
    code.startsWith('N') ? 'secondary' :
    code.startsWith('T') ? 'primary' :
    'success';
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
    <Typography variant="body2" sx={{ opacity: 0.7 }}>{k}</Typography>
    <Typography variant="body2" sx={{ fontWeight: 600 }}>{v}</Typography>
  </Box>
);

// ---------- Component ----------
const TRPIExplanation: React.FC = () => {
  return (
    <Container sx={{ mt: '100px' }}>
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
        <TRPIHelmet />

        <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
          <Typography variant="h4" gutterBottom>
            Trait Response Personality Indicator (TRPI)
          </Typography>

          <Typography variant="body1" paragraph>
            TRPI blends Jungian functions, a Freudian structure, Big Five traits, and the 4F survival modes into a
            single, dynamic map of how people perceive, decide, and adapt under pressure. The emphasis is on
            <em> pairings</em> and <em>state shifts</em> rather than isolated functions.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <ModeSelector />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <Box sx={{ width: '100%', maxWidth: 520 }}>
              <Matrix width={'100px'} />
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <TypeSelector />
          </Box>

          {/* CORTICAL MAP */}
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Cortical Map: aPFC Perception & Bilateral Judging Hubs</Typography>
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
                              <TableCell><strong>Region</strong></TableCell>
                              <TableCell><strong>Function</strong></TableCell>
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
                              <TableCell><strong>Region</strong></TableCell>
                              <TableCell><strong>Function</strong></TableCell>
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
                        Perceiving–Judging Modulation
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
                        Attitude & Context Window
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

          {/* BIG FIVE & 4F */}
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Big Five Traits ↔ 4F Responses</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" paragraph>
                Mapping traits to survival modes clarifies how temperament becomes behavior under stress.
              </Typography>
              <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2 }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Trait</strong></TableCell>
                      <TableCell><strong>Function Basis</strong></TableCell>
                      <TableCell><strong>4F Mode</strong></TableCell>
                      <TableCell><strong>Notes</strong></TableCell>
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
            </AccordionDetails>
          </Accordion>

          {/* STRUCTURE */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Id, Superid, Ego, Superego — Functional Roles</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {structuralMap.map((s) => (
                  <Grid item xs={12} md={6} key={s.name}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>{s.name}</Typography>
                        <Box sx={{ mb: 1 }}>
                          {s.mapping.split('/').map((code) => (
                            <FunctionChip key={code.trim()} code={code.trim()} />
                          ))}
                        </Box>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>{s.desc}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* INVERSION */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Inversion of the Dominant Under Stress</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" paragraph>
                Under sustained stress, the dominant attitude can flip, forcing the psyche to rely on less efficient
                pairings. Two things shift: perception (Sensing ↔ Intuition) and judgment (Thinking ↔ Feeling), often
                crossing attitudes (e.g., Te ↔ Fi, Fe ↔ Ti) and producing rigid or over‑accommodating behavior until
                equilibrium is restored.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* FUNCTION PAIRINGS TABLE */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">TRPI Function Pairings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" paragraph>
                Pairings emphasize how a perceiving function couples with a judging function (opposite attitudes within
                the same hemisphere) and how stacks shift across Dominant, Auxiliary, Tertiary, and Inferior modes.
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Type</strong></TableCell>
                      <TableCell><strong>4F</strong></TableCell>
                      <TableCell width={300}><strong>Grant Stack</strong></TableCell>
                      <TableCell width={160}><strong>Dominant Pairing</strong></TableCell>
                      <TableCell width={160}><strong>Auxiliary Pairing</strong></TableCell>
                      <TableCell width={160}><strong>Tertiary Pairing</strong></TableCell>
                      <TableCell width={160}><strong>Inferior Pairing</strong></TableCell>
                      <TableCell width={160}><strong>Opposite</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {functionPairings.map((pairing: any, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{pairing.type}</TableCell>
                        <TableCell>{pairing.f4}</TableCell>
                        <TableCell width={300}>{pairing.stack}</TableCell>
                        <TableCell width={160}>{pairing.dominant}</TableCell>
                        <TableCell width={160}>{pairing.auxiliary}</TableCell>
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

          {/* 64-STATE REFERENCE */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">TRPI 64‑State Reference</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box mb={2}>
                <Typography variant="subtitle1"><strong>1. Type System</strong></Typography>
                <Typography paragraph>
                  All 16 MBTI types operate from either the Ego or Superego by default. Judging types (J) are
                  Superego‑based; Perceiving types (P) are Ego‑based. A two‑letter suffix (ST, SF, NT, NF) indicates the
                  currently active alternate control system.
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1"><strong>2. Control System Logic</strong></Typography>
                <Typography paragraph>
                  For J types, the suffix shows the <strong>Ego</strong> pairing (Fight or Flight). For P types, the suffix shows
                  the <strong>Superego</strong> pairing (Freeze or Fawn).
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1"><strong>3. Function Pairing Rules</strong></Typography>
                <Typography paragraph>
                  Each suffix pairs one perceiving and one judging function with opposite attitudes within the same
                  hemisphere:
                </Typography>
                <Typography component="ul">
                  <li><strong>ST:</strong> Sensing + Thinking</li>
                  <li><strong>SF:</strong> Sensing + Feeling</li>
                  <li><strong>NT:</strong> Intuition + Thinking</li>
                  <li><strong>NF:</strong> Intuition + Feeling</li>
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1"><strong>4. 4F Response Mapping</strong></Typography>
                <Typography paragraph>
                  Responses under stress map to 4F survival modes based on control‑system base:
                </Typography>
                <Typography component="ul">
                  <li><strong>Superego base (J types):</strong> ST/NT → Fight; SF/NF → Flight</li>
                  <li><strong>Ego base (P types):</strong> ST/NT → Freeze; SF/NF → Fawn</li>
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1"><strong>5. Example Shifts</strong></Typography>
                <Typography component="ul">
                  <li><strong>ENTJ–ST:</strong> TiSe — Fight</li>
                  <li><strong>ENTJ–SF:</strong> FiSe — Flight</li>
                  <li><strong>ISTP–ST:</strong> TeSi — Freeze</li>
                  <li><strong>ISTP–SF:</strong> FeSi — Fawn</li>
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1"><strong>6. System Summary</strong></Typography>
                <Typography paragraph>
                  64 distinct states (16×4). Each suffix reveals the active function pairing, the engaged control system,
                  and the resulting 4F response, capturing real‑time shifts in cognition and stress adaptation.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* INDIVIDUATION */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Individuation Road‑Map</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" paragraph>
                Growth is sequential: each default response integrates its opposite in turn.
              </Typography>
              <Box component="ul" sx={{ pl: 3 }}>
                <li>
                  <Typography variant="body2"><strong>Fight</strong> → Fawn → Freeze → Flight</Typography>
                </li>
                <li>
                  <Typography variant="body2"><strong>Freeze</strong> → Flight → Fight → Fawn</Typography>
                </li>
                <li>
                  <Typography variant="body2"><strong>Fawn</strong> → Fight → Flight → Freeze</Typography>
                </li>
                <li>
                  <Typography variant="body2"><strong>Flight</strong> → Freeze → Fawn → Fight</Typography>
                </li>
              </Box>
              <Typography variant="body2">
                Mastery means cycling all four—switching gears by choice rather than being yanked by circumstance.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* MISSION */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                TRPI’s mission is to equip people with a precise mental model of their perception, judgment, and stress
                responses—so they can intervene intelligently. Recognizing the pairings at play (and when they invert)
                helps improve relationships, decision‑making, and long‑term development.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Paper>
    </Container>
  );
};

export default TRPIExplanation;
