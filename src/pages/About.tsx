import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { typesData } from '../utils/typesData';
import RelatedTypesBox from '../components/RelatedTypesBox';
import { allStatements, checkHonesty, findClosestComplement, functionPairings, MBTIProfiles } from '../utils/mbtiMapping';
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
  Tooltip,
  Dialog,
  DialogTitle,
} from '@mui/material';
import { Bar, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip as ChartTooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
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
import { a } from 'framer-motion/dist/types.d-DDSxwf0n';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  Title,
  ChartTooltip,
  Legend,
  PointElement,
  LineElement,
  Filler
);

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
/*  Constants for report level logic                            */
/* ------------------------------------------------------------ */
const REPORT_LEVELS = ['casual', 'advanced', 'expert'] as const;
type ReportLevel = typeof REPORT_LEVELS[number];
const getReportLevelIndex = (level: ReportLevel) => REPORT_LEVELS.indexOf(level);

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

  /* ------------------ assessment narrative ------------------- */
  const stmnts = stages.flat();
  const assessmentNarrative = buildAssessmentNarrative(statements, stmnts, allResponses);

  /* ------------------ chart data ----------------------------- */
  const chartLabels = ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'];
  const chartDataArray = profile?.traits
    ? [
        profile.traits.openness * 100,
        profile.traits.conscientiousness * 100,
        profile.traits.extraversion * 100,
        profile.traits.agreeableness * 100,
        profile.traits.neuroticism * 100,
      ]
    : [0, 0, 0, 0, 0];

  const barData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Big Five Scores',
        data: chartDataArray,
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: { legend: { display: false }, title: { display: true, text: 'Big Five Personality Scores' } },
    scales: { y: { beginAtZero: true, max: 100 } },
    maintainAspectRatio: true,
  };

  const radarData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Big Five Scores',
        data: chartDataArray,
        backgroundColor: 'rgba(75,192,192,0.35)',
        borderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: '#fff',
        pointRadius: 3,
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const radarOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const, labels: { font: { size: 15 } } },
      title: { display: true, text: 'Big Five Personality Scores' },
    },
    scales: {
      r: {
        angleLines: { display: true },
        min: 0,
        max: 100,
        pointLabels: { font: { size: isMobile ? 14 : 18 } },
        ticks: { stepSize: 20, font: { size: isMobile ? 12 : 15 }, backdropColor: 'transparent' },
      },
    },
  };

  const chartSlides = [
    {
      content: (
        <Box display="flex" justifyContent="center" height={isMobile ? '600px' : '500px'}>
          <Radar data={radarData} options={radarOptions} />
        </Box>
      ),
    },
    {
      content: (
        <Box display="flex" justifyContent="center" height={isMobile ? '300px' : '500px'}>
          <Bar data={barData} options={barOptions} />
        </Box>
      ),
    },
  ];

  /* ------------------ report-level state --------------------- */
  const hasGenerated = Boolean(bin?.description || description);
  const currentLevel: ReportLevel = (bin?.detailLevel as ReportLevel) || 'casual';

  // Determine which radio options should be visible
  const availableOptions: ReportLevel[] = useMemo(() => {
    if (!hasGenerated) return [...REPORT_LEVELS]; // first visit
    const higher = REPORT_LEVELS.filter(
      lvl => getReportLevelIndex(lvl) > getReportLevelIndex(currentLevel)
    );
    return higher.length ? higher : ['expert'];   // keep expert for regeneration
  }, [hasGenerated, currentLevel]);

  /* ------------------ local state ---------------------------- */
  const [reportLevel, setReportLevel] = useState<ReportLevel>(availableOptions[0]);
  const [premiumModalOpen, setPremiumModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profileText, setProfileText] = useState<string>(description);
  const flat = stages.flat();
  // Compute all dishonest indices ONCE, not per slide!
const dishonest: number[] = useMemo(() => {
  // For each page (stage), run checkHonesty for that stage
  if (!Array.isArray(stages) || stages.length === 0) return [];
  const out: number[] = [];
  stages.forEach((page, pageIdx) => {
    // Make sure you pass the correct selection (stmnts or statements, etc)
    out.push(
      ...checkHonesty(allStatements, allResponses, stages.flat(), pageIdx)
    );
  });
  // Remove duplicates
  return Array.from(new Set(out));
}, [allStatements, allResponses, stages]);

  const [openLie, setOpenLie] = useState<number>(-1)
  const lieOpen = (lie: number) => setOpenLie(lie);
  const lieClose = () => setOpenLie(-1);

  const navigate = useNavigate();

  /* ------------------ generator map -------------------------- */
  const levelToGenerator = {
    casual: generateLaymanReport,
    advanced: generateEnthusiastReport,
    expert: generateExpertReport,
  } as const;

function getAnswerForStatement(
  items: any,           // allStatements
  responses: any,       // allResponses
  selection: any,       // stmnts or stages.flat()
  stmtIndex: any        // the .index of the statement you want the answer for
) {
  // Build the trait-cursor and answer map as in checkHonesty
  const pageMap: any = {};
  const traitCursor : any= {};
  for (const sel of selection) {
    const trait = items[sel.index].trait;
    const pos = traitCursor[trait] ?? 0;
    pageMap[sel.index] = (responses[trait] ?? [])[pos];
    traitCursor[trait] = pos + 1;
  }
  return pageMap[stmtIndex];
}



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
        name: bin.name,
        company: bin.company,
        job: bin.job,
        jobTitle: bin.jobTitle,
      });
      const state = {
        detailLevel: reportLevel,
        ...bin,
      };
      state['description'] = descriptionText;
      await JsonBinApi.updateResultsInJsonBin(state);
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
    let prfl = functionPairings.find(pairing => pairing.type === bin.type) || functionPairings[0];
    let suffixType = findClosestComplement(bin.type, bin.bigFiveResponses)?.type || '';
    let suffixMode = functionPairings.find(pairing => pairing.type === suffixType) || functionPairings[0];

    (prfl as any).suffix = suffixType.slice(1, 3);
    (prfl as any).suffixType = suffixType;
    (prfl as any).suffixMode = suffixMode;

    try {
      const descriptionText = await generateExpertReport({
        cognitiveProfile: prfl,
        scores: bin.bigFiveResponses,
        assessment: assessmentNarrative,
      });

      const state = {
        ...data.demographics,
        detailLevel: 'expert',
        ...bin,
      };

      state['description'] = descriptionText;
      await JsonBinApi.updateResultsInJsonBin(state);
      setProfileText(descriptionText);
      handleReloadBin && handleReloadBin();
    } finally {
      setLoading(false);
    }
  };

  /* ------------------ carousel slides ------------------------ */
 const slides =
  Object.values(allResponses).length && stages.length
    ? stages.map((stage, pageIdx) => ({
        content: (
          <Paper>
            <Stack spacing={2}>
              {stage.map((stmt: any, idx: number) => {
                // Use dishonest to check highlight/click
                const raw = allResponses?.[stmt.trait]?.[idx];
                const num: number = parseFloat(raw);
                const value = getSubtext(stmt, num);

                return (
                  <Paper
                    component="div"
                    onClick={() => {
                      if (dishonest.includes(stmt.index)) lieOpen(stmt.index);
                    }}
                    sx={{
                      p: 3,
                      mb: 5,
                      background: dishonest.includes(stmt.index) ? '#fa695e50' : '',
                      cursor: dishonest.includes(stmt.index) ? 'pointer' : 'default'
                    }}
                    key={stmt.index}
                  >
                    <Typography variant="h6">{stmt.text}</Typography>
                    <Typography color="text.secondary">
                      Trait: {stmt.trait.toUpperCase()}
                    </Typography>
                    <Box mt={1}>
                      <Typography sx={{ whiteSpace: 'pre-wrap' }}>
                        <strong>Your Answer:</strong>
                        {Number.isNaN(num) ? raw : ` ${Math.round(num * 100)}%`} {value || ''}
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
    <Box sx={{ mt: '10px' }} padding={isMobile ? 2 : 4}>
    <Paper elevation={4} sx={{ padding: '30px', marginTop: '50px', borderRadius: '15px' }}>
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
            <Carousel slides={chartSlides} settings={{ slidesPerView: 1, loop: false, autoHeight: true }} />
          </Box>
        </Box>
      )}

      {/* Quote */}
      <Box display="flex" justifyContent="center">
        <Typography
          variant="h4"
          sx={{
            fontStyle: 'italic',
            fontWeight: 'bold',
            mb: 2,
            fontSize: isMobile ? '1.5rem' : '2rem',
          }}
        >
          {`"${typeInfo.quote}"`}
        </Typography>
      </Box>
      </Paper>

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

          {!loading && bin && bin.userId === guid() && (
            <Box>
              <Box display={'flex'} justifyContent={'flexStart'}>
                <FormControl component="fieldset" sx={{ mt: 3 }}>
                  <FormLabel component="legend">
                    {availableOptions.length === 1
                      ? 'Regenerate your report'
                      : 'Upgrade your report'}
                  </FormLabel>
                  <RadioGroup
                    value={reportLevel}
                    onChange={e => setReportLevel(e.target.value as ReportLevel)}
                    sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}
                  >
                    {availableOptions.map(level => (
                      <FormControlLabel
                        key={level}
                        value={level}
                        control={<Radio />}
                        label={
                          level === 'casual'
                            ? 'Casual (Free)'
                            : level === 'advanced'
                            ? 'Advanced (Free)'
                            : 'Expert (€0.99)'
                        }
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Box>
              { <Button
                variant="contained"
                color="primary"
                fullWidth={!isMobile}
                sx={{ mt: 2 }}
                onClick={handleGenerateClick}
                disabled={(description !== '' && availableOptions.length !== 1) && loading}
              >
                {reportLevel === REPORT_LEVELS[2]
                  ? availableOptions.length === 1
                    ? 'Regenerate Expert Profile (€0.99)'
                    : 'Generate Expert Profile – €0.99'
                  : `Generate ${(reportLevel as ReportLevel).charAt(0).toUpperCase() + (reportLevel as ReportLevel).slice(1)} Profile (Free)`}
              </Button>}
            </Box>
          )}

          {/* Optionally, if they've already generated the highest level */}
          {!profileText &&
            !loading &&
            bin &&
            bin.userId === guid() &&
            availableOptions.length === 0 && (
              <Typography sx={{ mt: 3, fontStyle: 'italic', color: 'text.secondary' }}>
                You have already generated the most detailed report available.
              </Typography>
            )}
        </CardContent>
      </Card>

      {/* Carousel */}
      <Carousel slides={slides} settings={{ slidesPerView: 1, loop: true, autoHeight: true }} />
   <Paper elevation={4} sx={{ padding: '30px', borderRadius: '15px' }}>
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
      {bin && bin.prev &&   <Button
                variant="contained"
                color="primary"
                fullWidth={!isMobile}
                sx={{ mt: 2 }}
                onClick={() => navigate(`/result/${bin.prev}`)}
              >Previous results</Button>}
      {
       bin && Object.values(bin.responses)?.length !== 0 && <Box>
          <Tooltip title="Or have a friend do it!">
         <Button
                variant="contained"
                color="primary"
                fullWidth={!isMobile}
                sx={{ mt: 2 }}
                onClick={() => navigate(bin.company ? bin.departement ? `/${bin.company}/${bin.departement}/test/${bin.binId}` : `/${bin.company}/test/${bin.binId}` : `/test/${bin.binId}`)}
              >Retake the test!</Button>
              </Tooltip>
      </Box>
      }

      {/* Payment modal for expert only */}
      <QuestionnaireModal
        open={premiumModalOpen}
        onClose={() => setPremiumModalOpen(false)}
        handlePaymentSuccess={handlePaymentSuccess}
        price={0.99}
      />
<Dialog open={openLie !== -1} onClose={lieClose} fullWidth maxWidth="md">
  <DialogTitle sx={{ m: 0, p: 2 }}>Conflicting Items Detected</DialogTitle>
  {(() => {
    if (openLie === -1) return null; // or some placeholder

    // The statement that was flagged and opened this dialog
    const sourceStatement = stmnts.find(s => s.index === openLie);

    // This is the key change:
    // We derive the items to show directly from the results of the honesty check.
    // 1. Create a unique set of all indices involved in the conflict.
    // 2. Filter out the index of the statement the user is currently viewing (`openLie`).
    // 3. The result is the exact list of other statements that it conflicted with.
    const conflictingItemIndices = [...new Set(dishonest)].filter(
      index => index !== openLie
    );

    if (!sourceStatement || conflictingItemIndices.length === 0) {
      return <Typography sx={{p: 3}}>No specific conflicting statement was found.</Typography>;
    }

    const opposedItems: any = [];
    const overlappingItems: any = [];

    conflictingItemIndices.forEach(index => {
      // Check the relationship against the source statement
      if (sourceStatement.opposing?.includes(index) || allStatements[index]?.opposing.includes(sourceStatement.index)) {
        opposedItems.push(index);
      } else if (sourceStatement.overlapping?.includes(index) || allStatements[index]?.overlapping.includes(sourceStatement.index)) {
        overlappingItems.push(index);
      }
    });

    console.log(sourceStatement, opposedItems, overlappingItems, conflictingItemIndices, dishonest)
    return (
      <Box>
        {overlappingItems.length && opposedItems.length ? (<Typography variant='h4'>Overlapping</Typography>): <></>}
        {
overlappingItems.map((index: any) => {
      const stmt = stmnts.find(item => item.index === index);
      if (!stmt) return null;

      // Your existing rendering logic for each item
      const traitStmts = stmnts.filter(s => s.trait === stmt.trait);
      const traitIdx = traitStmts.findIndex(s => s.index === stmt.index);
      const raw = allResponses?.[stmt.trait]?.[traitIdx];
      const num: number = parseFloat(raw);
      const value = getSubtext(stmt, num);

      return (
        <Paper sx={{ p: 3, mb: 3, ml: 3, mr: 3 }} key={index}>
          <Typography variant="h6">{stmt.text}</Typography>
          <Typography color="text.secondary">Trait: {stmt.trait.toUpperCase()}</Typography>
          <Box mt={1}>
            <Typography sx={{ whiteSpace: 'pre-wrap' }}>
              <strong>Your Answer:</strong>
              {raw === undefined
                ? <i>No answer found.</i>
                : Number.isNaN(num) ? raw
                : ` ${Math.round(num * 100)}%`} {value || ''}
            </Typography>
            {!Number.isNaN(num) && (
              <LinearProgress variant="determinate" value={num * 100} />
            )}
          </Box>
        </Paper>
      );
    })
        }
        {overlappingItems.length && opposedItems.length ? (<Typography variant='h4'>Opposing</Typography>): <></>}
        {
          opposedItems.map((index: any) => {
      const stmt = stmnts.find(item => item.index === index);
      if (!stmt) return null;

      // Your existing rendering logic for each item
      const traitStmts = stmnts.filter(s => s.trait === stmt.trait);
      const traitIdx = traitStmts.findIndex(s => s.index === stmt.index);
      const raw = allResponses?.[stmt.trait]?.[traitIdx];
      const num: number = parseFloat(raw);
      const value = getSubtext(stmt, num);

      return (
        <Paper sx={{ p: 3, mb: 3, ml: 3, mr: 3 }} key={index}>
          <Typography variant="h6">{stmt.text}</Typography>
          <Typography color="text.secondary">Trait: {stmt.trait.toUpperCase()}</Typography>
          <Box mt={1}>
            <Typography sx={{ whiteSpace: 'pre-wrap' }}>
              <strong>Your Answer:</strong>
              {raw === undefined
                ? <i>No answer found.</i>
                : Number.isNaN(num) ? raw
                : ` ${Math.round(num * 100)}%`} {value || ''}
            </Typography>
            {!Number.isNaN(num) && (
              <LinearProgress variant="determinate" value={num * 100} />
            )}
          </Box>
        </Paper>
      );
    })
        }
      </Box>
    )
    // Now, map over the CORRECTLY identified indices to display them.
  })()}
</Dialog>



    </Paper>
    </Box>
  );
};

export default AboutPage;
