import React from 'react';
import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import Matrix from './Matrix';
import ModeSelector from './ModeSelector';
import TypeSelector from './TypeSelector';
import { Helmet } from 'react-helmet';
import { functionPairings } from '../utils/mbtiMapping';

const anteriorMapping = [
  { region: 'Left lateral aPFC', fn: 'Se', label: 'Extraverted Sensing' },
  { region: 'Left medial aPFC', fn: 'Si', label: 'Introverted Sensing' },
  { region: 'Right lateral aPFC', fn: 'Ne', label: 'Extraverted Intuition' },
  { region: 'Right medial aPFC', fn: 'Ni', label: 'Introverted Intuition' },
];

const posteriorMapping = [
  { region: 'Ventrolateral PFC (bilateral)', fn: 'Te', label: 'Extraverted Thinking' },
  { region: 'Dorsolateral PFC (bilateral)', fn: 'Ti', label: 'Introverted Thinking' },
  { region: 'Ventromedial PFC (bilateral)', fn: 'Fi', label: 'Introverted Feeling' },
  { region: 'Dorsomedial PFC (bilateral)', fn: 'Fe', label: 'Extraverted Feeling' },
];

const modulationLines = ['Se < Fi/Ti = Si', 'Si < Te/Fe = Se', 'Ni < Te/Fe = Se', 'Ne < Ti/Fi = Si'];

const bigFive4F = [
  { trait: 'Openness (O)', mapping: 'S / N', mode: '—', note: 'High → N (abstract) · Low → S (concrete)' },
  { trait: 'Conscientiousness (C)', mapping: 'Si/Ni + Te', mode: 'Freeze', note: 'Prediction, standards, routines' },
  { trait: 'Extraversion (E)', mapping: 'Se/Ne + Ti', mode: 'Fight', note: 'Action bias, improvise, compete' },
  { trait: 'Agreeableness (A)', mapping: 'Si/Ni + Fe', mode: 'Fawn', note: 'Affiliation, harmonizing, conform' },
  { trait: 'Neuroticism (N)', mapping: 'Se/Ne + Fi', mode: 'Flight', note: 'Vigilance, withdraw, protect values' },
];

const structuralMap = [
  { name: 'Id', mapping: 'Se / Ne', desc: 'Raw perception & impulse' },
  { name: 'Ego', mapping: 'Ti / Fi', desc: 'Personal logic & values' },
  { name: 'Superid', mapping: 'Si / Ni', desc: 'Stored memory & foresight' },
  { name: 'Superego', mapping: 'Te / Fe', desc: 'Collective logic & values' },
];

const survivalMap = [
  { label: 'Freeze', combo: 'Si/Ni + Te', action: 'lock down, analyze, standardize' },
  { label: 'Fight', combo: 'Se/Ne + Ti', action: 'act fast, improvise, compete' },
  { label: 'Fawn', combo: 'Si/Ni + Fe', action: 'conform, affiliate, harmonize' },
  { label: 'Flight', combo: 'Se/Ne + Fi', action: 'scan, retreat, protect values' },
];

const TRPIHelmet: React.FC = () => (
  <Helmet>
    <title>TRPI — 64 Meta‑State Neural Map</title>
    <meta
      name="description"
      content="Anterior perceiving hubs (S/N) modulate bilateral judging hubs (T/F) to yield 64 hypercube meta‑states."
    />
    <meta property="og:title" content="TRPI — 64 Meta‑State Neural Map" />
    <meta
      property="og:description"
      content="See how Se/Si/Ne/Ni pair with Te/Ti/Fe/Fi to generate the 8×8 cognitive hypercube across models."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://traitindicator.com/#/explanation" />
    <meta property="og:image" content="https://traitindicator.com/logo.png" />
  </Helmet>
);

const RibbonPill: React.FC<{ label: string }> = ({ label }) => (
  <Chip
    size="small"
    label={label}
    sx={{
      px: 1.4,
      py: 0.4,
      borderRadius: 999,
      fontWeight: 700,
      letterSpacing: 0.4,
      background: 'linear-gradient(120deg, #0ea5e9, #6366f1)',
      color: 'white',
      boxShadow: '0 10px 30px rgba(99,102,241,0.35)',
    }}
  />
);

const FrostedCard: React.FC<{
  title: string;
  eyebrow?: string;
  accent?: string;
  children: React.ReactNode;
}> = ({ title, eyebrow, accent, children }: any) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        p: { xs: 2.5, sm: 3 },
        borderRadius: 4,
        bgcolor: alpha(theme.palette.background.paper, theme.palette.mode === 'dark' ? 0.45 : 0.75),
        border: `1px solid ${alpha(accent || theme.palette.primary.main, 0.2)}`,
        boxShadow: '0 25px 80px rgba(0,0,0,0.25)',
        overflow: 'hidden',
      }}
    >
      {accent && (
        <Box
          sx={{
            position: 'absolute',
            inset: '-45% auto auto -45%',
            width: 260,
            height: 260,
            background: `radial-gradient(circle at 35% 35%, ${alpha(accent, 0.32)}, transparent 60%)`,
            filter: 'blur(8px)',
            opacity: 0.8,
            pointerEvents: 'none',
          }}
        />
      )}
      <Stack spacing={0.5} sx={{ position: 'relative' }}>
        {eyebrow && (
          <Typography variant="overline" sx={{ letterSpacing: 1.2, color: 'text.secondary' }}>
            {eyebrow}
          </Typography>
        )}
        <Typography variant="h6" fontWeight={800} gutterBottom>
          {title}
        </Typography>
      </Stack>
      <Box sx={{ position: 'relative' }}>{children}</Box>
    </Box>
  );
};

const MapRow: React.FC<{ primary: string; secondary: string; detail: string; tone: string }> = ({
  primary,
  secondary,
  detail,
  tone,
}: any) => (
  <Box
    sx={{
      p: 1.5,
      borderRadius: 3,
      bgcolor: alpha(tone, 0.08),
      border: `1px solid ${alpha(tone, 0.25)}`,
      display: 'grid',
      gap: 0.3,
    }}
  >
    <Typography variant="subtitle1" fontWeight={800}>
      {primary}
    </Typography>
    <Typography variant="body2" sx={{ opacity: 0.85 }}>
      {secondary}
    </Typography>
    <Typography variant="caption" sx={{ opacity: 0.8 }}>
      {detail}
    </Typography>
  </Box>
);

const ModulationChip: React.FC<{ line: string }> = ({ line }: any) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        px: 1.6,
        py: 0.85,
        borderRadius: 999,
        fontFamily: 'JetBrains Mono, monospace',
        background: alpha(theme.palette.primary.main, 0.1),
        border: `1px dashed ${alpha(theme.palette.primary.main, 0.4)}`,
        fontSize: 13,
      }}
    >
      {line}
    </Box>
  );
};

const TRPIExplanation: React.FC = () => {
  const theme = useTheme();

  return (
    <Container sx={{ mt: '96px', mb: 10 }}>
      <TRPIHelmet />
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          p: { xs: 3, md: 4 },
          borderRadius: 5,
          bgcolor:
            theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, rgba(13,22,37,0.9), rgba(28,32,58,0.9))'
              : 'linear-gradient(135deg, rgba(236,244,255,0.9), rgba(224,231,255,0.9))',
          boxShadow: '0 30px 120px rgba(0,0,0,0.35)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 12% 20%, rgba(99,102,241,0.18), transparent 30%),\
               radial-gradient(circle at 85% 18%, rgba(14,165,233,0.18), transparent 35%),\
               radial-gradient(circle at 70% 80%, rgba(16,185,129,0.16), transparent 38%)',
            pointerEvents: 'none',
          }}
        />
        <Grid container spacing={4} alignItems="center" sx={{ position: 'relative' }}>
          <Grid item xs={12} md={7} lg={7}>
            <Stack spacing={2.5}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <RibbonPill label="Anterior perception" />
                <RibbonPill label="Bilateral judgment" />
                <RibbonPill label="64 meta‑states" />
              </Stack>
              <Typography variant="h3" fontWeight={900} sx={{ letterSpacing: -0.4 }}>
                Trait Response Personality Indicator
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 820, opacity: 0.9, lineHeight: 1.7 }}>
                Every anterior S/N hub (Se, Si, Ne, Ni) modulates the context window, while bilateral T/F hubs (Te, Ti, Fe, Fi)
                evaluate and steer. Pairing them produces the 8×8 meta‑state hypercube that aligns Freud/Jung structures, the Big
                Five, and the 4F survival gears into one operating map.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} flexWrap="wrap" useFlexGap>
                <Box
                  sx={{
                    px: 2,
                    py: 1.25,
                    borderRadius: 3,
                    bgcolor: alpha(theme.palette.primary.main, 0.12),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
                    minWidth: 240,
                  }}
                >
                  <Typography variant="subtitle2" fontWeight={800} gutterBottom>
                    Modulation syntax
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.85 }}>
                    {'<'} extends perception around judgment · {'='} equilibrates with the judging anchor.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    px: 2,
                    py: 1.25,
                    borderRadius: 3,
                    bgcolor: alpha(theme.palette.success.main, 0.12),
                    border: `1px solid ${alpha(theme.palette.success.main, 0.35)}`,
                    minWidth: 240,
                  }}
                >
                  <Typography variant="subtitle2" fontWeight={800} gutterBottom>
                    Context pacing
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.85 }}>
                    Introvert = subjective, long context · Extraversion = objective, rapid refresh.
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <Box
              sx={{
                p: 2.5,
                borderRadius: 4,
                bgcolor: alpha(theme.palette.background.paper, theme.palette.mode === 'dark' ? 0.55 : 0.8),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                boxShadow: '0 25px 70px rgba(0,0,0,0.35)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Stack spacing={2}>
                <Typography variant="overline" sx={{ letterSpacing: 1.6, color: 'text.secondary' }}>
                  Live state surface
                </Typography>
                <Matrix width="100%" />
                <ModeSelector />
                <TypeSelector />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} lg={7}>
          <FrostedCard title="Cortical topology" eyebrow="Anterior S/N · Bilateral T/F" accent={theme.palette.info.main}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" sx={{ opacity: 0.7 }} gutterBottom>
                  Perceiving hubs (anterior)
                </Typography>
                <Stack spacing={1.1}>
                  {anteriorMapping.map((row) => (
                    <MapRow
                      key={row.region}
                      primary={row.fn}
                      secondary={row.region}
                      detail={row.label}
                      tone={theme.palette.info.main}
                    />
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" sx={{ opacity: 0.7 }} gutterBottom>
                  Judging hubs (bilateral)
                </Typography>
                <Stack spacing={1.1}>
                  {posteriorMapping.map((row) => (
                    <MapRow
                      key={row.region}
                      primary={row.fn}
                      secondary={row.region}
                      detail={row.label}
                      tone={theme.palette.secondary.main}
                    />
                  ))}
                </Stack>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />
            <Stack spacing={1}>
              <Typography variant="subtitle2" fontWeight={800}>
                Modulation ledger
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {modulationLines.map((line) => (
                  <ModulationChip key={line} line={line} />
                ))}
              </Stack>
            </Stack>
          </FrostedCard>
        </Grid>

        <Grid item xs={12} lg={5}>
          <FrostedCard title="Psycho‑structural stack" eyebrow="Freud · Jung alignment" accent={theme.palette.success.main}>
            <Stack spacing={1.2}>
              {structuralMap.map((item) => (
                <MapRow
                  key={item.name}
                  primary={item.name}
                  secondary={item.mapping}
                  detail={item.desc}
                  tone={theme.palette.success.main}
                />
              ))}
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Id (Se/Ne) brings raw intake, Superid (Si/Ni) stores and forecasts, Ego (Ti/Fi) personalizes meaning, and Superego
              (Te/Fe) enforces collective order. Stability emerges by pairing one perceiving code with one judging code across
              attitudes.
            </Typography>
          </FrostedCard>
        </Grid>

        <Grid item xs={12} md={7}>
          <FrostedCard title="Trait overlays" eyebrow="Big Five × 4F" accent={theme.palette.primary.main}>
            <Grid container spacing={2}>
              {bigFive4F.map((row) => (
                <Grid item xs={12} sm={6} key={row.trait}>
                  <Box
                    sx={{
                      p: 1.6,
                      borderRadius: 3,
                      bgcolor: alpha(theme.palette.primary.main, 0.08),
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                      display: 'grid',
                      gap: 0.35,
                      height: '100%',
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight={800}>
                      {row.trait}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.85 }}>
                      Basis: {row.mapping}
                    </Typography>
                    <Typography variant="body2" fontWeight={700}>
                      Mode: {row.mode}
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.85 }}>
                      {row.note}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </FrostedCard>
        </Grid>

        <Grid item xs={12} md={5}>
          <FrostedCard title="Survival gears" eyebrow="4F responses" accent={theme.palette.warning.main}>
            <Stack spacing={1.1}>
              {survivalMap.map((item) => (
                <MapRow
                  key={item.label}
                  primary={item.label}
                  secondary={item.combo}
                  detail={item.action}
                  tone={theme.palette.warning.main}
                />
              ))}
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              Fight / Flight / Freeze / Fawn are contextual gears that emerge from which judging hub (Ego vs. Superego) is paired
              to which perceiving hub (Id vs. Superid) under pressure.
            </Typography>
          </FrostedCard>
        </Grid>

        <Grid item xs={12}>
          <FrostedCard title="64 meta‑state hypercube" eyebrow="8 perceiving × 8 judging" accent={theme.palette.secondary.main}>
            <Grid container spacing={3} alignItems="stretch">
              <Grid item xs={12} md={7}>
                <Typography variant="body1" sx={{ opacity: 0.9 }} gutterBottom>
                  Each anterior perceiving hub pairs with each bilateral judging hub to form the 8×8 grid. The MBTI suffix reveals
                  which perceiving–judging dyad is active, and every dyad can stretch ({'<'} modulation) or equilibrate (=) the
                  context window. The cube therefore expresses 16 types across 4 pairings → 64 live meta‑states.
                </Typography>
                <Grid container spacing={1.5}>
                  {Object.entries(functionPairings).map(([suffix, desc]) => (
                    <Grid item xs={12} sm={6} key={suffix}>
                      <Box
                        sx={{
                          p: 1.4,
                          borderRadius: 3,
                          bgcolor: alpha(theme.palette.secondary.main, 0.08),
                          border: `1px solid ${alpha(theme.palette.secondary.main, 0.25)}`,
                        }}
                      >
                        <Typography variant="subtitle2" fontWeight={800}>
                          {suffix}
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.85 }}>
                          {desc}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 4,
                    bgcolor: alpha(theme.palette.secondary.main, 0.08),
                    border: `1px solid ${alpha(theme.palette.secondary.main, 0.25)}`,
                    height: '100%',
                    display: 'grid',
                    gap: 0.6,
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={900} gutterBottom>
                    Quick decode
                  </Typography>
                  <Typography variant="body2">Id: Se/Ne · Superid: Si/Ni</Typography>
                  <Typography variant="body2">Ego: Ti/Fi · Superego: Te/Fe</Typography>
                  <Typography variant="body2">Introvert = long context · Extravert = rapid refresh</Typography>
                  <Typography variant="body2">64 states = 16 types × 4 function pairings</Typography>
                  <Typography variant="body2">4F overlay selects the survival gear based on the pairing</Typography>
                </Box>
              </Grid>
            </Grid>
          </FrostedCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TRPIExplanation;
