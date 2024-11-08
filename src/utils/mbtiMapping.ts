import { weightedEuclideanDistance } from './scoring'

export const MBTIProfiles = [
  {
    name: 'ENTP',
    traits: {
      openness: 0.85,
      conscientiousness: 0.55,
      extraversion: 0.8,
      agreeableness: 0.5,
      neuroticism: 0.4
    },
    mode: 'Fight'
  },
  {
    name: 'ESTP',
    traits: {
      openness: 0.95,
      conscientiousness: 0.45,
      extraversion: 0.85,
      agreeableness: 0.4,
      neuroticism: 0.5
    },
    mode: 'Fight'
  },
  {
    name: 'INTP',
    traits: {
      openness: 0.4,
      conscientiousness: 0.6,
      extraversion: 0.35,
      agreeableness: 0.3,
      neuroticism: 0.5
    },
    mode: 'Fight'
  },
  {
    name: 'ISTP',
    traits: {
      openness: 0.3,
      conscientiousness: 0.65,
      extraversion: 0.4,
      agreeableness: 0.35,
      neuroticism: 0.45
    },
    mode: 'Fight'
  },
  {
    name: 'INTJ',
    traits: {
      openness: 0.85,
      conscientiousness: 0.8,
      extraversion: 0.3,
      agreeableness: 0.35,
      neuroticism: 0.4
    },
    mode: 'Freeze'
  },
  {
    name: 'ISTJ',
    traits: {
      openness: 0.5,
      conscientiousness: 0.9,
      extraversion: 0.25,
      agreeableness: 0.3,
      neuroticism: 0.35
    },
    mode: 'Freeze'
  },
  {
    name: 'ENTJ',
    traits: {
      openness: 0.4,
      conscientiousness: 0.9,
      extraversion: 0.75,
      agreeableness: 0.35,
      neuroticism: 0.25
    },
    mode: 'Freeze'
  },
  {
    name: 'ESTJ',
    traits: {
      openness: 0.3,
      conscientiousness: 0.95,
      extraversion: 0.7,
      agreeableness: 0.35,
      neuroticism: 0.2
    },
    mode: 'Freeze'
  },
  {
    name: 'ISFJ',
    traits: {
      openness: 0.6,
      conscientiousness: 0.65,
      extraversion: 0.4,
      agreeableness: 0.85,
      neuroticism: 0.4
    },
    mode: 'Fawn'
  },
  {
    name: 'INFJ',
    traits: {
      openness: 0.85,
      conscientiousness: 0.75,
      extraversion: 0.35,
      agreeableness: 0.9,
      neuroticism: 0.45
    },
    mode: 'Fawn'
  },
  {
    name: 'ESFJ',
    traits: {
      openness: 0.7,
      conscientiousness: 0.8,
      extraversion: 0.6,
      agreeableness: 0.9,
      neuroticism: 0.35
    },
    mode: 'Fawn'
  },
  {
    name: 'ENFJ',
    traits: {
      openness: 0.8,
      conscientiousness: 0.85,
      extraversion: 0.7,
      agreeableness: 0.95,
      neuroticism: 0.3
    },
    mode: 'Fawn'
  },
  {
    name: 'ESFP',
    traits: {
      openness: 0.65,
      conscientiousness: 0.5,
      extraversion: 0.7,
      agreeableness: 0.7,
      neuroticism: 0.8
    },
    mode: 'Flight'
  },
  {
    name: 'ENFP',
    traits: {
      openness: 0.9,
      conscientiousness: 0.55,
      extraversion: 0.75,
      agreeableness: 0.75,
      neuroticism: 0.85
    },
    mode: 'Flight'
  },
  {
    name: 'ISFP',
    traits: {
      openness: 0.45,
      conscientiousness: 0.2,
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
      conscientiousness: 0.5,
      extraversion: 0.3,
      agreeableness: 0.8,
      neuroticism: 0.55
    },
    mode: 'Flight'
  }
]

// Define weights, emphasizing critical traits for each 4F mode
const weights: Record<string, Record<string, number>> = {
  Fight: {
    openness: 1.2,           // High openness is crucial for Fight
    conscientiousness: 0.6,   // Lower conscientiousness to allow flexibility
    extraversion: 1.2,        // High extraversion for assertiveness
    agreeableness: 0.4,       // Lower agreeableness for competitiveness
    neuroticism: 0.7          // Moderate neuroticism for adaptability
  },
  Flight: {
    openness: 1,              // High openness for adaptability
    conscientiousness: 0.5,   // Moderate conscientiousness
    extraversion: 0.8,        // High extraversion for resourcefulness
    agreeableness: 1,         // High agreeableness for social alignment
    neuroticism: 2            // High neuroticism for awareness of risks
  },
  Freeze: {
    openness: 0.5,            // Lower openness, indicating caution
    conscientiousness: 1.2,   // High conscientiousness for control and structure
    extraversion: 0.5,        // Lower extraversion, favoring introspection
    agreeableness: 0.4,       // Lower agreeableness, focusing on resilience
    neuroticism: 0.5          // Moderate neuroticism for stability
  },
  Fawn: {
    openness: 0.7,            // Moderate openness
    conscientiousness: 0.7,   // Balanced conscientiousness
    extraversion: 0.6,        // Balanced extraversion for social engagement
    agreeableness: 1.5,       // High agreeableness, a core trait for Fawn
    neuroticism: 0.5          // Moderate neuroticism for emotional management
  }
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

export const matchMBTIType = (profile: any, primary4F: any) => {
  const candidates = MBTIProfiles.filter(p => p.mode === primary4F)
  let closestType = ''
  let closestDistance = Infinity

  candidates.forEach(candidate => {
    const distance = weightedEuclideanDistance(
      profile,
      candidate.traits,
      profile
    )
    console.log('Distance:', distance, 'Type: ', candidate.name)
    if (distance < closestDistance) {
      closestDistance = distance
      closestType = candidate.name
    }
  })

  return closestType
}

export const determinePrimary4FType = (profile: any) => {
  const fourFIdealProfiles = {
    Fight: {
      openness: 0.7375,
      conscientiousness: 0.6,
      extraversion: 0.8,
      agreeableness: 0.3875,
      neuroticism: 0.4625
    },
    Flight: {
      openness: 0.8125,
      conscientiousness: 0.5375,
      extraversion: 0.6,
      agreeableness: 0.7375,
      neuroticism: 0.675
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

  console.log(profile)

  return Object.keys(fourFIdealProfiles).reduce((a, b) =>
    weightedEuclideanDistance(
      profile,
      (fourFIdealProfiles as any)[a],
      weights[a] // Apply the specific weights for each mode
    ) <
    weightedEuclideanDistance(profile, (fourFIdealProfiles as any)[b], weights[b])
      ? a
      : b
  )
}
