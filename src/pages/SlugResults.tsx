import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  CircularProgress,
  Snackbar,
  Alert,
  IconButton,
} from '@mui/material';
import {
  Radar,
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip as ChartTooltip,
  Legend,
} from 'chart.js';
import Carousel from '../components/Carousel';
import JsonBinApi from '../utils/jsonBin';
import MetaBin from '../utils/metabin';
import { MBTIProfiles } from '../utils/mbtiMapping';
import { typesData } from '../utils/typesData';
import splitDescription from '../utils/splitDescription';
import CloseIcon from '@mui/icons-material/Close';
import ReactMarkdown from 'react-markdown';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, ChartTooltip, Legend);

interface Slide {
  content: React.ReactNode;
}

const SlugResults: React.FC = () => {
  const { company } = useParams<{ company: string }>();
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);
  const [collectionId, setCollectionId] = useState<string | null>(null);
  const [meta, setMeta] = useState<any>({});
  const [password, setPassword] = useState('');
  const [openPasswordModal, setOpenPasswordModal] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // 1. Load meta/mapping on mount
  useEffect(() => {
    if (!company) {
      setLoading(false);
      return;
    }

    (async () => {
      setLoading(true);
      try {
        const mapping = await MetaBin.getAll();
        const metaMap = await MetaBin.getMeta();
        if (mapping[company]) {
          setCollectionId(mapping[company]);
          setMeta(metaMap[company] || {});
          // If a password is needed, show modal
          if (metaMap[company] && metaMap[company].password) setOpenPasswordModal(true);
        } else {
          setOpenSnackbar(true);
        }
      } catch (err) {
        console.error('Error loading slug metadata:', err);
        setOpenSnackbar(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [company]);

  // 2. Only load bins if password matches (or none is required)
  useEffect(() => {
    if (!collectionId) return;
    if (meta.password && password !== meta.password) return;
    if (meta.password && password === '') return; // don't load on empty field

    const fetchData = async () => {
      setLoading(true);
      try {
        const bins = await JsonBinApi.getBinsInCollectionById(collectionId);
        if (!bins.length) {
          setOpenSnackbar(true);
        }
        const newSlides: Slide[] = [];
        for (let i = 0; i < bins.length; i += 3) {
          const group = bins.slice(i, i + 3);

          const rows = await Promise.all(
            group.map(async (item) => {
              const bin = await JsonBinApi.getBinById(item.record);
              const typeProfile: any = MBTIProfiles.find(p => p.name === bin.type) || {};
              const profile = typesData.find(t => t.type === bin.type) || { bgColor: '#aaa' };
              const radarData = {
                labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
                datasets: [
                  {
                    label: 'Scores',
                    data: [
                      bin.bigFiveResponses.openness * 100,
                      bin.bigFiveResponses.conscientiousness * 100,
                      bin.bigFiveResponses.extraversion * 100,
                      bin.bigFiveResponses.agreeableness * 100,
                      bin.bigFiveResponses.neuroticism * 100,
                    ],
                    backgroundColor: profile.bgColor + '55',
                    borderColor: profile.bgColor,
                    pointBackgroundColor: profile.bgColor,
                    borderWidth: 2,
                    fill: true,
                  },
                ],
              };

              const radarOptions = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  r: {
                    min: 0,
                    max: 100,
                    ticks: { stepSize: 20, backdropColor: 'transparent' },
                    pointLabels: { font: { size: isMobile ? 10 : 13 } },
                  },
                },
                plugins: { legend: { display: false } },
              };

              const desc = splitDescription(bin.description || profile.description || '');

              return (
                <Box
                  key={item.record}
                  component={Link}
                  to={`/result/${item.record}`}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    borderRadius: 2,
                    px: 1,
                    py: 1.5,
                    mb: 1,
                    background: theme.palette.background.paper,
                    boxShadow: 1,
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'box-shadow 0.2s',
                    '&:hover': { boxShadow: 4, background: theme.palette.action.hover },
                  }}
                >
                  <Box sx={{ minWidth: isMobile ? 90 : 120, maxWidth: isMobile ? 410 : 540, aspectRatio: '1/1.1' }}>
                    <Radar data={radarData} options={radarOptions} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h4" sx={{ opacity: 0.7, mb: 0.3 }}>
                      {bin.primary4FType} &ndash; {bin.type}
                    </Typography>
                    {desc.map((d, idx) => (
                      <Typography key={idx} variant="body2" paragraph sx={{ mb: 0, maxHeight: isMobile ? 52 : 70, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        <ReactMarkdown>
                        {d}
                        </ReactMarkdown>
                      </Typography>
                    ))}
                   {/*  <Typography key={0} variant="body2" paragraph>
                        <ReactMarkdown>
                          {desc[0]}

                        </ReactMarkdown>
                      </Typography> */}
                  </Box>
                </Box>
              );
            })
          );

          newSlides.push({
            content: <Box display="flex" flexDirection="column" gap={2}>{rows}</Box>,
          });
        }

        setSlides(newSlides);
      } catch (err) {
        console.error('Error loading slug results:', err);
        setOpenSnackbar(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [collectionId, meta.password, password, isMobile]);

  // Handle password check on enter
  const handlePasswordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (password === meta.password) {
        setOpenPasswordModal(false);
        setPasswordError(false);
      } else {
        setPasswordError(true);
      }
    }
  };

  // Show dialog if password is needed and not yet unlocked
  const showPasswordDialog = meta.password && openPasswordModal && password !== meta.password;

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Paper
          elevation={3}
          sx={{
            mt: '75px',
            p: { xs: 1, sm: 2 },
            width: '100%',
            maxWidth: 770,
            minHeight: 340,
            borderRadius: 3,
            boxShadow: 6,
            position: 'relative',
            overflow: 'visible',
          }}
        >
          {loading ? (
            <Box sx={{ height: 260, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CircularProgress color="primary" size={38} />
            </Box>
          ) : slides.length ? (
            <Carousel slides={slides} settings={{ slidesPerView: 1, loop: false, autoHeight: true }} />
          ) : null}
        </Paper>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpenSnackbar(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Alert severity="warning" variant="filled" sx={{ width: '100%' }}>
          No results found for this company.
        </Alert>
      </Snackbar>
      {showPasswordDialog && (
        <Dialog
          open
          onClose={() => setOpenPasswordModal(true)}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Enter The Password</DialogTitle>
          <DialogContent dividers>
            <Box>
              <TextField
                label="Password"
                value={password}
                type="password"
                autoFocus
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
                onKeyDown={handlePasswordKeyDown}
                required
                error={passwordError}
                helperText={passwordError ? "Incorrect password." : ""}
                fullWidth
                margin="normal"
              />
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default SlugResults;
