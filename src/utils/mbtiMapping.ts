
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
          "neuroticism": 0.35
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
          "neuroticism": 0.7
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
          "openness": 0.75,
          "conscientiousness": 0.75,
          "extraversion": 0.8,
          "agreeableness": 0.9,
          "neuroticism": 0.4
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
 * Calculates the overall compatibility score between two users.
 * Combines trait correlation and answer correlation.
 * @param userA - Bin data for User A.
 * @param userB - Bin data for User B.
 * @returns Compatibility score as a number between 0 and 100.
 */
export const calculateCompatibilityScore = (userA: any, userB: any): number => {
  const traitCorr = pearsonCorrelationBigFive(Object.values(userA.bigFiveResponses), Object.values(userB.bigFiveResponses));
  const answerCorr = calculateAnswerCorrelation(userA.allResponses, userB.allResponses);

  // Normalize correlations from [-1,1] to [0,100]
  const normalizedTraitCorr = ((traitCorr + 1) / 2) * 100;
  const normalizedAnswerCorr = ((answerCorr + 1) / 2) * 100;

  // Weighted average: 50% traits, 50% answers
  const compatibility = (normalizedTraitCorr + normalizedAnswerCorr) / 2;

  return compatibility;
};

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

export const statements = [
  {
    text: 'I am open to exploring new ideas and perspectives.',
    trait: 'openness',
    weight: 1.2,
    subtext: {
      '0-10': { text: 'I am slightly open to new ideas.', weight: 0.1 },
      '10-20': { text: 'I have a mild interest in exploring new perspectives.', weight: 0.2 },
      '20-30': { text: 'I sometimes consider new ideas.', weight: 0.3 },
      '30-40': { text: 'I moderately explore new perspectives.', weight: 0.4 },
      '40-50': { text: 'I am fairly open to exploring different ideas.', weight: 0.5 },
      '50-60': { text: 'I am quite open to considering new perspectives.', weight: 0.6 },
      '60-70': { text: 'I regularly explore new ideas and perspectives.', weight: 0.7 },
      '70-80': { text: 'I am highly open to trying different approaches.', weight: 0.8 },
      '80-90': { text: 'I am extremely open to all kinds of ideas.', weight: 0.9 },
      '90-100': { text: 'I am exceptionally open to exploring and embracing new perspectives.', weight: 1.0 },
    }
  },
  {
    text: 'I often think about abstract concepts and like to ponder deep questions.',
    trait: 'openness',
    weight: 0.9,
    subtext: {
      '0-10': { text: 'I rarely think about abstract concepts.', weight: 0.1 },
      '10-20': { text: 'I occasionally consider simple abstract ideas.', weight: 0.2 },
      '20-30': { text: 'I sometimes think about abstract questions.', weight: 0.3 },
      '30-40': { text: 'I moderately enjoy pondering deep ideas.', weight: 0.4 },
      '40-50': { text: 'I fairly often engage with abstract concepts.', weight: 0.5 },
      '50-60': { text: 'I frequently think about profound and complex questions.', weight: 0.6 },
      '60-70': { text: 'I regularly engage with complex abstract thoughts.', weight: 0.7 },
      '70-80': { text: 'I consistently think deeply about abstract questions.', weight: 0.8 },
      '80-90': { text: 'I almost always consider profound and abstract ideas.', weight: 0.9 },
      '90-100': { text: 'I perpetually ponder the deepest and most abstract concepts.', weight: 1.0 },
    }
  },
  {
    text: 'I am comfortable with change and easily adapt to new situations.',
    trait: 'openness',
    weight: 0.9,
    subtext: {
      '0-10': { text: 'I struggle with change and prefer stability.', weight: 0.1 },
      '10-20': { text: 'I occasionally adapt to small changes.', weight: 0.2 },
      '20-30': { text: 'I sometimes embrace change with some hesitation.', weight: 0.3 },
      '30-40': { text: 'I moderately adapt to new situations.', weight: 0.4 },
      '40-50': { text: 'I fairly often feel comfortable with changes.', weight: 0.5 },
      '50-60': { text: 'I frequently embrace change and adapt quickly.', weight: 0.6 },
      '60-70': { text: 'I regularly handle change with ease.', weight: 0.7 },
      '70-80': { text: 'I am highly comfortable adapting to new situations.', weight: 0.8 },
      '80-90': { text: 'I am extremely adept at managing changes.', weight: 0.9 },
      '90-100': { text: 'I thrive on change and effortlessly adapt to new situations.', weight: 1.0 },
    }
  },
  {
    "text": "I stay focused and organized when managing multiple tasks.",
    "trait": "conscientiousness",
    "weight": 1.0,
    "subtext": {
      "0-10": { "text": "I rarely stay focused or organized when handling tasks.", "weight": 0.1 },
      "10-20": { "text": "I occasionally try to stay organized but struggle to maintain focus.", "weight": 0.2 },
      "20-30": { "text": "I sometimes stay organized when managing tasks.", "weight": 0.3 },
      "30-40": { "text": "I moderately focus on staying organized and managing tasks effectively.", "weight": 0.4 },
      "40-50": { "text": "I fairly often stay organized and focused while managing tasks.", "weight": 0.5 },
      "50-60": { "text": "I frequently stay on top of tasks through focus and organization.", "weight": 0.6 },
      "60-70": { "text": "I regularly stay focused and manage tasks in an organized manner.", "weight": 0.7 },
      "70-80": { "text": "I strongly focus on staying organized when handling multiple tasks.", "weight": 0.8 },
      "80-90": { "text": "I am highly organized and focused when managing multiple priorities.", "weight": 0.9 },
      "90-100": { "text": "I always stay focused and highly organized when managing tasks.", "weight": 1.0 }
    }
  },
  {
    "text": "I feel energized by engaging with new people and building connections.",
    "trait": "extraversion",
    "weight": 1.1,
    "subtext": {
      "0-10": { "text": "I rarely feel energized by meeting new people.", "weight": 0.1 },
      "10-20": { "text": "I occasionally enjoy meeting new people but prefer to keep to myself.", "weight": 0.2 },
      "20-30": { "text": "I sometimes feel energized by engaging with new people.", "weight": 0.3 },
      "30-40": { "text": "I moderately enjoy meeting new people and making connections.", "weight": 0.4 },
      "40-50": { "text": "I fairly often feel energized by social interactions.", "weight": 0.5 },
      "50-60": { "text": "I frequently enjoy meeting new people and forming connections.", "weight": 0.6 },
      "60-70": { "text": "I regularly feel energized by engaging with new people.", "weight": 0.7 },
      "70-80": { "text": "I strongly enjoy building connections with new people.", "weight": 0.8 },
      "80-90": { "text": "I am highly energized by meeting and connecting with others.", "weight": 0.9 },
      "90-100": { "text": "I always feel invigorated by engaging with new people and building connections.", "weight": 1.0 }
    }
  },
  {
    "text": "I enjoy supporting my friends and helping them succeed.",
    "trait": "agreeableness",
    "weight": 1.1,
    "subtext": {
      "0-10": { "text": "I rarely enjoy helping or supporting my friends.", "weight": 0.1 },
      "10-20": { "text": "I occasionally help friends but don’t enjoy it much.", "weight": 0.2 },
      "20-30": { "text": "I sometimes support my friends and their goals.", "weight": 0.3 },
      "30-40": { "text": "I moderately enjoy supporting and helping friends.", "weight": 0.4 },
      "40-50": { "text": "I fairly often support my friends and enjoy their success.", "weight": 0.5 },
      "50-60": { "text": "I frequently enjoy helping my friends succeed.", "weight": 0.6 },
      "60-70": { "text": "I regularly support and enjoy helping my friends.", "weight": 0.7 },
      "70-80": { "text": "I strongly enjoy supporting and encouraging friends.", "weight": 0.8 },
      "80-90": { "text": "I am highly focused on supporting my friends and their goals.", "weight": 0.9 },
      "90-100": { "text": "I always prioritize supporting my friends and celebrating their successes.", "weight": 1.0 }
    }
  },
  {
    "text": "I often feel overwhelmed when dealing with multiple responsibilities at once.",
    "trait": "neuroticism",
    "weight": 1.1,
    "subtext": {
      "0-10": { "text": "I rarely feel overwhelmed by multiple responsibilities at once.", "weight": 0.1 },
      "10-20": { "text": "I occasionally feel overwhelmed but manage well.", "weight": 0.2 },
      "20-30": { "text": "I sometimes feel overwhelmed with multiple responsibilities.", "weight": 0.3 },
      "30-40": { "text": "I moderately feel overwhelmed under pressure.", "weight": 0.4 },
      "40-50": { "text": "I fairly often feel overwhelmed by multiple responsibilities.", "weight": 0.5 },
      "50-60": { "text": "I frequently feel overwhelmed when managing tasks.", "weight": 0.6 },
      "60-70": { "text": "I regularly feel overwhelmed with multiple responsibilities at once.", "weight": 0.7 },
      "70-80": { "text": "I strongly feel overwhelmed when under pressure.", "weight": 0.8 },
      "80-90": { "text": "I am highly prone to feeling overwhelmed by multiple responsibilities at once.", "weight": 0.9 },
      "90-100": { "text": "I always feel deeply overwhelmed when managing many tasks.", "weight": 1.0 }
    }
  },    
  {
    text: 'I prefer organized, planned activities over spontaneous events.',
    trait: 'conscientiousness',
    weight: 0.9,
    subtext: {
      '0-10': { text: 'I rarely prefer organized activities and enjoy spontaneity.', weight: 0.1 },
      '10-20': { text: 'I occasionally enjoy planned activities but like being spontaneous.', weight: 0.2 },
      '20-30': { text: 'I sometimes prefer organized activities over spontaneous ones.', weight: 0.3 },
      '30-40': { text: 'I moderately enjoy planned activities.', weight: 0.4 },
      '40-50': { text: 'I fairly often prefer organized and structured events.', weight: 0.5 },
      '50-60': { text: 'I frequently choose planned activities over spontaneous ones.', weight: 0.6 },
      '60-70': { text: 'I regularly prefer organized, planned events.', weight: 0.7 },
      '70-80': { text: 'I strongly favor structured and well-planned activities.', weight: 0.8 },
      '80-90': { text: 'I am highly inclined to choose organized events over spontaneous ones.', weight: 0.9 },
      '90-100': { text: 'I exclusively prefer meticulously organized and planned activities.', weight: 1.0 },
    }
  },
  {
    "text": "I often take charge in group settings and feel confident in leadership roles.",
    "trait": "extraversion",
    "weight": 1.0,
    "subtext": {
      "0-10": { "text": "I rarely take charge in groups and avoid leadership roles.", "weight": 0.1 },
      "10-20": { "text": "I occasionally take charge but prefer to follow in group settings.", "weight": 0.2 },
      "20-30": { "text": "I sometimes feel comfortable taking charge in group settings.", "weight": 0.3 },
      "30-40": { "text": "I moderately enjoy taking charge and leading in group settings.", "weight": 0.4 },
      "40-50": { "text": "I fairly often feel confident leading in group settings.", "weight": 0.5 },
      "50-60": { "text": "I frequently take charge and feel comfortable leading.", "weight": 0.6 },
      "60-70": { "text": "I regularly feel confident and effective in leadership roles.", "weight": 0.7 },
      "70-80": { "text": "I strongly enjoy leading and taking charge in group settings.", "weight": 0.8 },
      "80-90": { "text": "I am highly confident and capable in leadership roles.", "weight": 0.9 },
      "90-100": { "text": "I thrive on taking charge and feel fully confident in leadership roles.", "weight": 1.0 }
    }
  },  
  {
    text: 'I often prioritize harmony and avoid conflict in my relationships.',
    trait: 'agreeableness',
    weight: 1.0,
    subtext: {
      '0-10': { text: 'I rarely prioritize harmony and may engage in conflicts.', weight: 0.1 },
      '10-20': { text: 'I occasionally try to avoid conflict but don’t always prioritize harmony.', weight: 0.2 },
      '20-30': { text: 'I sometimes try to maintain harmony in my relationships.', weight: 0.3 },
      '30-40': { text: 'I moderately prioritize harmony and avoid conflicts when possible.', weight: 0.4 },
      '40-50': { text: 'I fairly often strive to maintain harmony in my relationships.', weight: 0.5 },
      '50-60': { text: 'I frequently avoid conflict and prioritize harmonious relationships.', weight: 0.6 },
      '60-70': { text: 'I regularly make efforts to maintain harmony and avoid disagreements.', weight: 0.7 },
      '70-80': { text: 'I strongly prioritize harmony in my relationships.', weight: 0.8 },
      '80-90': { text: 'I am highly committed to avoiding conflicts and fostering harmony.', weight: 0.9 },
      '90-100': { text: 'I always prioritize harmony and work tirelessly to avoid conflicts.', weight: 1.0 },
    }
  },
  {
    text: 'I tend to feel anxious or worried in stressful situations.',
    trait: 'neuroticism',
    weight: 1.0,
    subtext: {
      '0-10': { text: 'I rarely feel anxious or worried, even in stressful situations.', weight: 0.1 },
      '10-20': { text: 'I occasionally feel mild anxiety in stress-inducing situations.', weight: 0.2 },
      '20-30': { text: 'I sometimes feel worried or anxious under stress.', weight: 0.3 },
      '30-40': { text: 'I moderately experience anxiety in stressful scenarios.', weight: 0.4 },
      '40-50': { text: 'I fairly often feel worried when faced with stress.', weight: 0.5 },
      '50-60': { text: 'I frequently feel anxious during stressful situations.', weight: 0.6 },
      '60-70': { text: 'I regularly experience worry or anxiety in stressful circumstances.', weight: 0.7 },
      '70-80': { text: 'I strongly feel anxious and worried in stressful situations.', weight: 0.8 },
      '80-90': { text: 'I am highly prone to anxiety and worry under stress.', weight: 0.9 },
      '90-100': { text: 'I almost always feel deeply anxious or worried in stressful situations.', weight: 1.0 },
    }
  },
  
  {
    text: 'I feel a strong responsibility to meet my goals and commitments.',
    trait: 'conscientiousness',
    weight: 1.1,
    subtext: {
      '0-10': { text: 'I rarely feel responsible for meeting my goals or commitments.', weight: 0.1 },
      '10-20': { text: 'I occasionally take responsibility for meeting my goals.', weight: 0.2 },
      '20-30': { text: 'I sometimes feel committed to fulfilling my goals.', weight: 0.3 },
      '30-40': { text: 'I moderately feel responsible for achieving my goals.', weight: 0.4 },
      '40-50': { text: 'I fairly often feel a strong responsibility to meet commitments.', weight: 0.5 },
      '50-60': { text: 'I frequently ensure I meet my goals and commitments.', weight: 0.6 },
      '60-70': { text: 'I regularly feel accountable for achieving my goals.', weight: 0.7 },
      '70-80': { text: 'I strongly feel responsible for meeting my commitments.', weight: 0.8 },
      '80-90': { text: 'I am highly dedicated to fulfilling my goals and responsibilities.', weight: 0.9 },
      '90-100': { text: 'I always feel a deep responsibility to achieve my goals.', weight: 1.0 },
    }
  },
  {
    text: 'I enjoy discussing ideas and debating with others.',
    trait: 'extraversion',
    weight: 1.1,
    subtext: {
      '0-10': { text: 'I rarely enjoy discussing ideas or debating with others.', weight: 0.1 },
      '10-20': { text: 'I occasionally engage in discussions but avoid debates.', weight: 0.2 },
      '20-30': { text: 'I sometimes enjoy discussing ideas with others.', weight: 0.3 },
      '30-40': { text: 'I moderately enjoy debating and discussing topics.', weight: 0.4 },
      '40-50': { text: 'I fairly often engage in debates and discussions.', weight: 0.5 },
      '50-60': { text: 'I frequently enjoy sharing ideas and debating with others.', weight: 0.6 },
      '60-70': { text: 'I regularly discuss and debate ideas enthusiastically.', weight: 0.7 },
      '70-80': { text: 'I strongly enjoy sharing ideas and engaging in debates.', weight: 0.8 },
      '80-90': {text: 'I am highly energized by discussing and debating ideas.', weight: 0.9 },
      '90-100': {text: 'I always thrive on discussing ideas with others.', weight:1}
    }
  },
  {
    text: 'I strive to be understanding and supportive towards others.',
    trait: 'agreeableness',
    weight: 1.2,
    subtext: {
      '0-10': { text: 'I rarely try to understand or support others.', weight: 0.1 },
      '10-20': { text: 'I occasionally make an effort to be supportive.', weight: 0.2 },
      '20-30': { text: 'I sometimes try to understand and support others.', weight: 0.3 },
      '30-40': { text: 'I moderately strive to show understanding.', weight: 0.4 },
      '40-50': { text: 'I fairly often make an effort to be supportive.', weight: 0.5 },
      '50-60': { text: 'I frequently try to understand and support others.', weight: 0.6 },
      '60-70': { text: 'I regularly strive to show understanding and support.', weight: 0.7 },
      '70-80': { text: 'I strongly strive to be understanding and supportive.', weight: 0.8 },
      '80-90': { text: 'I am highly focused on understanding and supporting others.', weight: 0.9 },
      '90-100': { text: 'I always prioritize being understanding and supportive.', weight: 1.0 },
    }
  },
  {
    text: 'I often feel uneasy or second-guess myself when making decisions.',
    trait: 'neuroticism',
    weight: 0.9,
    subtext: {
      '0-10': { text: 'I rarely feel uneasy or second-guess my decisions.', weight: 0.1 },
      '10-20': { text: 'I occasionally second-guess myself when deciding.', weight: 0.2 },
      '20-30': { text: 'I sometimes feel unsure when making decisions.', weight: 0.3 },
      '30-40': { text: 'I moderately feel uneasy when deciding.', weight: 0.4 },
      '40-50': { text: 'I fairly often second-guess my decisions.', weight: 0.5 },
      '50-60': { text: 'I frequently feel uneasy when making decisions.', weight: 0.6 },
      '60-70': { text: 'I regularly second-guess myself when deciding.', weight: 0.7 },
      '70-80': { text: 'I strongly feel uneasy about making decisions.', weight: 0.8 },
      '80-90': { text: 'I am highly prone to second-guessing myself.', weight: 0.9 },
      '90-100': { text: 'I almost always feel uneasy and second-guess my decisions.', weight: 1.0 },
    }
  },
  
  {
    text: 'I tend to make decisions based on facts rather than feelings.',
    trait: 'conscientiousness',
    weight: 1.3,
    subtext: {
      '0-10': { text: 'I almost always make decisions based on my feelings, rarely relying on facts.', weight: 0.1 
      },
      '10-20': { text: 'I mostly decide using my emotions, with little consideration for facts.', weight: 0.2 
      },
      '20-30': { text: 'I sometimes consider facts, but my feelings usually guide my choices.',  weight: 0.3 
      },
      '30-40': { text: 'I occasionally let facts influence my decisions, though feelings tend to dominate.',  weight: 0.4 
      },
      '40-50': { text: 'I try to balance facts and feelings when making decisions.', weight: 0.5 
      },
      '50-60': { text: 'I usually lean toward basing my decisions on facts, even though emotions still play a role.', weight: 0.6 
      },
      '60-70': { text: 'I frequently base my decisions on facts rather than on my feelings.', weight: 0.7 
      },
      '70-80': { text: 'I consistently prioritize facts in my decision-making, with minimal influence from emotions.', weight: 0.8 
      },
      '80-90': { text: 'I almost always rely on facts when making decisions, rarely letting feelings interfere.', weight: 0.9 
      },
      '90-100': { text: 'I always base my decisions on facts, completely setting aside my feelings.', weight: 1.0 
      }
    }
  },
  
  {
    text: 'I tend to stay calm and assertive when solving problems.',
    trait: 'extraversion',
    weight: 1.3,
    subtext: {
      '0-10': { text: 'I rarely stay calm or assertive when facing problems.', weight: 0.1 },
      '10-20': { text: 'I occasionally remain calm but struggle with assertiveness.', weight: 0.2 },
      '20-30': { text: 'I sometimes stay calm and assertive in difficult situations.', weight: 0.3 },
      '30-40': { text: 'I moderately stay calm and focused under pressure.', weight: 0.4 },
      '40-50': { text: 'I fairly often maintain calm and assertiveness when solving problems.', weight: 0.5 },
      '50-60': { text: 'I frequently stay calm and assertive under stress.', weight: 0.6 },
      '60-70': { text: 'I regularly remain calm and focused when solving problems.', weight: 0.7 },
      '70-80': { text: 'I strongly stay composed and assertive when faced with problems.', weight: 0.8 },
      '80-90': { text: 'I am highly calm and assertive under pressure.', weight: 0.9 },
      '90-100': { text: 'I always stay calm, composed, and assertive when facing problems.', weight: 1.0 },
    }
  },
  {
    text: 'I’m sensitive to other people’s feelings and try to meet their needs.',
    trait: 'agreeableness',
    weight: 1.0,
    subtext: {
      '0-10': { text: 'I rarely notice or care about others’ feelings.', weight: 0.1 },
      '10-20': { text: 'I occasionally pay attention to others’ feelings.', weight: 0.2 },
      '20-30': { text: 'I sometimes try to be sensitive to others’ needs.', weight: 0.3 },
      '30-40': { text: 'I moderately notice and respond to others’ feelings.', weight: 0.4 },
      '40-50': { text: 'I fairly often try to meet others’ emotional needs.', weight: 0.5 },
      '50-60': { text: 'I frequently notice and respond to others’ feelings.', weight: 0.6 },
      '60-70': { text: 'I regularly make an effort to meet others’ needs.', weight: 0.7 },
      '70-80': { text: 'I strongly focus on being sensitive and supportive.', weight: 0.8 },
      '80-90': { text: 'I am highly aware of others’ emotions and try to meet their needs.', weight: 0.9 },
      '90-100': { text: 'I always prioritize being sensitive and supportive to others.', weight: 1.0 },
    }
  },
  {
    text: 'I often dwell on past mistakes and think about possible outcomes.',
    trait: 'neuroticism',
    weight: 0.95,
    subtext: {
      '0-10': { text: 'I rarely think about past mistakes or think about the possible outcomes.', weight: 0.1 },
      '10-20': { text: 'I occasionally reflect on past mistakes and consider possible outcomes.', weight: 0.2 },
      '20-30': { text: 'I sometimes dwell on mistakes and worry about outcomes.', weight: 0.3 },
      '30-40': { text: 'I moderately worry about past and possible outcomes.', weight: 0.4 },
      '40-50': { text: 'I fairly often dwell on past mistakes and outcomes.', weight: 0.5 },
      '50-60': { text: 'I frequently reflect on past mistakes and worry about outcomes.', weight: 0.6 },
      '60-70': { text: 'I regularly dwell on mistakes and stress about what could have happened.', weight: 0.7 },
      '70-80': { text: 'I strongly focus on past mistakes and worry about what could have happened.', weight: 0.8 },
      '80-90': { text: 'I am highly prone to dwelling on past mistakes and worries.', weight: 0.9 },
      '90-100': { text: 'I almost always dwell on the past and stress about what could have happened.', weight: 1.0 },
    }
  },
  {
    text: 'I am detail-oriented and take time to think through tasks carefully.',
    trait: 'conscientiousness',
    weight: 0.9,
    subtext: {
      '0-10': { text: 'I rarely pay attention to details or think through tasks.', weight: 0.1 },
      '10-20': { text: 'I occasionally take time to think about tasks in detail.', weight: 0.2 },
      '20-30': { text: 'I sometimes focus on details when completing tasks.', weight: 0.3 },
      '30-40': { text: 'I moderately pay attention to details.', weight: 0.4 },
      '40-50': { text: 'I fairly often think through tasks carefully.', weight: 0.5 },
      '50-60': { text: 'I frequently focus on details and think through tasks.', weight: 0.6 },
      '60-70': { text: 'I regularly take time to focus on details.', weight: 0.7 },
      '70-80': { text: 'I strongly focus on details and think carefully about tasks.', weight: 0.8 },
      '80-90': { text: 'I am highly detail-oriented and thorough with tasks.', weight: 0.9 },
      '90-100': { text: 'I always focus on details and think through tasks thoroughly.', weight: 1.0 },
    }
  },
  {
    text: 'I’m known for being independent and bold in my approach to problems.',
    trait: 'extraversion',
    weight: 1.0,
    subtext: {
      '0-10': { text: 'I rarely act independently or boldly when solving problems.', weight: 0.1 },
      '10-20': { text: 'I occasionally act independently but rarely take bold steps.', weight: 0.2 },
      '20-30': { text: 'I sometimes approach problems boldly and independently.', weight: 0.3 },
      '30-40': { text: 'I moderately act boldly and independently in problem-solving.', weight: 0.4 },
      '40-50': { text: 'I fairly often show independence and boldness.', weight: 0.5 },
      '50-60': { text: 'I frequently solve problems independently and boldly.', weight: 0.6 },
      '60-70': { text: 'I regularly take bold and independent approaches to problems.', weight: 0.7 },
      '70-80': { text: 'I strongly demonstrate independence and boldness.', weight: 0.8 },
      '80-90': { text: 'I am highly independent and bold in my approach to challenges.', weight: 0.9 },
      '90-100': { text: 'I always act independently and boldly when solving problems.', weight: 1.0 },
    }
  },
  {
    text: 'I prefer to work as part of a team and value cooperation.',
    trait: 'agreeableness',
    weight: 0.9,
    subtext: {
      '0-10': { text: 'I rarely value cooperation or enjoy working in a team.', weight: 0.1 },
      '10-20': { text: 'I occasionally work in teams but don’t always value cooperation.', weight: 0.2 },
      '20-30': { text: 'I sometimes prefer working as part of a team.', weight: 0.3 },
      '30-40': { text: 'I moderately value cooperation and teamwork.', weight: 0.4 },
      '40-50': { text: 'I fairly often enjoy working in teams and value cooperation.', weight: 0.5 },
      '50-60': { text: 'I frequently prefer teamwork and cooperative efforts.', weight: 0.6 },
      '60-70': { text: 'I regularly work well in teams and value cooperation.', weight: 0.7 },
      '70-80': { text: 'I strongly prefer teamwork and emphasize cooperation.', weight: 0.8 },
      '80-90': { text: 'I am highly inclined to work as part of a team and value cooperation.', weight: 0.9 },
      '90-100': { text: 'I always value teamwork and prioritize cooperation in group settings.', weight: 1.0 },
    }
  },
  {
    text: 'I tend to overthink situations and feel uneasy about the unknown.',
    trait: 'neuroticism',
    weight: 1.0,
    subtext: {
      '0-10': { text: 'I rarely overthink or feel uneasy about the unknown.', weight: 0.1 },
      '10-20': { text: 'I occasionally feel uneasy when faced with the unknown.', weight: 0.2 },
      '20-30': { text: 'I sometimes overthink and feel uneasy about uncertainty.', weight: 0.3 },
      '30-40': { text: 'I moderately overthink situations and feel uneasy about the unknown.', weight: 0.4 },
      '40-50': { text: 'I fairly often feel uneasy about uncertain situations.', weight: 0.5 },
      '50-60': { text: 'I frequently overthink and feel uneasy about uncertainty.', weight: 0.6 },
      '60-70': { text: 'I regularly overthink situations and stress about the unknown.', weight: 0.7 },
      '70-80': { text: 'I strongly feel uneasy and overthink unknown scenarios.', weight: 0.8 },
      '80-90': { text: 'I am highly prone to overthinking and feeling uneasy about the unknown.', weight: 0.9 },
      '90-100': { text: 'I always overthink situations and feel deeply uneasy about uncertainty.', weight: 1.0 },
    }
  },
  
  ]

// Group statements into stages
export const stages = [
  statements.slice(0, 3), // Stage 0
  statements.slice(3, 7), // Stage 1
  statements.slice(7, 11), // Stage 2
  statements.slice(11, 15), // Stage 3
  statements.slice(15, 19), // Stage 4
  statements.slice(19, 23), // Stage 5
];

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
    auxiliary: 'Fe>Si (Superego + Id)', 
    tertiary: 'Fe>Si (Ego + Id)', 
    inferior: 'Fi>Se (Ego + Id)', 
    opposite: 'ESTJ',
  },
];

