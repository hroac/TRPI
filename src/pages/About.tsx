import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { typesData } from '../utils/typesData';
import RelatedTypesBox from '../components/RelatedTypesBox';
import { functionPairings, MBTIProfiles, stages } from '../utils/mbtiMapping';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
  Button,
  List,
  ListItem,
  Paper,
  Stack,
  LinearProgress,
  CircularProgress,
} from '@mui/material';
import { Bar } from 'react-chartjs-2';
import Carousel from '../components/Carousel';
import PremiumModal from '../components/PremiumModal';
import JsonBinApi from '../utils/saveResults';
import QuestionnaireModal from '../components/QuestionnaireModal';
import { generateProfileAnalysis } from '../utils/profileGenerator';
import { guid } from '../utils/guid';

const AboutPage: React.FC<{
  bin?: any,
  mbtiType?: string;
  showBigFive?: boolean;
  description?: string;
  allResponses?: any;
  handleReloadBin?: () => void;
}> = ({ bin, mbtiType, showBigFive = true, description = '', allResponses = [], handleReloadBin = null }) => {
  const { type } = useParams<{ type: string }>();
  const typeInfo = typesData.find((t) => t.type === type || t.type === mbtiType);
  const profile = MBTIProfiles.find((p) => p.name === type || p.name === mbtiType);
  const statements = stages.flat();
  const getSubtext = (trait: string, index: number, value: number) => {
    const statement = statements[index];
    if (!statement) return null;
  
    const percentage = Math.round(value * 100);
    const range = Object.keys(statement.subtext).find((key) => {
      const [min, max] = key.split('-').map(Number);
      return percentage >= min && percentage <= max;
    });
  
    return range ? (statement.subtext as any)[range]?.text : null;
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [premiumModalOpen, setPremiumModalOpen] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  //const [loading, setLoading] = useState(false);

  const handleOpenPremiumModal = () => setPremiumModalOpen(true);
  const handleClosePremiumModal = () => setPremiumModalOpen(false);
  
  const handlePaymentSuccess = async (data: any) => {
    setPaymentSuccessful(true);
    setPremiumModalOpen(false);
    setLoading(true);

    try{
      let profile = functionPairings.find(pairing => pairing.type === bin.type) || functionPairings[0];
      let description = `${statements.map((statement, index) => {
        const answer = allResponses[index];
        const subText = getSubtext(statement.trait, index, answer)
        return subText.trim();
      }).join('\n')}`
  
      description = await generateProfileAnalysis({
        cognitiveProfile: profile,
        scores: bin.bigFiveResponses,
        demographics: data.demographics,
        assesment: description,
  
      })
      JsonBinApi.updateResultsInJsonBin({...bin, ...data.demographics,  description});
    handleReloadBin && handleReloadBin()
    } finally {
      setLoading(false);
    }
   

    //console.log('Payment Data:', paymentData);
  };
  const slides =  allResponses.length  ? stages.map(stage => {
    return { content: (
      <Paper>
    <Stack>
      {
        stage.map((stmt: any) => {
          const index = statements.indexOf(stmt)
          const explanation = allResponses[index];
          const value = typeof explanation === 'string' ? explanation.trim() : `${parseInt((explanation * 100).toString(), 10)} \n${getSubtext(stmt.trait, index, explanation)}`;
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
                <LinearProgress  color="secondary" variant="determinate" value={parseFloat(value.toString())}/>
              </Box>
            </Paper>
            )
        })
      }
    </Stack>
    </Paper>
    )
}}) : []
  const data = {
    labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
    datasets: [
      {
        label: 'Big Five Scores',
        data: profile?.traits
          ? [
              profile.traits.openness * 100,
              profile.traits.conscientiousness * 100,
              profile.traits.extraversion * 100,
              profile.traits.agreeableness * 100,
              profile.traits.neuroticism * 100,
            ]
          : [0, 0, 0, 0, 0],
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
    return <Typography variant="h5">Type information not available.</Typography>;
  }

  return (
    <Box padding={4}>
      <Typography variant="h4" align="center" gutterBottom>
        {type || mbtiType} -{' '}
        {typeInfo.description.slice(typeInfo.description.indexOf(',') + 2, typeInfo.description.indexOf(':'))}
      </Typography>

      {/* Big Five Scores Chart */}
      {showBigFive && (
        <Box display="flex" justifyContent="center" my={4}>
          <Box width={isMobile ? '100%' : '60%'}>
            <Bar data={data} options={options} />
          </Box>
        </Box>
      )}
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
      {/* Description and Generate Profile Button */}
      <Card variant="outlined" sx={{ marginY: 3, padding: 2 }}>
        <CardContent>
          {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress/>
            </Box>
          ) : ( <Typography variant="body1" paragraph>
            {description || typeInfo.description}
          </Typography>)}
          {bin && bin.userId === guid() && !description && (
            <Button
            variant="contained"
            color="primary"
            fullWidth={!isMobile}
            onClick={handleOpenPremiumModal}
            sx={{ mt: 3 }}
          >
            Generate a Custom Profile
          </Button>
          )}
        </CardContent>
      </Card>

      {/* Carousel */}
      <Carousel
        slides={slides}
        settings={{
          spaceBetween: 50,
          slidesPerView: 1,
          autoplay: { delay: 2000 },
          loop: true,
        }}
      />

      {/* Stereotype and Reality */}
      <Box mt={5}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Stereotype
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {typeInfo.Stereotype}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Reality
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {typeInfo.Reality}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Strengths and Weaknesses */}
      <Box mt={5}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Strengths
            </Typography>
            <List>
              {typeInfo.strengths.map((strength: string, idx: number) => (
                <ListItem key={idx}>{strength}</ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Weaknesses
            </Typography>
            <List>
              {typeInfo.weaknesses.map((weakness: string, idx: number) => (
                <ListItem key={idx}>{weakness}</ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>

      {/* Related Types */}
      <Box mt={5}>
        <RelatedTypesBox type={type || mbtiType || ''} />
      </Box>

      {/* Premium Modal */}
      <QuestionnaireModal
        open={premiumModalOpen}
        onClose={handleClosePremiumModal}
        handlePaymentSuccess={handlePaymentSuccess}
        price={0.99}
      />
    </Box>
  );
};

export default AboutPage;
