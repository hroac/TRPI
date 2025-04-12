import React, { useState, useEffect } from 'react';
import { Button, Box, Tooltip, styled, Typography, Grid } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import JsonBinApi from '../utils/jsonBin';

interface RatingProps {
  bin: any;
  userId: string;
  onRatingSaved: (updatedBin: any) => void; 
}

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const ReadOnlyRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <Box display="flex" alignItems="center">
      {rating === 1 ? (
        <Box display="flex" alignItems="center">
          <Tooltip title="like">
          <ThumbUpIcon color="primary" />
          </Tooltip>
        </Box>
      ) : (
        <Box display="flex" alignItems="center">
          <Tooltip title="dislike">
          <ThumbDownIcon color="secondary" />
          </Tooltip>
        </Box>
      )}
    </Box>
  );
};

const RatingComponent: React.FC<RatingProps> = ({ bin, userId, onRatingSaved }) => {
  // Define the rating state as 1 (like), 0 (dislike), or null (no rating)
  const [rating, setRating] = useState<number | null>(bin?.rating ?? null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null); // For error handling

  useEffect(() => {
    setRating(bin?.rating ?? null);
  }, [bin]);

  // Determine if the current user is the owner
  const isBinOwner = userId === bin?.userId;
  
  // For bin owners, can rate if they are the owner, haven't rated yet, and not saving
  const canRate = isBinOwner && rating === null && !saving;

  // Function to handle liking
  const handleLike = async () => {
    if (!canRate) return;

    setSaving(true);
    try {
      const updatedState = {  rating: 1, ...bin };
     // await JsonBinApi.saveResultsToJsonBin(updatedState);
      onRatingSaved(updatedState);
      setRating(1);
    } catch (error) {
      console.error('Error saving like:', error);
      setError('Failed to save your rating. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  // Function to handle disliking
  const handleDislike = async () => {
    if (!canRate) return;

    setSaving(true);
    try {
      const updatedState = { rating: 0, ...bin };
     // await JsonBinApi.saveResultsToJsonBin(updatedState);
      onRatingSaved(updatedState);
      setRating(0);
    } catch (error) {
      console.error('Error saving dislike:', error);
      setError('Failed to save your rating. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box sx={{ position: 'relative' }}>
      {/* Display error messages if any */}
      {error && (
        <Box mb={2}>
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        </Box>
      )}
      
      {isBinOwner ? (
        // If user is the bin owner
        
          <Box>
            {rating === null ? (
              // If no rating, show Like and Dislike buttons
              <>
              {
                canRate && (
                  <Box>
                    <Tooltip title={saving ? "Saving your feedback..." : "Rate these results"}>
                    <Grid container spacing={2}>
                    <Box onClick={handleDislike}>
                      <ThumbDownIcon sx={{ color: '#2f4f4f'}}/>
                    </Box>
                    <Box onClick={handleLike}>
                      <ThumbUpIcon  sx={{ color: '#2f4f4f'}}/>
                    </Box>
                  </Grid>
                    </Tooltip>
                  </Box>
                  
                )
              }
              </>
            ) : (
              // If rated, display the rating as read-only
              <ReadOnlyRating rating={rating} />
            )}
          </Box>
      ) : (
        // If user is not the bin owner
        rating !== null && (
          <Tooltip title="Rating">
            <Box>
              <ReadOnlyRating rating={rating} />
            </Box>
          </Tooltip>
        )
      )}
    </Box>
  );
};

export default RatingComponent;
