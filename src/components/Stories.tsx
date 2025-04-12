import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, CircularProgress, useTheme, useMediaQuery } from '@mui/material';
import Carousel from './Carousel';
import parser from '../utils/rss';

interface Story {
  title: string;
  link: string;
  thumbnail: string;
  pubDate: string;
  content: string;
}

interface Slide {
  content: React.ReactNode;
}

// Helper function to extract the first image URL from HTML content.
const getImageFromContent = (content: string): string | null => {
  const match = content.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
};

// Wrap the rss-to-json parse method in a Promise.
const parseRss = (url: string): any => {
  return parser(url);
};

const Stories: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const rss = await parseRss('https://medium-rss-three.vercel.app/api/rss');
        // Map each RSS item to a Story object.
        const items: Story[] = rss.items.map((item: any) => {
          const thumbnail = item.image || getImageFromContent(item.content);
          return {
            title: item.title,
            link: item.link,
            thumbnail: thumbnail || '',
            pubDate: item.pubDate,
            content: item.content,
          };
        });
        setStories(items);
      } catch (err) {
        console.error(err);
        setError('An error occurred while loading stories.');
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  // Render a story "card" as a flex column for consistent button placement.
  const renderStory = (story: Story, index: number) => (
    <Box
      key={index}
      sx={{
        p: 2,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        // Set a minHeight so that all cards have consistent height.
        minHeight: 300,
      }}
    >
      {story.thumbnail && (
        <Box
          component="img"
          src={story.thumbnail}
          alt={story.title}
          sx={{
            width: '50%',
            height: 'auto',
            objectFit: 'cover',
            alignSelf: 'center',
          }}
        />
      )}
       <Box sx={{ flexGrow: 1 }} />
      <Typography variant="h6" sx={{ mt: 2 }} gutterBottom>
        {story.title}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        {new Date(story.pubDate).toLocaleDateString()}
      </Typography>
      {/* This spacer pushes the button to the bottom regardless of the title length */}
      <Button
        variant="contained"
        color="secondary"
        href={story.link}
        target="_blank"
        sx={{ mt: 2}}
      >
        Read More
      </Button>
    </Box>
  );

  // Render Carousel for mobile devices.
  if (isMobile) {
    const slides: Slide[] = stories.map((story, index) => ({
      content: renderStory(story, index),
    }));
    return <Carousel slides={slides} arrows />;
  }

  // Determine number of columns for grid:
  // if less than 3 stories, use the exact count and center them.
  const columns = stories.length < 3 ? stories.length : 3;

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 2, // this adds padding between both rows and columns
        justifyContent: stories.length < 3 ? 'center' : 'normal',
      }}
    >
      {stories.map((story, index) => renderStory(story, index))}
    </Box>
  );
};

export default Stories;
