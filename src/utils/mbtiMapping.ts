
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
          "conscientiousness": 0.55,
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
          "extraversion": 0.35,
          "agreeableness": 0.35,
          "neuroticism": 0.45
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
          "conscientiousness": 0.8,
          "extraversion": 0.65,
          "agreeableness": 0.3,
          "neuroticism": 0.45
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
          "agreeableness": 0.75,
          "neuroticism": 0.4
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
          "extraversion": 0.8,
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
          "conscientiousness": 0.55,
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
          "openness": 0.55,
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
export const matchMBTI = (profile: Record<any, any>) => {
  const profileArray = Object.values(profile);

  // Step 1: Calculate Scores (Pearson Correlation and Weighted Euclidean Distance)
  const combinedScores = MBTIProfiles.map((candidate) => {
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
export const getSubtext = (trait: string, index: number, value: number) => {
  const statement = statements[index];
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
      "text": "I enjoy pondering abstract ideas.",
      "trait": "openness",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I rarely think about abstract ideas.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally consider abstract ideas.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes enjoy thinking about abstract ideas.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately enjoy pondering abstract concepts.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often think about abstract ideas.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently enjoy pondering abstract ideas.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly think deeply about abstract concepts.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly enjoy exploring abstract ideas.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am extremely interested in abstract ideas.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I am fascinated by abstract and complex ideas.",
              "weight": 1
          }
      },
      "aspect": "Intellect"
  },
  {
      "text": "I like to engage in philosophical discussions.",
      "trait": "openness",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I rarely engage in philosophical discussions.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally participate in such discussions.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes enjoy philosophical discussions.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately like to discuss philosophical topics.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often engage in philosophical discussions.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently enjoy philosophical discussions.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly seek out philosophical discussions.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly enjoy debating philosophical ideas.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very interested in philosophical discussions.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I am passionate about engaging in philosophical discussions.",
              "weight": 1
          }
      },
      "aspect": "Intellect"
  },
  {
      "text": "I enjoy trying new and unusual things.",
      "trait": "openness",
      "weight": 0.9,
      "subtext": {
          "0-10": {
              "text": "I rarely try new things.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally try something new.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes enjoy trying new things.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately like to try new experiences.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often try new and unusual things.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently seek out new experiences.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly try novel and different things.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly enjoy experimenting with new activities.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very open to trying unusual things.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I am always eager to try new and unusual things.",
              "weight": 1
          }
      },
      "aspect": "Intellect"
  },
  {
      "text": "I am curious about different cultures and ways of life.",
      "trait": "openness",
      "weight": 1.2,
      "subtext": {
          "0-10": {
              "text": "I have little interest in other cultures.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I am slightly curious about different cultures.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes wonder about other ways of life.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I am moderately curious about different cultures.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often think about different cultures.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I am frequently curious about other cultures.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly seek information about different cultures.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly interested in different cultures.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very curious about diverse ways of life.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I am deeply fascinated by different cultures and lifestyles.",
              "weight": 1
          }
      },
      "aspect": "Intellect"
  },
  {
      "text": "I enjoy learning about new subjects and expanding my knowledge.",
      "trait": "openness",
      "weight": 1.3,
      "subtext": {
          "0-10": {
              "text": "I rarely seek new knowledge.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally learn something new.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes enjoy learning new things.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately like to expand my knowledge.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often learn about new subjects.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently enjoy learning and expanding my knowledge.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly seek opportunities to learn new things.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly interested in expanding my knowledge.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very eager to learn about new subjects.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I have a strong passion for learning and expanding my mind.",
              "weight": 1
          }
      },
      "aspect": "Intellect"
  },
  {
      "text": "I am open to changing my opinions based on new information.",
      "trait": "openness",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I rarely change my opinions.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally reconsider my views.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes change my mind based on new facts.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I am moderately open to revising my opinions.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often reconsider my views when presented with new information.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently change my opinions when new information arises.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly update my views based on new evidence.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly willing to change my opinions.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very open to revising my beliefs.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I readily change my opinions in light of new information.",
              "weight": 1
          }
      },
      "aspect": "Intellect"
  },
  {
      "text": "I work hard to achieve my goals.",
      "trait": "conscientiousness",
      "weight": 1.2,
      "subtext": {
          "0-10": {
              "text": "I rarely work hard on my goals.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally put effort into my goals.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes work hard on my goals.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately work towards my goals.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often work hard to achieve my goals.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently work hard to reach my objectives.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly put in a lot of effort to achieve my goals.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly prioritize working hard on my goals.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very dedicated to working hard for my goals.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always work extremely hard to achieve my goals.",
              "weight": 1
          }
      },
      "aspect": "Industriousness"
  },
  {
      "text": "I feel capable and competent in my abilities.",
      "trait": "conscientiousness",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I rarely feel capable.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally feel competent.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes feel capable in certain areas.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately feel competent in my abilities.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often feel capable and competent.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently feel confident in my abilities.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly feel capable and competent in what I do.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I have a strong sense of my own competence.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very confident in my abilities.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I have a very strong sense of capability and competence.",
              "weight": 1
          }
      },
      "aspect": "Industriousness"
  },
  {
      "text": "I am good at resisting temptation.",
      "trait": "conscientiousness",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I often give in to temptation.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally resist temptation.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes manage to resist temptation.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I am moderately good at resisting temptation.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often resist temptations.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently manage to resist temptation.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly resist impulses and temptations.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly capable of resisting temptation.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very good at controlling my impulses.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I have a very strong ability to resist temptation.",
              "weight": 1
          }
      },
      "aspect": "Industriousness"
  },
  {
      "text": "I think carefully before acting.",
      "trait": "conscientiousness",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I rarely think before acting.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally think briefly before acting.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes think before I act.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately think before making decisions.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often think carefully before acting.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently consider my actions beforehand.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly think things through before acting.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly deliberate in my actions.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very thoughtful before I act.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always think very carefully before taking any action.",
              "weight": 1
          }
      },
      "aspect": "Industriousness"
  },
  {
      "text": "I am efficient and make good use of my time.",
      "trait": "conscientiousness",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I am rarely efficient with my time.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally use my time efficiently.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes manage my time well.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I am moderately efficient in using my time.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often make good use of my time.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently work efficiently.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly use my time effectively.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly efficient in managing my time.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very good at using my time wisely.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always use my time with maximum efficiency.",
              "weight": 1
          }
      },
      "aspect": "Industriousness"
  },
  {
      "text": "I like to have things neat and tidy.",
      "trait": "conscientiousness",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I don't mind things being messy.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally tidy up.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes like things to be neat.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately prefer a tidy environment.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often like things to be neat and tidy.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently keep my surroundings tidy.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly ensure things are neat and in order.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly value having a neat and tidy space.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very particular about things being tidy.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always ensure everything is perfectly neat and tidy.",
              "weight": 1
          }
      },
      "aspect": "Orderliness"
  },
  {
      "text": "I pay attention to details.",
      "trait": "conscientiousness",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I often overlook details.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally notice details.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes pay attention to details.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately pay attention to details.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often notice important details.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently pay close attention to details.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly focus on even small details.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly detail-oriented.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very meticulous about details.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always pay very close attention to every detail.",
              "weight": 1
          }
      },
      "aspect": "Orderliness"
  },
  {
      "text": "I follow rules and regulations.",
      "trait": "conscientiousness",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I often disregard rules.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally follow rules.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes adhere to rules and regulations.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately follow rules.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often follow rules and guidelines.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently abide by rules and regulations.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly follow established rules.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly respect and follow rules.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very careful to follow all rules.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always strictly adhere to rules and regulations.",
              "weight": 1
          }
      },
      "aspect": "Orderliness"
  },
  {
      "text": "I like to make plans and stick to them.",
      "trait": "conscientiousness",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I rarely make plans.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally make loose plans.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes make plans but don't always stick to them.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately like to plan things.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often make plans and try to follow them.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently make detailed plans and stick to them.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly plan ahead and follow my plans.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly value having and sticking to plans.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very committed to following my plans.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always make detailed plans and strictly adhere to them.",
              "weight": 1
          }
      },
      "aspect": "Orderliness"
  },
  {
      "text": "I like to have a schedule and routine.",
      "trait": "conscientiousness",
      "weight": 0.9,
      "subtext": {
          "0-10": {
              "text": "I prefer spontaneity over routine.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally follow a loose schedule.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes like having a general routine.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately prefer having a schedule.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often follow a schedule and routine.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently rely on a schedule for my day.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly maintain a structured schedule.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly value having a consistent routine.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very reliant on my schedule.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always adhere strictly to my schedule and routine.",
              "weight": 1
          }
      },
      "aspect": "Orderliness"
  },
  {
      "text": "I stay focused and organized when managing multiple tasks.",
      "trait": "conscientiousness",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I rarely stay focused or organized when handling tasks.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally try to stay organized but struggle to maintain focus.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes stay organized when managing tasks.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately focus on staying organized and managing tasks effectively.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often stay organized and focused while managing tasks.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently stay on top of tasks through focus and organization.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly stay focused and manage tasks in an organized manner.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly focus on staying organized when handling multiple tasks.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly organized and focused when managing multiple priorities.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always stay focused and highly organized when managing tasks.",
              "weight": 1
          }
      }
  },
  {
      "text": "I prefer organized, planned activities over spontaneous events.",
      "trait": "conscientiousness",
      "weight": 0.9,
      "subtext": {
          "0-10": {
              "text": "I rarely prefer organized activities and enjoy spontaneity.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally enjoy planned activities but like being spontaneous.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes prefer organized activities over spontaneous ones.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately enjoy planned activities.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often prefer organized and structured events.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently choose planned activities over spontaneous ones.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly prefer organized, planned events.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly favor structured and well-planned activities.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly inclined to choose organized events over spontaneous ones.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I exclusively prefer meticulously organized and planned activities.",
              "weight": 1
          }
      }
  },
  {
      "text": "I feel a strong responsibility to meet my goals and commitments.",
      "trait": "conscientiousness",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I rarely feel responsible for meeting my goals or commitments.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally take responsibility for meeting my goals.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes feel committed to fulfilling my goals.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately feel responsible for achieving my goals.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often feel a strong responsibility to meet commitments.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently ensure I meet my goals and commitments.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly feel accountable for achieving my goals.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly feel responsible for meeting my commitments.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly dedicated to fulfilling my goals and responsibilities.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always feel a deep responsibility to achieve my goals.",
              "weight": 1
          }
      }
  },
  {
      "text": "I tend to make decisions based on facts rather than feelings.",
      "trait": "conscientiousness",
      "weight": 1.3,
      "subtext": {
          "0-10": {
              "text": "I almost always make decisions based on my feelings, rarely relying on facts.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I mostly decide using my emotions, with little consideration for facts.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes consider facts, but my feelings usually guide my choices.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I occasionally let facts influence my decisions, though feelings tend to dominate.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I try to balance facts and feelings when making decisions.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I usually lean toward basing my decisions on facts, even though emotions still play a role.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I frequently base my decisions on facts rather than on my feelings.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I consistently prioritize facts in my decision-making, with minimal influence from emotions.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I almost always rely on facts when making decisions, rarely letting feelings interfere.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always base my decisions on facts, completely setting aside my feelings.",
              "weight": 1
          }
      }
  },
  {
      "text": "I am detail-oriented and take time to think through tasks carefully.",
      "trait": "conscientiousness",
      "weight": 0.9,
      "subtext": {
          "0-10": {
              "text": "I rarely pay attention to details or think through tasks.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally take time to think about tasks in detail.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes focus on details when completing tasks.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately pay attention to details.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often think through tasks carefully.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently focus on details and think through tasks.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly take time to focus on details.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly focus on details and think carefully about tasks.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly detail-oriented and thorough with tasks.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always focus on details and think through tasks thoroughly.",
              "weight": 1
          }
      }
  },
  {
      "text": "I enjoy being around large groups of people.",
      "trait": "extraversion",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I prefer being alone or with a few close friends.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally don't mind being in a crowd.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes enjoy being in large groups.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately enjoy social gatherings.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often enjoy being around many people.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently seek out social situations with large groups.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly enjoy and feel energized by large gatherings.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly enjoy being in the company of many people.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very comfortable and happy in large groups.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always feel energized and happy when surrounded by many people.",
              "weight": 1
          }
      },
      "aspect": "Enthusiasm"
  },
  {
      "text": "I often feel cheerful and optimistic.",
      "trait": "extraversion",
      "weight": 1.2,
      "subtext": {
          "0-10": {
              "text": "I rarely feel cheerful or optimistic.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally feel a bit cheerful.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes feel optimistic about things.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately feel cheerful and hopeful.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often feel cheerful and optimistic.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently feel positive and upbeat.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly have a cheerful and optimistic outlook.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly often in a good mood.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very consistently cheerful and optimistic.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always feel cheerful, positive, and optimistic.",
              "weight": 1
          }
      },
      "aspect": "Enthusiasm"
  },
  {
      "text": "I find it easy to make new friends.",
      "trait": "extraversion",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I find it difficult to make new friends.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally make a new acquaintance.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes find it easy to make new friends.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately find it easy to connect with new people.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often make new friends without much effort.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently find it easy to form new friendships.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly connect with new people and make friends.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly skilled at making new friends.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very good at forming new friendships.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always find it very easy and natural to make new friends.",
              "weight": 1
          }
      },
      "aspect": "Enthusiasm"
  },
  {
      "text": "I am a warm and friendly person.",
      "trait": "extraversion",
      "weight": 1.3,
      "subtext": {
          "0-10": {
              "text": "I am often perceived as cold or distant.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I am occasionally friendly.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes try to be warm and friendly.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I am moderately warm and approachable.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often act warm and friendly towards others.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently display warmth and friendliness.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly show warmth and am considered friendly.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly regarded as a warm and friendly person.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very consistently warm and friendly in my interactions.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I am always warm, friendly, and approachable.",
              "weight": 1
          }
      },
      "aspect": "Enthusiasm"
  },
  {
      "text": "I enjoy parties and social gatherings.",
      "trait": "extraversion",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I generally avoid parties and social gatherings.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally attend social events out of obligation.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes enjoy parties and gatherings.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately enjoy social events.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often enjoy going to parties and gatherings.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently attend and enjoy social events.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly seek out parties and social gatherings.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly enjoy and feel energized by parties.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very enthusiastic about attending social events.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always look forward to and thoroughly enjoy parties and social gatherings.",
              "weight": 1
          }
      },
      "aspect": "Enthusiasm"
  },
  {
      "text": "I often take the lead in group activities.",
      "trait": "extraversion",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I rarely take the lead in groups.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally contribute but don't lead.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes take initiative in group settings.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately take the lead when necessary.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often step up to lead group activities.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently take charge in group situations.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly assume a leadership role in groups.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly enjoy taking the lead.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very comfortable being in charge.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always naturally take the lead in group activities.",
              "weight": 1
          }
      },
      "aspect": "Assertiveness"
  },
  {
      "text": "I am comfortable expressing my opinions.",
      "trait": "extraversion",
      "weight": 1.2,
      "subtext": {
          "0-10": {
              "text": "I rarely express my opinions.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally share my views if asked.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes feel comfortable expressing my opinions.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately share my opinions.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often express my opinions openly.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently voice my opinions and ideas.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly and confidently express my opinions.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly comfortable expressing what I think.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very outspoken and share my opinions freely.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always feel very comfortable and readily express my opinions.",
              "weight": 1
          }
      },
      "aspect": "Assertiveness"
  },
  {
      "text": "I enjoy being active and on the go.",
      "trait": "extraversion",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I prefer a slower pace and less activity.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally engage in physical activity.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes enjoy being active.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately enjoy being active and busy.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often seek out active pursuits.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently enjoy being on the move and active.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly engage in activities and stay busy.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly enjoy a fast-paced and active lifestyle.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very energetic and enjoy being active.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always feel best when I am active and on the go.",
              "weight": 1
          }
      },
      "aspect": "Assertiveness"
  },
  {
      "text": "I don't mind being the center of attention.",
      "trait": "extraversion",
      "weight": 0.9,
      "subtext": {
          "0-10": {
              "text": "I strongly dislike being the center of attention.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally find myself in the spotlight but don't enjoy it.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes don't mind being the center of attention.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately feel comfortable with attention.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often don't mind being noticed.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently feel comfortable being the center of attention.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly find myself in the spotlight and don't mind it.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly enjoy being the center of attention.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very comfortable and enjoy being the focus of attention.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always enjoy and seek out being the center of attention.",
              "weight": 1
          }
      },
      "aspect": "Assertiveness"
  },
  {
      "text": "I am assertive and stand up for myself.",
      "trait": "extraversion",
      "weight": 1.3,
      "subtext": {
          "0-10": {
              "text": "I rarely stand up for myself.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally try to be assertive.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes stand up for my beliefs.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I am moderately assertive when necessary.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often assert myself in situations.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently stand up for my rights and opinions.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly act assertively when needed.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly assertive and confident in standing up for myself.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very assertive and direct in my communication.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always act assertively and confidently in all situations.",
              "weight": 1
          }
      },
      "aspect": "Assertiveness"
  },
  {
      "text": "I feel energized by engaging with new people and building connections.",
      "trait": "extraversion",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I rarely feel energized by meeting new people.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally enjoy meeting new people but prefer to keep to myself.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes feel energized by engaging with new people.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately enjoy meeting new people and making connections.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often feel energized by social interactions.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently enjoy meeting new people and forming connections.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly feel energized by engaging with new people.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly enjoy building connections with new people.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly energized by meeting and connecting with others.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always feel invigorated by engaging with new people and building connections.",
              "weight": 1
          }
      }
  },
  {
      "text": "I often take charge in group settings and feel confident in leadership roles.",
      "trait": "extraversion",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I rarely take charge in groups and avoid leadership roles.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally take charge but prefer to follow in group settings.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes feel comfortable taking charge in group settings.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately enjoy taking charge and leading in group settings.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often feel confident leading in group settings.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently take charge and feel comfortable leading.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly feel confident and effective in leadership roles.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly enjoy leading and taking charge in group settings.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly confident and capable in leadership roles.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I thrive on taking charge and feel fully confident in leadership roles.",
              "weight": 1
          }
      }
  },
  {
      "text": "I enjoy discussing ideas and debating with others.",
      "trait": "extraversion",
      "weight": 0.9,
      "subtext": {
          "0-10": {
              "text": "I rarely enjoy discussing ideas or debating with others.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally engage in discussions but avoid debates.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes enjoy discussing ideas with others.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately enjoy debating and discussing topics.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often engage in debates and discussions.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently enjoy sharing ideas and debating with others.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly discuss and debate ideas enthusiastically.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly enjoy sharing ideas and engaging in debates.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly energized by discussing and debating ideas.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always thrive on discussing ideas with others.",
              "weight": 1
          }
      }
  },
  {
      "text": "I tend to stay calm and assertive when solving problems.",
      "trait": "extraversion",
      "weight": 1.3,
      "subtext": {
          "0-10": {
              "text": "I rarely stay calm or assertive when facing problems.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally remain calm but struggle with assertiveness.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes stay calm and assertive in difficult situations.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately stay calm and focused under pressure.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often stay calm and assertive when solving problems.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently stay calm and assertive under stress.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly remain calm and focused when solving problems.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly stay composed and assertive when faced with problems.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly calm and assertive under pressure.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always stay calm, composed, and assertive when facing problems.",
              "weight": 1
          }
      }
  },
  {
      "text": "I’m known for being bold and independent in my approach to problems.",
      "trait": "extraversion",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I rarely act independently or boldly when solving problems.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally act independently but rarely take bold steps.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes approach problems boldly and independently.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately act boldly and independently in problem-solving.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often show independence and boldness.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently solve problems independently and boldly.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly take bold and independent approaches to problems.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly demonstrate boldness and independence.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly bold and independent in my approach to challenges.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always act boldly and independently when solving problems.",
              "weight": 1
          }
      }
  },
  {
      "text": "I feel sympathy for those who are less fortunate.",
      "trait": "agreeableness",
      "weight": 1.2,
      "subtext": {
          "0-10": {
              "text": "I rarely feel sympathy for others.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally feel a little sympathy.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes feel bad for those less fortunate.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately feel sympathy for others' struggles.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often feel sympathy for those in need.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently feel compassion for those less fortunate.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly feel sympathy for people facing hardship.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly feel compassion for those less fortunate.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very empathetic towards those struggling.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always feel deep sympathy for those who are less fortunate.",
              "weight": 1
          }
      },
      "aspect": "Compassion"
  },
  {
      "text": "I enjoy helping others.",
      "trait": "agreeableness",
      "weight": 1.3,
      "subtext": {
          "0-10": {
              "text": "I rarely go out of my way to help others.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally help if it's convenient.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes enjoy helping people out.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately enjoy assisting others.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often offer help to those in need.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently enjoy helping others.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly look for opportunities to help people.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly enjoy being helpful to others.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very willing to help people.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always enjoy helping others and will go out of my way to do so.",
              "weight": 1
          }
      },
      "aspect": "Compassion"
  },
  {
      "text": "I tend to trust people.",
      "trait": "agreeableness",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I am generally suspicious of people.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally trust someone after getting to know them.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes tend to trust people initially.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately tend to trust others.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often trust people until they give me a reason not to.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently tend to trust people.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly give people the benefit of the doubt.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly tend to trust others.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very trusting of people.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always tend to trust people.",
              "weight": 1
          }
      },
      "aspect": "Compassion"
  },
  {
      "text": "I am interested in the well-being of others.",
      "trait": "agreeableness",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I am rarely concerned about others' well-being.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally think about how others are doing.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes wonder about the well-being of people I know.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I am moderately interested in others' well-being.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often think about the well-being of those around me.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently show interest in the well-being of others.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly inquire about the well-being of people I care about.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly interested in the well-being of others.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very concerned about the well-being of people.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always prioritize the well-being of others.",
              "weight": 1
          }
      },
      "aspect": "Compassion"
  },
  {
      "text": "I try to be kind to everyone I meet.",
      "trait": "agreeableness",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I am not always kind to everyone.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally try to be polite.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes make an effort to be kind.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately try to be kind to people.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often try to be kind in my interactions.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently aim to be kind to everyone.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly make an effort to be kind in all my interactions.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly value being kind to others.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very intentional about being kind.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always strive to be kind and considerate to everyone I meet.",
              "weight": 1
          }
      },
      "aspect": "Compassion"
  },
  {
      "text": "I avoid imposing my will on others.",
      "trait": "agreeableness",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I often try to get my way.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally try to influence others.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes try to persuade others to my point of view.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately avoid forcing my opinions on others.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often let others make their own choices.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently avoid imposing my will on others.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly respect others' autonomy.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly value letting others make their own decisions.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very careful not to impose my will on others.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always avoid imposing my will and respect others' choices completely.",
              "weight": 1
          }
      },
      "aspect": "Politeness"
  },
  {
      "text": "I am generally modest about my achievements.",
      "trait": "agreeableness",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I often boast about my achievements.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally talk about my successes.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes mention my achievements.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I am moderately modest about my accomplishments.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often downplay my achievements.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently am modest about my successes.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly avoid bragging about my achievements.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly value humility regarding my achievements.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very modest about what I have accomplished.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I am always very modest and humble about my achievements.",
              "weight": 1
          }
      },
      "aspect": "Politeness"
  },
  {
      "text": "I try to be straightforward and honest in my communication.",
      "trait": "agreeableness",
      "weight": 1.2,
      "subtext": {
          "0-10": {
              "text": "I am not always straightforward in my communication.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally am direct when speaking.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes try to be honest in what I say.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately try to be straightforward.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often communicate directly and honestly.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently try to be straightforward and honest.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly communicate in a direct and honest manner.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly value honesty and straightforwardness.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very committed to being straightforward and honest.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always strive to be completely straightforward and honest in my communication.",
              "weight": 1
          }
      },
      "aspect": "Politeness"
  },
  {
      "text": "I am respectful of authority.",
      "trait": "agreeableness",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I often question authority.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally show respect for authority.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes try to be respectful of authority figures.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I am moderately respectful of authority.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often show respect for those in authority.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently am respectful of authority.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly show deference to authority figures.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly value respecting authority.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very respectful of people in positions of authority.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always show great respect for authority.",
              "weight": 1
          }
      },
      "aspect": "Politeness"
  },
  {
      "text": "I tend to avoid confrontation.",
      "trait": "agreeableness",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I often engage in confrontations.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally stand my ground in disagreements.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes try to avoid arguments.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately try to avoid confrontations.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often try to smooth things over in disagreements.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently avoid confrontational situations.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly try to find peaceful resolutions.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly value avoiding confrontation.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very averse to confrontational situations.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always try to avoid any form of confrontation.",
              "weight": 1
          }
      },
      "aspect": "Politeness"
  },
  {
      "text": "I enjoy supporting my friends and helping them succeed.",
      "trait": "agreeableness",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I rarely enjoy helping or supporting my friends.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally help friends but don’t enjoy it much.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes support my friends and their goals.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately enjoy supporting and helping friends.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often support my friends and enjoy their success.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently enjoy helping my friends succeed.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly support and enjoy helping my friends.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly enjoy supporting and encouraging friends.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly focused on supporting my friends and their goals.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always prioritize supporting my friends and celebrating their successes.",
              "weight": 1
          }
      }
  },
  {
      "text": "I often prioritize harmony and avoid conflict in my relationships.",
      "trait": "agreeableness",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I rarely prioritize harmony and may engage in conflicts.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally try to avoid conflict but don’t always prioritize harmony.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes try to maintain harmony in my relationships.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately prioritize harmony and avoid conflicts when possible.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often strive to maintain harmony in my relationships.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently avoid conflict and prioritize harmonious relationships.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly make efforts to maintain harmony and avoid disagreements.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly prioritize harmony in my relationships.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly committed to avoiding conflicts and fostering harmony.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always prioritize harmony and work tirelessly to avoid conflicts.",
              "weight": 1
          }
      }
  },
  {
      "text": "I strive to be understanding and supportive towards others.",
      "trait": "agreeableness",
      "weight": 1.2,
      "subtext": {
          "0-10": {
              "text": "I rarely try to understand or support others.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally make an effort to be supportive.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes try to understand and support others.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately strive to show understanding.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often make an effort to be supportive.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently try to understand and support others.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly strive to show understanding and support.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly strive to be understanding and supportive.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly focused on understanding and supporting others.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always prioritize being understanding and supportive.",
              "weight": 1
          }
      }
  },
  {
      "text": "I’m sensitive to other people’s feelings and try to meet their needs.",
      "trait": "agreeableness",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I rarely notice or care about others’ feelings.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally pay attention to others’ feelings.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes try to be sensitive to others’ needs.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately notice and respond to others’ feelings.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often try to meet others’ emotional needs.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently notice and respond to others’ feelings.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly make an effort to meet others’ needs.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly focus on being sensitive and supportive.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly aware of others’ emotions and try to meet their needs.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always prioritize being sensitive and supportive to others.",
              "weight": 1
          }
      }
  },
  {
      "text": "I prefer to work as part of a team and value cooperation.",
      "trait": "agreeableness",
      "weight": 0.9,
      "subtext": {
          "0-10": {
              "text": "I rarely value cooperation or enjoy working in a team.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally work in teams but don’t always value cooperation.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes prefer working as part of a team.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately value cooperation and teamwork.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often enjoy working in teams and value cooperation.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently prefer teamwork and cooperative efforts.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly work well in teams and value cooperation.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly prefer teamwork and emphasize cooperation.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly inclined to work as part of a team and value cooperation.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always value teamwork and prioritize cooperation in group settings.",
              "weight": 1
          }
      }
  },
  {
      "text": "I often get irritated easily.",
      "trait": "neuroticism",
      "weight": 1.2,
      "subtext": {
          "0-10": {
              "text": "I rarely get irritated.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally get a little annoyed.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes find myself getting irritated.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately get irritated by small things.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often find myself getting easily irritated.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently get irritated by minor things.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly find myself feeling irritated.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly prone to getting irritated easily.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very easily irritated by small things.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always get irritated very easily.",
              "weight": 1
          }
      },
      "aspect": "Volatility"
  },
  {
      "text": "I tend to act impulsively.",
      "trait": "neuroticism",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I rarely act without thinking.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally act on a whim.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes act without fully thinking things through.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately act impulsively at times.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often act on impulse.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently act impulsively without much thought.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly act on sudden urges.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly prone to acting impulsively.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very impulsive in my actions.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always tend to act very impulsively.",
              "weight": 1
          }
      },
      "aspect": "Volatility"
  },
  {
      "text": "I often feel anxious.",
      "trait": "neuroticism",
      "weight": 1.3,
      "subtext": {
          "0-10": {
              "text": "I rarely feel anxious.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally feel a bit nervous.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes feel anxious about things.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately feel anxious at times.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often feel anxious or worried.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently feel anxious.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly experience feelings of anxiety.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly prone to feeling anxious.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very often anxious.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always seem to feel anxious.",
              "weight": 1
          }
      },
      "aspect": "Volatility"
  },
  {
      "text": "I have a quick temper.",
      "trait": "neuroticism",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I rarely get angry.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally get a little frustrated.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes find myself getting angry.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately have a quick temper.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often get angry quickly.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently lose my temper easily.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly find myself getting angry quickly.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly prone to having a quick temper.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I have a very quick temper.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always tend to get angry very quickly.",
              "weight": 1
          }
      },
      "aspect": "Volatility"
  },
  {
      "text": "I often feel agitated or restless.",
      "trait": "neuroticism",
      "weight": 0.9,
      "subtext": {
          "0-10": {
              "text": "I rarely feel agitated or restless.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally feel a bit restless.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes feel agitated.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately feel restless at times.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often feel agitated or restless.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently feel on edge or restless.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly experience feelings of agitation.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly prone to feeling agitated or restless.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I very often feel restless and on edge.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always seem to feel agitated or restless.",
              "weight": 1
          }
      },
      "aspect": "Volatility"
  },
  {
      "text": "I often feel sad or down.",
      "trait": "neuroticism",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I rarely feel sad.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally feel a bit down.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes feel sad or blue.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately feel down at times.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often feel sad or down.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently feel unhappy or sad.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly experience feelings of sadness.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly prone to feeling sad or down.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I very often feel sad.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always seem to feel sad or down.",
              "weight": 1
          }
      },
      "aspect": "Withdrawal"
  },
  {
      "text": "I am often worried about what others think of me.",
      "trait": "neuroticism",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I rarely worry about others' opinions.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally think about what others might think.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes worry about others' judgments.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately worry about others' opinions of me.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often worry about what others think.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently worry about others' perceptions of me.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly feel self-conscious about others' opinions.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly concerned about what others think of me.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I very often worry about others' judgments.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I am always worried about what others think of me.",
              "weight": 1
          }
      },
      "aspect": "Withdrawal"
  },
  {
      "text": "I feel easily overwhelmed by stress.",
      "trait": "neuroticism",
      "weight": 1.2,
      "subtext": {
          "0-10": {
              "text": "I rarely feel overwhelmed by stress.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally feel a bit stressed.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes feel overwhelmed when things get tough.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately feel overwhelmed under pressure.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often feel easily overwhelmed by stress.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently feel overwhelmed when facing challenges.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly feel overwhelmed by stressful situations.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly prone to feeling overwhelmed by stress.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I very easily get overwhelmed by stressful situations.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always feel very easily overwhelmed by stress.",
              "weight": 1
          }
      },
      "aspect": "Withdrawal"
  },
  {
      "text": "I tend to blame myself when things go wrong.",
      "trait": "neuroticism",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I rarely blame myself.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally wonder if I could have done things differently.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes blame myself when things don't go as planned.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately tend to blame myself.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often blame myself when things go wrong.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently take personal responsibility for negative outcomes.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly find myself blaming myself when things don't work out.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I have a strong tendency to blame myself.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I very often blame myself when things go wrong.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always tend to blame myself when things go wrong.",
              "weight": 1
          }
      },
      "aspect": "Withdrawal"
  },
  {
      "text": "I often feel insecure about myself.",
      "trait": "neuroticism",
      "weight": 0.9,
      "subtext": {
          "0-10": {
              "text": "I rarely feel insecure.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally feel a bit unsure of myself.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes feel insecure about my abilities.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately feel insecure at times.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often feel insecure about myself.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently feel insecure about my worth.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly experience feelings of insecurity.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly prone to feeling insecure.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I very often feel insecure about myself.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always seem to feel insecure.",
              "weight": 1
          }
      },
      "aspect": "Withdrawal"
  },
  {
      "text": "I often feel overwhelmed when dealing with multiple responsibilities at once.",
      "trait": "neuroticism",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I rarely feel overwhelmed by multiple responsibilities at once.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally feel overwhelmed but manage well.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes feel overwhelmed with multiple responsibilities.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately feel overwhelmed under pressure.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often feel overwhelmed by multiple responsibilities.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently feel overwhelmed when managing tasks.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly feel overwhelmed with multiple responsibilities at once.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly feel overwhelmed when under pressure.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly prone to feeling overwhelmed by multiple responsibilities at once.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always feel deeply overwhelmed when managing many tasks.",
              "weight": 1
          }
      }
  },
  {
      "text": "I tend to feel anxious or worried in stressful situations.",
      "trait": "neuroticism",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I rarely feel anxious or worried, even in stressful situations.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally feel mild anxiety in stress-inducing situations.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes feel worried or anxious under stress.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately experience anxiety in stressful scenarios.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often feel worried when faced with stress.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently feel anxious during stressful situations.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly experience worry or anxiety in stressful circumstances.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly feel anxious and worried in stressful situations.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly prone to anxiety and worry under stress.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I almost always feel deeply anxious or worried in stressful situations.",
              "weight": 1
          }
      }
  },
  {
      "text": "I often feel uneasy or second-guess myself when making decisions.",
      "trait": "neuroticism",
      "weight": 0.9,
      "subtext": {
          "0-10": {
              "text": "I rarely feel uneasy or second-guess my decisions.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally second-guess myself when deciding.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes feel unsure when making decisions.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately feel uneasy when deciding.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often second-guess my decisions.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently feel uneasy when making decisions.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly second-guess myself when deciding.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly feel uneasy about making decisions.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly prone to second-guessing myself.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I almost always feel uneasy and second-guess my decisions.",
              "weight": 1
          }
      }
  },
  {
      "text": "I often dwell on past mistakes and think about possible outcomes.",
      "trait": "neuroticism",
      "weight": 0.95,
      "subtext": {
          "0-10": {
              "text": "I rarely think about past mistakes or think about the possible outcomes.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally reflect on past mistakes and consider possible outcomes.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes dwell on mistakes and worry about outcomes.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately worry about past and possible outcomes.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often dwell on past mistakes and outcomes.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently reflect on past mistakes and worry about outcomes.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly dwell on mistakes and stress about what could have happened.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly focus on past mistakes and worry about what could have happened.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly prone to dwelling on past mistakes and worries.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I almost always dwell on the past and stress about what could have happened.",
              "weight": 1
          }
      }
  },
  {
      "text": "I tend to overthink situations and feel uneasy about the unknown.",
      "trait": "neuroticism",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I rarely overthink or feel uneasy about the unknown.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally feel uneasy when faced with the unknown.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes overthink and feel uneasy about uncertainty.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately overthink situations and feel uneasy about the unknown.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often feel uneasy about uncertain situations.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently overthink and feel uneasy about uncertainty.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly overthink situations and stress about the unknown.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly feel uneasy and overthink unknown scenarios.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly prone to overthinking and feeling uneasy about the unknown.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always overthink situations and feel deeply uneasy about uncertainty.",
              "weight": 1
          }
      }
  },
  {
      "text": "I appreciate beauty in art, nature, and ideas.",
      "trait": "openness",
      "weight": 1.3,
      "subtext": {
          "0-10": {
              "text": "I rarely notice beauty around me.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally appreciate beauty.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes find beauty in things.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately appreciate beauty in various forms.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often notice beauty in art and nature.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently appreciate beauty in different aspects of life.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly notice and appreciate beauty.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly value beauty in art, nature, and ideas.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very sensitive to beauty in my surroundings.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I have a deep appreciation for beauty in all its forms.",
              "weight": 1
          }
      },
      "aspect": "Aesthetic Openness"
  },
  {
      "text": "I enjoy letting my imagination run wild.",
      "trait": "openness",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I rarely use my imagination.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally daydream.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes let my imagination wander.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately enjoy using my imagination.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often let my imagination run wild.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently enjoy using my imagination.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly engage in imaginative thinking.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly enjoy letting my imagination soar.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I have a very vivid imagination.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I have a boundless and active imagination.",
              "weight": 1
          }
      },
      "aspect": "Aesthetic Openness"
  },
  {
      "text": "I am often moved by emotional experiences in music and movies.",
      "trait": "openness",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I am rarely moved by music or movies.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally feel touched by emotional scenes.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes get emotional during movies or music.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I am moderately moved by emotional content.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often feel emotional during music and movies.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently get moved by emotional experiences.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly feel strong emotions when listening to music or watching movies.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly sensitive to emotional content in art.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very easily moved by emotional experiences.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I am deeply and profoundly moved by emotional experiences in art.",
              "weight": 1
          }
      },
      "aspect": "Aesthetic Openness"
  },
  {
      "text": "I value artistic and aesthetic experiences.",
      "trait": "openness",
      "weight": 1.2,
      "subtext": {
          "0-10": {
              "text": "I do not value artistic experiences much.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally appreciate artistic things.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes value aesthetic experiences.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately value artistic and aesthetic experiences.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often seek out artistic experiences.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently value and appreciate artistic experiences.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly prioritize artistic and aesthetic experiences.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly value artistic and aesthetic experiences.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I consider artistic experiences to be very important.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I deeply value and prioritize artistic and aesthetic experiences in my life.",
              "weight": 1
          }
      },
      "aspect": "Aesthetic Openness"
  },
  {
      "text": "I enjoy spending time in beautiful environments.",
      "trait": "openness",
      "weight": 0.9,
      "subtext": {
          "0-10": {
              "text": "I rarely pay attention to my surroundings.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally notice if an environment is nice.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes enjoy being in beautiful places.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately enjoy spending time in pleasant environments.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often seek out beautiful environments.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently enjoy being in beautiful surroundings.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly seek out and enjoy beautiful environments.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly value spending time in beautiful places.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I find great pleasure in beautiful environments.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I have a deep appreciation for and actively seek out beautiful environments.",
              "weight": 1
          }
      },
      "aspect": "Aesthetic Openness"
  },
  {
      "text": "I find beauty in unexpected places.",
      "trait": "openness",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I rarely notice beauty in unexpected places.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally notice something beautiful unexpectedly.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes find beauty in unusual places.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately appreciate beauty in unexpected things.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often find beauty in unexpected places.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently notice beauty in unusual things.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly discover beauty in unexpected places.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I highly appreciate finding beauty in the ordinary.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am very good at finding beauty in unexpected things.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I have a keen eye for finding beauty in the most unexpected places.",
              "weight": 1
          }
      },
      "aspect": "Aesthetic Openness"
  },
  {
      "text": "I am open to exploring new ideas and perspectives.",
      "trait": "openness",
      "weight": 1.2,
      "subtext": {
          "0-10": {
              "text": "I am slightly open to new ideas.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I have a mild interest in exploring new perspectives.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes consider new ideas.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately explore new perspectives.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I am fairly open to exploring different ideas.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I am quite open to considering new perspectives.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly explore new ideas and perspectives.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly open to trying different approaches.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am extremely open to all kinds of ideas.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I am exceptionally open to exploring and embracing new perspectives.",
              "weight": 1
          }
      }
  },
  {
      "text": "I often think about abstract concepts and like to ponder deep questions.",
      "trait": "openness",
      "weight": 0.9,
      "subtext": {
          "0-10": {
              "text": "I rarely think about abstract concepts.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally consider simple abstract ideas.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes think about abstract questions.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately enjoy pondering deep ideas.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often engage with abstract concepts.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently think about profound and complex questions.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly engage with complex abstract thoughts.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I consistently think deeply about abstract questions.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I almost always consider profound and abstract ideas.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I perpetually ponder the deepest and most abstract concepts.",
              "weight": 1
          }
      }
  },
  {
      "text": "I am comfortable with change and easily adapt to new situations.",
      "trait": "openness",
      "weight": 0.9,
      "subtext": {
          "0-10": {
              "text": "I struggle with change and prefer stability.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally adapt to small changes.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes embrace change with some hesitation.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately adapt to new situations.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often feel comfortable with changes.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I frequently embrace change and adapt quickly.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly handle change with ease.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I am highly comfortable adapting to new situations.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am extremely adept at managing changes.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I thrive on change and effortlessly adapt to new situations.",
              "weight": 1
          }
      }
  },
  {
      "text": "I eagerly seek out new experiences and relish the unknown.",
      "trait": "openness",
      "weight": 1.1,
      "subtext": {
          "0-10": {
              "text": "I rarely seek new experiences.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I sometimes avoid stepping outside my comfort zone.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I occasionally try something new when prompted.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately explore new experiences.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I am fairly interested in trying new activities.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I often venture into unfamiliar experiences.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly embrace opportunities to try new things.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I actively pursue new adventures and experiences.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly driven to explore novel experiences.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always seek out and embrace new, exciting experiences.",
              "weight": 1
          }
      }
  },
  {
      "text": "I appreciate art, culture, and diverse perspectives.",
      "trait": "openness",
      "weight": 1,
      "subtext": {
          "0-10": {
              "text": "I rarely notice art or diverse cultural ideas.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I occasionally encounter art and cultural elements.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I sometimes enjoy artistic expressions.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately appreciate art and cultural diversity.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often engage with art and diverse cultures.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I regularly enjoy art and explore different cultural expressions.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I consistently seek out artistic and cultural experiences.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I actively embrace a variety of artistic and cultural perspectives.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly appreciative of art, culture, and diverse ideas.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always immerse myself in art, culture, and diverse perspectives.",
              "weight": 1
          }
      }
  },
  {
      "text": "I thrive on creative challenges and innovative problem-solving.",
      "trait": "openness",
      "weight": 1.2,
      "subtext": {
          "0-10": {
              "text": "I rarely engage in creative challenges or innovative problem-solving.",
              "weight": 0.1
          },
          "10-20": {
              "text": "I sometimes shy away from creative problem-solving.",
              "weight": 0.2
          },
          "20-30": {
              "text": "I occasionally try to think creatively when necessary.",
              "weight": 0.3
          },
          "30-40": {
              "text": "I moderately engage with creative challenges.",
              "weight": 0.4
          },
          "40-50": {
              "text": "I fairly often attempt to solve problems in innovative ways.",
              "weight": 0.5
          },
          "50-60": {
              "text": "I often use creative approaches to tackle challenges.",
              "weight": 0.6
          },
          "60-70": {
              "text": "I regularly embrace creative and innovative problem-solving.",
              "weight": 0.7
          },
          "70-80": {
              "text": "I strongly seek out creative challenges and innovative solutions.",
              "weight": 0.8
          },
          "80-90": {
              "text": "I am highly engaged in finding innovative approaches to problems.",
              "weight": 0.9
          },
          "90-100": {
              "text": "I always thrive on creative challenges and embrace innovation.",
              "weight": 1
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



export   const functionPairings = [
  { 
    type: 'ENTP', 
    f4: 'Fight', 
    stack: 'Ne>Ti>Fe>Si', 
    dominant: 'Ne>Ti (Id + Ego)', 
    auxiliary: 'Ni>Te (Id + Ego)', 
    tertiary: 'Ni>Fe (Id + Superego)', 
    inferior: 'Ne>Fi (Id + Superego)', 
    opposite: 'ISFJ',
  },

  { 
    type: 'INTJ', 
    f4: 'Freeze', 
    stack: 'Ni>Te>Fi>Se', 
    dominant: 'Ni>Te (Id + Ego)', 
    auxiliary: 'Ne>Ti (Id + Ego)', 
    tertiary: 'Ne>Fi (Id + Superego)', 
    inferior: 'Ni>Fe (Id + Superego)', 
    opposite: 'ESFP',
  },

  { 
    type: 'ISFJ', 
    f4: 'Fawn', 
    stack: 'Si>Fe>Ti>Ne', 
    dominant: 'Si>Fe (Id + Ego)', 
    auxiliary: 'Se>Fi (Id + Ego)', 
    tertiary: 'Se>Ti (Id + Superego)', 
    inferior: 'Si>Te (Id + Superego)', 
    opposite: 'ENTP',
  },

  { 
    type: 'ESFP', 
    f4: 'Flight', 
    stack: 'Se>Fi>Te>Ni', 
    dominant: 'Se>Fi (Id + Ego)', 
    auxiliary: 'Si>Fe (Id + Ego)', 
    tertiary: 'Si>Te (Id + Superego)', 
    inferior: 'Se>Ti (Id + Superego)', 
    opposite: 'INTJ',
  },

  { 
    type: 'ESTP', 
    f4: 'Fight', 
    stack: 'Se>Ti>Fe>Ni', 
    dominant: 'Se>Ti (Id + Superego)', 
    auxiliary: 'Si>Te (Id + Superego)', 
    tertiary: 'Si>Fe (Id + Ego)', 
    inferior: 'Se>Fi (Id + Ego)', 
    opposite: 'INFJ',
  },

  { 
    type: 'ISTJ', 
    f4: 'Freeze', 
    stack: 'Si>Te>Fi>Ne', 
    dominant: 'Si>Te (Id + Superego)', 
    auxiliary: 'Se>Ti (Id + Superego)', 
    tertiary: 'Se>Fi (Id + Ego)', 
    inferior: 'Si>Fe (Id + Ego)', 
    opposite: 'ENFP',
  },

  { 
    type: 'INFJ', 
    f4: 'Fawn', 
    stack: 'Ni>Fe>Ti>Se', 
    dominant: 'Ni>Fe (Id + Superego)', 
    auxiliary: 'Ne>Fi (Id + Superego)', 
    tertiary: 'Ne>Ti (Id + Ego)', 
    inferior: 'Ni>Te (Id + Ego)', 
    opposite: 'ESTP',
  },

  { 
    type: 'ENFP', 
    f4: 'Flight', 
    stack: 'Ne>Fi>Te>Si', 
    dominant: 'Ne>Fi (Id + Superego)', 
    auxiliary: 'Ni>Fe (Id + Superego)', 
    tertiary: 'Ni>Te (Id + Ego)', 
    inferior: 'Ne>Ti (Id + Ego)', 
    opposite: 'ISTJ',
  },

  { 
    type: 'INTP', 
    f4: 'Fight', 
    stack: 'Ti>Ne>Si>Fe', 
    dominant: 'Ti>Ne (Ego + Id)', 
    auxiliary: 'Te>Ni (Ego + Id)', 
    tertiary: 'Te>Si (Superego + Id)', 
    inferior: 'Ti>Se (Superego + Id)', 
    opposite: 'ESFJ',
  },

  { 
    type: 'ENTJ', 
    f4: 'Freeze', 
    stack: 'Te>Ni>Se>Fi', 
    dominant: 'Te>Ni (Ego + Id)', 
    auxiliary: 'Ti>Ne (Ego + Id)', 
    tertiary: 'Ti>Se (Superego + Id)', 
    inferior: 'Te>Si (Superego + Id)', 
    opposite: 'ISFP',
  },

  { 
    type: 'ESFJ', 
    f4: 'Fawn', 
    stack: 'Fe>Si>Ne>Ti', 
    dominant: 'Fe>Si (Ego + Id)', 
    auxiliary: 'Fi>Se (Ego + Id)', 
    tertiary: 'Fi>Ne (Superego + Id)',  
    inferior: 'Fe>Ni (Superego + Id)',  
    opposite: 'INTP',
  },

  { 
    type: 'ISFP', 
    f4: 'Flight', 
    stack: 'Fi>Se>Ni>Te', 
    dominant: 'Fi>Se (Ego + Id)', 
    auxiliary: 'Fe>Ni (Ego + Id)', 
    tertiary: 'Fe>Ni (Superego + Id)', 
    inferior: 'Fi>Ne (Superego + Id)', 
    opposite: 'ENTJ',
  },

  { 
    type: 'ISTP', 
    f4: 'Fight', 
    stack: 'Ti>Se>Ni>Fe', 
    dominant: 'Ti>Se (Superego + Id)', 
    auxiliary: 'Te>Si (Superego + Id)', 
    tertiary: 'Te>Ni (Ego + Id)', 
    inferior: 'Ti>Ne (Ego + Id)', 
    opposite: 'ENFJ',
  },

  { 
    type: 'ESTJ', 
    f4: 'Freeze', 
    stack: 'Te>Si>Ne>Fi', 
    dominant: 'Te>Si (Superego + Id)', 
    auxiliary: 'Ti>Se (Superego + Id)', 
    tertiary: 'Ti>Ne (Ego + Id)', 
    inferior: 'Te>Ni (Ego + Id)', 
    opposite: 'INFP',
  },

  { 
    type: 'ENFJ', 
    f4: 'Fawn', 
    stack: 'Fe>Ni>Se>Ti', 
    dominant: 'Fe>Ni (Superego + Id)', 
    auxiliary: 'Fi>Ne (Superego + Id)', 
    tertiary: 'Fi>Se (Ego + Id)', 
    inferior: 'Fe>Si (Ego + Id)', 
    opposite: 'ISTP',
  },

  { 
    type: 'INFP', 
    f4: 'Flight', 
    stack: 'Fi>Ne>Si>Te', 
    dominant: 'Fi>Ne (Superego + Id)', 
    auxiliary: 'Fe>Ni (Superego + Id)', 
    tertiary: 'Fe>Si (Ego + Id)', 
    inferior: 'Fi>Se (Ego + Id)', 
    opposite: 'ESTJ',
  },
];

