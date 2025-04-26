// src/App.tsx
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { FlipLetter } from "./Flip";
import { generateDescription } from "../utils/description";
import ReactMarkdown from "react-markdown";

// ────────────────────────────────────────────────────────────
// Letter pairs ( first ⇄ second ) for each position
// ────────────────────────────────────────────────────────────
const MBTI_PAIRS = [
  ["E", "I"], // 0: Extraversion ⇄ Introversion
  ["S", "N"], // 1: Sensing ⇄ iNtuition
  ["T", "F"], // 2: Thinking ⇄ Feeling
  ["P", "J"], // 3: Perceiving ⇄ Judging
] as const;

// The two‑letter suffix echoes the middle two dichotomies of the type
// (e.g. ENFP → suffix "NF")
const SUFFIX_PAIRS = [
  ["S", "N"], // 0: same pair as second MBTI letter
  ["T", "F"], // 1: same pair as third MBTI letter
] as const;

type Letter =
  | typeof MBTI_PAIRS[number][number]
  | typeof SUFFIX_PAIRS[number][number]
  | "X";

const INITIAL_MBTI: Letter[] = ["X", "X", "X", "X"];
const INITIAL_SUFFIX: Letter[] = ["X", "X"];

// Helper to toggle a letter given its pair
const toggleLetter = (
  current: Letter,
  pair: readonly [string, string]
): Letter => {
  if (current === "X") return pair[0] as Letter; // first click → first letter
  return current === pair[0] ? (pair[1] as Letter) : (pair[0] as Letter);
};

const TypeSelector: React.FC = () => {
  const [mbtiLetters, setMbtiLetters] = useState<Letter[]>([...INITIAL_MBTI]);
  const [suffixLetters, setSuffixLetters] = useState<Letter[]>([...INITIAL_SUFFIX]);
  const [desc, setDesc] = useState<string>("");

  // Build raw code string → e.g. "ENFP-NF"
  const rawCode = `${mbtiLetters.join("")}-${suffixLetters.join("")}`;

  // Show description only after every X is gone
  useEffect(() => {
    setDesc(rawCode.includes("X") ? "" : generateDescription(rawCode));
  }, [rawCode]);

  // ────────────────────────────────────────────────────────────
  // Click handlers
  // ────────────────────────────────────────────────────────────
  const toggleMbti = (idx: number) => {
    setMbtiLetters((current) => {
      const next = [...current];
      next[idx] = toggleLetter(current[idx], MBTI_PAIRS[idx]);
      return next;
    });
  };

  const toggleSuffix = (idx: number) => {
    setSuffixLetters((current) => {
      const next = [...current];
      next[idx] = toggleLetter(current[idx], SUFFIX_PAIRS[idx]);
      return next;
    });
  };

  // ────────────────────────────────────────────────────────────
  // Render
  // ────────────────────────────────────────────────────────────
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {mbtiLetters.map((ltr, idx) => (
          <FlipLetter key={`mbti-${idx}`} letter={ltr} onClick={() => toggleMbti(idx)} />
        ))}
        <Typography variant="h2">-</Typography>
        {suffixLetters.map((ltr, idx) => (
          <FlipLetter key={`suffix-${idx}`} letter={ltr} onClick={() => toggleSuffix(idx)} />
        ))}
      </Box>

      <Box display={'flex'} justifyContent={'center'}> 
      {desc && (
        <Box
          sx={{
            mt: 4,
            p: 3,
            bgcolor: "background.paper",
            borderRadius: 1,
            boxShadow: 1,
            width: "100%",
            maxWidth: 480,
          }}
        >
          <ReactMarkdown>{desc}</ReactMarkdown>
        </Box>
      )}
      </Box>
    </Box>
  );
};

export default TypeSelector;
