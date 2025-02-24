import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

interface RankingItemDetails {
  correlation: number;
  normalizedDistance: number;
  originalDistance: number;
}

interface RankingItem {
  type: string;
  score: number;
  details: RankingItemDetails;
}

interface RankingProps {
  data: Record<string, RankingItem>;
}

const Ranking: React.FC<RankingProps> = ({ data }) => {
  if (!data) {
    return <Typography>No data provided.</Typography>;
  }

  // Convert the data object to an array of items
  const items: RankingItem[] = Object.values(data);

  // Identify the most accurate type based on the highest correlation
/*   const mostAccurate = items.reduce((prev, current) =>
    current.details.correlation > prev.details.correlation ? current : prev
  ); */

  const mostAccurate = Object.values(items)[0]

  // Filter out the most accurate type 
  const filteredItems = items.filter(item => item.type !== mostAccurate.type);

  // Sort the remaining items by score in descending order
  const sortedItems = filteredItems.sort((a, b) => b.score - a.score);

  // Limit to the top 5 items
  const topItems = sortedItems.slice(0, 5).filter(item => item.type !== mostAccurate.type);


  // Normalize the score values among the top items for a 0-100 range
  const maxScore = Math.max(...topItems.map(item => item.score));
  const minScore = Math.min(...topItems.map(item => item.score));
  const scoreRange = maxScore - minScore;



  // Predefined colors for the top 5 items
  const barColors = ['#1976d2', '#dc004e', '#2e7d32', '#ed6c02', '#8e24aa'];

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
        <Typography variant='h5' gutterBottom>
            Closest types
        </Typography>
      {topItems.map((item, index) => {
        const barColor = barColors[index % barColors.length];

        return (
          <Box key={item.type} sx={{ marginBottom: 3 }}>
            <Typography variant="h6" gutterBottom>
              {index + 1}. {item.type} ({item.score.toFixed(1)}%)
            </Typography>
            <LinearProgress
              variant="determinate"
              value={item.score}
              sx={{
                height: 20, // Thicker bar
                borderRadius: 5,
                '& .MuiLinearProgress-bar': {
                  backgroundColor: barColor,
                },
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Ranking;
