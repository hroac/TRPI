import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  TextareaAutosize,
  Button,
  Paper,
  CircularProgress,
  TextField,
  IconButton,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";
import axios from "axios";
import LanguageDetect from "languagedetect";

// Utility for decoding token parts
const decodeToken = (tokenParts: string[]) =>
  tokenParts.map((t) => atob(t)).join("");

interface TrpiTalkProps {
  onComplete: (responses: any) => Promise<string>; // onComplete returns a binId
}

const tokenParts = [
  "c2stcHJvai0wRmZva2tISklYTzFTTm5ncWl5dk9qWXVIbWI0Y2V0dlNZTXdUZ3BoVFhhNkp1V0NzMXVUYmRlMHpRbUVldUE0SHc0TE1ucQ==",
  "RmY5VDNCbGJrRkptaWFKaFdWRjZLdGsxOC1PVG9YVTdvcS1kYWc3LQ==",
  "MkZBdnhvRGliVjZPM1Z4Q29ZejU2dzJ1QUdPOExsUEJTOHVvRFFNQnl5cjRB",
];

const statements = [
  { text: "I am open to exploring new ideas and perspectives.", trait: "openness" },
  { text: "I often think about abstract concepts and like to ponder deep questions.", trait: "openness" },
  { text: "I am comfortable with change and easily adapt to new situations.", trait: "openness" },
  { text: "I prefer organized, planned activities over spontaneous events.", trait: "conscientiousness" },
  { text: "I often take charge in group settings and feel energized by social interactions.", trait: "extraversion" },
  { text: "I often prioritize harmony and avoid conflict in my relationships.", trait: "agreeableness" },
  { text: "I tend to feel anxious or worried in stressful situations.", trait: "neuroticism" },
  { text: "I feel a strong responsibility to meet my goals and commitments.", trait: "conscientiousness" },
  { text: "I enjoy discussing ideas and debating with others.", trait: "extraversion" },
  { text: "I strive to be understanding and supportive towards others.", trait: "agreeableness" },
  { text: "I often feel uneasy or second-guess myself when making decisions.", trait: "neuroticism" },
  { text: "I tend to make decisions based on logic rather than emotions.", trait: "conscientiousness" },
  { text: "I tend to stay calm and assertive when solving challenges.", trait: "extraversion" },
  { text: "I’m sensitive to other people’s feelings and try to meet their needs.", trait: "agreeableness" },
  { text: "I often dwell on past mistakes and worry about future outcomes.", trait: "neuroticism" },
  { text: "I am detail-oriented and take time to think through tasks carefully.", trait: "conscientiousness" },
  { text: "I’m known for being independent and bold in my approach to problems.", trait: "extraversion" },
  { text: "I prefer to work as part of a team and value cooperation.", trait: "agreeableness" },
  { text: "I tend to overthink situations and feel uneasy about the unknown.", trait: "neuroticism" },
];


const stages = [
  statements.slice(0, 3),
  statements.slice(3, 7),
  statements.slice(7, 11),
  statements.slice(11, 15),
  statements.slice(15, 19),
];

const TrpiTalk: React.FC<TrpiTalkProps> = ({ onComplete }) => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [currentStage, setCurrentStage] = useState<number>(-1);
  const [stageResponses, setStageResponses] = useState<
    { rating: number; explanation: string }[][]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentResponses, setCurrentResponses] = useState<
    { rating: number; explanation: string }[]
  >([]);
  const [isQuestionnaireComplete, setIsQuestionnaireComplete] = useState(false);

  // Voice-related states
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const langDetect = useRef(new LanguageDetect());
  const synth = useRef(window.speechSynthesis);
  const conversationHistory = useRef<{ role: string; content: string }[]>([]);

  useEffect(() => {
    if (currentStage >= 0) {
      setCurrentResponses(
        stages[currentStage].map(() => ({ rating: 0, explanation: "" }))
      );
    }
  }, [currentStage]);

  const startStage = (stageIndex: number) => {
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: `Stage ${stageIndex + 1} of ${stages.length}. Please rate and explain your response for each question.`,
      },
    ]);
    setCurrentStage(stageIndex);
    speakText(
      `You are now starting stage ${stageIndex + 1} of ${stages.length}. Please provide your ratings and explanations for each question.`
    );
  };

  const handleStageSubmit = async (
    responses: { rating: number; explanation: string }[]
  ) => {
    setStageResponses((prev) => [...prev, responses]);

    const nextStage = currentStage + 1;
    if (nextStage < stages.length) {
      startStage(nextStage);
    } else {
      setIsQuestionnaireComplete(true);
      await processResponses(stageResponses.flat());
    }
  };

  const processResponses = async (
    responses: { rating: number; explanation: string }[]
  ) => {
    setLoading(true);
    try {
      const prompt = `
You are an expert in personality assessments using the Big Five Personality Traits and the Trauma Response Personality Indicator (TRPI) framework.

The user has provided the following responses for ${responses.length} statements. Each response consists of a numerical rating (1 to 5) and an explanation:

${responses
  .map(
    (r, index) =>
      `${index + 1}. ${statements[index].text} - Rating: ${r.rating}, Explanation: ${r.explanation}`
  )
  .join("\n")}

Please perform the following tasks:

1. Calculate the Big Five scores for the user based on their responses. Use the following mapping for each trait:
   - **Openness**: Average of responses related to openness.
   - **Conscientiousness**: Average of responses related to conscientiousness.
   - **Extraversion**: Average of responses related to extraversion.
   - **Agreeableness**: Average of responses related to agreeableness.
   - **Neuroticism**: Average of responses related to neuroticism.

   Normalize each score to a range between 0 and 1 using the formula:
   \[\text{Normalized Score} = \frac{\text{Average Response} - 1}{4}\]

2. Determine the user's primary TRPI type based on their normalized Big Five scores using these criteria:
   - **Fight**: High extraversion (≥ 0.75).
   - **Flight**: High neuroticism (≥ 0.75).
   - **Freeze**: High conscientiousness (≥ 0.75).
   - **Fawn**: High agreeableness (≥ 0.75).

3. Match the user's TRPI type to the closest MBTI type.
[
  {
      "name": "ENTP",
      "traits": {
          "openness": 0.85,
          "conscientiousness": 0.55,
          "extraversion": 0.8,
          "agreeableness": 0.45,
          "neuroticism": 0.35
      },
      "mode": "Fight",
      "gold": "INFJ",
      "silver": "INTJ",
      "bronze": "ESFP",
      "copper": "ISFJ"
  },
  {
      "name": "ESTP",
      "traits": {
          "openness": 0.65,
          "conscientiousness": 0.6,
          "extraversion": 0.85,
          "agreeableness": 0.35,
          "neuroticism": 0.5
      },
      "mode": "Fight",
      "gold": "ISFJ",
      "silver": "ISTJ",
      "bronze": "ENFP",
      "copper": "INFJ"
  },
  {
      "name": "INTP",
      "traits": {
          "openness": 0.5,
          "conscientiousness": 0.4,
          "extraversion": 0.55,
          "agreeableness": 0.35,
          "neuroticism": 0.3
      },
      "mode": "Fight",
      "gold": "ESTJ",
      "silver": "ENTJ",
      "bronze": "ISFP",
      "copper": "ESFJ"
  },
  {
      "name": "ISTP",
      "traits": {
          "openness": 0.45,
          "conscientiousness": 0.45,
          "extraversion": 0.5,
          "agreeableness": 0.4,
          "neuroticism": 0.45
      },
      "mode": "Fight",
      "gold": "ENTJ",
      "silver": "ESTJ",
      "bronze": "INFP",
      "copper": "ENFJ"
  },
  {
      "name": "INTJ",
      "traits": {
          "openness": 0.75,
          "conscientiousness": 0.75,
          "extraversion": 0.5,
          "agreeableness": 0.35,
          "neuroticism": 0.5
      },
      "mode": "Freeze",
      "gold": "ENFP",
      "silver": "ENTP",
      "bronze": "ISFJ",
      "copper": "ESFP"
  },
  {
      "name": "ISTJ",
      "traits": {
          "openness": 0.35,
          "conscientiousness": 0.65,
          "extraversion": 0.4,
          "agreeableness": 0.3,
          "neuroticism": 0.45
      },
      "mode": "Freeze",
      "gold": "ESFP",
      "silver": "ESTP",
      "bronze": "INFJ",
      "copper": "ENFP"
  },
  {
      "name": "ENTJ",
      "traits": {
          "openness": 0.5,
          "conscientiousness": 0.9,
          "extraversion": 0.65,
          "agreeableness": 0.35,
          "neuroticism": 0.35
      },
      "mode": "Freeze",
      "gold": "ISTP",
      "silver": "INTP",
      "bronze": "ESFJ",
      "copper": "ISFP"
  },
  {
      "name": "ESTJ",
      "traits": {
          "openness": 0.4,
          "conscientiousness": 0.8,
          "extraversion": 0.65,
          "agreeableness": 0.3,
          "neuroticism": 0.45
      },
      "mode": "Freeze",
      "gold": "INTP",
      "silver": "ISTP",
      "bronze": "ENFJ",
      "copper": "INFP"
  },
  {
      "name": "ISFJ",
      "traits": {
          "openness": 0.45,
          "conscientiousness": 0.6,
          "extraversion": 0.35,
          "agreeableness": 0.75,
          "neuroticism": 0.65
      },
      "mode": "Fawn",
      "gold": "ESTP",
      "silver": "ESFP",
      "bronze": "INTJ",
      "copper": "ENTP"
  },
  {
      "name": "INFJ",
      "traits": {
          "openness": 0.8,
          "conscientiousness": 0.65,
          "extraversion": 0.4,
          "agreeableness": 0.8,
          "neuroticism": 0.65
      },
      "mode": "Fawn",
      "gold": "ENTP",
      "silver": "ENFP",
      "bronze": "ISTJ",
      "copper": "ESTP"
  },
  {
      "name": "ESFJ",
      "traits": {
          "openness": 0.4,
          "conscientiousness": 0.6,
          "extraversion": 0.6,
          "agreeableness": 0.8,
          "neuroticism": 0.4
      },
      "mode": "Fawn",
      "gold": "INFP",
      "silver": "ISFP",
      "bronze": "ENTJ",
      "copper": "INTP"
  },
  {
      "name": "ENFJ",
      "traits": {
          "openness": 0.5,
          "conscientiousness": 0.75,
          "extraversion": 0.85,
          "agreeableness": 0.9,
          "neuroticism": 0.4
      },
      "mode": "Fawn",
      "gold": "ISFP",
      "silver": "INFP",
      "bronze": "ESTJ",
      "copper": "ISTP"
  },
  {
      "name": "ESFP",
      "traits": {
          "openness": 0.6,
          "conscientiousness": 0.55,
          "extraversion": 0.6,
          "agreeableness": 0.6,
          "neuroticism": 0.65
      },
      "mode": "Flight",
      "gold": "ISTJ",
      "silver": "ISFJ",
      "bronze": "ENTP",
      "copper": "INTJ"
  },
  {
      "name": "ENFP",
      "traits": {
          "openness": 0.9,
          "conscientiousness": 0.55,
          "extraversion": 0.6,
          "agreeableness": 0.6,
          "neuroticism": 0.8
      },
      "mode": "Flight",
      "gold": "INTJ",
      "silver": "INFJ",
      "bronze": "ESTP",
      "copper": "ISTJ"
  },
  {
      "name": "ISFP",
      "traits": {
          "openness": 0.5,
          "conscientiousness": 0.45,
          "extraversion": 0.4,
          "agreeableness": 0.5,
          "neuroticism": 0.7
      },
      "mode": "Flight",
      "gold": "ESTJ",
      "silver": "ESFJ",
      "bronze": "INTP",
      "copper": "ENTJ"
  },
  {
      "name": "INFP",
      "traits": {
          "openness": 0.45,
          "conscientiousness": 0.5,
          "extraversion": 0.4,
          "agreeableness": 0.6,
          "neuroticism": 0.9
      },
      "mode": "Flight",
      "gold": "ESFJ",
      "silver": "ENFJ",
      "bronze": "ISTP",
      "copper": "ESTJ"
  }
]
4. Generate a custom description (10-15 sentences) explaining the TRPI type and how it relates to the user's personality traits and responses.

Return the results in JSON format with the following structure:
{
  "bigFiveScores": {
    "openness": <number>,
    "conscientiousness": <number>,
    "extraversion": <number>,
    "agreeableness": <number>,
    "neuroticism": <number>
  },
  "primary4F": "<TRPI Type>",
  "mbtiType": "<MBTI Type>",
  "description": "<Custom Description>"
}

and just return them in a json format like above, this is VERY important so please do it thank you.
`;

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${decodeToken(tokenParts)}`,
        },
        body: JSON.stringify({
          model: "ft:gpt-4o-2024-08-06:smersh::Ae8H9Yf7",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 500,
          temperature: 0.5,
        }),
      });

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content || "No data received.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Here is your Big Five profile and analysis:" },
        { role: "assistant", content },
      ]);

      speakText("Your assessment is complete. Here are your results.");
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "An error occurred while processing your responses.",
        },
      ]);
      speakText("An error occurred while processing your responses.");
    } finally {
      setLoading(false);
    }
  };

  // Voice Functions
  const startRecording = async () => {
    if (isRecording) return;
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
        const transcription = await transcribeAudio(audioBlob);
        setTranscript(transcription);
        populateResponses(transcription);
      };

      mediaRecorder.start();
      setIsRecording(true);
      speakText("Recording started. Please speak your response.");
    } catch (error) {
      console.error("Error accessing microphone", error);
    }
  };

  const stopRecording = () => {
    if (!isRecording || !mediaRecorderRef.current) return;
    mediaRecorderRef.current.stop();
    setIsRecording(false);
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
      console.error("Error transcribing audio with Whisper:", error.response ? error.response.data : error.message);
      return "";
    }
  };

  const populateResponses = (transcription: string) => {
    // Simple parsing logic assuming the user speaks "Rating X explanation Y"
    const ratingMatch = transcription.match(/rating\s+(\d)/i);
    const explanationMatch = transcription.match(/explanation\s+(.+)/i);

    const rating = ratingMatch ? parseInt(ratingMatch[1], 10) : 0;
    const explanation = explanationMatch ? explanationMatch[1].trim() : "";

    // Update the currentResponses with the transcribed data
    const updatedResponses = [...currentResponses];
    // Find the first response that hasn't been filled
    const index = updatedResponses.findIndex(
      (resp) => resp.rating === 0 || resp.explanation === ""
    );
    if (index !== -1) {
      updatedResponses[index].rating = rating;
      updatedResponses[index].explanation = explanation;
      setCurrentResponses(updatedResponses);
      speakText(`Recorded your response for question ${index + 1}.`);
    }
  };

  const speakText = (text: string) => {
    if (!synth.current) return;
    const detectedLanguages = langDetect.current.detect(text, 1);
    const languageCode = getLanguageCode(detectedLanguages[0][0] || "english");

    const voices = synth.current.getVoices();
    const selectedVoice = voices.find((voice) =>
      voice.lang.startsWith(languageCode)
    );

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageCode;
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    synth.current.speak(utterance);
  };

  const getLanguageCode = (language: string): string => {
    const languageMap: { [key: string]: string } = {
      // ... [Your existing language map]
      english: "en-US",
      // Add more languages as needed
    };
    return languageMap[language.toLowerCase()] || "en-US";
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "50px auto",
        padding: 3,
        backgroundColor: "#f9fafb",
        borderRadius: 2,
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Typography variant="h2" sx={{ textAlign: "center", marginBottom: 3 }}>
        TRPI - Discover Your Personality
      </Typography>

      {!isQuestionnaireComplete ? (
        currentStage === -1 ? (
          <Button
            variant="contained"
            onClick={() => startStage(0)}
            sx={{ display: "block", margin: "0 auto" }}
          >
            Start Assessment
          </Button>
        ) : (
          <Box>
            {stages[currentStage].map((statement, index) => (
              <Paper key={index} sx={{ padding: 2, marginBottom: 2 }}>
                <Typography>{statement.text}</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TextField
                    type="number"
                    inputProps={{ min: 1, max: 5 }}
                    label="Rating (1-5)"
                    value={currentResponses[index]?.rating || ""}
                    onChange={(e) => {
                      const value = parseInt(e.target.value, 10);
                      setCurrentResponses((prev) => {
                        const updated = [...prev];
                        updated[index].rating = isNaN(value) ? 0 : value;
                        return updated;
                      });
                    }}
                    fullWidth
                    margin="normal"
                  />
                  <IconButton
                    color={isRecording ? "secondary" : "primary"}
                    onClick={
                      isRecording ? stopRecording : startRecording
                    }
                    sx={{ marginLeft: 1, marginTop: 2 }}
                  >
                    {isRecording ? <StopIcon /> : <MicIcon />}
                  </IconButton>
                </Box>
                <TextareaAutosize
                  placeholder="Explain your response"
                  value={currentResponses[index]?.explanation || ""}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCurrentResponses((prev) => {
                      const updated = [...prev];
                      updated[index].explanation = value;
                      return updated;
                    });
                  }}
                  minRows={3}
                  style={{ width: "100%", marginTop: 10, padding: 10 }}
                />
              </Paper>
            ))}
            <Button
              variant="contained"
              onClick={() => handleStageSubmit(currentResponses)}
              disabled={currentResponses.some(
                (response) =>
                  response.rating === 0 || response.explanation.trim() === ""
              )}
              sx={{ display: "block", margin: "0 auto", marginTop: 2 }}
            >
              Submit Responses
            </Button>
          </Box>
        )
      ) : (
        <Paper
          sx={{ padding: 2, marginTop: 3, maxHeight: 300, overflow: "auto" }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent:
                  message.role === "user" ? "flex-end" : "flex-start",
                marginBottom: 2,
              }}
            >
              <Box
                sx={{
                  maxWidth: "70%",
                  padding: 2,
                  borderRadius: 2,
                  backgroundColor:
                    message.role === "user" ? "#e0f7fa" : "#f1f8e9",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                {message.content}
              </Box>
            </Box>
          ))}
        </Paper>
      )}

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default TrpiTalk;
