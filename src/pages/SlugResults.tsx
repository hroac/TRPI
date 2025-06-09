import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
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

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, ChartTooltip, Legend);

interface Slide {
  content: React.ReactNode;
}

const SlugResults: React.FC = () => {
  const { company } = useParams<{ company: string }>();
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!company) {
          setLoading(false);
          return;
        }
        const mapping = await MetaBin.getAll();
        const collectionId = mapping[company];
        if (!collectionId) {
          setLoading(false);
          return;
        }

        const bins = await JsonBinApi.getBinsInCollectionById(collectionId);
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
                scales: {
                  r: {
                    min: 0,
                    max: 100,
                    ticks: { stepSize: 20, backdropColor: 'transparent' },
                    pointLabels: { font: { size: isMobile ? 12 : 16 } },
                  },
                },
                plugins: { legend: { display: false } },
              };

              const desc = splitDescription(bin.description || typeProfile.description || '');

              return (
                <Box key={item.record} component={Link} to={`/result/${item.record}`} sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', p: 2 }}>
                  <Box sx={{ width: isMobile ? '40%' : '30%' }}>
                    <Radar data={radarData} options={radarOptions} />
                  </Box>
                  <Box sx={{ width: isMobile ? '60%' : '70%', pl: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      {bin.primary4FType} - {bin.type}
                    </Typography>
                    {desc.map((d, idx) => (
                      <Typography key={idx} variant="body2" paragraph>
                        {d}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              );
            })
          );

          newSlides.push({
            content: <Box>{rows}</Box>,
          });
        }

        setSlides(newSlides);
      } catch (err) {
        console.error('Error loading slug results:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [company, isMobile]);

  if (loading) {
    return (
      <Paper sx={{ mt: '75px', p: 2 }}>
        <Typography>Loading...</Typography>
      </Paper>
    );
  }

  if (!slides.length) {
    return (
      <Paper sx={{ mt: '75px', p: 2 }}>
        <Typography>No results found.</Typography>
      </Paper>
    );
  }

  return (
    <Paper sx={{ mt: '75px', p: 2 }}>
      <Carousel slides={slides} settings={{ slidesPerView: 1, loop: false, autoHeight: true }} />
    </Paper>
  );
};

export default SlugResults;
