import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface NotificationProps {
  open: boolean;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  onClose: () => void;
  sx?: any,
}

const Notification: React.FC<NotificationProps> = ({ open, message, type, onClose, sx }) => {
  return (
    <Snackbar sx={sx || {}} open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={type} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
