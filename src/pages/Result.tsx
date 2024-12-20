import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import JsonBinApi from '../utils/saveResults';
import AboutPage from './About';
import { typesData } from '../utils/typesData';
import { useParams } from 'react-router-dom';
import { guid } from '../utils/guid';
import GhPagesFS from '../utils/GhPagesFS';
import RatingComponent from '../components/RatingComponent';
import { Helmet } from 'react-helmet-async';

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

  return (
    <Helmet>
      <title>{`TRPI - ${type} - ${primary4FType}`}</title>
      <meta
        name="description"
        content={`\n${asciiChart}`}
      />
      <meta
        property="og:title"
        content={`TRPI - ${type} - ${primary4FType}`}
      />
      <meta
        property="og:description"
        content={`\n${asciiChart}`}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://traumaindicator.com/#/result/${binId}`}
      />
      <meta
        property="og:image"
        content="https://traumaindicator.com/logo.png"
      />
    </Helmet>
  );
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
/* 
interface ResultsProps {
  mbtiType: string;
  bigFiveResponses: { [trait: string]: number };
  primary4FType: string;
} */

interface ResultsProps {
  binId: string;
}
const ResultsPage: React.FC<ResultsProps> = ({binId}) => {
  const [bin, setBin] = useState<any>(null); // State to store bin data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const params = useParams();

  useEffect(() => {
    const fetchBinData = async () => {
      try {
        //const userId = params?.userId || guid();
        const userId = guid();
        const local = localStorage.getItem(userId) || '';
        if(!local || params?.binId) {
          const bin = params?.binId || binId || ''; // Fetch binId from localStorage

          if (bin) {
            const binData = await JsonBinApi.getBinById(bin);
            binData.binId = bin; // Retrieve bin data by binId
            setBin(binData); // Set bin data to state
          }
          /* const ghPages = new GhPagesFS({ owner: 'hroac',
            repo: 'TRPI',
            branch: 'gh-data',
            token: process.env.REACT_APP_GH_KEY?.toString() || ''})
  
        
          const data = await ghPages.readJson(`${userId}.json`) */
          //setBin(data)

        } else {
          const parsed = JSON.parse(local)
          setBin(parsed)
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

  const { type, bigFiveResponses, primary4FType, description } = bin;
  //const mbtiType = type && typesData.find((t: any) => t.type === type);

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
      <ResultHelmet
       type={type}
       primary4FType={primary4FType}
       bigFiveResponses={bigFiveResponses}
       binId={binId}
      />
      <Box mt={3}>
      <Typography variant="h5" gutterBottom>
        TRPI Test Results - {primary4FType} - {type} {bin.rating || guid() === bin.userId && "-"} {bin.rating || guid() === bin.userId && (<RatingComponent 
        bin={bin} 
        userId={guid()}
        onRatingSaved={(updatedBin: any) => JsonBinApi.updateResultsInJsonBin(updatedBin)} 
      />)}    
      </Typography>
      </Box>
      <Box my={3}>
        <Bar data={data} options={options} />
      </Box>
      {type && <AboutPage mbtiType={type} showBigFive={false} description={description} />}
    </Paper>
  );
};

export default ResultsPage;
