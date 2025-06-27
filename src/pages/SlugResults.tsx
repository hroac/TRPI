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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
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
import DownloadIcon from '@mui/icons-material/Download';
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
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [bins, setBins] = useState<any[]>([]);
  const [filterOptions, setFilterOptions] = useState({
    types: [] as string[],
    modes: [] as string[],
    departments: [] as string[],
    jobTitles: [] as string[],
  });
  const [filters, setFilters] = useState({
    type: 'All',
    mode: 'All',
    department: 'All',
    jobTitle: 'All',
  });
  const [generating, setGenerating] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const applyFilters = (items: any[]) =>
    items.filter(
      (b) =>
        (filters.type === 'All' || b.type === filters.type) &&
        (filters.mode === 'All' || b.primary4FType === filters.mode) &&
        (filters.department === 'All' || (b.departement || b.department) === filters.department) &&
        (filters.jobTitle === 'All' || b.jobTitle === filters.jobTitle)
    );

  const handleDownload = async () => {
    if (generating) return;
    setGenerating(true);
    try {
      const payload = applyFilters(bins);
      const response = await fetch(
        'https://reportgenerator-development.up.railway.app/generate',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ bins: payload }),
        }
      );
      if (!response.ok) throw new Error('Request failed');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'TRPI_Report.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed', err);
      setSnackbarMessage('Failed to generate report.');
      setOpenSnackbar(true);
    } finally {
      setGenerating(false);
    }
  };

  const buildSlides = async (items: any[]) => {
    const newSlides: Slide[] = [];
    for (let i = 0; i < items.length; i += 3) {
      const group = items.slice(i, i + 3);

      const rows = group.map((bin: any) => {
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
            key={bin.record}
            component={Link}
            to={`/result/${bin.record}`}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'stretch', md: 'flex-start' },
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
              minHeight: 320,
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', md: 220 },
                minWidth: { xs: '100%', md: 180 },
                maxWidth: { xs: '100%', md: 260 },
                height: { xs: 180, md: 220 },
                flexShrink: 0,
                mb: { xs: 2, md: 0 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Radar data={radarData} options={radarOptions} />
            </Box>
            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h4" sx={{ opacity: 0.7, mb: 1 }}>
                {bin.primary4FType} – {bin.type}
              </Typography>
              <Typography variant="subtitle2" sx={{ mb: 0.5, color: 'text.secondary' }}>
                {bin.jobTitle} {(bin.departement || bin.department) ? `| ${bin.departement || bin.department}` : ''}
              </Typography>
              {desc.map((d, idx) => (
                <Typography key={idx} variant="body2" paragraph sx={{ mb: 0 }}>
                  <ReactMarkdown>{d}</ReactMarkdown>
                </Typography>
              ))}
            </Box>
          </Box>
        );
      });

      newSlides.push({ content: <Box display="flex" flexDirection="column" gap={2}>{rows}</Box> });
    }

    setSlides(newSlides);
  };

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
          setSnackbarMessage('No results found for this company.');
          setOpenSnackbar(true);
        }
      } catch (err) {
        console.error('Error loading slug metadata:', err);
        setSnackbarMessage('Error loading company results.');
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
        const binRefs = await JsonBinApi.getBinsInCollectionById(collectionId);
        if (!binRefs.length) {
          setSnackbarMessage('No results found for this company.');
          setOpenSnackbar(true);
        }
        const fetched: any[] = [];
        for (const item of binRefs) {
          const bin = await JsonBinApi.getBinById(item.record);
          fetched.push({ ...bin, record: item.record });
        }
        setBins(fetched);

        const types = Array.from(new Set(fetched.map(b => b.type).filter(Boolean)));
        const modes = Array.from(new Set(fetched.map(b => b.primary4FType).filter(Boolean)));
        const departments = Array.from(new Set(
          fetched.map(b => (b.departement || b.department)).filter(Boolean)
        )).sort();
        const jobTitles = Array.from(new Set(fetched.map(b => b.jobTitle).filter(Boolean))).sort();
        setFilterOptions({ types: types.sort(), modes: modes.sort(), departments, jobTitles });

        await buildSlides(fetched);
      } catch (err) {
        console.error('Error loading slug results:', err);
        setSnackbarMessage('Failed to load results.');
        setOpenSnackbar(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [collectionId, meta.password, password, isMobile]);

  // 3. Rebuild slides when filters or bins change
  useEffect(() => {
    if (!bins.length) return;
    const filtered = applyFilters(bins);
    buildSlides(filtered);
  }, [bins, filters, isMobile]);

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
          elevation={4}
          sx={{
            mt: '75px',
            p: { xs: 2, sm: 3 },
            width: '100%',
            maxWidth: 900,
            minHeight: 360,
            borderRadius: 4,
            boxShadow: 8,
            position: 'relative',
            overflow: 'visible',
            background: 'linear-gradient(135deg,#ffffff 0%,#f5f7fb 100%)',
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
            {company} Results
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2, alignItems: 'center' }}>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Type</InputLabel>
              <Select
                label="Type"
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              >
                <MenuItem value="All">All</MenuItem>
                {filterOptions.types.map((t) => (
                  <MenuItem key={t} value={t}>{t}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 130 }}>
              <InputLabel>4F Mode</InputLabel>
              <Select
                label="4F Mode"
                value={filters.mode}
                onChange={(e) => setFilters({ ...filters, mode: e.target.value })}
              >
                <MenuItem value="All">All</MenuItem>
                {filterOptions.modes.map((m) => (
                  <MenuItem key={m} value={m}>{m}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel>Department</InputLabel>
              <Select
                label="Department"
                value={filters.department}
                onChange={(e) => setFilters({ ...filters, department: e.target.value })}
              >
                <MenuItem value="All">All</MenuItem>
                {filterOptions.departments.map((d) => (
                  <MenuItem key={d} value={d}>{d}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 140 }}>
              <InputLabel>Job Title</InputLabel>
              <Select
                label="Job Title"
                value={filters.jobTitle}
                onChange={(e) => setFilters({ ...filters, jobTitle: e.target.value })}
              >
                <MenuItem value="All">All</MenuItem>
                {filterOptions.jobTitles.map((j) => (
                  <MenuItem key={j} value={j}>{j}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box sx={{ flexGrow: 1 }} />
            <Tooltip title="Download Analysis">
              <span>
                <IconButton color="primary" onClick={handleDownload} disabled={generating}>
                  {generating ? <CircularProgress size={24} /> : <DownloadIcon />}
                </IconButton>
              </span>
            </Tooltip>
          </Box>
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
          {snackbarMessage}
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
