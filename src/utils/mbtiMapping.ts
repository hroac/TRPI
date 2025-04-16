
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
          "openness": 0.8,
          "conscientiousness": 0.50,
          "extraversion": 0.75,
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
          "extraversion": 0.8,
          "agreeableness": 0.4,
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
          "openness": 0.6,
          "conscientiousness": 0.4,
          "extraversion": 0.45,
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
          "extraversion": 0.55,
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
          "openness": 0.4,
          "conscientiousness": 0.6,
          "extraversion": 0.4,
          "agreeableness": 0.4,
          "neuroticism": 0.5
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
          "openness": 0.7,
          "conscientiousness": 0.9,
          "extraversion": 0.75,
          "agreeableness": 0.4,
          "neuroticism": 0.3
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
          "conscientiousness": 0.75,
          "extraversion": 0.65,
          "agreeableness": 0.4,
          "neuroticism": 0.5
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
          "conscientiousness": 0.55,
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
          "conscientiousness": 0.6,
          "extraversion": 0.5,
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
          "openness": 0.5,
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
          "openness": 0.8,
          "conscientiousness": 0.7,
          "extraversion": 0.75,
          "agreeableness": 0.8,
          "neuroticism": 0.5
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
          "conscientiousness": 0.50,
          "extraversion": 0.6,
          "agreeableness": 0.6,
          "neuroticism": 0.45
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
          "openness": 0.8,
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
          "agreeableness": 0.45,
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
          "openness": 0.7,
          "conscientiousness": 0.45,
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

  console.log('Filtered Candidates:', candidates);

  let closestType = '';
  let closestDistance = Infinity;

  candidates.forEach(candidate => {
    const distance = weightedEuclideanDistance(profile, candidate.traits, weights[primary4F]);
    console.log(`Candidate: ${candidate.name}, Distance: ${distance}`);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestType = candidate.name;
    }
  });

  console.log('Closest Type:', closestType, 'Distance:', closestDistance);
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
  const combinedScores = MBTIProfiles.filter(prf => !exclude || !exclude.includes(prf.name)).map((candidate) => {
    // Pearson correlation between the user profile and the candidate traits
    const correlation = pearsonCorrelationBigFive(
      profileArray,
      Object.values(candidate.traits)
    );

    // Weighted Euclidean distance between the user profile and the candidate traits
    const distance = weightedEuclideanDistance(
      profile,
      candidate.traits,
      weights[candidate.mode]
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
  const sortedScores = combinedScores.sort((a, b) => b.score - a.score);
  const bestMatch = sortedScores[0];

  // Step 3: Return the Results
  return {
    type: bestMatch.type, // Best matching MBTI type
    scores: sortedScores.reduce((acc, item) => {
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

export const allStatements = [
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  },
  {
    "text": "I consistently exert effort to attain my objectives.",
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
        "text": "I sometimes plan but don\u2019t always follow through.",
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
    }
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
    }
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
    }
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
    }
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
    }
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
        "text": "I mostly rely on emotions when deciding.",
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
        "text": "I sometimes consider facts, but feelings often guide me.",
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
        "text": "I sometimes don\u2019t mind being noticed.",
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
    }
  },
  {
    "text": "I reliably assert my rights and stand up for myself.",
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
    }
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
    }
  },
  {
    "text": "I consistently take charge in group settings and show leadership confidence.",
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
    }
  },
  {
    "text": "I love engaging in discussions and discussions on various ideas.",
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
        "text": "I sometimes show interest in others\u2019 welfare.",
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
        "text": "I frequently pay attention to others\u2019 well-being.",
        "exclude": [
          "INTP",
          "INTJ"
        ]
      },
      "60-70": {
        "text": "I regularly show care for people\u2019s welfare.",
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
        "text": "I always actively care for and prioritize others\u2019 well-being.",
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
    }
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
    }
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
        "text": "I regularly respect others\u2019 autonomy.",
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
    }
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
    }
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
    }
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
    }
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
    }
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
        "text": "I always make it a priority to support and celebrate my friends\u2019 successes.",
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
    }
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
    }
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
    }
  },
  {
    "text": "I am attuned to others' feelings and actively seek to meet their needs.",
    "trait": "agreeableness",
    "weight": 1,
    "aspect": "Politeness",
    "subtext": {
      "0-10": {
        "text": "I rarely notice others\u2019 feelings.",
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
        "text": "I occasionally become aware of others\u2019 emotions.",
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
        "text": "I sometimes try to be responsive to others\u2019 feelings.",
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
        "text": "I moderately notice and respond to others\u2019 emotions.",
        "exclude": [
          "ISFJ",
          "INFJ",
          "ESFJ",
          "ENFJ"
        ]
      },
      "40-50": {
        "text": "I fairly often make an effort to meet others\u2019 emotional needs.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently pay attention to and act on others\u2019 feelings.",
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
        "text": "I strongly focus on understanding and meeting others\u2019 needs.",
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
        "text": "I am highly aware of others\u2019 emotions and respond accordingly.",
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
    }
  },
  {
    "text": "I strongly value teamwork and cooperative collaboration.",
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
    }
  },
  {
    "text": "I am prone to experiencing irritation quickly.",
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
        "text": "I always get irritated very quickly and intensely.",
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
    }
  },
  {
    "text": "I frequently act on impulse.",
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
    }
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
    }
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
        "text": "I occasionally feel a little frustrated.",
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
    }
  },
  {
    "text": "I frequently experience agitation and restlessness.",
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
    }
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
    }
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
        "text": "I sometimes worry about others\u2019 judgments.",
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
        "text": "I moderately feel self-conscious about others\u2019 views.",
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
    }
  },
  {
    "text": "I often feel overwhelmed when confronted with stress.",
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
    }
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
    }
  },
  {
    "text": "I consistently struggle with feelings of insecurity.",
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
    }
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
    }
  },
  {
    "text": "I typically experience anxiety in high-pressure situations.",
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
        "text": "I occasionally feel mild anxiety in pressure situations.",
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
    }
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
    }
  },
  {
    "text": "I ruminate on past errors and their potential consequences.",
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
        "text": "I fairly often ruminate on past mistakes.",
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
        "text": "I almost always ruminate intensely on past mistakes and potential outcomes.",
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
    }
  },
  {
    "text": "I am prone to overthinking and experiencing unease about uncertain outcomes.",
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
    }
  },
  {
    "text": "I have a deep appreciation for the beauty in art, nature, and innovative ideas.",
    "trait": "openness",
    "weight": 1.3,
    "aspect": "Aesthetic Openness",
    "subtext": {
      "0-10": {
        "text": "I rarely notice beauty around me.",
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
        "text": "I occasionally appreciate beauty in small doses.",
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
        "text": "I sometimes find beauty in art or nature.",
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
        "text": "I moderately appreciate beauty in various forms.",
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
        "text": "I fairly often recognize beauty in art and nature.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently value the beauty found in art, nature, and ideas.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly have a deep appreciation for aesthetic beauty.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly value and seek out artistic beauty.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very sensitive to the beauty in art, nature, and ideas.",
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
        "text": "I have an intense and profound appreciation for aesthetic beauty in all forms.",
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
    }
  },
  {
    "text": "I frequently allow my imagination to flourish.",
    "trait": "openness",
    "weight": 1,
    "aspect": "Aesthetic Openness",
    "subtext": {
      "0-10": {
        "text": "I rarely use my imagination.",
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
        "text": "I occasionally daydream.",
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
        "text": "I sometimes let my mind wander.",
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
        "text": "I moderately enjoy creative daydreaming.",
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
        "text": "I fairly often allow my imagination to run wild.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently engage in imaginative thinking.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly let my creativity flourish.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly enjoy expansive imaginative thinking.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very adept at unleashing my imagination.",
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
        "text": "I have a boundless and vivid imagination at all times.",
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
    }
  },
  {
    "text": "I am profoundly affected by the emotional depth in music and films.",
    "trait": "openness",
    "weight": 1.1,
    "aspect": "Aesthetic Openness",
    "subtext": {
      "0-10": {
        "text": "I am rarely moved by music or movies.",
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
        "text": "I occasionally feel a slight emotional response.",
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
        "text": "I sometimes get mildly moved by art.",
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
        "text": "I moderately feel emotional reactions to music and films.",
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
        "text": "I fairly often experience emotional responses to art.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently feel deeply moved by music and movies.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly experience profound emotions from art.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I am highly sensitive to the emotional qualities of music and films.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very easily moved by emotional artistic experiences.",
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
        "text": "I am deeply and profoundly affected by the emotional power of music and movies.",
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
    }
  },
  {
    "text": "I consistently value rich artistic and aesthetic experiences.",
    "trait": "openness",
    "weight": 1.2,
    "aspect": "Aesthetic Openness",
    "subtext": {
      "0-10": {
        "text": "I do not value artistic experiences much.",
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
        "text": "I occasionally appreciate art and aesthetics.",
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
        "text": "I sometimes enjoy artistic experiences.",
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
        "text": "I moderately value aesthetic experiences.",
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
        "text": "I fairly often seek out artistic encounters.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently appreciate rich artistic experiences.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly prioritize aesthetic experiences in my life.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly value the impact of art and aesthetics.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I consider artistic experiences very important.",
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
        "text": "I deeply value and actively pursue artistic and aesthetic experiences.",
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
    }
  },
  {
    "text": "I actively seek out and enjoy beautiful environments.",
    "trait": "openness",
    "weight": 0.9,
    "aspect": "Aesthetic Openness",
    "subtext": {
      "0-10": {
        "text": "I rarely notice the beauty of my surroundings.",
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
        "text": "I occasionally appreciate a pleasant environment.",
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
        "text": "I sometimes enjoy being in beautiful places.",
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
        "text": "I moderately enjoy spending time in attractive settings.",
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
        "text": "I fairly often seek out environments that are aesthetically pleasing.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently find joy in beautiful surroundings.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly immerse myself in aesthetically pleasing environments.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly value spending time in beautiful settings.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I find great pleasure in being in beautiful places.",
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
        "text": "I always actively seek out and revel in beautiful environments.",
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
    }
  },
  {
    "text": "I possess a keen ability to recognize beauty in unforeseen contexts.",
    "trait": "openness",
    "weight": 1,
    "aspect": "Aesthetic Openness",
    "subtext": {
      "0-10": {
        "text": "I rarely notice beauty in unexpected places.",
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
        "text": "I occasionally spot a touch of beauty unexpectedly.",
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
        "text": "I sometimes notice beauty in unusual contexts.",
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
        "text": "I moderately appreciate unexpected beauty.",
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
        "text": "I fairly often recognize beauty in unanticipated places.",
        "exclude": []
      },
      "50-60": {
        "text": "I frequently discover beauty in the unexpected.",
        "exclude": []
      },
      "60-70": {
        "text": "I regularly find beauty in places others might overlook.",
        "exclude": [
          "ISTJ",
          "ESTJ"
        ]
      },
      "70-80": {
        "text": "I highly value recognizing beauty in ordinary settings.",
        "exclude": [
          "ISTP",
          "ISTJ",
          "ESTJ",
          "ISFJ"
        ]
      },
      "80-90": {
        "text": "I am very adept at seeing beauty in unexpected contexts.",
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
        "text": "I always keenly perceive beauty in the most unforeseen places.",
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
    }
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
    }
  },
  {
    "text": "I often contemplate abstract concepts and explore profound questions.",
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
    }
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
    }
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
    }
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
    }
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
    }
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
  },
];

