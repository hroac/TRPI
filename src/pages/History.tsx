import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography, CircularProgress, IconButton, Tooltip } from '@mui/material';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip as ChartTooltip,
  Legend,
} from 'chart.js';
import JsonBinApi from '../utils/jsonBin';
import HistoryMeta from '../utils/historyMeta';
import { typesData } from '../utils/typesData';
import splitDescription from '../utils/splitDescription';
import { guid } from '../utils/guid';
import { useNavigate } from 'react-router-dom';

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

const ITEMS_PER_PAGE = 15;

const History: React.FC = () => {
  const userId = guid();
  const navigate = useNavigate();

  const [collectionId, setCollectionId] = useState<string | null>(null);
  const [bins, setBins] = useState<Bin[]>([]);
  const [page, setPage] = useState(1);
  const [cursorStack, setCursorStack] = useState<string[]>(['']);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const meta = await HistoryMeta.getMeta();
      const coll = meta[userId];
      if (coll) {
        setCollectionId(coll);
      }
      setLoading(false);
    })();
  }, [userId]);

  const loadPage = async (cursor: string | null, push: boolean) => {
    if (!collectionId) return;
    setLoading(true);
    try {
      const { items, next } = await JsonBinApi.getBinsPage(collectionId, cursor, ITEMS_PER_PAGE);
      const fetched: Bin[] = [];
      for (const ref of items) {
        const data = await JsonBinApi.getBinById(ref.record);
        fetched.push({ ...(data as any), record: ref.record } as Bin);
      }
      setBins(fetched);
      setNextCursor(next);
      setHasNext(!!next);
      if (push) {
        setCursorStack(prev => [...prev, cursor || '']);
        setPage(prev => prev + 1);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (collectionId) loadPage(null, true);
  }, [collectionId]);

  const handlePrev = () => {
    if (cursorStack.length <= 1) return;
    const newStack = cursorStack.slice(0, -1);
    const prevCursor = newStack[newStack.length - 1];
    setCursorStack(newStack);
    setPage(newStack.length);
    loadPage(prevCursor || null, false);
  };

  const handleNext = () => {
    if (!hasNext || !nextCursor) return;
    loadPage(nextCursor, true);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Paper
        elevation={4}
        sx={{ mt: '75px', p: { xs: 2, sm: 3 }, width: '100%', maxWidth: 1200, borderRadius: 4, boxShadow: 8 }}
      >
        <Typography variant="h5" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
          History
        </Typography>
        {loading ? (
          <Box sx={{ height: 260, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color="primary" size={38} />
          </Box>
        ) : bins.length ? (
          <>
            <Box
              sx={{
                display: 'grid',
                gap: 2,
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(3, 1fr)',
                  md: 'repeat(5, 1fr)',
                  lg: 'repeat(5, 1fr)',
                  xl: 'repeat(7, 1fr)',
                },
              }}
            >
              {bins.map((bin) => {
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
                  >
                    <Box
                      onClick={() => navigate(`/result/${bin.record}`)}
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
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2, gap: 2 }}>
              <IconButton onClick={handlePrev} disabled={cursorStack.length <= 1}>
                Prev
              </IconButton>
              <Typography sx={{ display: 'flex', alignItems: 'center' }}>{page}</Typography>
              <IconButton onClick={handleNext} disabled={!hasNext}>
                Next
              </IconButton>
            </Box>
          </>
        ) : (
          <Typography align="center">No history found.</Typography>
        )}
      </Paper>
    </Box>
  );
};

export default History;
