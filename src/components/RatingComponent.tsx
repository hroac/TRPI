import React, { useState, useEffect } from 'react';
import { Rating, Box, Typography, Tooltip, styled } from '@mui/material';
import JsonBinApi from '../utils/saveResults';

interface RatingProps {
  bin: any;
  userId: string;
  onRatingSaved: (updatedBin: any) => void; 
}

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#2f4f4f', // Filled star color
    },
    '& .MuiRating-iconHover': {
      color: '#2f4f4f', // Hover color
    },
    '& .MuiRating-iconEmpty': {
      color: '#ccc', // Empty star color
    },
  });

const RatingComponent: React.FC<RatingProps> = ({ bin, userId, onRatingSaved }) => {
  const [rating, setRating] = useState<number | null>(bin?.rating ?? null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setRating(bin?.rating ?? null);
  }, [bin]);

  // Determine if the current user can set the rating:
  // - If userId != bin.userId, rating is always read-only.
  // - If userId == bin.userId and no rating is set, user can rate.
  // - Once rating is set, it becomes read-only even for the owner.
  const isBinOwner = userId === bin?.userId;
  const canRate = isBinOwner && rating === null && !saving;

  const handleRatingChange = async (event: React.SyntheticEvent, newValue: number | null) => {
    if (newValue === null || !canRate) return;

    setSaving(true);
    try {
      const updatedState = { ...bin, rating: newValue };
      await JsonBinApi.saveResultsToJsonBin(updatedState);
      onRatingSaved(updatedState);
      setRating(newValue);
    } catch (error) {
      console.error('Error saving rating:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box sx={{position: 'relative', left: 360, bottom: 28}}>
        <Tooltip title={saving ? "Saving your rating..." : "Accuracy"}>
      <StyledRating
        name="accuracy-rating"
        value={rating}
        onChange={handleRatingChange}
        readOnly={!canRate}
      />
      </Tooltip> 
    </Box>
     
  );
};

export default RatingComponent;
