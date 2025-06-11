import React, { useState, useEffect, useRef } from 'react';
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
  CircularProgress,
  Stack,
} from '@mui/material';
import JsonBinApi from '../utils/jsonBin';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import parseRss from '../utils/rss'

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
   const rss = await parseRss('https://medium-rss-three.vercel.app/api/rss');
  const info = `
────────────────────  COMBINED RULEBOOK  ────────────────────
(Authoritative facts drawn from *From Traits to Types* and the core TRPI model.  
Every exam question must rely **only** on these statements.)

1. FUNCTION-PAIRINGs  
   • A cognitive pair = 1 perceiving (S or N) + 1 judging (T or F).  
   • The two functions must carry opposite attitudes (I vs E).  
   • One-sided dominance only: **EIII** or **IEEE**.  
   • Same-attitude pairs or alternating IEIE stacks are invalid.  

2. STRUCTURAL LAYERS (Freud × Jung)  
   • **Id**  = Se / Ne (present, impulse, short-context)  
   • **Super-Id** = Si / Ni (memory / foresight, long-context)  
   • **Ego**  = Ti / Fi (internal logic & value)  
   • **Superego** = Te / Fe (external rules & harmony)

3. 4F TRAIT MAPPING  
   • **Fight**  = Se/Ne + Ti  (action)  
   • **Flight** = Se/Ne + Fi  (avoidance)  
   • **Freeze** = Si/Ni + Te  (control)  
   • **Fawn**   = Si/Ni + Fe  (appeasement)

4. SUFFIX LOGIC  
   • Judger (J): –ST/–NT ⇒ Fight | –SF/–NF ⇒ Flight  
   • Perceiver (P): –ST/–NT ⇒ Freeze | –SF/–NF ⇒ Fawn  
   • A suffix records the opposing Ego (J) or Superego (P).

5. SHORT- vs LONG-CONTEXT PROCESSING  
   • Lead Se, Ne, Te, Fe ⇒ **short-context** (real-time, fluid).  
   • Lead Si, Ni, Ti, Fi ⇒ **long-context** (reflective, crystal).   
   • Switching context length inverts the attitude of the dominant function and reorganises the stack (EIII ⇄ IEEE).

6. META-TRAIT AXES 
   | Axis | Big-Five Poles | Function Polarity | Layer | Processing |  
   | Ego / Fluid | Extraversion ⬆︎  ↔  Neuroticism ⬇︎ | Ti ↔ Fi | Improvisational | Short |  
   | Superego / Crystal | Agreeableness ⬆︎ ↔ Conscientiousness ⬇︎ | Fe ↔ Te | Rule-bound | Long |

7. EIGHT-GEAR PIPELINE  
   Se → Ti/Fi → Si/Ni → Te/Fe → Ne → Ti/Fi → Se → Ti/Fi (continuous).

8. COGNITIVE CLUSTERS   
   • **SF/NT**  ENTP INTJ ISFJ ESFP  
   • **FS/TN**  INTP ENTJ ESFJ ISFP 
   • **ST/NF**  ESTP ISTJ INFJ ENFP   
   • **TS/FN**  ISTP ESTJ ENFJ INFP

9. GROWTH / INDIVIDUATION SEQUENCE  
   Fight→Fawn→Freeze→Flight | Freeze→Flight→Fight→Fawn  
   Fawn→Fight→Flight→Freeze | Flight→Freeze→Fawn→Fight

10. 64-STATE META-GRID (type × suffix)  
   ENTP SiTe SiFe NiTe NiFe  INTJ SeTi SeFi NeTi NeFi  
   ISFJ SeTi SeFi NeTi NeFi  ESFP SiTe SiFe NiTe NiFe  
   INTP TeSi FeSi TeNi FeNi  ENTJ TiSe FiSe TiNe FiNe  
   ESFJ TiSe FiSe TiNe FiNe  ISFP TeSi FeSi TeNi FeNi  
   ESTP SiTe SiFe NiTe NiFe  ISTJ SeTi SeFi NeTi NeFi  
   INFJ SeTi SeFi NeTi NeFi  ENFP SiTe SiFe NiTe NiFe  
   ISTP TeSi FeSi TeNi FeNi  ESTJ TiSe FiSe TiNe FiNe  
   ENFJ TiSe FiSe TiNe FiNe  INFP TeSi FeSi TeNi FeNi

11. EMPIRICAL BENCHMARK (2 916 profiles)  
   • Mean Pearson r = **0.83** (range 0.59 – 0.91) between TRPI type profiles and Big-Five vectors.  
   • r values between 4F modes and type averages were **not** reported.

(Questions that contradict or omit these points are invalid.)
(“For educational purposes only—no diagnostic or therapeutic advice)
`;

  const TRPI = `\n ${info}`
  const prompt = `Generate 50 rigorous multiple-choice questions that test deep knowledge of the Trait Response Personality Indicator (TRPI).

CONTENT DOMAINS  
1. Function-Pairing Law (1 S/N + 1 T/F, opposite attitudes, EIII / IEEE only)  
2. Freud layers (Id, Super-Id, Ego, Superego)  
3. 4F trauma mapping (Fight, Flight, Freeze, Fawn)  
4. Suffix logic (–ST, –SF, –NT, –NF; J vs P rules)  
5. Context-length rule & Eight-Gear Information Pipeline  
6. Meta-traits axis (Ego/Fluid = E↑ N↓, Superego/Crystal = A↑ C↓)  
7. Cognitive clusters (SF/NT, FS/TN, ST/NF, TS/FN)  
8. Individuation / growth sequence (Fight→Fawn→Freeze→Flight, etc.)  
9. 64-state meta-grid & type-cluster relations  
10. Empirical benchmarks (Pearson r ≥ 0.75, mean r = 0.78)  
11. EIII / IEEE stacks vs alternating MBTI stacks  
12. Big-Five ↔ function correlations

DIFFICULTY DISTRIBUTION  
• 20 foundational questions → Domains 1–4  
• 20 intermediate questions → Domains 5–8  
• 10 advanced questions → Domains 9–11

QUESTION REQUIREMENTS  
• Output a **JSON array of 50 objects** only.  
• Each object keys:  
  "questionText"   string  
  "options"        array of **exactly** 4 strings, each prefixed "A) "… "D) "  
  "correctAnswer"  string (repeat the full correct option incl. prefix)  
  "explanation"    ≤ 25 words  
• Exactly one correct option per question.  
• All distractors must be plausible—no obvious throw-aways.  
• No duplicate facts, phrasing, or answer keys.  
• If any item violates the TRPI RULEBOOK, or formatting, discard and regenerate until all 50 comply.

OUTPUT FORMAT  
Return **only** the final JSON array—no markdown, no code fences, no extra commentary.`;


  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'o3-2025-04-16',
        messages: [{role: 'system', content: TRPI},{ role: 'user', content: prompt }],
        temperature: 1,
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
  const ref = useRef(false)
  const navigate = useNavigate();

  useEffect(() => {
    if(mode === 'study') {

    }
  }, [mode])
  // Generate a new set of questions when starting a new certification
  useEffect(() => {
    console.log(ref.current, questions)
    if (!ref.current && !binId) {
      ref.current = true
      
      generateQuestions().then(setQuestions).catch((e:any) => {console.log(e)});

    }
  }, [binId, ref]);

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
    const isCorrect = selected.startsWith(current.correctAnswer);
    const record: AnswerRecord = {
      questionText: current.questionText,
      userAnswer: selected,
      isCorrect,
      correctAnswer: current.correctAnswer,
      explanation: current.explanation,
    };
    console.log(record)
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
      JsonBinApi.saveResultsToJsonBin(payload).then((id) => {
        setSavedBinId(id);
        navigate(`/certification/${id}`)
      }).catch(() => {});
      
    }
  }, [summary]);

  if (loading) {
    return (
      <Paper elevation={3} sx={{ p: 2, maxWidth: 700, mx: 'auto', mt: 10, minHeight: '400px' }}>
       
        <Stack>
           <Box display={'flex'} justifyContent={'center'} mt={16}>
           <Typography variant="h6" gutterBottom>Generating questions...</Typography>
           </Box>
           <Box display={'flex'} justifyContent={'center'} mt={1}>
         <CircularProgress/>
       </Box>
        </Stack>
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
        {answers.map((a, i) => {
          console.log(a,a.isCorrect ? 'Correct' : `Incorrect. Correct answer: ${a.correctAnswer}`)
          return (
          <Box key={i} sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Q{i + 1}. {a.questionText}</Typography>
            <Typography variant="body2">Your answer: {a.userAnswer}</Typography>
            <Typography variant="body2" color={a.isCorrect ? 'success.main' : 'error.main'}>
              {a.isCorrect ? 'Correct' : `Incorrect. Correct answer: ${a.correctAnswer}`}
            </Typography>
            <Typography variant="body2">{a.explanation}</Typography>
          </Box>
        )
        })}
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
          control={<Switch checked={mode === 'exam'} onChange={() => {
            if(mode === 'study') {
              setMode('exam');
              setIndex(0);
              setAnswers([]);
              setQuestions([]);

              generateQuestions().then(setQuestions)
              return;
            }
            setMode('study')
           }} />}
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
          <Typography color={selected.startsWith(current.correctAnswer) ? 'success.main' : 'error.main'}>
            {selected.startsWith(current.correctAnswer) ? 'Correct!' : 'Incorrect.'}
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
