
interface BigFiveValues {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
}

interface Bin {
  type: string;
  primary4FType: string;
  bigFiveResponses: BigFiveValues;
  description: string;
  allResponses: number[];
  date: string;
  userId: string;
}

export const MBTIProfiles = [
  {
    "name": "ENTP",
    "traits": {
      "openness": 0.80,
      "conscientiousness": 0.50,
      "extraversion": 0.75,
      "agreeableness": 0.50,
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
      "conscientiousness": 0.55,
      "extraversion": 0.80,
      "agreeableness": 0.40,
      "neuroticism": 0.50
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
      "openness": 0.70,
      "conscientiousness": 0.45,
      "extraversion": 0.50,
      "agreeableness": 0.40,
      "neuroticism": 0.35
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
      "openness": 0.50,
      "conscientiousness": 0.45,
      "extraversion": 0.55,
      "agreeableness": 0.40,
      "neuroticism": 0.50
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
      "conscientiousness": 0.70,
      "extraversion": 0.50,
      "agreeableness": 0.35,
      "neuroticism": 0.50
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
      "openness": 0.45,
      "conscientiousness": 0.65,
      "extraversion": 0.40,
      "agreeableness": 0.40,
      "neuroticism": 0.55
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
      "openness": 0.70,
      "conscientiousness": 0.80,
      "extraversion": 0.70,
      "agreeableness": 0.45,
      "neuroticism": 0.30
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
      "openness": 0.45,
      "conscientiousness": 0.80,
      "extraversion": 0.65,
      "agreeableness": 0.40,
      "neuroticism": 0.50
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
      "conscientiousness": 0.60,
      "extraversion": 0.40,
      "agreeableness": 0.75,
      "neuroticism": 0.70
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
      "openness": 0.80,
      "conscientiousness": 0.55,
      "extraversion": 0.45,
      "agreeableness": 0.75,
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
      "openness": 0.50,
      "conscientiousness": 0.65,
      "extraversion": 0.55,
      "agreeableness": 0.70,
      "neuroticism": 0.45
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
      "openness": 0.80,
      "conscientiousness": 0.65,
      "extraversion": 0.75,
      "agreeableness": 0.80,
      "neuroticism": 0.40
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
      "openness": 0.60,
      "conscientiousness": 0.50,
      "extraversion": 0.60,
      "agreeableness": 0.60,
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
      "openness": 0.80,
      "conscientiousness": 0.50,
      "extraversion": 0.60,
      "agreeableness": 0.60,
      "neuroticism": 0.75
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
      "openness": 0.50,
      "conscientiousness": 0.50,
      "extraversion": 0.40,
      "agreeableness": 0.45,
      "neuroticism": 0.70
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
      "openness": 0.60,
      "conscientiousness": 0.45,
      "extraversion": 0.40,
      "agreeableness": 0.60,
      "neuroticism": 0.85
    },
    "mode": "Flight",
    "gold": "ESFJ",
    "silver": "ENFJ",
    "bronze": "ISTP",
    "copper": "ESTJ"
  }
];



// Weights keyed by type, in Big-Five order: [O, C, E, A, N]
export const MBTIWeights: Record<string, number[]> = {
  ENTP: [3, 2, 4, 2, 1],
  ESTP: [4, 2, 4, 2, 1],
  INTP: [3, 2, 5, 2, 1],
  ISTP: [4, 2, 5, 2, 1],

  INTJ: [3, 3, 5, 2, 1],
  ISTJ: [4, 3, 5, 2, 1],
  ENTJ: [3, 3, 4, 2, 1],
  ESTJ: [4, 3, 4, 2, 1],

  ISFJ: [4, 3, 5, 3, 1],
  INFJ: [3, 3, 5, 3, 1],
  ESFJ: [4, 3, 4, 3, 1],
  ENFJ: [3, 3, 4, 3, 1],

  ESFP: [4, 2, 4, 3, 1],
  ENFP: [3, 2, 4, 3, 1],
  ISFP: [4, 2, 5, 3, 1],
  INFP: [3, 2, 5, 3, 1],
};

// Define weights, emphasizing critical traits for each 4F mode
const weights: Record<string, Record<string, number>> = {
  Fight: {
    openness: 1.0,
    conscientiousness: 1.0,
    extraversion: 1.0,
    agreeableness: 1,
    neuroticism: 1,
  },
  Flight: {
    openness: 0.9,
    conscientiousness: 0.5,
    extraversion: 1.8,
    agreeableness: 0.8,
    neuroticism: 1.6,
  },
  Freeze: {
    openness: 0.5,
    conscientiousness: 1.5,
    extraversion: 0.5,
    agreeableness: 1.2,
    neuroticism: 1.5,
  },
  Fawn: {
    openness: 0.7,
    conscientiousness: 0.7,
    extraversion: 0.6,
    agreeableness: 1.5,
    neuroticism: 0.5,
  },
};

// Trait-based exclusions for each mode
const modeTraitExclusions: Record<string, (profile: any) => boolean> = {
  Fight: profile =>  profile.extraversion >= ((profile.conscientiousness + profile.agreeableness + profile.neuroticism) /3),
  Flight: profile => profile.neuroticism >= ((profile.conscientiousness + profile.agreeableness + profile.extraversion) /3),
  Freeze: profile => profile.conscientiousness >= ((profile.extraversion + profile.agreeableness + profile.neuroticism) /3),
  Fawn: profile => profile.agreeableness >= ((profile.conscientiousness + profile.extraversion +  profile.neuroticism) /3),
};

// Weighted Euclidean distance calculation
export const weightedEuclideanDistance = (profile: any, traits: any, weights: any = {}) => {
  const epsilon = 1e-5; // Small value to prevent division or multiplication by 0

  return Math.sqrt(
    Object.keys(profile).reduce((sum, key) => {
      const weight = weights[key] || 1;
      const diff = profile[key] - traits[key];
      const clampedDiff = Math.max(Math.abs(diff), epsilon); // Prevent extreme values
      return sum + weight * Math.pow(clampedDiff, 2);
    }, 0)
  );
};

// Determine the primary 4F mode based on the profile
export const determinePrimary4FType = (profile: any): string => {
  // 1. Filter by modeTraitExclusions

  const fourF = MBTIProfiles.find(p => p.name === matchMBTI(profile).type)?.mode;
  if(fourF) return fourF;
   
  const validModes = Object.keys(modeTraitExclusions).filter((mode) =>
    modeTraitExclusions[mode](profile)
  );

  if (validModes.length === 0) {
    throw new Error('No valid 4F mode for the given profile.');
  }

  // 2. Among the valid modes, pick the one with the highest average Pearson correlation
  const bestMode = validModes.reduce((best, current) => {
    // Compute average correlation for the current mode
    const currentAvgCorrelation =
      MBTIProfiles.filter((p) => p.mode === current)
        .map((p) =>
          pearsonCorrelationBigFive(
            Object.values(profile),      // user’s big five [openness, conscientiousness, ...]
            Object.values(p.traits)      // MBTI type’s big five
          )
        )
        .reduce((sum, val) => sum + val, 0) /
      MBTIProfiles.filter((p) => p.mode === current).length;

    // Compute average correlation for the best mode so far
    const bestAvgCorrelation =
      MBTIProfiles.filter((p) => p.mode === best)
        .map((p) =>
          pearsonCorrelationBigFive(
            Object.values(profile),
            Object.values(p.traits)
          )
        )
        .reduce((sum, val) => sum + val, 0) /
      MBTIProfiles.filter((p) => p.mode === best).length;

    // Keep whichever mode yields higher average correlation
    return currentAvgCorrelation > bestAvgCorrelation ? current : best;
  });

  return bestMode;
};

// Match the closest MBTI type
export const matchMBTIType = (profile: any, primary4F: any, filter: boolean = true) => {
  let candidates = MBTIProfiles;

  if (filter) {
    candidates = candidates.filter(p => p.mode === primary4F);
  }

  //console.log('Filtered Candidates:', candidates);

  let closestType = '';
  let closestDistance = Infinity;

  candidates.forEach(candidate => {
    const distance = weightedEuclideanDistance(profile, candidate.traits, weights[primary4F]);
    //console.log(`Candidate: ${candidate.name}, Distance: ${distance}`);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestType = candidate.name;
    }
  });

  //console.log('Closest Type:', closestType, 'Distance:', closestDistance);
  return closestType;
};

/**
 * Matches a user's Big Five profile to the best MBTI type based on Pearson correlation and Euclidean distance.
 * @param profile - User's Big Five profile (BigFiveValues format).
 * @returns An object containing the matched MBTI type and all scores scaled from 0 to 100.
 */
export const matchMBTI = (profile: Record<any, any>, exclude?: Array<string>) => {
  const profileArray = Object.values(profile);

  // Step 1: Calculate Scores (Pearson Correlation and Weighted Euclidean Distance)
  const combinedScores = MBTIProfiles.map((candidate) => {
    // Pearson correlation between the user profile and the candidate traits
    const typeWeights = MBTIWeights[candidate.name]
    const correlation = weightedPearsonCorrelationBigFive(
      profileArray,
      Object.values(candidate.traits),
      Object.values(typeWeights)
    );

    // Weighted Euclidean distance between the user profile and the candidate traits
    const distance = weightedEuclideanDistance(
      profile,
      candidate.traits,
      typeWeights
    );

    // Normalize distance to a [0, 1] scale
    const normalizedDistance = 1 / (1 + distance);

    // Combine Pearson correlation and normalized distance
    const combinedScore = (correlation + normalizedDistance) / 2;

    // Scale combined score to [0, 100]
    const scaledScore = combinedScore * 100;

    return {
      type: candidate.name,
      score: scaledScore,
      details: {
        correlation: correlation * 100, // Pearson scaled to 0-100
        normalizedDistance: normalizedDistance * 100, // Distance scaled to 0-100
        originalDistance: distance, // Raw Euclidean distance
      },
    };
  });

  // Step 2: Sort by Score and Find the Best Match
  const sortedScores = combinedScores.sort((a, b) => b.score - a.score).filter((prfl, index, self) => {
    const current = self[index]
    const next = self[self.length === index + 1 ? index : index + 1]
    if(!exclude || ((!index && (current.score - next.score) > 20) || !exclude.includes(prfl.type))) {
      return prfl
    }
  });
  const bestMatch = sortedScores[0];

  // Step 3: Return the Results
  return {
    type: bestMatch ? bestMatch.type : combinedScores.sort((a, b) => b.score - a.score)[0].type,// Best matching MBTI type
    scores: bestMatch ? sortedScores.reduce((acc, item) => {
      return {...acc, [item.type]: item}
    }, {}) : combinedScores.sort((a, b) => b.score - a.score).reduce((acc, item) => {
      return {...acc, [item.type]: item}
    }, {}), // All candidates with scores
  };
};


// Main function to process the profile
export const processProfile = (profile: any) => {
  const primary4F = determinePrimary4FType(profile);
  const mbtiType = matchMBTIType(profile, primary4F, true);
  return { primary4F, mbtiType };
};

// We'll assume the order of traits is consistently:
// [openness, conscientiousness, extraversion, agreeableness, neuroticism]

export function filterTypesByMajorityTraitMatch(
  userProfile: number[], 
  types: any[], 
  differenceThreshold: number = 0.3, 
  minTraitsToMatch: number = 3
) {
  return types.filter(type => {
    const typeTraitValues = Object.values(type.traits) as number[];
    let matchCount = 0;

    for (let i = 0; i < userProfile.length; i++) {
      const diff = Math.abs(userProfile[i] - typeTraitValues[i]);
      if (diff < differenceThreshold) {
        matchCount++;
      }
    }

    // Keep this profile if it meets or exceeds the minimum trait matches required
    return matchCount >= minTraitsToMatch;
  });
}

// Utility to flip Extraversion ↔ Introversion
function flipEI(letter: any) {
  return letter === 'E' ? 'I' : 'E';
}

// Utility to flip Judging ↔ Perceiving
function flipJP(letter: any) {
  return letter === 'J' ? 'P' : 'J';
}

// Generate the four TRPI “complement” types for any baseType.
// e.g. "INTJ" → ["ESTP","ESFP","ENTP","ENFP"]
const MID_LETTERS = ['ST', 'SF', 'NT', 'NF'];
export function generateComplements(baseType: any) {
  const first = flipEI(baseType[0]);
  const last = flipJP(baseType[3]);
  return MID_LETTERS.map(mid => first + mid + last);
}
const typeToJudging : Record<string, string> = {
  ENTP: "Ti",
  INTP: "Ti",
  ENFP: "Fi",
  INFP: "Fi",
  ENTJ: "Te",
  INTJ: "Te",
  ENFJ: "Fe",
  INFJ: "Fe",
  ESTP: "Ti",
  ISTP: "Ti",
  ESFP: "Fi",
  ISFP: "Fi",
  ESTJ: "Te",
  ISTJ: "Te",
  ESFJ: "Fe",
  ISFJ: "Fe"
};

const functionToTrait : Record<string, string> = {
  Fe: "agreeableness",
  Fi: "neuroticism",
  Te: "conscientiousness",
  Ti: "extraversion"
};

function filterTraitKeysByType(typeCode: string, traitKeys: Record<string, any>) {
  const judging = typeToJudging[typeCode];
  const traitToRemove = functionToTrait[judging];
  return traitKeys.filter((key: any) => key !== traitToRemove);
}

/**
 * Compare two Big‑Five profiles using Pearson correlation,
 * **excluding** both the 'openness' trait and the dominant non‑openness trait of profileA.
 *
 * @param profileA  - first Big‑Five profile (with keys: openness, conscientiousness, extraversion, agreeableness, neuroticism)
 * @param profileB  - second Big‑Five profile (same keys)
 * @returns         - Pearson r between the two reduced profiles (–1 to 1)
 */
export function compareProfilesIgnoringDominantPearson(
  baseType: string,
  profileA: Record<string, number>,
  profileB: Record<string, number>
): number {
  // 1. Build a list of trait keys, excluding 'openness'
  const traitKeys = Object.keys(profileA).filter(k => k !== "openness");

  
  // 3. Final list of keys to compare: exclude both 'openness' and the dominant trait
  const compareKeys = filterTraitKeysByType(baseType, traitKeys)
  //console.log(compareKeys)

  // 4. Extract the values
  const aVals = compareKeys.map((k: any) => profileA[k]);
  const bVals = compareKeys.map((k: any) => profileB[k]);

  // 5. Compute means
  const n = aVals.length;
  const meanA = aVals.reduce((sum: any, v: any) => sum + v, 0) / n;
  const meanB = bVals.reduce((sum: any, v: any) => sum + v, 0) / n;

  //console.log(aVals, bVals, meanA, meanB)
  // 6. Compute covariance and variances
  let cov = 0,
      varA = 0,
      varB = 0;

  for (let i = 0; i < n; i++) {
    const da = aVals[i] - meanA;
    const db = bVals[i] - meanB;
    cov  += da * db;
    varA += da * da;
    varB += db * db;
  }

  // 7. Guard against zero variance
  if (varA === 0 || varB === 0) {
    return 0;
  }

  // 8. Return Pearson correlation coefficient
  return cov / Math.sqrt(varA * varB);
}


/**
 * Compare two Big‑Five profiles while ignoring profileA's dominant non‑openness trait.
 * Uses a weighted Euclidean distance function (must be available in scope).
 *
 * @param {Object} profileA  - { openness, conscientiousness, extraversion, agreeableness, neuroticism }
 * @param {Object} profileB  - Same shape as profileA
 * @param {Object} [weights] - Optional per‑trait weights
 * @returns {number}         - Euclidean distance over the four remaining traits
 */
export function compareProfilesIgnoringDominant(baseType: string, profileA: any, profileB: any, weights = {}) {
  // Identify dominant trait in A, excluding 'openness'
  const traits = Object.keys(profileA).filter(k => k !== 'openness');
  
  const compareKeys = filterTraitKeysByType(baseType, traits)


  // Build reduced copies without that dominant trait
  const a = {};
  const b = {};
  for (const k in profileA) {
    if (compareKeys.includes(k)) {
      (a as any)[k] = profileA[k];
      (b as any)[k] = profileB[k];
    }
  }

  // Compute weighted Euclidean distance
  const epsilon = 1e-5;
  return Math.sqrt(
    Object.keys(a).reduce((sum, key) => {
      const w = (weights as any)[key] || 1;
      const diff = (a as any)[key] - (b as any)[key];
      const d = Math.max(Math.abs(diff), epsilon);
      return sum + w * d * d;
    }, 0)
  );
}

/**
 * Find the closest TRPI “complement” for a given base type.
 *
 * @param {string} baseType            - Four‑letter MBTI type ("INTJ", "ENTP", etc.)
 * @param {Object} userProfile         - Big‑Five profile { openness, conscientiousness, extraversion, agreeableness, neuroticism }
 * @param {Array<{type:string,traits:Object}>} allProfiles
 * @param {Object} [weights={}]        - Optional per‑trait weights for distance
 * @returns {{ type: string, distance: number }}
 */
export function findClosestComplement(baseType: string, userProfile: any) {
  const complements = generateComplements(baseType);
  const distances = [];
  let best = { type: '', distance: 0 };

  for (const candidate of MBTIProfiles.filter(prf => complements.includes(prf.name))) {
    const distance1 = compareProfilesIgnoringDominantPearson(baseType, userProfile, candidate.traits);
    const distance2 = compareProfilesIgnoringDominant(baseType, userProfile, candidate.traits)
    //console.log(candidate.name, distance1, distance2, distance1 - ((1 - distance2)/10))
    const dist = distance1 - ((1- distance2)/10);
    distances.push({ type: candidate.name, distance: dist })
    if (dist > best.distance) {
      best = { type: candidate.name, distance: dist };
      //console.log('best', best)
    }
  }

  if (best.type === '') {
    for(let dist of distances) {
      if(Math.abs(dist.distance) > best.distance) {
        best = dist;
      }
    }
   // throw new Error(`No complement profiles found for ${baseType}`);
  }

  return best;
}

export function getTRPISuffix(profile: BigFiveValues): "ST" | "NT" | "SF" | "NF" {
  const { conscientiousness, agreeableness, neuroticism, extraversion } = profile;

  // Determine which axis is dominant: C-A or N-E
  const caAxis = Math.max(conscientiousness, agreeableness);
  const neAxis = Math.max(neuroticism, extraversion);

  if (caAxis > neAxis) {
    // C-A axis dominates, check N vs E for suffix
    return neuroticism > extraversion ? "NF" : "NT";
  } else {
    // N-E axis dominates, check C vs A for suffix
    return conscientiousness > agreeableness ? "ST" : "SF";
  }
}

  /**
 * Determine the TRPI suffix (ST, SF, NT, or NF) for a given MBTI type,
 * based on which opposite (J→P or P→J) type has the highest score.
 *
 * @param {string} baseType  - Four‑letter MBTI type (e.g. "ENTP" or "INTJ")
 * @param {Object} scores    - Map from type string to { score: number, … }
 * @returns {string}         - One of "ST", "SF", "NT", "NF"
 */
  export function determineTRPISuffix(baseType: string, scores: any) {
    // Define which group we're in:
    const isJudger    = baseType.endsWith("J");
    const isPerceiver = baseType.endsWith("P");
    if (!isJudger && !isPerceiver) {
      throw new Error("Type must end in J or P");
    }
  
    // For Judgers, suffix → Ego state → points at a Perceiver (Freeze/Fawn).
    // For Perceivers, suffix → Superego state → points at a Judger (Fight/Flight).
    const oppositeMap = {
      // All Judgers share the same four P‑type targets:
      ST: ["ISTP", "ESTP"],  // Thinking suffix → logic → Freeze/Fight
      SF: ["ISFP", "ESFP"],  // Feeling suffix → values → Fawn/Flight
      NT: ["INTP", "ENTP"],
      NF: ["INFP", "ENFP"]
    };
  
    // All Perceivers share the same four J‑type targets:
    const oppositeMapRev = {
      ST: ["ISTJ", "ESTJ"],
      SF: ["ISFJ", "ESFJ"],
      NT: ["INTJ", "ENTJ"],
      NF: ["INFJ", "ENFJ"]
    };
  
    const mapToUse = isJudger ? oppositeMap : oppositeMapRev;
  
    let bestSuffix = null;
    let bestScore  = -Infinity;
  
    // Check each suffix bucket
    for (const suffix of ["ST","SF","NT","NF"]) {
      // Sum the scores of the two opposite types for that suffix
      const targets = (mapToUse as any)[suffix];
      let bucketScore = 0;
      for (const t of targets) {
        if (scores[t] && typeof scores[t].score === "number") {
          bucketScore += scores[t].score;
        }
      }
      // Pick the suffix whose bucket has the highest total
      if (bucketScore > bestScore) {
        bestScore  = bucketScore;
        bestSuffix = suffix;
      }
    }
  
    return bestSuffix;
  }


export function pearsonProfile(profile: number[], types: any[], filterTypes = true) {
  // 1. Filter down the types by trait difference
 // const filteredTypes = filterTypesByMajorityTraitMatch(profile, types, 0.4, 4);

  // 2. If no types pass the filter, throw an error (or handle however you'd like)
  /* if (!filteredTypes.length) {
    throw new Error('No valid profiles for the given thresholds.');
  } */

  // 3. Return the best match from the filtered set
  return types
    .map(type => ({
      type: type.name,
      value: pearsonCorrelationBigFive(
        profile,
        Object.values(type.traits)
      )
    }))
    .sort((a, b) => b.value - a.value)[0];
}

export function pearsonCorrelationBigFive(profileA: number[], profileB: number[]): number {
 /*  if (profileA.length !== 5 || profileB.length !== 5) {
      throw new Error("Both profiles must contain exactly five elements.");
  }
 */
  // Validate that all scores are numbers and within expected ranges (e.g., 0-1, adjust as needed)
  for (let i = 0; i < 5; i++) {
      const a = profileA[i];
      const b = profileB[i];
      if (typeof a !== 'number' || typeof b !== 'number') {
          throw new Error("All profile scores must be numbers.");
      }
      // Example validation for scores between 0 and 1
      if (a < 0 || a > 1 || b < 0 || b > 1) {
          throw new Error("All profile scores must be between 0 and 1.");
      }
  }

  const n = 5;

  // Calculate sums and sums of squares
  let sumA = 0, sumB = 0, sumAB = 0, sumA2 = 0, sumB2 = 0;

  for (let i = 0; i < n; i++) {
      const a = profileA[i];
      const b = profileB[i];
      sumA += a;
      sumB += b;
      sumAB += a * b;
      sumA2 += a * a;
      sumB2 += b * b;
  }

  // Calculate numerator and denominator
  const numerator = (n * sumAB) - (sumA * sumB);
  const denominator = Math.sqrt((n * sumA2 - sumA * sumA) * (n * sumB2 - sumB * sumB));

  

  return  !denominator ? 1 :  numerator / denominator;
}

export function weightedPearsonCorrelationBigFive(
  profileA: number[],
  profileB: number[],
  weights: number[]
): number {
  const n = 5;

  // Basic length checks
  if (profileA.length !== n || profileB.length !== n || weights.length !== n) {
    throw new Error(`All inputs must be arrays of length ${n}.`);
  }

  // Validate values
  for (let i = 0; i < n; i++) {
    const a = profileA[i], b = profileB[i], w = weights[i];
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      typeof w !== "number"
    ) {
      throw new Error("All profile scores and weights must be numbers.");
    }
    if (a < 0 || a > 1 || b < 0 || b > 1) {
      throw new Error("All profile scores must be between 0 and 1.");
    }
    if (w < 0) {
      throw new Error("All weights must be non-negative.");
    }
  }

  // Compute sum of weights
  const sumW = weights.reduce((acc, w) => acc + w, 0);
  if (sumW === 0) {
    // no information to correlate
    return 1;
  }

  // Weighted means
  let meanA = 0,
      meanB = 0;
  for (let i = 0; i < n; i++) {
    meanA += weights[i] * profileA[i];
    meanB += weights[i] * profileB[i];
  }
  meanA /= sumW;
  meanB /= sumW;

  // Weighted covariance and variances
  let covAB = 0,
      varA = 0,
      varB = 0;
  for (let i = 0; i < n; i++) {
    const w = weights[i];
    const da = profileA[i] - meanA;
    const db = profileB[i] - meanB;
    covAB += w * da * db;
    varA += w * da * da;
    varB += w * db * db;
  }

  const denom = Math.sqrt(varA * varB);
  // if zero variance on one side, fallback to perfect correlation
  return denom === 0 ? 1 : covAB / denom;
}

// src/utils/pearsonCorrelation.ts

/**
 * Calculates the Pearson correlation coefficient between two arrays.
 * @param x - First array of numbers.
 * @param y - Second array of numbers.
 * @returns Pearson correlation coefficient.
 */
/**
 * Calculates the Pearson correlation coefficient between two datasets.
 *
 * @param x - An array of numbers between 0 and 1.
 * @param y - An array of numbers between 0 and 1.
 * @returns The Pearson correlation coefficient as a number between -1 and 1.
 * @throws Will throw an error if the input arrays are of different lengths or have fewer than two elements.
 */
export function pearsonCorrelation(x: number[], y: number[]): number {
    if (x.length !== y.length) {
        throw new Error("The two arrays must have the same length.");
    }

    const n = x.length;

    if (n < 2) {
        throw new Error("At least two elements are required to calculate correlation.");
    }

    // Calculate the sums and sums of squares
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumXSquare = 0;
    let sumYSquare = 0;

    for (let i = 0; i < n; i++) {
        const xi = x[i];
        const yi = y[i];

        // Ensure that each number is between 0 and 1
        if (xi < 0 || xi > 1 || yi < 0 || yi > 1) {
            throw new Error("All numbers must be between 0 and 1.");
        }

        sumX += xi;
        sumY += yi;
        sumXY += xi * yi;
        sumXSquare += xi * xi;
        sumYSquare += yi * yi;
    }

    // Calculate the numerator and denominator
    const numerator = (n * sumXY) - (sumX * sumY);
    const denominator = Math.sqrt(
        (n * sumXSquare - sumX * sumX) * (n * sumYSquare - sumY * sumY)
    );

    if (denominator === 0) {
        throw new Error("Denominator is zero, correlation is undefined.");
    }

    return numerator / denominator;
}


/**
 * Calculates the average trait-to-trait Pearson correlation between two users.
 * @param userA - Big Five values for User A.
 * @param userB - Big Five values for User B.
 * @returns Average trait correlation.
 */
export const calculateTraitCorrelation = (
  userA: BigFiveValues,
  userB: BigFiveValues
): number => {
  const traits: (keyof BigFiveValues)[] = [
    'openness',
    'conscientiousness',
    'extraversion',
    'agreeableness',
    'neuroticism',
  ];

  const euclidian = weightedEuclideanDistance(userA, userB);
  const correlations = traits.map((trait) =>
    pearsonCorrelation([userA[trait] * 100], [userB[trait] * 100])
  );

  // Since each trait correlation is based on single pairs, we'll treat them as differences
  // Instead, a better approach is to calculate the Euclidean distance or another metric
  // However, following the user's request, we'll average the correlations
  const validCorrelations = correlations.filter(
    (corr) => !isNaN(corr) && isFinite(corr)
  );
  const averageCorrelation =
    validCorrelations.reduce((a, b) => a + b, 0) / validCorrelations.length;

  return averageCorrelation;
};

/**
 * Calculates the per-answer Pearson correlation between two users.
 * @param userA - Array of responses for User A.
 * @param userB - Array of responses for User B.
 * @returns Pearson correlation coefficient for answers.
 */
export const calculateAnswerCorrelation = (
  userAResponses: number[],
  userBResponses: number[]
): number => {
  return pearsonCorrelation(userAResponses, userBResponses);
};



/**
 * For traits where similarity is desired (openness, conscientiousness, agreeableness).
 * Returns a value between 0 and 1, where 1 is identical.
 */
function calculateTraitSimilarity(scoreA: number, scoreB: number): number {
  return 1 - Math.abs(scoreA - scoreB);
}

/**
 * For extraversion, we desire a moderate difference.
 * We'll use a triangular function that peaks at an optimal difference (optDiff) of 0.2:
 * - If the difference is 0, the score is 0.
 * - If the difference equals 0.2, the score is 1.
 * - If the difference is 0.4 or greater, the score falls back to 0.
 * For differences between 0 and 0.2 and between 0.2 and 0.4, the score is linearly interpolated.
 */
function calculateExtraversionScore(scoreA: number, scoreB: number): number {
  const diff = Math.abs(scoreA - scoreB);
  const optDiff = 0.2;
  const maxDiff = 0.4;

  if (diff <= optDiff) {
    // Rising linear portion from 0 (when diff=0) to 1 (when diff=optDiff)
    return diff / optDiff;
  } else if (diff > optDiff && diff <= maxDiff) {
    // Falling linear portion from 1 (when diff=optDiff) to 0 (when diff=maxDiff)
    return (maxDiff - diff) / (maxDiff - optDiff);
  } else {
    return 0;
  }
}

/**
 * For neuroticism we desire complementarity.
 * A simple continuous function is to use the absolute difference.
 * (A higher difference indicates that one partner is high and the other low.)
 */
function calculateNeuroticismScore(scoreA: number, scoreB: number): number {
  return Math.abs(scoreA - scoreB);
}

/**
 * Calculates overall compatibility (0–1 scale) by averaging the individual trait scores.
 */
export function calculateCompatibilityScore(profileA: any, profileB: any): number {
  const opennessScore = calculateTraitSimilarity(profileA.bigFiveResponses.openness, profileB.bigFiveResponses.openness);
  const conscientiousnessScore = calculateTraitSimilarity(profileA.bigFiveResponses.conscientiousness, profileB.bigFiveResponses.conscientiousness);
  const extraversionScore = calculateExtraversionScore(profileA.bigFiveResponses.extraversion, profileB.bigFiveResponses.extraversion);
  const agreeablenessScore = calculateTraitSimilarity(profileA.bigFiveResponses.agreeableness, profileB.bigFiveResponses.agreeableness);
  const neuroticismScore = calculateNeuroticismScore(profileA.bigFiveResponses.neuroticism, profileB.bigFiveResponses.neuroticism);

  const overallScore = (
    opennessScore +
    conscientiousnessScore +
    extraversionScore +
    agreeablenessScore +
    neuroticismScore
  ) / 5;

  return overallScore * 100;
}

/**
 * Calculates the overall compatibility score between two users.
 * Combines trait correlation and answer correlation.
 * @param userA - Bin data for User A.
 * @param userB - Bin data for User B.
 * @returns Compatibility score as a number between 0 and 100.
 */
/* export const calculateCompatibilityScore = (userA: any, userB: any): number => {
  const traitCorr = pearsonCorrelationBigFive(Object.values(userA.bigFiveResponses), Object.values(userB.bigFiveResponses));
  const answerCorr = calculateAnswerCorrelation(userA.allResponses, userB.allResponses);

  // Normalize correlations from [-1,1] to [0,100]
  const normalizedTraitCorr = ((traitCorr + 1) / 2) * 100;
  const normalizedAnswerCorr = ((answerCorr + 1) / 2) * 100;

  // Weighted average: 50% traits, 50% answers
  const compatibility = (normalizedTraitCorr + normalizedAnswerCorr) / 2;

  return compatibility;
};
 */
export const getSubtext = (trait: string, index: number, value: number, stmnts?: any[]) => {
  const statement = (stmnts || statements)[index];
  if (!statement) return null;

  const percentage = Math.round(value * 100);
  const range = Object.keys(statement.subtext).find((key) => {
    const [min, max] = key.split('-').map(Number);
    return percentage >= min && percentage <= max;
  });

  return range ? (statement.subtext as any)[range]?.text : null;
};

function selectStatements(statements: any[]) {
  const opennessStatements = statements.filter(s => s.trait === 'openness');
  const conscientiousnessStatements = statements.filter(s => s.trait === 'conscientiousness');
  const extraversionStatements = statements.filter(s => s.trait === 'extraversion');
  const agreeablenessStatements = statements.filter(s => s.trait === 'agreeableness');
  const neuroticismStatements = statements.filter(s => s.trait === 'neuroticism');

  const selectedStatements = [];

  // Helper function to select a random statement and remove it from the array
  const selectRandom = (arr: any[]) => {
    if (arr.length > 0) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      const selected = arr.splice(randomIndex, 1)[0];
      return selected;
    }
    return null; // Handle case where array might be empty (though it shouldn't be based on our counts)
  };

  // Select initial Openness statements
  for (let i = 0; i < 3; i++) {
    const statement = selectRandom(opennessStatements);
    if (statement) selectedStatements.push(statement);
  }

  // Select CEAN sequence 4 times
  for (let i = 0; i < 5; i++) {
    let statement = selectRandom(conscientiousnessStatements);
    if (statement) selectedStatements.push(statement);
    statement = selectRandom(extraversionStatements);
    if (statement) selectedStatements.push(statement);
    statement = selectRandom(agreeablenessStatements);
    if (statement) selectedStatements.push(statement);
    statement = selectRandom(neuroticismStatements);
    if (statement) selectedStatements.push(statement);
  }

  // Select final Openness statements
  for (let i = 0; i < 3; i++) {
    const statement = selectRandom(opennessStatements);
    if (statement) selectedStatements.push(statement);
  }

  return selectedStatements;
}

/**
 * Flattens trait-based responses to global index-value map,
 * then runs the honesty check.
 * @param {Array} items - Full item objects (with 'index' and 'trait').
 * @param {Object} responses - { trait: [values...] }
 * @param {Array} selection - Array of global item indices (as presented to the user)
 * @param {number} [similarityThreshold=1]
 * @param {number} [oppositionThreshold=1]
 * @returns {boolean} True if 3+ overlap and 3+ oppose mismatches, else false.
 */
/**
 * Sentinel value for “unchanged” sliders.
 */
const STORAGE_KEY = 'honestyResponses';
const UNCHANGED   = 0.500001;
const isChanged   = (v: number) => v !== UNCHANGED;

export function checkHonesty(
  items: any[],
  responses: Record<string, number[]>,
  selection: { index: number }[],
  similarityThreshold = 0.5,
  oppositionThreshold = 0.10
) {
  /* ────── early guards ────── */

  if (selection.some(s => s.index === undefined)) {
    localStorage.removeItem('statements');
    localStorage.removeItem('longStatements');
    console.log('[Honesty] malformed selection – abort');
    return [];
  }

  /* ────── rebuild page-local map (index → value) ────── */
  const pageMap: Record<number, number> = {};
  const traitCursor: Record<string, number> = {};

  for (const sel of selection) {
    const trait = items[sel.index].trait;
    const pos   = traitCursor[trait] ?? 0;
    pageMap[sel.index] = (responses[trait] ?? [])[pos];
    traitCursor[trait] = pos + 1;
  }

  /* ────── merge into persistent global map ────── */
 // const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const allMap: Record<number, number> = { ...pageMap };
  //localStorage.setItem(STORAGE_KEY, JSON.stringify(allMap));

  /* ────── which sliders are “changed”? ────── */
  const changedSet = new Set<number>(
    Object.keys(pageMap).filter(k => isChanged(pageMap[+k])).map(Number)
  );

  console.log('[Honesty] changed this page:', [...changedSet]);

  /* ────── comparison helpers ────── */
  const shouldSkip = (baseTrait: string, otherTrait: string) =>
    (baseTrait === 'openness' && otherTrait !== baseTrait) || (otherTrait === 'openness' && otherTrait !== baseTrait);   // openness stays intra-trait

  let overlapMismatch = [];
  let opposeMismatch  = [];

  const logMismatch = (
    tag: 'OVERLAP' | 'OPPOSE',
    a: number,
    b: number,
    diff: number,
    textA: string,
    textB: string,
  ) => {
    console.log(
      `[${tag}] idx${a} ↔ idx${b}  diff=${diff.toFixed(3)}  `
      + `${allMap[a]} vs ${allMap[b]}`
      + '\n' + textA,
      + '\n' + textB 
    );
  };

  /* ────── run through *changed* sliders only ────── */
  for (const idx of changedSet) {
    const me   = items[idx];
    const myV  = allMap[idx];

    // — overlaps should be similar —
    for (const other of me.overlapping) {
      if (!(other in allMap)) continue;            // partner not answered yet
      //if (shouldSkip(me.trait, items[other].trait)) continue;

      const diff = Math.abs(myV - allMap[other]);
      if (isChanged(allMap[other]) && isChanged(myV) && diff > similarityThreshold) {
        overlapMismatch.push(me.index, other);
        logMismatch('OVERLAP', idx, other, diff, me.text, items[other].text);
      }
    }

    // — oppositions should be dissimilar —
    for (const other of me.opposing) {
      if (!(other in allMap)) continue;
     // if (shouldSkip(me.trait, items[other].trait)) continue;

      const diff = Math.abs(myV - allMap[other]);
      if (isChanged(allMap[other]) && isChanged(myV) && diff < oppositionThreshold) {
        opposeMismatch.push(me.index, other);
        logMismatch('OPPOSE', idx, other, diff, me.text, items[other].text);
      }
    }
  }

  console.log(
    `[Honesty] overlapMismatch=${overlapMismatch}  opposeMismatch=${opposeMismatch}`
  );

  return [...overlapMismatch, ...opposeMismatch];
 // return overlapMismatch.length === 0 && opposeMismatch.length === 0;
}

function selectMoreStatements(statements: any[]) {
  const opennessStatements = statements.filter(s => s.trait === 'openness');
  const conscientiousnessStatements = statements.filter(s => s.trait === 'conscientiousness');
  const extraversionStatements = statements.filter(s => s.trait === 'extraversion');
  const agreeablenessStatements = statements.filter(s => s.trait === 'agreeableness');
  const neuroticismStatements = statements.filter(s => s.trait === 'neuroticism');

  const selectedStatements = [];

  // Helper function to select a random statement and remove it from the array
  const selectRandom = (arr: any[]) => {
    if (arr.length > 0) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      const selected = arr.splice(randomIndex, 1)[0];
      return selected;
    }
    return null; // Handle case where array might be empty (though it shouldn't be based on our counts)
  };

  // Select initial Openness statements
  for (let i = 0; i < 3; i++) {
    const statement = selectRandom(opennessStatements);
    if (statement) selectedStatements.push(statement);
  }

  // Select CEAN sequence 4 times
  for (let i = 0; i < 9; i++) {
    let statement = selectRandom(conscientiousnessStatements);
    if (statement) selectedStatements.push(statement);
    statement = selectRandom(extraversionStatements);
    if (statement) selectedStatements.push(statement);
    statement = selectRandom(agreeablenessStatements);
    if (statement) selectedStatements.push(statement);
    statement = selectRandom(neuroticismStatements);
    if (statement) selectedStatements.push(statement);
  }

  // Select final Openness statements
  for (let i = 0; i < 3; i++) {
    const statement = selectRandom(opennessStatements);
    if (statement) selectedStatements.push(statement);
  }

  return selectedStatements;
}
function selectEvenMoreStatements(statements: any[]) {
  const opennessStatements = statements.filter(s => s.trait === 'openness');
  const conscientiousnessStatements = statements.filter(s => s.trait === 'conscientiousness');
  const extraversionStatements = statements.filter(s => s.trait === 'extraversion');
  const agreeablenessStatements = statements.filter(s => s.trait === 'agreeableness');
  const neuroticismStatements = statements.filter(s => s.trait === 'neuroticism');

  const selectedStatements = [];

  // Helper function to select a random statement and remove it from the array
  const selectRandom = (arr: any[]) => {
    if (arr.length > 0) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      const selected = arr.splice(randomIndex, 1)[0];
      return selected;
    }
    return null; // Handle case where array might be empty (though it shouldn't be based on our counts)
  };

  // Select initial Openness statements
  for (let i = 0; i < 6; i++) {
    const statement = selectRandom(opennessStatements);
    if (statement) selectedStatements.push(statement);
  }

  // Select CEAN sequence 4 times
  for (let i = 0; i < 16; i++) {
    let statement = selectRandom(conscientiousnessStatements);
    if (statement) selectedStatements.push(statement);
    statement = selectRandom(extraversionStatements);
    if (statement) selectedStatements.push(statement);
    statement = selectRandom(agreeablenessStatements);
    if (statement) selectedStatements.push(statement);
    statement = selectRandom(neuroticismStatements);
    if (statement) selectedStatements.push(statement);
  }

  // Select final Openness statements
  for (let i = 0; i < 6; i++) {
    const statement = selectRandom(opennessStatements);
    if (statement) selectedStatements.push(statement);
  }

  return selectedStatements;
}

export const allStatements =[
  {
    "text": "I contemplate abstract concepts.",
    "trait": "openness",
    "weight": 1.1,
    "aspect": "Intellect",
    "subtext": {
      "0-10": {
        "text": "I seldom reflect on abstract concepts.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally consider simple abstract ideas.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes ponder abstract ideas.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately reflect on abstract concepts.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often engage in abstract thought.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently immerse myself in abstract contemplation.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly delve into abstract ideas.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly enjoy exploring abstract concepts.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very drawn to abstract thinking.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I am profoundly absorbed in the world of abstract ideas.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      155
    ],
    "opposing": [],
    "index": 0
  },
  {
    "text": "I participate in philosophical discussions.",
    "trait": "openness",
    "weight": 1,
    "aspect": "Intellect",
    "subtext": {
      "0-10": {
        "text": "I rarely engage in philosophical discussions.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally share a philosophical thought.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes join in on philosophical conversations.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately enjoy discussing philosophical topics.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often contribute to philosophical discussions.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently engage in deep philosophical discussions.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly seek out philosophical exchanges.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I am highly enthusiastic about debating philosophical ideas.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very committed to philosophical dialogue.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I am passionately involved in philosophical discussions.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      65
    ],
    "opposing": [
      93
    ],
    "index": 1
  },
  {
    "text": "I seek out novel and unconventional experiences.",
    "trait": "openness",
    "weight": 0.9,
    "aspect": "Intellect",
    "subtext": {
      "0-10": {
        "text": "I rarely try new experiences.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally experiment with something new.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes engage in new activities.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately try out novel experiences.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often embrace new and unusual things.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently pursue novel experiences.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly experiment with unconventional activities.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly enjoy exploring new experiences.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very open to trying unusual things.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I am always eager to embrace novel and unconventional experiences.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      157
    ],
    "opposing": [
      18,
      33
    ],
    "index": 2
  },
  {
    "text": "I demonstrate curiosity about diverse cultures and lifestyles.",
    "trait": "openness",
    "weight": 1.2,
    "aspect": "Intellect",
    "subtext": {
      "0-10": {
        "text": "I show little interest in different cultures.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally wonder about other cultures.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes consider different ways of life.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately appreciate diverse cultures.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often reflect on various cultural ways of living.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently show curiosity about different cultures.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly explore information about diverse cultures.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I am highly interested in learning about different lifestyles.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very curious about the variety of cultural expressions.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I am deeply fascinated by diverse cultures and ways of life.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      149
    ],
    "opposing": [
      18,
      33
    ],
    "index": 3
  },
  {
    "text": "I actively pursue new knowledge and welcome learning in various domains.",
    "trait": "openness",
    "weight": 1.3,
    "aspect": "Intellect",
    "subtext": {
      "0-10": {
        "text": "I rarely seek out new knowledge.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally learn something new.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes engage in learning new subjects.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately value expanding my knowledge.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often explore new topics.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently pursue opportunities to learn.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly engage in expanding my intellectual horizons.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I am highly interested in acquiring new knowledge.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very eager to learn about a wide range of subjects.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I have an intense passion for learning and broadening my intellectual scope.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      135,
      147
    ],
    "opposing": [],
    "index": 4
  },
  {
    "text": "I readily update my beliefs when presented with new evidence.",
    "trait": "openness",
    "weight": 1,
    "aspect": "Intellect",
    "subtext": {
      "0-10": {
        "text": "I rarely change my opinions.",
        "exclude": [
          "ENTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally reconsider my views.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes adjust my opinions based on new facts.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately revise my views when needed.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often reconsider my opinions with new information.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently update my beliefs when confronted with evidence.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly adjust my opinions based on fresh insights.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I am highly open to modifying my views.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very inclined to revise my beliefs with new information.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I readily transform my opinions in light of new evidence.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      148,
      152
    ],
    "opposing": [
      29
    ],
    "index": 5
  },
  {
    "text": "I set ambitious goals and steadily work toward them.",
    "trait": "conscientiousness",
    "weight": 1.2,
    "aspect": "Industriousness",
    "subtext": {
      "0-10": {
        "text": "I rarely set long-term goals or follow through on them.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally set goals but often lose interest quickly.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes pursue goals, though my effort is inconsistent.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "30-40": {
        "text": "I moderately stick with goals once I set them.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ"
        ]
      },
      "40-50": {
        "text": "I fairly often keep working toward my goals.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently set clear goals and pursue them steadily.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly pursue ambitious goals with sustained effort.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP"
        ]
      },
      "70-80": {
        "text": "I highly commit to challenging goals and track my progress.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "80-90": {
        "text": "I am very driven, working persistently toward ambitious targets.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "90-100": {
        "text": "I always pursue ambitious goals with unwavering dedication.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      }
    },
    "overlapping": [
      12,
      13,
      22
    ],
    "opposing": [
      116
    ],
    "index": 6
  },
  {
    "text": "I persist until tasks are completely finished, even when they become tedious.",
    "trait": "conscientiousness",
    "weight": 1.1,
    "aspect": "Industriousness",
    "subtext": {
      "0-10": {
        "text": "I rarely finish tasks once they get boring or difficult.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally leave tedious tasks unfinished.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes push through boring tasks but not always.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "30-40": {
        "text": "I moderately stick with tasks until they’re done.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ"
        ]
      },
      "40-50": {
        "text": "I fairly often complete tasks despite boredom.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently persist with tasks until they’re fully finished.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly finish even the most tedious assignments.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP"
        ]
      },
      "70-80": {
        "text": "I highly push through tedious work until it’s done perfectly.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "80-90": {
        "text": "I am very resolute, refusing to quit until every detail is done.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "90-100": {
        "text": "I always see tasks through to absolute completion, no matter how tedious.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      }
    },
    "overlapping": [
      13
    ],
    "opposing": [],
    "index": 7
  },
  {
    "text": "I prioritize my time to focus on the most important tasks first.",
    "trait": "conscientiousness",
    "weight": 1,
    "aspect": "Industriousness",
    "subtext": {
      "0-10": {
        "text": "I rarely prioritize tasks and often work on whatever comes up.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally prioritize but easily get sidetracked.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes plan priorities yet still procrastinate.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "30-40": {
        "text": "I moderately set priorities and usually follow them.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ"
        ]
      },
      "40-50": {
        "text": "I fairly often focus on top-priority tasks first.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently handle important tasks before minor ones.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly schedule my day around high-priority goals.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP"
        ]
      },
      "70-80": {
        "text": "I highly structure my workload to tackle key tasks early.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "80-90": {
        "text": "I am very disciplined, always focusing on critical tasks first.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "90-100": {
        "text": "I always organize my time to complete the most important tasks before anything else.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      }
    },
    "overlapping": [
      11,
      26,
      30
    ],
    "opposing": [
      156
    ],
    "index": 8
  },
  {
    "text": "I remain focused and productive despite distractions.",
    "trait": "conscientiousness",
    "weight": 1,
    "aspect": "Industriousness",
    "subtext": {
      "0-10": {
        "text": "I rarely stay focused when distractions arise.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally get back on track after being distracted.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes lose focus but eventually resume work.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "30-40": {
        "text": "I moderately handle distractions and stay productive.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ"
        ]
      },
      "40-50": {
        "text": "I fairly often stay productive despite interruptions.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently maintain focus even in distracting environments.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly remain focused and efficient, regardless of noise.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP"
        ]
      },
      "70-80": {
        "text": "I highly block out distractions and sustain high productivity.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "80-90": {
        "text": "I am very adept at maintaining deep focus despite disruptions.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "90-100": {
        "text": "I always remain productive and laser-focused, no matter the distractions.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      }
    },
    "overlapping": [
      25,
      32
    ],
    "opposing": [
      116
    ],
    "index": 9
  },
  {
    "text": "I take initiative to improve my performance without being asked.",
    "trait": "conscientiousness",
    "weight": 1.1,
    "aspect": "Industriousness",
    "subtext": {
      "0-10": {
        "text": "I rarely seek ways to improve unless told to.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally make improvements when prompted.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes look for self-improvement opportunities.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "30-40": {
        "text": "I moderately find ways to get better at my work.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ"
        ]
      },
      "40-50": {
        "text": "I fairly often take initiative to improve my skills.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently self-initiate performance improvements.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly identify and act on ways to excel further.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP"
        ]
      },
      "70-80": {
        "text": "I highly push myself to exceed expectations without prompting.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "80-90": {
        "text": "I am very proactive in elevating my performance standards.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "90-100": {
        "text": "I always drive continuous self-improvement without external push.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      }
    },
    "overlapping": [],
    "opposing": [
      90
    ],
    "index": 10
  },
  {
    "text": "I track my progress and adjust strategies to meet deadlines.",
    "trait": "conscientiousness",
    "weight": 1,
    "aspect": "Industriousness",
    "subtext": {
      "0-10": {
        "text": "I rarely monitor progress or adapt to meet deadlines.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally track progress but miss deadlines.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes check progress and tweak plans last minute.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "30-40": {
        "text": "I moderately monitor progress to stay on schedule.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ"
        ]
      },
      "40-50": {
        "text": "I fairly often track tasks and adjust to meet deadlines.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently monitor progress and adapt plans as needed.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly fine-tune strategies to hit every deadline.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP"
        ]
      },
      "70-80": {
        "text": "I highly track milestones and adapt smoothly to stay ahead.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "80-90": {
        "text": "I am very systematic in monitoring and adjusting for deadlines.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "90-100": {
        "text": "I always track progress meticulously and adapt early to ensure every deadline is met.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      }
    },
    "overlapping": [
      8,
      15,
      30
    ],
    "opposing": [
      156
    ],
    "index": 11
  },
  {
    "text": "I willingly tackle challenging projects that require sustained effort.",
    "trait": "conscientiousness",
    "weight": 1.3,
    "aspect": "Industriousness",
    "subtext": {
      "0-10": {
        "text": "I rarely take on long, challenging projects.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally start tough projects but often quit early.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes accept challenging work but struggle to persist.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "30-40": {
        "text": "I moderately engage in demanding projects and see them through.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ"
        ]
      },
      "40-50": {
        "text": "I fairly often volunteer for projects that require sustained effort.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently take on and complete challenging long-term tasks.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly seek tough projects that test my persistence.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP"
        ]
      },
      "70-80": {
        "text": "I highly embrace demanding projects that need sustained energy.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "80-90": {
        "text": "I am very eager to tackle long, challenging assignments.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "90-100": {
        "text": "I always take on challenging projects and persist until successful completion.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      }
    },
    "overlapping": [
      6,
      13,
      22
    ],
    "opposing": [
      116
    ],
    "index": 12
  },
  {
    "text": "I keep myself motivated through long-term projects.",
    "trait": "conscientiousness",
    "weight": 1,
    "aspect": "Industriousness",
    "subtext": {
      "0-10": {
        "text": "I rarely stay motivated on projects that last a long time.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally lose motivation on long projects.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes stay motivated but struggle over long periods.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "30-40": {
        "text": "I moderately maintain motivation in long-term work.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ"
        ]
      },
      "40-50": {
        "text": "I fairly often keep motivation steady over long projects.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently sustain motivation for long-term goals.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly energize myself throughout lengthy projects.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP"
        ]
      },
      "70-80": {
        "text": "I highly maintain high motivation from start to finish.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "80-90": {
        "text": "I am very skilled at sustaining drive over long timelines.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "90-100": {
        "text": "I always remain fully motivated throughout extended projects, no matter the duration.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      }
    },
    "overlapping": [
      6,
      7,
      12,
      22
    ],
    "opposing": [
      116
    ],
    "index": 13
  },
  {
    "text": "I keep my workspace clean and well-organized.",
    "trait": "conscientiousness",
    "weight": 1.1,
    "aspect": "Orderliness",
    "subtext": {
      "0-10": {
        "text": "I rarely keep my workspace tidy.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally straighten up but usually stay messy.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes organize but let clutter build up.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "30-40": {
        "text": "I moderately keep my workspace reasonably orderly.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ"
        ]
      },
      "40-50": {
        "text": "I fairly often maintain a tidy, organized workspace.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently keep my workspace neat and structured.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly maintain impeccable workspace organization.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP"
        ]
      },
      "70-80": {
        "text": "I highly ensure my workspace stays clean and orderly.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "80-90": {
        "text": "I am very meticulous about workspace cleanliness and order.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "90-100": {
        "text": "I always maintain a perfectly organized and spotless workspace.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      }
    },
    "overlapping": [
      17,
      19,
      27
    ],
    "opposing": [],
    "index": 14
  },
  {
    "text": "I plan my day with clear schedules and routines.",
    "trait": "conscientiousness",
    "weight": 1.2,
    "aspect": "Orderliness",
    "subtext": {
      "0-10": {
        "text": "I rarely use schedules or routines to plan my day.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally plan, but mostly go with the flow.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes set a schedule but don’t stick to it.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "30-40": {
        "text": "I moderately plan my day with some structure.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ"
        ]
      },
      "40-50": {
        "text": "I fairly often use routines to guide my day.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently structure my day with detailed schedules.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly follow clear routines to manage my time.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP"
        ]
      },
      "70-80": {
        "text": "I highly rely on schedules and routines for daily efficiency.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "80-90": {
        "text": "I am very committed to carefully planned schedules.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "90-100": {
        "text": "I always plan my day meticulously and follow routines almost flawlessly.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      }
    },
    "overlapping": [
      11,
      21,
      31,
      33
    ],
    "opposing": [
      157
    ],
    "index": 15
  },
  {
    "text": "I create detailed checklists to ensure nothing is forgotten.",
    "trait": "conscientiousness",
    "weight": 1,
    "aspect": "Orderliness",
    "subtext": {
      "0-10": {
        "text": "I rarely make lists to track tasks or details.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally jot notes but skip detailed lists.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes use lists but not consistently.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "30-40": {
        "text": "I moderately use checklists to track tasks.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ"
        ]
      },
      "40-50": {
        "text": "I fairly often rely on task lists to stay organized.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently create detailed checklists to cover all details.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly break tasks into checklist steps for accuracy.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP"
        ]
      },
      "70-80": {
        "text": "I highly depend on comprehensive checklists to ensure nothing is missed.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "80-90": {
        "text": "I am very systematic, always using detailed checklists.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "90-100": {
        "text": "I always create exhaustive checklists to guarantee nothing is forgotten.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      }
    },
    "overlapping": [
      28,
      144
    ],
    "opposing": [],
    "index": 16
  },
  {
    "text": "I store documents and resources in a structured system.",
    "trait": "conscientiousness",
    "weight": 1,
    "aspect": "Orderliness",
    "subtext": {
      "0-10": {
        "text": "I rarely keep my files or resources organized.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally organize files but often misplace things.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes keep resources in order but not consistently.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "30-40": {
        "text": "I moderately organize files in a simple system.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ"
        ]
      },
      "40-50": {
        "text": "I fairly often maintain a structured filing system.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently store documents in clearly labeled folders.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly follow strict rules for file organization.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP"
        ]
      },
      "70-80": {
        "text": "I highly ensure all files and resources are carefully structured.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "80-90": {
        "text": "I am very meticulous in maintaining a robust filing system.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "90-100": {
        "text": "I always keep every document perfectly stored in a logical system.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      }
    },
    "overlapping": [
      14,
      19
    ],
    "opposing": [],
    "index": 17
  },
  {
    "text": "I follow established procedures to maintain consistency.",
    "trait": "conscientiousness",
    "weight": 1.1,
    "aspect": "Orderliness",
    "subtext": {
      "0-10": {
        "text": "I rarely follow established procedures.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally skip procedures to save time.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes follow procedures but often improvise.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "30-40": {
        "text": "I moderately use procedures for most tasks.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ"
        ]
      },
      "40-50": {
        "text": "I fairly often stick to established procedures.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently rely on procedures for consistency.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly ensure procedures are followed accurately.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP"
        ]
      },
      "70-80": {
        "text": "I highly maintain strict adherence to procedures.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "80-90": {
        "text": "I am very diligent about following every procedure step.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "90-100": {
        "text": "I always follow established procedures meticulously for total consistency.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      }
    },
    "overlapping": [
      29,
      31,
      33,
      92
    ],
    "opposing": [
      2,
      148,
      157
    ],
    "index": 18
  },
  {
    "text": "I maintain orderly digital files and an uncluttered inbox.",
    "trait": "conscientiousness",
    "weight": 1,
    "aspect": "Orderliness",
    "subtext": {
      "0-10": {
        "text": "I rarely sort digital files or clean my inbox.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally tidy digital files but mostly ignore clutter.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes organize files but let my inbox pile up.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "30-40": {
        "text": "I moderately keep my digital workspace somewhat organized.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ"
        ]
      },
      "40-50": {
        "text": "I fairly often maintain a tidy digital environment.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently keep files organized and inbox clean.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly sort files and manage my inbox methodically.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP"
        ]
      },
      "70-80": {
        "text": "I highly ensure my digital files and inbox stay clutter-free.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "80-90": {
        "text": "I am very committed to keeping a strictly organized digital workspace.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "90-100": {
        "text": "I always maintain flawless digital organization and a zero-inbox state.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      }
    },
    "overlapping": [
      14,
      17
    ],
    "opposing": [],
    "index": 19
  },
  {
    "text": "I review and fine-tune processes to improve efficiency.",
    "trait": "conscientiousness",
    "weight": 1.2,
    "aspect": "Orderliness",
    "subtext": {
      "0-10": {
        "text": "I rarely review or refine the way I do things.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally spot inefficiencies but seldom fix them.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes look for improvements but act slowly.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "30-40": {
        "text": "I moderately review and adjust processes for efficiency.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ"
        ]
      },
      "40-50": {
        "text": "I fairly often refine my workflows to improve outcomes.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently identify and fix process inefficiencies.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly analyze and optimize workflows for top efficiency.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP"
        ]
      },
      "70-80": {
        "text": "I highly streamline processes to achieve maximum efficiency.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "80-90": {
        "text": "I am very proactive in continually fine-tuning work processes.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "90-100": {
        "text": "I always review and perfect workflows to ensure peak efficiency.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      }
    },
    "overlapping": [
      159
    ],
    "opposing": [
      154
    ],
    "index": 20
  },
  {
    "text": "I prepare well in advance for upcoming commitments.",
    "trait": "conscientiousness",
    "weight": 1,
    "aspect": "Orderliness",
    "subtext": {
      "0-10": {
        "text": "I rarely prepare ahead for commitments and deadlines.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally plan ahead but often rush last minute.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes prep early but not consistently.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "30-40": {
        "text": "I moderately prepare in advance for most commitments.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ"
        ]
      },
      "40-50": {
        "text": "I fairly often plan well ahead for commitments.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently prepare early to meet commitments smoothly.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly start preparations well before deadlines.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP"
        ]
      },
      "70-80": {
        "text": "I highly ensure all preparations are done long before due dates.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "80-90": {
        "text": "I am very proactive in prepping far ahead of time.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "90-100": {
        "text": "I always prepare thoroughly, well in advance of all commitments.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      }
    },
    "overlapping": [
      15,
      30,
      33
    ],
    "opposing": [
      156
    ],
    "index": 21
  },
  {
    "text": "I put in effort to attain my objectives.",
    "trait": "conscientiousness",
    "weight": 1.2,
    "aspect": "Industriousness",
    "subtext": {
      "0-10": {
        "text": "I rarely work hard to reach my goals.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally put some effort into my goals.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes work hard on my goals.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately strive toward my objectives.",
        "exclude": [
          "INTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often devote effort to achieve my goals.",
        "exclude": [
          "ENTJ"
        ]
      },
      "50-60": {
        "text": "I frequently put in considerable effort to reach my aims.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly work with diligence to achieve my objectives.",
        "exclude": [
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly prioritize exerting effort to reach my goals.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very dedicated to working hard for my objectives.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ISFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I consistently go above and beyond to achieve my goals.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      6,
      12,
      13,
      34
    ],
    "opposing": [
      123
    ],
    "index": 22
  },
  {
    "text": "I perceive myself as capable and competent.",
    "trait": "conscientiousness",
    "weight": 1.1,
    "aspect": "Industriousness",
    "subtext": {
      "0-10": {
        "text": "I rarely feel capable.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally feel somewhat competent.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes feel capable in certain areas.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately feel competent in my abilities.",
        "exclude": [
          "INTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often feel capable and competent.",
        "exclude": [
          "ENTJ"
        ]
      },
      "50-60": {
        "text": "I frequently feel confident in my abilities.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly feel capable and effective in what I do.",
        "exclude": [
          "INTP"
        ]
      },
      "70-80": {
        "text": "I have a strong sense of my own competence.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very confident in my abilities.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ISFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I possess an unwavering belief in my competence.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      66
    ],
    "opposing": [
      117,
      121,
      122,
      124,
      127
    ],
    "index": 23
  },
  {
    "text": "I resist impulses and temptations.",
    "trait": "conscientiousness",
    "weight": 1,
    "aspect": "Industriousness",
    "subtext": {
      "0-10": {
        "text": "I often give in to temptations.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally manage to resist a temptation.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes successfully resist impulses.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately manage to keep my impulses in check.",
        "exclude": [
          "INTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often resist temptations effectively.",
        "exclude": [
          "ENTJ"
        ]
      },
      "50-60": {
        "text": "I frequently control my impulses in tempting situations.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly demonstrate strong self-control.",
        "exclude": [
          "INTP"
        ]
      },
      "70-80": {
        "text": "I am highly capable of resisting temptation.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very adept at maintaining self-control.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ISFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I consistently and robustly resist all temptations.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      25
    ],
    "opposing": [
      113,
      116
    ],
    "index": 24
  },
  {
    "text": "I deliberate before taking action.",
    "trait": "conscientiousness",
    "weight": 1.1,
    "aspect": "Industriousness",
    "subtext": {
      "0-10": {
        "text": "I rarely think before acting.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally pause briefly before acting.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes consider my actions beforehand.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately reflect before making decisions.",
        "exclude": [
          "INTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often think carefully before acting.",
        "exclude": [
          "ENTJ"
        ]
      },
      "50-60": {
        "text": "I frequently deliberate before taking any action.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly plan my actions carefully.",
        "exclude": [
          "INTP"
        ]
      },
      "70-80": {
        "text": "I am highly methodical in thinking before I act.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very deliberate and thoughtful in my actions.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ISFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always think thoroughly before making any decision.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      9,
      24
    ],
    "opposing": [
      113,
      116
    ],
    "index": 25
  },
  {
    "text": "I consistently manage my time efficiently.",
    "trait": "conscientiousness",
    "weight": 1,
    "aspect": "Industriousness",
    "subtext": {
      "0-10": {
        "text": "I rarely use my time efficiently.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally manage my time well.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes use my time in a productive way.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately make good use of my time.",
        "exclude": [
          "INTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often work efficiently.",
        "exclude": [
          "ENTJ"
        ]
      },
      "50-60": {
        "text": "I frequently manage my time effectively.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly use my time in a very efficient manner.",
        "exclude": [
          "INTP"
        ]
      },
      "70-80": {
        "text": "I am highly efficient in managing my time.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very skilled at using my time wisely.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ISFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always maximize my efficiency in time management.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      8,
      32
    ],
    "opposing": [
      119,
      125,
      146
    ],
    "index": 26
  },
  {
    "text": "I maintain a preference for neat and orderly surroundings.",
    "trait": "conscientiousness",
    "weight": 1.1,
    "aspect": "Orderliness",
    "subtext": {
      "0-10": {
        "text": "I do not mind if things are messy.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally tidy up my space.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes prefer things to be neat.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately favor an orderly environment.",
        "exclude": [
          "INTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often maintain a tidy space.",
        "exclude": [
          "ENTJ"
        ]
      },
      "50-60": {
        "text": "I frequently ensure that my surroundings are neat.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly keep my environment orderly.",
        "exclude": [
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly value order and neatness.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very particular about maintaining order.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ISFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always insist on a perfectly neat and orderly environment.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      14
    ],
    "opposing": [],
    "index": 27
  },
  {
    "text": "I carefully attend to details.",
    "trait": "conscientiousness",
    "weight": 1,
    "aspect": "Orderliness",
    "subtext": {
      "0-10": {
        "text": "I often overlook important details.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally notice small details.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes pay attention to details.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately focus on details.",
        "exclude": [
          "INTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often notice important details.",
        "exclude": [
          "ENTJ"
        ]
      },
      "50-60": {
        "text": "I frequently attend to even subtle details.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly ensure that no detail is overlooked.",
        "exclude": [
          "INTP"
        ]
      },
      "70-80": {
        "text": "I am highly meticulous about details.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very thorough in noticing every detail.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ISFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always pay exceptionally close attention to every detail.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      16,
      144
    ],
    "opposing": [],
    "index": 28
  },
  {
    "text": "I reliably adhere to established rules and guidelines.",
    "trait": "conscientiousness",
    "weight": 1.1,
    "aspect": "Orderliness",
    "subtext": {
      "0-10": {
        "text": "I often disregard rules and guidelines.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally follow rules when reminded.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes make an effort to follow rules.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately adhere to rules.",
        "exclude": [
          "INTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often follow established guidelines.",
        "exclude": [
          "ENTJ"
        ]
      },
      "50-60": {
        "text": "I frequently abide by rules and regulations.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly conform to established rules.",
        "exclude": [
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly respect and follow rules.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very careful to adhere to all rules.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ISFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always strictly follow rules and regulations.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      18,
      92
    ],
    "opposing": [
      5,
      148
    ],
    "index": 29
  },
  {
    "text": "I routinely develop plans and adhere to them.",
    "trait": "conscientiousness",
    "weight": 1,
    "aspect": "Orderliness",
    "subtext": {
      "0-10": {
        "text": "I rarely make plans.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally make loose plans.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes plan but don’t always follow through.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately like to plan activities.",
        "exclude": [
          "INTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often create plans and try to follow them.",
        "exclude": [
          "ENTJ"
        ]
      },
      "50-60": {
        "text": "I frequently make detailed plans and adhere to them.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly plan ahead and execute my plans.",
        "exclude": [
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly value planning and stick to my plans.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very committed to following my plans.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ISFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always meticulously plan and strictly adhere to my schedule.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      8,
      11,
      15,
      21
    ],
    "opposing": [
      156
    ],
    "index": 30
  },
  {
    "text": "I value having a structured schedule and routine.",
    "trait": "conscientiousness",
    "weight": 0.9,
    "aspect": "Orderliness",
    "subtext": {
      "0-10": {
        "text": "I prefer spontaneity over routine.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally follow a loose schedule.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes appreciate having a general routine.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately value a consistent schedule.",
        "exclude": [
          "INTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often rely on a set routine.",
        "exclude": [
          "ENTJ"
        ]
      },
      "50-60": {
        "text": "I frequently adhere to a regular schedule.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly maintain a structured routine.",
        "exclude": [
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly value having a consistent routine.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very reliant on my schedule.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ISFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always strictly adhere to a well-planned routine.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      15,
      18,
      33
    ],
    "opposing": [
      2,
      157
    ],
    "index": 31
  },
  {
    "text": "I remain organized and focused when juggling tasks.",
    "trait": "conscientiousness",
    "weight": 1,
    "subtext": {
      "0-10": {
        "text": "I rarely stay organized when managing tasks.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally try to organize my tasks.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes remain focused when handling multiple tasks.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately keep my tasks organized.",
        "exclude": [
          "INTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often stay organized while managing tasks.",
        "exclude": [
          "ENTJ"
        ]
      },
      "50-60": {
        "text": "I frequently remain focused and organized during multitasking.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly manage multiple tasks with a clear focus.",
        "exclude": [
          "INTP"
        ]
      },
      "70-80": {
        "text": "I strongly maintain organization and focus when juggling tasks.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am highly efficient at managing multiple priorities.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ISFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always stay exceptionally organized and focused when handling many tasks.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      9,
      26
    ],
    "opposing": [
      119,
      125,
      146
    ],
    "index": 32
  },
  {
    "text": "I favor planned and organized activities over spontaneity.",
    "trait": "conscientiousness",
    "weight": 0.9,
    "subtext": {
      "0-10": {
        "text": "I rarely prefer organized activities.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally enjoy planned events.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes choose structured activities over spontaneous ones.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately prefer organized activities.",
        "exclude": [
          "INTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often choose planned over spontaneous events.",
        "exclude": [
          "ENTJ"
        ]
      },
      "50-60": {
        "text": "I frequently opt for organized activities.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly plan my activities rather than leaving them to chance.",
        "exclude": [
          "INTP"
        ]
      },
      "70-80": {
        "text": "I strongly favor structured and well-organized events.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am highly inclined to choose planned activities.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ISFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always prioritize meticulously organized and planned events.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      15,
      18,
      21,
      31
    ],
    "opposing": [
      2,
      157
    ],
    "index": 33
  },
  {
    "text": "I possess a strong sense of duty toward fulfilling my goals and commitments.",
    "trait": "conscientiousness",
    "weight": 1.1,
    "subtext": {
      "0-10": {
        "text": "I rarely feel responsible for my commitments.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally feel a mild sense of responsibility.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes feel responsible for meeting my goals.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately feel accountable for my commitments.",
        "exclude": [
          "INTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often feel a strong duty to meet commitments.",
        "exclude": [
          "ENTJ"
        ]
      },
      "50-60": {
        "text": "I frequently ensure that I meet my goals.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly feel deeply responsible for my commitments.",
        "exclude": [
          "INTP"
        ]
      },
      "70-80": {
        "text": "I strongly prioritize fulfilling my obligations.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very dedicated to meeting my goals and commitments.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ISFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always feel an intense responsibility to achieve my goals.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      22,
      80
    ],
    "opposing": [
      123
    ],
    "index": 34
  },
  {
    "text": "I base my decisions on factual evidence rather than emotions.",
    "trait": "conscientiousness",
    "weight": 1.3,
    "subtext": {
      "0-10": {
        "text": "I almost always decide based on feelings.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "10-20": {
        "text": "I mostly rely on emotions when deciding.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "20-30": {
        "text": "I sometimes consider facts, but feelings often guide me.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "30-40": {
        "text": "I occasionally let facts influence my decisions.",
        "exclude": [
          "INTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I try to balance facts with emotions when deciding.",
        "exclude": [
          "ENTJ"
        ]
      },
      "50-60": {
        "text": "I usually lean toward making decisions based on facts.",
        "exclude": []
      },
      "60-70": {
        "text": "I frequently base my decisions on objective evidence.",
        "exclude": [
          "INTP"
        ]
      },
      "70-80": {
        "text": "I consistently prioritize facts over feelings in my decision-making.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I almost always rely on factual information when deciding.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ISFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always base my decisions solely on factual evidence.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [],
    "opposing": [
      70
    ],
    "index": 35
  },
  {
    "text": "I systematically focus on details and thoughtfully plan my tasks.",
    "trait": "conscientiousness",
    "weight": 0.9,
    "subtext": {
      "0-10": {
        "text": "I rarely think through details when completing tasks.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally reflect on task details.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes consider details when working.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately plan my tasks with attention to details.",
        "exclude": [
          "INTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often ensure my tasks are well thought out.",
        "exclude": [
          "ENTJ"
        ]
      },
      "50-60": {
        "text": "I frequently focus on details and plan carefully.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly engage in detailed planning for my tasks.",
        "exclude": [
          "INTP"
        ]
      },
      "70-80": {
        "text": "I strongly emphasize careful thought in task management.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very meticulous and thorough in my planning.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ISFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always think through every detail with great care.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [],
    "opposing": [
      0
    ],
    "index": 36
  },
  {
    "text": "I feel energized when socializing with large groups.",
    "trait": "extraversion",
    "weight": 1.2,
    "aspect": "Enthusiasm",
    "subtext": {
      "0-10": {
        "text": "I prefer solitude over large groups.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally attend big gatherings but feel drained quickly.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes tolerate medium-sized groups for a short time.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "30-40": {
        "text": "I moderately enjoy group settings with people I know.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often feel comfortable socializing in groups.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently feel uplifted by lively group events.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly seek out large gatherings for energy.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly thrive in energetic crowds and lengthy events.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very invigorated by spending hours with large groups.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always feel most alive when surrounded by lots of people.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      53,
      57
    ],
    "opposing": [
      99,
      100
    ],
    "index": 37
  },
  {
    "text": "I laugh and smile easily in conversations.",
    "trait": "extraversion",
    "weight": 1.1,
    "aspect": "Enthusiasm",
    "subtext": {
      "0-10": {
        "text": "I rarely laugh or smile during conversations.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally smile but stay mostly reserved.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes smile, though not very broadly.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "30-40": {
        "text": "I moderately share smiles with familiar people.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often laugh and smile in most chats.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently brighten conversations with laughter.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly laugh freely and share big smiles.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly radiate joy and laughter in every conversation.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very quick to laugh and spread enthusiasm.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always beam with smiles and laughter in all interactions.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      40,
      44
    ],
    "opposing": [
      99,
      102,
      118,
      120,
      146
    ],
    "index": 38
  },
  {
    "text": "I initiate casual conversations with strangers.",
    "trait": "extraversion",
    "weight": 1,
    "aspect": "Enthusiasm",
    "subtext": {
      "0-10": {
        "text": "I rarely start conversations with people I don’t know.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally say hello but avoid small talk.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes chat briefly with strangers if they speak first.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "30-40": {
        "text": "I moderately start small talk with new people.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often strike up light conversations with strangers.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently chat casually with unfamiliar people.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly initiate friendly talks with strangers.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly enjoy chatting with new people wherever I go.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very eager to start conversations with anyone around me.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always initiate lively conversations with strangers everywhere.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      50
    ],
    "opposing": [
      100,
      121,
      124,
      127
    ],
    "index": 39
  },
  {
    "text": "I share my good mood and enthusiasm with others.",
    "trait": "extraversion",
    "weight": 1,
    "aspect": "Enthusiasm",
    "subtext": {
      "0-10": {
        "text": "I rarely express my mood to others.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally share positivity but keep it subdued.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes show enthusiasm with close friends only.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "30-40": {
        "text": "I moderately spread positivity when I’m in a good mood.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often share enthusiasm with people around me.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently lift others’ spirits with my mood.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly radiate enthusiasm and good vibes.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly energize groups with my upbeat mood.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very contagious with my enthusiasm, uplifting everyone.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always broadcast my enthusiasm, boosting the mood of any crowd.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      38,
      42,
      44
    ],
    "opposing": [
      99,
      102,
      118,
      120,
      146
    ],
    "index": 40
  },
  {
    "text": "I seek out fun activities to enjoy with friends.",
    "trait": "extraversion",
    "weight": 1.1,
    "aspect": "Enthusiasm",
    "subtext": {
      "0-10": {
        "text": "I rarely look for social activities with friends.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally join friends’ plans but seldom initiate.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes join fun outings if invited.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "30-40": {
        "text": "I moderately suggest enjoyable plans to friends.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often plan fun activities with friends.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently organize enjoyable events for my group.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly scout new fun activities to share with friends.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly love gathering friends for exciting outings.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very active in organizing fun experiences for everyone.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always lead the charge in planning fun social adventures.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      43,
      53,
      55,
      57
    ],
    "opposing": [
      99,
      100
    ],
    "index": 41
  },
  {
    "text": "I bring positive energy to social gatherings.",
    "trait": "extraversion",
    "weight": 1,
    "aspect": "Enthusiasm",
    "subtext": {
      "0-10": {
        "text": "I rarely contribute energy at social events.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally join in but stay mostly low-key.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes add a little positivity to gatherings.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "30-40": {
        "text": "I moderately share good vibes at events.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often lift the mood at social gatherings.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently bring upbeat energy wherever I go.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly boost gatherings with lively positivity.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly energize any room I walk into.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very known for bringing contagious energy.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always ignite social events with boundless positive energy.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      40,
      44
    ],
    "opposing": [
      99,
      102,
      146
    ],
    "index": 42
  },
  {
    "text": "I organize social events to bring people together.",
    "trait": "extraversion",
    "weight": 1.2,
    "aspect": "Enthusiasm",
    "subtext": {
      "0-10": {
        "text": "I rarely plan social events for others.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally help plan gatherings but reluctantly.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes co-organize events if friends ask.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "30-40": {
        "text": "I moderately help arrange social meet-ups.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often take part in organizing get-togethers.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently coordinate social events for friends.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly take the lead in planning gatherings.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly enjoy bringing people together through events.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very proactive in organizing frequent social occasions.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always plan vibrant events that unite all my friends.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      41,
      57,
      145
    ],
    "opposing": [],
    "index": 43
  },
  {
    "text": "I radiate excitement and enthusiasm when telling stories.",
    "trait": "extraversion",
    "weight": 1,
    "aspect": "Enthusiasm",
    "subtext": {
      "0-10": {
        "text": "I rarely show excitement when I speak.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally sound animated but mostly stay flat-toned.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes speak with mild enthusiasm around friends.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "30-40": {
        "text": "I moderately liven up stories with some energy.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often tell stories with noticeable excitement.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently captivate listeners with enthusiastic storytelling.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly energize others through animated stories.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly thrill audiences with lively, enthusiastic stories.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very charismatic when sharing exciting tales.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always deliver stories with boundless excitement and passion.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      38,
      40,
      42,
      145
    ],
    "opposing": [],
    "index": 44
  },
  {
    "text": "I confidently lead group discussions.",
    "trait": "extraversion",
    "weight": 1.3,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I rarely take the lead in group discussions.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally speak up but avoid leading.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes guide discussions if needed.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "30-40": {
        "text": "I moderately step forward to lead small groups.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often direct group conversations.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently lead discussions with confidence.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly facilitate and steer group talks effectively.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly command discussions, keeping them focused and engaging.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very skilled at leading large, dynamic group debates.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always take confident charge of group discussions.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      47,
      58
    ],
    "opposing": [
      76,
      77,
      78,
      93,
      95
    ],
    "index": 45
  },
  {
    "text": "I voice my opinions even in challenging situations.",
    "trait": "extraversion",
    "weight": 1.1,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I rarely express my opinion in tough conversations.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally share my view but mostly stay silent.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes speak up when disagreement arises.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "30-40": {
        "text": "I moderately state my position in challenging talks.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often share my opinions even under pressure.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently voice my stance despite opposition.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly assert my viewpoint confidently in tough settings.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly articulate and defend my opinions under fire.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very forthright about my views in any debate.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always express my opinions boldly, no matter the challenge.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      59
    ],
    "opposing": [
      76,
      77,
      78,
      93,
      95
    ],
    "index": 46
  },
  {
    "text": "I take charge when decisions need to be made.",
    "trait": "extraversion",
    "weight": 1.2,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I rarely step up to make decisions.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally decide, but prefer others take the lead.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes take charge if no one else does.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "30-40": {
        "text": "I moderately step in to make clear decisions.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often assume responsibility for group choices.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently lead decision-making with confidence.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly take decisive action for my group.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly take charge swiftly when decisions arise.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very decisive, steering my team forward.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always take firm charge and make clear decisions promptly.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      45,
      52,
      58
    ],
    "opposing": [
      76,
      77,
      78,
      93,
      95
    ],
    "index": 47
  },
  {
    "text": "I enjoy persuading others of my ideas.",
    "trait": "extraversion",
    "weight": 1,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I rarely try to persuade people to my viewpoint.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally state my view but don’t push it.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes share arguments but let others decide.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "30-40": {
        "text": "I moderately persuade friends of my ideas.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often like convincing people of my views.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently enjoy persuading others enthusiastically.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly present arguments to sway opinions.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly excel at persuading others to adopt my ideas.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very persuasive and energetic when sharing my viewpoint.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always relish convincing audiences of my perspective.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      91
    ],
    "opposing": [
      71,
      76,
      77,
      89,
      93,
      95
    ],
    "index": 48
  },
  {
    "text": "I proactively set the agenda in meetings.",
    "trait": "extraversion",
    "weight": 1.1,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I rarely propose agendas in meetings.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally suggest topics but don’t drive the agenda.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes help set meeting topics when asked.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "30-40": {
        "text": "I moderately propose and guide agendas in small meetings.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often set the agenda for group meetings.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently lead with clear agendas in meetings.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly drive meeting structure and direction.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly establish and guide agendas for productive meetings.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very proactive in crafting and leading meeting agendas.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always set and steer agendas, keeping meetings on track.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      58,
      64
    ],
    "opposing": [
      76,
      77,
      78,
      93,
      95
    ],
    "index": 49
  },
  {
    "text": "I step forward to introduce myself to new people.",
    "trait": "extraversion",
    "weight": 1,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I rarely introduce myself first to strangers.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally introduce myself but prefer others start.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes introduce myself in friendly settings.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "30-40": {
        "text": "I moderately greet new people first in familiar contexts.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often take the initiative to introduce myself.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently step up to greet and introduce myself.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly introduce myself confidently to strangers.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly enjoy being the first to introduce myself.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very quick to introduce myself to anyone new.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always initiate introductions with confidence and ease.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      39
    ],
    "opposing": [
      76,
      77,
      78,
      93,
      95
    ],
    "index": 50
  },
  {
    "text": "I thrive when I am the center of attention while presenting.",
    "trait": "extraversion",
    "weight": 1.2,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I dislike being the center of attention during presentations.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally present but prefer not to stand out.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes present but feel uneasy in the spotlight.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "30-40": {
        "text": "I moderately handle being the focus while presenting.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often enjoy presenting to an audience.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently feel energized when presenting to groups.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly shine when I have everyone’s attention.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly thrive in the spotlight while presenting ideas.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very animated and confident at center stage.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always excel when I’m the vibrant focal point of a presentation.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      61
    ],
    "opposing": [
      76,
      77,
      78,
      93,
      95
    ],
    "index": 51
  },
  {
    "text": "I volunteer to speak on behalf of a group.",
    "trait": "extraversion",
    "weight": 1,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I rarely volunteer to speak for others.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally agree to speak if no one else will.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes step up to speak for the group.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "30-40": {
        "text": "I moderately volunteer to represent group views.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often offer to speak on behalf of friends or team.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently volunteer as spokesperson in meetings.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly step forward to speak for groups confidently.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly enjoy representing groups in public speaking.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very eager to be the spokesperson for any group I’m in.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always volunteer to speak confidently on behalf of the group.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      47,
      68
    ],
    "opposing": [
      71,
      76,
      77,
      78,
      89,
      93,
      95
    ],
    "index": 52
  },
  {
    "text": "I derive energy from being in large social gatherings.",
    "trait": "extraversion",
    "weight": 1.1,
    "aspect": "Enthusiasm",
    "subtext": {
      "0-10": {
        "text": "I prefer solitude over large groups.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally join a crowd, though with reservation.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes enjoy being with many people.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately enjoy social gatherings.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often feel energized in groups.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently seek out large social events.",
        "exclude": [
          "ISFJ"
        ]
      },
      "60-70": {
        "text": "I regularly thrive in large group settings.",
        "exclude": [
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly enjoy the energy of social gatherings.",
        "exclude": [
          "INTP",
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very enthusiastic about being in large groups.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always feel invigorated when surrounded by many people.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      37,
      41,
      55,
      57
    ],
    "opposing": [
      100
    ],
    "index": 53
  },
  {
    "text": "I consistently maintain a cheerful and optimistic outlook.",
    "trait": "extraversion",
    "weight": 1.2,
    "aspect": "Enthusiasm",
    "subtext": {
      "0-10": {
        "text": "I rarely feel cheerful or optimistic.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally experience brief moments of cheer.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes feel moderately positive.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately maintain a cheerful mood.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often feel optimistic.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently experience a positive outlook.",
        "exclude": [
          "ISFJ"
        ]
      },
      "60-70": {
        "text": "I regularly feel upbeat and cheerful.",
        "exclude": [
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I am highly energetic and optimistic.",
        "exclude": [
          "INTP",
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very consistently cheerful.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always maintain a highly positive and optimistic mood.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      56
    ],
    "opposing": [
      99,
      102,
      118,
      120
    ],
    "index": 54
  },
  {
    "text": "I readily form new friendships.",
    "trait": "extraversion",
    "weight": 1,
    "aspect": "Enthusiasm",
    "subtext": {
      "0-10": {
        "text": "I find it difficult to make new friends.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally make a new acquaintance.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes find it easy to connect with new people.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately establish new social contacts.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often make new friends without much difficulty.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently form new friendships easily.",
        "exclude": [
          "ISFJ"
        ]
      },
      "60-70": {
        "text": "I regularly connect with new people.",
        "exclude": [
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I am highly effective at making friends.",
        "exclude": [
          "INTP",
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very skilled at initiating friendships.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always find it remarkably easy to make new friends.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      41,
      53,
      57,
      63
    ],
    "opposing": [
      100,
      121,
      124,
      127
    ],
    "index": 55
  },
  {
    "text": "I consistently display warmth and friendliness.",
    "trait": "extraversion",
    "weight": 1.3,
    "aspect": "Enthusiasm",
    "subtext": {
      "0-10": {
        "text": "I am often perceived as cold or distant.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally appear friendly.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes show warmth in social settings.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately act in a warm, approachable manner.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often display friendliness towards others.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently exude warmth and approachability.",
        "exclude": [
          "ISFJ"
        ]
      },
      "60-70": {
        "text": "I regularly project a warm and friendly demeanor.",
        "exclude": [
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I am highly regarded for my warmth and friendliness.",
        "exclude": [
          "INTP",
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very consistently warm and affable.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I am always remarkably warm, friendly, and approachable.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      54
    ],
    "opposing": [
      99,
      102,
      118,
      120,
      146
    ],
    "index": 56
  },
  {
    "text": "I actively seek out and enjoy social events and parties.",
    "trait": "extraversion",
    "weight": 1,
    "aspect": "Enthusiasm",
    "subtext": {
      "0-10": {
        "text": "I generally avoid parties and social events.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally attend events out of necessity.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes enjoy attending parties.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately enjoy social gatherings.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often take pleasure in parties.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently attend and enjoy social events.",
        "exclude": [
          "ISFJ"
        ]
      },
      "60-70": {
        "text": "I regularly look forward to social gatherings.",
        "exclude": [
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly enjoy being at parties and gatherings.",
        "exclude": [
          "INTP",
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very enthusiastic about attending social events.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always eagerly anticipate and thoroughly enjoy parties and gatherings.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      37,
      41,
      43,
      53,
      55
    ],
    "opposing": [],
    "index": 57
  },
  {
    "text": "I frequently assume leadership roles in group settings.",
    "trait": "extraversion",
    "weight": 1.1,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I rarely take the lead in groups.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally contribute but seldom lead.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes take initiative in groups.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately assume leadership when needed.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often step up to lead group activities.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently take charge in group situations.",
        "exclude": [
          "ISFJ"
        ]
      },
      "60-70": {
        "text": "I regularly exhibit leadership in groups.",
        "exclude": [
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I strongly enjoy assuming leadership roles.",
        "exclude": [
          "INTP",
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very comfortable and effective as a leader.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always naturally take the lead and inspire others.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      45,
      47,
      49,
      59,
      64
    ],
    "opposing": [
      76,
      77,
      78,
      93,
      95
    ],
    "index": 58
  },
  {
    "text": "I confidently articulate my opinions.",
    "trait": "extraversion",
    "weight": 1.2,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I rarely express my opinions.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally share my views when prompted.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes express my opinions.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately share my opinions in conversation.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often speak my mind openly.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently voice my opinions with confidence.",
        "exclude": [
          "ISFJ"
        ]
      },
      "60-70": {
        "text": "I regularly express my views assertively.",
        "exclude": [
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I am highly comfortable and clear in expressing my opinions.",
        "exclude": [
          "INTP",
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very outspoken and direct.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always express my opinions in a confident and assertive manner.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      46,
      58,
      62
    ],
    "opposing": [
      76,
      77,
      89,
      93,
      95
    ],
    "index": 59
  },
  {
    "text": "I thrive on an active, energetic lifestyle.",
    "trait": "extraversion",
    "weight": 1,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I prefer a calm and sedentary lifestyle.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally engage in physical activities.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes enjoy being physically active.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately enjoy staying active.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often seek out active pursuits.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently maintain a high level of physical activity.",
        "exclude": [
          "ISFJ"
        ]
      },
      "60-70": {
        "text": "I regularly embrace an energetic and active lifestyle.",
        "exclude": [
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I am highly energetic and active.",
        "exclude": [
          "INTP",
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very enthusiastic about being active.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always feel my best when I am actively on the move.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [],
    "opposing": [],
    "index": 60
  },
  {
    "text": "I am comfortable being the focal point in social situations.",
    "trait": "extraversion",
    "weight": 0.9,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I strongly dislike being the center of attention.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally find myself in the spotlight, but with discomfort.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes don’t mind being noticed.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately tolerate being the center of attention.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often feel at ease when I am noticed.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently feel comfortable in the spotlight.",
        "exclude": [
          "ISFJ"
        ]
      },
      "60-70": {
        "text": "I regularly enjoy being the focus of attention.",
        "exclude": [
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly appreciate being in the center of attention.",
        "exclude": [
          "INTP",
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very comfortable and relish being noticed.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always enjoy and seek out being the center of attention.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      51,
      64
    ],
    "opposing": [
      76,
      77,
      78,
      93,
      95
    ],
    "index": 61
  },
  {
    "text": "I assert my rights and stand up for myself.",
    "trait": "extraversion",
    "weight": 1.3,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I rarely stand up for myself.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally try to be assertive.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes assert myself when needed.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately stand up for my beliefs.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often assert myself in situations.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently stand up for my rights and opinions.",
        "exclude": [
          "ISFJ"
        ]
      },
      "60-70": {
        "text": "I regularly act assertively in challenging situations.",
        "exclude": [
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I am highly assertive and confident in standing up for myself.",
        "exclude": [
          "INTP",
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very assertive and direct in my communication.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always act with unwavering assertiveness and confidence.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      46,
      59
    ],
    "opposing": [
      71,
      76,
      77,
      78,
      89,
      93,
      95,
      111
    ],
    "index": 62
  },
  {
    "text": "I gain energy from connecting with new people and forming relationships.",
    "trait": "extraversion",
    "weight": 1.1,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I rarely feel energized by meeting new people.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally enjoy meeting someone new.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes feel upbeat after social interactions.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately enjoy building new connections.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often feel energized by engaging with others.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently derive energy from making new connections.",
        "exclude": [
          "ISFJ"
        ]
      },
      "60-70": {
        "text": "I regularly feel invigorated by engaging with new people.",
        "exclude": [
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I strongly enjoy and actively seek new social connections.",
        "exclude": [
          "INTP",
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am highly energized by forming new relationships.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always feel deeply invigorated by engaging with new people.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      55
    ],
    "opposing": [],
    "index": 63
  },
  {
    "text": "I take charge in group settings and show leadership confidence.",
    "trait": "extraversion",
    "weight": 1,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I rarely take charge in groups.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally take charge but prefer to follow.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes feel comfortable taking charge.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately assume leadership when necessary.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often take charge in group settings.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently lead groups with confidence.",
        "exclude": [
          "ISFJ"
        ]
      },
      "60-70": {
        "text": "I regularly feel confident when taking charge.",
        "exclude": [
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I strongly embrace leadership roles in group settings.",
        "exclude": [
          "INTP",
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am highly confident and effective in leadership roles.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always thrive as a natural leader in any group setting.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      49,
      58,
      61
    ],
    "opposing": [
      76,
      77,
      78,
      93,
      95
    ],
    "index": 64
  },
  {
    "text": "I love engaging in discussions on various ideas.",
    "trait": "extraversion",
    "weight": 0.9,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I rarely enjoy discussing ideas with others.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally engage in discussions, but avoid discussions.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes share my ideas in discussions.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately enjoy debating and discussing ideas.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often engage in discussions with others.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently relish sharing ideas and debating topics.",
        "exclude": [
          "ISFJ"
        ]
      },
      "60-70": {
        "text": "I regularly participate in lively discussions about ideas.",
        "exclude": [
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I strongly enjoy and seek out intellectual discussions.",
        "exclude": [
          "INTP",
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am highly energized by discussing and debating ideas.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always thrive on in-depth discussions and discussions about ideas.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      1
    ],
    "opposing": [],
    "index": 65
  },
  {
    "text": "I remain composed and assertive when addressing challenges.",
    "trait": "extraversion",
    "weight": 1.3,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I rarely stay calm in problem situations.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally manage to remain calm.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes stay composed under pressure.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately remain calm and assertive in problems.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often stay calm when solving problems.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently remain composed under stress.",
        "exclude": [
          "ISFJ"
        ]
      },
      "60-70": {
        "text": "I regularly solve problems while staying calm and assertive.",
        "exclude": [
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I strongly maintain composure and assertiveness in challenges.",
        "exclude": [
          "INTP",
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am highly calm and assertive when addressing issues.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always remain remarkably calm, composed, and assertive in all challenges.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      23,
      59
    ],
    "opposing": [
      101,
      109,
      111,
      112,
      114,
      118,
      146
    ],
    "index": 66
  },
  {
    "text": "I am recognized for my bold and independent problem-solving approach.",
    "trait": "extraversion",
    "weight": 1,
    "aspect": "Assertiveness",
    "subtext": {
      "0-10": {
        "text": "I rarely act independently or boldly.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "10-20": {
        "text": "I occasionally act independently, but rarely boldly.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "20-30": {
        "text": "I sometimes approach problems with independence.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ISTP",
          "INTJ",
          "ENTJ",
          "ESTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "30-40": {
        "text": "I moderately demonstrate bold, independent thinking.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often take an independent and bold approach.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently solve problems in a bold and independent manner.",
        "exclude": [
          "ISFJ"
        ]
      },
      "60-70": {
        "text": "I regularly take independent and daring approaches to challenges.",
        "exclude": [
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I strongly exhibit boldness and independence in problem-solving.",
        "exclude": [
          "INTP",
          "ISTJ",
          "ISFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am highly recognized for my bold, independent methods.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always act boldly and independently when facing challenges.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      153
    ],
    "opposing": [
      89,
      93,
      95
    ],
    "index": 67
  },
  {
    "text": "I go out of my way to help others, even when it’s inconvenient for me.",
    "trait": "agreeableness",
    "weight": 1.2,
    "aspect": "Compassion",
    "subtext": {
      "0-10": {
        "text": "I rarely go out of my way to help others, especially if it costs me time or effort.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally lend a hand, but only when it’s easy for me.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes help, provided it doesn’t inconvenience me too much.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately offer help, even if it requires a bit of effort.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "40-50": {
        "text": "I fairly often help others, even when it isn’t the easiest option.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently help people even when it’s inconvenient for me.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly put others’ needs first, despite personal inconvenience.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP"
        ]
      },
      "70-80": {
        "text": "I highly prioritize helping others, even when it demands real sacrifice.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "80-90": {
        "text": "I am very committed to helping anyone in need, regardless of the inconvenience.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "90-100": {
        "text": "I always go well out of my way to help others, no matter how inconvenient it is for me.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      }
    },
    "overlapping": [
      52,
      70
    ],
    "opposing": [
      107,
      110,
      115,
      118
    ],
    "index": 68
  },
  {
    "text": "I quickly notice when someone is upset and offer support.",
    "trait": "agreeableness",
    "weight": 1.1,
    "aspect": "Compassion",
    "subtext": {
      "0-10": {
        "text": "I rarely notice when someone is upset.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally realize someone is upset but seldom offer help.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes notice others’ distress and may give brief support.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately pick up on others’ moods and try to help.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "40-50": {
        "text": "I fairly often spot when people are upset and offer some comfort.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently sense distress quickly and lend genuine support.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly read emotional cues and step in with help.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP"
        ]
      },
      "70-80": {
        "text": "I highly attune to others’ feelings and actively support them.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "80-90": {
        "text": "I am very responsive to emotional distress, providing strong reassurance.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "90-100": {
        "text": "I always notice even subtle distress and offer unwavering support immediately.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      }
    },
    "overlapping": [
      96,
      97
    ],
    "opposing": [
      107,
      110,
      115,
      118
    ],
    "index": 69
  },
  {
    "text": "I feel genuine joy when I can make someone’s day easier.",
    "trait": "agreeableness",
    "weight": 1,
    "aspect": "Compassion",
    "subtext": {
      "0-10": {
        "text": "I seldom feel pleasure from helping others.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally feel a mild satisfaction from assisting others.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes enjoy helping others when it’s convenient.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately enjoy making things easier for people.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "40-50": {
        "text": "I fairly often feel good when I help someone out.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently experience joy from easing others’ burdens.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly take pleasure in improving others’ day, even in small ways.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP"
        ]
      },
      "70-80": {
        "text": "I highly value the happiness I create for others.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "80-90": {
        "text": "I am very fulfilled by making life easier for those around me.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "90-100": {
        "text": "I always find deep joy in lifting others’ burdens, regardless of effort.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      }
    },
    "overlapping": [
      68,
      71,
      85
    ],
    "opposing": [
      35,
      45,
      48
    ],
    "index": 70
  },
  {
    "text": "I readily forgive people and give them second chances.",
    "trait": "agreeableness",
    "weight": 1,
    "aspect": "Compassion",
    "subtext": {
      "0-10": {
        "text": "I rarely forgive others once they’ve wronged me.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally forgive, but it’s difficult for me.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes forgive people after some time has passed.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately tend to give people another chance.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "40-50": {
        "text": "I fairly often forgive others and move forward.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently let go of grudges and allow second chances.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly forgive quickly and help others learn from mistakes.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP"
        ]
      },
      "70-80": {
        "text": "I highly believe in forgiving and supporting personal growth.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "80-90": {
        "text": "I am very committed to offering forgiveness and fresh starts.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "90-100": {
        "text": "I always forgive readily and extend sincere second chances.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      }
    },
    "overlapping": [
      70,
      80,
      86
    ],
    "opposing": [
      48
    ],
    "index": 71
  },
  {
    "text": "I stand up for others who are treated unfairly, even if it costs me time or energy.",
    "trait": "agreeableness",
    "weight": 1.3,
    "aspect": "Compassion",
    "subtext": {
      "0-10": {
        "text": "I seldom defend others when they’re treated unfairly.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally speak up for others but usually stay out of it.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes defend people, though I might hesitate.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately speak up when I see unfair treatment.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "40-50": {
        "text": "I fairly often defend others against unfairness.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently take action to protect those treated unjustly.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly intervene on behalf of others, even at personal cost.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP"
        ]
      },
      "70-80": {
        "text": "I highly commit my time and energy to defending fairness for all.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "80-90": {
        "text": "I am very proactive in standing up for anyone facing injustice.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "90-100": {
        "text": "I always step in firmly and selflessly when I witness unfair treatment.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      }
    },
    "overlapping": [],
    "opposing": [],
    "index": 72
  },
  {
    "text": "I enjoy mentoring or teaching others so they can succeed.",
    "trait": "agreeableness",
    "weight": 1.1,
    "aspect": "Compassion",
    "subtext": {
      "0-10": {
        "text": "I rarely spend time mentoring or teaching others.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally share advice but don’t mentor often.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes help others learn when asked.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately guide others toward success.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "40-50": {
        "text": "I fairly often mentor or teach when the opportunity arises.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently enjoy helping others grow and succeed.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly seek chances to mentor or teach people.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP"
        ]
      },
      "70-80": {
        "text": "I highly value investing my time in mentoring others.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "80-90": {
        "text": "I am very dedicated to teaching and mentoring for others’ success.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "90-100": {
        "text": "I always commit significant effort to mentor people and ensure their success.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      }
    },
    "overlapping": [],
    "opposing": [],
    "index": 73
  },
  {
    "text": "I feel responsible for the well-being of my community.",
    "trait": "agreeableness",
    "weight": 1,
    "aspect": "Compassion",
    "subtext": {
      "0-10": {
        "text": "I seldom feel responsible for my community’s well-being.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally think about my community but rarely act on it.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes feel some responsibility toward my community.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately care about my community’s welfare.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "40-50": {
        "text": "I fairly often engage in community well-being efforts.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently take part in activities that benefit my community.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly feel accountable for the happiness of those around me.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP"
        ]
      },
      "70-80": {
        "text": "I highly invest time and energy in community well-being.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "80-90": {
        "text": "I am very proactive in fostering a healthy and supportive community.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "90-100": {
        "text": "I always champion initiatives that improve the quality of life for everyone in my community.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      }
    },
    "overlapping": [
      98
    ],
    "opposing": [],
    "index": 74
  },
  {
    "text": "I share credit generously when a group project succeeds.",
    "trait": "agreeableness",
    "weight": 1,
    "aspect": "Compassion",
    "subtext": {
      "0-10": {
        "text": "I rarely share credit with others when things go well.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally acknowledge others, but mostly highlight my own role.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes share credit but still focus on my contribution.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately recognize my teammates when we succeed.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "40-50": {
        "text": "I fairly often ensure teammates get recognition for success.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently give generous credit to others for group wins.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly highlight everyone’s contributions to our success.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP"
        ]
      },
      "70-80": {
        "text": "I highly emphasize the group’s effort over my own achievements.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "80-90": {
        "text": "I am very committed to celebrating others’ contributions first.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "90-100": {
        "text": "I always defer praise to my teammates and spotlight their work.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      }
    },
    "overlapping": [
      90
    ],
    "opposing": [],
    "index": 75
  },
  {
    "text": "I address disagreements calmly and respectfully.",
    "trait": "agreeableness",
    "weight": 1.2,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I rarely stay calm or respectful in disagreements.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally maintain respect, but often get heated.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes keep a respectful tone during disagreements.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately stay calm and respectful when disagreeing.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "40-50": {
        "text": "I fairly often handle disagreements politely.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently remain respectful and calm during conflicts.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly defuse disagreements with calm respect.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP"
        ]
      },
      "70-80": {
        "text": "I highly maintain composure and courtesy even in tough debates.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "80-90": {
        "text": "I am very skilled at staying calm and respectful under fire.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "90-100": {
        "text": "I always keep a calm, respectful tone even in intense conflict.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      }
    },
    "overlapping": [
      77,
      78,
      82
    ],
    "opposing": [
      45,
      46,
      47,
      48,
      50,
      51,
      52
    ],
    "index": 76
  },
  {
    "text": "I mediate conflicts to find solutions that everyone can accept.",
    "trait": "agreeableness",
    "weight": 1.3,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I seldom intervene to resolve conflicts.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally try to help, but usually avoid mediating.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes help find compromises in conflicts.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately help conflicting parties reach agreement.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "40-50": {
        "text": "I fairly often step in to mediate and find fair solutions.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently mediate conflicts so everyone feels heard.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly facilitate agreements that satisfy all sides.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP"
        ]
      },
      "70-80": {
        "text": "I highly excel at guiding conflicts toward mutually acceptable solutions.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "80-90": {
        "text": "I am very effective at conflict mediation, ensuring fair outcomes for all.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "90-100": {
        "text": "I always step up to mediate and secure solutions everyone can accept.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      }
    },
    "overlapping": [
      76,
      78,
      83,
      93,
      143
    ],
    "opposing": [
      45,
      46,
      47,
      48,
      50,
      51,
      52
    ],
    "index": 77
  },
  {
    "text": "I remain courteous and constructive even when I’m under pressure or criticism.",
    "trait": "agreeableness",
    "weight": 1.1,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I rarely stay courteous when pressured or criticized.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally lose courtesy under criticism.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes remain polite when under pressure.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately keep a constructive tone under stress.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "40-50": {
        "text": "I fairly often stay polite despite criticism.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently remain courteous and constructive under fire.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly handle criticism with grace and courtesy.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP"
        ]
      },
      "70-80": {
        "text": "I highly sustain politeness and constructive feedback even under pressure.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "80-90": {
        "text": "I am very adept at staying calm, courteous, and constructive amid criticism.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "90-100": {
        "text": "I always maintain courtesy and constructive focus under intense criticism or pressure.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      }
    },
    "overlapping": [
      76,
      77,
      81,
      82
    ],
    "opposing": [
      45,
      46,
      47,
      48,
      50,
      51,
      52
    ],
    "index": 78
  },
  {
    "text": "I value other people’s viewpoints and make sure they’re included in decisions.",
    "trait": "agreeableness",
    "weight": 1,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I rarely consider other people’s viewpoints in decisions.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally seek others’ views, but mostly decide myself.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes take other perspectives into account.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately include others’ viewpoints when making decisions.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "40-50": {
        "text": "I fairly often ensure everyone’s opinions are heard.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently value and include diverse perspectives.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly solicit and integrate others’ viewpoints.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP"
        ]
      },
      "70-80": {
        "text": "I highly make sure that all voices influence group choices.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "80-90": {
        "text": "I am very committed to inclusive decision-making.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "90-100": {
        "text": "I always ensure decisions reflect every stakeholder’s viewpoint.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      }
    },
    "overlapping": [
      83
    ],
    "opposing": [],
    "index": 79
  },
  {
    "text": "I keep promises and honor commitments to maintain trust in my relationships.",
    "trait": "agreeableness",
    "weight": 1.1,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I rarely follow through on promises or commitments.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally forget or break commitments.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes fail to keep every promise.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately keep most of my commitments.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "40-50": {
        "text": "I fairly often follow through on promises.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently keep commitments to maintain trust.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly honor every commitment I make.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP"
        ]
      },
      "70-80": {
        "text": "I highly ensure promises are fulfilled to sustain trust.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "80-90": {
        "text": "I am very diligent about keeping all promises and commitments.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "90-100": {
        "text": "I always honor every promise and safeguard trust uncompromisingly.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      }
    },
    "overlapping": [
      34,
      71,
      91
    ],
    "opposing": [],
    "index": 80
  },
  {
    "text": "I give constructive feedback without belittling anyone.",
    "trait": "agreeableness",
    "weight": 1,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I rarely give feedback without sounding harsh.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally try to be constructive but often sound critical.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes manage to give helpful feedback without offense.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately phrase feedback constructively.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "40-50": {
        "text": "I fairly often provide helpful feedback respectfully.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently give feedback that helps others improve without belittling.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly frame feedback constructively even on sensitive topics.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP"
        ]
      },
      "70-80": {
        "text": "I highly excel at giving clear, respectful, and helpful feedback.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "80-90": {
        "text": "I am very adept at offering insightful feedback that motivates without offending.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "90-100": {
        "text": "I always deliver feedback in a way that guides growth while preserving respect.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      }
    },
    "overlapping": [
      78,
      82,
      96
    ],
    "opposing": [
      119
    ],
    "index": 81
  },
  {
    "text": "I speak to others in a considerate tone, even when we disagree.",
    "trait": "agreeableness",
    "weight": 1,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I rarely use a considerate tone when disagreeing.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally sound considerate but often slip into harshness.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes manage a respectful tone in disagreements.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately stay considerate when expressing opposing views.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "40-50": {
        "text": "I fairly often use a considerate tone even when we disagree.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently remain courteous and considerate in disagreements.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly maintain a respectful tone even in heated debates.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP"
        ]
      },
      "70-80": {
        "text": "I highly ensure my tone stays considerate, even under pressure.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "80-90": {
        "text": "I am very consistent in keeping a respectful tone in all disagreements.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "90-100": {
        "text": "I always speak with unwavering consideration and respect in every disagreement.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      }
    },
    "overlapping": [
      76,
      78,
      81,
      96
    ],
    "opposing": [
      119
    ],
    "index": 82
  },
  {
    "text": "I guide group discussions so everyone has a chance to be heard.",
    "trait": "agreeableness",
    "weight": 1.2,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I rarely try to ensure everyone speaks during group discussions.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally encourage quieter members, but not consistently.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes help others get a say in discussions.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately guide discussions to include everyone’s voice.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "40-50": {
        "text": "I fairly often ensure everyone has a chance to speak.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently guide discussions so all voices are heard.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly facilitate inclusive discussions.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP"
        ]
      },
      "70-80": {
        "text": "I highly ensure that group dynamics remain inclusive and balanced.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "80-90": {
        "text": "I am very committed to giving everyone equal voice in discussions.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "90-100": {
        "text": "I always actively guide groups so every member is fully heard and respected.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      }
    },
    "overlapping": [
      77,
      79,
      98
    ],
    "opposing": [],
    "index": 83
  },
  {
    "text": "I deeply empathize with those who are less fortunate.",
    "trait": "agreeableness",
    "weight": 1.2,
    "aspect": "Compassion",
    "subtext": {
      "0-10": {
        "text": "I rarely feel empathy for others.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally feel a tinge of sympathy.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes feel concerned for those in need.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately feel empathy towards others' struggles.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often empathize with those less fortunate.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently feel compassion for people in need.",
        "exclude": [
          "INTP",
          "INTJ"
        ]
      },
      "60-70": {
        "text": "I regularly experience deep empathy for others.",
        "exclude": [
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I am highly attuned to the suffering of others.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "80-90": {
        "text": "I am very empathetic towards those who struggle.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always feel profound empathy for those less fortunate.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      85,
      86
    ],
    "opposing": [
      35
    ],
    "index": 84
  },
  {
    "text": "I derive satisfaction from assisting others.",
    "trait": "agreeableness",
    "weight": 1.3,
    "aspect": "Compassion",
    "subtext": {
      "0-10": {
        "text": "I rarely go out of my way to help others.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally lend a helping hand if convenient.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes enjoy helping those around me.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately take pleasure in assisting others.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often offer help to those in need.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently derive satisfaction from helping others.",
        "exclude": [
          "INTP",
          "INTJ"
        ]
      },
      "60-70": {
        "text": "I regularly look for opportunities to assist people.",
        "exclude": [
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly enjoy being helpful and supportive.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "80-90": {
        "text": "I am very willing to help others.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always eagerly seek out ways to assist those around me.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      70,
      84,
      86
    ],
    "opposing": [
      35
    ],
    "index": 85
  },
  {
    "text": "I generally extend trust towards others.",
    "trait": "agreeableness",
    "weight": 1,
    "aspect": "Compassion",
    "subtext": {
      "0-10": {
        "text": "I am usually suspicious of people.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally trust someone after getting to know them.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes tend to trust people readily.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately give others the benefit of the doubt.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often trust people until proven otherwise.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently extend trust to those around me.",
        "exclude": [
          "INTP",
          "INTJ"
        ]
      },
      "60-70": {
        "text": "I regularly trust people in general.",
        "exclude": [
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly tend to trust others.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "80-90": {
        "text": "I am very trusting by nature.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always naturally trust other people.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      71,
      84,
      85
    ],
    "opposing": [],
    "index": 86
  },
  {
    "text": "I actively care about the welfare of others.",
    "trait": "agreeableness",
    "weight": 1.1,
    "aspect": "Compassion",
    "subtext": {
      "0-10": {
        "text": "I rarely concern myself with the well-being of others.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally notice how others are doing.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes show interest in others’ welfare.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately care about the well-being of people.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often consider the welfare of those around me.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently pay attention to others’ well-being.",
        "exclude": [
          "INTP",
          "INTJ"
        ]
      },
      "60-70": {
        "text": "I regularly show care for people’s welfare.",
        "exclude": [
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly prioritize the well-being of others.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "80-90": {
        "text": "I am very concerned about the welfare of those around me.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always actively care for and prioritize others’ well-being.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      69,
      96,
      97
    ],
    "opposing": [],
    "index": 87
  },
  {
    "text": "I strive to treat everyone with kindness.",
    "trait": "agreeableness",
    "weight": 1,
    "aspect": "Compassion",
    "subtext": {
      "0-10": {
        "text": "I am not always kind in my interactions.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally try to be polite.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes make an effort to be kind.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately try to be kind to people.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often strive to be kind in my interactions.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently make an effort to treat everyone kindly.",
        "exclude": [
          "INTP",
          "INTJ"
        ]
      },
      "60-70": {
        "text": "I regularly seek to be kind and considerate.",
        "exclude": [
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly value treating everyone with kindness.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "80-90": {
        "text": "I am very intentional about being kind to everyone.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always strive to treat everyone with unwavering kindness.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [],
    "opposing": [],
    "index": 88
  },
  {
    "text": "I refrain from imposing my preferences on others.",
    "trait": "agreeableness",
    "weight": 1.1,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I often try to get my way.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally attempt to influence others.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes try to persuade others to my viewpoint.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately avoid imposing my will on others.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often allow others to make their own choices.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently refrain from forcing my preferences on others.",
        "exclude": [
          "INTP",
          "INTJ"
        ]
      },
      "60-70": {
        "text": "I regularly respect others’ autonomy.",
        "exclude": [
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly value letting others decide for themselves.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "80-90": {
        "text": "I am very careful not to impose my will.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always completely refrain from imposing my will on others.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      90,
      93
    ],
    "opposing": [
      48
    ],
    "index": 89
  },
  {
    "text": "I exhibit modesty regarding my accomplishments.",
    "trait": "agreeableness",
    "weight": 1,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I often boast about my achievements.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally mention my successes.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes talk about my achievements.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately downplay my accomplishments.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often present myself modestly.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently refrain from bragging about my successes.",
        "exclude": [
          "INTP",
          "INTJ"
        ]
      },
      "60-70": {
        "text": "I regularly maintain a humble attitude about my achievements.",
        "exclude": [
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly value humility regarding what I accomplish.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "80-90": {
        "text": "I am very modest about my achievements.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always remain extremely modest and humble about my accomplishments.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      89,
      91
    ],
    "opposing": [
      10
    ],
    "index": 90
  },
  {
    "text": "I consistently communicate in an honest and direct manner.",
    "trait": "agreeableness",
    "weight": 1.2,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I am not always straightforward.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally speak directly.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes attempt to be honest in my communication.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately strive to be straightforward.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often express myself directly and honestly.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently communicate in a frank manner.",
        "exclude": [
          "INTP",
          "INTJ"
        ]
      },
      "60-70": {
        "text": "I regularly speak in a clear and honest way.",
        "exclude": [
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly value clear and honest communication.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "80-90": {
        "text": "I am very committed to speaking straightforwardly.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always communicate in an unwaveringly honest and direct manner.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      48,
      80,
      90
    ],
    "opposing": [],
    "index": 91
  },
  {
    "text": "I reliably demonstrate respect for authority figures.",
    "trait": "agreeableness",
    "weight": 1,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I often question authority.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally show respect for authority.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes acknowledge authority figures.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately respect authority.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often show deference to authority figures.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently respect and follow authority.",
        "exclude": [
          "INTP",
          "INTJ"
        ]
      },
      "60-70": {
        "text": "I regularly honor the guidance of authority figures.",
        "exclude": [
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly value respect for authority.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "80-90": {
        "text": "I am very respectful of those in authority.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always show profound respect for authority.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      18,
      29
    ],
    "opposing": [
      148
    ],
    "index": 92
  },
  {
    "text": "I typically steer clear of confrontational interactions.",
    "trait": "agreeableness",
    "weight": 1.1,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I often engage in confrontations.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally stand my ground in disagreements.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes try to avoid arguments.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately try to avoid confrontations.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often attempt to diffuse conflicts.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently avoid getting into confrontational situations.",
        "exclude": [
          "INTP",
          "INTJ"
        ]
      },
      "60-70": {
        "text": "I regularly seek peaceful resolutions in conflicts.",
        "exclude": [
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly value harmony and avoid confrontations.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "80-90": {
        "text": "I am very averse to confrontation.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always strive to completely avoid any form of confrontation.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      77,
      89
    ],
    "opposing": [
      1,
      45,
      46,
      47,
      48
    ],
    "index": 93
  },
  {
    "text": "I take pleasure in supporting my friends and contributing to their success.",
    "trait": "agreeableness",
    "weight": 1.1,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I rarely enjoy helping my friends.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally support friends when needed.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes lend support to my friends.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately enjoy supporting my friends.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often take time to help my friends succeed.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently enjoy being supportive of my friends.",
        "exclude": [
          "INTP",
          "INTJ"
        ]
      },
      "60-70": {
        "text": "I regularly prioritize supporting my friends.",
        "exclude": [
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I strongly enjoy and actively support my friends.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "80-90": {
        "text": "I am highly focused on helping my friends succeed.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always make it a priority to support and celebrate my friends’ successes.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [],
    "opposing": [],
    "index": 94
  },
  {
    "text": "I consistently prioritize harmony and avoid relational conflicts.",
    "trait": "agreeableness",
    "weight": 1,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I rarely prioritize harmony and may engage in conflicts.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally try to avoid conflict, but not consistently.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes make an effort to maintain harmony.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately strive to avoid conflict in relationships.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often prioritize harmony over conflict.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently avoid conflict to maintain harmony.",
        "exclude": [
          "INTP",
          "INTJ"
        ]
      },
      "60-70": {
        "text": "I regularly take steps to keep my relationships harmonious.",
        "exclude": [
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly value and actively preserve harmony in my relationships.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "80-90": {
        "text": "I am very committed to avoiding conflict.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always prioritize harmony and work tirelessly to prevent conflicts.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      77,
      143
    ],
    "opposing": [
      45,
      46,
      47,
      48
    ],
    "index": 95
  },
  {
    "text": "I endeavor to be understanding and supportive in my interactions.",
    "trait": "agreeableness",
    "weight": 1.2,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I rarely make an effort to understand others.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally try to be supportive.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes attempt to understand and support others.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately strive to be understanding.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often make an effort to support others.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently endeavor to understand and support those around me.",
        "exclude": [
          "INTP",
          "INTJ"
        ]
      },
      "60-70": {
        "text": "I regularly seek to be empathetic and supportive.",
        "exclude": [
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I strongly strive to be understanding and supportive.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "80-90": {
        "text": "I am highly dedicated to being empathetic and supportive.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always prioritize being deeply understanding and supportive.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      69,
      81,
      82,
      87,
      97
    ],
    "opposing": [],
    "index": 96
  },
  {
    "text": "I am attuned to others' feelings and actively seek to meet their needs.",
    "trait": "agreeableness",
    "weight": 1,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I rarely notice others’ feelings.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally become aware of others’ emotions.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes try to be responsive to others’ feelings.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately notice and respond to others’ emotions.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often make an effort to meet others’ emotional needs.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently pay attention to and act on others’ feelings.",
        "exclude": [
          "INTP",
          "INTJ"
        ]
      },
      "60-70": {
        "text": "I regularly strive to be sensitive and responsive.",
        "exclude": [
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I strongly focus on understanding and meeting others’ needs.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "80-90": {
        "text": "I am highly aware of others’ emotions and respond accordingly.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always make it a top priority to be sensitive and responsive to others.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      69,
      87,
      96
    ],
    "opposing": [],
    "index": 97
  },
  {
    "text": "I value teamwork and cooperative collaboration.",
    "trait": "agreeableness",
    "weight": 0.9,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I rarely enjoy working as part of a team.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally work in teams.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes prefer team settings.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately appreciate cooperative work.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often value working in teams.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently prefer collaboration and teamwork.",
        "exclude": [
          "INTP",
          "INTJ"
        ]
      },
      "60-70": {
        "text": "I regularly thrive in cooperative environments.",
        "exclude": [
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly prioritize team cooperation.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "80-90": {
        "text": "I am very inclined to work as part of a team.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always actively seek out collaborative, team-based work.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      74,
      83,
      143
    ],
    "opposing": [],
    "index": 98
  },
  {
    "text": "I worry that something might go wrong, even when things seem fine.",
    "trait": "neuroticism",
    "weight": 1.2,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I almost never worry about things going wrong.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "10-20": {
        "text": "I rarely worry unless there’s a clear problem.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes worry, but it soon passes.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "30-40": {
        "text": "I moderately worry about possible problems.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "40-50": {
        "text": "I fairly often feel some worry about future issues.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently catch myself worrying about what might go wrong.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly worry about potential problems in everyday life.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly worry that things could go wrong at any moment.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "80-90": {
        "text": "I am very prone to worrying, even without clear reasons.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "90-100": {
        "text": "I always feel worried that something bad might happen.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [
      100,
      103,
      104,
      105,
      119,
      129
    ],
    "opposing": [
      37,
      38,
      40
    ],
    "index": 99
  },
  {
    "text": "I feel uneasy in unfamiliar situations.",
    "trait": "neuroticism",
    "weight": 1,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I almost never feel uneasy in new situations.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "10-20": {
        "text": "I rarely feel uneasy when things are unfamiliar.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes feel a little uneasy in new settings.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "30-40": {
        "text": "I moderately feel uneasy until I adjust.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "40-50": {
        "text": "I fairly often feel uneasy when faced with unfamiliarity.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently feel tense in new environments.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly feel uneasy in unfamiliar situations.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly feel nervous whenever things are unfamiliar.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "80-90": {
        "text": "I am very uneasy and tense in new settings.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "90-100": {
        "text": "I always feel distinctly uneasy in any unfamiliar situation.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [
      99,
      103,
      121,
      124,
      126,
      127
    ],
    "opposing": [
      37,
      39,
      41
    ],
    "index": 100
  },
  {
    "text": "I get overwhelmed by stress easily.",
    "trait": "neuroticism",
    "weight": 1.1,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I almost never get overwhelmed by stress.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "10-20": {
        "text": "I rarely feel overwhelmed when stressed.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes feel overwhelmed under heavy stress.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "30-40": {
        "text": "I moderately feel overwhelmed by stressful events.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "40-50": {
        "text": "I fairly often feel overwhelmed when stress builds.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently feel overwhelmed by stressful tasks.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly feel overwhelmed even by moderate stress.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly feel overwhelmed quickly in stressful times.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "80-90": {
        "text": "I am very easily overwhelmed by stress.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "90-100": {
        "text": "I always feel overwhelmed as soon as stress appears.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [
      117,
      122,
      125
    ],
    "opposing": [
      23
    ],
    "index": 101
  },
  {
    "text": "I dwell on negative thoughts for a long time.",
    "trait": "neuroticism",
    "weight": 1,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I almost never dwell on negative thoughts.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "10-20": {
        "text": "I rarely stay focused on negative thoughts.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes catch myself thinking negatively, but let it go.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "30-40": {
        "text": "I moderately dwell on negative ideas.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "40-50": {
        "text": "I fairly often dwell on negative thoughts.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently get stuck on negative thoughts.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly dwell on negativity for extended periods.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly dwell on negative thoughts a long time.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "80-90": {
        "text": "I am very prone to prolonged negative rumination.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "90-100": {
        "text": "I always dwell on negative thoughts for a very long time.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [
      106,
      120,
      128
    ],
    "opposing": [
      38,
      40
    ],
    "index": 102
  },
  {
    "text": "I struggle to relax when faced with uncertainty.",
    "trait": "neuroticism",
    "weight": 1,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I almost never struggle to relax if things are uncertain.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "10-20": {
        "text": "I rarely feel tense about uncertainty.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes feel tense until uncertainty clears up.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "30-40": {
        "text": "I moderately struggle to relax amid uncertainty.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "40-50": {
        "text": "I fairly often feel uneasy when things are uncertain.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently struggle to relax during uncertain situations.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly feel tense and cannot relax with uncertainty.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly find it hard to relax whenever things are uncertain.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "80-90": {
        "text": "I am very tense and unable to relax under uncertainty.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "90-100": {
        "text": "I always struggle to relax whenever there is uncertainty.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [
      99,
      100,
      104,
      119,
      126,
      127,
      129
    ],
    "opposing": [],
    "index": 103
  },
  {
    "text": "I feel tense without a clear reason.",
    "trait": "neuroticism",
    "weight": 1,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I almost never feel tense for no reason.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "10-20": {
        "text": "I rarely experience unexplained tension.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes feel tense without knowing why.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "30-40": {
        "text": "I moderately experience tension for unclear reasons.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "40-50": {
        "text": "I fairly often feel tense even when nothing is wrong.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently feel unexplained tension and unease.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly feel tense without any obvious reason.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly experience tension for no clear reason.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "80-90": {
        "text": "I am very prone to feeling tense without cause.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "90-100": {
        "text": "I always feel tense even when no cause is apparent.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [
      99,
      103,
      119,
      129
    ],
    "opposing": [],
    "index": 104
  },
  {
    "text": "I anticipate problems even when everything is fine.",
    "trait": "neuroticism",
    "weight": 1.2,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I almost never anticipate problems if things are going well.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "10-20": {
        "text": "I rarely think of problems when all is fine.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes expect issues even in smooth times.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "30-40": {
        "text": "I moderately anticipate possible problems despite calmness.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "40-50": {
        "text": "I fairly often foresee potential problems even when things work.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently expect problems even when all is fine.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly anticipate issues even during calm times.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly worry about problems even when nothing is wrong.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "80-90": {
        "text": "I am very convinced problems will arise even when all is well.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "90-100": {
        "text": "I always expect problems, no matter how good things seem.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [
      99,
      106,
      128
    ],
    "opposing": [],
    "index": 105
  },
  {
    "text": "I reflect on past mistakes, replaying them in my mind.",
    "trait": "neuroticism",
    "weight": 1.1,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I almost never replay past mistakes in my head.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "10-20": {
        "text": "I rarely think about past mistakes.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes recall mistakes but move on.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "30-40": {
        "text": "I moderately think about past errors now and then.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "40-50": {
        "text": "I fairly often replay mistakes in my mind.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently reflect about past errors.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly dwell on past mistakes repeatedly.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly reflect on past missteps for a long time.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "80-90": {
        "text": "I am very prone to replaying past mistakes.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "90-100": {
        "text": "I always relive past mistakes in my thoughts.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [
      102,
      105,
      123,
      128
    ],
    "opposing": [],
    "index": 106
  },
  {
    "text": "I become irritated quickly when frustrated.",
    "trait": "neuroticism",
    "weight": 1.2,
    "aspect": "Volatility",
    "subtext": {
      "0-10": {
        "text": "I almost never feel irritated when frustrated.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "10-20": {
        "text": "I rarely get irritated quickly.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes get irritated but calm quickly.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "30-40": {
        "text": "I moderately feel irritation when frustrated.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "40-50": {
        "text": "I fairly often get irritated when things go wrong.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently become irritated quickly.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly snap into irritation under frustration.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly become irritated almost instantly.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "80-90": {
        "text": "I am very quickly irritated with little provocation.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "90-100": {
        "text": "I always become irritated almost immediately when frustrated.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [
      108,
      109,
      110,
      111,
      112,
      114,
      115,
      118
    ],
    "opposing": [
      68
    ],
    "index": 107
  },
  {
    "text": "My mood can change rapidly.",
    "trait": "neuroticism",
    "weight": 1.1,
    "aspect": "Volatility",
    "subtext": {
      "0-10": {
        "text": "I almost never experience rapid mood changes.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "10-20": {
        "text": "I rarely have sudden mood shifts.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes experience quick mood swings.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "30-40": {
        "text": "I moderately notice my mood changes rapidly.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "40-50": {
        "text": "I fairly often have moods that change quickly.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently experience rapid mood shifts.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly shift moods very quickly.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly have sudden mood changes day to day.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "80-90": {
        "text": "I am very prone to rapid, unpredictable mood swings.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "90-100": {
        "text": "I always experience moods that change suddenly.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [
      107,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      118,
      119
    ],
    "opposing": [
      38,
      40
    ],
    "index": 108
  },
  {
    "text": "I lash out when I'm under pressure.",
    "trait": "neuroticism",
    "weight": 1.3,
    "aspect": "Volatility",
    "subtext": {
      "0-10": {
        "text": "I almost never lash out under pressure.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "10-20": {
        "text": "I rarely lash out even when stressed.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes lash out but calm quickly.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "30-40": {
        "text": "I moderately lash out under heavy pressure.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "40-50": {
        "text": "I fairly often lash out when pressured.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently lash out when I feel stressed.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly lash out angrily when under pressure.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly lash out under even moderate pressure.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "80-90": {
        "text": "I am very prone to lashing out whenever I’m stressed.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "90-100": {
        "text": "I always lash out quickly when I’m under pressure.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [
      107,
      108,
      110,
      111,
      112,
      114,
      115,
      118
    ],
    "opposing": [
      66
    ],
    "index": 109
  },
  {
    "text": "Small annoyances can make me angry.",
    "trait": "neuroticism",
    "weight": 1,
    "aspect": "Volatility",
    "subtext": {
      "0-10": {
        "text": "I almost never get angry over small annoyances.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "10-20": {
        "text": "I rarely get angry at minor irritations.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes get annoyed but not angry.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "30-40": {
        "text": "I moderately get angry at small annoyances.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "40-50": {
        "text": "I fairly often get angry over little things.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently feel angry at small annoyances.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly become angry about minor irritations.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly get angry easily at minor issues.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "80-90": {
        "text": "I am very often angry at even small annoyances.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "90-100": {
        "text": "I always get angry over the smallest annoyances.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [
      107,
      108,
      109,
      111,
      112,
      114,
      115,
      118
    ],
    "opposing": [
      68
    ],
    "index": 110
  },
  {
    "text": "I struggle to keep my cool when criticized.",
    "trait": "neuroticism",
    "weight": 1.1,
    "aspect": "Volatility",
    "subtext": {
      "0-10": {
        "text": "I almost never lose my cool under criticism.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "10-20": {
        "text": "I rarely feel angry when criticized.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes feel upset but stay composed.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "30-40": {
        "text": "I moderately get upset when criticized.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "40-50": {
        "text": "I fairly often struggle to keep calm under criticism.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently lose my cool when criticized.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly feel angry and defensive when criticized.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly become upset quickly when criticized.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "80-90": {
        "text": "I am very prone to anger when I receive criticism.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "90-100": {
        "text": "I always struggle to stay calm whenever I feel criticized.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [
      107,
      108,
      109,
      110,
      112,
      114,
      115,
      118
    ],
    "opposing": [
      62,
      66
    ],
    "index": 111
  },
  {
    "text": "I raise my voice when things don’t go my way.",
    "trait": "neuroticism",
    "weight": 1,
    "aspect": "Volatility",
    "subtext": {
      "0-10": {
        "text": "I almost never raise my voice when upset.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "10-20": {
        "text": "I rarely raise my voice when frustrated.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes raise my voice when things go wrong.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "30-40": {
        "text": "I moderately raise my voice in frustration.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "40-50": {
        "text": "I fairly often raise my voice when upset.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently raise my voice if things don't go my way.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly raise my voice quickly in frustration.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly raise my voice when I'm upset or thwarted.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "80-90": {
        "text": "I am very quick to raise my voice when things go wrong.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "90-100": {
        "text": "I always raise my voice immediately when troubled.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [
      107,
      108,
      109,
      110,
      111,
      113,
      114,
      115,
      118
    ],
    "opposing": [
      66
    ],
    "index": 112
  },
  {
    "text": "I act impulsively when upset.",
    "trait": "neuroticism",
    "weight": 1.2,
    "aspect": "Volatility",
    "subtext": {
      "0-10": {
        "text": "I almost never act impulsively when upset.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "10-20": {
        "text": "I rarely act before thinking when I’m upset.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes act impulsively but catch myself.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "30-40": {
        "text": "I moderately act impulsively when emotions run high.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "40-50": {
        "text": "I fairly often act on impulse when upset.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently act impulsively due to emotions.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly act without thinking whenever I’m upset.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly engage in impulsive actions driven by emotion.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "80-90": {
        "text": "I am very prone to impulsive actions when upset.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "90-100": {
        "text": "I always act impulsively whenever I feel upset.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [
      108,
      112,
      116
    ],
    "opposing": [
      24,
      25
    ],
    "index": 113
  },
  {
    "text": "I find it hard to stop myself from snapping at others.",
    "trait": "neuroticism",
    "weight": 1,
    "aspect": "Volatility",
    "subtext": {
      "0-10": {
        "text": "I almost never snap at people.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "10-20": {
        "text": "I rarely feel urge to snap at others.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes snap but regret it quickly.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "30-40": {
        "text": "I moderately struggle not to snap when provoked.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "40-50": {
        "text": "I fairly often have trouble not snapping at people.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently snap at others before I realize it.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly find it hard to avoid snapping at others.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly struggle to hold back from snapping when annoyed.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "80-90": {
        "text": "I am very prone to snapping at people quickly.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "90-100": {
        "text": "I always find it nearly impossible not to snap at others.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [
      107,
      108,
      109,
      110,
      111,
      112,
      115,
      118
    ],
    "opposing": [
      66
    ],
    "index": 114
  },
  {
    "text": "I am easily irritated.",
    "trait": "neuroticism",
    "weight": 1.2,
    "aspect": "Volatility",
    "subtext": {
      "0-10": {
        "text": "I rarely get irritated.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally feel a slight irritation.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes get annoyed by minor things.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately experience irritation over small issues.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often get irritated easily.",
        "exclude": [
          "INTP",
          "ENTJ",
          "INFP"
        ]
      },
      "50-60": {
        "text": "I frequently become irritated by trivial matters.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "60-70": {
        "text": "I regularly experience rapid irritation.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "70-80": {
        "text": "I am highly prone to quick irritation.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ENTJ",
          "ESFJ",
          "ESFP"
        ]
      },
      "80-90": {
        "text": "I am very easily irritated by small things.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "90-100": {
        "text": "I always become irritated almost immediately when frustrated.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [
      107,
      108,
      109,
      110,
      111,
      112,
      114,
      118
    ],
    "opposing": [
      68
    ],
    "index": 115
  },
  {
    "text": "I act on my impulses.",
    "trait": "neuroticism",
    "weight": 1.1,
    "aspect": "Volatility",
    "subtext": {
      "0-10": {
        "text": "I rarely act without thinking.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally act on a whim.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes act impulsively without full consideration.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately act on impulse at times.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often make decisions impulsively.",
        "exclude": [
          "INTP",
          "ENTJ",
          "INFP"
        ]
      },
      "50-60": {
        "text": "I frequently act without much thought.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "60-70": {
        "text": "I regularly give in to impulsive urges.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "70-80": {
        "text": "I am highly prone to impulsive actions.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ENTJ",
          "ESFJ",
          "ESFP"
        ]
      },
      "80-90": {
        "text": "I am very impulsive in my behavior.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      },
      "90-100": {
        "text": "I always act in a highly impulsive manner.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      }
    },
    "overlapping": [
      113
    ],
    "opposing": [
      6,
      9,
      12,
      13
    ],
    "index": 116
  },
  {
    "text": "I experience feelings of anxiety.",
    "trait": "neuroticism",
    "weight": 1.3,
    "aspect": "Volatility",
    "subtext": {
      "0-10": {
        "text": "I rarely feel anxious.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally feel a slight nervousness.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes experience mild anxiety.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately feel anxious at times.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often feel anxious or worried.",
        "exclude": [
          "INTP",
          "ENTJ",
          "INFP"
        ]
      },
      "50-60": {
        "text": "I frequently experience anxiety.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "60-70": {
        "text": "I regularly feel a significant degree of anxiety.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "70-80": {
        "text": "I am highly prone to feeling anxious.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ENTJ",
          "ESFJ",
          "ESFP"
        ]
      },
      "80-90": {
        "text": "I am very often overwhelmed by anxiety.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      },
      "90-100": {
        "text": "I always feel intensely anxious.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      }
    },
    "overlapping": [
      101,
      122,
      125,
      126
    ],
    "opposing": [
      23
    ],
    "index": 117
  },
  {
    "text": "I am known to have a short fuse.",
    "trait": "neuroticism",
    "weight": 1,
    "aspect": "Volatility",
    "subtext": {
      "0-10": {
        "text": "I rarely get angry.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally feel a little frustrated.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes experience a quick temper.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately lose my temper at times.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often get angry quickly.",
        "exclude": [
          "INTP",
          "ENTJ",
          "INFP"
        ]
      },
      "50-60": {
        "text": "I frequently lose my temper easily.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "60-70": {
        "text": "I regularly experience a very short fuse.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "70-80": {
        "text": "I am highly prone to getting angry rapidly.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ENTJ",
          "ESFJ",
          "ESFP"
        ]
      },
      "80-90": {
        "text": "I have a very quick temper.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      },
      "90-100": {
        "text": "I always get angry almost instantaneously.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      }
    },
    "overlapping": [
      107,
      108,
      109,
      110,
      111,
      112,
      114,
      115
    ],
    "opposing": [
      38,
      40,
      66,
      68
    ],
    "index": 118
  },
  {
    "text": "I experience agitation and restlessness.",
    "trait": "neuroticism",
    "weight": 0.9,
    "aspect": "Volatility",
    "subtext": {
      "0-10": {
        "text": "I rarely feel agitated or restless.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally feel a bit on edge.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes experience mild restlessness.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately feel agitated at times.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often feel restless.",
        "exclude": [
          "INTP",
          "ENTJ",
          "INFP"
        ]
      },
      "50-60": {
        "text": "I frequently experience agitation.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "60-70": {
        "text": "I regularly feel on edge and restless.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "70-80": {
        "text": "I am highly prone to feeling agitated.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ENTJ",
          "ESFJ",
          "ESFP"
        ]
      },
      "80-90": {
        "text": "I very often feel restless and uneasy.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      },
      "90-100": {
        "text": "I always feel deeply agitated and restless.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      }
    },
    "overlapping": [
      99,
      103,
      104,
      108,
      129
    ],
    "opposing": [
      9,
      26,
      81,
      82
    ],
    "index": 119
  },
  {
    "text": "I experience feelings of sadness or low mood.",
    "trait": "neuroticism",
    "weight": 1.1,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I rarely feel sad.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally feel a little down.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes feel a bit blue.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately experience occasional sadness.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often feel sad or down.",
        "exclude": [
          "INTP",
          "ENTJ",
          "INFP"
        ]
      },
      "50-60": {
        "text": "I frequently experience feelings of unhappiness.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "60-70": {
        "text": "I regularly feel noticeably low in mood.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "70-80": {
        "text": "I am highly prone to feelings of sadness.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ENTJ",
          "ESFJ",
          "ESFP"
        ]
      },
      "80-90": {
        "text": "I very often feel deeply sad.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      },
      "90-100": {
        "text": "I always seem to feel profoundly sad or down.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      }
    },
    "overlapping": [
      102
    ],
    "opposing": [
      37,
      38,
      40
    ],
    "index": 120
  },
  {
    "text": "I concern myself with others' evaluations of me.",
    "trait": "neuroticism",
    "weight": 1,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I rarely worry about what others think.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally notice others' opinions.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes worry about others’ judgments.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately feel self-conscious about others’ views.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often worry about how others perceive me.",
        "exclude": [
          "INTP",
          "ENTJ",
          "INFP"
        ]
      },
      "50-60": {
        "text": "I frequently become preoccupied with others' opinions.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "60-70": {
        "text": "I regularly concern myself with others' evaluations.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "70-80": {
        "text": "I am highly troubled by what others think of me.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ENTJ",
          "ESFJ",
          "ESFP"
        ]
      },
      "80-90": {
        "text": "I am very often anxious about others' judgments.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      },
      "90-100": {
        "text": "I always worry profoundly about how others view me.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      }
    },
    "overlapping": [
      100,
      124,
      127
    ],
    "opposing": [
      23,
      39,
      55
    ],
    "index": 121
  },
  {
    "text": "I feel overwhelmed when confronted with stress.",
    "trait": "neuroticism",
    "weight": 1.2,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I rarely feel overwhelmed by stress.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally feel mildly stressed.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes experience moderate stress.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately feel overwhelmed under pressure.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often feel easily overwhelmed by stress.",
        "exclude": [
          "INTP",
          "ENTJ",
          "INFP"
        ]
      },
      "50-60": {
        "text": "I frequently feel overwhelmed when facing stress.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "60-70": {
        "text": "I regularly feel heavily burdened by stress.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "70-80": {
        "text": "I am highly prone to feeling overwhelmed by stressful situations.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ENTJ",
          "ESFJ",
          "ESFP"
        ]
      },
      "80-90": {
        "text": "I very often feel overwhelmed by stress.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      },
      "90-100": {
        "text": "I always feel deeply overwhelmed by stress.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      }
    },
    "overlapping": [
      101,
      117,
      125,
      126
    ],
    "opposing": [
      23
    ],
    "index": 122
  },
  {
    "text": "I attribute failures to my own shortcomings.",
    "trait": "neuroticism",
    "weight": 1,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I rarely blame myself for things going wrong.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally wonder if I could have done better.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes blame myself when things fail.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately tend to take personal responsibility for failures.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often blame myself when things go wrong.",
        "exclude": [
          "INTP",
          "ENTJ",
          "INFP"
        ]
      },
      "50-60": {
        "text": "I frequently attribute negative outcomes to my own faults.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "60-70": {
        "text": "I regularly blame myself for setbacks.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "70-80": {
        "text": "I have a strong tendency to blame myself.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ENTJ",
          "ESFJ",
          "ESFP"
        ]
      },
      "80-90": {
        "text": "I very often internalize blame when things go wrong.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      },
      "90-100": {
        "text": "I always unequivocally blame myself for any failure.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      }
    },
    "overlapping": [
      106
    ],
    "opposing": [
      6,
      12,
      13,
      22,
      34
    ],
    "index": 123
  },
  {
    "text": "I struggle with feelings of insecurity.",
    "trait": "neuroticism",
    "weight": 0.9,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I rarely feel insecure about myself.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally feel a bit unsure of myself.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes question my self-worth.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately experience feelings of insecurity.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often feel insecure about my abilities.",
        "exclude": [
          "INTP",
          "ENTJ",
          "INFP"
        ]
      },
      "50-60": {
        "text": "I frequently struggle with insecurity.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "60-70": {
        "text": "I regularly experience deep feelings of insecurity.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "70-80": {
        "text": "I am highly prone to feeling insecure.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ENTJ",
          "ESFJ",
          "ESFP"
        ]
      },
      "80-90": {
        "text": "I very often feel extremely insecure.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      },
      "90-100": {
        "text": "I always feel overwhelmingly insecure about myself.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      }
    },
    "overlapping": [
      100,
      121,
      123,
      127
    ],
    "opposing": [
      23,
      39,
      55
    ],
    "index": 124
  },
  {
    "text": "I feel overwhelmed when managing several responsibilities simultaneously.",
    "trait": "neuroticism",
    "weight": 1.1,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I rarely feel overwhelmed by multiple responsibilities.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally manage multiple tasks without issue.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes feel a bit overwhelmed with many tasks.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately feel overwhelmed under multiple responsibilities.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often feel burdened by multiple tasks.",
        "exclude": [
          "INTP",
          "ENTJ",
          "INFP"
        ]
      },
      "50-60": {
        "text": "I frequently feel overwhelmed when juggling responsibilities.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "60-70": {
        "text": "I regularly feel overwhelmed by numerous responsibilities.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "70-80": {
        "text": "I strongly feel overwhelmed when under heavy responsibilities.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ENTJ",
          "ESFJ",
          "ESFP"
        ]
      },
      "80-90": {
        "text": "I am highly prone to feeling overwhelmed by multiple duties.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      },
      "90-100": {
        "text": "I always feel deeply overwhelmed when managing many tasks.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      }
    },
    "overlapping": [
      101,
      117,
      122
    ],
    "opposing": [
      8,
      26,
      32
    ],
    "index": 125
  },
  {
    "text": "I experience anxiety in high-pressure situations.",
    "trait": "neuroticism",
    "weight": 1,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I rarely feel anxious even under stress.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally feel mild anxiety in high pressure situations.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes feel somewhat anxious in stressful conditions.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately experience anxiety when stressed.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often feel anxious in high-pressure scenarios.",
        "exclude": [
          "INTP",
          "ENTJ",
          "INFP"
        ]
      },
      "50-60": {
        "text": "I frequently feel anxious during stressful times.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "60-70": {
        "text": "I regularly experience significant anxiety under pressure.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "70-80": {
        "text": "I strongly feel anxious in challenging situations.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ENTJ",
          "ESFJ",
          "ESFP"
        ]
      },
      "80-90": {
        "text": "I am highly prone to anxiety in stressful contexts.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      },
      "90-100": {
        "text": "I almost always feel deeply anxious in stressful situations.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      }
    },
    "overlapping": [
      100,
      101,
      103,
      117,
      122
    ],
    "opposing": [],
    "index": 126
  },
  {
    "text": "I experience uncertainty and self-doubt during decision-making.",
    "trait": "neuroticism",
    "weight": 0.9,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I rarely feel uneasy about my decisions.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally second-guess myself.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes feel uncertain when making decisions.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately experience self-doubt during decision-making.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often second-guess my decisions.",
        "exclude": [
          "INTP",
          "ENTJ",
          "INFP"
        ]
      },
      "50-60": {
        "text": "I frequently feel uneasy when deciding.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "60-70": {
        "text": "I regularly experience uncertainty in decision-making.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "70-80": {
        "text": "I strongly tend to doubt my choices.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ENTJ",
          "ESFJ",
          "ESFP"
        ]
      },
      "80-90": {
        "text": "I am highly prone to second-guessing myself.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      },
      "90-100": {
        "text": "I almost always feel deeply uncertain and second-guess every decision.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      }
    },
    "overlapping": [
      100,
      103,
      121,
      124
    ],
    "opposing": [
      23,
      25,
      39,
      55
    ],
    "index": 127
  },
  {
    "text": "I reflect on past errors and their potential consequences.",
    "trait": "neuroticism",
    "weight": 0.95,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I rarely dwell on past mistakes.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally reflect on past errors.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes think about past mistakes and outcomes.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately worry about past errors and potential consequences.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often reflect on past mistakes.",
        "exclude": [
          "INTP",
          "ENTJ",
          "INFP"
        ]
      },
      "50-60": {
        "text": "I frequently reflect on past errors and their outcomes.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "60-70": {
        "text": "I regularly dwell on my past mistakes.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "70-80": {
        "text": "I strongly focus on past mistakes and worry about what could have been.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ENTJ",
          "ESFJ",
          "ESFP"
        ]
      },
      "80-90": {
        "text": "I am highly prone to overthinking past errors and consequences.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      },
      "90-100": {
        "text": "I almost always reflect intensely on past mistakes and potential outcomes.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      }
    },
    "overlapping": [
      102,
      105,
      106
    ],
    "opposing": [],
    "index": 128
  },
  {
    "text": "I overthink and experience unease about uncertain outcomes.",
    "trait": "neuroticism",
    "weight": 1,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I rarely overthink or worry about the unknown.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally feel uneasy in uncertain situations.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes overthink and feel a bit uneasy about uncertainty.",
        "exclude": [
          "ESTP",
          "INTJ",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately experience overthinking and unease about the unknown.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often feel uneasy about uncertain outcomes.",
        "exclude": [
          "INTP",
          "ENTJ",
          "INFP"
        ]
      },
      "50-60": {
        "text": "I frequently overthink and worry about the unknown.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "60-70": {
        "text": "I regularly experience deep unease about uncertain outcomes.",
        "exclude": [
          "ENTP",
          "INTP",
          "ENTJ"
        ]
      },
      "70-80": {
        "text": "I strongly tend to overthink and feel uneasy about the unknown.",
        "exclude": [
          "ENTP",
          "INTP",
          "ISTP",
          "ENTJ",
          "ESFJ",
          "ESFP"
        ]
      },
      "80-90": {
        "text": "I am highly prone to overthinking and feeling uneasy about uncertainty.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      },
      "90-100": {
        "text": "I always overthink situations and feel profoundly uneasy about the unknown.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP"
        ]
      }
    },
    "overlapping": [
      99,
      103,
      104,
      119
    ],
    "opposing": [],
    "index": 129
  },
  {
    "text": "I enjoy exploring complex scientific theories.",
    "trait": "openness",
    "weight": 1.2,
    "aspect": "Intellect",
    "subtext": {
      "0-10": {
        "text": "I rarely look into scientific theories.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally skim simple science articles.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes read about basic scientific ideas.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately explore advanced scientific theories.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often consider complex scientific concepts.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently delve into intricate scientific ideas.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly study detailed scientific frameworks.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly enjoy dissecting cutting-edge scientific theory.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very invested in mastering complex scientific theories.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I am always absorbed in the deepest levels of scientific theory.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      4,
      131,
      132,
      133,
      134,
      135,
      147
    ],
    "opposing": [],
    "index": 130
  },
  {
    "text": "I critically analyse abstract ideas for fun.",
    "trait": "openness",
    "weight": 1.1,
    "aspect": "Intellect",
    "subtext": {
      "0-10": {
        "text": "I rarely engage with abstract ideas.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally glance at simple puzzles.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes attempt easy abstract ideas.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately enjoy tackling abstract problems in spare time.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often work on abstract mathematical challenges.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently choose complex ideas for leisure.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly dive into higher-order concepts for fun.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly relish analysing difficult, abstract ideas.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very driven to solve advanced abstractions.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always immerse myself in the purest forms of abstractual thinking.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      0,
      130,
      132,
      133,
      134,
      135,
      147,
      155
    ],
    "opposing": [],
    "index": 131
  },
  {
    "text": "I design personal experiments to test my theoretical ideas.",
    "trait": "openness",
    "weight": 1,
    "aspect": "Intellect",
    "subtext": {
      "0-10": {
        "text": "I rarely create experiments for my ideas.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally tinker but without structured tests.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes try small tests of my thoughts.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately build experiments to explore hypotheses.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often test my ideas through personal experiments.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently conduct experiments to validate theories.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly refine hypotheses through self-designed experiments.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly enjoy rigorous self-experimentation to learn.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very persistent in experimentally testing new theories.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always design meticulous experiments for every theoretical idea.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      130,
      131,
      133,
      134,
      135,
      147
    ],
    "opposing": [],
    "index": 132
  },
  {
    "text": "I reinterpret familiar concepts from multiple perspectives.",
    "trait": "openness",
    "weight": 1,
    "aspect": "Intellect",
    "subtext": {
      "0-10": {
        "text": "I rarely rethink familiar concepts.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally see ideas in a different light.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes consider new angles on old ideas.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately reinterpret familiar topics in fresh ways.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often find multiple perspectives on known ideas.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently re-examine concepts from various viewpoints.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly analyse old concepts with fresh perspectives.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly enjoy reframing ideas through many lenses.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very skilled at re-thinking and re-framing concepts.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always reinterpret any familiar concept from numerous angles.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      130,
      131,
      132,
      134,
      135,
      147,
      155
    ],
    "opposing": [],
    "index": 133
  },
  {
    "text": "I simulate experiences to satisfy my intellectual curiosity.",
    "trait": "openness",
    "weight": 1.1,
    "aspect": "Intellect",
    "subtext": {
      "0-10": {
        "text": "I rarely create simulations or models.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally try simple simulations but lose interest.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes build basic models out of curiosity.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately create small simulations for fun learning.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often develop simulations to explore ideas.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently create simulations to test hypotheses.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly create sophisticated models for curiosity's sake.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly employ simulation to understand complex systems.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very dedicated to building advanced intellectual simulations.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always craft intricate simulations to explore theoretical ideas.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      130,
      131,
      132,
      133,
      135,
      147
    ],
    "opposing": [],
    "index": 134
  },
  {
    "text": "I dive into frontier research papers to expand my knowledge.",
    "trait": "openness",
    "weight": 1.3,
    "aspect": "Intellect",
    "subtext": {
      "0-10": {
        "text": "I rarely read research papers.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally skim simplified research summaries.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes glance at research articles.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately read research on topics that interest me.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often read specialized research papers.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently explore contemporary research for learning.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly study cutting-edge research papers.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly enjoy deep dives into frontier academic work.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very committed to analysing the latest research findings.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always immerse myself in leading-edge research literature.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      4,
      130,
      131,
      132,
      133,
      134,
      147
    ],
    "opposing": [],
    "index": 135
  },
  {
    "text": "I feel deeply moved by masterful works of visual art.",
    "trait": "openness",
    "weight": 1.1,
    "aspect": "Exploration",
    "subtext": {
      "0-10": {
        "text": "I rarely feel anything special when I see art.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally appreciate art but without strong feelings.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes enjoy art if it's impressive.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately feel inspired by good art.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often feel touched by visual artwork.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently feel moved when I view art.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly experience deep emotion through visual art.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly feel profound emotion facing great art.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very moved spiritually by masterful art.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always feel deeply stirred by exceptional visual art.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      137,
      139,
      140,
      142
    ],
    "opposing": [],
    "index": 136
  },
  {
    "text": "I immerse myself in diverse musical genres.",
    "trait": "openness",
    "weight": 1,
    "aspect": "Exploration",
    "subtext": {
      "0-10": {
        "text": "I rarely explore different musical styles.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally listen to new genres but stick to favourites.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes sample new music genres.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately explore varied musical styles.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often enjoy music from many genres.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently immerse myself in diverse music.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly seek out unfamiliar musical textures.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly relish exploring a vast range of musical genres.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very passionate about discovering new musical worlds.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always dive deep into diverse music to savour every nuance.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      136,
      139,
      140,
      142
    ],
    "opposing": [],
    "index": 137
  },
  {
    "text": "I seek out unusual cuisines to discover new flavours.",
    "trait": "openness",
    "weight": 1,
    "aspect": "Exploration",
    "subtext": {
      "0-10": {
        "text": "I rarely try foods outside my comfort zone.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally sample unfamiliar food but prefer familiar dishes.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes try mildly unusual cuisines.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately enjoy experimenting with new flavours.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often look for unfamiliar dishes to taste.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently explore unusual cuisines.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly seek bold, unfamiliar flavours.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly enjoy tasting rare or exotic foods.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very adventurous with any cuisine I can find.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always pursue the most unusual foods for new flavour experiences.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      2,
      3
    ],
    "opposing": [],
    "index": 138
  },
  {
    "text": "I enjoy walking unfamiliar landscapes just to observe the details.",
    "trait": "openness",
    "weight": 1,
    "aspect": "Exploration",
    "subtext": {
      "0-10": {
        "text": "I rarely wander unfamiliar places for the scenery.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally stroll new areas but focus on a destination.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes notice scenery on walks.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately enjoy observing new landscapes.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often wander just to observe natural detail.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently explore unfamiliar landscapes for their details.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly seek new environments to observe closely.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly savour intricate details in unfamiliar scenery.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very captivated by every feature of new landscapes.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always feel compelled to explore and observe every new environment.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      136,
      137,
      140,
      142
    ],
    "opposing": [],
    "index": 139
  },
  {
    "text": "I experiment with creative writing styles to evoke vivid imagery.",
    "trait": "openness",
    "weight": 1.1,
    "aspect": "Exploration",
    "subtext": {
      "0-10": {
        "text": "I rarely write creatively.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally jot creative notes but not often.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes try creative writing styles.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately explore different writing techniques.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often write creatively for vivid imagery.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently experiment with evocative writing styles.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly craft images through creative prose or poetry.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly love inventing unusual writing styles.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very driven to explore bold writing techniques.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always push creative writing into vivid, imaginative terrain.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      136,
      137,
      139,
      142
    ],
    "opposing": [],
    "index": 140
  },
  {
    "text": "I decorate my living space with bold, unconventional designs.",
    "trait": "openness",
    "weight": 1,
    "aspect": "Exploration",
    "subtext": {
      "0-10": {
        "text": "I rarely change my decor or style.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally add small decorative touches.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes try minor unconventional decor elements.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately like unique decorations.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often use bold designs in my space.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently decorate with unconventional styles.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly redesign rooms with bold aesthetic choices.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly pursue unique, unconventional interior designs.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very adventurous in decorating with bold styles.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always embrace striking, unconventional design elements.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [],
    "opposing": [
      14
    ],
    "index": 141
  },
  {
    "text": "I am drawn to films that challenge conventional storytelling.",
    "trait": "openness",
    "weight": 1,
    "aspect": "Exploration",
    "subtext": {
      "0-10": {
        "text": "I rarely watch unconventional films.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally watch unusual films but prefer familiar plots.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes try films with unique storytelling.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately enjoy films that break storytelling norms.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often watch unconventional movies.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently seek films that challenge norms.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly prefer films with experimental narratives.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly enjoy avant-garde or non-linear storytelling.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very drawn to films that defy storytelling conventions.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always seek out films that radically reshape narrative form.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      136,
      137,
      139,
      140
    ],
    "opposing": [],
    "index": 142
  },
  {
    "text": "I offer to mediate when friends experience conflict.",
    "trait": "agreeableness",
    "weight": 1.1,
    "aspect": "Compassion",
    "subtext": {
      "0-10": {
        "text": "I rarely step in when friends argue.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally try to help but mostly avoid conflict.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes help mediate small disagreements.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately assist in resolving friends’ conflicts.",
        "exclude": [
          "ESFJ",
          "ENFJ",
          "ISFJ",
          "INFJ",
          "ESFP",
          "ENFP"
        ]
      },
      "40-50": {
        "text": "I fairly often offer to mediate when friends quarrel.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently step in to help friends find common ground.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly mediate conflicts to support harmony.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP"
        ]
      },
      "70-80": {
        "text": "I highly ensure fair resolution when friends clash.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "80-90": {
        "text": "I am very committed to helping friends reconcile differences.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      },
      "90-100": {
        "text": "I always step up to mediate and restore harmony among friends.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ENTJ",
          "ESTJ"
        ]
      }
    },
    "overlapping": [
      77,
      95,
      98
    ],
    "opposing": [],
    "index": 143
  },
  {
    "text": "I double-check my work to ensure accuracy before submission.",
    "trait": "conscientiousness",
    "weight": 1.2,
    "aspect": "Industriousness",
    "subtext": {
      "0-10": {
        "text": "I rarely review my work for errors.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally skim but miss mistakes.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes review quickly for obvious errors.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "30-40": {
        "text": "I moderately check my work before handing it in.",
        "exclude": [
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "INTJ",
          "ENTJ"
        ]
      },
      "40-50": {
        "text": "I fairly often proofread for accuracy.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently double-check my work for mistakes.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly verify every detail before submission.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP"
        ]
      },
      "70-80": {
        "text": "I highly ensure my work is error-free before delivering it.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "80-90": {
        "text": "I am very meticulous to avoid any inaccuracies.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      },
      "90-100": {
        "text": "I always double-check every detail to guarantee flawless accuracy.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "ISTP",
          "ENFP",
          "ESFP",
          "INFP",
          "ISFP",
          "INFJ"
        ]
      }
    },
    "overlapping": [
      16,
      28
    ],
    "opposing": [],
    "index": 144
  },
  {
    "text": "I enthusiastically lead impromptu group activities.",
    "trait": "extraversion",
    "weight": 1.2,
    "aspect": "Enthusiasm",
    "subtext": {
      "0-10": {
        "text": "I rarely initiate spontaneous group activities.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "10-20": {
        "text": "I occasionally join spontaneous plans but seldom lead.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes help start impromptu activities.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISTP",
          "INFJ"
        ]
      },
      "30-40": {
        "text": "I moderately initiate group fun on the spur of the moment.",
        "exclude": [
          "ENTP",
          "ESTP",
          "ENTJ",
          "ESTJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often lead spontaneous group events.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently start impromptu activities with enthusiasm.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly spark spontaneous fun for groups.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "70-80": {
        "text": "I highly energise friends with spur-of-the-moment events.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "80-90": {
        "text": "I am very quick to lead lively, impromptu gatherings.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      },
      "90-100": {
        "text": "I always enthusiastically ignite spontaneous group activities.",
        "exclude": [
          "INTP",
          "ISTP",
          "INTJ",
          "ISTJ",
          "ISFJ",
          "INFJ",
          "ISFP",
          "INFP"
        ]
      }
    },
    "overlapping": [
      43,
      44
    ],
    "opposing": [],
    "index": 145
  },
  {
    "text": "I feel restless when plans change unexpectedly.",
    "trait": "neuroticism",
    "weight": 1.1,
    "aspect": "Withdrawal",
    "subtext": {
      "0-10": {
        "text": "I almost never feel restless when plans change.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "10-20": {
        "text": "I rarely feel uneasy if plans shift.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "20-30": {
        "text": "I sometimes feel a bit tense when plans change.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP",
          "INFJ",
          "ISFJ",
          "ENFJ",
          "ESFJ"
        ]
      },
      "30-40": {
        "text": "I moderately feel restless with sudden plan changes.",
        "exclude": [
          "INFP",
          "ISFP",
          "ENFP",
          "ESFP"
        ]
      },
      "40-50": {
        "text": "I fairly often feel uneasy when plans alter unexpectedly.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently feel restless if things change last minute.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly feel unsettled by unexpected changes.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "70-80": {
        "text": "I highly feel anxious when plans suddenly change.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "80-90": {
        "text": "I am very restless and uneasy with abrupt plan shifts.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      },
      "90-100": {
        "text": "I always feel highly restless whenever plans change unexpectedly.",
        "exclude": [
          "ESTJ",
          "ENTJ",
          "ESTP",
          "ENTP",
          "INTJ",
          "ISTJ",
          "ISTP",
          "INTP"
        ]
      }
    },
    "overlapping": [],
    "opposing": [
      26,
      32,
      38,
      40,
      42,
      56,
      66
    ],
    "index": 146
  },
  {
    "text": "I integrate insights from different fields to forge new theories.",
    "trait": "openness",
    "weight": 1.2,
    "aspect": "Intellect",
    "subtext": {
      "0-10": {
        "text": "I rarely mix ideas from different subjects.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally notice links between separate topics.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes connect ideas across a couple of fields.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately link concepts from different disciplines.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often draw on multiple fields to form new ideas.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently integrate knowledge from varied domains.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly fuse insights from distinct areas into fresh frameworks.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly combine diverse disciplines to craft innovative theories.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very adept at synthesising disparate fields into coherent new models.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always weave knowledge from many disciplines into pioneering theoretical work.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      4,
      130,
      131,
      132,
      133,
      134,
      135
    ],
    "opposing": [],
    "index": 147
  },
  {
    "text": "I actively seek out new ideas and perspectives, even when they conflict with my current beliefs.",
    "trait": "openness",
    "weight": 1.3,
    "aspect": "Exploration",
    "subtext": {
      "0-10": {
        "text": "I avoid considering ideas that differ from mine.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I rarely entertain viewpoints that challenge me.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes listen to unfamiliar ideas but seldom adopt them.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I occasionally explore new perspectives, yet prefer what I know.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often keep an open mind toward different viewpoints.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently seek out perspectives that broaden my thinking.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly examine ideas that challenge my assumptions.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly value engaging with opinions unlike my own.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very eager to integrate radically different perspectives.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I thrive on ideas that transform my worldview.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      5,
      150,
      152
    ],
    "opposing": [
      18,
      29,
      92
    ],
    "index": 148
  },
  {
    "text": "I find it enriching to immerse myself in cultures and traditions different from my own.",
    "trait": "openness",
    "weight": 1.2,
    "aspect": "Exploration",
    "subtext": {
      "0-10": {
        "text": "I avoid unfamiliar customs and stick to what I know.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I rarely show interest in cultures unlike mine.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes sample new cultural experiences but feel hesitant.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I occasionally explore other cultures but prefer the familiar.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often enjoy learning about new cultures.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently seek out cross-cultural experiences.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly immerse myself in diverse cultural settings.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly value connecting with people from varied backgrounds.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very enthusiastic about embracing unfamiliar traditions.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I actively seek transformative cultural experiences.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      2,
      3,
      157
    ],
    "opposing": [],
    "index": 149
  },
  {
    "text": "I welcome constructive criticism that challenges my assumptions.",
    "trait": "openness",
    "weight": 1.1,
    "aspect": "Exploration",
    "subtext": {
      "0-10": {
        "text": "I dismiss feedback that questions my views.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I rarely consider criticism of my ideas.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes listen to feedback but seldom change.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I occasionally act on constructive feedback.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often appreciate criticism that helps me grow.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently use feedback to improve my thinking.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly invite diverse critiques of my ideas.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly value rigorous challenges to my assumptions.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very proactive in seeking critical viewpoints.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I thrive on feedback that radically reshapes my perspective.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      148,
      152
    ],
    "opposing": [],
    "index": 150
  },
  {
    "text": "I re-examine long-held traditions from fresh viewpoints.",
    "trait": "openness",
    "weight": 1,
    "aspect": "Exploration",
    "subtext": {
      "0-10": {
        "text": "I reject questioning established customs.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I rarely question traditional ways.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes consider new takes on tradition, but cautiously.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I occasionally revisit traditions through different lenses.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often rethink established norms.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently explore alternative takes on tradition.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly challenge norms to discover new insights.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly value questioning historical conventions.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very keen on re-evaluating time-honored beliefs.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I consistently deconstruct traditions to foster innovation.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [],
    "opposing": [],
    "index": 151
  },
  {
    "text": "I readily adjust my opinions when presented with convincing evidence.",
    "trait": "openness",
    "weight": 1.2,
    "aspect": "Exploration",
    "subtext": {
      "0-10": {
        "text": "I ignore evidence that contradicts my beliefs.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I rarely revise my views, even when faced with facts.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes acknowledge evidence but resist changing.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I occasionally revise my stance when data is strong.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often update my views when convinced.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently let solid evidence guide my opinions.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly change my mind in light of new facts.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly value evidence-based belief revision.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very quick to adopt better-supported conclusions.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I consistently refine my worldview to align with the strongest evidence.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      5,
      148,
      150
    ],
    "opposing": [],
    "index": 152
  },
  {
    "text": "I believe conversations with people who think differently are essential for personal growth.",
    "trait": "openness",
    "weight": 1.1,
    "aspect": "Exploration",
    "subtext": {
      "0-10": {
        "text": "I avoid discussions with those who disagree with me.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I rarely engage with opposing viewpoints.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes talk with differing thinkers but keep distance.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I occasionally discuss ideas with people who disagree.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often appreciate conversations that challenge me.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently seek dialogue with diverse thinkers.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly learn from discussions with differing opinions.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly value debate with contrasting perspectives.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very enthusiastic about engaging with opposing views.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I continuously seek out and integrate insights from radically different thinkers.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      65,
      67
    ],
    "opposing": [],
    "index": 153
  },
  {
    "text": "I eagerly embrace new ideas and diverse perspectives.",
    "trait": "openness",
    "weight": 1.2,
    "aspect": "Intellectual Openness",
    "subtext": {
      "0-10": {
        "text": "I am slightly open to new ideas.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I have a mild interest in exploring new perspectives.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes consider new ideas.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately explore different perspectives.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I am fairly open to diverse ideas.",
        "exclude": []
      },
      "50-60": {
        "text": "I often welcome new perspectives.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly embrace a variety of ideas.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I am highly open to trying different approaches.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am extremely receptive to all kinds of ideas.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I am exceptionally open to exploring and embracing new perspectives.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      156,
      157,
      158,
      159
    ],
    "opposing": [
      20
    ],
    "index": 154
  },
  {
    "text": "I contemplate abstract concepts and explore profound questions.",
    "trait": "openness",
    "weight": 0.9,
    "aspect": "Intellectual Openness",
    "subtext": {
      "0-10": {
        "text": "I rarely think about abstract concepts.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally consider simple abstract ideas.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes ponder abstract questions.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately enjoy contemplating deep ideas.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often reflect on abstract concepts.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently engage in deep, abstract thought.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly explore profound questions.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I consistently think deeply about abstract matters.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I almost always ponder profound and abstract ideas.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I perpetually explore the deepest and most abstract concepts.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      0,
      131,
      133,
      156,
      158,
      159
    ],
    "opposing": [],
    "index": 155
  },
  {
    "text": "I readily adapt to change and find comfort in new situations.",
    "trait": "openness",
    "weight": 0.9,
    "aspect": "Intellectual Openness",
    "subtext": {
      "0-10": {
        "text": "I struggle with change and prefer stability.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally adapt to minor changes.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes embrace change with hesitation.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately adapt to new situations.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often feel comfortable with change.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently adapt quickly to new situations.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly handle change with ease.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I am highly comfortable with adapting to change.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am extremely adept at managing change.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I thrive on change and effortlessly adjust to new situations.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      154,
      155,
      157,
      158,
      159
    ],
    "opposing": [
      8,
      11,
      30
    ],
    "index": 156
  },
  {
    "text": "I actively pursue novel experiences and welcome the unfamiliar.",
    "trait": "openness",
    "weight": 1.1,
    "aspect": "Intellectual Openness",
    "subtext": {
      "0-10": {
        "text": "I rarely seek out new experiences.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I sometimes avoid stepping out of my comfort zone.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I occasionally try something new when prompted.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately explore new experiences.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often seek out novel activities.",
        "exclude": []
      },
      "50-60": {
        "text": "I often venture into unfamiliar experiences.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly embrace opportunities to try new things.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I actively pursue new adventures.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am highly driven to explore the unknown.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always eagerly seek and relish new, exciting experiences.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      2,
      149,
      154,
      156,
      158,
      159
    ],
    "opposing": [
      15
    ],
    "index": 157
  },
  {
    "text": "I have an enduring appreciation for art, culture, and varied perspectives.",
    "trait": "openness",
    "weight": 1,
    "aspect": "Intellectual Openness",
    "subtext": {
      "0-10": {
        "text": "I rarely notice art or cultural diversity.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I occasionally encounter art and cultural ideas.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I sometimes enjoy artistic expressions.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately appreciate art and diverse cultures.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often engage with art and cultural diversity.",
        "exclude": []
      },
      "50-60": {
        "text": "I regularly immerse myself in art and diverse perspectives.",
        "exclude": []
      },
      "60-70": {
        "text": "I consistently seek out cultural and artistic experiences.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I actively value art, culture, and diverse viewpoints.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am highly appreciative of artistic and cultural diversity.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always immerse myself in art, culture, and varied perspectives.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      154,
      155,
      156,
      157,
      159
    ],
    "opposing": [],
    "index": 158
  },
  {
    "text": "I excel in creative challenges and embrace innovative problem-solving.",
    "trait": "openness",
    "weight": 1.2,
    "aspect": "Intellectual Openness",
    "subtext": {
      "0-10": {
        "text": "I rarely engage in creative challenges.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "10-20": {
        "text": "I sometimes shy away from innovative approaches.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "20-30": {
        "text": "I occasionally try to solve problems creatively.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ESFJ",
          "ENFJ",
          "ESFP",
          "ENFP",
          "ISFP",
          "INFP"
        ]
      },
      "30-40": {
        "text": "I moderately engage in creative problem-solving.",
        "exclude": [
          "ENTP",
          "ESTP",
          "INTJ",
          "ENTJ",
          "INFJ",
          "ENFJ",
          "ENFP",
          "INFP"
        ]
      },
      "40-50": {
        "text": "I fairly often approach challenges in innovative ways.",
        "exclude": []
      },
      "50-60": {
        "text": "I often use creative solutions to tackle challenges.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly embrace creative and innovative problem-solving.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I strongly seek out creative challenges and innovative solutions.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am highly engaged in finding innovative approaches to problems.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ISFP"
        ]
      },
      "90-100": {
        "text": "I always thrive on creative challenges and embrace innovation.",
        "exclude": [
          "INTP",
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ",
          "ESFJ",
          "ESFP",
          "ISFP"
        ]
      }
    },
    "overlapping": [
      154,
      155,
      156,
      157,
      158
    ],
    "opposing": [
      20
    ],
    "index": 159
  }
]
  
export const statements = selectStatements(allStatements)

export const longStatements = selectMoreStatements(allStatements);

// Group statements into stages
export const stages = [
  statements.slice(0, 3), // Stage 0
  statements.slice(3, 7), // Stage 1
  statements.slice(7, 11), // Stage 2
  statements.slice(11, 15), // Stage 3
  statements.slice(15, 19), // Stage 4
  statements.slice(19, 23), // Stage 5
  statements.slice(23, 26), // Stage 6
];

export const longStages = [
  longStatements.slice(0,3), // Stage 0
  longStatements.slice(3, 7),  // stage 1
  longStatements.slice(7, 11), // Stage 2
  longStatements.slice(11, 15), // Stage 3
  longStatements.slice(15, 19), // Stage 4
  longStatements.slice(19, 23), // Stage 5
  longStatements.slice(23, 27), // stage 6 
  longStatements.slice(27, 31), // stage 7
  longStatements.slice(31, 35), // stage 8
  longStatements.slice(35, 39),  // stage 9
  longStatements.slice(39, 42), // stage 10
]
export const allStages = [
  allStatements.slice(0,3), // Stage 0
  allStatements.slice(3, 7),  // stage 1
  allStatements.slice(7, 11), // Stage 2
  allStatements.slice(11, 15), // Stage 3
  allStatements.slice(15, 19), // Stage 4
  allStatements.slice(19, 23), // Stage 5
  allStatements.slice(23, 27), // stage 6 
  allStatements.slice(27, 31), // stage 7
  allStatements.slice(31, 35), // stage 8
  allStatements.slice(35, 39),  // stage 9
  allStatements.slice(39, 43), // stage 10
  allStatements.slice(43, 47), // stage 11
  allStatements.slice(47, 51),  // stage 12
  allStatements.slice(51, 55),  // stage 13
  allStatements.slice(55, 59),  // stage 14
  allStatements.slice(59, 63),  // stage 15
  allStatements.slice(63, 67),  // stage 16
  allStatements.slice(67, 70),  // stage 17
]



export const functionPairings = [
  // ENTP (Perceiving dominant pairings)
  { 
    type: 'ENTP', 
    f4: 'Fight', 
    stack: 'Ne>Ti>Fe>Si', 
    dominant: 'Ne>Ti (Id + Ego)',       // Ne extraverted perceiving
    auxiliary: 'Ni>Te (Id + Superego)',  // Ni introverted perceiving
    tertiary: 'Ni>Fe (Id + Superego)',   // Ni introverted perceiving
    inferior: 'Ne>Fi (Id + Ego)',        // Ne extraverted perceiving
    opposite: 'ISFJ',
    suffix: '',
  },

  // INTJ (Perceiving pairings from introverted lefts)
  { 
    type: 'INTJ', 
    f4: 'Freeze', 
    stack: 'Ni>Te>Fi>Se', 
    dominant: 'Ni>Te (Id + Superego)',   // Ni introverted perceiving → falls back to Te (judging) not used here because rule is “look only at left”
                                        // Actually we treat Ni as the left function → introverted perceiving → (Id + Superego)
    auxiliary: 'Ne>Ti (Id + Ego)',       // Ne extraverted perceiving
    tertiary: 'Ne>Fi (Id + Ego)',        // Ne extraverted perceiving
    inferior: 'Ni>Fe (Id + Superego)',     // Ni introverted perceiving
    opposite: 'ESFP',
    suffix: '',
  },

  // ISFJ
  { 
    type: 'ISFJ', 
    f4: 'Fawn', 
    stack: 'Si>Fe>Ti>Ne', 
    dominant: 'Si>Fe (Id + Superego)',     // Si introverted perceiving → (Id + Superego)
    auxiliary: 'Se>Fi (Id + Ego)',         // Se extraverted perceiving → (Id + Ego)
    tertiary: 'Se>Ti (Id + Ego)',          // Se extraverted perceiving → (Id + Ego)
    inferior: 'Si>Te (Id + Superego)',       // Si introverted perceiving → (Id + Superego)
    opposite: 'ENTP',
    suffix: '',
  },

  // ESFP
  { 
    type: 'ESFP', 
    f4: 'Flight', 
    stack: 'Se>Fi>Te>Ni', 
    dominant: 'Se>Fi (Id + Ego)',         // Se extraverted perceiving → (Id + Ego)
    auxiliary: 'Si>Fe (Id + Superego)',      // Si introverted perceiving → (Id + Superego)
    tertiary: 'Si>Te (Id + Superego)',       // Si introverted perceiving → (Id + Superego)
    inferior: 'Se>Ti (Id + Ego)',           // Se extraverted perceiving → (Id + Ego)
    opposite: 'INTJ',
    suffix: '',
  },

  // ESTP
  { 
    type: 'ESTP', 
    f4: 'Fight', 
    stack: 'Se>Ti>Fe>Ni', 
    dominant: 'Se>Ti (Id + Ego)',         // Se extraverted perceiving → (Id + Ego)
    auxiliary: 'Si>Te (Id + Superego)',      // Si introverted perceiving → (Id + Superego)
    tertiary: 'Si>Fe (Id + Superego)',       // Si introverted perceiving → (Id + Superego)
    inferior: 'Se>Fi (Id + Ego)',           // Se extraverted perceiving → (Id + Ego)
    opposite: 'INFJ',
    suffix: '',
  },

  // ISTJ
  { 
    type: 'ISTJ', 
    f4: 'Freeze', 
    stack: 'Si>Te>Fi>Ne', 
    dominant: 'Si>Te (Id + Superego)',       // Si introverted perceiving → (Id + Superego)
    auxiliary: 'Se>Ti (Id + Ego)',           // Se extraverted perceiving → (Id + Ego)
    tertiary: 'Se>Fi (Id + Ego)',            // Se extraverted perceiving → (Id + Ego)
    inferior: 'Si>Fe (Id + Superego)',         // Si introverted perceiving → (Id + Superego)
    opposite: 'ENFP',
    suffix: '',
  },

  // INFJ
  { 
    type: 'INFJ', 
    f4: 'Fawn', 
    stack: 'Ni>Fe>Ti>Se', 
    dominant: 'Ni>Fe (Id + Superego)',       // Ni introverted perceiving → (Id + Superego)
    auxiliary: 'Ne>Ti (Id + Ego)',           // Ne extraverted perceiving → (Id + Ego)
    tertiary: 'Ne>Fi (Id + Ego)',            // Ne extraverted perceiving → (Id + Ego)
    inferior: 'Ni>Te (Id + Superego)',        // Ni introverted perceiving → (Id + Superego)
    opposite: 'ESTP',
    suffix: '',
  },

  // ENFP
  { 
    type: 'ENFP', 
    f4: 'Flight', 
    stack: 'Ne>Fi>Te>Si', 
    dominant: 'Ne>Fi (Id + Ego)',           // Ne extraverted perceiving → (Id + Ego)
    auxiliary: 'Ni>Fe (Id + Superego)',       // Ni introverted perceiving → (Id + Superego)
    tertiary: 'Ni>Te (Id + Superego)',        // Ni introverted perceiving → (Id + Superego)
    inferior: 'Ne>Ti (Id + Ego)',            // Ne extraverted perceiving → (Id + Ego)
    opposite: 'ISTJ',
    suffix: '',
  },

  // INTP – now the dominant left function is judging
  { 
    type: 'INTP', 
    f4: 'Fight', 
    stack: 'Ti>Ne>Si>Fe', 
    dominant: 'Ti>Ne (Ego + Id)',           // Ti is introverted judging → (Ego + Id)
    auxiliary: 'Te>Ni (Superego + Id)',       // Te is extraverted judging → (Superego + Id)
    tertiary: 'Te>Si (Superego + Id)',        // Te is extraverted judging → (Superego + Id)
    inferior: 'Ti>Se (Ego + Id)',             // Ti is introverted judging → (Ego + Id)
    opposite: 'ESFJ',
    suffix: '',
  },

  // ENTJ – dominant left function is judging
  { 
    type: 'ENTJ', 
    f4: 'Freeze', 
    stack: 'Te>Ni>Se>Fi', 
    dominant: 'Te>Ni (Superego + Id)',       // Te extraverted judging → (Superego + Id)
    auxiliary: 'Ti>Ne (Ego + Id)',            // Ti introverted judging → (Ego + Id)
    tertiary: 'Ti>Se (Ego + Id)',             // Ti introverted judging → (Ego + Id)
    inferior: 'Te>Si (Superego + Id)',         // Te extraverted judging → (Superego + Id)
    opposite: 'ISFP',
    suffix: '',
  },

  // ESFJ – dominant left function is judging
  { 
    type: 'ESFJ', 
    f4: 'Fawn', 
    stack: 'Fe>Si>Ne>Ti', 
    dominant: 'Fe>Si (Superego + Id)',       // Fe extraverted judging → (Superego + Id)
    auxiliary: 'Fi>Se (Ego + Id)',            // Fi introverted judging → (Ego + Id)
    tertiary: 'Fi>Ne (Ego + Id)',             // Fi introverted judging → (Ego + Id)
    inferior: 'Fe>Ni (Superego + Id)',         // Fe extraverted judging → (Superego + Id)
    opposite: 'INTP',
    suffix: '',
  },

  // ISFP – dominant left function is judging
  { 
    type: 'ISFP', 
    f4: 'Flight', 
    stack: 'Fi>Se>Ni>Te', 
    dominant: 'Fi>Se (Ego + Id)',            // Fi introverted judging → (Ego + Id)
    auxiliary: 'Fe>Ni (Superego + Id)',       // Fe extraverted judging → (Superego + Id)
    tertiary: 'Fe>Ni (Superego + Id)',        // Fe extraverted judging → (Superego + Id)
    inferior: 'Fi>Ne (Ego + Id)',             // Fi introverted judging → (Ego + Id)
    opposite: 'ENTJ',
    suffix: '',
  },

  // ISTP – dominant left function is judging
  { 
    type: 'ISTP', 
    f4: 'Fight', 
    stack: 'Ti>Se>Ni>Fe', 
    dominant: 'Ti>Se (Ego + Id)',            // Ti introverted judging → (Ego + Id)
    auxiliary: 'Te>Si (Superego + Id)',       // Te extraverted judging → (Superego + Id)
    tertiary: 'Te>Ni (Superego + Id)',        // Te extraverted judging → (Superego + Id)
    inferior: 'Ti>Ne (Ego + Id)',             // Ti introverted judging → (Ego + Id)
    opposite: 'ENFJ',
    suffix: '',
  },

  // ESTJ – dominant left function is judging
  { 
    type: 'ESTJ', 
    f4: 'Freeze', 
    stack: 'Te>Si>Ne>Fi', 
    dominant: 'Te>Si (Superego + Id)',       // Te extraverted judging → (Superego + Id)
    auxiliary: 'Ti>Se (Ego + Id)',            // Ti introverted judging → (Ego + Id)
    tertiary: 'Ti>Ne (Ego + Id)',             // Ti introverted judging → (Ego + Id)
    inferior: 'Te>Ni (Superego + Id)',         // Te extraverted judging → (Superego + Id)
    opposite: 'INFP',
    suffix: '',
  },

  // ENFJ – dominant left function is judging
  { 
    type: 'ENFJ', 
    f4: 'Fawn', 
    stack: 'Fe>Ni>Se>Ti', 
    dominant: 'Fe>Ni (Superego + Id)',       // Fe extraverted judging → (Superego + Id)
    auxiliary: 'Fi>Se (Ego + Id)',            // Fi introverted judging → (Ego + Id)
    tertiary: 'Fi>Ne (Ego + Id)',             // Fi introverted judging → (Ego + Id)
    inferior: 'Fe>Si (Superego + Id)',         // Fe extraverted judging → (Superego + Id)
    opposite: 'ISTP',
    suffix: '',
  },

  // INFP – dominant left function is judging
  { 
    type: 'INFP', 
    f4: 'Flight', 
    stack: 'Fi>Ne>Si>Te', 
    dominant: 'Fi>Ne (Ego + Id)',            // Fi introverted judging → (Ego + Id)
    auxiliary: 'Fe>Ni (Superego + Id)',       // Fe extraverted judging → (Superego + Id)
    tertiary: 'Fe>Si (Superego + Id)',        // Fe extraverted judging → (Superego + Id)
    inferior: 'Fi>Se (Ego + Id)',             // Fi introverted judging → (Ego + Id)
    opposite: 'ESTJ',
    suffix: '',
  },
];

