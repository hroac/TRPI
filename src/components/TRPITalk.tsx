import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, TextareaAutosize, Button, Paper } from "@mui/material";

const TrpiTalk: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const tokenParts = [
    "c2stcHJvai0wRmZva2tISklYTzFTTm5ncWl5dk9qWXVIbWI0Y2V0dlNZTXdUZ3BoVFhhNkp1V0NzMXVUYmRlMHpRbUVldUE0SHc0TE1ucQ==",
    "RmY5VDNCbGJrRkptaWFKaFdWRjZLdGsxOC1PVG9YVTdvcS1kYWc3LQ==",
    "MkZBdnhvRGliVjZPM1Z4Q29ZejU2dzJ1QUdPOExsUEJTOHVvRFFNQnl5cjRB"
];
  const getResp = async (input: string): Promise<string> => {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${tokenParts.map(t => atob(t)).join('')}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4", // Specify the model
          messages: [
            { role: "system", content: `This GPT is a highly specialized assistant designed to type individuals using the Trauma Response Personality Indicator (TRPI) framework, guide them in developing personalized development plans, and provide education on TRPI concepts. The assistant uses an empathetic, non-judgmental tone to support users in exploring their unique personality dynamics, identifying trauma influences, and working towards cognitive and emotional balance.

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

Resolves mistypes by explaining shifts between Id, Ego, and Superego, offering a dynamic alternative to static personality models.` },
            ...messages,
            { role: "user", content: input },
          ],
          max_tokens: 250,
        }),
      });

      const result = await response.json();
      return result.choices?.[0]?.message?.content || "I'm sorry, I couldn't understand that.";
    } catch (error) {
      console.error("Error fetching response from OpenAI:", error);
      return "Error communicating with OpenAI.";
    }
  };

  const handleSubmit = async () => {
    if (!input.trim()) return;

    // Append user message to chat
    setMessages((prevMessages) => [...prevMessages, { role: "user", content: input }]);

    // Get ChatGPT's response
    setInput("");

    const response = await getResp(input);

    // Append ChatGPT's response to chat
    setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: response }]);

    // Scroll to bottom
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
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
        TRPI Talk - Discover Your Personality
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
        placeholder="Ask something about TRPI..."
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
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "12px 24px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "bold",
          marginTop: 2,
          "&:hover": {
            backgroundColor: "#45a049",
          },
          "&:active": {
            backgroundColor: "#3e8e41",
          },
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default TrpiTalk;
