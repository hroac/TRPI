import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import PremiumModal from '../components/PremiumModal';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleAuthButton from '../components/GoogleAuth';

interface Appointment {
  id: string;
  start: string; // ISO string
  end: string;   // ISO string
  title: string;
  description: string;
  ownerEmail: string;
}

interface NewAppointment {
  date: string;      // "YYYY-MM-DD"
  startTime: string; // "HH:mm"
  endTime: string;   // "HH:mm"
  title: string;
  description: string;
}

interface CurrentUser {
  accessToken: string;
  email: string;
}

const ADMIN_CALENDAR_ID = 'ef73ae9e24c750cf5e83feb07ebc16925838a98d256e54bc92c2133bf5da73d7@group.calendar.google.com';
const GOOGLE_API_KEY = 'AIzaSyAZ-EFU0pZBUEYdcvT_vnu8_TDpjsWtGG0';
const GOOGLE_CLIENT_ID = '356497060674-ndjka8l1iod2obja36djpah0fckmaot9.apps.googleusercontent.com';
const RATE_PER_INTERVAL = 0; // per 30 minutes

const Calendar: React.FC = () => {
  const theme = useTheme();

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [newAppointment, setNewAppointment] = useState<NewAppointment>({ date: '', startTime: '', endTime: '', title: '', description: '' });
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingAppointment, setPendingAppointment] = useState<NewAppointment | null>(null);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [premiumModalOpen, setPremiumModalOpen] = useState(false);
  const calendarRef = useRef<FullCalendar>(null);
  const fetchedAdminEvents = useRef(false);
  const price = useRef(0);

  useEffect(() => {
  let computedPrice = 0;
  if (newAppointment.date && newAppointment.startTime && newAppointment.endTime) {
    const start = new Date(`${newAppointment.date}T${newAppointment.startTime}:00`);
    const end = new Date(`${newAppointment.date}T${newAppointment.endTime}:00`);
    const durationMinutes = (end.getTime() - start.getTime()) / 60000;
    const intervals = Math.ceil(durationMinutes / 30);
    computedPrice = Math.max(intervals * RATE_PER_INTERVAL, RATE_PER_INTERVAL);
    price.current = computedPrice;
  }
  }, [newAppointment])

  // Calculate price
  

  // Fetch userinfo (email) via Google OAuth2
  const fetchUserInfo = async (token: string) => {
    try {
      const resp = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await resp.json();
      return data.email as string;
    } catch (err) {
      console.error('Failed to fetch user info:', err);
      return '';
    }
  };

  // ----------------------------
  // Google Calendar API Integration
  // ----------------------------
  const createGoogleCalendarEvent = async (appointment: NewAppointment, calendarId: string) => {
    if (!currentUser) return;
    const startISO = new Date(`${appointment.date}T${appointment.startTime}:00`).toISOString();
    const endISO = new Date(`${appointment.date}T${appointment.endTime}:00`).toISOString();
    const event = { summary: appointment.title || 'New Appointment', description: appointment.description, start: { dateTime: startISO }, end: { dateTime: endISO } };

    try {
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${currentUser.accessToken}` },
          body: JSON.stringify(event),
        }
      );
      if (!response.ok) console.error('Error creating event:', await response.text());
    } catch (error) {
      console.error('Error creating Google Calendar event:', error);
    }
  };

  const fetchEvents = useCallback(
    async (calendarId: string, ownerEmail: string) => {
      if (!currentUser) return;
      try {
        const timeMin = new Date().toISOString();
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?timeMin=${encodeURIComponent(
            timeMin
          )}&singleEvents=true&orderBy=startTime`,
          { headers: { Authorization: `Bearer ${currentUser.accessToken}` } }
        );
        const data = await response.json();
        if (data.items) {
          const events = data.items.map((event: any) => ({
            id: event.id,
            start: event.start.dateTime || event.start.date,
            end: event.end.dateTime || event.end.date,
            title: event.summary || 'No Title',
            description: event.description || '',
            ownerEmail,
          }));
          setAppointments(prev => {
            const combined = [...prev];
            events.forEach((ev: any) => { if (!combined.find(e => e.id === ev.id)) combined.push(ev); });
            return combined;
          });
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    },
    [currentUser]
  );

   const fetchAdminEvents = async () => {
    const timeMin = new Date().toISOString();
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
      ADMIN_CALENDAR_ID
    )}/events?key=${GOOGLE_API_KEY}` +
      `&timeMin=${encodeURIComponent(timeMin)}` +
      `&singleEvents=true&orderBy=startTime`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.items) {
        const adminEvents: Appointment[] = data.items.map((e: any) => ({
          id: e.id,
          start: e.start.dateTime || e.start.date,
          end: e.end.dateTime || e.end.date,
          title: e.summary || 'No title',
          description: e.description || '',
          ownerEmail: ADMIN_CALENDAR_ID,
        }));
        setAppointments((prev) => {
          // merge without duplicates
          const merged = [...prev];
          adminEvents.forEach((evt) => {
            if (!merged.find((a) => a.id === evt.id)) merged.push(evt);
          });
          return merged;
        });
      }
    } catch (err) {
      console.error('Error fetching admin calendar:', err);
    }
  };

  // ----------------------------
  // Effects to fetch on login
  // ----------------------------
  useEffect(() => {
    if (currentUser) {
      fetchEvents('primary', currentUser.email);
    }
  }, [currentUser, fetchEvents]);

    useEffect(() => {
    if (fetchedAdminEvents.current) return;
    fetchedAdminEvents.current = true;
    fetchAdminEvents();
  }, []);
  // ----------------------------
  // FullCalendar Handlers
  // ----------------------------
  const handleDateSelect = (selectInfo: any) => {
    if (!currentUser) return alert('Please sign in with Google first.');
    const startDT = new Date(selectInfo.startStr);
    setNewAppointment({
      date: startDT.toISOString().split('T')[0],
      startTime: startDT.toTimeString().slice(0, 5),
      endTime: new Date(selectInfo.endStr).toTimeString().slice(0, 5),
      title: '',
      description: '',
    });
    setModalOpen(true);
  };

  const handleEventClick = (info: any) => {
    const appt: Appointment = info.event.extendedProps.appointment;
    console.log(appt)
    alert(`Appointment Details:\n${appt.description}`);
  };

  const handleRequestAppointment = async () => {
    if (!currentUser) {
      alert('Please sign in with Google first.');
      return;
    }
    setPendingAppointment(newAppointment);
    if(price.current) {
    setPremiumModalOpen(true);
    } else if (pendingAppointment && currentUser) {
      await createGoogleCalendarEvent(pendingAppointment, ADMIN_CALENDAR_ID);
      await createGoogleCalendarEvent(pendingAppointment, 'primary');
      await fetchAdminEvents();
      await fetchEvents('primary', currentUser.email)
      setPendingAppointment(null);
      setModalOpen(false);
    }
    setPremiumModalOpen(false);
    alert('Your appointment has been created.');
    };

  const handlePaymentSuccess = () => {
    if (pendingAppointment && currentUser) {
      createGoogleCalendarEvent(pendingAppointment, ADMIN_CALENDAR_ID);
      createGoogleCalendarEvent(pendingAppointment, 'primary');
      setPendingAppointment(null);
      setModalOpen(false);
    }
    setPremiumModalOpen(false);
    alert('Payment successful! Your appointment is created.');
  };

  const calendarEvents = appointments.map(appt => ({ id: appt.id, title: appt.title, start: appt.start, end: appt.end, extendedProps: { appointment: appt } }));

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <ThemeProvider theme={theme}>
        <style>{`
          .fc .fc-button { background-color: ${theme.palette.primary.main} !important; border-color: ${theme.palette.primary.main} !important; color: ${theme.palette.primary.contrastText} !important; }
          .fc .fc-button:hover { background-color: ${theme.palette.secondary.main} !important; border-color: ${theme.palette.secondary.main} !important; }
          .fc .fc-button:focus { box-shadow: 0 0 0 2px ${theme.palette.secondary.light} !important; }
        `}</style>

        <Box sx={{ p: 2 }}>
          <Typography variant="h4" align="center" gutterBottom>Calendar</Typography>


          {currentUser && (
            <Typography variant="subtitle1" align="center">Logged in as: {currentUser.email}</Typography>
          )}


         <Box mt={3} pt={1}>
            {!currentUser && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <GoogleAuthButton onSuccess={async (tokenResponse: any) => {
                const email = await fetchUserInfo(tokenResponse.access_token);
                setCurrentUser({ accessToken: tokenResponse.access_token, email });
              }} />
            </Box>
          )}
         </Box>

          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{ left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridWeek,timeGridDay' }}
            initialView="dayGridMonth"
            selectable
            selectMirror
            events={calendarEvents}
            select={handleDateSelect}
            eventClick={handleEventClick}
            ref={calendarRef}
            height="auto"
          />


          <Dialog open={modalOpen} onClose={() => setModalOpen(false)} fullWidth>
            <DialogTitle>New Appointment</DialogTitle>
            <DialogContent>
              <Typography variant="subtitle1">Date: {newAppointment.date}</Typography>
              <Typography variant="subtitle1">Time: {newAppointment.startTime} - {newAppointment.endTime}</Typography>
              <Typography variant="subtitle2" gutterBottom>Total Price: {price.current.toFixed(2)} EUR</Typography>

              <TextField label="Title" fullWidth margin="normal" value={newAppointment.title} onChange={e => setNewAppointment(prev => ({ ...prev, title: e.target.value }))} />
              <TextField label="Start Time" type="time" fullWidth margin="normal" InputLabelProps={{ shrink: true }} inputProps={{ step: 1800 }} value={newAppointment.startTime} onChange={e => setNewAppointment(prev => ({ ...prev, startTime: e.target.value }))} />
              <TextField label="End Time" type="time" fullWidth margin="normal" InputLabelProps={{ shrink: true }} inputProps={{ step: 1800 }} value={newAppointment.endTime} onChange={e => setNewAppointment(prev => ({ ...prev, endTime: e.target.value }))} />
              <TextField label="Description" fullWidth margin="normal" multiline rows={3} value={newAppointment.description} onChange={e => setNewAppointment(prev => ({ ...prev, description: e.target.value }))} />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={handleRequestAppointment}>Create Appointment (Cost: {price.current.toFixed(2)})</Button>
            </DialogActions>
          </Dialog>

          <PremiumModal
            open={premiumModalOpen}
            onClose={() => setPremiumModalOpen(false)}
            title="Appointment Payment Required"
            description={`Creating this appointment costs €${price.current.toFixed(2)}.`}
            price={price.current}
            handlePaymentSuccess={handlePaymentSuccess}
          />
        </Box>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
};

export default Calendar;
