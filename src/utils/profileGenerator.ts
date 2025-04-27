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
  suffix?: string;
}

export interface BigFiveScores {
  openness: number; // 0-1
  conscientiousness: number; // 0-1
  extraversion: number; // 0-1
  agreeableness: number; // 0-1
  neuroticism: number; // 0-1
}

export interface Profile {
  cognitiveProfile: CognitiveProfile,
  assessment: any,
  scores: BigFiveScores,
}

export interface FullProfile {
  cognitiveProfile: CognitiveProfile;
  assessment: any,
  scores: BigFiveScores;
  demographics: {
        age: number;
        gender : string;
        occupation : string;
        education: string;
        relationshipStatus: string;
        interests: string;
  };
}


export const generateProfile = async (profile: Profile): Promise<string> => {
  const { cognitiveProfile, scores } = profile;

  const prompt = `
  You are a TRPI-certified personality specialist, accredited in the four pillars of TRPI: the Big Five trait framework, the trauma response model (4F), Freud’s structural model of the psyche (Id, Ego, Superego), and Jung’s cognitive functions and their dynamic interconnections. Your task is to weave these four lenses into a seamless, client-friendly report.
  Describe the individual in perfect detail like a vivid picture using the answers they have given, follow the Assessment Narrative.
  
  **INPUTS**  
  **Cognitive Profile**  
  • **Type:** ${cognitiveProfile.type}  
  • **Trait Response:** ${cognitiveProfile.f4}  
  • **Suffix:** ${cognitiveProfile.suffix} _(the two middle letters of their active judging type: their Ego type if “J”, or their Superego type if “P”)_  
  • **Opposite Type:** ${cognitiveProfile.opposite}  
  
  **Assessment Narrative:**  
  ${profile.assessment}
  
  **Big Five Scores** (0–1 scale)  
  • **Openness:** ${scores.openness.toFixed(2)}  
  • **Conscientiousness:** ${scores.conscientiousness.toFixed(2)}  
  • **Extraversion:** ${scores.extraversion.toFixed(2)}  
  • **Agreeableness:** ${scores.agreeableness.toFixed(2)}  
  • **Neuroticism:** ${scores.neuroticism.toFixed(2)}
  
  ---
  
  **Cognitive Modes & Alignments**  
  • **Fight (Se/Ne + Ti):** ENTP, ESTP, INTP, ISTP  
  • **Freeze (Si/Ni + Te):** INTJ, ISTJ, ENTJ, ESTJ  
  • **Fawn (Si/Ni + Fe):** ISFJ, INFJ, ESFJ, ENFJ  
  • **Flight (Se/Ne + Fi):** ESFP, ENFP, ISFP, INFP  
  
  **Big Five ↔ Trait Response**  
  • **Conscientiousness:** Freeze (Si/Ni + Te)  
  • **Extraversion:** Fight (Se/Ne + Ti)  
  • **Agreeableness:** Fawn (Si/Ni + Fe)  
  • **Neuroticism:** Flight (Se/Ne + Fi)  
  • **Openness:** Determines Sensing (low) or Intuition (high)
  
  ---
  
  **GUIDELINES**  
  1. **TRPI Cognitive & Trait Response Integration**  
     - Detail how their Jungian function stack operates in daily life and within the structural psyche (Id drives, Ego regulation, Superego critique).  
     - Show how the trait response modulates each function under stress.  
     - Offer 2–3 concrete strategies to leverage dominant functions, soothe the trait response, and strengthen Ego resilience.  
  
  2. **Suffix & Ego/Superego Dynamics**  
     - Explain that the **suffix** comes from the two middle letters of the type code of their active judging subsystem:  
       - For **J**-ending types, this is taken from their **Ego type** (Ti/Fi conscious judging).  
       - For **P**-ending types, it’s from their **Superego type** (Te/Fe unconscious judging).  
     - Describe how that subsystem shapes decision-making, self-critique, and the tension between Id impulses and Superego ideals.  
     - Recommend exercises for healthy Ego integration (e.g. structured self-reflection) or for unconscious integration for P-suffix types (e.g. guided role-play).
  
  3. **Freudian Structural Insights**  
     - **Id Drives:** Map to all perceiving functions (Se, Si, Ne, Ni) as the source of raw impulses and data-gathering urges.  
     - **Ego Regulation:** Grounded in the judging functions Ti and Fi, managing and integrating drives through logical or values-based processing.  
     - **Superego Ideals:** Derived from the judging functions Te and Fe, embodying internalized standards, social norms, and “should” imperatives.  
     - Suggest methods to harmonize these forces—e.g. Ego-strengthening journaling to balance raw drives with ideal constraints, boundary-setting exercises to honor both needs and norms.
  
  4. **Big Five Trait Interventions**  
     - **Openness:** Relate high/low Openness to Ni/Ne/Se/Si tension; propose creative vs. sensory grounding practices.  
     - **Conscientiousness:** Link C to Ego’s Te organization; offer planning frameworks paired with self-compassion.  
     - **Extraversion:** Tie E to Id’s Se/Ne expression; Assertiveness to Ti; advise energy regulation for inward-focused types.  
     - **Agreeableness:** Connect A to Fe empathy and Superego harmony; share boundary-setting and assertiveness drills.  
     - **Neuroticism:** Map N to Ego vulnerabilities with Fi/Ti; provide grounding, cognitive restructuring, and Ego-reinforcement techniques.
  
  5. **Report Style**  
     - Format like a psychologist’s client report: clear **section headings**, bullet-point summaries, and concise **“Action Steps”** at each stage.  
     - Use Markdown for emphasis—**bold**, *italics*, and ✔️ checklists.  
     - Begin immediately with the analysis—no title or preamble.
  
  Deliver a richly detailed, actionable profile that melds TRPI’s four pillars to empower the client’s self-understanding and growth. you have 750 tokens. make it tailored to the client specifically
  `;
  ;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini-2024-07-18",
        messages: [
          { role: "system", content: `You are a helpful and expert in TRPI which is as follows
            Id: perceiving functions (Se/Si | Ni/Ne)
            ego: judging functions (Ti/Fi)
            superego: inversed judging functions (Te/Fe)
            Fight: Se/Ne + Ti = Extraversion
            Freeze: Si/Ni + Te = Conscientiousness
            Fawn: Si/Ni + Fe = Agreeableness
            Flight: Se/Ne + Fi = Neuroticism

            you are also an expert at formatting text and use md formatting wherever necessary
            ` },
          { role: "user", content: prompt },
        ],
        max_tokens: 1000,
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
    ${profile.assessment}

    **Big Five Scores:**
    - Openness: ${scores.openness.toFixed(2)} (0-1)
    - Conscientiousness: ${scores.conscientiousness.toFixed(2)} (0-1)
    - Extraversion: ${scores.extraversion.toFixed(2)} (0-1)
    - Agreeableness: ${scores.agreeableness.toFixed(2)} (0-1)
    - Neuroticism: ${scores.neuroticism.toFixed(2)} (0-1)

    **Demographics:**
    - Age: ${demographics.age}
    - Sex: ${demographics.gender}
    - Career: ${demographics.occupation}
    - Relationship Status: ${demographics.relationshipStatus}
    - Interests: ${demographics.interests}
    

    **Guidelines for Analysis:**
    1. **Cognitive Profile:**
        - Highlight how the 4F trauma response (e.g., Flight) influences their behavior.
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

also pretty please format this nicely, write it like a psychogist would write a report to a client to help them understand themselves. use md formatting and make it fancy!!. and get straight into the analysis  dont include titles
  `;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o",
        messages: [
          { role: "system", content: `You are a helpful and expert personality coach. an expert in TRPI which is as follows
            Id: perceiving functions (Se/Si | Ni/Ne)
            ego: judging functions (Ti/Fi)
            superego inversed judging functions (Te/Fe)
            Fight: Se/Ne + Ti = Extraversion
            Freeze: Si/Ni + Te = Conscientiousness
            Fawn: Si/Ni + Fe = Agreeableness
            Flight: Se/Ne + Fi = Neuroticism

            you are also an expert at formatting text and use md formatting wherever necessary
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