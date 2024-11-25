import { weightedEuclideanDistance } from './scoring'

export const MBTIProfiles = [
  {
    name: 'ENTP',
    traits: {
      openness: 0.85,
      conscientiousness: 0.55,
      extraversion: 0.8,
      agreeableness: 0.4,
      neuroticism: 0.35
    },
    mode: 'Fight'
  },
  {
    name: 'ESTP',
    traits: {
      openness: 0.7,
      conscientiousness: 0.6,
      extraversion: 0.85,
      agreeableness: 0.35,
      neuroticism: 0.5
    },
    mode: 'Fight'
  },
  {
    name: 'INTP',
    traits: {
      openness: 0.5,
      conscientiousness: 0.4,
      extraversion: 0.65,
      agreeableness: 0.35,
      neuroticism: 0.3
    },
    mode: 'Fight'
  },
  {
    name: 'ISTP',
    traits: {
      openness: 0.45,
      conscientiousness: 0.65,
      extraversion: 0.6,
      agreeableness: 0.35,
      neuroticism: 0.45
    },
    mode: 'Fight'
  },
  {
    name: 'INTJ',
    traits: {
      openness: 0.65,
      conscientiousness: 0.8,
      extraversion: 0.4,
      agreeableness: 0.35,
      neuroticism: 0.4
    },
    mode: 'Freeze'
  },
  {
    name: 'ISTJ',
    traits: {
      openness: 0.3,
      conscientiousness: 0.65,
      extraversion: 0.35,
      agreeableness: 0.4,
      neuroticism: 0.45
    },
    mode: 'Freeze'
  },
  {
    name: 'ENTJ',
    traits: {
      openness: 0.5,
      conscientiousness: 0.9,
      extraversion: 0.65,
      agreeableness: 0.35,
      neuroticism: 0.35
    },
    mode: 'Freeze'
  },
  {
    name: 'ESTJ',
    traits: {
      openness: 0.4,
      conscientiousness: 0.8,
      extraversion: 0.65,
      agreeableness: 0.35,
      neuroticism: 0.4
    },
    mode: 'Freeze'
  },
  {
    name: 'ISFJ',
    traits: {
      openness: 0.4,
      conscientiousness: 0.5,
      extraversion: 0.35,
      agreeableness: 0.75,
      neuroticism: 0.45
    },
    mode: 'Fawn'
  },
  {
    name: 'INFJ',
    traits: {
      openness: 0.8,
      conscientiousness: 0.6,
      extraversion: 0.4,
      agreeableness: 0.85,
      neuroticism: 0.5
    },
    mode: 'Fawn'
  },
  {
    name: 'ESFJ',
    traits: {
      openness: 0.35,
      conscientiousness: 0.6,
      extraversion: 0.6,
      agreeableness: 0.8,
      neuroticism: 0.35
    },
    mode: 'Fawn'
  },
  {
    name: 'ENFJ',
    traits: {
      openness: 0.5,
      conscientiousness: 0.65,
      extraversion: 0.7,
      agreeableness: 0.9,
      neuroticism: 0.25
    },
    mode: 'Fawn'
  },
  {
    name: 'ESFP',
    traits: {
      openness: 0.65,
      conscientiousness: 0.55,
      extraversion: 0.55,
      agreeableness: 0.65,
      neuroticism: 0.525
    },
    mode: 'Flight'
  },
  {
    name: 'ENFP',
    traits: {
      openness: 0.9,
      conscientiousness: 0.55,
      extraversion: 0.6,
      agreeableness: 0.7,
      neuroticism: 0.65
    },
    mode: 'Flight'
  },
  {
    name: 'ISFP',
    traits: {
      openness: 0.5,
      conscientiousness: 0.4,
      extraversion: 0.35,
      agreeableness: 0.5,
      neuroticism: 0.7
    },
    mode: 'Flight'
  },
  {
    name: 'INFP',
    traits: {
      openness: 0.45,
      conscientiousness: 0.35,
      extraversion: 0.3,
      agreeableness: 0.55,
      neuroticism: 0.8
    },
    mode: 'Flight'
  }
]

// Define weights, emphasizing critical traits for each 4F mode
const weights: Record<string, Record<string, number>> = {
  Fight: {
    openness: 1.2,           // High openness is crucial for Fight
    conscientiousness: 1.1,   // Lower conscientiousness to allow flexibility
    extraversion: 1.6,        // High extraversion for assertiveness
    agreeableness: 0.8,       // Lower agreeableness for competitiveness
    neuroticism: 0.7          // Moderate neuroticism for adaptability
  },
  Flight: {
    openness: 0.9,              // High openness for adaptability
    conscientiousness: 0.5,   // Moderate conscientiousness
    extraversion: 1.8,        // High extraversion for resourcefulness
    agreeableness: 0.8,         // High agreeableness for social alignment
    neuroticism: 1.6           // High neuroticism for awareness of risks
  },
  Freeze: {
    openness: 0.5,            // Lower openness, indicating caution
    conscientiousness: 1.5,   // High conscientiousness for control and structure
    extraversion: 0.5,        // Lower extraversion, favoring introspection
    agreeableness: 0.4,       // Lower agreeableness, focusing on resilience
    neuroticism: 1.5          // Moderate neuroticism for stability
  },
  Fawn: {
    openness: 0.7,            // Moderate openness
    conscientiousness: 0.7,   // Balanced conscientiousness
    extraversion: 0.6,        // Balanced extraversion for social engagement
    agreeableness: 1.5,       // High agreeableness, a core trait for Fawn
    neuroticism: 0.5          // Moderate neuroticism for emotional management
  }
}
export const determinePrimary4FType = (profile: any) => {
  const fourFIdealProfiles = {
    Fight: {
      openness: 0.6375,
      conscientiousness: 0.6,
      extraversion: 0.8,
      agreeableness: 0.4875,
      neuroticism: 0.3625
    },
    Flight: {
      openness: 0.6125,
      conscientiousness: 0.5375,
      extraversion: 0.65,
      agreeableness: 0.6375,
      neuroticism: 0.775
    },
    Freeze: {
      openness: 0.6875,
      conscientiousness: 0.8875,
      extraversion: 0.5,
      agreeableness: 0.3375,
      neuroticism: 0.3
    },
    Fawn: {
      openness: 0.7375,
      conscientiousness: 0.8,
      extraversion: 0.5125,
      agreeableness: 0.9,
      neuroticism: 0.375
    }
  }

 // console.log(profile)

  return Object.keys(fourFIdealProfiles).reduce((a, b) => {
    const calcA = weightedEuclideanDistance(profile, (fourFIdealProfiles as any)[a], weights[a]) // Apply the specific weights for each mode ) 
   const calcB = weightedEuclideanDistance(profile, (fourFIdealProfiles as any)[b], weights[b])
  
   //console.log(a, calcA,b,calcB)
   return calcA < calcB ? a : b
  }
  )
}

export const normalizeProfile = (profile: { [trait: string]: number }) => {
  const traits = Object.keys(profile)

  // Find global min and max across all traits
  const min = Math.min(...traits.map(key => profile[key]))
  const max = Math.max(...traits.map(key => profile[key]))

  // Edge case: Avoid division by zero if max equals min
  if (max === min) {
    return traits.reduce((normalized, key) => {
      normalized[key] = 0.5 // Set all traits to a midpoint if no variance exists
      return normalized
    }, {} as { [trait: string]: number })
  }

  console.log('Before normalization:', profile)

  // Normalize each trait within a 0-1 range
  const normalizedProfile = traits.reduce((normalized, key) => {
    normalized[key] = (profile[key] - min) / (max - min)
    return normalized
  }, {} as { [trait: string]: number })

  console.log('After normalization:', normalizedProfile)
  return normalizedProfile
}

export const matchMBTIType = (profile: any, primary4F: any, filter: boolean = true) => {
  let candidates = MBTIProfiles;

  if (filter) {
    candidates = candidates.filter(p => p.mode === primary4F);
  }
/* 
  // Apply a bias to the weights based on extraversion
  candidates = candidates.map(candidate => {
    const isIntroverted = candidate.name.startsWith('I');
    const isExtraverted = candidate.name.startsWith('E');

    // Dynamically adjust weight for extraversion bias
    const extraversionBias = isIntroverted
      ? 1 - profile.extraversion // Higher weight for introverted types if extraversion is low
      : 1 + profile.extraversion; // Higher weight for extraverted types if extraversion is high

    return {
      ...candidate,
      weightedTraits: {
        ...candidate.traits,
        extraversion: candidate.traits.extraversion * extraversionBias // Scale extraversion trait dynamically
      }
    };
  });
 */

  let closestType = ''
  let closestDistance = Infinity

  candidates.forEach(candidate => {
    const distance = weightedEuclideanDistance(
      profile,
      candidate.traits,
      profile
    )
    //console.log('Distance:', distance, 'Type: ', candidate.name)
    if (distance < closestDistance) {
      closestDistance = distance
      closestType = candidate.name
    }
  })

  return closestType
}


