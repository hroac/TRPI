import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
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
  Fab,
  Pagination,
  useTheme,
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
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
import JsonBinApi from '../utils/jsonBin';
import MetaBin from '../utils/metabin';
import { typesData } from '../utils/typesData';
import splitDescription from '../utils/splitDescription';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, ChartTooltip, Legend);

interface Bin {
  record: string;
  bigFiveResponses: any;
  profile: { bgColor: string };
  name: string;
  jobTitle: string;
  department: string;
  type: string;
  primary4FType: string;
  description: string;
}

const ITEMS_PER_PAGE = 81;

const SlugResults: React.FC = () => {
  const { company } = useParams<{ company: string }>();
  const theme = useTheme();

  const [loading, setLoading] = useState(true);
  const [collectionId, setCollectionId] = useState<string | null>(null);
  const [meta, setMeta] = useState<any>({});
  const [password, setPassword] = useState('');
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [bins, setBins] = useState<Bin[]>([]);
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
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [generating, setGenerating] = useState(false);
  const [page, setPage] = useState(1);

  const applyFilters = (items: Bin[]) =>
    items.filter(
      (b) =>
        (filters.type === 'All' || b.type === filters.type) &&
        (filters.mode === 'All' || b.primary4FType === filters.mode) &&
        (filters.department === 'All' || (b.department ?? '') === filters.department) &&
        (filters.jobTitle === 'All' || b.jobTitle === filters.jobTitle)
    );

  const handleDownload = async () => {
    if (generating) return;
    setGenerating(true);
    try {
      const payload = applyFilters(bins);
      const response = await fetch('https://reportgenerator-development.up.railway.app/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bins: payload }),
      });
      if (!response.ok) throw new Error('Request failed');
      const resp = await response.json();
      const pdf = await (await fetch(resp.reportUrl)).blob();
      const url = window.URL.createObjectURL(pdf);
      const a = document.createElement('a');
      a.href = url;
      a.download = `TRPI_Report_${new Date().toISOString().replace(/[:T]/g, '-').split('.')[0]}.pdf`;
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

  // Load slug metadata
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

  // Fetch bins
  useEffect(() => {
    if (!collectionId) return;
    if (meta.password && password !== meta.password) return;
    if (meta.password && password === '') return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const binRefs = await JsonBinApi.getBinsInCollectionById(collectionId);
        const fetched: Bin[] = [];
        for (const item of binRefs) {
          const bin = await JsonBinApi.getBinById(item.record);
          fetched.push({ ...bin, record: item.record } as Bin);
        }
        setBins(fetched);

        const types = Array.from(new Set(fetched.map(b => b.type).filter(Boolean))).sort();
        const modes = Array.from(new Set(fetched.map(b => b.primary4FType).filter(Boolean))).sort();
        const departments = Array.from(new Set(fetched.map(b => b.department).filter(Boolean))).sort();
        const jobTitles = Array.from(new Set(fetched.map(b => b.jobTitle).filter(Boolean))).sort();

        setFilterOptions({ types, modes, departments, jobTitles });
      } catch (err) {
        console.error('Error loading slug results:', err);
        setSnackbarMessage('Failed to load results.');
        setOpenSnackbar(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionId, meta.password, password]);

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

  const showPasswordDialog = meta.password && openPasswordModal && password !== meta.password;

  const filteredBins = applyFilters(bins);
  const pageCount = Math.ceil(filteredBins.length / ITEMS_PER_PAGE) || 1;
  const paginated = filteredBins.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const format = (str: string) => {
  return str
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .split(' ')         // Split into words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(' ');         // Rejoin into a single string
}

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Paper
          elevation={4}
          sx={{
            mt: '75px',
            p: { xs: 2, sm: 3 },
            width: '100%',
            maxWidth: 1200,
            borderRadius: 4,
            boxShadow: 8,
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
            {company && format(company)} Results
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2, alignItems: 'center' }}>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Type</InputLabel>
              <Select
                label="Type"
                value={filters.type}
                onChange={(e) => {
                  setFilters({ ...filters, type: e.target.value });
                  setPage(1);
                }}
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
                onChange={(e) => {
                  setFilters({ ...filters, mode: e.target.value });
                  setPage(1);
                }}
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
                onChange={(e) => {
                  setFilters({ ...filters, department: e.target.value });
                  setPage(1);
                }}
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
                onChange={(e) => {
                  setFilters({ ...filters, jobTitle: e.target.value });
                  setPage(1);
                }}
              >
                <MenuItem value="All">All</MenuItem>
                {filterOptions.jobTitles.map((j) => (
                  <MenuItem key={j} value={j}>{j}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {loading ? (
            <Box sx={{ height: 260, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CircularProgress color="primary" size={38} />
            </Box>
          ) : (
            <>
              <Box
                sx={{
                  display: 'grid',
                  gap: 2,
                  gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(5, 1fr)',
                    xl: 'repeat(7, 1fr)',
                  },
                }}
              >
                {paginated.map((bin) => {
                  const profile = typesData.find((t) => t.type === bin.type) || { bgColor: '#aaa' };
                  const radarData = {
                    labels: ['O', 'C', 'E', 'A', 'N'],
                    datasets: [
                      {
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
                        borderWidth: 1,
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
                        ticks: { display: false },
                        pointLabels: { font: { size: 8 } },
                      },
                    },
                    plugins: { legend: { display: false } },
                  } as const;

                  const desc = splitDescription(bin.description || profile.description || '')[0] || '';

                  return (
                    <Tooltip
                      key={bin.record}
                      componentsProps={{
    tooltip: {
      sx: {
        background: "white",
         border: `3px solid ${profile.bgColor}`,
      }
    }}}
                      title={
                        <Box sx={{ p: 1 }}>
                          <Typography fontWeight="bold">{bin.name}</Typography>
                          <Typography variant="body2">{bin.jobTitle}</Typography>
                          <Typography variant="body2">{bin.department}</Typography>
                          <Typography variant="body2">{`${bin.primary4FType} – ${bin.type}`}</Typography>
                          <Typography variant="body2">{desc}...</Typography>
                        </Box>
                      }
                      arrow
                      enterTouchDelay={0}
                    >
                      <Box
                        sx={{
                          width: 140,
                          height: 140,
                          mx: 'auto',
                          p: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#fff',
                          borderRadius: 2,
                          boxShadow: 1,
                          border: `1px solid ${profile.bgColor}`,
                          transition: 'transform 0.2s, box-shadow 0.2s',
                          '&:hover': {
                            boxShadow: 4,
                            transform: 'scale(1.05)',
                          },
                        }}
                      >
                        <Box sx={{ width: '100%', height: 80 }}>
                          <Radar data={radarData} options={radarOptions} />
                        </Box>
                        <Typography variant="caption" fontWeight="bold" sx={{ mt: 0.5, textAlign: 'center' }}>
                          {bin.name}
                        </Typography>
                        <Typography variant="caption" fontWeight="bold" sx={{ mt: 0.5, textAlign: 'center' }}>
                          {bin.type}
                        </Typography>
                      </Box>
                    </Tooltip>
                  );
                })}
              </Box>

              {pageCount > 1 && (
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                  <Pagination count={pageCount} page={page} onChange={(_, v) => setPage(v)} color="primary" />
                </Box>
              )}
            </>
          )}
          <Box
  sx={{
    position: 'absolute',
    bottom: 24,
    right: 24,
    p: 1, // padding
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
  }}
>
                <Tooltip title={generating ? 'Report takes 3-5 mins' : 'Download'}>
        <Fab
          color="primary"
          onClick={handleDownload}
          disabled={generating}
         // sx={{ position: 'fixed', bottom: 24, right: 24 }}
        >
          {generating ? <CircularProgress size={24} color="inherit" /> : <DownloadIcon />}
        </Fab>
      </Tooltip>
      </Box>
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
        <Dialog open onClose={() => setOpenPasswordModal(true)} fullWidth maxWidth="sm">
          <DialogTitle>Enter The Password</DialogTitle>
          <DialogContent dividers>
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
              helperText={passwordError ? 'Incorrect password.' : ''}
              fullWidth
              margin="normal"
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default SlugResults;

