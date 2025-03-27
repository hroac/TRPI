
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
      "text": "I contemplate abstract concepts.",
      "trait": "openness",
      "weight": 1.1,
      "aspect": "Intellect",
      "subtext": {
        "0-10": {
          "text": "I seldom reflect on abstract concepts.",
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally consider simple abstract ideas.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes ponder abstract ideas.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately reflect on abstract concepts.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often engage in abstract thought.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently immerse myself in abstract contemplation.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly delve into abstract ideas.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly enjoy exploring abstract concepts.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very drawn to abstract thinking.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I am profoundly absorbed in the world of abstract ideas.",
          "weight": 1
        }
      }
    },
    {
      "text": "I participate in philosophical debates.",
      "trait": "openness",
      "weight": 1,
      "aspect": "Intellect",
      "subtext": {
        "0-10": {
          "text": "I rarely engage in philosophical discussions.",
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally share a philosophical thought.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes join in on philosophical conversations.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately enjoy discussing philosophical topics.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often contribute to philosophical debates.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently engage in deep philosophical discussions.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly seek out philosophical exchanges.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly enthusiastic about debating philosophical ideas.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very committed to philosophical dialogue.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I am passionately involved in philosophical debates.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally experiment with something new.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes engage in new activities.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately try out novel experiences.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often embrace new and unusual things.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently pursue novel experiences.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly experiment with unconventional activities.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly enjoy exploring new experiences.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very open to trying unusual things.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I am always eager to embrace novel and unconventional experiences.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally wonder about other cultures.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes consider different ways of life.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately appreciate diverse cultures.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often reflect on various cultural ways of living.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently show curiosity about different cultures.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly explore information about diverse cultures.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly interested in learning about different lifestyles.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very curious about the variety of cultural expressions.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I am deeply fascinated by diverse cultures and ways of life.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally learn something new.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes engage in learning new subjects.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately value expanding my knowledge.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often explore new topics.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently pursue opportunities to learn.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly engage in expanding my intellectual horizons.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly interested in acquiring new knowledge.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very eager to learn about a wide range of subjects.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I have an intense passion for learning and broadening my intellectual scope.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally reconsider my views.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes adjust my opinions based on new facts.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately revise my views when needed.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often reconsider my opinions with new information.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently update my beliefs when confronted with evidence.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly adjust my opinions based on fresh insights.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly open to modifying my views.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very inclined to revise my beliefs with new information.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I readily transform my opinions in light of new evidence.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally put some effort into my goals.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes work hard on my goals.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately strive toward my objectives.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often devote effort to achieve my goals.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently put in considerable effort to reach my aims.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly work with diligence to achieve my objectives.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly prioritize exerting effort to reach my goals.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very dedicated to working hard for my objectives.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I consistently go above and beyond to achieve my goals.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally feel somewhat competent.",
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
          "text": "I regularly feel capable and effective in what I do.",
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
          "text": "I possess an unwavering belief in my competence.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally manage to resist a temptation.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes successfully resist impulses.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately manage to keep my impulses in check.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often resist temptations effectively.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently control my impulses in tempting situations.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly demonstrate strong self-control.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly capable of resisting temptation.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very adept at maintaining self-control.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I consistently and robustly resist all temptations.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally pause briefly before acting.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes consider my actions beforehand.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately reflect before making decisions.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often think carefully before acting.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently deliberate before taking any action.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly plan my actions carefully.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly methodical in thinking before I act.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very deliberate and thoughtful in my actions.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always think thoroughly before making any decision.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally manage my time well.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes use my time in a productive way.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately make good use of my time.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often work efficiently.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently manage my time effectively.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly use my time in a very efficient manner.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly efficient in managing my time.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very skilled at using my time wisely.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always maximize my efficiency in time management.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally tidy up my space.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes prefer things to be neat.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately favor an orderly environment.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often maintain a tidy space.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently ensure that my surroundings are neat.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly keep my environment orderly.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly value order and neatness.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very particular about maintaining order.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always insist on a perfectly neat and orderly environment.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally notice small details.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes pay attention to details.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately focus on details.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often notice important details.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently attend to even subtle details.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly ensure that no detail is overlooked.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly meticulous about details.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very thorough in noticing every detail.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always pay exceptionally close attention to every detail.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally follow rules when reminded.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes make an effort to follow rules.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately adhere to rules.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often follow established guidelines.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently abide by rules and regulations.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly conform to established rules.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly respect and follow rules.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very careful to adhere to all rules.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always strictly follow rules and regulations.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally make loose plans.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes plan but don’t always follow through.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately like to plan activities.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often create plans and try to follow them.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently make detailed plans and adhere to them.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly plan ahead and execute my plans.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly value planning and stick to my plans.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very committed to following my plans.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always meticulously plan and strictly adhere to my schedule.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally follow a loose schedule.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes appreciate having a general routine.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately value a consistent schedule.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often rely on a set routine.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently adhere to a regular schedule.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly maintain a structured routine.",
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
          "text": "I always strictly adhere to a well-planned routine.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally try to organize my tasks.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes remain focused when handling multiple tasks.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately keep my tasks organized.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often stay organized while managing tasks.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently remain focused and organized during multitasking.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly manage multiple tasks with a clear focus.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly maintain organization and focus when juggling tasks.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am highly efficient at managing multiple priorities.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always stay exceptionally organized and focused when handling many tasks.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally enjoy planned events.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes choose structured activities over spontaneous ones.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately prefer organized activities.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often choose planned over spontaneous events.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently opt for organized activities.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly plan my activities rather than leaving them to chance.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly favor structured and well-organized events.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am highly inclined to choose planned activities.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always prioritize meticulously organized and planned events.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally feel a mild sense of responsibility.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes feel responsible for meeting my goals.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately feel accountable for my commitments.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often feel a strong duty to meet commitments.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently ensure that I meet my goals.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly feel deeply responsible for my commitments.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly prioritize fulfilling my obligations.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very dedicated to meeting my goals and commitments.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always feel an intense responsibility to achieve my goals.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I mostly rely on emotions when deciding.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes consider facts, but feelings often guide me.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I occasionally let facts influence my decisions.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I try to balance facts with emotions when deciding.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I usually lean toward making decisions based on facts.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I frequently base my decisions on objective evidence.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I consistently prioritize facts over feelings in my decision-making.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I almost always rely on factual information when deciding.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always base my decisions solely on factual evidence.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally reflect on task details.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes consider details when working.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately plan my tasks with attention to details.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often ensure my tasks are well thought out.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently focus on details and plan carefully.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly engage in detailed planning for my tasks.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly emphasize careful thought in task management.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very meticulous and thorough in my planning.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always think through every detail with great care.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally join a crowd, though with reservation.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes enjoy being with many people.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately enjoy social gatherings.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often feel energized in groups.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently seek out large social events.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly thrive in large group settings.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly enjoy the energy of social gatherings.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very enthusiastic about being in large groups.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always feel invigorated when surrounded by many people.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally experience brief moments of cheer.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes feel moderately positive.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately maintain a cheerful mood.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often feel optimistic.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently experience a positive outlook.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly feel upbeat and cheerful.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly energetic and optimistic.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very consistently cheerful.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always maintain a highly positive and optimistic mood.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally make a new acquaintance.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes find it easy to connect with new people.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately establish new social contacts.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often make new friends without much difficulty.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently form new friendships easily.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly connect with new people.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly effective at making friends.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very skilled at initiating friendships.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always find it remarkably easy to make new friends.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally appear friendly.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes show warmth in social settings.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately act in a warm, approachable manner.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often display friendliness towards others.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently exude warmth and approachability.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly project a warm and friendly demeanor.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly regarded for my warmth and friendliness.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very consistently warm and affable.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I am always remarkably warm, friendly, and approachable.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally attend events out of necessity.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes enjoy attending parties.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately enjoy social gatherings.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often take pleasure in parties.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently attend and enjoy social events.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly look forward to social gatherings.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly enjoy being at parties and gatherings.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very enthusiastic about attending social events.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always eagerly anticipate and thoroughly enjoy parties and gatherings.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally contribute but seldom lead.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes take initiative in groups.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately assume leadership when needed.",
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
          "text": "I regularly exhibit leadership in groups.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly enjoy assuming leadership roles.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very comfortable and effective as a leader.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always naturally take the lead and inspire others.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally share my views when prompted.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes express my opinions.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately share my opinions in conversation.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often speak my mind openly.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently voice my opinions with confidence.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly express my views assertively.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly comfortable and clear in expressing my opinions.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very outspoken and direct.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always express my opinions in a confident and assertive manner.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally engage in physical activities.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes enjoy being physically active.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately enjoy staying active.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often seek out active pursuits.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently maintain a high level of physical activity.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly embrace an energetic and active lifestyle.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly energetic and active.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very enthusiastic about being active.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always feel my best when I am actively on the move.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally find myself in the spotlight, but with discomfort.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes don’t mind being noticed.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately tolerate being the center of attention.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often feel at ease when I am noticed.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently feel comfortable in the spotlight.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly enjoy being the focus of attention.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly appreciate being in the center of attention.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very comfortable and relish being noticed.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always enjoy and seek out being the center of attention.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally try to be assertive.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes assert myself when needed.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately stand up for my beliefs.",
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
          "text": "I regularly act assertively in challenging situations.",
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
          "text": "I always act with unwavering assertiveness and confidence.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally enjoy meeting someone new.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes feel upbeat after social interactions.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately enjoy building new connections.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often feel energized by engaging with others.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently derive energy from making new connections.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly feel invigorated by engaging with new people.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly enjoy and actively seek new social connections.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am highly energized by forming new relationships.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always feel deeply invigorated by engaging with new people.",
          "weight": 1
        }
      }
    },
    {
      "text": "I consistently assume charge in group settings and show leadership confidence.",
      "trait": "extraversion",
      "weight": 1,
      "aspect": "Assertiveness",
      "subtext": {
        "0-10": {
          "text": "I rarely take charge in groups.",
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally take charge but prefer to follow.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes feel comfortable taking charge.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately assume leadership when necessary.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often take charge in group settings.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently lead groups with confidence.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly feel confident when taking charge.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly embrace leadership roles in group settings.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am highly confident and effective in leadership roles.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always thrive as a natural leader in any group setting.",
          "weight": 1
        }
      }
    },
    {
      "text": "I love engaging in discussions and debates on various ideas.",
      "trait": "extraversion",
      "weight": 0.9,
      "aspect": "Assertiveness",
      "subtext": {
        "0-10": {
          "text": "I rarely enjoy discussing ideas with others.",
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally engage in discussions, but avoid debates.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes share my ideas in discussions.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately enjoy debating and discussing ideas.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often engage in debates with others.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently relish sharing ideas and debating topics.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly participate in lively debates about ideas.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly enjoy and seek out intellectual debates.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am highly energized by discussing and debating ideas.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always thrive on in-depth discussions and debates about ideas.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally manage to remain calm.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes stay composed under pressure.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately remain calm and assertive in problems.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often stay calm when solving problems.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently remain composed under stress.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly solve problems while staying calm and assertive.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly maintain composure and assertiveness in challenges.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am highly calm and assertive when addressing issues.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always remain remarkably calm, composed, and assertive in all challenges.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally act independently, but rarely boldly.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes approach problems with independence.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately demonstrate bold, independent thinking.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often take an independent and bold approach.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently solve problems in a bold and independent manner.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly take independent and daring approaches to challenges.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly exhibit boldness and independence in problem-solving.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am highly recognized for my bold, independent methods.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always act boldly and independently when facing challenges.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally feel a tinge of sympathy.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes feel concerned for those in need.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately feel empathy towards others' struggles.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often empathize with those less fortunate.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently feel compassion for people in need.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly experience deep empathy for others.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly attuned to the suffering of others.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very empathetic towards those who struggle.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always feel profound empathy for those less fortunate.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally lend a helping hand if convenient.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes enjoy helping those around me.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately take pleasure in assisting others.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often offer help to those in need.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently derive satisfaction from helping others.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly look for opportunities to assist people.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly enjoy being helpful and supportive.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very willing to help others.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always eagerly seek out ways to assist those around me.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally trust someone after getting to know them.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes tend to trust people readily.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately give others the benefit of the doubt.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often trust people until proven otherwise.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently extend trust to those around me.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly trust people in general.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly tend to trust others.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very trusting by nature.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always naturally trust other people.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally notice how others are doing.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes show interest in others’ welfare.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately care about the well-being of people.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often consider the welfare of those around me.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently pay attention to others’ well-being.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly show care for people’s welfare.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly prioritize the well-being of others.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very concerned about the welfare of those around me.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always actively care for and prioritize others’ well-being.",
          "weight": 1
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
          "text": "I fairly often strive to be kind in my interactions.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently make an effort to treat everyone kindly.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly seek to be kind and considerate.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly value treating everyone with kindness.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very intentional about being kind to everyone.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always strive to treat everyone with unwavering kindness.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally attempt to influence others.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes try to persuade others to my viewpoint.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately avoid imposing my will on others.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often allow others to make their own choices.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently refrain from forcing my preferences on others.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly respect others’ autonomy.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly value letting others decide for themselves.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very careful not to impose my will.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always completely refrain from imposing my will on others.",
          "weight": 1
        }
      }
    },
    {
      "text": "I often exhibit modesty regarding my accomplishments.",
      "trait": "agreeableness",
      "weight": 1,
      "aspect": "Politeness",
      "subtext": {
        "0-10": {
          "text": "I often boast about my achievements.",
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally mention my successes.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes talk about my achievements.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately downplay my accomplishments.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often present myself modestly.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently refrain from bragging about my successes.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly maintain a humble attitude about my achievements.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly value humility regarding what I accomplish.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very modest about my achievements.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always remain extremely modest and humble about my accomplishments.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally speak directly.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes attempt to be honest in my communication.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately strive to be straightforward.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often express myself directly and honestly.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently communicate in a frank manner.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly speak in a clear and honest way.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly value clear and honest communication.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very committed to speaking straightforwardly.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always communicate in an unwaveringly honest and direct manner.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally show respect for authority.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes acknowledge authority figures.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately respect authority.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often show deference to authority figures.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently respect and follow authority.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly honor the guidance of authority figures.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly value respect for authority.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very respectful of those in authority.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always show profound respect for authority.",
          "weight": 1
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
          "text": "I fairly often attempt to diffuse conflicts.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently avoid getting into confrontational situations.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly seek peaceful resolutions in conflicts.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly value harmony and avoid confrontations.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very averse to confrontation.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always strive to completely avoid any form of confrontation.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally support friends when needed.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes lend support to my friends.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately enjoy supporting my friends.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often take time to help my friends succeed.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently enjoy being supportive of my friends.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly prioritize supporting my friends.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly enjoy and actively support my friends.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am highly focused on helping my friends succeed.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always make it a priority to support and celebrate my friends’ successes.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally try to avoid conflict, but not consistently.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes make an effort to maintain harmony.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately strive to avoid conflict in relationships.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often prioritize harmony over conflict.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently avoid conflict to maintain harmony.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly take steps to keep my relationships harmonious.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly value and actively preserve harmony in my relationships.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very committed to avoiding conflict.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always prioritize harmony and work tirelessly to prevent conflicts.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally try to be supportive.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes attempt to understand and support others.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately strive to be understanding.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often make an effort to support others.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently endeavor to understand and support those around me.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly seek to be empathetic and supportive.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly strive to be understanding and supportive.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am highly dedicated to being empathetic and supportive.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always prioritize being deeply understanding and supportive.",
          "weight": 1
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
          "text": "I rarely notice others’ feelings.",
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally become aware of others’ emotions.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes try to be responsive to others’ feelings.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately notice and respond to others’ emotions.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often make an effort to meet others’ emotional needs.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently pay attention to and act on others’ feelings.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly strive to be sensitive and responsive.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly focus on understanding and meeting others’ needs.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am highly aware of others’ emotions and respond accordingly.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always make it a top priority to be sensitive and responsive to others.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally work in teams.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes prefer team settings.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately appreciate cooperative work.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often value working in teams.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently prefer collaboration and teamwork.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly thrive in cooperative environments.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly prioritize team cooperation.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very inclined to work as part of a team.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always actively seek out collaborative, team-based work.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally feel a slight irritation.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes get annoyed by minor things.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately experience irritation over small issues.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often get irritated easily.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently become irritated by trivial matters.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly experience rapid irritation.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly prone to quick irritation.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very easily irritated by small things.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always get irritated very quickly and intensely.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally act on a whim.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes act impulsively without full consideration.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately act on impulse at times.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often make decisions impulsively.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently act without much thought.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly give in to impulsive urges.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly prone to impulsive actions.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very impulsive in my behavior.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always act in a highly impulsive manner.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally feel a slight nervousness.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes experience mild anxiety.",
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
          "text": "I frequently experience anxiety.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly feel a significant degree of anxiety.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly prone to feeling anxious.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very often overwhelmed by anxiety.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always feel intensely anxious.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally feel a little frustrated.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes experience a quick temper.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately lose my temper at times.",
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
          "text": "I regularly experience a very short fuse.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly prone to getting angry rapidly.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I have a very quick temper.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always get angry almost instantaneously.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally feel a bit on edge.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes experience mild restlessness.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately feel agitated at times.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often feel restless.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently experience agitation.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly feel on edge and restless.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly prone to feeling agitated.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I very often feel restless and uneasy.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always feel deeply agitated and restless.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally feel a little down.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes feel a bit blue.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately experience occasional sadness.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often feel sad or down.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently experience feelings of unhappiness.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly feel noticeably low in mood.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly prone to feelings of sadness.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I very often feel deeply sad.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always seem to feel profoundly sad or down.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally notice others' opinions.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes worry about others’ judgments.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately feel self-conscious about others’ views.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often worry about how others perceive me.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently become preoccupied with others' opinions.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly concern myself with others' evaluations.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly troubled by what others think of me.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very often anxious about others' judgments.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always worry profoundly about how others view me.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally feel mildly stressed.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes experience moderate stress.",
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
          "text": "I frequently feel inundated when facing stress.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly feel heavily burdened by stress.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly prone to feeling overwhelmed by stressful situations.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I very often feel overwhelmed by stress.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always feel deeply overwhelmed by stress.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally wonder if I could have done better.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes blame myself when things fail.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately tend to take personal responsibility for failures.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often blame myself when things go wrong.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently attribute negative outcomes to my own faults.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly blame myself for setbacks.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I have a strong tendency to blame myself.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I very often internalize blame when things go wrong.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always unequivocally blame myself for any failure.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally feel a bit unsure of myself.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes question my self-worth.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately experience feelings of insecurity.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often feel insecure about my abilities.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently struggle with insecurity.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly experience deep feelings of insecurity.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly prone to feeling insecure.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I very often feel extremely insecure.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always feel overwhelmingly insecure about myself.",
          "weight": 1
        }
      }
    },
    {
      "text": "I regularly feel overwhelmed when managing several responsibilities simultaneously.",
      "trait": "neuroticism",
      "weight": 1.1,
      "aspect": "Withdrawal",
      "subtext": {
        "0-10": {
          "text": "I rarely feel overwhelmed by multiple responsibilities.",
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally manage multiple tasks without issue.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes feel a bit overwhelmed with many tasks.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately feel overwhelmed under multiple responsibilities.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often feel burdened by multiple tasks.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently feel overwhelmed when juggling responsibilities.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly feel inundated by numerous responsibilities.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly feel overwhelmed when under heavy responsibilities.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am highly prone to feeling overwhelmed by multiple duties.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always feel deeply overwhelmed when managing many tasks.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally feel mild anxiety in pressure situations.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes feel somewhat anxious in stressful conditions.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately experience anxiety when stressed.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often feel anxious in high-pressure scenarios.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently feel anxious during stressful times.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly experience significant anxiety under pressure.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly feel anxious in challenging situations.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am highly prone to anxiety in stressful contexts.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I almost always feel deeply anxious in stressful situations.",
          "weight": 1
        }
      }
    },
    {
      "text": "I frequently experience uncertainty and self-doubt during decision-making.",
      "trait": "neuroticism",
      "weight": 0.9,
      "aspect": "Withdrawal",
      "subtext": {
        "0-10": {
          "text": "I rarely feel uneasy about my decisions.",
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally second-guess myself.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes feel uncertain when making decisions.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately experience self-doubt during decision-making.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often second-guess my decisions.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently feel uneasy when deciding.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly experience uncertainty in decision-making.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly tend to doubt my choices.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am highly prone to second-guessing myself.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I almost always feel deeply uncertain and second-guess every decision.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally reflect on past errors.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes think about past mistakes and outcomes.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately worry about past errors and potential consequences.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often ruminate on past mistakes.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently reflect on past errors and their outcomes.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly dwell on my past mistakes.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly focus on past mistakes and worry about what could have been.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am highly prone to overthinking past errors and consequences.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I almost always ruminate intensely on past mistakes and potential outcomes.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally feel uneasy in uncertain situations.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes overthink and feel a bit uneasy about uncertainty.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately experience overthinking and unease about the unknown.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often feel uneasy about uncertain outcomes.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently overthink and worry about the unknown.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly experience deep unease about uncertain outcomes.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I strongly tend to overthink and feel uneasy about the unknown.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am highly prone to overthinking and feeling uneasy about uncertainty.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always overthink situations and feel profoundly uneasy about the unknown.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally appreciate beauty in small doses.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes find beauty in art or nature.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately appreciate beauty in various forms.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often recognize beauty in art and nature.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently value the beauty found in art, nature, and ideas.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly have a deep appreciation for aesthetic beauty.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly value and seek out artistic beauty.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very sensitive to the beauty in art, nature, and ideas.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I have an intense and profound appreciation for aesthetic beauty in all forms.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally daydream.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes let my mind wander.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately enjoy creative daydreaming.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often allow my imagination to run wild.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently engage in imaginative thinking.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly let my creativity flourish.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly enjoy expansive imaginative thinking.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very adept at unleashing my imagination.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I have a boundless and vivid imagination at all times.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally feel a slight emotional response.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes get mildly moved by art.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately feel emotional reactions to music and films.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often experience emotional responses to art.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently feel deeply moved by music and movies.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly experience profound emotions from art.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly sensitive to the emotional qualities of music and films.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very easily moved by emotional artistic experiences.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I am deeply and profoundly affected by the emotional power of music and movies.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally appreciate art and aesthetics.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes enjoy artistic experiences.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately value aesthetic experiences.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often seek out artistic encounters.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently appreciate rich artistic experiences.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly prioritize aesthetic experiences in my life.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly value the impact of art and aesthetics.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I consider artistic experiences very important.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I deeply value and actively pursue artistic and aesthetic experiences.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally appreciate a pleasant environment.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes enjoy being in beautiful places.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately enjoy spending time in attractive settings.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often seek out environments that are aesthetically pleasing.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently find joy in beautiful surroundings.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly immerse myself in aesthetically pleasing environments.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly value spending time in beautiful settings.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I find great pleasure in being in beautiful places.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always actively seek out and revel in beautiful environments.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally spot a touch of beauty unexpectedly.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes notice beauty in unusual contexts.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately appreciate unexpected beauty.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often recognize beauty in unanticipated places.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently discover beauty in the unexpected.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly find beauty in places others might overlook.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I highly value recognizing beauty in ordinary settings.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am very adept at seeing beauty in unexpected contexts.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always keenly perceive beauty in the most unforeseen places.",
          "weight": 1
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
          "text": "I moderately explore different perspectives.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I am fairly open to diverse ideas.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I often welcome new perspectives.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly embrace a variety of ideas.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly open to trying different approaches.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am extremely receptive to all kinds of ideas.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I am exceptionally open to exploring and embracing new perspectives.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally consider simple abstract ideas.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes ponder abstract questions.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately enjoy contemplating deep ideas.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often reflect on abstract concepts.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently engage in deep, abstract thought.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly explore profound questions.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I consistently think deeply about abstract matters.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I almost always ponder profound and abstract ideas.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I perpetually explore the deepest and most abstract concepts.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally adapt to minor changes.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes embrace change with hesitation.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately adapt to new situations.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often feel comfortable with change.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I frequently adapt quickly to new situations.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I regularly handle change with ease.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I am highly comfortable with adapting to change.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am extremely adept at managing change.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I thrive on change and effortlessly adjust to new situations.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I sometimes avoid stepping out of my comfort zone.",
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
          "text": "I fairly often seek out novel activities.",
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
          "text": "I actively pursue new adventures.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am highly driven to explore the unknown.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always eagerly seek and relish new, exciting experiences.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I occasionally encounter art and cultural ideas.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I sometimes enjoy artistic expressions.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately appreciate art and diverse cultures.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often engage with art and cultural diversity.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I regularly immerse myself in art and diverse perspectives.",
          "weight": 0.6
        },
        "60-70": {
          "text": "I consistently seek out cultural and artistic experiences.",
          "weight": 0.7
        },
        "70-80": {
          "text": "I actively value art, culture, and diverse viewpoints.",
          "weight": 0.8
        },
        "80-90": {
          "text": "I am highly appreciative of artistic and cultural diversity.",
          "weight": 0.9
        },
        "90-100": {
          "text": "I always immerse myself in art, culture, and varied perspectives.",
          "weight": 1
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
          "weight": 0.1
        },
        "10-20": {
          "text": "I sometimes shy away from innovative approaches.",
          "weight": 0.2
        },
        "20-30": {
          "text": "I occasionally try to solve problems creatively.",
          "weight": 0.3
        },
        "30-40": {
          "text": "I moderately engage in creative problem-solving.",
          "weight": 0.4
        },
        "40-50": {
          "text": "I fairly often approach challenges in innovative ways.",
          "weight": 0.5
        },
        "50-60": {
          "text": "I often use creative solutions to tackle challenges.",
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

