import React, { useState } from 'react';
import { Modal as MuiModal, Box, Typography, Button } from '@mui/material';

const Modal: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <MuiModal open={open} onClose={() => setOpen(false)}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 400, bgcolor: 'background.paper', p: 4, borderRadius: '8px'
        }}>
          <Typography variant="h6">Modal Title</Typography>
          <Typography sx={{ mt: 2 }}>This is a modal body.</Typography>
          <Button onClick={() => setOpen(false)} sx={{ mt: 2 }}>Close</Button>
        </Box>
      </MuiModal>
    </>
  );
};

export default Modal;
