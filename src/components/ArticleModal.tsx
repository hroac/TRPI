import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import fetchRssToJson from '../utils/rss';

interface Article {
  title: string;
  link: string;
  content: string;
  pubDate: string;
}

interface ArticleModalProps {
  open: boolean;
  onClose: () => void;
}

const FEED_URL = 'https://medium-rss-three.vercel.app/api/rss';

const ArticleModal: React.FC<ArticleModalProps> = ({ open, onClose }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selected, setSelected] = useState<Article | null>(null);

  useEffect(() => {
    if (open) {
      fetchRssToJson(FEED_URL)
        .then((res) => {
          if (Array.isArray(res.items)) {
            setArticles(res.items);
            setSelected(res.items[0]);
          }
        })
        .catch(() => {});
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Study Articles
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ height: '70vh', p: 0 }}>
        <Box sx={{ display: 'flex', height: '100%' }}>
          <Box sx={{ width: '30%', overflowY: 'auto', borderRight: '1px solid #ccc' }}>
            <List>
              {articles.map((a, i) => (
                <ListItem disablePadding key={i}>
                  <ListItemButton
                    selected={selected?.link === a.link}
                    onClick={() => setSelected(a)}
                  >
                    <ListItemText primary={a.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
            {selected ? (
              <Box>
                <Typography variant="h6" gutterBottom>
                  {selected.title}
                </Typography>
                <div dangerouslySetInnerHTML={{ __html: selected.content }} />
              </Box>
            ) : (
              <Typography>Select an article</Typography>
            )}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleModal;
