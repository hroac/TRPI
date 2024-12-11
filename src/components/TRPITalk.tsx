// TrpiTalk.tsx
import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, TextareaAutosize, Button, Paper, CircularProgress } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import JsonBinApi from '../utils/saveResults'; // Ensure this utility is correctly implemented

interface TrpiTalkProps {
  onComplete: (responses: any) => Promise<string>; // onComplete returns a binId
}

// Define your statements without weights since ChatGPT will handle calculations
const statements = [
  { text: 'I am open to exploring new ideas and perspectives.', trait: 'openness' },
  { text: 'I often think about abstract concepts and like to ponder deep questions.', trait: 'openness' },
  { text: 'I am comfortable with change and easily adapt to new situations.', trait: 'openness' },
  { text: 'I prefer organized, planned activities over spontaneous events.', trait: 'conscientiousness' },
  { text: 'I often take charge in group settings and feel energized by social interactions.', trait: 'extraversion' },
  { text: 'I often prioritize harmony and avoid conflict in my relationships.', trait: 'agreeableness' },
  { text: 'I tend to feel anxious or worried in stressful situations.', trait: 'neuroticism' },
  { text: 'I feel a strong responsibility to meet my goals and commitments.', trait: 'conscientiousness' },
  { text: 'I enjoy discussing ideas and debating with others.', trait: 'extraversion' },
  { text: 'I strive to be understanding and supportive towards others.', trait: 'agreeableness' },
  { text: 'I often feel uneasy or second-guess myself when making decisions.', trait: 'neuroticism' },
  { text: 'I tend to make decisions based on logic rather than emotions.', trait: 'conscientiousness' },
  { text: 'I tend to stay calm and assertive when solving challenges.', trait: 'extraversion' },
  { text: 'I’m sensitive to other people’s feelings and try to meet their needs.', trait: 'agreeableness' },
  { text: 'I often dwell on past mistakes and worry about future outcomes.', trait: 'neuroticism' },
  { text: 'I am detail-oriented and take time to think through tasks carefully.', trait: 'conscientiousness' },
  { text: 'I’m known for being independent and bold in my approach to problems.', trait: 'extraversion' },
  { text: 'I prefer to work as part of a team and value cooperation.', trait: 'agreeableness' },
  { text: 'I tend to overthink situations and feel uneasy about the unknown.', trait: 'neuroticism' },
];

// Define stages based on the number of statements per stage
const stages = [
  statements.slice(0, 3),   // Stage 0: 4 questions
  statements.slice(3, 7),   // Stage 1: 4 questions
  statements.slice(7, 11),  // Stage 2: 4 questions
  statements.slice(11, 15), // Stage 3: 4 questions
  statements.slice(15, 19), // Stage 4: 3 questions
];

const TrpiTalk: React.FC<TrpiTalkProps> = ({ onComplete }) => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [binId, setBinId] = useState<string | null>(null);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Tracking the stage and responses
  const [currentStage, setCurrentStage] = useState<number>(-1); 
  // Store responses as arrays corresponding to each stage
  const [stageResponses, setStageResponses] = useState<number[][]>([]);

  // Shareable link state
  const [shareLink, setShareLink] = useState<string>("");

  // Loading state for asynchronous operations
  const [loading, setLoading] = useState<boolean>(false);

  // OpenAI API tokens split into parts for security (ensure these are set correctly)
  const tokenParts = [
    "c2stcHJvai0wRmZva2tISklYTzFTTm5ncWl5dk9qWXVIbWI0Y2V0dlNZTXdUZ3BoVFhhNkp1V0NzMXVUYmRlMHpRbUVldUE0SHc0TE1ucQ==",
    "RmY5VDNCbGJrRkptaWFKaFdWRjZLdGsxOC1PVG9YVTdvcS1kYWc3LQ==",
    "MkZBdnhvRGliVjZPM1Z4Q29ZejU2dzJ1QUdPOExsUEJTOHVvRFFNQnl5cjRB"
  ];

  // Function to call OpenAI API for general responses
  const getResp = async (input: string): Promise<string> => {
    console.log("getResp called with input:", input);
    // Fetch bin data if binId exists
    let binData = {};
    if (binId) {
      try {
        console.log("Fetching bin data for binId:", binId);
        binData = await JsonBinApi.getBinById(binId);
        console.log("Fetched bin data:", binData);
      } catch (error) {
        console.error("Error fetching bin data:", error);
        addMessage("assistant", "Error retrieving your profile data.");
        return "I'm sorry, I couldn't retrieve your profile data.";
      }
    }
    const { type, bigFiveScores, primary4F, description } = (binData || {}) as any;
    console.log("Extracted data from bin:", { type, bigFiveScores, primary4F, description });

    try {
      const systemContent = `You are a highly specialized assistant designed to type individuals using the Trauma Response Personality Indicator (TRPI) framework, guide them in developing personalized development plans, and provide education on TRPI concepts. The assistant uses an empathetic, non-judgmental tone to support users in exploring their unique personality dynamics, identifying trauma influences, and working towards cognitive and emotional balance.
      
      ${
        bigFiveScores && type && primary4F && description
          ? `The user has the following Big Five scores (each between 0 and 1): Openness - ${bigFiveScores.openness.toFixed(2)}, Conscientiousness - ${bigFiveScores.conscientiousness.toFixed(2)}, Extraversion - ${bigFiveScores.extraversion.toFixed(2)}, Agreeableness - ${bigFiveScores.agreeableness.toFixed(2)}, Neuroticism - ${bigFiveScores.neuroticism.toFixed(2)}. The TRPI type assigned is ${type} (${primary4F}). Description: ${description}.`
          : ''
      }
      `;

      console.log("System content for OpenAI:", systemContent);

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${tokenParts.map(t => atob(t)).join('')}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-2024-11-20",
          messages: [
            { 
              role: "system", 
              content: systemContent 
            },
            ...messages,
            { role: "user", content: input },
          ],
          max_tokens: 250,
        }),
      });

      console.log("OpenAI response status:", response.status);
      const result = await response.json();
      console.log("OpenAI response data:", result);

      return result.choices?.[0]?.message?.content || "I'm sorry, I couldn't understand that.";
    } catch (error) {
      console.error("Error fetching response from OpenAI:", error);
      return "Error communicating with OpenAI.";
    }
  };

  // Function to add messages to the chat
  const addMessage = (role: string, content: string) => {
    console.log(`Adding message - Role: ${role}, Content: ${content}`);
    setMessages((prev) => [...prev, { role, content }]);
    // Scroll to bottom
    setTimeout(() => {
      if (chatBoxRef.current) {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        console.log("Scrolled chat box to bottom.");
      }
    }, 100);
  };

  // Function to start a questionnaire stage
  const startStage = (stageIndex: number) => {
    console.log("Starting stage:", stageIndex);
    if (stageIndex < stages.length) {
      const currentStageQuestions = stages[stageIndex];
      addMessage("assistant", `Stage ${stageIndex + 1} of ${stages.length}. Please answer the following questions on a scale of 1 to 5, where 1 means "Strongly Disagree" and 5 means "Strongly Agree". You can respond in two ways:\n1. Just provide numbers (e.g., "3 5 2 4")\n2. Provide each response starting with a number and a period (e.g., "3. I prefer structured environments.")`);
      addMessage("assistant", "Here are your statements:");
      currentStageQuestions.forEach((q, i) => {
        addMessage("assistant", `${i + 1}. ${q.text}`);
      });
    } else {
      // All stages completed
      addMessage("assistant", "Thank you for completing the questionnaire. One moment while I process your results...");
      const allResponses = stageResponses.flat();
      processResponses(allResponses);
    }
  };

  // Function to process all responses and generate type and description using ChatGPT
  const processResponses = async (allResponses: number[]) => {
    console.log("Processing responses...");
    setLoading(true);
    try {
      console.log("All collected responses:", allResponses);

      // Validate all responses are numbers between 1 and 5
      if (allResponses.length !== statements.length) {
        throw new Error(`Incomplete responses. Expected ${statements.length} responses but received ${allResponses.length}.`);
      }

      for (let i = 0; i < statements.length; i++) {
        const response = allResponses[i];
        if (typeof response !== 'number' || isNaN(response) || response < 1 || response > 5) {
          throw new Error(`Invalid response for statement ${i + 1}: ${response}. Please provide numbers between 1 and 5.`);
        }
      }

      console.log("All responses are valid.");

      // Prepare the responses in a format suitable for ChatGPT
      const formattedResponses = allResponses.map((response, index) => ({
        question: statements[index].text,
        response,
      }));

      console.log("Formatted responses for ChatGPT:", formattedResponses);

      // Generate a prompt for ChatGPT to calculate scores and determine types
      const prompt = `
You are an expert in personality assessments using the Big Five Personality Traits and the Trauma Response Personality Indicator (TRPI) framework.

The user has answered the following 19 statements on a scale of 1 to 5, where 1 means "Strongly Disagree" and 5 means "Strongly Agree":

${formattedResponses.map((item, index) => `${index + 1}. ${item.question} - ${item.response}`).join('\n')}

Please perform the following tasks:

1. Calculate the Big Five scores for the user based on their responses. Use the following mapping for each trait:
take the user input on each question into account both seperately and as a whole for each trait to further deduce their score between 0-1 
(eg if the user inputs an answer related to the trait it should be considered with a weight/importance based on how alike to the trait it is)
   - **Openness**: Average of responses related to openness.
   - **Conscientiousness**: Average of responses related to conscientiousness.
   - **Extraversion**: Average of responses related to extraversion.
   - **Agreeableness**: Average of responses related to agreeableness.
   - **Neuroticism**: Average of responses related to neuroticism.

  
   After calculating the average, normalize each score to a range between 0 and 1 using the formula:
   \[
   \text{Normalized Score} = \frac{\text{Average Response} - 1}{4}
   \]


2. Determine the user's primary TRPI type based on their normalized Big Five scores using these criteria:
   - **Fight**: High extraversion (≥ 0.75).
   - **Flight**: High neuroticism (≥ 0.75).
   - **Freeze**: High conscientiousness (≥ 0.75).
   - **Fawn**: High agreeableness (≥ 0.75).

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

3. Match the user's TRPI type to the closest MBTI type using the provided MBTIProfiles array.

4. Generate a custom description (10-15 sentences) explaining the TRPI type.

Return the results in the following JSON format:

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

      console.log("Prompt for ChatGPT:", prompt);

      // Call OpenAI's API to process the responses
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${tokenParts.map(t => atob(t)).join('')}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-2024-11-20",
          messages: [
            { role: "system", content: "You are ChatGPT, a large language model trained by OpenAI." },
            { role: "user", content: prompt },
          ],
          max_tokens: 500,
          temperature: 0.5,
        }),
      });

      console.log("ChatGPT response status:", response.status);
      const result = await response.json();
      console.log("ChatGPT response data:", result);

      // Parse the JSON response from ChatGPT
      const content = result.choices?.[0]?.message?.content || "";
      const substring = "```json"
      let parsedData;

      console.log("ChatGPT content:", content);

      if(content.startsWith(substring)) {
      parsedData = content.substring(content.indexOf(substring) + substring.length, content.length - 4)
      }
      try {
        parsedData = JSON.parse(parsedData ?? content);
        console.log("Parsed data from ChatGPT:", parsedData);
      } catch (parseError) {
        console.error("Error parsing ChatGPT response:", parseError);
        console.error("ChatGPT response content:", content);
        throw new Error("Failed to parse the response from ChatGPT.");
      }

      const { bigFiveScores, primary4F, mbtiType, description } = parsedData;

      if (!bigFiveScores || !primary4F || !mbtiType || !description) {
        throw new Error("Incomplete data received from ChatGPT.");
      }

      // Prepare data to save
      const resultData = {
        mbtiType: mbtiType,
        primary4F: primary4F,
        profile: bigFiveScores,
        description,
        responses: allResponses,
      };
      console.log("Result Data to be saved:", resultData);

      // Use onComplete to save results and get binId
      const savedBinId = await onComplete(resultData);
      console.log("Saved bin ID:", savedBinId);
      setBinId(savedBinId);
      localStorage.setItem('binId', savedBinId); // Store the bin ID under 'binId'

      addMessage("assistant", "Your Big Five results have been recorded. You can now ask me about your TRPI type and development strategies.");
      addMessage("assistant", description);

      // Create a shareable link
      const shareURL = `${window.location.origin}/#/results/${savedBinId}`;
      setShareLink(shareURL);
      addMessage("assistant", "If you'd like to share your results, click the 'Share Your Results' button below.");
      console.log("Shareable URL:", shareURL);
    } catch (error: any) {
      console.error("Error processing responses:", error);
      addMessage("assistant", `Error: ${error.message}`);
    } finally {
      setLoading(false);
      console.log("Finished processing responses.");
    }
  };

  // Function to parse user responses
  const parseUserResponse = (input: string, expectedCount: number): number[] | null => {
    console.log("Parsing user input:", input);
    const lines = input.trim().split('\n').map(line => line.trim()).filter(line => line);

    // Try line-by-line parsing first
    if (lines.length === expectedCount) {
      const answers: number[] = [];
      let lineBasedSuccess = true;
      for (let line of lines) {
        const match = /^([1-5])(\.|$)/.exec(line);
        if (!match) {
          lineBasedSuccess = false;
          console.log("Line parsing failed for:", line);
          break;
        }
        answers.push(parseInt(match[1], 10));
      }
      if (lineBasedSuccess) {
        console.log("Successfully parsed responses line-by-line:", answers);
        return answers;
      }
    }

    // Try just numbers separated by space
    const singleLine = input.trim().replace(/\n+/g, ' ');
    const numberMatches = singleLine.split(/\s+/).map(v => parseInt(v,10)).filter(n => !isNaN(n));
    if (numberMatches.length === expectedCount && numberMatches.every(n => n >= 1 && n <= 5)) {
      console.log("Successfully parsed responses space-separated:", numberMatches);
      return numberMatches;
    }

    console.log("Failed to parse user responses.");
    return null;
  };

  // Handle user input
  const handleUserInput = async (input: string) => {
    console.log("Handling user input:", input);
    if (currentStage === -1 && !binId) {
      // Start questionnaire
      addMessage("assistant", "Great, let's begin the Big Five assessment in stages.");
      setCurrentStage(0);
      startStage(0);
      return;
    }

    if (currentStage >= 0 && currentStage < stages.length && !binId) {
      const currentStageQuestions = stages[currentStage];
      const answers = parseUserResponse(input, currentStageQuestions.length);
      if (!answers) {
        addMessage("assistant", `Please provide exactly ${currentStageQuestions.length} responses, either all numbers separated by space or lines starting with a number 1-5 followed by a period.`);
        console.log("User provided invalid responses.");
        return;
      }

      console.log(`User provided valid responses for stage ${currentStage}:`, answers);
      const newStageResponses = [...stageResponses, answers];
      setStageResponses(newStageResponses);

      const nextStage = currentStage + 1;
      setCurrentStage(nextStage);

      if (nextStage < stages.length) {
        startStage(nextStage);
      } else {
        // All stages completed, process responses
        console.log("All stages completed. Processing responses.");
        const allResponses = newStageResponses.flat();
        processResponses(allResponses);
      }
      return;
    }

    if (binId) {
      // Normal TRPI Q&A mode
      console.log("Entering TRPI Q&A mode.");
      setLoading(true);
      const response = await getResp(input);
      addMessage("assistant", response);
      setLoading(false);
      return;
    }

    console.log("Unhandled input state.");
  };

  // Handle share button click
  const handleShareClick = async () => {
    console.log("Share button clicked. Share link:", shareLink);
    if (shareLink) {
      try {
        await navigator.clipboard.writeText(shareLink);
        addMessage("assistant", "Your results link has been copied to the clipboard! Share it with others.");
        console.log("Share link copied to clipboard.");
      } catch {
        addMessage("assistant", `Unable to copy automatically. Please copy this link: ${shareLink}`);
        console.log("Failed to copy share link to clipboard.");
      }
    }
  };

  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) {
      console.log("Empty input submitted. Ignoring.");
      return;
    }
    const userMessage = input.trim();
    addMessage("user", userMessage);
    setInput("");
    handleUserInput(userMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      console.log("Enter key pressed without Shift. Submitting input.");
      handleSubmit();
    }
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
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          color: "#2c3e50",
          marginBottom: 3,
          fontSize: "2rem",
          fontWeight: 600,
          fontFamily: "Roboto, sans-serif",
        }}
      >
        TRPI - Discover Your Personality
      </Typography>
      <Paper
        ref={chatBoxRef}
        sx={{
          border: "1px solid #e0e0e0",
          borderRadius: 2,
          padding: 2,
          marginBottom: 3,
          backgroundColor: "#fff",
          height: 400,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: message.role === "user" ? "flex-end" : "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                padding: 2,
                borderRadius: 2,
                maxWidth: "70%",
                lineHeight: 1.5,
                whiteSpace: "pre-wrap",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                backgroundColor: message.role === "user" ? "#e7f7fe" : "#f0f0f0",
                color: "#2c3e50",
              }}
            >
              {message.content}
            </Box>
          </Box>
        ))}
        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <CircularProgress />
          </Box>
        )}
      </Paper>
      {shareLink && (
        <Button
          onClick={handleShareClick}
          sx={{
            backgroundColor: "#4ade80",
            color: "white",
            padding: "12px 24px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
            marginBottom: 2,
            "&:hover": {
              backgroundColor: "#22c55e",
            }
          }}
        >
          Share Your Results
        </Button>
      )}
      <TextareaAutosize
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your response here..."
        minRows={3}
        style={{
          width: "100%",
          padding: "15px",
          border: "1px solid #d0d0d0",
          borderRadius: "10px",
          fontSize: "1rem",
          fontFamily: "Roboto, sans-serif",
          lineHeight: 1.5,
          resize: "none",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
        }}
      />
      <Button
        onClick={handleSubmit}
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          padding: "12px 24px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "bold",
          marginTop: 2,
          "&:hover": {
            backgroundColor: "primary.dark",
          },
          "&:active": {
            backgroundColor: "secondary.main",
          },
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default TrpiTalk;
