import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  useTheme,
  alpha
} from '@mui/material';
import { Helmet } from 'react-helmet';
import Matrix from './Matrix';
import ModeSelector from './ModeSelector';
import TypeSelector from './TypeSelector';

const anteriorMapping = [
  { region: 'Left lateral anterior', fn: 'Se' },
  { region: 'Left medial anterior', fn: 'Si' },
  { region: 'Right lateral anterior', fn: 'Ne' },
  { region: 'Right medial anterior', fn: 'Ni' },
];

const posteriorMapping = [
  { region: 'Ventrolateral', fn: 'Te' },
  { region: 'Dorsolateral', fn: 'Ti' },
  { region: 'Ventromedial', fn: 'Fi' },
  { region: 'Dorsomedial', fn: 'Fe' },
];

const modulationEquations = [
  'Se < Fi/Ti = Si',
  'Si < Te/Fe = Se',
  'Ni < Te/Fe = Se',
  'Ne < Ti/Fi = Si',
];

const structuralMap = [
  { name: 'Id', mapping: 'Se/Ne' },
  { name: 'Ego', mapping: 'Ti/Fi' },
  { name: 'Superid', mapping: 'Si/Ni' },
  { name: 'Superego', mapping: 'Te/Fe' },
];

const survivalModes = [
  { name: 'Freeze', formula: 'Si/Ni + Te' },
  { name: 'Fight', formula: 'Se/Ne + Ti' },
  { name: 'Fawn', formula: 'Si/Ni + Fe' },
  { name: 'Flight', formula: 'Se/Ne + Fi' },
];

const bigFiveMapping = [
  { trait: 'O', label: 'Openness', map: 'S/N' },
  { trait: 'C', label: 'Conscientiousness', map: 'Si/Ni + Te' },
  { trait: 'E', label: 'Extraversion', map: 'Se/Ne + Ti' },
  { trait: 'A', label: 'Agreeableness', map: 'Si/Ni + Fe' },
  { trait: 'N', label: 'Neuroticism', map: 'Se/Ne + Fi' },
];

const TRPIHelmet: React.FC = () => (
  <Helmet>
    <title>TRPI — Neurocognitive Architecture</title>
    <meta
      name="description"
      content="A unified map connecting cognition, motivation, and stress adaptation."
    />
  </Helmet>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 2, mb: 2 }}>
    {children}
  </Typography>
);

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <Card elevation={3} sx={{ height: '100%', borderRadius: 3 }}>
    <CardContent>
      <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
        {title}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

const TRPIExplanation: React.FC = () => {
  const theme = useTheme();

  return (
    <Container sx={{ mt: '128px', mb: 8 }}>
      <TRPIHelmet />
      <Paper 
        elevation={4} 
        sx={{ 
          p: { xs: 3, md: 5 }, 
          borderRadius: 4, 
          background: theme.palette.mode === 'dark' ? undefined : '#fff'
        }}
      >
        <Box textAlign="center" mb={6}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Trait Response Personality Indicator
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            A unified map connecting cognition, motivation, and stress adaptation. 
            From Freud to Jung to Big Five to Neurology — all describing the same thing.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          
          {/* Neurocognitive Map */}
          <Grid item xs={12} md={6}>
            <InfoCard title="Neurocognitive Map">
              <Typography variant="subtitle2" gutterBottom sx={{ opacity: 0.8 }}>
                Anterior PFC (Perceiving) works with Bilateral PFC (Judging).
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1}>
                    {anteriorMapping.map((item) => (
                      <Box key={item.fn} display="flex" justifyContent="space-between" alignItems="center">
                         <Typography variant="body2">{item.region}</Typography>
                         <Chip label={item.fn} color="primary" size="small" sx={{ fontWeight: 'bold' }} />
                      </Box>
                    ))}
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                   <Stack spacing={1}>
                    {posteriorMapping.map((item) => (
                      <Box key={item.fn} display="flex" justifyContent="space-between" alignItems="center">
                         <Typography variant="body2">{item.region}</Typography>
                         <Chip label={item.fn} color="secondary" size="small" sx={{ fontWeight: 'bold' }} />
                      </Box>
                    ))}
                  </Stack>
                </Grid>
              </Grid>
              <Box mt={2}>
                 <Typography variant="caption" color="text.secondary">
                   The last four are bilateral too so theres one in each hemisphere, they work together with the anterior pfc.
                 </Typography>
              </Box>
            </InfoCard>
          </Grid>

          {/* Modulation Logic */}
          <Grid item xs={12} md={6}>
            <InfoCard title="Modulation Logic">
               <Typography variant="body2" gutterBottom>
                  <strong>{'<'} denotes modulation (extension or contraction)</strong>
               </Typography>
               <Stack spacing={1} sx={{ my: 2 }}>
                  {modulationEquations.map((eq) => (
                    <Paper key={eq} variant="outlined" sx={{ p: 1, textAlign: 'center', bgcolor: alpha(theme.palette.action.hover, 0.05) }}>
                       <Typography variant="subtitle1" fontFamily="monospace" fontWeight="bold">
                         {eq}
                       </Typography>
                    </Paper>
                  ))}
               </Stack>
               <Divider sx={{ my: 2 }} />
               <Grid container spacing={2}>
                 <Grid item xs={6}>
                   <Typography variant="subtitle2" fontWeight="bold">Introvert</Typography>
                   <Typography variant="caption" display="block">Subjective</Typography>
                   <Typography variant="caption" display="block">Long context processing</Typography>
                 </Grid>
                 <Grid item xs={6}>
                   <Typography variant="subtitle2" fontWeight="bold">Extraversion</Typography>
                   <Typography variant="caption" display="block">Objective</Typography>
                   <Typography variant="caption" display="block">Short context processing</Typography>
                 </Grid>
               </Grid>
            </InfoCard>
          </Grid>

           {/* Psycho-Structural & Big Five */}
           <Grid item xs={12}>
              <Grid container spacing={4}>
                 <Grid item xs={12} md={4}>
                    <InfoCard title="Structural Map">
                       <Stack spacing={1.5}>
                          {structuralMap.map((item) => (
                             <Box key={item.name} display="flex" justifyContent="space-between" alignItems="center" p={1} bgcolor={alpha(theme.palette.background.default, 0.5)} borderRadius={1}>
                                <Typography fontWeight="bold">{item.name}</Typography>
                                <Typography fontFamily="monospace">{item.mapping}</Typography>
                             </Box>
                          ))}
                       </Stack>
                    </InfoCard>
                 </Grid>
                 <Grid item xs={12} md={4}>
                    <InfoCard title="4F Survival Modes">
                        <Stack spacing={1.5}>
                          {survivalModes.map((item) => (
                             <Box key={item.name} display="flex" justifyContent="space-between" alignItems="center" p={1} bgcolor={alpha(theme.palette.background.default, 0.5)} borderRadius={1}>
                                <Typography fontWeight="bold">{item.name}</Typography>
                                <Typography fontFamily="monospace">{item.formula}</Typography>
                             </Box>
                          ))}
                       </Stack>
                    </InfoCard>
                 </Grid>
                 <Grid item xs={12} md={4}>
                   <InfoCard title="Big Five OCEAN">
                       <Stack spacing={1.5}>
                          {bigFiveMapping.map((item) => (
                             <Box key={item.trait} display="flex" justifyContent="space-between" alignItems="center" p={1} bgcolor={alpha(theme.palette.background.default, 0.5)} borderRadius={1}>
                                <Typography fontWeight="bold">{item.trait}: {item.label}</Typography>
                                <Typography fontFamily="monospace" variant="caption">{item.map}</Typography>
                             </Box>
                          ))}
                       </Stack>
                    </InfoCard>
                 </Grid>
              </Grid>
           </Grid>

           {/* Interactive Tools */}
           <Grid item xs={12}>
              <Divider sx={{ my: 4 }} >
                <Chip label="Interactive Tools" />
              </Divider>
           </Grid>

           <Grid item xs={12} lg={6}>
              <Box sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                 <SectionTitle>Type Selector</SectionTitle>
                 <Typography variant="body2" color="text.secondary" mb={3} textAlign="center">
                   Click to toggle parameters and see the active code.
                 </Typography>
                 <TypeSelector />
              </Box>
           </Grid>

           <Grid item xs={12} lg={6}>
               <Box sx={{ p: 2, height: '100%' }}>
                  <ModeSelector />
               </Box>
           </Grid>

           {/* 64 State Overview */}
           <Grid item xs={12}>
              <Paper variant="outlined" sx={{ p: 4, mt: 4, borderRadius: 3, textAlign: 'center', bgcolor: alpha(theme.palette.primary.main, 0.03) }}>
                 <SectionTitle>64 State Overview</SectionTitle>
                 <Typography variant="body1" color="text.secondary" paragraph>
                    The complete matrix of all potential meta-states.
                 </Typography>
                 <Box display="flex" justifyContent="center">
                    <Matrix width="80px" />
                 </Box>
              </Paper>
           </Grid>

        </Grid>
      </Paper>
    </Container>
  );
};

export default TRPIExplanation;
