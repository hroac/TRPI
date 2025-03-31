import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
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
// We use require here because rss-to-json is a CommonJS module.
const parseRss = (url: string): any => {
    return parser(url);
};

const Stories: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const rss = await parseRss('https://medium.com/feed/@hraoc');
        // Map each RSS item to a Story object.
        const items: Story[] = rss.items.map((item: any) => {
          const thumbnail = item.thumbnail || getImageFromContent(item.content);
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
        setError('Error loading stories');
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) {
    return (
      <Box display="flex" alignItems="center">
        <Typography>Loading stories...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" alignItems="center">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  // Map stories to slides for the Carousel.
  const slides: Slide[] = stories.map((story, index) => ({
    content: (
      <Box
        key={index}
        sx={{
          p: 2,
          textAlign: 'center',
        }}
      >
        {story.thumbnail && (
          <img
            src={story.thumbnail}
            alt={story.title}
            style={{ width: '100%', maxHeight: 200, objectFit: 'cover' }}
          />
        )}
        <Typography variant="h6" sx={{ mt: 2 }}>
          {story.title}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {new Date(story.pubDate).toLocaleDateString()}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={story.link}
          target="_blank"
          sx={{ mt: 2 }}
        >
          Read More
        </Button>
      </Box>
    ),
  }));

  return <Carousel slides={slides} arrows />;
};

export default Stories;
