
import React from 'react';
import { useParams } from 'react-router-dom';
import { typesData } from '../utils/typesData';
import RelatedTypesBox from './RelatedTypesBox';
import { MBTIProfiles } from '../utils/mbtiMapping';
import { Box, Grid, List, ListItem } from '@mui/material';
import { Bar } from 'react-chartjs-2';
const AboutPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const typeInfo = typesData.find(t => t.type === type);
  const profile = MBTIProfiles.filter(p => p.name === type)[0]
  const data = {
    labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
    datasets: [
      {
        label: 'Big Five Scores',
        data: [
          profile.traits.openness * 100,
          profile.traits.conscientiousness * 100,
          profile.traits.extraversion * 100,
          profile.traits.agreeableness * 100,
          profile.traits.neuroticism * 100,
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

  if (!typeInfo) {
    return <div>Type information not available.</div>;
  }

  return (
    <div style={{ paddingTop: '60px' }}>
      <h1>{type} Profile</h1>
      <Box my={3}>
        <Bar data={data} options={options} />
      </Box>
      <p>{typeInfo.description}</p>
      <Grid container spacing={2}>
      <List sx={{paddingRight: 30}}>
      <h2>Strengths</h2>

        {typeInfo.strengths.map((strength: string, index: number) => (
          <ListItem key={index}>{strength}</ListItem>
        ))}
      </List>
      <List>
      <h2>Weaknesses</h2>

        {typeInfo.weaknesses.map((weakness: string, index: number) => (
          <ListItem key={index}>{weakness}</ListItem>
        ))}
      </List>
      </Grid>
      
     
      {/* Including Related Types section */}
      <RelatedTypesBox type={(type as unknown as any).toString()} />
    </div>
  );
};

export default AboutPage;
