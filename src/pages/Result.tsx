import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';
import { typesData } from '../utils/typesData';
import AboutPage from './About';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ResultsPageProps {
  mbtiType: string;
  bigFiveScores: { [trait: string]: number };
  primary4FType: string;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ mbtiType, bigFiveScores, primary4FType }) => {
  const type = mbtiType && typesData.find((t: any) => t.type === mbtiType);
  const data = {
    labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
    datasets: [
      {
        label: 'Big Five Scores',
        data: [
          bigFiveScores.openness * 100,
          bigFiveScores.conscientiousness * 100,
          bigFiveScores.extraversion * 100,
          bigFiveScores.agreeableness * 100,
          bigFiveScores.neuroticism * 100,
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

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Big Five Personality Scores' },
    },
    scales: { y: { beginAtZero: true, max: 100 } },
  };

  return (
    <Paper elevation={3} style={{ padding: 20, margin: '20px auto', maxWidth: 600 }}>
      <Typography variant="h5" gutterBottom>TRPI Test Results - {primary4FType} - {mbtiType}</Typography>
      <Box my={3}>
        <Bar data={data} options={options} />
      </Box>
      {type && (
      <AboutPage mbtiType={mbtiType} showBigFive={false}/>
      )}
      
    </Paper>
  );
};

export default ResultsPage;
