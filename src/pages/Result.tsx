import React, { useEffect, useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Modal,
  Tooltip,
  Grid,
  Snackbar,
  ButtonGroup,
  Button,
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
  Filler
} from 'chart.js';
import JsonBinApi from '../utils/jsonBin';
import AboutPage from './About';
import { useParams } from 'react-router-dom';
import { guid } from '../utils/guid';
import RatingComponent from '../components/RatingComponent';
import { Helmet } from 'react-helmet';
import { Share as ShareIcon, Close as CloseIcon } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';
import { determineTRPISuffix, findClosestComplement, MBTIProfiles } from '../utils/mbtiMapping';
import BarChartIcon from '@mui/icons-material/BarChart';
import RadarIcon from '@mui/icons-material/DonutLarge'; // Substitute for radar, or your preferred icon
import { typesData } from '../utils/typesData';
import Carousel from '../components/Carousel';
import { Autoplay } from 'swiper/modules';
import { trackEvent, AnalyticsEvents } from '../utils/analytics';


ChartJS.register(CategoryScale, LinearScale, BarElement, RadialLinearScale, Title, ChartTooltip, Legend, PointElement, LineElement, Filler);

const ResultHelmet: React.FC<{ type: string; primary4FType: string; bigFiveResponses: { [trait: string]: number }, binId: string }> = ({
  type,
  primary4FType,
  bigFiveResponses,
  binId,
}) => {
  const generateAsciiBarChart = (scores: { [trait: string]: number }): string => {
    const traits = ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'];
    return traits
      .map((trait) => {
        const score = Math.round(scores[trait.toLowerCase()] * 100);
        const bar = '█'.repeat(Math.round(score / 10));
        return `${trait.padEnd(20)} ${bar.padEnd(10)} ${score}%`;
      })
      .join('\n');
  };

  const asciiChart = generateAsciiBarChart(bigFiveResponses);
  return (
    <Helmet>
      <title>{`TRPI - ${type} - ${primary4FType}`}</title>
      <meta name="description" content={`\n${asciiChart}`} />
    </Helmet>
  );
};

interface ResultsProps {
  binId: string;
}

const ResultsPage: React.FC<ResultsProps> = ({ binId }) => {
  const [bin, setBin] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [date, setDate] = useState<Date>(new Date());
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchBinData = async () => {
      try {
        const userId = guid();
        const local = localStorage.getItem(userId) || '';
        if (!local || params?.binId) {
          const binParam = params?.binId || binId || '';
          if (binParam) {
            const binData = await JsonBinApi.getBinById(binParam);
            binData.binId = binParam;
            setBin(binData);
            trackEvent(AnalyticsEvents.ResultsViewed, {
              event_category: 'Results',
              binId: binParam,
            });
          }
        } else {
          const parsed = JSON.parse(local);
          setBin(parsed);
        }
      } catch (error) {
        console.error("Error fetching bin data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBinData();
  }, [date, params, binId]);

  // Chart Data
  const chartLabels = ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'];
  const chartDataArray = bin ? [
    bin.bigFiveResponses.openness * 100,
    bin.bigFiveResponses.conscientiousness * 100,
    bin.bigFiveResponses.extraversion * 100,
    bin.bigFiveResponses.agreeableness * 100,
    bin.bigFiveResponses.neuroticism * 100,
  ] : [0, 0, 0, 0, 0];

  // --- TYPE AVERAGE DATASET for RADAR CHART
  let mbtiType = bin?.type;
  // fallback if mbtiType is undefined/null
  mbtiType = mbtiType || "";
  const typeProfile: any = MBTIProfiles?.find(t => t.name === mbtiType) || {};
  const userTypeData = typesData.find(t => t.type === mbtiType) || {};
const baseColor = userTypeData.bgColor || '#aaa'; // fallback

// 2. Get user accuracy (as 0–1 scale for calculations, if needed)
const confidence = bin?.accuracy ?? 0; // e.g. 79.5

// 3. Set color opacity and highlight offset based on accuracy (example: up to +0.2 more opacity for high accuracy)
const userAlpha = 0.35 + Math.min(0.2, (confidence - 60) / 200); // e.g. 60% = 0.35, 80% = 0.45, max 0.55
const averageAlpha = 0.12;

// 4. Function to convert #rrggbb hex to rgba
function hexToRgba(hex: string, alpha: number) {
  const [, r, g, b] = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) || [];
  return r
    ? `rgba(${parseInt(r,16)},${parseInt(g,16)},${parseInt(b,16)},${alpha})`
    : `rgba(160,160,160,${alpha})`; // fallback gray
}
  const typeAverageBigFive = typeProfile.traits || {
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0,
  };
  const typeAverageArray = [
    typeAverageBigFive.openness * 100,
    typeAverageBigFive.conscientiousness * 100,
    typeAverageBigFive.extraversion * 100,
    typeAverageBigFive.agreeableness * 100,
    typeAverageBigFive.neuroticism * 100,
  ];

  // --- Bar and Radar Chart Data/Options
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
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Big Five Personality Scores' },
    },
    scales: { y: { beginAtZero: true, max: 100 } },
    maintainAspectRatio: true,
  };

const radarData = {
  labels: chartLabels,
  datasets: [
    // DRAWN FIRST: Type Average (bottom, most transparent)
    {
      label: `${mbtiType} Average`,
      data: typeAverageArray,
      backgroundColor: 'rgba(75,192,192,0.35)',      // Less transparent
      borderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: 'rgba(75,192,192,1)',
      pointBorderColor: '#fff',
      pointRadius: 3,
      borderWidth: 2,
      order: 1, // explicit, but not required
      clip: 0,
    },
    // DRAWN SECOND: User (top, more solid)
    {
      label: 'Your Scores',
      data: chartDataArray,
        backgroundColor: hexToRgba(`${baseColor}`, 0.7),      // More transparent
      borderColor: hexToRgba(baseColor, 1),           // Subtle border
      pointBackgroundColor: hexToRgba(baseColor, 1),
      pointBorderColor: '#fff',
      pointRadius: 4,
      borderWidth: 3,
      order: 2, // explicit, but not required
      clip: 0,
    }
  ]
};


  const radarOptions = {
    devicePixelRatio: 3,
    responsive: true,
    plugins: {
      legend: { position: 'top' as "top", labels: { font: { size: 15 } } },
      title: { display: true, text: 'Big Five Personality Scores' },
    },
    scales: {
      r: {
        angleLines: { display: true },
        min: 0, max: 100,
        pointLabels: { font: { size: isMobile ? 14 : 18 } },
        ticks: { stepSize: 20, font: { size: isMobile ? 12 : 15 }, backdropColor: 'transparent' }
      }
    }
  };

  const chartSlides = [
  {
    content: (
      <Box display="flex" justifyContent="center" height={isMobile ? '600px' : '500px'}>
        <Radar data={radarData} options={radarOptions} />
      </Box>
    )
  },
  {
    content: (
      <Box display="flex" justifyContent="center" height={isMobile ? '300px' : '500px'}>
        <Bar data={barData} options={barOptions} />
      </Box>
    )
  }
];

  const shareDescription = bin?.description ? bin.description : "Check out my TRPI test results!";
  const shareUrl = window.location.href;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedDesc = encodeURIComponent(shareDescription);

  const handleOpenShareModal = () => {
    navigator.clipboard.writeText(shareUrl).catch((err) =>
      console.error("Failed to copy: ", err)
    );
    setShareModalOpen(true);
    setSnackbarOpen(true);
  };

  const handleCloseShareModal = () => setShareModalOpen(false);
  const handleSnackbarClose = () => setSnackbarOpen(false);

  if (loading) {
    return (
      <Paper elevation={3} sx={{ mt: '75px !important', p: 2, m: '20px auto', maxWidth: isMobile ? 320 : 600 }}>
        <Typography variant="h5" gutterBottom>
          Loading Test Results...
        </Typography>
        <Box my={3}>
          <Radar data={radarData} options={radarOptions} />
        </Box>
      </Paper>
    );
  }

  if (!bin) {
    return (
      <Paper elevation={3} sx={{ mt: '75px !important', p: 2, m: '20px auto', maxWidth: isMobile ? 320 : 600 }}>
        <Typography variant="h5" gutterBottom>
          No Results Found...
        </Typography>
        <Box my={3}>
          <Bar data={barData} options={barOptions} />
        </Box>
      </Paper>
    );
  }

  const { type, bigFiveResponses, primary4FType, description, responses, statements, accuracy, list, suffix } = bin;
  const typeSuffix = suffix ?? findClosestComplement(type, bigFiveResponses)?.type.slice(1,3);

  const isBinOwner = guid() === bin?.userId;
  const stages = [
    statements.slice(0, 3),
    statements.slice(3, 7),
    statements.slice(7, 11),
    statements.slice(11, 15),
    statements.slice(15, 19),
    statements.slice(19, 23),
    statements.slice(23, 26),
  ];

  const longStages = [
    statements.slice(0, 3),
    statements.slice(3, 7),
    statements.slice(7, 11),
    statements.slice(11, 15),
    statements.slice(15, 19),
    statements.slice(19, 23),
    statements.slice(23, 27),
    statements.slice(27, 31),
    statements.slice(31, 35),
    statements.slice(35, 39),
    statements.slice(39, 42),
  ];

  return (
    <Paper elevation={3} sx={{ p: 2, m: '20px auto', mt: '75px', width: isMobile ? '95%' : 600, maxWidth: isMobile ? '95%' : 600, border: `${bin.honesty ? '' : '6px solid #fa695e90'}` }}>
      <ResultHelmet
        type={type}
        primary4FType={primary4FType}
        bigFiveResponses={bigFiveResponses}
        binId={binId}
      />
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          {isBinOwner ? (
            <Tooltip title="Share Your Results (Link Copied)">
              <IconButton onClick={handleOpenShareModal} color="primary">
                <ShareIcon fontSize="medium" />
              </IconButton>
            </Tooltip>
          ) : null}
        </Grid>
        <Grid item xs>
          <Typography variant={isMobile ? "h6" : "h5"} gutterBottom sx={{ wordBreak: 'break-word' }}>
            TRPI - {primary4FType} - {type}-{typeSuffix} {accuracy ? `${accuracy.toFixed(1)}%` : ''}
          </Typography>
        </Grid>
        <Grid item>
          <RatingComponent
            bin={bin}
            userId={guid()}
            onRatingSaved={(updatedBin: any) => JsonBinApi.updateResultsInJsonBin(updatedBin)}
          />
        </Grid>
      </Grid>




      {/* Chart */}
      <Box my={3}>
        <Carousel slides={chartSlides} settings={{ slidesPerView: 1, loop: false, autoHeight: true, autoplay: false }}/>
      </Box>

  
      {/* Share Modal */}
      <Modal open={shareModalOpen} onClose={handleCloseShareModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: isMobile ? 280 : 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">Share Your TRPI Results</Typography>
            <IconButton onClick={handleCloseShareModal}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="body1" mb={2}>
            {shareDescription}
          </Typography>
          <Box display="flex" justifyContent="space-around">
            <Tooltip title="Share on Facebook">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedDesc}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon fontSize="large" color="primary" />
              </a>
            </Tooltip>
            <Tooltip title="Share on Reddit">
              <a
                href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedDesc}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RedditIcon fontSize="large" color="primary" />
              </a>
            </Tooltip>
            <Tooltip title="Share on Instagram">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon fontSize="large" color="primary" />
              </a>
            </Tooltip>
          </Box>
        </Box>
      </Modal>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Link Copied to Clipboard!"
      />

      {type && (
        <AboutPage
          bin={bin}
          mbtiType={type}
          showBigFive={false}
          description={description}
          allResponses={responses}
          statements={statements}
          stages={statements.length > 26 ? longStages : stages}
          list={list}
          handleReloadBin={() => setDate(new Date())}
        />
      )}
    </Paper>
  );
};

export default ResultsPage;
