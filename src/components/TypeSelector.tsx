import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mbtiLetters, setMbtiLetters] = useState<Letter[]>([...INITIAL_MBTI]);
  const [suffixLetters, setSuffixLetters] = useState<Letter[]>([...INITIAL_SUFFIX]);
  const [desc, setDesc] = useState<string>("");

  // Build raw code string → e.g. "ENFP-NF"
  const rawCode = `${mbtiLetters.join("")}-${suffixLetters.join("")}`;

  // Show description only after every X is gone
  useEffect(() => {
    setDesc(rawCode.includes("X") ? "" : generateDescription(rawCode));
  }, [rawCode]);

  // Click handlers
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

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 1 : 2, flexWrap: 'wrap', justifyContent: 'center' }}>
        {mbtiLetters.map((ltr, idx) => (
          <Box key={`mbti-${idx}`}>
            <FlipLetter isMobile={isMobile} letter={ltr} onClick={() => toggleMbti(idx)} />
          </Box>
        ))}

        <Box sx={{ minWidth: isMobile ? 10 : 30 }} />

        {suffixLetters.map((ltr, idx) => (
          <Box key={`suffix-${idx}`}>
            <FlipLetter isMobile={isMobile} letter={ltr} onClick={() => toggleSuffix(idx)} />
          </Box>
        ))}
      </Box>

      {desc && (
        <Box
          sx={{
            mt: 4,
            p: 3,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 2,
            width: '100%',
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          <ReactMarkdown>{desc}</ReactMarkdown>
        </Box>
      )}
    </Box>
  );
};

export default TypeSelector;
