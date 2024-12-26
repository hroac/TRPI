import React, { useEffect, useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { loadGapiInsideDOM } from 'gapi-script';


interface google {
  
}
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [token, setToken] = useState<string | null>(null);
  let tokenClient: any;

  useEffect(() => {
    const loadGapi = async () => {
      await loadGapiInsideDOM();
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: '1038743380423-nqp44dfrru1l118rluin4507jmjlecpv.apps.googleusercontent.com',
        callback: handleCredentialResponse,
      });

      tokenClient = (google as any).accounts.oauth2.initTokenClient({
        client_id: '1038743380423-nqp44dfrru1l118rluin4507jmjlecpv.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/gmail.send',
        callback: (tokenResponse: any) => {
          setToken(tokenResponse.access_token);
          sendEmail(tokenResponse.access_token);
        },
      });
    };
    loadGapi();
  }, [formData, token]);

  const handleCredentialResponse = (response: any) => {
    const userObject = JSON.parse(atob(response.credential.split('.')[1]));
    setFormData(prevState => ({ ...prevState, name: userObject.name, email: userObject.email }));
    if (tokenClient) {
      tokenClient.requestAccessToken();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const createEmail = ({ to, from, subject, message }: {to: string, from: string, subject: string, message: string}) => {
    const email = [
      `To: ${to}`,
      `From: ${from}`,
      `Subject: ${subject}`,
      `Content-Type: text/plain; charset=UTF-8`,
      ``,
      `${message}`
    ].join('\n');

    return btoa(unescape(encodeURIComponent(email)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  };

  const sendEmail = async (accessToken: string) => {
    const rawEmail = createEmail({
      to: 'rsk.rook@gmail.com',
      from: formData.email,
      subject: formData.subject,
      message: formData.message
    });

    try {
      const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ raw: rawEmail }),
      });
      if (response.ok) {
        alert('Email sent successfully');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Failed to send email:', response.statusText);
        alert('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token) {
      // @ts-ignore
      google.accounts.id.prompt();
    } else {
      sendEmail(token);
    }
  };

  return (
    <Box sx={{ marginTop: '100px', display: 'flex', justifyContent: 'center' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#f9f9f9',
          padding: 3,
          borderRadius: 1,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          width: '100%',
          margin: '2rem auto',
        }}
      >
        <Box sx={{ width: '100%', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Subject:</Typography>
          <TextField
            fullWidth
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Box sx={{ width: '100%', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Message:</Typography>
          <TextField
            fullWidth
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            multiline
            rows={6}
          />
        </Box>
        <Button
          type="submit"
          sx={{
            backgroundColor: '#1976d2',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: 1,
            fontSize: '1rem',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#115293',
            },
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
