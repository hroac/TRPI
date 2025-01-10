import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  TextareaAutosize,
  IconButton,
  CircularProgress,
  Card,
  useMediaQuery,
  useTheme,
  Grid,
  LinearProgress,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";
import LanguageDetect from "languagedetect";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// Example MBTI logic
import { processProfile } from "../utils/mbtiMapping";
import ScrollToTop from "../utils/ScrollToTop";
import { statements, stages } from '../utils/mbtiMapping';
import { useNavigate } from "react-router-dom";
import PremiumModal from "./PremiumModal";
import { Headset, HeadsetOff } from "@mui/icons-material";

// -------------------------------------------------------------------------
// Utility for decoding token parts
const decodeToken = (tokenParts: string[]) =>
  tokenParts.map((t) => atob(t)).join("");

// Provide your token in separated Base64 segments
const tokenParts = [
  "c2stcHJvai0wRmZva2tISklYTzFTTm5ncWl5dk9qWXVIbWI0Y2V0dlNZTXdUZ3BoVFhhNkp1V0NzMXVUYmRlMHpRbUVldUE0SHc0TE1ucQ==",
  "RmY5VDNCbGJrRkptaWFKaFdWRjZLdGsxOC1PVG9YVTdvcS1kYWc3LQ==",
  "MkZBdnhvRGliVjZPM1Z4Q29ZejU2dzJ1QUdPOExsUEJTOHVvRFFNQnl5cjRB",
];

// Example interface (if you need it for parent usage)
interface TrpiTalkProps {
  onComplete: (responses: any) => Promise<string>; // onComplete returns a binId or something
}
// -------------------------------------------------------------------------



// -------------------------------------------------------------------------
const TrpiTalk: React.FC<TrpiTalkProps> = ({ onComplete }) => {
  // Each statement -> user explanation text\
  const navigate = useNavigate();
  const [userExplanations, setUserExplanations] = useState<string[]>( 
      localStorage.getItem("userExplanations") && JSON.parse(localStorage.getItem("userExplanations") || "") || Array(statements.length).fill("")
  );

  // Current stage: -1 = not started, 0..5 = active stage, 6 = done
  const [currentStage, setCurrentStage] = useState<number>(-1);

  // Final overview
  const [premiumModalOpen, SetPremiumModalOpen] = useState<boolean>(false)
  const handleOpenPremiumModal = () => SetPremiumModalOpen(true)
  const handleClosePremiumModal = () => SetPremiumModalOpen(false)
  

  // Big Five (0..100), MBTI, and custom description
  const [bigFive, setBigFive] = useState<{
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
  } | null>(null);
  const [primary4F, setPrimary4F] = useState<string>("");
  const [mbtiType, setMbtiType] = useState<string>("");
  const [binId, setBinId] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  // Loading + error
  const [loadingScores, setLoadingScores] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // -------------- Microphone / Voice Logic --------------
  const [audioDisabled, setAudioDisabled] = useState<boolean>(true);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingIndex, setRecordingIndex] = useState<number | null>(null); // which statement index is being recorded
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const synthRef = useRef<SpeechSynthesis>(window.speechSynthesis);
  const langDetectRef = useRef(new LanguageDetect());

  const handleStartRecording = async (statementIndex: number) => {
    if (isRecording) return;
    setRecordingIndex(statementIndex);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/flac" });
        const text = await transcribeAudio(audioBlob);

        // Append transcribed text
        setUserExplanations((prev) => {
          const updated = [...prev];
          const oldText = updated[statementIndex];
          updated[statementIndex] = oldText
            ? oldText + " " + text
            : text;
          return updated;
        });
        speakText(`Recorded your response for question ${statementIndex + 1}.`);
      };

      mediaRecorder.start();
      setIsRecording(true);
      speakText(
        `Recording started for question ${statementIndex + 1}. Please speak your response.`
      );
    } catch (err) {
      console.error("Error accessing microphone:", err);
    }
  };

  const handleStopRecording = () => {
    if (!isRecording || !mediaRecorderRef.current) return;
    mediaRecorderRef.current.stop();
    setIsRecording(false);
    setRecordingIndex(null);
    speakText("Recording stopped.");
  };

  const transcribeAudio = async (audioBlob: Blob): Promise<string> => {
    const formData = new FormData();
    formData.append("file", audioBlob, "audio.flac");
    formData.append("model", "whisper-1");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/audio/transcriptions",
        formData,
        {
          headers: {
            Authorization: `Bearer ${decodeToken(tokenParts)}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.text.trim();
    } catch (error: any) {
      console.error("Error with Whisper transcription:", error);
      return "";
    }
  };

  // Simple TTS
  const speakText = (text: string) => {
    if (!synthRef.current || audioDisabled) return;
    const detectedLangs = langDetectRef.current.detect(text, 1);
    const language = detectedLangs?.[0]?.[0] || "english";
    const languageCode = getLanguageCode(language);

    const voices = synthRef.current.getVoices();
    const selectedVoice = voices.find((voice) => voice.lang.startsWith(languageCode));

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageCode;
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    synthRef.current.speak(utterance);
  };

  const getLanguageCode = (langName: string) => {
    const map: { [key: string]: string } = {
      english: "en-US",
    };
    return map[langName.toLowerCase()] || "en-US";
  };

  // -------------- Stage Navigation --------------
  const handleStageSubmit = () => {
    const nextStage = currentStage + 1;
    if (nextStage < stages.length) {
      setCurrentStage(nextStage);
      speakText(`Moving on to stage ${nextStage + 1}.`);
      window.scrollTo(0, 0);

    } else {
      
      setCurrentStage(6);
      speakText("You have completed all stages. Let’s review your responses.");

      handleOpenPremiumModal();
      handleFetchBigFiveScores();
      window.scrollTo(0, 0);
    }
  };

  // -------------- ChatGPT: Big Five & Custom Description --------------
  const handleFetchBigFiveScores = async () => {
    setLoadingScores(true);
    setErrorMessage("");
    localStorage.removeItem('userExplanations');
    // Build our prompt
    const prompt = `
You have ${statements.length} statements with user-provided free-text explanations. 
1) Infer approximate Big Five trait scores (0-1) from these text answers (eg 0.91 for openness). 
2) Generate a custom description (2 paragraphs (use \n)) explaining the user's perceived personality traits or style.

Return the JSON with the following fields:
{
  "openness": <number>,
  "conscientiousness": <number>,
  "extraversion": <number>,
  "agreeableness": <number>,
  "neuroticism": <number>,
  "description": "<some text>"
}

Statements + Explanations:
${statements
  .map((st, i) => {
    const ans = userExplanations[i];
    return `#${i + 1} - ${st.text}\n(Trait: ${st.trait})\nUser Explanation:\n${ans}\n----\n`;
  })
  .join("\n")}
`;

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${decodeToken(tokenParts)}`,
        },
        body: JSON.stringify({
          model: "ft:gpt-4o-2024-08-06:smersh::Ae8H9Yf7",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 600,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content || "";
      const substring = "```json"
      let parsedData;

      console.log("ChatGPT content:", content);

      if(content.startsWith(substring)) {
      parsedData = content.substring(content.indexOf(substring) + substring.length, content.length - 4).replaceAll(/\n/g, '')
      }

      console.log(parsedData)
      // Expect JSON with { openness, conscientiousness, extraversion, agreeableness, neuroticism, description }
      const parsed = JSON.parse(parsedData)

      setBigFive({
        openness: parsed.openness,
        conscientiousness: parsed.conscientiousness,
        extraversion: parsed.extraversion,
        agreeableness: parsed.agreeableness,
        neuroticism: parsed.neuroticism,
      });
      setDescription(parsed.description.toString() || "");

      window.scrollTo(0, 0);

      // Use your MBTI logic
      delete parsed.description;
      const { primary4F, mbtiType } = processProfile(parsed);
      setPrimary4F(primary4F);
      setMbtiType(mbtiType);

      // Optionally call onComplete if you want to store or forward results
      const binId = await onComplete({ primary4F, mbtiType,  profile: parsed, description: description, responses: userExplanations });
      navigate(`/result/${binId}`);
      // console.log("binId:", binId);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "Error fetching Big Five or description.");
    } finally {
      setLoadingScores(false);
    }
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // -------------- Rendering UI --------------
  const renderStage = () => {
  const progress = ((currentStage + 1) / stages.length) * 100;

    if (currentStage < 0) {
      // Not started
      return (
        <Box textAlign="center" mt={3}>
          <Button
            variant="contained"
            onClick={() => {
              setCurrentStage(0);
              speakText("Welcome to the TRPI questionnaire. Starting Stage 1 now.");
            }}
          >
            Start Assessment
          </Button>
        </Box>
      );
    }

    // Ongoing stages
    if (currentStage >= 0 && currentStage < stages.length) {
      const stageStatements = stages[currentStage];
      return (
        <Box>
          <Typography variant="h5" mb={2}>
            Stage {currentStage + 1} of {stages.length}
          </Typography>
          {stageStatements.map((st, idx) => {
            // Global index for this statement
            const statementIndex =
              stages
                .slice(0, currentStage)
                .reduce((count, arr) => count + arr.length, 0) + idx;

            return (
              <Paper key={statementIndex} sx={{ p: 2, mb: 2 }}>
                <Grid  spacing={3}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {st.text}
                </Typography>
                <Box sx={{ marginTop: '60px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                        
                  
                  {/* Explanation box */}
                    <Box position={'relative'} mt={1}>
                      <TextareaAutosize
                        minRows={3}
                        style={{ width: "100%", padding: "8px" }}
                        placeholder="Type your explanation here (or use the microphone to the left)."
                        value={userExplanations[statementIndex]}
                        onChange={(e) => {
                          const newText = e.target.value;
                          setUserExplanations((prev) => {
                            const updated = [...prev];
                            updated[statementIndex] = newText;
                            localStorage.setItem('userExplanations', JSON.stringify(updated));
                            return updated;
                          });
                        }}
                      />
                      {/* Microphone buttons */}
                  <Box position={'relative'} left={-50} top={-75} mt={1}>
                      <IconButton
                        color={
                          isRecording && recordingIndex === statementIndex
                            ? "secondary"
                            : "primary"
                        }
                        onClick={() =>
                          isRecording && recordingIndex === statementIndex
                            ? handleStopRecording()
                            : handleStartRecording(statementIndex)
                        }
                      >
                        {isRecording && recordingIndex === statementIndex ? (
                          <StopIcon />
                        ) : (
                          <MicIcon />
                        )}
                      </IconButton>
                    </Box>
                    </Box>
                
                    
                  </Box>
                </Grid>
              </Paper>
            );
          })}
          <Box textAlign="right" mt={2}>
            <Button variant="contained" onClick={handleStageSubmit}>
              {currentStage === stages.length - 1
                ? "Finish & Review Answers"
                : "Next Stage"}
            </Button>
          </Box>
          <Box my={3}>
        <LinearProgress color="info" variant="determinate" value={progress} />
      </Box>
        </Box>
      );
    }

    if(loadingScores) {
      return (
       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }} >
        <CircularProgress />
       </Box>
      )
    }

    

    return (
      <Button onClick={handleFetchBigFiveScores}>
        Get your results!
        </Button>
    );
  };




  const newProgress = (userExplanations.lastIndexOf("") / userExplanations.length) * 100
  // -------------- RENDER --------------
  return (
    <Paper elevation={3} style={{ padding: 20, margin: '20px auto', maxWidth: 1500, width: isMobile ? 300 : 1050 }}>
      <PremiumModal open={premiumModalOpen} onClose={handleClosePremiumModal} handlePaymentSuccess={handleFetchBigFiveScores}  price={0.99} title='Unlock your results' description="Pay €0.99 to view your results!"/>

    <Box sx={{ maxWidth: 800, mx: "auto", mt: 5, p: 2 }}>
      <IconButton sx={{position: 'relative', left: 750}} onClick={() => setAudioDisabled(!audioDisabled)}>
        {audioDisabled ? (<HeadsetOff/>) : (<Headset/>)}
      </IconButton>
      <Typography variant="h3" gutterBottom>
        TRPI Assessment
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Please share your thoughts (typed or via voice). After finishing all stages,
        we’ll generate approximate Big Five (0–100) + MBTI results and a custom description.
      </Typography>

      {renderStage()}
      

    </Box>
    </Paper>
  );
};

export default TrpiTalk;
