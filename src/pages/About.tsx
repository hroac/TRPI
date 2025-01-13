import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { typesData } from '../utils/typesData';
import RelatedTypesBox from '../components/RelatedTypesBox';
import { MBTIProfiles, stages } from '../utils/mbtiMapping';
import { Box, Grid, List, ListItem, Typography, Card, CardContent, useMediaQuery, useTheme, Paper, Button, Stack, LinearProgress, Tooltip } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import Carousel from '../components/Carousel';




const AboutPage: React.FC<{ mbtiType?: string; showBigFive?: boolean; description?: string, allResponses?: any}> = ({ mbtiType, showBigFive = true, description = '', allResponses = [] }) => {
  const { type } = useParams<{ type: string }>();
  const typeInfo = typesData.find((t: any) => t.type === type || t.type === mbtiType);
  const profile = MBTIProfiles.find((p: any) => p.name === type || p.name === mbtiType);
  //const [slides, setSlides] = useState<Array<any>>([]); // State for slides
  const slides =  allResponses.length  ? stages.map(stage => {
    return { content: (
      <Paper>
    <Stack>
      {
        stage.map((stmt: any) => {
          const index = stages.flat().indexOf(stmt)
          const explanation = allResponses[index];
          const value = typeof explanation === 'string' ? explanation.trim() : parseFloat(explanation.toString().slice(0, 3)) * 100
          return  (
              <Paper sx={{ p: 3, mb: 5 }}>
              <Typography variant="h6" gutterBottom>
                {stmt.text}
              </Typography>
              <Typography color="text.secondary">
                Trait: {stmt.trait.toUpperCase()}
              </Typography>
              <Box mt={1}>
                <Typography sx={{ whiteSpace: "pre-wrap" }}>
                  <strong>Your Answer:</strong>{" "}
                  {value}
                </Typography>
                <LinearProgress  color="secondary" variant="determinate" value={parseFloat(value.toString())}/>
                <Tooltip title={`${value}`} arrow><LinearProgress  color="secondary" variant="determinate" value={parseFloat(explanation.toString().slice(0, 3)) * 100}/></Tooltip>
              </Box>
            </Paper>
            )
        })
      }
    </Stack>
    </Paper>
    )
}}) : []
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
<Box display="flex" justifyContent="center">
<Typography
        variant="h4"
        sx={{
          fontStyle: 'italic',
          fontWeight: 'bold',
          mb: 2,
        }}
      >
        {`"${typeInfo.quote}"`}
      </Typography>
</Box>
        <Card variant="outlined" sx={{ marginY: 3, padding: 2 }}>
          <CardContent>
            <Typography variant="body1" paragraph>
              {description || typeInfo.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Carousel  slides={slides} settings={{
  spaceBetween: 50,
  slidesPerView: 1,
  autoplay: { delay: 100 },
  loop: true,
}}/>


<Box my={5}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2" gutterBottom>
              Stereotype
            </Typography>
            <List dense>
              <ListItem>
                <Typography variant="body2" color="text.secondary">
                  {typeInfo.Stereotype}
                </Typography>
              </ListItem>
            </List>
          </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h2" gutterBottom>
            Reality
          </Typography>
          <List dense>
            <ListItem>
              <Typography variant="body2" color="text.secondary">
                {typeInfo.Reality}
              </Typography>
            </ListItem>
          </List>
        </Grid>
    </Grid>
  </Box>
  
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
