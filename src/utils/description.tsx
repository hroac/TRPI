// src/utils/dynamicDescription.ts
import { typesData } from "./typesData";
import ReactMarkdown from "react-markdown";
import { ReactElement } from "react";

export type GroupKey = "ExxP" | "IxxP" | "IxxJ" | "ExxJ";
export type FuncKey = "ST" | "SF" | "NT" | "NF";

// --- helper maps ------------------------------------------------------------
const CORE_ROLES: Record<string, string> = {
  ENTP: "Your ego uses Ne to scan for possibilities and Ti to rank them by logical merit.",
  ENFP: "Your ego employs Ne to generate options and Fi to filter them through personal ideals.",
  ESFP: "Your ego relies on Se to absorb real‑time detail and Fi to align action with personal authenticity.",
  ESTP: "Your ego pairs Se’s crisp data capture with Ti’s tactical analysis for rapid action.",
  INTP: "Your ego deploys Ti to deconstruct systems, then Ne to test new permutations.",
  INFP: "Your ego channels Fi for value clarity, then Ne for imaginative extensions of those values.",
  ISTP: "Your ego builds Ti precision models and Se executes them hands‑on in the material world.",
  ISFP: "Your ego aligns Fi authenticity with Se sensory expression in concrete form.",
  INFJ: "Your superego fuses Ni pattern insight with Fe attuned guidance toward harmony.",
  INTJ: "Your superego unites Ni strategic foresight with Te methodical implementation.",
  ISFJ: "Your superego blends Si archival recall with Fe supportive outreach to safeguard stability.",
  ISTJ: "Your superego combines Si trusted precedent with Te procedural rigor to sustain order.",
  ENFJ: "Your superego marries Fe motivational leadership with Ni future mapping for group growth.",
  ENTJ: "Your superego couples Te executive drive with Ni long‑range vision to marshal resources.",
  ESFJ: "Your superego joins Fe social sensitivity with Si concrete logistics for reliable care.",
  ESTJ: "Your superego links Te directive structure with Si historical referencing for efficient control."
};

const MODE_BLURB: Record<string, string> = {
  Fight: "Under sustained pressure, you channel assertive momentum, turning challenges into direct contests you intend to win.",
  Fawn: "When stressed you pivot toward preserving rapport, absorbing tension by meeting others’ needs before your own.",
  Freeze: "High strain triggers a cerebral pause, analysis locks in until a safe, precise path re‑emerges.",
  Flight: "Intense stress prompts strategic distance, granting space to re‑center through new stimuli or changed scenery."
};

const SUFFIX_BLURB: Record<FuncKey, string> = {
  ST: "The **ST** suffix sharpens pragmatic sensing with structured thinking, grounding the dialogue in concrete logic.",
  SF: "The **SF** suffix infuses present‑moment awareness with responsive feeling, steering the exchange toward human‑centric judgment.",
  NT: "The **NT** suffix amplifies strategic intuition with analytic depth, favouring systems innovation inside the conversation.",
  NF: "The **NF** suffix merges visionary pattern‑spotting with empathic resonance, orienting the duo toward humane possibilities."
};

const OPPOSITE: Record<string, string> = {
  ENTP: "ISFJ", ESFP: "INTJ", ESTP: "INFJ", ENFP: "ISTJ",
  INTP: "ESFJ", ENTJ: "ISFP", ESFJ: "INTP", ISFP: "ENTJ",
  INTJ: "ESFP", ISTJ: "ENFP", INFJ: "ESTP", ENFJ: "ISTP",
  ISTP: "ENFJ", ESTJ: "INFP", ISFJ: "ENTP", INFP: "ESTJ"
};

// grab first sentence helper
const firstSentence = (t: string) => {
  const idx = t.indexOf(".");
  return idx !== -1 ? t.slice(0, idx + 1) : t;
};

const suffixType = (type: string, suffix: string) => {
  const comb: string[] = []
  const first = type[0]
  const last = type[3]

  if(first == 'E') {
    comb[0] = 'I'
  }  else {
    comb[0] = 'E'
  }
  comb[1] = suffix

  
  if(last == 'P') {
    comb[3] = 'J'
  }  else {
    comb[3] = 'P'
  }

  return comb.join('')
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// Generate rich, sectioned markdown: # Title, Ego, Superego, Core Dynamic
// -----------------------------------------------------------------------------
export function generateDescription(code: string): string {
  const [typeRaw, suffixRaw] = (code || "").toUpperCase().trim().split("-");
  if (!typeRaw || !suffixRaw) {
    return "Format must be TYPE-SF|ST|NT|NF, e.g. ENTP-SF"
  }
  const suffix = suffixRaw as FuncKey;
  const egoGroupBase = ["EXXP", "IXXP"]; // base Ego groups
  const isEgoBase = typeRaw.endsWith("P");

  const egoType = isEgoBase ? typeRaw : suffixType(typeRaw, suffix)
  const supType = isEgoBase ? suffixType(typeRaw, suffix) : typeRaw;

  console.log(egoType, supType)
  const egoInfo = typesData.find((t) => t.type === egoType);
  const supInfo = typesData.find((t) => t.type === supType);

  if (!egoInfo || !supInfo) return "Data missing for code";

  // Utility to grab nickname from description (text after last comma)
  const nickname = (d: string) => {
    return d.slice(d.indexOf(',') + 2, d.indexOf(':'))
    //const parts = d.split(",");
    //return parts[parts.length - 1].trim();
  };

  const isEgo = (type: string) => {
    return type.endsWith('P')
  }

  

  const title = `${typeRaw}–${suffix}`;

  // markdown pieces -----------------------------------------------------------
  const md: string[] = [];

  //md.push(`# ${title}`);
  //md.push(`*(Ego: ${egoType} | Superego: ${supType})*`);

 if(isEgo(typeRaw)) {
   // ----- Ego section -----
   md.push(`## Ego (${egoInfo.functions[0]}) — ${nickname(egoInfo.description)}`);
   md.push(CORE_ROLES[egoType]);
   md.push(firstSentence(egoInfo.description));
   md.push(`**Strengths:** ${egoInfo.strengths.slice(0, 4).join(", ")}.`);
   md.push(`**Weaknesses:** ${egoInfo.weaknesses.slice(0, 4).join(", ")}.`);
   md.push('\n ')
 
 }
  // ----- Superego section -----
  md.push(`
## Superego (${supInfo.functions[0]}) — ${nickname(supInfo.description)}`);
  md.push(CORE_ROLES[supType]);
  md.push(firstSentence(supInfo.description));
  md.push(`**Strengths:** ${supInfo.strengths.slice(0, 3).join(", ")}.`);
  md.push(`**Weaknesses:** ${supInfo.weaknesses.slice(0, 3).join(", ")}.`);

  if(!isEgo(typeRaw)) {
     // ----- Ego section -----
  md.push(`## Ego (${egoInfo.functions[0]}) — ${nickname(egoInfo.description)}`);
  md.push(CORE_ROLES[egoType]);
  md.push(firstSentence(egoInfo.description));
  md.push(`**Strengths:** ${egoInfo.strengths.slice(0, 4).join(", ")}.`);
  md.push(`**Weaknesses:** ${egoInfo.weaknesses.slice(0, 4).join(", ")}.`);

  }
  // ----- Core Dynamic -----
  md.push(`
## Core Dynamic`);
  md.push(
    `The tension between **${egoInfo.functions[0]}** (exploration) and **${supInfo.functions[0]}** (consolidation) is amplified by the ${SUFFIX_BLURB[suffix].replace("The ", "the ")}` +
      ` ${MODE_BLURB[egoInfo.mode]} \n  ${MODE_BLURB[supInfo.mode]}`
  );

  // Quote
  md.push(`## “${egoInfo.quote}”`);

  return md.join("\n\n");
}
