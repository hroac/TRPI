import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import JsonBinApi from '../utils/saveResults';
import AboutPage from './About';
import { typesData } from '../utils/typesData';
import { useParams } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ResultsProps {
  mbtiType: string;
  bigFiveResponses: { [trait: string]: number };
  primary4FType: string;
}

const ResultsPage: React.FC = () => {
  const [bin, setBin] = useState<any>(null); // State to store bin data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const params = useParams();

  useEffect(() => {
    const fetchBinData = async () => {
      try {
        const binId = params?.binId || localStorage.getItem('binId') || ''; // Fetch binId from localStorage

        if (binId) {
          const binData = await JsonBinApi.getBinById(binId); // Retrieve bin data by binId
          setBin(binData); // Set bin data to state
        }
      } catch (error) {
        console.error("Error fetching bin data:", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched or error occurs
      }
    };

    fetchBinData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Big Five Personality Scores' },
    },
    scales: { y: { beginAtZero: true, max: 100 } },
  };

  if (loading) {
    return  (
      <Paper elevation={3} style={{ padding: 20, margin: '20px auto', maxWidth: 600 }}>
      <Typography variant="h5" gutterBottom>
        Loading Test Results...
      </Typography>
      <Box my={3}>
      <Box my={3}>
      <Bar data={ { labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'], datasets: []}} options={options} />
      </Box>
      </Box>
    </Paper>
    )
  }

  if (!bin) {
    return  (
      <Paper elevation={3} style={{ padding: 20, margin: '20px auto', maxWidth: 600 }}>
      <Typography variant="h5" gutterBottom>
        No Results Found...
      </Typography>
      <Box my={3}>
      <Box my={3}>
        <Bar data={ { labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'], datasets: []}} options={options} />
      </Box>
      </Box>
    </Paper>
    )
  }

  const { type, bigFiveResponses, primary4FType } = bin.data;
  const mbtiType = type && typesData.find((t: any) => t.type === type);

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





  return (
    <Paper elevation={3} style={{ padding: 20, margin: '20px auto', maxWidth: 600 }}>
      <Typography variant="h5" gutterBottom>
        TRPI Test Results - {primary4FType} - {type}
      </Typography>
      <Box my={3}>
        <Bar data={data} options={options} />
      </Box>
      {type && <AboutPage mbtiType={type} showBigFive={false} />}
    </Paper>
  );
};

export default ResultsPage;