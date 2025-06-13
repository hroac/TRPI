import React, { useEffect, useRef, useState } from 'react';
import {
  Grid,
  IconButton,
  Box,
  Typography,
  Slider,
  Button,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  LinearProgress,
  Modal,
  useMediaQuery,
  useTheme,
  Tooltip,
  Stack,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {
  determinePrimary4FType,
  matchMBTI,
  matchMBTIType,
  MBTIProfiles,
  pearsonCorrelationBigFive,
  pearsonProfile,
  statements,
} from '../utils/mbtiMapping';
import Matrix from './Matrix';
import { 
  HelpOutline,  
  Close,
  Check,
  SwitchAccount,
  ShuffleOn,
  RestartAlt,
  RestartAltOutlined
} from '@mui/icons-material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { guid } from '../utils/guid';
import { typesData } from '../utils/typesData';
import { Helmet } from 'react-helmet';
import PremiumModal from './PremiumModal';
import { statements as fixedStatements, allStatements } from '../utils/mbtiMapping';
import MetaBin from '../utils/metabin';
import SlugModal from './slugModal';
import JsonBinApi from '../utils/jsonBin';
import { trackEvent, AnalyticsEvents } from '../utils/analytics';


/** ------------------------------------------------------------------
 *  Utility helpers
 * ------------------------------------------------------------------*/

// Simple Fisher–Yates shuffle (returns new array)
const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const formatTime = (seconds: number): string => {
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return [m, s].map(v => String(v).padStart(2, '0')).join(':');
};

/** Build a unique signature for a statement without relying on an `id` field */
const signature = (s: Statement) => `${s.trait}|${s.text}`;

export interface SubtextEntry {
  text: string;
  exclude?: string[];
}

export interface Statement {
  trait: 'openness' | 'conscientiousness' | 'extraversion' | 'agreeableness' | 'neuroticism';
  text: string;
  weight?: number;
  aspect?: string;
  subtext?: Record<string, SubtextEntry>;
}

/**
 * Select fresh statements for the current stage without re‑using any that
 * already appear in other stages. Uses the `signature` helper instead of `id`.
 */
const selectFreshStatements = (
  pool: Statement[],
  stages: Statement[][],
  currentStage: number,
): Statement[] => {
  const traits = stages[currentStage].map(st => st.trait)
  const used = new Set<string>(
    stages.flatMap((stage, idx) => (idx === currentStage ? [] : stage.map(signature))),
  );


  let candidates = pool.filter(s => !used.has(signature(s)));

  if(traits.includes('openness')) {
    candidates = candidates.filter(c => c.trait === 'openness')
  } else {
    candidates = candidates.filter(c => c.trait !== 'openness')
  }
  const needed = stages[currentStage].length;
  if (candidates.length < needed) {
    console.warn('[flush] Not enough unused candidates');
    return [];
  }

  const shuffled = shuffle(candidates)
  const fresh: Statement[] = []

 if(!traits.includes('openness')) {
  traits.forEach(tr => {
    fresh.push(shuffled.find(sh => sh.trait == tr) as Statement)
  })
 } else {
  fresh.push(...shuffled.slice(0, needed))
 }
  return fresh;
};

const BigFiveQuestionnaireHelmet: React.FC = () => (
  <Helmet>
    <title>Discover Your Personality with the TRPI Test</title>
    <meta
      name="description"
      content="Take the TRPI Assessment Tool to uncover your personality type, explore Big Five traits, and learn how trauma responses shape your personality. Start your journey today on traitindicator.com!"
    />
    <meta
      property="og:title"
      content="Discover Your Personality with the TRPI Test"
    />
    <meta
      property="og:description"
      content="Uncover your true self with the TRPI Test. Analyze your Big Five traits and discover how your personality aligns with 4F trauma responses. Take the test now on traitindicator.com!"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://traitindicator.com/#/test"
    />
    <meta
      property="og:image"
      content="https://traitindicator.com/logo.png"
    />
  </Helmet>
);



const BigFiveQuestionnaire: React.FC<{ onComplete: (responses: any) => void }> = ({
  onComplete,
}) => {
  const navigate = useNavigate();
  const { company: slug, departement: departement, binId: lastBinId } = useParams<{ company?: string, departement?: string; binId: string; }>();
  const [mapping, setMapping]     = useState<string | null>(null);
  const [meta, setMeta] = useState<any>({});
  const [loading, setLoading]     = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    trackEvent(AnalyticsEvents.TestStarted, { event_category: 'Test' });
  }, []);
  const initialStatements = () => {
    const statements = localStorage.getItem('statements')
    const parsed = statements && JSON.parse(statements)
    if(Array.isArray(parsed)) {
    ////console.log(statements, parsed, (statements||[]).length)
      return parsed
    }
//console.log('new statements')
    const newStatements = JSON.stringify(fixedStatements);
    localStorage.setItem('statements', newStatements);
    return fixedStatements
  }
  const [statements, setStatements] = useState<any[]>(initialStatements)
  const initialResponses = () => {
    if(localStorage.getItem('responses')) {
      return JSON.parse(localStorage.getItem('responses')  || '')
    }
    return statements.reduce((acc, s) => {
    if (!acc[s.trait]) acc[s.trait] = [];
    acc[s.trait].push(0.500001);
    return acc;
  }, {} as { [trait: string]: number[] })
};

  const [bin, setBin] = useState<Record<any, any>>();
  const [responses, setResponses] = useState(initialResponses)
  const [currentStage, setCurrentStage] = useState(parseInt(localStorage.getItem('lastStage') || "0"));
  const [lastStage, setLastStage] = useState(parseInt(localStorage.getItem('stage')|| "0"))
  const [primary4FType, setPrimary4FType] = useState<string | null>(null);
  const [matchedMBTIType, setMatchedMBTIType] = useState<string | null>(null);
  const [accuracy, setAccuracy] = useState<number>(0);
  const [list, setList] = useState<Record<any, any>>([]);
  const [matchedType, setMatchedType] = useState<string | null>(null);
  const [selectedMbtiType, setSelectedMbtiType] = useState<string | null>(null);
  const [selectedStatement, setSelectedStatement] = useState<string | null>(null)
  const [excludedTypes, setExludedTypes] = useState<Array<string>>([])
  const [premiumModalOpen, SetPremiumModalOpen] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState(false); // Modal is pre-opened by default
  const [password, setPassword] = useState<string>('');
  const [openPasswordModal, setOpenPasswordModal] = useState(slug ? true : false ); // Modal is pre-opened by default
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [secondsPerItem, setSecondsPerItem] = useState<number>(0);
  const [secondsLeft, setSecondsLeft] = useState<number>(() => {
    if(localStorage.getItem('secondsLeft')) {
      return parseInt(localStorage.getItem('secondsLeft')?.toString() || '')
    }
    const all = Object.values(initialResponses()).flat() as number[];
    const unanswered = all.filter(v => v === 0.500001).length;
    return unanswered * secondsPerItem;
  });
  const [firstStageTimes, setFirstStageTimes] = useState<number[]>([]);
  const [firstAnswerTime, setFirstAnswerTime] = useState<number>(Date.now());
  const type = typesData.find(t => t.type === matchedMBTIType);
  const stages = [
    statements.slice(0, 3), // Stage 0
    statements.slice(3, 7), // Stage 1
    statements.slice(7, 11), // Stage 2
    statements.slice(11, 15), // Stage 3
    statements.slice(15, 19), // Stage 4
    statements.slice(19, 23), // Stage 5
    statements.slice(23, 26), // Stage 6
  ];

   // 1) On mount, load slug→collection map (if slug exists), otherwise skip
  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }
    (async () => {
      try {
        const all = await MetaBin.getAll();
       
        if (all[slug]) {
        const meta = await MetaBin.getMeta();

          setMapping(all[slug]);
          setMeta(meta[slug])
          //console.log('set slug')
        } else {
          console.warn(`Slug "${slug}" not found; proceeding without modal.`);
        }
      } catch (err) {
        console.error('Error fetching slug map:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

    useEffect(() => {
    if (!lastBinId) {
      setLoading(false);
      return;
    }
    (async () => {
      try {
       const bin = await JsonBinApi.getBinById(lastBinId);
       setBin(bin);
       setResponses(JSON.parse(JSON.stringify(bin.responses)));

      } catch (err) {
        console.error('Error fetching previous bin:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, [lastBinId]);

  useEffect(() => {
    if(meta && slug) {
    setOpenPasswordModal(!meta.password || password !== meta.password)
    }
  }, [password, meta])

  useEffect(() => {
    const all = Object.values(responses).flat() as number[];
    const unanswered = all.filter(v => v === 0.500001).length;
    const time = unanswered * secondsPerItem;
    
    setSecondsLeft(time > 1200 ? 1200 : time);
    localStorage.setItem('secondsLeft', (unanswered * secondsPerItem).toString())
  }, [responses, secondsPerItem]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(prev => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

/*   useEffect(() => {
    if (currentStage === 0 && firstStageTimes.length === 0) {
      setCurrentStartTime(Date.now());
    }
  }, [currentStage, firstStageTimes.length]); */


  const unlock = () => {
   setLastStage(0)
   setCurrentStage(0)
  //  setResponses(statements.reduce((acc, s) => {
  //   if (!acc[s.trait]) acc[s.trait] = [];
  //   acc[s.trait].push(0.5);
  //   return acc;
  // }, {} as { [trait: string]: number[] }));
  // }
  }

  const reset = () => {
    setLastStage(0)
    setCurrentStage(0)

    if(bin) {
      setResponses(JSON.parse(JSON.stringify(bin.responses)))
    } else {
      setResponses(statements.reduce((acc, s) => {
        if (!acc[s.trait]) acc[s.trait] = [];
        acc[s.trait].push(0.500001);
        return acc;
      }, {} as { [trait: string]: number[] }));
      localStorage.removeItem('responses');
    }

   setFirstAnswerTime(Date.now())
   setSecondsPerItem(0)
   localStorage.removeItem('secondsLeft')
   localStorage.removeItem('stage');
   localStorage.removeItem('lastStage');

   }

   const flushCurrentStage = () => {
    const start = stages.slice(0, currentStage).reduce((sum, arr) => sum + arr.length, 0);
    const len   = stages[currentStage].length;

    const replacements = selectFreshStatements((allStatements as Statement[]), stages, currentStage);
    if (replacements.length !== len) return;

    ////console.log(statements, replacements);
    stages[currentStage] = replacements;
    const newStatements = stages.flat();
    //replacements.forEach((r, i) => { newStatements[start + i] = r; });
    setStatements(newStatements);
    localStorage.setItem('statements', JSON.stringify(newStatements));

    const newResponses = { ...responses } as Record<string, number[]>;
    replacements.forEach(rep => {
      if (!newResponses[rep.trait]) newResponses[rep.trait] = [];
      const traitStmts = newStatements.filter(st => st.trait === rep.trait);
      const traitIdx   = traitStmts.findIndex(st => signature(st) === signature(rep));
      newResponses[rep.trait][traitIdx] = 0.500001;
    });
    setResponses(newResponses);
    localStorage.setItem('responses', JSON.stringify(newResponses));
    window.scrollTo(0, 0);
  };

  const setRandomly = () => {
    const stageResponses = stages.slice(lastStage, stages.length).flat();

    //consolelog(stageResponses)
    const randomResponses = stageResponses.reduce((acc, s) => {
      if (!acc[s.trait]) acc[s.trait] = responses[s.trait].slice(0, lastStage ? lastStage - 1 : lastStage);
      acc[s.trait].push(Math.random().toFixed(2));
      return acc;
    }, {} as { [trait: string]: number[] });
    setResponses(((prevResponses: any) => {
      ////console.log(prevResponses, randomResponses);
      return {...prevResponses, ...randomResponses}
    }))
   // setLastStage(0)

   const weightedScores = Object.keys(responses).reduce((acc, trait) => {
    const traitScores = responses[trait].map((score: any, i: any) => 
      score * (getStatement(trait, i).weight || 1)
    );
    const average =  traitScores.reduce((sum: any, score: any) => sum + score, 0) / traitScores.length;
      acc[trait] = average > 1 ? 1 : average
    return acc;
  }, {} as { [trait: string]: number });
    //const primary4F = determinePrimary4FType(weightedScores);
    
    const mbtiType = matchMBTI(weightedScores )//matchMBTIType(weightedScores, primary4F );
    const primary4F = MBTIProfiles.find(profile => profile.name === mbtiType.type)?.mode || ""
    //const type = matchMBTIType(weightedScores, primary4F, false);

    setPrimary4FType(primary4F);
    setMatchedMBTIType(mbtiType.type);
    setAccuracy((mbtiType.scores as any)[mbtiType.type].score);
      setList(mbtiType.scores);
    setMatchedType(type);
  }

  const getSubtext = (trait: string, index: number, value: number) => {
    const statement = statements.filter((s) => s.trait === trait)[index];
    if (!statement) return null;

    const percentage = Math.round(value * 100);
    const range = Object.keys(statement.subtext).find((key) => {
      const [min, max] = key.split('-').map(Number);
      return percentage >= min && percentage <= max;
    });

    if(range) {
      statement.subtext[range].range = range
      return (statement.subtext as any)[range];
    }

    return null;
  };

  const handleSliderChange =
    (trait: string, index: number) =>
    (event: Event, value: number | number[], activeThumb: number) => {
     // ////console.log('handleSliderChange',  currentStage, lastStage)
      if(currentStage < lastStage) {
        const sub = getSubtext(trait, index, responses[trait][index] as number);

        setSelectedStatement(sub.text)
        return;
      }

   
      
      const prevVal = responses[trait][index];

      if(prevVal === 0.500001) {
        setFirstAnswerTime(Date.now())
      }
      setResponses((prev: any) => {
        const updatedResponses = { ...prev };
        updatedResponses[trait][index] = value as number;
        const sub = getSubtext(trait, index, value as number);
        setSelectedStatement(sub.text);
        localStorage.setItem('responses', JSON.stringify(updatedResponses));
        return updatedResponses;
      });

      if(currentStage === 0 && prevVal === 0.500001) {
        const diff = (Date.now() - firstAnswerTime) / 1000;
        setFirstStageTimes(times => {
          const updated = [...times, diff];
          const avg = updated.reduce((a, b) => a + b, 0) / updated.length;
          setSecondsPerItem(avg * (stages.length - 1));
          //console.log(avg, updated)
          return updated;
        });
      }
    };

  const handleNext = () => {
    ////console.log('current stage first: ', currentStage )
    ////console.log('isCurrentStage: ', currentStage, lastStage);
    window.scrollTo(0, 0);
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1);
      trackEvent(AnalyticsEvents.StageAdvanced, { stage: currentStage + 1 });
      localStorage.setItem('stage', (currentStage + 1).toString());

      const stageAnswers: any = !currentStage ? Object.values(responses)[0] : Object.values({
        conscientiousness: responses.conscientiousness,
        extraversion: responses.extraversion,
        agreeableness: responses.agreeableness,
        neuroticism: responses.neuroticism,
      }).reduce((acc: Array<any>, answer: any) => {
        return [...acc, answer[currentStage - 1] ]
      }, [])
      //consolelog(stageAnswers);
      const changed = stageAnswers.every((answer: number) => answer !== 0.500001)
      if(changed && currentStage + 1 > lastStage) {
        setLastStage(currentStage + 1);
        localStorage.setItem('lastStage', (currentStage + 1).toString());

      }
      ////console.log('current stage first: ', currentStage + 1)

    }
    setSelectedStatement(null)
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
      //localStorage.setItem('stage', (currentStage - 1).toString());
    }
    setSelectedStatement(null)
  };
function getRange(score: number): string {
  // Find the bucket that the score fits in, e.g., 0.33 → "30-40"
  // Each range is a string, e.g., "0-10", "10-20", ..., "90-100"
  const ranges = [
    "0-10", "10-20", "20-30", "30-40", "40-50",
    "50-60", "60-70", "70-80", "80-90", "90-100"
  ];
  // Convert to 0-100 scale if needed
  const pct = Math.round(score * 100);
  return ranges.find(range => {
    const [low, high] = range.split('-').map(Number);
    return pct >= low && pct < high;
  }) || "90-100"; // fallback to highest
}

function buildStatementObject(weightedScores: { [trait: string]: number }, statements: any[]) {
  // Output: { openness: { range: "40-50", text: "...", exclude: [...] }, ... }
  const result: any[] = [];

  Object.entries(weightedScores).forEach(([trait, score], index) => {
    // Find the relevant statement for this trait
    const statement = statements.filter((s) => s.trait === trait)[index];
    
    if (!statement) return; // skip if not found

    const range = getRange(score);
    const subtext = statement.subtext[range];

    result[index] = {
      range,
      text: subtext?.text ?? "",
      trait: trait,
      exclude: subtext?.exclude ?? []
    };
  });

  return result;
}

  const getExcludedTypes = (stmnts: any[]) => {
  // Utility to determine new excluded types based on all `subs`
  const next = new Set<string>();
  stmnts.forEach(stmnt => {
    if (stmnt.range.includes("0-10") || stmnt.range.includes("90-100")) {
      stmnt.exclude.forEach((type: string) => next.add(type));
    }
  });
  return Array.from(next);
};

 // 3) After modal submission: merge and save
  const handleModalSubmit = async (personal: {
    name: string;
    email: string;
    jobTitle: string;
    jobDescription?: string;
  }) => {
      setSubmitted(true)
    const weightedScores = Object.keys(responses).reduce((acc, trait) => {
      const traitScores = responses[trait].map((score: any, i: any) => 
        score * (getStatement(trait, i).weight || 1)
       );
      const average =  traitScores.reduce((sum: any, score: any) => sum + score, 0) / traitScores.length;
      acc[trait] = average > 1 ? 1 : average
      return acc;
    }, {} as { [trait: string]: number });


    const stmnts = buildStatementObject(weightedScores, statements).filter(stmnt => stmnt.trait !== 'openness');
    const excluded = getExcludedTypes(stmnts)
    //consolelog("excluded!: ", excluded)
    //const primary4F = determinePrimary4FType(weightedScores);
    const mbtiType = matchMBTI(weightedScores, excluded.filter(x => x.length === 4))//matchMBTIType(weightedScores, primary4F);
    const profile = typesData.find(t => t.type === mbtiType.type);
    const primary4F = profile?.mode || ""
    const accuracy = (mbtiType.scores as any)[mbtiType.type].score
    setAccuracy(accuracy)
    setList(mbtiType.scores)
    const newJson = {
      type: mbtiType.type,
      primary4FType: primary4F,
      bigFiveResponses: weightedScores,
    }
   
    localStorage.removeItem('responses')
    localStorage.removeItem('stage')
    localStorage.removeItem('lastStage');
    const binId = await onComplete({ ...personal, primary4F, mbtiType: mbtiType.type, selectedMbtiType, profile: weightedScores, description: '', responses: responses, statements, accuracy, list: mbtiType.scores,  collectionId: mapping, company: slug, departement, prev: lastBinId});
    navigate(`/result/${binId}`);
  }

  const handleSubmit = async () => {
    trackEvent(AnalyticsEvents.TestCompleted, { event_category: 'Test' });
    setSubmitted(true)
    const weightedScores = Object.keys(responses).reduce((acc, trait) => {
      const traitScores = responses[trait].map((score: any, i: any) => 
        score * (getStatement(trait, i).weight || 1)
       );
      const average =  traitScores.reduce((sum: any, score: any) => sum + score, 0) / traitScores.length;
      acc[trait] = average > 1 ? 1 : average
      return acc;
    }, {} as { [trait: string]: number });


    const stmnts = buildStatementObject(weightedScores, statements).filter(stmnt => stmnt.trait !== 'openness');
    const excluded = getExcludedTypes(stmnts)
    //console.log("excluded!: ", excluded)
    //const primary4F = determinePrimary4FType(weightedScores);
    const mbtiType = matchMBTI(weightedScores, excluded.filter(x => x.length === 4))//matchMBTIType(weightedScores, primary4F);
    const profile = typesData.find(t => t.type === mbtiType.type);
    const primary4F = profile?.mode || ""
    const accuracy = (mbtiType.scores as any)[mbtiType.type].score
    setAccuracy(accuracy)
    setList(mbtiType.scores)
    const newJson = {
      type: mbtiType.type,
      primary4FType: primary4F,
      bigFiveResponses: weightedScores,
    }
   
    localStorage.removeItem('responses')
    localStorage.removeItem('stage')
    localStorage.removeItem('lastStage');
    const binId = await onComplete({ primary4F, mbtiType: mbtiType.type, selectedMbtiType, profile: weightedScores, description: '', responses: responses, statements, accuracy, list: mbtiType.scores, prev: lastBinId});
    navigate(`/result/${binId}`);
  };

  const progress = ((currentStage + 1) / stages.length) * 100;
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenPremiumModal = () => SetPremiumModalOpen(true)
  const handleClosePremiumModal = () => SetPremiumModalOpen(false)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const flattenResponses = (responses: any) : number[] => {
    //const flat : number[] = Object.values(responses).flat() as number[]
    const allResponses : number[] = []

    allResponses.push(...responses.openness.slice(0, 3))
    allResponses.push(...responses.openness.slice(0, 3))
    allResponses.push(...responses.openness.slice(0, 3))
    allResponses.push(...responses.openness.slice(3, 6))
    //allResponses.push(...flat.slice(6, 26))
   // allResponses.push(...flat.slice(3, 6))
    return allResponses;
  }

  const handleMatrixSelect = (type: string) => {
    ////console.log('Selected Type:', type)
    if (type === 'XXXX') {
      // If the user doesn't know their type, we can just log it or set states accordingly
     // setPrimary4FType(null);
      //setMatchedMBTIType('XXXX');
      //setMatchedType('XXXX');
      handleCloseModal();
      return;
    }

    const profile: any = MBTIProfiles.find((p) => p.name === type)?.traits;
    setSelectedMbtiType(type);
    if (profile) {
      ////console.log(profile)
      const stageResponses = stages.slice(0, stages.length).flat();

    const updatedResponses = stageResponses.reduce((acc, s) => {
      if (!acc[s.trait]) acc[s.trait] = [];
      acc[s.trait].push(profile[s.trait]);
      return acc;
    }, {} as { [trait: string]: number[] });

      const resp = { ...responses };
      /* Object.keys(updatedResponses).forEach((trait) => {
        updatedResponses[trait] = updatedResponses[trait].map(
          () => profile[trait as keyof typeof profile]
        );
      }); */
      setResponses({...updatedResponses});
      //setLastStage(0)

      //const primary4F = determinePrimary4FType(profile);
      const mbtiType = matchMBTI(profile)// matchMBTIType(profile, primary4F);
      //const typeNo4F = matchMBTIType(profile, primary4F,false);
      const primary4F = MBTIProfiles.find(profile => profile.name === mbtiType.type)?.mode || ""

      const typeNo4F = matchMBTI(profile)// matchMBTIType(profile, typeNo4F
      setPrimary4FType(primary4F);
      setMatchedMBTIType(mbtiType.type);
      setAccuracy((mbtiType.scores as any)[mbtiType.type].score);
      setList(mbtiType.scores);
      setMatchedType(typeNo4F.type);
    } else {
      setPrimary4FType(null);
      setMatchedMBTIType(null);
      setMatchedType(null);
    }
    handleCloseModal();
  };

  const getStatement = (trait: any, i: any) => {
    /* const stage = statements.filter((s) => s.trait === trait)
    const resp = responses[trait][i];
    const flat = responses.flat(resp)
    const index = flat.indexOf(resp)
    const statement = stage[index]; */

    const stage = statements.filter((s) => s.trait === trait)
    const statement = stage[i]


    //consolelog(trait, i, statement, stage)
    return statement
    
  }


  const determineIndex = (trait: string, index: number) : number => {
   //consolelog(index, currentStage - 1, index === currentStage - 1)
    if(trait === 'openness') {
      if(currentStage === 6) {
        return index + 3
      }
      return index
    }
    return currentStage - 1
  }

  
  return (
  <Box sx={{marginTop: '100px'}}>
    <Paper elevation={3} style={{  marginTop: '128px', padding: 20, margin: '20px auto', maxWidth: isMobile ? 300 : 750, width: isMobile ? 300 : 750 }}>
     <BigFiveQuestionnaireHelmet/>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" gutterBottom>
          TRPI Assessment Tool
        </Typography>
        {isMobile ? (
          <Stack>
            {currentStage < lastStage && (
              <Tooltip title="Unlock your previous answers!">
              <IconButton onClick={window.location.hostname === "localhost" ? unlock : handleOpenPremiumModal} color='primary'>
              <LockOpenIcon/>
            </IconButton>
            </Tooltip>
            )}
            <Tooltip title="Reset your answers">
             <IconButton onClick={reset} color='primary'>
            <RestartAlt/>
          </IconButton>
          </Tooltip>
         {!bin &&  <Tooltip title="Get different statements">
          <IconButton onClick={flushCurrentStage} color="primary">
            <ShuffleOn />
          </IconButton>
          </Tooltip>}
          <Tooltip title="Use a preset">
          <IconButton onClick={handleOpenModal} color="primary">
            <SwitchAccount />
          </IconButton>
          </Tooltip>
        </Stack>
        ) : (
          <Grid spacing={4}>
           {currentStage < lastStage && (
              <Tooltip title="Unlock your previous answers">
              <IconButton onClick={window.location.hostname === "localhost" ? unlock : handleOpenPremiumModal} color='primary'>
              <LockOpenIcon/>
            </IconButton>
            </Tooltip>
            )}
            <Tooltip title="Reset your answers">
             <IconButton onClick={reset} color='primary'>
            <RestartAlt/>
          </IconButton>
          </Tooltip>
          {!bin && <Tooltip title="Get different statements">
          <IconButton onClick={flushCurrentStage} color="primary">
            <ShuffleOn />
          </IconButton>
          </Tooltip>}
          <Tooltip title="Use a preset">
          <IconButton onClick={handleOpenModal} color="primary">
            <SwitchAccount />
          </IconButton>
          </Tooltip>
        </Grid>
        )
      }
      </Box>
      {/* Modal for Matrix selection */}
      <PremiumModal open={premiumModalOpen} onClose={handleClosePremiumModal} handlePaymentSuccess={unlock} price={0.99} title='Unlock Your Answers' description='Pay €0.99 to change your previous answers!'/>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            outline: 'none',
            width: { xs: '90%', sm: '60%' },
            borderRadius: '8px',
          }}
        >
          <Box sx={{
            marginLeft: '5%',
            marginTop: '5%',
            marginBottom: '5%',
            marginRight: '5%',
          }}>
          <Typography sx={{marginRight:"50px"}} variant="h6" gutterBottom>
            Select Your Type Here
          </Typography>
          <Typography variant="body2" gutterBottom>
            Use this as a preset if you already know your type!
          </Typography>
<Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    px: 2, // Add horizontal padding for breathing room
    width: '100%',
  }}
>
  <Box sx={{ width: '100%', maxWidth: 420 }}>
        <Matrix onSelectType={handleMatrixSelect} width={'100px'}/>
        </Box>
      </Box>
          <Box sx={{position:'relative', right:'50px'}} mt={2} display="flex" justifyContent="center">
            <Button variant="contained" color="secondary" onClick={() => handleMatrixSelect('XXXX')}>
              I (don't) know my type!
            </Button>
          </Box>
          </Box>
        </Box>
      </Modal>

     

      {/* Display current stage statements */}
      {stages[currentStage].map((s, index) => (
        <Box key={`${s.trait}-${index}`} my={3}>
          <Typography variant="subtitle1" gutterBottom align='center'>
            {s.text}
          </Typography>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Typography variant="subtitle2" gutterBottom>
                <Close/>
              </Typography>
            </Grid>
            <Grid item xs>
              {/* The index mapping here depends on how you originally mapped sliders. 
                  If you notice any indexing issues, adjust accordingly. */}
              <Slider
               value={responses[s.trait][determineIndex(s.trait, index)]}
               onChange={handleSliderChange(s.trait, determineIndex(s.trait, index))}
                max={1}
                step={0.01}
                color={`${currentStage < lastStage ? 'error' : 'primary'}`}
                sx={{color: `${currentStage < lastStage ? 'secondary.main' : 'primary'}`, zIndex: 1, '& .MuiSlider-track': {
                  backgroundColor: `${currentStage < lastStage ? 'secondary.main' : 'primary'}`,
                  border: `${currentStage < lastStage ? '2px solid #fa695e' : ''}`
                }}}
              />
               {bin && (
                    <Box sx={{position: 'relative', bottom: '21px', zIndex:0}}>
                      <LinearProgress color="primary" variant="determinate" value={bin.responses[s.trait][determineIndex(s.trait, index)] * 100} />
                    </Box>
                  )}
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" gutterBottom>
                <Check/>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
      
      <Box display={'flex'} justifyContent={'center'} my={3}>
        {/* Display matched MBTI type or anything else as needed */}
        <Typography variant='h6' fontWeight='bold' gutterBottom>
          {selectedStatement && '"'}{selectedStatement}{selectedStatement && '"'}
        </Typography>
      </Box>

      {/* Progress Bar */}
      <Box my={3}>
        <LinearProgress color="secondary" variant="determinate" value={progress} />
        <LinearProgress color="secondary" variant="determinate" value={progress} />
      </Box>

      {/* Navigation Buttons */}
      <Box display="flex" alignItems="center" mt={3}>
        <Button onClick={handleBack} disabled={currentStage === 0} variant="contained" color="primary">
          Back
        </Button>
        <Typography variant="subtitle1" sx={{ flexGrow: 1, textAlign: 'center' }}>
          { secondsLeft > 0 && formatTime(secondsLeft)}
        </Typography>
        {lastStage >= 8 && matchedMBTIType && matchedMBTIType !== 'XXXX' && type && (
          <Tooltip title={`${type.mode} \n ${(accuracy).toFixed(1)}%`}>
            <Box
              bgcolor={type.bgColor}
              color="white"
              p={isMobile ? 1 : 2}
              textAlign="center"
              borderRadius={2}
              style={{ textDecoration: 'none' }}
              sx={{ fontSize: isMobile ? '0.75rem' : '1rem' }}
            >
              <Typography variant="subtitle1">{type.type}</Typography>
            </Box>
          </Tooltip>
        )}
        {currentStage === stages.length - 1 ? (
          <Button onClick={slug ? () => {setShowModal(true)} : handleSubmit} variant="contained" color="primary" disabled={submitted}>
            {submitted ? 'Submitted' : 'Submit'}

          </Button>
        ) : (
          <Button onClick={handleNext} variant="contained" color="primary">
            Next
          </Button>
        )}
      </Box>

      {showModal && (
        <SlugModal
        open={showModal}
          onSubmit={handleModalSubmit}
          onClose={() => setShowModal(false)}
        />
        
      )}

      {meta.password && openPasswordModal && (
         <Dialog open={openPasswordModal} onClose={() => {
          //console.log([password, meta.password, password !== meta.password])
          setOpenPasswordModal(password !== meta.password)
         }} fullWidth maxWidth="sm">
              <DialogTitle>Enter The Password</DialogTitle>
              <DialogContent dividers>
                <Box>
                   <TextField
                              label="Password"
                              value={password}
                              onChange={e =>  setPassword(e.target.value)}
                              required
                              fullWidth
                              margin="normal"
                            />
                </Box>
                </DialogContent>
          </Dialog>
      )}
    </Paper>
  </Box>
  );
};

export default BigFiveQuestionnaire;
