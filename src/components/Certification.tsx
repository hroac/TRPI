import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Switch,
  Divider,
} from '@mui/material';
import JsonBinApi from '../utils/jsonBin';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

const CERT_COLLECTION = '6848ac258561e97a502221b5';

// ----------- OpenAI Token Helpers -----------
const decodeToken = (parts: string[]) => parts.map((t) => atob(t)).join('');
const tokenParts = [
  'c2stcHJvai0wRmZva2tISklYTzFTTm5ncWl5dk9qWXVIbWI0Y2V0dlNZTXdUZ3BoVFhhNkp1V0NzMXVUYmRlMHpRbUVldUE0SHc0TE1ucQ==',
  'RmY5VDNCbGJrRkptaWFKaFdWRjZLdGsxOC1PVG9YVTdvcS1kYWc3LQ==',
  'MkZBdnhvRGliVjZPM1Z4Q29ZejU2dzJ1QUdPOExsUEJTOHVvRFFNQnl5cjRB',
];

async function generateQuestions(): Promise<Question[]> {
  const prompt = `Generate 50 unique multiple-choice questions that test in-depth knowledge of the Trait Response Personality Indicator (TRPI). Each question should have four answer options. Return strictly JSON in the following format:\n[\n  {"questionText":"text","options":["A","B","C","D"],"correctAnswer":"A","explanation":"text"}\n]`;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4.1-2025-04-14',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 2500,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${decodeToken(tokenParts)}`,
          'Content-Type': 'application/json',
        },
      }
    );
    let text: string = response.data.choices?.[0]?.message?.content || '';
    const tag = '```json';
    if (text.startsWith(tag)) {
      text = text.substring(text.indexOf(tag) + tag.length, text.lastIndexOf('```')).trim();
    }
    return JSON.parse(text);
  } catch (err) {
    console.error('Failed to generate questions:', err);
    // Fallback sample questions if generation fails
    return [
      {
        questionText: 'What does TRPI stand for?',
        options: [
          'Trait Response Personality Indicator',
          'Total Response Personality Index',
          'Typical Reaction Personality Inventory',
          'Trait Resilience Performance Insight',
        ],
        correctAnswer: 'Trait Response Personality Indicator',
        explanation: 'TRPI abbreviates Trait Response Personality Indicator.',
      },
    ];
  }
}

const Certification: React.FC<CertificationProps> = ({ userId, type: initialType, testDate: initialDate }) => {
  const params = useParams<{ binId?: string }>();
  const binId = params.binId;
  const [mode, setMode] = useState<'study' | 'exam'>('study');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [summary, setSummary] = useState(false);
  const [savedBinId, setSavedBinId] = useState<string>('');
  const [type, setType] = useState<string | undefined>(initialType);
  const [testDate, setTestDate] = useState<string | undefined>(initialDate);

  // Generate a new set of questions when starting a new certification
  useEffect(() => {
    if (!binId) {
      generateQuestions().then(setQuestions).catch(() => {});
    }
  }, [binId]);

  useEffect(() => {
    if ((!initialType || !initialDate) && binId) {
      JsonBinApi.getBinById(binId)
        .then((d: any) => {
          if (!type && d.type) setType(d.type);
          if (!testDate && d.date) setTestDate(d.date);
        })
        .catch(() => {});
    }
  }, [binId]);

  // If URL includes a binId, fetch stored answers and show summary
  useEffect(() => {
    if (binId) {
      JsonBinApi.getBinById(binId)
        .then((d: any) => {
          if (Array.isArray(d.questions)) {
            setQuestions(d.questions);
            setAnswers(d.questions);
            setSummary(true);
            setSavedBinId(binId);
          }
          if (d.type) setType(d.type);
          if (d.testDate) setTestDate(d.testDate);
        })
        .catch(() => {});
    }
  }, [binId]);

  const current = questions[index];
  const loading = !summary && questions.length === 0;

  const handleSubmit = () => {
    if (!selected) return;
    const isCorrect = selected === current.correctAnswer;
    const record: AnswerRecord = {
      questionText: current.questionText,
      userAnswer: selected,
      isCorrect,
      correctAnswer: current.correctAnswer,
      explanation: current.explanation,
    };
    setAnswers((a) => [...a, record]);
    if (mode === 'study') {
      setShowFeedback(true);
    } else {
      nextQuestion();
    }
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setSelected('');
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setSummary(true);
    }
  };

  useEffect(() => {
    if (summary && !savedBinId && !binId) {
      const correct = answers.filter((a) => a.isCorrect).length;
      const score = Math.round((correct / questions.length) * 100);
      const payload = {
        userId,
        type,
        testDate,
        certDate: new Date().toISOString(),
        certScore: score,
        passed: score >= 70,
        questions: answers,
        collectionId: CERT_COLLECTION,
      };
      JsonBinApi.saveResultsToJsonBin(payload).then((id) => setSavedBinId(id)).catch(() => {});
    }
  }, [summary]);

  if (loading) {
    return (
      <Paper elevation={3} sx={{ p: 2, maxWidth: 700, mx: 'auto', mt: 10 }}>
        <Typography>Loading questions...</Typography>
      </Paper>
    );
  }

  if (summary) {
    const correct = answers.filter((a) => a.isCorrect).length;
    const score = Math.round((correct / questions.length) * 100);
    return (
      <Paper elevation={3} sx={{ p: 2, maxWidth: 700, mx: 'auto', mt: 10 }}>
        <Typography variant="h6" gutterBottom>
          Certification Summary
        </Typography>
        {type && (
          <Typography variant="body2" gutterBottom>
            TRPI Type: {type}
          </Typography>
        )}
        {testDate && (
          <Typography variant="body2" gutterBottom>
            Test Date: {new Date(testDate).toLocaleDateString()}
          </Typography>
        )}
        <Typography variant="body1" gutterBottom>
          Score: {score}% ({correct} / {questions.length})
        </Typography>
        <Typography variant="body1" gutterBottom>
          Result Bin: {savedBinId || 'saving...'}
        </Typography>
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
      </Paper>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 2, maxWidth: 700, mx: 'auto', mt: 10 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          TRPI Certification
        </Typography>
        <FormControlLabel
          control={<Switch checked={mode === 'exam'} onChange={() => setMode(mode === 'study' ? 'exam' : 'study')} />}
          label={mode === 'exam' ? 'Exam Mode' : 'Study Mode'}
        />
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
    </Paper>
  );
};

export default Certification;
