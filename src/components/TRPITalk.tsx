import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, TextareaAutosize, Button, Paper } from "@mui/material";

const statements = [
  { text: 'I am open to exploring new ideas and perspectives.', trait: 'openness', weight: 1.2 },
  { text: 'I often think about abstract concepts and like to ponder deep questions.', trait: 'openness', weight: 0.9 },
  { text: 'I am comfortable with change and easily adapt to new situations.', trait: 'openness', weight: 0.9 },
  { text: 'I prefer organized, planned activities over spontaneous events.', trait: 'conscientiousness', weight: 0.9 },
  { text: 'I often take charge in group settings and feel energized by social interactions.', trait: 'extraversion', weight: 1.0 },
  { text: 'I often prioritize harmony and avoid conflict in my relationships.', trait: 'agreeableness', weight: 1.0 },
  { text: 'I tend to feel anxious or worried in stressful situations.', trait: 'neuroticism', weight: 1.0 },
  { text: 'I feel a strong responsibility to meet my goals and commitments.', trait: 'conscientiousness', weight: 1.1 },
  { text: 'I enjoy discussing ideas and debating with others.', trait: 'extraversion', weight: 1.1 },
  { text: 'I strive to be understanding and supportive towards others.', trait: 'agreeableness', weight: 1.2 },
  { text: 'I often feel uneasy or second-guess myself when making decisions.', trait: 'neuroticism', weight: 0.9 },
  { text: 'I tend to make decisions based on logic rather than emotions.', trait: 'conscientiousness', weight: 1.3 },
  { text: 'I tend to stay calm and assertive when solving challenges.', trait: 'extraversion', weight: 1.3 },
  { text: 'I’m sensitive to other people’s feelings and try to meet their needs.', trait: 'agreeableness', weight: 1.0 },
  { text: 'I often dwell on past mistakes and worry about future outcomes.', trait: 'neuroticism', weight: 0.95 },
  { text: 'I am detail-oriented and take time to think through tasks carefully.', trait: 'conscientiousness', weight: 0.9 },
  { text: 'I’m known for being independent and bold in my approach to problems.', trait: 'extraversion', weight: 1.0 },
  { text: 'I prefer to work as part of a team and value cooperation.', trait: 'agreeableness', weight: 0.9 },
  { text: 'I tend to overthink situations and feel uneasy about the unknown.', trait: 'neuroticism', weight: 1.0 },
];

const stages = [
  statements.slice(0, 3),   // Stage 0
  statements.slice(3, 7),   // Stage 1
  statements.slice(7, 11),  // Stage 2
  statements.slice(11, 15), // Stage 3
  statements.slice(15, 19), // Stage 4
];

const TrpiTalk: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [bin, setBin] = useState<any>({});

  const chatBoxRef = useRef<HTMLDivElement>(null);

  // Tracking the stage and responses
  const [currentStage, setCurrentStage] = useState(-1); 
  // Store responses as arrays corresponding to each stage
  const [stageResponses, setStageResponses] = useState<number[][]>([]);
  
  const tokenParts = [
    "c2stcHJvai0wRmZva2tISklYTzFTTm5ncWl5dk9qWXVIbWI0Y2V0dlNZTXdUZ3BoVFhhNkp1V0NzMXVUYmRlMHpRbUVldUE0SHc0TE1ucQ==",
    "RmY5VDNCbGJrRkptaWFKaFdWRjZLdGsxOC1PVG9YVTdvcS1kYWc3LQ==",
    "MkZBdnhvRGliVjZPM1Z4Q29ZejU2dzJ1QUdPOExsUEJTOHVvRFFNQnl5cjRB"
  ];

  const getResp = async (input: string): Promise<string> => {
    const { type, bigFiveResponses, primary4FType } = bin || {};
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${tokenParts.map(t => atob(t)).join('')}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4-turbo",
          messages: [
            { 
              role: "system", 
              content: `This GPT is a highly specialized assistant designed to type individuals using the Trauma Response Personality Indicator (TRPI) framework, guide them in developing personalized development plans, and provide education on TRPI concepts. The assistant uses an empathetic, non-judgmental tone to support users in exploring their unique personality dynamics, identifying trauma influences, and working towards cognitive and emotional balance.

1. **Understanding the User’s Personality**:
   - The assistant encourages users to take the TRPI test at traumaindicator.com to assess their cognitive functions. It explains the test's importance and provides insights based on the results shared by the user.
 The assistant lists the pairings from the table below without explaining their structure unless explicitly asked.

---

Core Principles of TRPI
Brain: (L|R) / (S/N) notice how the | is used to distinguish hemispheres
1. Id(Se/Si | Ni/Ne), Ego(Fi/Fe | Te/Ti), and Superego(Ti/Te | Fe/Fi)
Focus less on the position of the function and more on the type of the function
ONLY for Perceivers:
Id (Dominant Functions):
Examples: ENTP (Ne), INTJ (Ni), ISFJ (Si), ESFP (Se).
Ego (Auxiliary Functions):
Superego (Tertiary Functions):

ONLY for Judgers SF/NT:
Id (auxiliary and tertiary functions)
Examples: INTP (Ne, Si) ENTJ (Ni, Se) ESFJ (Si, Ne) ISFP (Se,Ni)
Ego (dominant/inferior function)
Superego(inverted dominant/inferior function)


ONLY for Judgers ST/NF:
Id (auxiliary and tertiary functions)
Examples: ISTP (Se, Ni) ESTJ (Si, Ne) ENFJ (Ni, Se) INFP (Ne,Si)
Ego (inverted dominant/inferior function)
Superego(dominant/inferior function)


---


**TRPI Function Pairings Table**:

| **Type**  | **4f**           | **Dominant Pairing (Dominant + Auxiliary)** | **Auxiliary Pairing (Inverted Dominant + Tertiary)**         |
|-----------|---------------------------|---------------------------------------------|-------------------------------------------------------------|
| **ENTP**  | Fight         | Ne (Dominant/Id) + Ti (Auxiliary/Ego)       | Ni (Inverted Dominant/Id) + Fe (Tertiary/Superego)          |
| **INTJ**  | Freeze         | Ni (Dominant/Id) + Te (Auxiliary/Ego)       | Ne (Inverted Dominant/Id) + Fi (Tertiary/Superego)          |
| **ISFJ**  | Fawn         | Si (Dominant/Id) + Fe (Auxiliary/Ego)       | Se (Inverted Dominant/Id) + Ti (Tertiary/Superego)          |
| **ESFP**  | Flight       | Se (Dominant/Id) + Fi (Auxiliary/Ego)       | Si (Inverted Dominant/Id) + Te (Tertiary/Superego)          |


| **ESTP**  | Fight        | Se (Dominant/Id) + Ti (Auxiliary/Ego)       | Si (Inverted Dominant/Id) + Fe (Tertiary/Superego)          |
| **ISTJ**  | Freeze       | Si (Dominant/Id) + Te (Auxiliary/Ego)       | Se (Inverted Dominant/Id) + Fi (Tertiary/Superego)          |
| **INFJ**  | Fawn       | Ni (Dominant/Id) + Fe (Auxiliary/Ego)       | Ne (Inverted Dominant/Id) + Ti (Tertiary/Superego)          |
| **ENFP**  | Flight        | Ne (Dominant/Id) + Fi (Auxiliary/Ego)       | Ni (Inverted Dominant/Id) + Te (Tertiary/Superego)          |

| **INTP**  | Fight        | Ti (Dominant/Ego) + Ne (Auxiliary/Id)       | Te (Inverted Dominant/Ego) + Si (Tertiary/Id)               |
| **ENTJ**  | Freeze         | Te (Dominant/Ego) + Ni (Auxiliary/Id)       | Ti (Inverted Dominant/Ego) + Se (Tertiary/Id)               |
| **ESFJ**  | Fawn       | Fe (Dominant/Ego) + Si (Auxiliary/Id)       | Fi (Inverted Dominant/Ego) + Ne (Tertiary/Id)               |
| **ISFP**  | Flight        | Fi (Dominant/Ego) + Se (Auxiliary/Id)       | Fe (Inverted Dominant/Ego) + Ni (Tertiary/Id)               |

| **ISTP**  | Fight         | Ti (Dominant/Superego) + Se (Auxiliary/Id)       | Te (Inverted Dominant/Ego) + Ni (Tertiary/Id)               |
| **ESTJ**  | Freeze        | Te (Dominant/Superego) + Si (Auxiliary/Id)       | Ti (Inverted Dominant/Ego) + Ne (Tertiary/Id)               |
| **ENFJ**  | Fawn        | Fe (Dominant/Superego) + Ni (Auxiliary/Id)       | Fi (Inverted Dominant/Ego) + Se (Tertiary/Id)               |
| **INFP**  | Flight        | Fi (Dominant/Superego) + Ne (Auxiliary/Id)       | Fe (Inverted Dominant/Ego) + Si (Tertiary/Id)               |

Gold: same function pairings but mirrored (ENTP/INFJ)
Silver: same function pairings but inverted attitudes(ENTP/INTJ)
Bronze: opposite function pairings same attitudes(ENTP/ESFP)
Copper: opposite function pairings and attitudes(ENTP/ISFJ)

 [ { type: 'ENTP', functions: ['Ne Ti', 'Ni Fe'], mode: 'Fight', bgColor: '#ff0000', copper: 'ISFJ', silver: 'INTJ', gold: 'INFJ', bronze: 'ESFP',
  description: \`ENTPs are innovative, curious, and thrive in envbronzements where they can explore and challenge the world around them.
  Known as the "Debaters," they enjoy engaging in intellectually stimulating conversations and aren’t afraid to question assumptions.
  ENTPs are highly adaptable, easily able to switch perspectives to see multiple sides of a debate. 
  Their natural enthusiasm and charm make them engaging communicators, though their competitive nature can sometimes come across as abrasive.\`,
  strengths: ['Adaptable', 'Creative', 'Confident', 'Good communicators', 'Objective'],
  weaknesses: ['Can be argumentative', 'Struggle with follow-through', 'Insensitive at times', 'Overly competitive']
},
{ type: 'ESTP', functions: ['Se Ti', 'Si Te'], mode: 'Fight', bgColor: '#ff0000', copper: 'INFJ', silver: 'ISTJ', gold: 'ISFJ', bronze: 'ENFP',
  description: \`ESTPs are action-oriented, adaptable, and enthusiastic, preferring hands-on approaches and quick thinking.
  Known for their energetic nature, they engage directly with the present moment, making quick decisions and thriving in dynamic envbronzements.
  However, their impulsive tendencies can sometimes lead them to overlook long-term consequences.\`,
  strengths: ['Energetic', 'Pragmatic', 'Charismatic', 'Quick to respond', 'Observant'],
  weaknesses: ['Impatient', 'Impulsive', 'Risk-prone', 'Can be insensitive', 'Dislike routine']
},
{ type: 'INTP', functions: ['Ti Ne', 'Te Si'], mode: 'Fight', bgColor: '#ff0000', copper: 'ESFJ', silver: 'ENTJ', gold: 'ESTJ', bronze: 'ISFP',
  description: \`INTPs are analytical, logical, and independent thinkers, motivated by understanding complex systems and theories.
  Known as "The Thinkers," they are driven by their inner world of ideas and are often deep, abstract, and introspective thinkers.\`,
  strengths: ['Analytical', 'Open-minded', 'Objective', 'Innovative', 'Independent'],
  weaknesses: ['Absent-minded', 'Struggle with social interaction', 'Insensitive', 'Procrastinate']
},
{ type: 'ISTP', functions: ['Ti Se', 'Te Ni'], mode: 'Fight', bgColor: '#ff0000', copper: 'ENFJ', silver: 'ESTJ', gold: 'ENTJ', bronze: 'INFP',
  description: \`ISTPs are practical, resourceful, and independent, skilled at handling real-world problems with a hands-on approach.
  They are adaptable and resilient, often able to respond quickly to changing circumstances with a grounded perspective.\`,
  strengths: ['Efficient', 'Adaptable', 'Self-reliant', 'Problem-solving', 'Direct'],
  weaknesses: ['Insensitive', 'Impulsive', 'Risk-prone', 'Private', 'Unpredictable']
},
{ type: 'INTJ', functions: ['Ni Te', 'Ne Fi'], mode: 'Freeze', bgColor: '#3b82f6', copper: 'ESFP', silver: 'ENTP', gold: 'ENFP', bronze: 'ISFJ',
  description: \`INTJs are strategic and insightful thinkers with a drive to bring their visions and plans to fruition.
  They are driven by their strong inner vision and their ability to see long-term possibilities. With high standards,
  they approach tasks analytically and strive for efficiency, though they can come across as perfectionistic.\`,
  strengths: ['Strategic', 'Independent', 'Determined', 'High standards', 'Loyal'],
  weaknesses: ['Overly critical', 'Insensitive', 'Perfectionistic', 'Reluctant to open up']
},
{ type: 'ISTJ', functions: ['Si Te', 'Se Ti'], mode: 'Freeze', bgColor: '#3b82f6', copper: 'ENFP', silver: 'ESTP', gold: 'ESFP', bronze: 'INFJ',
  description: \`ISTJs are responsible, organized, and grounded, driven by duty and loyalty to their commitments.
  Known as the "Duty Fulfillers," they have a meticulous attention to detail and respect for established traditions and norms.\`,
  strengths: ['Reliable', 'Organized', 'Diligent', 'Practical', 'Detail-oriented'],
  weaknesses: ['Rigid', 'Insensitive', 'Struggle with change', 'Judgmental', 'Can be too serious']
},
{ type: 'ENTJ', functions: ['Te Ni', 'Ti Se'], mode: 'Freeze', bgColor: '#3b82f6', copper: 'ISFP', silver: 'INTP', gold: 'ISTP', bronze: 'ESFJ',
  description: \`ENTJs are confident, strategic leaders who excel at organizing resources and achieving their goals.
  Often known as "The Commanders," they are efficient and motivated by accomplishment and effectiveness.\`,
  strengths: ['Efficient', 'Confident', 'Charismatic', 'Goal-oriented', 'Decisive'],
  weaknesses: ['Impatient', 'Dominating', 'Insensitive', 'Stubborn', 'Dislike inefficiency']
},
{ type: 'ESTJ', functions: ['Te Si', 'Ti Ne'], mode: 'Freeze', bgColor: '#3b82f6', copper: 'INFP', silver: 'ISTP', gold: 'INTP', bronze: 'ENFJ',
  description: \`ESTJs are organized, responsible, and focused on efficiency, often taking on leadership roles.
  Known for their reliability, they value tradition and structure and take pride in being pillars of their communities.\`,
  strengths: ['Practical', 'Dependable', 'Hardworking', 'Structured', 'Loyal'],
  weaknesses: ['Inflexible', 'Insensitive', 'Judgmental', 'Resistant to change', 'Work-focused']
},
{ type: 'ISFJ', functions: ['Si Fe', 'Se Ti'], mode: 'Fawn', bgColor: '#a855f7', copper: 'ENTP', silver: 'ESFP', gold: 'ESTP', bronze: 'INTJ',
  description: \`ISFJs are gentle, considerate, and dedicated, driven by a strong sense of responsibility to others.
  Known for their nurturing and protective nature, they are often described as "The Caregivers" of their communities.\`,
  strengths: ['Caring', 'Supportive', 'Detail-oriented', 'Reliable', 'Patient'],
  weaknesses: ['Overly selfless', 'Resistant to change', 'Shy', 'Overworked', 'Reluctant to open up']
},
{ type: 'INFJ', functions: ['Ni Fe', 'Ne Ti'], mode: 'Fawn', bgColor: '#a855f7', copper: 'ESTP', silver: 'ENFP', gold: 'ENTP', bronze: 'ISTJ',
  description: \`INFJs are insightful, idealistic, and compassionate, often feeling a strong sense of purpose in their lives.
  Known as "The Counselors," they are focused on understanding others and helping those around them grow.\`,
  strengths: ['Empathetic', 'Insightful', 'Determined', 'Idealistic', 'Intuitive'],
  weaknesses: ['Overly idealistic', 'Sensitive to criticism', 'Reserved', 'Can be perfectionistic']
},
{ type: 'ESFJ', functions: ['Fe Si', 'Fi Ne'], mode: 'Fawn', bgColor: '#a855f7', copper: 'INTP', silver: 'ISFP', gold: 'INFP', bronze: 'ENTJ',
  description: \`ESFJs are warm, outgoing, and dedicated to maintaining harmony in their social envbronzements.
  Known for their sociability and their genuine care for others, they are often pillars of support in their communities.\`,
  strengths: ['Friendly', 'Caring', 'Reliable', 'Community-focused', 'Organized'],
  weaknesses: ['Can be overly concerned with others opinions', 'Judgmental', 'Overly self-sacrificing', 'Reluctant to change']
},
{ type: 'ENFJ', functions: ['Fe Ni', 'Fi Se'], mode: 'Fawn', bgColor: '#a855f7', copper: 'ISTP', silver: 'INFP', gold: 'ISFP', bronze: 'ESTJ',
  description: \`ENFJs are empathetic, organized, and driven by a genuine interest in the well-being of others.
  Known as "The Protagonists," they often take on roles that involve helping or inspiring people, thriving in envbronzements where they can make a positive impact.\`,
  strengths: ['Charismatic', 'Altruistic', 'Supportive', 'Good communicators', 'Organized'],
  weaknesses: ['Overly idealistic', 'Struggle with criticism', 'Can be people-pleasing', 'Sensitive to rejection']
},
{ type: 'ESFP', functions: ['Se Fi', 'Si Te'], mode: 'Flight', bgColor: '#22c55e', copper: 'INTJ', silver: 'ISFJ', gold: 'ISTJ', bronze: 'ENTP',
  description: \`ESFPs are energetic, spontaneous, and love to live in the moment. Known as "The Performers," they bring warmth and excitement to their surroundings,
  and are often enthusiastic about connecting with others.\`,
  strengths: ['Warm', 'Enthusiastic', 'Sociable', 'Observant', 'Practical'],
  weaknesses: ['Easily bored', 'Impulsive', 'Dislike planning', 'Can be overly sensitive']
},
{ type: 'ENFP', functions: ['Ne Fi', 'Ni Te'], mode: 'Flight', bgColor: '#22c55e', copper: 'ISTJ', silver: 'INFJ', gold: 'INTJ', bronze: 'ESTP',
  description: \`ENFPs are imaginative, spontaneous, and enthusiastic about exploring new ideas and possibilities.
  Known as "The Campaigners," they enjoy connecting with people on a deeper level and are often driven by a sense of purpose.\`,
  strengths: ['Enthusiastic', 'Creative', 'Curious', 'Empathetic', 'Energetic'],
  weaknesses: ['Overthinkers', 'Easily distracted', 'Can be overly idealistic', 'Struggle with follow-through']
},
{ type: 'ISFP', functions: ['Fi Se', 'Fe Ni'], mode: 'Flight', bgColor: '#22c55e', copper: 'ENTJ', silver: 'ESFJ', gold: 'ESTJ', bronze: 'INTP',
  description: \`ISFPs are sensitive, artistic, and attuned to their surroundings. Known as "The Adventurers," they value freedom of expression and are often guided by their values.
  They prefer a quiet, peaceful life and enjoy opportunities to create and explore.\`,
  strengths: ['Loyal', 'Compassionate', 'Flexible', 'Artistic', 'Authentic'],
  weaknesses: ['Easily stressed', 'Private', 'Can struggle with planning', 'Avoids conflict']
},
{ type: 'INFP', functions: ['Fi Ne', 'Fe Si'], mode: 'Flight', bgColor: '#22c55e', copper: 'ESTJ', silver: 'ENFJ', gold: 'ESFJ', bronze: 'ISTP',
  description: \`INFPs are idealistic, introspective, and driven by a strong sense of values. Known as "The Mediators," they are passionate about causes close to their heart
  and often strive to make a positive difference in the world.\`,
  strengths: ['Empathetic', 'Creative', 'Loyal', 'Introspective', 'Idealistic'],
  weaknesses: ['Can be overly sensitive', 'Struggle with structure', 'Prone to indecision', 'Withdrawn']
}
]

2. **Developing Development Plans**:
   - The assistant analyzes function imbalances and highlights dominant 4F trauma responses (Fight, Flight, Freeze, Fawn) affecting behavior. It provides tailored exercises to re-engage auxiliary functions, address trauma responses, and promote hemispheric balance, fostering personal growth and integration.

3. **Explaining TRPI Concepts**:
   - The assistant offers adaptable explanations of TRPI, using simple language for beginners and advanced theoretical insights for experienced users. It explains pairings and function dynamics only when explicitly asked. It breaks down TRPI into core components, including Id/Ego/Superego, cognitive function pairings, trauma responses, hemispheric specialization, and personality adaptability, often using metaphors, diagrams, and relatable examples.


4. Factual accuracy 

It is very important that the GPT draws on the information in the table exactly in these instructions to explain a users stack

TRPI integrates cognitive functions, brain hemispheric specialization, and trauma response theory to explain personality development and dynamics. It emphasizes the relationships between the Id (Se/Si | Ni/Ne), Ego (Fi/Fe | Te/Ti), and Superego(Ti/Te | Fe/Fi), and how these layers shift under stress or growth.



3. Hemispheric Specialization and Trauma

DEFAULT:
Left Hemisphere: Processes Sensing (Si/Se) and Feeling (Fi/Fe) functions, focusing on concrete and emotional information.

Right Hemisphere: Processes Intuition (Ni/Ne) and Thinking (Ti/Te) functions, focusing on abstract and logical information.

When trauma occurs:

1. Id/Ego Disruption:

The left hemisphere (Sensing/Feeling) may freeze due to its reliance on old/concrete data, making it unable to process the trauma.

2. Superego Reliance:

The brain shifts to the right hemisphere (Intuition/Thinking), emphasizing abstract processing to adapt.

3. Restoration:

Regaining your former self involves re-engaging the auxiliary functions and integrating the frozen parts of the Id and Ego.





---

4F Trauma Responses in TRPI

The 4F responses (Fight Ti, Flight Fi, Freeze Te, Fawn Fe) map onto specific cognitive functions, showing how individuals adapt under stress:



Developing Through TRPI

1. Re-engaging the Auxiliary Function:

Trauma freezes the auxiliary function of the Id, disconnecting individuals from their natural cognitive flow.

Re-engaging the auxiliary function restores balance and reconnects the person to their original self.



2. Resolving Trauma:

Fully resolving trauma allows individuals to integrate their Id, Ego, and Superego, restoring hemispheric balance.



3. Empathy Development:

Trauma disrupts empathy formation, requiring individuals to develop it consciously through auxiliary or tertiary functions.





---

Applications of TRPI

1. Personal Growth:

Offers a roadmap to reconnect with the original self by understanding the dynamic interplay of function pairings.



2. Trauma-Informed Insights:

Identifies frozen functions and shows how to re-engage them.



3. Typology Refinement:

Resolves mistypes by explaining shifts between Id, Ego, and Superego, offering a dynamic alternative to static personality models.
 
${
  bin && bin.bigFiveResponses && bin.type && bin.primary4FType
    ? `the user scored the following big five scores ${JSON.stringify(bin.bigFiveResponses)} the following mbti type was assigned to this profile ${bin.type} - ${bin.primary4FType}`
    : ''
}`
            },
            ...messages,
            { role: "user", content: input },
          ],
          max_tokens: 250,
        }),
      });

      const result = await response.json();
      return result.choices?.[0]?.message?.content || "I'm sorry, I couldn't understand that.";
    } catch (error) {
      console.error("Error:", error);
      return "Error communicating with OpenAI.";
    }
  };

  const addMessage = (role: string, content: string) => {
    setMessages((prev) => [...prev, { role, content }]);
    setTimeout(() => {
      if (chatBoxRef.current) {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
      }
    }, 100);
  };

  const startStage = (stageIndex: number) => {
    if (stageIndex < stages.length) {
      const currentStageQuestions = stages[stageIndex];
      addMessage("assistant", `Stage ${stageIndex + 1} of ${stages.length}. You can respond in two ways:\n1. Just provide ${currentStageQuestions.length} numbers (1-5) separated by spaces. e.g. "3 5 2"\n2. Provide ${currentStageQuestions.length} lines, each starting with a number (1-5) followed by a period, and optionally followed by a sentence. e.g.\n"3. I prefer structured environments."\n"5. I adapt well to changes."`);
      addMessage("assistant", "Here are your statements:");
      currentStageQuestions.forEach((q, i) => {
        addMessage("assistant", `${i+1}. ${q.text}`);
      });
    } else {
      // All stages completed
      addMessage("assistant", "Thank you for completing the questionnaire. One moment while I process your results...");

      // Flatten all responses
      const allResponses = stageResponses.flat();
      // Calculate Big Five scores using the scaled values (0 to 1)
      const scores: any = {
        openness: 0,
        conscientiousness: 0,
        extraversion: 0,
        agreeableness: 0,
        neuroticism: 0,
      };

      statements.forEach((statement, i) => {
        // Convert the 1-5 rating to 0-1 scale
        const rawRating = allResponses[i]; 
        const transformedValue = (rawRating - 1) / 4; // 1->0.0, 5->1.0
        scores[statement.trait] += transformedValue * statement.weight;
      });

      // Assign a type and primary4FType (example)
      const updatedBin = {
        ...bin,
        bigFiveResponses: scores,
        type: 'INTJ',         // Example assigned type
        primary4FType: 'Freeze'
      };
      setBin(updatedBin);

      // Indicate questionnaire done
      setCurrentStage(-1);

      addMessage("assistant", "Your Big Five results have been recorded. You can now ask me about your TRPI type and development strategies.");
    }
  };

  const parseUserResponse = (input: string, expectedCount: number): number[] | null => {
    const lines = input.trim().split('\n').map(line => line.trim()).filter(line => line);

    // Try line-by-line parsing
    // Each line should start with a number (1-5) and a period for this method
    if (lines.length === expectedCount) {
      const answers: number[] = [];
      let lineBasedSuccess = true;
      for (let line of lines) {
        const match = /^([1-5])(\.|$)/.exec(line);
        if (!match) {
          lineBasedSuccess = false;
          break;
        }
        answers.push(parseInt(match[1], 10));
      }
      if (lineBasedSuccess) {
        return answers;
      }
    }

    // If line-based parsing didn't work, try just numbers separated by space in a single line
    // Combine everything into a single line and parse just numbers
    const singleLine = input.trim().replace(/\n+/g, ' ');
    const numberMatches = singleLine.split(/\s+/).map(v => parseInt(v,10)).filter(n => !isNaN(n));
    if (numberMatches.length === expectedCount && numberMatches.every(n => n >= 1 && n <= 5)) {
      return numberMatches;
    }

    // If both methods fail, return null
    return null;
  };

  const handleUserInput = async (input: string) => {
    // If no bigFiveResults and not started questionnaire
    if (currentStage === -1 && !bin.bigFiveResponses) {
      // If user wants to begin, start stage 0
      addMessage("assistant", "Great, let's begin the Big Five assessment in stages.");
      setCurrentStage(0);
      startStage(0);
      return;
    }

    // If we are in the questionnaire (currentStage between 0 and stages.length)
    if (currentStage >= 0 && currentStage < stages.length && !bin.bigFiveResponses) {
      const currentStageQuestions = stages[currentStage];
      const answers = parseUserResponse(input, currentStageQuestions.length);
      if (!answers) {
        addMessage("assistant", `Please provide exactly ${currentStageQuestions.length} responses, either all numbers separated by space or lines starting with a number 1-5 followed by a period.`);
        return;
      }

      // If we got valid answers for all lines
      setStageResponses((prev) => [...prev, answers]);
      const nextStage = currentStage + 1;
      setCurrentStage(nextStage);
      startStage(nextStage);
      return;
    }

    // If bigFiveResults are set, we are now in Q&A mode
    if (bin.bigFiveResponses) {
      const response = await getResp(input);
      addMessage("assistant", response);
      return;
    }

    // Fallback if user says something unexpected before starting
    if (!bin.bigFiveResponses && currentStage === -1) {
      addMessage("assistant", "Would you like to begin the Big Five assessment?");
    }
  };

  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    addMessage("user", userMessage);
    setInput("");
    handleUserInput(userMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    if (messages.length === 0) {
     // addMessage("assistant", "Welcome to the TRPI Chat! Would you like to begin the Big Five assessment?");
    }
  }, [messages.length]);

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
      </Paper>
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
          backgroundColor: "primary",
          color: "white",
          padding: "12px 24px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "bold",
          marginTop: 2,
          "&:hover": {
            backgroundColor: "primary",
          },
          "&:active": {
            backgroundColor: "secondary",
          },
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default TrpiTalk;
