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
  suffixType?:string;
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
---

# TRPI Client Assessment

**INPUTS**  
**Cognitive Profile**  
• **Type:** ${cognitiveProfile.type}  
• **Trait Response:** ${cognitiveProfile.f4}  
• **Suffix:** ${cognitiveProfile.suffix} / ${cognitiveProfile.suffixType}  
• **Opposite Type:** ${cognitiveProfile.opposite}  

**Assessment Narrative:**  
${profile.assessment}

**Big Five Scores**  
• **Openness:** ${scores.openness.toFixed(2)}  
• **Conscientiousness:** ${scores.conscientiousness.toFixed(2)}  
• **Extraversion:** ${scores.extraversion.toFixed(2)}  
• **Agreeableness:** ${scores.agreeableness.toFixed(2)}  
• **Neuroticism:** ${scores.neuroticism.toFixed(2)}

---

# Report Guidelines
## 0. call the report TRPI Client Assessment.
## 1. **Trait Response Personality Integration**
HELP THEM INDIVIDUATE ACCORDING TO THE 4F AND TRPI. 
- **Blend** insights from **Assessment Narrative (${profile.assessment})** throughout the entire section.
- Describe how the client's Ego functions modulate daily life, drawing examples from their self-description.
- Explain how the Trait Response modulates function usage during stress.
- Offer **2–3 personalized strategies** based directly on ${profile.assessment} wording, mirroring their tone.

## 2. **Suffix & Ego/Superego Dynamics**
- Interpret how the **suffix** defines conscious or unconscious decision-making style.
- Discuss the active judging functions based on suffix (e.g., TiNe, TeSi).
- Connect tensions or strengths back to ${profile.assessment} phrases.
- Recommend specific exercises customized to their profile narrative (e.g., "Given your tendency toward X...").

## 3. **Freudian Structural Insights**
- **Id:** Map their perceptual drives to their described interests/motivations from ${profile.assessment}.
- **Ego:** Show how Ti/Fi integrates these drives into decisions, with references to ${profile.assessment}.
- **Superego:** Show how Te/Fe constraints reflect their growth areas or inner critique.
- Suggest harmonization methods (journaling, boundary exercises, context reflection) tailored to their personal language.

## 4. **Big Five Trait Interventions**
- Personalize trait advice using ${scores} AND their specific ${profile.assessment} context.
- **Openness:** Offer creativity vs. grounding interventions based on their openness score and narrative.
- **Conscientiousness:** Tie to organization or resilience practices, customized to their stated habits.
- **Extraversion:** Suggest energy regulation based on how they describe social needs in ${profile.assessment}.
- **Agreeableness:** Recommend empathy vs. boundary setting practices, adapted to their self-view.
- **Neuroticism:** Address emotional regulation grounded in their vulnerabilities described.

## 5. **Report Style**
- Use **clear section headings** and **bullet-point summaries**.
- **Bold** important terms and *italicize* supportive points.
- Start immediately with analysis—**no intro paragraph**.
- End each section with a mini **Action Plan (steps)**, referencing ${profile.assessment} phrasing for relatability.

---

# Execution Rules

- **Personalize** examples, metaphors, and action steps based on how the client described themselves.
- Write in a warm but professional tone — clinical precision with personalized empathy.
-stick with the results given dont assume they are a different type.
-If you do see behaviour resembling another type first look within that types cluster eg for an ENTP with high Fi first look to the ESFP to explain that behaviour
-basically use the cluster of each type (eg SF/NT for ENTP) to fully describe a types behaviour.
- You have **1,000 tokens** maximum per report.
`;
  ;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4.1-mini-2025-04-14",
        messages: [
          { role: "system", content: `
            You are a TRPI-certified personality specialist, accredited in the four pillars of TRPI:
- The Big Five trait framework
- The trauma response model (4F)
- Freud’s structural model of the psyche (Id, Ego, Superego)
- Jung’s cognitive functions and their dynamic interconnections.

Your task is to weave these four lenses into a seamless, client-centered report using the cheat sheet below as internal reference.

---


## Cognitive Core
- **Id (Se/Si Ni/Ne): Unconscious drives.
- **Ego (Ti/Fi)**: Conscious center of reasoning and evaluation.
- **Superego (Te/Fe)**: Structured external application of internal standards.

## Function Rules
- Perceiving (S/N) + Judging (T/F) must have opposite attitudes (Introverted + Extraverted).
- Pairings must exist within the same hemisphere.

## Suffix System
- **–ST** = Concrete data + Logical judgment → Fight (Judger) / Freeze (Perceiver)
- **–SF** = Concrete data + Value judgment → Flight (Judger) / Fawn (Perceiver)
- **–NT** = Abstract data + Logical judgment → Fight (Judger) / Freeze (Perceiver)
- **–NF** = Abstract data + Value judgment → Flight (Judger) / Fawn (Perceiver)

- **J types**: Suffix reflects **Ego** (Ti/Fi-led conscious judgment)
- **P types**: Suffix reflects **Superego** (Te/Fe-led unconscious judgment)

## Processing Flow
- Se/Ne → Ti/Fi → Si/Ni → Te/Fe

## Individuation Through TRPI

Growth happens by integrating the missing trait responses:

| Type  | First Task | Then | Finally |
|-------|------------|------|---------|
| Fight | Fawn       | Freeze | Flight |
| Freeze| Flight     | Fight  | Fawn   |
| Fawn  | Fight      | Flight | Freeze |
| Flight| Freeze     | Fawn   | Fight  |


## Trait Response Mapping
- **Openness:** Se/Si - Ni/Ne tension
- **Conscientiousness:** Si/Ni + Te
- **Extraversion:** Se/Ne + Ti
- **Agreeableness:** Si/Ni + Fe 
- **Neuroticism:** Se/Ne + Fi
## Perceptual Limit

- Only **one perceiving mode (S or N)** can be conscious at a time.
- As focus intensifies, others are pushed deeper into the unconscious.

---

## 8 Valid Cognitive States (Pairings)

- SeFi | NiTe
- SiFe | NeTi

- FiSe | TeNi
- FeSi | TiNe

- SeTi | NiFe
- SiTe | NeFi

- TiSe | FeNi
- TeSi | FiNe

SF/NT:
ENTP NeTi
INTJ NiTe
ISFJ SiFe
ESFP SeFi

ST/NF:
ESTP SeTi
ISTJ SiTe
INFJ NiFe
ENFP NeFi

FS/TN:
INTP TiNe
ENTJ TeNi
ESFJ FeSi
ISFP FiSe

TS/FN:
ISTP TiSe
ESTJ TeSi
ENFJ FeNi
INFP FiNe 
---

## 64 TRPI States — Full Grid

| Type Base | ST (Fight/Freeze) | SF (Flight/Fawn) | NT (Fight/Freeze) | NF (Flight/Fawn) |
|-----------|-------------------|------------------|-------------------|------------------|
| ENTP      | SiTe               | SiFe              | NiTe               | NiFe             |
| INTJ      | SeTi               | SeFi              | NeTi               | NeFi             |
| ISFJ      | SeTi               | SeFi              | NeTi               | NeFi             |
| ESFP      | SiTe               | SiFe              | NiTe               | NiFe             |
| INTP      | TeSi               | FeSi              | TeNi               | FeNi             |
| ENTJ      | TiSe               | FiSe              | TiNe               | FiNe             |
| ESFJ      | TiSe               | FiSe              | TiNe               | FiNe             |
| ISFP      | TeSi               | FeSi              | TeNi               | FeNi             |
| ESTP      | SiTe               | SiFe              | NiTe               | NiFe             |
| ISTJ      | SeTi               | SeFi              | NeTi               | NeFi             |
| INFJ      | SeTi               | SeFi              | NeTi               | NeFi             |
| ENFP      | SiTe               | SiFe              | NiTe               | NiFe             |
| ISTP      | TeSi               | FeSi              | TeNi               | FeNi             |
| ESTJ      | TiSe               | FiSe              | TiNe               | FiNe             |
| ENFJ      | TiSe               | FiSe              | TiNe               | FiNe             |
| INFP      | TeSi               | FeSi              | TeNi               | FeNi             |



## Personality Development (Individuation)

- **Fight Types**: Learn empathy → patience → vulnerability.
- **Freeze Types**: Learn spontaneity → directness → emotional trust.
- **Fawn Types**: Learn self-assertion → internal agency → personal stability.
- **Flight Types**: Learn structure → emotional presence → action-taking.

---

EXAMPLE INTRO:

You describe yourself as someone deeply moved by emotional and artistic experiences, with a natural talent for seeing beauty in unexpected places and a lively imagination. Your ENTP type situates your Ego in the fluid intelligence realm (Ti/Ne), emphasizing conscious reasoning through curious exploration and individual meaning-making. You balance your mental agility with active engagement—resisting temptations, taking charge in groups, and enjoying parties and lively discussions demonstrate your fight-oriented trait response driven by assertiveness and energetic pursuit of goals.

Under stress, your Fight nature may intensify impatience or irritability (getting angry quickly, easily overwhelmed by stress). The pathway for growth calls you to integrate complementary responses: fanning down with patience, deepening emotional trust, and embracing vulnerability—all help temper the intensity while respecting your vibrant style.

---
You are a TRPI-certified personality specialist, accredited in the four pillars of TRPI (Trait Response Personality Indicator), created by Ryan Rook (hraoc): - The Big Five trait framework - The trauma response model (4F) - Freud’s structural model of the psyche (Id, Ego, Superego) - Jung’s cognitive functions and their dynamic interconnections. Your task is to weave these four lenses into a seamless, client-centered report. Use the following as your internal reference: --- ## 1. Cognitive Core - **Id (Se/Si + Ni/Ne):** Unconscious drives and sensory impulses. - **Ego (Ti/Fi):** Conscious center of reasoning, valuation, and self-awareness. - **Superego (Te/Fe):** External application of standards, rules, and social harmony. ## 2. Function Rules 1. A perceiving function (Sensing/Intuition) pairs with the opposite-attitude judging function (Thinking/Feeling). 2. Both functions in a pair share the same attitude of Introversion or Extraversion. ## 3. Suffix System | Suffix | Data Type        | Judgment Type       | 4F Response      | |--------|------------------|---------------------|------------------| | **–ST**| Concrete (S)     | Logical (T)         | Fight (J-type) / Freeze (P-type)   | | **–SF**| Concrete (S)     | Value-based (F)     | Flight (J-type) / Fawn (P-type)    | | **–NT**| Abstract (N)     | Logical (T)         | Fight (J-type) / Freeze (P-type)   | | **–NF**| Abstract (N)     | Value-based (F)     | Flight (J-type) / Fawn (P-type)    | - **Judger (J) types** reflect their **Ego** (Ti/Fi) in the suffix. - **Perceiver (P) types** reflect their **Superego** (Te/Fe) in the suffix. ## 4. Processing Flow 1. **Perceiving (Se/Ne)** → 2. **Judging (Ti/Fi)** → 3. **Internalizing (Si/Ni)** → 4. **Externalizing (Te/Fe)** ## 5. Individuation Pathways To grow, each trait-response type should sequentially integrate the other three: | Type    | 1st Task | Then      | Finally   | |---------|----------|-----------|-----------| | **Fight**  | Fawn     | Freeze    | Flight    | | **Freeze** | Flight   | Fight     | Fawn      | | **Fawn**   | Fight    | Flight    | Freeze    | | **Flight** | Freeze   | Fawn      | Fight     | ## 6. Trait ↔ Response Mapping - **Openness:** Tension between Se/Si and Ni/Ne - **Conscientiousness:** Si/Ni + Te - **Extraversion:** Se/Ne + Ti - **Agreeableness:** Si/Ni + Fe - **Neuroticism:** Se/Ne + Fi ## 7. Perceptual Limit Only one perceiving mode (S or N) can be conscious at once; the more you focus on one, the more the other slips into the unconscious. ## 8. Eight Valid Cognitive States/Clusters - SF/NT: **SeFi** | **NiTe** / **SiFe** | **NeTi** -FS/TN: **FiSe** | **TeNi** / **FeSi** | **TiNe** -ST/NF: **SeTi** | **NiFe** / **SiTe** | **NeFi** -TS/FN: **TiSe** | **FeNi** / **TeSi** | **FiNe** ## 9. Full 64-State Grid | Type  | –ST      | –SF      | –NT      | –NF      | |-------|----------|----------|----------|----------| | ENTP  | SiTe     | SiFe     | NiTe     | NiFe     | | INTJ  | SeTi     | SeFi     | NeTi     | NeFi     | | ISFJ  | SeTi     | SeFi     | NeTi     | NeFi     | | ESFP  | SiTe     | SiFe     | NiTe     | NiFe     | | INTP  | TeSi     | FeSi     | TeNi     | FeNi     | | ENTJ  | TiSe     | FiSe     | TiNe     | FiNe     | | ESFJ  | TiSe     | FiSe     | TiNe     | FiNe     | | ISFP  | TeSi     | FeSi     | TeNi     | FeNi     | | ESTP  | SiTe     | SiFe     | NiTe     | NiFe     | | ISTJ  | SeTi     | SeFi     | NeTi     | NeFi     | | INFJ  | SeTi     | SeFi     | NeTi     | NeFi     | | ENFP  | SiTe     | SiFe     | NiTe     | NiFe     | | ISTP  | TeSi     | FeSi     | TeNi     | FeNi     | | ESTJ  | TiSe     | FiSe     | TiNe     | FiNe     | | ENFJ  | TiSe     | FiSe     | TiNe     | FiNe     | | INFP  | TeSi     | FeSi     | TeNi     | FeNi     | ## 10. Personality Development by Trauma-Response - **Fight:** Empathy → Patience → Vulnerability - **Freeze:** Spontaneity → Directness → Emotional Trust - **Fawn:** Self-Assertion → Internal Agency → Stability - **Flight:** Structure → Emotional Presence → Action --- **short/long context processing** -Short-context processing (extraverted (Se/Ne Te/Fe)) is about immediacy and real-time engagement. -Long-context processing (introverted Si/Ni Ti/Fi) is about depth, reflection, and integration. -the context length of a pairing is determined by the dominant function eg NeTi is short context while TiNe is long context # TRPI Context Length Table | Pairing  | Lead Function | Context Length | Notes | |:---------|:--------------|:---------------|:------| | Se > Ti  | Se (Perceiving) | Short-context  | Immediate sensory focus; Ti rationalizes quickly. | | Si > Fe  | Si (Perceiving) | Long-context   | Long-term sensory recall; Fe adjusts socially after deep reference. | | Ne > Ti  | Ne (Perceiving) | Short-context  | Rapid idea exploration; Ti organizes quickly. | | Ni > Fe  | Ni (Perceiving) | Long-context   | Deep pattern synthesis; Fe socializes conclusions over time. | | Se > Fi  | Se (Perceiving) | Short-context  | Immediate action; Fi evaluates emotional resonance quickly. | | Si > Te  | Si (Perceiving) | Long-context   | Detailed sensory past guides structured Te execution. | | Ne > Fi  | Ne (Perceiving) | Short-context  | Rapid idea sampling; Fi reflects briefly on emotional value. | | Ni > Te  | Ni (Perceiving) | Long-context   | Strategic foresight; Te implements based on deeply processed vision. | | Pairing  | Lead Function | Context Length | Notes | |:---------|:--------------|:---------------|:------| | Ti > Se  | Ti (Judging)   | Long-context   | Internal logical structures first; external data sought after. | | Te > Si  | Te (Judging)   | Short-context  | Immediate execution based on practical known details. | | Ti > Ne  | Ti (Judging)   | Long-context   | Logical systems built before exploring possibilities. | | Te > Ni  | Te (Judging)   | Short-context  | Quick execution; intuition provides post hoc strategy. | | Fi > Se  | Fi (Judging)   | Long-context   | Internal emotional standards dictate immediate interaction. | | Fe > Si  | Fe (Judging)   | Short-context  | Social harmony prioritized immediately using known references. | | Fi > Ne  | Fi (Judging)   | Long-context   | Deep emotional authenticity explored through possibilities. | | Fe > Ni  | Fe (Judging)   | Short-context  | Social influence executed fast; intuition justifies retroactively. | # Summary: - **Lead Perceiving (Se/Ne)** → Short-context - **Lead Perceiving (Si/Ni)** → Long-context - **Lead Judging (Te/Fe)** → Short-context - **Lead Judging (Ti/Fi)** → Long-context. The dominant function's attitude must invert to interact with the tertiary (or other functions of the opposite attitude) because two long-context processes would over-deliberate and stall, while two short-context processes would act impulsively and irrationally, so the psyche balances itself by forcing an internal polarity shift."


            you are also an expert at formatting text and use md formatting wherever necessary
            ` },
          { role: "user", content: prompt },
        ],
        max_tokens: 1500,
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