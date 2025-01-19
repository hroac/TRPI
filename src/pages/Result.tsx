import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box, Container, useTheme, useMediaQuery } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import JsonBinApi from '../utils/saveResults';
import AboutPage from './About';
import { useParams } from 'react-router-dom';
import { guid } from '../utils/guid';
import RatingComponent from '../components/RatingComponent';
import { Helmet } from 'react-helmet';
import { stages } from '../utils/mbtiMapping';

const ResultHelmet: React.FC<{ type: string; primary4FType: string; bigFiveResponses: { [trait: string]: number }, binId: string }> = ({
  type,
  primary4FType,
  bigFiveResponses,
  binId,
}) => {
  // Generate a sideways ASCII bar chart
  const generateAsciiBarChart = (scores: { [trait: string]: number }): string => {
    const traits = ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'];
    return traits
      .map((trait) => {
        const score = Math.round(scores[trait.toLowerCase()] * 100);
        const bar = `${'█'.repeat(Math.round(score / 10))}`;
        return `${trait.padEnd(20)} ${bar.padEnd(10)} ${score}%`;
      })
      .join('\n');
  };

  const asciiChart = generateAsciiBarChart(bigFiveResponses);
  const url = `https://traumaindicator.com/#/result/${binId}`
  return (
    <Helmet>
      <title>{`TRPI - ${type} - ${primary4FType}`}</title>
      <meta
        name="description"
        content={`\n${asciiChart}`}
      />
    </Helmet>
  );
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ResultsProps {
  binId: string;
}

const ResultsPage: React.FC<ResultsProps> = ({ binId }) => {
  const [bin, setBin] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchBinData = async () => {
      try {
        const binData = await JsonBinApi.getBinById(binId);
        setBin(binData);
      } catch (error) {
        console.error('Error fetching bin data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBinData();
  }, [binId]);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Big Five Personality Scores' },
    },
    scales: { y: { beginAtZero: true, max: 100 } },
  };

  const placeholderData = {
    labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
    datasets: [],
  };

  const data = bin
    ? {
        labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
        datasets: [
          {
            label: 'Big Five Scores',
            data: [
              bin.bigFiveResponses.openness * 100,
              bin.bigFiveResponses.conscientiousness * 100,
              bin.bigFiveResponses.extraversion * 100,
              bin.bigFiveResponses.agreeableness * 100,
              bin.bigFiveResponses.neuroticism * 100,
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
      }
    : placeholderData;

  return (
    <Container maxWidth="md" sx={{  }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        {loading ? (
          <Typography variant="h5" align="center">
            Loading Test Results...
          </Typography>
        ) : bin ? (
          <>
            <ResultHelmet type={bin.type} primary4FType={bin.primary4FType} bigFiveResponses={bin.bigFiveResponses} binId={bin.binId}/>
            <Typography variant="h5" gutterBottom>
              TRPI Test Results - {bin.primary4FType} - {bin.type}
            </Typography>
            <Box display={'flex'} justifyContent={'flex-end'}>
            <RatingComponent
              bin={bin}
              userId={guid()}
              onRatingSaved={(updatedBin: any) => JsonBinApi.updateResultsInJsonBin(updatedBin)}
            />
            </Box>
            <Box my={3}>
              <Bar data={data} options={options} />
            </Box>
           
            {bin.type && (
              <AboutPage
                mbtiType={bin.type}
                showBigFive={false}
                description={bin.description}
                allResponses={bin.allResponses}
              />
            )}
          </>
        ) : (
          <Typography variant="h5" align="center">
            No Results Found
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default ResultsPage;
