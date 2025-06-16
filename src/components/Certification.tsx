import React, { useState, useEffect, useRef } from 'react';
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
import NameModal from './NameModal';

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
const TAB_LABELS = ['Exams', 'Jung', 'Freud', 'Neuroscience', 'Trait Responses', 'Big Five'];

// ----------- OpenAI Token Helpers -----------
const decodeToken = (parts: string[]) => parts.map((t) => atob(t)).join('');
const tokenParts = [
  'c2stcHJvai0wRmZva2tISklYTzFTTm5ncWl5dk9qWXVIbWI0Y2V0dlNZTXdUZ3BoVFhhNkp1V0NzMXVUYmRlMHpRbUVldUE0SHc0TE1ucQ==',
  'RmY5VDNCbGJrRkptaWFKaFdWRjZLdGsxOC1PVG9YVTdvcS1kYWc3LQ==',
  'MkZBdnhvRGliVjZPM1Z4Q29ZejU2dzJ1QUdPOExsUEJTOHVvRFFNQnl5cjRB',
];



const Certification: React.FC<CertificationProps> = ({ userId, type: initialType, testDate: initialDate }) => {
  const params = useParams<{ binId?: string }>();
  const binId = params.binId;
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
  const [savedBinId, setSavedBinId] = useState<string>('');
  const [type, setType] = useState<string | undefined>(initialType);
  const [testDate, setTestDate] = useState<string | undefined>(initialDate);
  const [error, setError] = useState<string> ('');
  const [articleOpen, setArticleOpen] = useState(false);
  const [nameModalOpen, setNameModalOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [tab, setTab] = useState(0);
  const ref = useRef(false)
  const navigate = useNavigate();
  // Generate a new set of questions when starting a new certification
  useEffect(() => {
    if (!ref.current && !binId) {
      ref.current = true;
      generateQuestions().then((qs) => {
        setExamQuestions(qs);
        setQuestions(qs);
      }).catch(() => {});
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

  // Load questions when switching tabs
  useEffect(() => {
    setIndex(0);
    setSelected('');
    setShowFeedback(false);
    setSummary(false);
    setAnswers([]);

    if (tab === 0) {
      if (examQuestions.length) {
        setQuestions(examQuestions);
      } else {
        generateQuestions().then((qs) => {
          setExamQuestions(qs);
          setQuestions(qs);
        }).catch(() => {});
      }
    } else if (tab === 1) {
      if (jungQuestions.length) {
        setQuestions(jungQuestions);
      } else {
        generateJungQuestions().then((qs) => {
          setJungQuestions(qs);
          setQuestions(qs);
        }).catch(() => {});
      }
    } else if (tab === 2) {
      if (freudQuestions.length) {
        setQuestions(freudQuestions);
      } else {
        generateFreudQuestions().then((qs) => {
          setFreudQuestions(qs);
          setQuestions(qs);
        }).catch(() => {});
      }
    } else if (tab === 3) {
      if (neuroQuestions.length) {
        setQuestions(neuroQuestions);
      } else {
        generateNeuroQuestions().then((qs) => {
          setNeuroQuestions(qs);
          setQuestions(qs);
        }).catch(() => {});
      }
    } else if (tab === 4) {
      if (traitQuestions.length) {
        setQuestions(traitQuestions);
      } else {
        generateTraitQuestions().then((qs) => {
          setTraitQuestions(qs);
          setQuestions(qs);
        }).catch(() => {});
      }
    } else if (tab === 5) {
      if (bigFiveQuestions.length) {
        setQuestions(bigFiveQuestions);
      } else {
        generateBigFiveQuestions().then((qs) => {
          setBigFiveQuestions(qs);
          setQuestions(qs);
        }).catch(() => {});
      }
    }
  }, [tab]);

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

  async function generateQuestions(): Promise<Question[]> {
  const info = `
────────────────────  COMBINED RULEBOOK  ────────────────────
(Authoritative facts drawn from *From Traits to Types* and the core TRPI model.  
Every exam question must rely **only** on these statements.)

1. FUNCTION-PAIRINGS
   • A cognitive pair = 1 perceiving (S or N) + 1 judging (T or F).  
   • The two functions must carry opposite attitudes (I vs E).  
   • One-sided dominance only: **EIII** or **IEEE**.  
   • Same-attitude pairs or alternating IEIE stacks are invalid. 
   • A pairing can either be open minded (eg SiTe) or close minded (eg TeSi). 

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
   • The opposing Ego/Superego can either be open minded (leading with a perceiving function eg NeTi) or close minded (leading with a judging function eg TiNe).
   • A 4F mode has two suffixes attached to it, eg for perceivers who experience Freeze it can be -ST or -NT, for a judger experiencing Fight it can be -ST or -NT, for a perceiver experiencing Fawn it can be -SF or -NF, for a judger experiencing Flight it can be -SF or -NF.
   • The dominant response is dependant on context, however you are likely to prefer your base response (eg for ENTP-NT its Fight then Freeze)
5. SHORT- vs LONG-CONTEXT PROCESSING  
   • Lead Se, Ne, Te, Fe ⇒ **short-context** (real-time, fluid).  
   • Lead Si, Ni, Ti, Fi ⇒ **long-context** (reflective, crystal).   
   • Switching context length inverts the attitude of the dominant function and reorganises the stack (EIII ⇄ IEEE).

6. META-TRAIT AXES 
   | Axis | Big-Five Poles | Function Polarity | Layer | Processing |  
   | Ego / Fluid Intelligence | Extraversion  ↔  Neuroticism  | Ti ↔ Fi | Improvisational | Short |  
   | Superego / Crystallized Intelligence | Agreeableness  ↔ Conscientiousness  | Fe ↔ Te | Rule-bound | Long |

7. Function definition & interaction
    rely on Jungs original definitions of the functions
    observation = objective
    impression = subjective
  • Se + Fi/Ti creates an impression (Si)
  • Si + Fe/Te creates an observation (Se)
  • Ne + Fi/Ti creates an impression (Si)
  • Ni + Fe/Te creates an observation (Se)

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
  const prompt = `Generate 50 rigorous multiple-choice questions that test deep knowledge of the Trait Response Personality Indicator (TRPI) and the Big Five correlations.

CONTENT DOMAINS  
1. Function-Pairings (1 S/N + 1 T/F, opposite attitudes, EIII / IEEE only)  
2. Freud layers (Id, Super-Id, Ego, Superego)  
3. 4F trauma mapping (Fight, Flight, Freeze, Fawn)  
4. Suffix logic (–ST, –SF, –NT, –NF; J vs P rules)  
5. Context-length rule & Eight-Gear Information Pipeline  
6. Meta-traits axis (Ego/Fluid = E↑ N↓, Superego/Crystal = A↑ C↓)  
7. Cognitive clusters (SF/NT, FS/TN, ST/NF, TS/FN)  
8. Individuation / growth sequence (Fight→Fawn→Freeze→Flight, etc.)  
9. 64-state meta-grid & type-cluster relations  
10. Empirical benchmarks (Pearson, mean r = 0.83)  
11. EIII / IEEE stacks vs alternating MBTI stacks  
12. Big-Five ↔ function correlations

DIFFICULTY DISTRIBUTION  
• 15 foundational questions → Domains 1–4  
• 15 intermediate questions → Domains 5–8  
• 20 advanced questions → Domains 9–12

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
• Double check that the other options are not also valid answers, if so discard them and regenerate.  
• If any item violates the TRPI RULEBOOK, or formatting, discard and regenerate until all 50 comply.

EXAMPLES:
When moving from long- to short-context processing, the dominant function becomes…
A) medium context
B) shorter context
C) short context
D) immediate context

After inverting attitudes from EIII, what attitude does the dominant function assume?
  A) Introverted
  B) Ambiverted
  C) Extraverted
  D) Both

  On the Ego/Fluid meta-trait axis, which of the following statements is true?
  A) Neuroticism ⬇︎ Extraversion ⬆︎
  B) Conscientiousness ⬇︎ Neuroticism ⬆︎
  C) Extraversion ⬇︎ Agreeableness ⬆︎
  D) Neuroticism ⬇︎ Conscientiousness ⬆︎
  
  Which suffix can label a Perceiver demonstrating a Fawn response?
  A) ST
  B) NJ
  C) FJ
  D) SF

  For a Perceiver in Freeze mode, which suffix is allowable under TRPI
  A) SF
  B) TJ
  C) NF
  D) ST

  Which suffix is NOT permitted for a Judger experiencing Flight according to TRPI rules?
  A) NT
  B) FP
  C) NF
  D) ST

  Complete this sequence: Freeze ... 
   A) Freeze Fight Flight Fawn
  B) Freeze Fawn Fight Flight
  C) Freeze Flight Fight Fawn
  D) Freeze Flight Fawn Fight

  Which attitude pattern is accepted as a legal stack in TRPI?

  A) EIII/IEEE
  B) EIEI/IEIE
  C) EIII/IEEE
  D) EEEE/IIII





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
    setError(JSON.stringify(err))
    return [
    ];
  }
}

  async function generateJungQuestions(): Promise<Question[]> {
    const info = `Function pairings, structural layers, short- vs long-context rules, and Jung's function definitions.`;
    const TRPI = `\n ${info}`;
    const prompt = `Generate 20 multiple-choice questions focused on Jungian aspects of TRPI. Use the same JSON format as the main exam.`;
    return generateFromPrompt(TRPI, prompt);
  }

  async function generateFreudQuestions(): Promise<Question[]> {
    const info = `Freud layers mapped to Jungian functions and how they interact in TRPI.`;
    const TRPI = `\n ${info}`;
    const prompt = `Generate 20 multiple-choice questions covering the Freudian layers portion of TRPI. Use the JSON format.`;
    return generateFromPrompt(TRPI, prompt);
  }

  async function generateNeuroQuestions(): Promise<Question[]> {
    const info = `Meta-trait axes, cognitive clusters and context processing rules in TRPI.`;
    const TRPI = `\n ${info}`;
    const prompt = `Generate 20 neuroscience-focused TRPI questions. Return the JSON array.`;
    return generateFromPrompt(TRPI, prompt);
  }

  async function generateTraitQuestions(): Promise<Question[]> {
    const info = `4F trait mapping, suffix logic and growth sequence from the TRPI rulebook.`;
    const TRPI = `\n ${info}`;
    const prompt = `Generate 20 questions about trait responses in TRPI. Use the same JSON output.`;
    return generateFromPrompt(TRPI, prompt);
  }

  async function generateBigFiveQuestions(): Promise<Question[]> {
    const info = `Big-Five correlations, meta-traits axis and empirical benchmark data from TRPI.`;
    const TRPI = `\n ${info}`;
    const prompt = `Generate 20 questions on the Big Five correlations within TRPI. Format as JSON.`;
    return generateFromPrompt(TRPI, prompt);
  }

  async function generateFromPrompt(systemPrompt: string, userPrompt: string): Promise<Question[]> {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'o3-2025-04-16',
          messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }],
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
      setError(JSON.stringify(err));
      return [];
    }
  }

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
      setSummary(true);
    }
  };

  useEffect(() => {
    if (tab === 0 && summary && !savedBinId && !binId) {
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
  }, [summary, tab]);

  let inner: React.ReactNode;

  if (loading) {
    inner = (
      <Stack>
        <Box display={'flex'} justifyContent={'center'} mt={16}>
          <Typography variant="h6" gutterBottom>Generating questions...</Typography>
        </Box>
        <Box display={'flex'} justifyContent={'center'} mt={1}>
          <Tooltip title={'Be patient! \n loading the questions takes about 3 minutes'}>
            <CircularProgress />
          </Tooltip>
        </Box>
      </Stack>
    );
  } else if (summary) {
    const correct = answers.filter((a) => a.isCorrect).length;
    const score = Math.round((correct / questions.length) * 100);
    inner = (
      <Box>
        <Typography variant="h6" gutterBottom>
          Certification Summary
        </Typography>
        {userName && (
          <Typography variant="body2" gutterBottom>
            Name: {userName}
          </Typography>
        )}
        {!userName && (
          <Button variant="contained" size="small" onClick={() => setNameModalOpen(true)} sx={{ mb: 1 }}>
            Add Details
          </Button>
        )}
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
  } else {
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
      </Box>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 2, maxWidth: 700, mx: 'auto', mt: 10 }}>
      <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2 }} variant="scrollable" scrollButtons="auto">
        {TAB_LABELS.map((l, i) => (
          <Tab key={i} label={l} />
        ))}
      </Tabs>
      {inner}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginY: 3 }}>
        <Notification
          open={error !== ''}
          message={error}
          type="error"
          onClose={() => setError('')}
        />
      </Box>
      <ArticleModal open={articleOpen} onClose={() => setArticleOpen(false)} />
      <NameModal
        open={nameModalOpen}
        onClose={() => setNameModalOpen(false)}
        onSubmit={(n) => {
          setUserName(n);
          setNameModalOpen(false);
        }}
      />
    </Paper>
  );
};

export default Certification;
