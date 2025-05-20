// useChatLauncher.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
// ChatModal.tsx
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChatContent from './LiveChat';

interface ChatModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ChatModal({ open, onClose }: ChatModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{ sx: { height: '90vh' } }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Live Chat
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ p: 0 /* Chat handles internal padding */ }}>
        <ChatContent />
      </DialogContent>
    </Dialog>
  );
}


interface ChatCtx {
  openChat: () => void;
}

const ChatContext = createContext<ChatCtx | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openChat = () => setOpen(true);
  const closeChat = () => setOpen(false);

  return (
    <ChatContext.Provider value={{ openChat }}>
      {children}
      <ChatModal open={open} onClose={closeChat} />
    </ChatContext.Provider>
  );
}

export function useChatLauncher() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChatLauncher must be used within <ChatProvider>');
  return ctx.openChat;
}


