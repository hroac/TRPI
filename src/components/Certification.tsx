import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
  CircularProgress,
  Stack,
  Tooltip,
  Tabs,
  Tab,
  IconButton,
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import JsonBinApi from '../utils/jsonBin';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Notification from './Notification';
import ArticleModal from './ArticleModal';
import SlugModal from './slugModal';

// --- Interfaces ---
interface Question {
  questionText: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface AnswerRecord {
  questionText: string;
  userAnswer: string;
  isCorrect: boolean;
  correctAnswer: string;
  explanation: string;
}

interface CertificationProps {
  userId: string;
  type?: string;
  testDate?: string;
}

interface SlugData {
    name: string;
    email: string;
    company?: string;
    jobTitle: string;
    jobDescription?: string;
}

// --- Constants ---
const CERT_COLLECTION = '6848ac258561e97a502221b5';
const TAB_LABELS = ['TRPI', 'Jung', 'Freud', 'Neuroscience', 'Trait Responses', 'Big Five'];


const Certification: React.FC<CertificationProps> = ({ userId, type: initialType, testDate: initialDate }) => {
  const params = useParams<{ binId?: string }>();
  const binId = params.binId;
  
  // --- State ---
  const [questions, setQuestions] = useState<Question[]>([]);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [jungQuestions, setJungQuestions] = useState<Question[]>([]);
  const [freudQuestions, setFreudQuestions] = useState<Question[]>([]);
  const [neuroQuestions, setNeuroQuestions] = useState<Question[]>([]);
  const [traitQuestions, setTraitQuestions] = useState<Question[]>([]);
  const [bigFiveQuestions, setBigFiveQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [summary, setSummary] = useState(false);
  const [error, setError] = useState<string>('');
  const [articleOpen, setArticleOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState<string | undefined>(initialType);
  const [userTestDate, setUserTestDate] = useState<string | undefined>(initialDate);
  const [tab, setTab] = useState(0);
  const [isSlugModalOpen, setIsSlugModalOpen] = useState(false);
  const navigate = useNavigate();

  const generateQuestionsForTopic = useCallback(async (topic: string, count: number): Promise<Question[]> => {
    try {
      const API_URL = 'https://trpicert-production.up.railway.app/api/generate-questions';
      const response = await axios.post(API_URL, { topic, count });
      return response.data;
    } catch (err: any) {
      console.error(`Failed to generate questions for topic "${topic}":`, err);
      const errorMessage = err.response?.data?.details || err.message;
      setError(`Error fetching questions: ${errorMessage}`);
      return [];
    }
  }, []);

  // --- Effects ---
  // Effect 1: Fetches and caches questions for the selected tab if not viewing a result.
  useEffect(() => {
    const fetchAndCache = async () => {
      switch (tab) {
        case 0: if (examQuestions.length === 0) setExamQuestions(await generateQuestionsForTopic('TRPI', 50)); break;
        case 1: if (jungQuestions.length === 0) setJungQuestions(await generateQuestionsForTopic('Jung', 20)); break;
        case 2: if (freudQuestions.length === 0) setFreudQuestions(await generateQuestionsForTopic('Freud', 20)); break;
        case 3: if (neuroQuestions.length === 0) setNeuroQuestions(await generateQuestionsForTopic('Neuroscience', 20)); break;
        case 4: if (traitQuestions.length === 0) setTraitQuestions(await generateQuestionsForTopic('Trait Responses', 20)); break;
        case 5: if (bigFiveQuestions.length === 0) setBigFiveQuestions(await generateQuestionsForTopic('Big Five', 20)); break;
        default: break;
      }
    };
    if (!binId) fetchAndCache();
  }, [tab, binId, generateQuestionsForTopic, examQuestions.length, jungQuestions.length, freudQuestions.length, neuroQuestions.length, traitQuestions.length, bigFiveQuestions.length]);

  // Effect 2: Displays the correct questions and resets UI state.
  useEffect(() => {
    if (!summary) {
      setIndex(0);
      setSelected('');
      setShowFeedback(false);
      setAnswers([]);
    }
    switch (tab) {
      case 0: setQuestions(examQuestions); break;
      case 1: setQuestions(jungQuestions); break;
      case 2: setQuestions(freudQuestions); break;
      case 3: setQuestions(neuroQuestions); break;
      case 4: setQuestions(traitQuestions); break;
      case 5: setQuestions(bigFiveQuestions); break;
      default: setQuestions([]); break;
    }
  }, [tab, summary, examQuestions, jungQuestions, freudQuestions, neuroQuestions, traitQuestions, bigFiveQuestions]);

  // Effect 3: Fetches saved result from a binId in the URL.
  useEffect(() => {
    if (binId) {
      JsonBinApi.getBinById(binId).then((d: any) => {
        if (d && Array.isArray(d.questions)) {
          setSummary(true);
          setExamQuestions(d.questions);
          setAnswers(d.questions);
          if (d.name) setUserName(d.name);
          if (d.type) setUserType(d.type);
          if (d.testDate) setUserTestDate(d.testDate);
        } else {
            setError("Could not load certification results from this link.")
        }
      }).catch(() => {
          setError("Failed to fetch certification data.")
      });
    }
  }, [binId]);

  // --- Handlers ---
  const handleSubmit = () => {
    if (!selected || !current) return;
    const isCorrect = selected === current.correctAnswer;
    const record: AnswerRecord = {
      questionText: current.questionText, userAnswer: selected, isCorrect,
      correctAnswer: current.correctAnswer, explanation: current.explanation,
    };
    setAnswers((a) => [...a, record]);
    if (tab === 0) {
      nextQuestion();
    } else {
      setShowFeedback(true);
    }
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setSelected('');
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setIsSlugModalOpen(true);
    }
  };

  const handleSlugSubmit = (slugData: SlugData) => {
    const correct = answers.filter((a) => a.isCorrect).length;
    const score = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;
    
    const payload = {
      ...slugData,
      userId,
      type: initialType,
      testDate: initialDate,
      certDate: new Date().toISOString(),
      certScore: score,
      passed: score >= 70,
      questions: answers,
      collectionId: CERT_COLLECTION,
      quizType: TAB_LABELS[tab]
    };

    setIsSlugModalOpen(false);
    JsonBinApi.saveResultsToJsonBin(payload).then((id) => {
      navigate(`/certification/${id}`);
    }).catch(() => {
      setError('Failed to save your results. Please try again.');
    });
  };

  // --- Render Logic ---
  const current = questions[index];
  const loading = !summary && !binId && questions.length === 0;

  let inner: React.ReactNode;

  if (loading) {
    inner = (
      <Stack>
        <Box display={'flex'} justifyContent={'center'} position={'relative'} bottom={140} mt={16}>
          <Typography variant="h6" gutterBottom>Generating questions...</Typography>
        </Box>
        <Box display={'flex'} justifyContent={'center'} position={'relative'} bottom={80} mt={1}>
          <Tooltip title={'Be patient! Loading the questions can take a moment.'}>
            <CircularProgress />
          </Tooltip>
        </Box>
      </Stack>
    );
  } else if (summary) {
    const correct = answers.filter((a) => a.isCorrect).length;
    const totalQuestions = answers.length;
    const score = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0;
    inner = (
      <Box>
        <Typography variant="h6" gutterBottom>Certification Summary</Typography>
        {userName && <Typography variant="body2" gutterBottom>Name: {userName}</Typography>}
        {userType && <Typography variant="body2" gutterBottom>TRPI Type: {userType}</Typography>}
        {userTestDate && <Typography variant="body2" gutterBottom>Test Date: {new Date(userTestDate).toLocaleDateString()}</Typography>}
        <Typography variant="body1" gutterBottom>Score: {score}% ({correct} / {totalQuestions})</Typography>
        <Divider sx={{ my: 2 }} />
        {answers.map((a, i) => (
          <Box key={i} sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Q{i + 1}. {a.questionText}</Typography>
            <Typography variant="body2">Your answer: {a.userAnswer}</Typography>
            <Typography variant="body2" color={a.isCorrect ? 'success.main' : 'error.main'}>
              {a.isCorrect ? 'Correct' : `Incorrect. Correct answer: ${a.correctAnswer}`}
            </Typography>
            <Typography variant="body2">{a.explanation}</Typography>
          </Box>
        ))}
      </Box>
    );
  } else if (current && Array.isArray(current.options)) {
    inner = (
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {tab === 0 ? 'TRPI Certification' : `Study: ${TAB_LABELS[tab]}`}
          </Typography>
          <IconButton onClick={() => setArticleOpen(true)} sx={{ mr: 1 }}>
            <ArticleIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="subtitle1" gutterBottom>
          Question {index + 1} of {questions.length}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {current.questionText}
        </Typography>
        <RadioGroup value={selected} onChange={(e) => setSelected(e.target.value)}>
          {current.options.map((o) => (
            <FormControlLabel key={o} value={o} control={<Radio />} label={o} />
          ))}
        </RadioGroup>
        {showFeedback && (
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography color={selected === current.correctAnswer ? 'success.main' : 'error.main'}>
              {selected === current.correctAnswer ? 'Correct!' : 'Incorrect.'}
            </Typography>
            <Typography variant="body2">{current.explanation}</Typography>
          </Box>
        )}
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" onClick={showFeedback ? nextQuestion : handleSubmit} disabled={!selected}>
            {showFeedback ? (index + 1 === questions.length ? 'Finish' : 'Next') : 'Submit'}
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 2, maxWidth: 700, mx: 'auto', mt: 10 }}>
      {!binId && (
        <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2 }} variant="scrollable" scrollButtons="auto" >
          {TAB_LABELS.map((l, i) => <Tab key={i} label={l} />)}
        </Tabs>
      )}
      {inner}
      <ArticleModal open={articleOpen} onClose={() => setArticleOpen(false)} />
      <SlugModal
        open={isSlugModalOpen}
        onClose={() => setIsSlugModalOpen(false)}
        onSubmit={handleSlugSubmit}
      />
       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginY: 3, minHeight: '50px' }}>
        <Notification open={error !== ''} message={error} type="error" onClose={() => setError('')} />
      </Box>
    </Paper>
  );
};

export default Certification;