import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { typesData } from '../utils/typesData';
import RelatedTypesBox from '../components/RelatedTypesBox';
import { findClosestComplement, functionPairings, MBTIProfiles } from '../utils/mbtiMapping';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
  Button,
  List,
  ListItem,
  Paper,
  Stack,
  LinearProgress,
  CircularProgress,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
import { Bar } from 'react-chartjs-2';
import Carousel from '../components/Carousel';
import JsonBinApi from '../utils/jsonBin';
import QuestionnaireModal from '../components/QuestionnaireModal';
import {
  generateLaymanReport,
  generateEnthusiastReport,
  generateExpertReport,
} from '../utils/profileGenerator';
import { guid } from '../utils/guid';
import Ranking from '../components/Ranking';
import ReactMarkdown from 'react-markdown';

/* ------------------------------------------------------------ */
/*  helpers for assessment narrative                            */
/* ------------------------------------------------------------ */
const getSubtext = (statement: any, value: number) => {
  const pct = Math.round(value * 100);
  const range = Object.keys(statement.subtext ?? {}).find((key) => {
    const [min, max] = key.split('-').map(Number);
    return pct >= min && pct <= max;
  });
  return range ? statement.subtext[range]?.text ?? '' : '';
};

const buildAssessmentNarrative = (
  statements: any[],
  stagesFlat: any[],
  allResponses: Record<string, any>
) =>
  statements
    .map((statement) => {
      const idx = stagesFlat.filter((s) => s.trait === statement.trait).indexOf(statement);
      const answer = allResponses?.[statement.trait]?.[idx];
      if (answer === undefined || answer === null) return '';
      return getSubtext(statement, answer).trim();
    })
    .join('\n');

/* ------------------------------------------------------------ */
/*  Component                                                   */
/* ------------------------------------------------------------ */
const AboutPage: React.FC<{
  bin?: any;
  mbtiType?: string;
  suffix?: string;
  showBigFive?: boolean;
  description?: string;
  allResponses?: any;
  statements?: any[];
  stages?: any[];
  list?: Record<any, any>;
  handleReloadBin?: () => void;
}> = ({
  bin,
  mbtiType,
  suffix,
  showBigFive = true,
  description = '',
  allResponses = {},
  statements = [],
  stages = [],
  list = {},
  handleReloadBin = null,
}) => {
  /* ------------------ look-ups & responsive ------------------ */
  const { type } = useParams<{ type: string }>();
  const typeInfo = typesData.find((t) => t.type === type || t.type === mbtiType);
  const profile = MBTIProfiles.find((p) => p.name === type || p.name === mbtiType);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  /* ------------------ local state ---------------------------- */
  const [premiumModalOpen, setPremiumModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profileText, setProfileText] = useState<string>(description);
  const [reportLevel, setReportLevel] = useState<'casual' | 'advanced' | 'expert'>('casual');

  /* ------------------ assessment narrative ------------------- */
  const stmnts = stages.flat();
  const assessmentNarrative = buildAssessmentNarrative(statements, stmnts, allResponses);

  /* ------------------ generator map -------------------------- */
  const levelToGenerator = {
    casual: generateLaymanReport,
    advanced: generateEnthusiastReport,
    expert: generateExpertReport,
  } as const;

  /* ------------------ chart data ----------------------------- */
  const chartData = {
    labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
    datasets: [
      {
        label: 'Big Five Scores',
        data: profile?.traits
          ? [
              profile.traits.openness * 100,
              profile.traits.conscientiousness * 100,
              profile.traits.extraversion * 100,
              profile.traits.agreeableness * 100,
              profile.traits.neuroticism * 100,
            ]
          : [0, 0, 0, 0, 0],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  /* ------------------ FREE or PREMIUM generation ------------- */
  const generateFreeReport = async () => {
    setLoading(true);
    try {
      const generator = levelToGenerator[reportLevel];
      let prfl = functionPairings.find(pairing => pairing.type === bin.type) || functionPairings[0];
      let suffixType = findClosestComplement(bin.type, bin.bigFiveResponses)?.type || '';
      (prfl as any).suffix = suffixType.slice(1, 3);
      (prfl as any).suffixType = suffixType;

      const descriptionText = await generator({
        cognitiveProfile: prfl,
        scores: bin.bigFiveResponses,
        assessment: assessmentNarrative,
      });
      await JsonBinApi.updateResultsInJsonBin({
        ...bin,
        description: descriptionText,
        detailLevel: reportLevel,
      });
      setProfileText(descriptionText);
      handleReloadBin && handleReloadBin();
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateClick = () => {
    if (reportLevel === 'expert') {
      setPremiumModalOpen(true);        // pay-gated path
    } else {
      generateFreeReport();             // immediate & free
    }
  };

  const handlePaymentSuccess = async (data: any) => {
    setPremiumModalOpen(false);
    setLoading(true);

    try {
      const descriptionText = await generateExpertReport({
        cognitiveProfile: bin,
        scores: bin.bigFiveResponses,
        assessment: assessmentNarrative,
      });

      await JsonBinApi.updateResultsInJsonBin({
        ...bin,
        ...data.demographics,
        description: descriptionText,
        detailLevel: 'expert',
      });
      setProfileText(descriptionText);
      handleReloadBin && handleReloadBin();
    } finally {
      setLoading(false);
    }
  };

  /* ------------------ carousel slides ------------------------ */
  const slides =
    Object.values(allResponses).length && stages.length
      ? stages.map((stage) => ({
          content: (
            <Paper>
              <Stack spacing={2}>
                {stage.map((stmt: any) => {
                  const idx = stmnts.filter((s) => s.trait === stmt.trait).indexOf(stmt);
                  const raw = allResponses?.[stmt.trait]?.[idx];
                  const num = parseFloat(raw);
                  return (
                    <Paper sx={{ p: 3, mb: 5 }} key={idx}>
                      <Typography variant="h6">{stmt.text}</Typography>
                      <Typography color="text.secondary">Trait: {stmt.trait.toUpperCase()}</Typography>
                      <Box mt={1}>
                        <Typography sx={{ whiteSpace: 'pre-wrap' }}>
                          <strong>Your Answer:</strong>{' '}
                          {Number.isNaN(num) ? raw : `${Math.round(num * 100)}%`}
                        </Typography>
                        {!Number.isNaN(num) && (
                          <LinearProgress variant="determinate" value={num * 100} />
                        )}
                      </Box>
                    </Paper>
                  );
                })}
              </Stack>
            </Paper>
          ),
        }))
      : [];

  /* ------------------ guard -------------------- */
  if (!typeInfo) return <Typography variant="h5">Type information not available.</Typography>;

  /* ------------------ JSX ---------------------- */
  return (
    <Box sx={{ mt: '100px' }} padding={isMobile ? 2 : 4}>
      {/* Header */}
      <Typography variant={isMobile ? 'h5' : 'h4'} align="center" gutterBottom>
        {type || mbtiType} –{' '}
        {typeInfo.description.slice(
          typeInfo.description.indexOf(',') + 2,
          typeInfo.description.indexOf(':')
        )}
      </Typography>

      {/* Big-Five Chart */}
      {showBigFive && (
        <Box display="flex" justifyContent="center" my={4}>
          <Box width={isMobile ? '90%' : '60%'}>
            <Bar data={chartData} options={{ responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, max: 100 } },}} />
          </Box>
        </Box>
      )}

      {/* Quote */}
      <Box display="flex" justifyContent="center">
        <Typography
          variant="h4"
          sx={{ fontStyle: 'italic', fontWeight: 'bold', mb: 2, fontSize: isMobile ? '1.5rem' : '2rem' }}
        >
          {`"${typeInfo.quote}"`}
        </Typography>
      </Box>

      {/* Description & controls */}
      <Card variant="outlined" sx={{ my: 3, p: 2 }}>
        <CardContent>
          {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <Typography variant="body1" paragraph>
              {profileText ? <ReactMarkdown>{profileText}</ReactMarkdown> : typeInfo.description}
            </Typography>
          )}

         

      {!profileText && bin && bin.userId === guid() ? (
        <Box>
   <Box display={'flex'} justifyContent={'flexStart'}>
          <FormControl component="fieldset" sx={{ mt: 3 }}>
  <FormLabel component="legend">Report detail</FormLabel>

  {/* Vertical by default — no `row` prop */}
  <RadioGroup
    value={reportLevel}
    onChange={e =>
      setReportLevel(e.target.value as 'casual' | 'advanced' | 'expert')
    }
    sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}
  >
    <FormControlLabel value="casual"   control={<Radio />} label="Casual (Free)" />
    <FormControlLabel value="advanced" control={<Radio />} label="Advanced (Free)" />
    <FormControlLabel value="expert"   control={<Radio />} label="Expert (€0.99)" />
  </RadioGroup>
</FormControl>

         </Box>

          {/* Generate button */}
          {bin && bin.userId === guid() && (
            <Button
              variant="contained"
              color="primary"
              fullWidth={!isMobile}
              sx={{ mt: 2 }}
              onClick={handleGenerateClick}
              disabled={loading}
            >
              {reportLevel === 'expert'
                ? 'Generate Expert Profile – €0.99'
                : `Generate ${reportLevel.charAt(0).toUpperCase() + reportLevel.slice(1)} Profile (Free)`}
            </Button>
          )}
        </Box>
      ) : (<></>)}
        </CardContent>
      </Card>

      {/* Carousel */}
      <Carousel slides={slides} settings={{ slidesPerView: 1, loop: true, autoHeight: true }} />

      {/* Stereotype vs Reality */}
      <Box mt={5}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">Stereotype</Typography>
            <Typography variant="body2" color="text.secondary">
              {typeInfo.Stereotype}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">Reality</Typography>
            <Typography variant="body2" color="text.secondary">
              {typeInfo.Reality}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Strengths / Weaknesses */}
      <Box mt={5}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">Strengths</Typography>
            <List>
              {typeInfo.strengths.map((s: string, i: number) => (
                <ListItem key={i}>{s}</ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">Weaknesses</Typography>
            <List>
              {typeInfo.weaknesses.map((w: string, i: number) => (
                <ListItem key={i}>{w}</ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>

      {/* Optional ranking */}
      {Object.keys(list).length > 0 && <Ranking data={list} />}

      {/* Related types */}
      <Box mt={5}>
        <RelatedTypesBox type={type || mbtiType || ''} />
      </Box>

      {/* Payment modal for expert only */}
      <QuestionnaireModal
        open={premiumModalOpen}
        onClose={() => setPremiumModalOpen(false)}
        handlePaymentSuccess={handlePaymentSuccess}
        price={0.99}
      />
    </Box>
  );
};

export default AboutPage;
