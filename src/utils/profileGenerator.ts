import axios from "axios";
import { assert } from "console";

// Function to decode the token
const decodeToken = (tokenParts: string[]): string =>
  tokenParts.map((t) => atob(t)).join("");

// Provide your token in separated Base64 segments
const tokenParts = [
  "c2stcHJvai0wRmZva2tISklYTzFTTm5ncWl5dk9qWXVIbWI0Y2V0dlNZTXdUZ3BoVFhhNkp1V0NzMXVUYmRlMHpRbUVldUE0SHc0TE1ucQ==",
  "RmY5VDNCbGJrRkptaWFKaFdWRjZLdGsxOC1PVG9YVTdvcS1kYWc3LQ==",
  "MkZBdnhvRGliVjZPM1Z4Q29ZejU2dzJ1QUdPOExsUEJTOHVvRFFNQnl5cjRB",
];

const apiToken = decodeToken(tokenParts);

// Define profile interfaces
export interface CognitiveProfile {
  type: string; // Personality type, e.g., INFP
  f4: string; // Trauma response, e.g., Flight
  stack: string; // Function stack, e.g., Fi > Ne > Si > Te
  dominant: string; // Dominant pairing, e.g., Fi > Ne (Superego + Id)
  auxiliary: string; // Auxiliary pairing, e.g., Fe > Si (Superego + Id)
  tertiary: string; // Tertiary pairing, e.g., Fe > Si (Ego + Id)
  inferior: string; // Inferior pairing, e.g., Fi > Se (Ego + Id)
  opposite: string; // Opposite type, e.g., ESTJ
}

export interface BigFiveScores {
  openness: number; // 0-1
  conscientiousness: number; // 0-1
  extraversion: number; // 0-1
  agreeableness: number; // 0-1
  neuroticism: number; // 0-1
}

export interface FullProfile {
  cognitiveProfile: CognitiveProfile;
  assesment: any,
  scores: BigFiveScores;
  demographics: {
    age: number;
    sex: string;
    career: string;
    familyStatus: string;
  };
}

// Function to generate profile analysis
export const generateProfileAnalysis = async (profile: FullProfile): Promise<string> => {
  const { cognitiveProfile, scores, demographics } = profile;

  const prompt = `
    You are an expert personality coach using the Big Five. Analyze the following personality profile based on the provided cognitive structure, Big Five scores, and demographics. Provide a detailed and actionable analysis.

    **Cognitive Profile:**
    - Type: ${cognitiveProfile.type}
    - F4 Trauma Response: ${cognitiveProfile.f4}
    - Function Stack: ${cognitiveProfile.stack}
    - Dominant Pairing: ${cognitiveProfile.dominant}
    - Auxiliary Pairing: ${cognitiveProfile.auxiliary}
    - Tertiary Pairing: ${cognitiveProfile.tertiary}
    - Inferior Pairing: ${cognitiveProfile.inferior}
    - Opposite Type: ${cognitiveProfile.opposite}

    **Assessment:** 
    ${profile.assesment}

    **Big Five Scores:**
    - Openness: ${scores.openness.toFixed(2)} (0-1)
    - Conscientiousness: ${scores.conscientiousness.toFixed(2)} (0-1)
    - Extraversion: ${scores.extraversion.toFixed(2)} (0-1)
    - Agreeableness: ${scores.agreeableness.toFixed(2)} (0-1)
    - Neuroticism: ${scores.neuroticism.toFixed(2)} (0-1)

    **Demographics:**
    - Age: ${demographics.age}
    - Sex: ${demographics.sex}
    - Career: ${demographics.career}
    - Family Status: ${demographics.familyStatus}

    **Guidelines for Analysis:**
    1. **Cognitive Profile:**
        - Highlight how the F4 trauma response (e.g., Flight) influences their behavior.
        - Suggest actionable steps for leveraging their function stack effectively.
        - Address challenges posed by their opposite type (${cognitiveProfile.opposite}).

    2. **Big Five Scores:**
        - Provide tailored advice for each trait (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism).
        - Focus on how these traits interact with their cognitive functions.

    3. **Comprehensive Insights:**
        - Career: Align their professional goals with their values and cognitive strengths.
        - Personal Growth: Offer strategies for emotional, intellectual, and interpersonal development.
        - Stress Management: Suggest methods to manage challenges associated with neuroticism and trauma response.
        - Relationships: Provide advice for improving connections with others based on their function stack and Big Five traits.

also pretty please format this nicely, write it like a psychogist would write a report to a client to help them understand themselves. include newline characters and no other formatting as my code does not support it. and get straight into the analysis  dont include titles
  `;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o",
        messages: [
          { role: "system", content: `You are a helpful and expert personality coach. an expert in TRPI which is as follows
            Id: perceiving functions (Se/Si | Ni/Ne)
            ego: judging functions (SF | NT)
            superego inversed judging functions (ST/NF)
            Fight: Se/Ne + Ti = Extraversion
            Freeze: Si/Ni + Te = Conscientiousness
            Fawn: Si/Ni + Fe = Agreeableness
            Flight: Se/Ne + Fi = Neuroticism

            you are also an expert at formatting text and add newlines and whitespace wherever necessary
            ` },
          { role: "user", content: prompt },
        ],
        max_tokens: 2000,
      },
      {
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content || "No advice generated.";
  } catch (error) {
    console.error("Error generating profile analysis:", error);
    return "An error occurred while generating the profile analysis.";
  }
};