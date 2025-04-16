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
} from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ChartTooltip, Legend);

interface ResultsProps {
  binId: string;
}

const ResultsPage: React.FC<ResultsProps> = ({ binId }) => {
  const [bin, setBin] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [reviewIndex] = useState<number>(0);
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

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Big Five Personality Scores' },
    },
    scales: { y: { beginAtZero: true, max: 100 } },
    maintainAspectRatio: true,
  };

  const shareDescription = bin?.description ? bin.description : "Check out my TRPI test results!";
  const shareUrl = window.location.href;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedDesc = encodeURIComponent(shareDescription);

  // When the share icon is clicked, open the modal, copy the link, and show the snackbar.
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
          <Bar
            data={{ labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'], datasets: [] }}
            options={options}
          />
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
          <Bar
            data={{ labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'], datasets: [] }}
            options={options}
          />
        </Box>
      </Paper>
    );
  }

  const { type, bigFiveResponses, primary4FType, description, responses, statements, accuracy, list } = bin;
  const data = {
    labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
    datasets: [
      {
        label: 'Big Five Scores',
        data: [
          bigFiveResponses.openness * 100,
          bigFiveResponses.conscientiousness * 100,
          bigFiveResponses.extraversion * 100,
          bigFiveResponses.agreeableness * 100,
          bigFiveResponses.neuroticism * 100,
        ],
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

  const isBinOwner = guid() === bin?.userId;
  const stages = [
    statements.slice(0, 3), // Stage 0
    statements.slice(3, 7), // Stage 1
    statements.slice(7, 11), // Stage 2
    statements.slice(11, 15), // Stage 3
    statements.slice(15, 19), // Stage 4
    statements.slice(19, 23), // Stage 5
    statements.slice(23, 26), // Stage 6
  ];
  
 const longStages = [
    statements.slice(0,3), // Stage 0
    statements.slice(3, 7),  // stage 1
    statements.slice(7, 11), // Stage 2
    statements.slice(11, 15), // Stage 3
    statements.slice(15, 19), // Stage 4
    statements.slice(19, 23), // Stage 5
    statements.slice(23, 27), // stage 6 
    statements.slice(27, 31), // stage 7
    statements.slice(31, 35), // stage 8
    statements.slice(35, 39),  // stage 9
    statements.slice(39, 42), // stage 10
  ]

  return (
    <Paper elevation={3} sx={{p: 2, m: '20px auto', mt: '75px', width: isMobile ? '95%' : 600, maxWidth: isMobile ? '95%' : 600 }}>
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
            TRPI - {primary4FType} - {type} {accuracy ? `- ${accuracy.toFixed(1)}%` : ''}
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

      <Box my={3}>
        <Bar data={data} options={options} />
      </Box>

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
