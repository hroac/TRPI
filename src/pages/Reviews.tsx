import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Paper,
} from "@mui/material";
import axios from "axios";
import { guid } from "../utils/guid";
import JsonBinApi from "../utils/saveResults";

const API_KEY = "$2a$10$q3P7Zn7sUJLykm7PHc2d4.zvCgVdfmt8tVVK38jEdNC947RlZgoOG";
const COLLECTION_ID = "678e2e23ad19ca34f8f154c5";
const JSONBIN_BASE_URL = `https://api.jsonbin.io/v3/c/${COLLECTION_ID}`;

interface Review {
  id: string;
  name: string;
  comment: string;
  date: string;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const url = `https://api.jsonbin.io/v3/c/${COLLECTION_ID}/bins`;
      const response = await axios.get(url, {
        headers: {
          "X-Master-Key": API_KEY,
          "Content-Type": "application/json",
        },
      });
      const fetchedReviews = response.data.map((bin: any) => bin.record);
      const reviews = [];

      for (const review of fetchedReviews) {
        const bin = await JsonBinApi.getBinById(review)
        reviews.push(bin)
      }
      setReviews(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddReview = async () => {
    if (!name.trim() || !comment.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    const newReview: Review = {
      id: guid(),
      name,
      comment,
      date: new Date().toISOString(),
    };

    try {
      const url = `https://api.jsonbin.io/v3/b`;
      await axios.post(
        url,
        {
          ...newReview,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key": API_KEY,
            "X-Collection-Id": COLLECTION_ID,
            'X-Bin-Name': newReview.name,
          },
        }
      );
      setReviews((prev) => [...prev, newReview]);
      setName("");
      setComment("");
    } catch (error) {
      console.error("Error adding review:", error);
      alert("Failed to add review. Please try again.");
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Reviews
      </Typography>

      <Paper sx={{ p: 2, width: "100%" }} elevation={3}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Leave a Review</Typography>
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleAddReview}>
          Submit
        </Button>
      </Box>
      </Paper>

      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {reviews.map((review) => (
           
           <ListItem key={review.id} alignItems="flex-start" sx={{ mb: 2 }}>
           <Paper sx={{ p: 2, width: "100%" }} elevation={3}>
             <ListItemText
               primary={
                 <Typography variant="h6" gutterBottom>
                   {review.name}
                 </Typography>
               }
               secondary={
                 <>
                   <Typography
                     component="span"
                     variant="body2"
                     color="text.secondary"
                     gutterBottom
                   >
                     {new Date(review.date).toLocaleString()}
                   </Typography>
                   <Typography variant="body1">{review.comment}</Typography>
                 </>
               }
             />
           </Paper>
         </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Reviews;
