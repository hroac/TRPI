import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

interface Props {
  open: boolean;
  onClose: (name?: string) => void;
}

const PersonalDetailsModal: React.FC<Props> = ({ open, onClose }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (open) setName('');
  }, [open]);

  const handleSubmit = () => {
    onClose(name);
  };

  return (
    <Dialog open={open} onClose={() => onClose()}>
      <DialogTitle>Personal Details</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit} disabled={!name}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PersonalDetailsModal;
