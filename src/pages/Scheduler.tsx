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
  email: string;
  accessToken: string;
}

const ADMIN_CALENDAR_ID = 'rsk.rook@gmail.com';
const GOOGLE_CLIENT_ID = '356497060674-ndjka8l1iod2obja36djpah0fckmaot9.apps.googleusercontent.com';
const RATE_PER_INTERVAL = 29.95; // per 30 minutes

const Scheduler: React.FC = () => {
  const theme = useTheme();

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [newAppointment, setNewAppointment] = useState<NewAppointment>({
    date: '',
    startTime: '',
    endTime: '',
    title: '',
    description: '',
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingAppointment, setPendingAppointment] = useState<NewAppointment | null>(null);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [premiumModalOpen, setPremiumModalOpen] = useState(false);
  const calendarRef = useRef<FullCalendar>(null);

  let computedPrice = 0;
  if (newAppointment.date && newAppointment.startTime && newAppointment.endTime) {
    const start = new Date(`${newAppointment.date}T${newAppointment.startTime}:00`);
    const end = new Date(`${newAppointment.date}T${newAppointment.endTime}:00`);
    const durationMinutes = (end.getTime() - start.getTime()) / 60000;
    const intervals = Math.ceil(durationMinutes / 30);
    computedPrice = intervals * RATE_PER_INTERVAL;
  }

  // ----------------------------
  // Google Calendar API Integration
  // ----------------------------
  const createGoogleCalendarEvent = async (appointment: NewAppointment, calendarId: string) => {
    if (!currentUser) return;
    const startISO = new Date(`${appointment.date}T${appointment.startTime}:00`).toISOString();
    const endISO = new Date(`${appointment.date}T${appointment.endTime}:00`).toISOString();
    const event = {
      summary: appointment.title || 'New Appointment',
      description: appointment.description,
      start: { dateTime: startISO },
      end: { dateTime: endISO },
    };

    try {
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${currentUser.accessToken}`,
          },
          body: JSON.stringify(event),
        }
      );
      if (!response.ok) {
        console.error('Error creating event in calendar', calendarId, await response.text());
      }
    } catch (error) {
      console.error('Error creating Google Calendar event:', error);
    }
  };

  const fetchPrimaryCalendarEvents = useCallback(async () => {
    if (!currentUser) return;
    try {
      const timeMin = new Date().toISOString();
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${encodeURIComponent(
          timeMin
        )}&singleEvents=true&orderBy=startTime`,
        {
          headers: { Authorization: `Bearer ${currentUser.accessToken}` },
        }
      );
      const data = await response.json();
      if (data.items) {
        const events: Appointment[] = data.items.map((event: any) => ({
          id: event.id,
          start: event.start.dateTime || event.start.date,
          end: event.end.dateTime || event.end.date,
          title: event.summary || 'No Title',
          description: event.description || '',
          ownerEmail: currentUser.email,
        }));
        setAppointments((prev) => {
          const combined = [...prev];
          events.forEach((ev) => {
            if (!combined.find((e) => e.id === ev.id)) {
              combined.push(ev);
            }
          });
          return combined;
        });
      }
    } catch (error) {
      console.error('Error fetching primary calendar events:', error);
    }
  }, [currentUser]);

  const fetchAdminCalendarEvents = useCallback(async () => {
    if (!currentUser) return;
    try {
      const timeMin = new Date().toISOString();
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
          ADMIN_CALENDAR_ID
        )}/events?timeMin=${encodeURIComponent(timeMin)}&singleEvents=true&orderBy=startTime`,
        {
          headers: { Authorization: `Bearer ${currentUser.accessToken}` },
        }
      );
      const data = await response.json();
      if (data.items) {
        const events: Appointment[] = data.items.map((event: any) => ({
          id: event.id,
          start: event.start.dateTime || event.start.date,
          end: event.end.dateTime || event.end.date,
          title: event.summary || 'No Title',
          description: event.description || '',
          ownerEmail: ADMIN_CALENDAR_ID,
        }));
        setAppointments((prev) => {
          const combined = [...prev];
          events.forEach((ev) => {
            if (!combined.find((e) => e.id === ev.id)) {
              combined.push(ev);
            }
          });
          return combined;
        });
      }
    } catch (error) {
      console.error('Error fetching admin calendar events:', error);
    }
  }, [currentUser]);

  // ----------------------------
  // FullCalendar Handlers
  // ----------------------------
  const handleDateSelect = (selectInfo: any) => {
    if (!currentUser) {
      alert('Please log in with Google first.');
      return;
    }
    const startDT = new Date(selectInfo.startStr);
    const dateString = startDT.toISOString().split('T')[0];
    setNewAppointment({
      date: dateString,
      startTime: startDT.toTimeString().slice(0, 5),
      endTime: new Date(selectInfo.endStr).toTimeString().slice(0, 5),
      title: '',
      description: '',
    });
    setModalOpen(true);
  };

  const handleEventClick = (clickInfo: any) => {
    const event = clickInfo.event;
    const appointment: Appointment = event.extendedProps.appointment;
    alert(`Appointment Details:\n${appointment.description}`);
  };

  // ----------------------------
  // Appointment & Payment Handlers
  // ----------------------------
  const handleRequestAppointment = () => {
    if (!currentUser) return;
    setPendingAppointment(newAppointment);
    setPremiumModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    if (pendingAppointment && currentUser) {
      createGoogleCalendarEvent(pendingAppointment, ADMIN_CALENDAR_ID);
      createGoogleCalendarEvent(pendingAppointment, 'primary');
      setPendingAppointment(null);
      setModalOpen(false);
    }
    setPremiumModalOpen(false);
    alert('Payment successful! Your appointment has been created in both calendars.');
  };

  const calendarEvents = appointments.map((appt) => ({
    id: appt.id,
    title: appt.title,
    start: appt.start,
    end: appt.end,
    extendedProps: { appointment: appt },
  }));

  useEffect(() => {
    if (currentUser) {
      fetchAdminCalendarEvents();
    }
  }, [currentUser, fetchAdminCalendarEvents]);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <ThemeProvider theme={theme}>
        <style>
          {`
            .fc .fc-button {
              background-color: ${theme.palette.primary.main} !important;
              border-color: ${theme.palette.primary.main} !important;
              color: ${theme.palette.primary.contrastText} !important;
            }
            .fc .fc-button:hover {
              background-color: ${theme.palette.secondary.main} !important;
              border-color: ${theme.palette.secondary.main} !important;
            }
            .fc .fc-button:focus {
              box-shadow: 0 0 0 2px ${theme.palette.secondary.light} !important;
            }
          `}
        </style>
        <Box sx={{ p: 2 }}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Scheduler
          </Typography>

          {!currentUser && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <GoogleAuthButton
                onSuccess={(user: any) => {
                  setCurrentUser(user);
                  setTimeout(() => {
                    fetchPrimaryCalendarEvents();
                    fetchAdminCalendarEvents();
                  }, 1000);
                }}
              />
            </Box>
          )}

          {currentUser && (
            <Typography variant="subtitle1" textAlign="center">
              Logged in as: {currentUser.email}
            </Typography>
          )}

          <Box sx={{ mt: 3 }}>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
              initialView="dayGridMonth"
              selectable={true}
              selectMirror={true}
              events={calendarEvents}
              select={handleDateSelect}
              eventClick={handleEventClick}
              ref={calendarRef}
              height="auto"
            />
          </Box>

          <Dialog open={modalOpen} onClose={() => setModalOpen(false)} fullWidth>
            <DialogTitle>New Appointment</DialogTitle>
            <DialogContent>
              {newAppointment.date && (
                <Typography variant="subtitle1" gutterBottom>
                  Date: {newAppointment.date}
                </Typography>
              )}
              {newAppointment.startTime && newAppointment.endTime && (
                <Typography variant="subtitle1" gutterBottom>
                  Selected Time: {newAppointment.startTime} - {newAppointment.endTime}
                </Typography>
              )}
              {newAppointment.date && newAppointment.startTime && newAppointment.endTime && (
                <Typography variant="subtitle2" gutterBottom>
                  Total Price: {computedPrice.toFixed(2)} (29,95 per 30 minutes)
                </Typography>
              )}
              <TextField
                label="Title"
                fullWidth
                margin="normal"
                value={newAppointment.title}
                onChange={(e) =>
                  setNewAppointment(prev => ({ ...prev, title: e.target.value }))
                }
              />
              <TextField
                label="Start Time"
                type="time"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                inputProps={{ step: 1800 }}
                value={newAppointment.startTime}
                onChange={(e) =>
                  setNewAppointment(prev => ({ ...prev, startTime: e.target.value }))
                }
              />
              <TextField
                label="End Time"
                type="time"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                inputProps={{ step: 1800 }}
                value={newAppointment.endTime}
                onChange={(e) =>
                  setNewAppointment(prev => ({ ...prev, endTime: e.target.value }))
                }
              />
              <TextField
                label="Description"
                fullWidth
                margin="normal"
                multiline
                rows={3}
                value={newAppointment.description}
                onChange={(e) =>
                  setNewAppointment(prev => ({ ...prev, description: e.target.value }))
                }
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={handleRequestAppointment}>
                Create Appointment (Cost: {computedPrice.toFixed(2)})
              </Button>
            </DialogActions>
          </Dialog>

          <PremiumModal
            open={premiumModalOpen}
            onClose={() => setPremiumModalOpen(false)}
            title="Appointment Payment Required"
            description={`Creating this appointment costs ${computedPrice.toFixed(2)}. Please complete your payment to continue.`}
            price={computedPrice}
            handlePaymentSuccess={handlePaymentSuccess}
          />
        </Box>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
};

export default Scheduler;
