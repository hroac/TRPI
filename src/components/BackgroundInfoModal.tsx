import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Autocomplete,
  FormControlLabel,
  Checkbox,
  Chip,
  Typography
} from '@mui/material';

interface BackgroundInfoModalProps {
  open: boolean;
  onClose: () => void;
}

const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Germany',
  'France',
  'Other'
];

const genders = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];
const ages = ['18-24', '25-34', '35-44', '45-54', '55-64', '65+', 'Prefer not to say'];

const diagnoses = [
  'ADHD',
  'Autism',
  'Depression',
  'Anxiety',
  'OCD',
  'PTSD',
  'Bipolar',
  'Eating Disorder',
  'Personality Disorder',
  'Other',
  'Prefer not to say'
];

const educations = [
  'Less than high school',
  'High school',
  'Some college',
  'Associate degree',
  'Bachelor\'s degree',
  'Master\'s degree',
  'Doctorate',
  'Prefer not to say'
];

const handednessOptions = ['Left', 'Right', 'Ambidextrous', 'Prefer not to say'];
const birthOrders = ['First', 'Middle', 'Last', 'Only', 'Prefer not to say'];

const TabPanel: React.FC<{ index: number; value: number; children?: React.ReactNode }> = ({ index, value, children }) => {
  return (
    <div hidden={value !== index} role="tabpanel">
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
};

const BackgroundInfoModal: React.FC<BackgroundInfoModalProps> = ({ open, onClose }) => {
  const [tab, setTab] = useState(0);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState<string | null>(null);
  const [diagnosis, setDiagnosis] = useState<string[]>([]);
  const [meds, setMeds] = useState(false);
  const [medType, setMedType] = useState('');
  const [iq, setIq] = useState('');
  const [education, setEducation] = useState('');
  const [handedness, setHandedness] = useState('');
  const [languages, setLanguages] = useState<string[]>([]);
  const [birthOrder, setBirthOrder] = useState('');
  const [trauma, setTrauma] = useState(false);
  const [traumaText, setTraumaText] = useState('');
  const [academic, setAcademic] = useState('');

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" scroll="paper">
      <DialogTitle>Background Information</DialogTitle>
      <DialogContent dividers sx={{ maxHeight: '70vh' }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          All responses are optional and used for research only.
        </Typography>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Demographics" />
          <Tab label="Clinical / Diagnosis" />
          <Tab label="Education & Cognitive" />
          <Tab label="Social / Developmental" />
        </Tabs>
        <TabPanel value={tab} index={0}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Gender</InputLabel>
            <Select value={gender} label="Gender" onChange={e => setGender(e.target.value as string)}>
              {genders.map(g => (
                <MenuItem key={g} value={g}>{g}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Age</InputLabel>
            <Select value={age} label="Age" onChange={e => setAge(e.target.value as string)}>
              {ages.map(a => (
                <MenuItem key={a} value={a}>{a}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Autocomplete
            options={countries}
            value={country}
            onChange={(_, v) => setCountry(v)}
            renderInput={(params) => <TextField {...params} label="Country/Region" margin="normal" />}
          />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <FormControl fullWidth margin="normal">
            <InputLabel>DSM-5 Diagnosis</InputLabel>
            <Select
              multiple
              value={diagnosis}
              onChange={e => setDiagnosis(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value as string[])}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {(selected as string[]).map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {diagnoses.map(d => (
                <MenuItem key={d} value={d}>{d}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControlLabel
            control={<Checkbox checked={meds} onChange={e => setMeds(e.target.checked)} />}
            label="Currently taking psychiatric medication"
          />
          {meds && (
            <TextField
              label="Medication type (optional)"
              value={medType}
              onChange={e => setMedType(e.target.value)}
              fullWidth
              margin="normal"
            />
          )}
          <TextField
            label="IQ Score (or 'Don't know')"
            value={iq}
            onChange={e => setIq(e.target.value)}
            fullWidth
            margin="normal"
          />
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Highest education completed</InputLabel>
            <Select value={education} label="Highest education completed" onChange={e => setEducation(e.target.value as string)}>
              {educations.map(ed => (
                <MenuItem key={ed} value={ed}>{ed}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Handedness</InputLabel>
            <Select value={handedness} label="Handedness" onChange={e => setHandedness(e.target.value as string)}>
              {handednessOptions.map(h => (
                <MenuItem key={h} value={h}>{h}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Autocomplete
            multiple
            freeSolo
            options={[] as string[]}
            value={languages}
            onChange={(_, v) => setLanguages(v)}
            renderTags={(value: readonly string[], getTagProps) =>
              value.map((option: string, index: number) => (
                <Chip variant="outlined" label={option} {...getTagProps({ index })} key={option} />
              ))
            }
            renderInput={(params) => <TextField {...params} label="Primary language(s)" margin="normal" />}
          />
        </TabPanel>
        <TabPanel value={tab} index={3}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Birth order</InputLabel>
            <Select value={birthOrder} label="Birth order" onChange={e => setBirthOrder(e.target.value as string)}>
              {birthOrders.map(b => (
                <MenuItem key={b} value={b}>{b}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControlLabel
            control={<Checkbox checked={trauma} onChange={e => setTrauma(e.target.checked)} />}
            label="Experienced childhood adversity/trauma"
          />
          {trauma && (
            <TextField
              label="Details (optional)"
              value={traumaText}
              onChange={e => setTraumaText(e.target.value)}
              fullWidth
              margin="normal"
            />
          )}
          <TextField
            label="Academic performance"
            value={academic}
            onChange={e => setAcademic(e.target.value)}
            fullWidth
            margin="normal"
          />
        </TabPanel>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BackgroundInfoModal;
