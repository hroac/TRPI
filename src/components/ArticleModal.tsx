import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItemButton,
  ListItemText,
  Box,
} from '@mui/material';
import parser from '../utils/rss';

interface Article {
  title: string;
  link: string;
  pubDate: string;
  content: string;
}

interface ArticleModalProps {
  open: boolean;
  onClose: () => void;
}

const FEED_URL = 'https://medium-rss-three.vercel.app/api/rss';

const ArticleModal: React.FC<ArticleModalProps> = ({ open, onClose }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (open && articles.length === 0) {
      parser(FEED_URL)
        .then((rss: any) => {
          const items = rss.items.map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            content: item.content,
          }));
          setArticles(items);
        })
        .catch(console.error);
    }
  }, [open]);

  const selected = articles[selectedIndex];

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Study Articles</DialogTitle>
      <DialogContent sx={{ display: 'flex', height: '80vh' }}>
        <Box sx={{ width: '35%', overflowY: 'auto', mr: 2 }}>
          <List>
            {articles.map((a, idx) => (
              <ListItemButton
                key={idx}
                selected={idx === selectedIndex}
                onClick={() => setSelectedIndex(idx)}
              >
                <ListItemText
                  primary={a.title}
                  secondary={new Date(a.pubDate).toLocaleDateString()}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
        <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
          {selected && (
            <div dangerouslySetInnerHTML={{ __html: selected.content }} />
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleModal;
