import React from 'react';
import { useParams } from 'react-router-dom';
import { typesData } from '../utils/typesData';
import RelatedTypesBox from '../components/RelatedTypesBox';
import { MBTIProfiles } from '../utils/mbtiMapping';
import { Box, Grid, List, ListItem, Typography, Card, CardContent, useMediaQuery, useTheme } from '@mui/material';
import { Bar } from 'react-chartjs-2';

const AboutPage: React.FC<{ mbtiType?: string; showBigFive?: boolean }> = ({ mbtiType, showBigFive = true }) => {
  const { type } = useParams<{ type: string }>();
  const typeInfo = typesData.find((t: any) => t.type === type || t.type === mbtiType);
  const profile = MBTIProfiles.find((p: any) => p.name === type || p.name === mbtiType);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const data = {
    labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
    datasets: [
      {
        label: 'Big Five Scores',
        data: profile && profile.traits
          ? [
              profile.traits.openness * 100,
              profile.traits.conscientiousness * 100,
              profile.traits.extraversion * 100,
              profile.traits.agreeableness * 100,
              profile.traits.neuroticism * 100,
            ]
          : [0, 0, 0, 0, 0], // Default values if profile or traits are undefined
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
    <Box paddingTop={8} paddingX={4}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        {type || mbtiType} - {typeInfo.description.slice(typeInfo.description.indexOf(',') + 2, typeInfo.description.indexOf(':'))}
      </Typography>

      <Grid spacing={2}>
        <Box display="flex" justifyContent="center" my={4}>
          {showBigFive && (
            <Box width={isMobile ? '100%' : '60%'}>
              <Bar data={data} options={options} />
            </Box>
          )}
        </Box>

        <Card variant="outlined" sx={{ marginY: 3, padding: 2 }}>
          <CardContent>
            <Typography variant="body1" paragraph>
              {typeInfo.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Box my={5}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2" gutterBottom>
              Strengths
            </Typography>
            <List dense>
              {typeInfo.strengths.map((strength: string, index: number) => (
                <ListItem key={index}>{strength}</ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2" gutterBottom>
              Weaknesses
            </Typography>
            <List dense>
              {typeInfo.weaknesses.map((weakness: string, index: number) => (
                <ListItem key={index}>{weakness}</ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>

      <Box marginTop={5}>
        <RelatedTypesBox type={type ? (type as unknown as any).toString() : mbtiType} />
      </Box>
    </Box>
  );
};

export default AboutPage;
