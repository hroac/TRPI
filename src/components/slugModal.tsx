import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box
} from '@mui/material';

interface SlugModalProps {
  open: boolean;
  onSubmit: (data: {
    name: string;
    email: string;
    company?: string;
    jobTitle: string;
    jobDescription?: string;
  }) => void;
  onClose: () => void;
}

const SlugModal: React.FC<SlugModalProps> = ({ open, onSubmit, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  // Reset fields when modal opens
  useEffect(() => {
    if (open) {
      setName('');
      setEmail('');
      setJobTitle('');
      setJobDescription('');
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, jobTitle, jobDescription });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Enter Your Details</DialogTitle>
      <DialogContent dividers>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            label="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Job Title"
            value={jobTitle}
            onChange={e => setJobTitle(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Job Description"
            value={jobDescription}
            onChange={e => setJobDescription(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" onClick={handleSubmit} variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SlugModal;