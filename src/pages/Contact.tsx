import React, { useEffect, useRef, useState } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent, CardActions } from '@mui/material';

declare global {
  interface Window { google: any }
}

const CLIENT_ID = '356497060674-ndjka8l1iod2obja36djpah0fckmaot9.apps.googleusercontent.com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ subject: '', message: '', email: '' });
  const tokenClient = useRef<any>(null);
  const formDataRef = useRef(formData);

useEffect(() => {
  formDataRef.current = formData;
}, [formData]);

  useEffect(() => {
    // Initialize Google One-Tap / Credential response
    window.google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: (resp: any) => {
        // Extract user email from the ID token
        const user = JSON.parse(atob(resp.credential.split('.')[1]));
        setFormData(f => ({ ...f, email: user.email }));
        // Now request Gmail API token
        tokenClient.current.requestAccessToken();
      },
    });

    // Initialize OAuth2 token client for gmail.send
    tokenClient.current = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: 'https://www.googleapis.com/auth/gmail.send',
      callback: (tokenResp: any) => {
        if (tokenResp.access_token) {
          sendEmail(tokenResp.access_token);
        }
      },
    });
  }, []);

  const createEmail = ({ to, from, subject, message }: any) => {
    const lines = [
      `To: ${to}`,
      `From: ${from}`,
      `Subject: ${subject}`,
      `Content-Type: text/plain; charset=UTF-8`,
      ``,
      message,
    ];
    return btoa(unescape(encodeURIComponent(lines.join('\n'))))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  };

  const sendEmail = async (accessToken: string) => {
    const raw = createEmail({
      to: 'rsk.rook@gmail.com',
    from: formDataRef.current.email,
      subject: formDataRef.current.subject,
      message: formDataRef.current.message,
    });

    const res = await fetch(
      'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ raw }),
      }
    );

    if (res.ok) {
      alert('Email sent successfully!');
      setFormData(f => ({ ...f, subject: '', message: '' }));
    } else {
      console.error('Send failed:', await res.text());
      alert('Failed to send email.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      // Not signed in yet → trigger Google One-Tap / popup
      window.google.accounts.id.prompt();
    } else {
      // Already have email → request Gmail token & send
      tokenClient.current.requestAccessToken();
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 12, px: 2 }}>
      <Card sx={{ maxWidth: 600, width: '100%' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}
          >
            <TextField
              label="Subject"
              name="subject"
              fullWidth
              required
              value={formData.subject}
              onChange={e => setFormData(f => ({ ...f, subject: e.target.value }))}
            />
            <TextField
              label="Message"
              name="message"
              fullWidth
              required
              multiline
              rows={6}
              value={formData.message}
              onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
            />
            <CardActions sx={{ justifyContent: 'flex-end', p: 0 }}>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
              >
                Send
              </Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contact;
