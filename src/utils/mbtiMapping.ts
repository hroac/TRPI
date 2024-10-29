
import { weightedEuclideanDistance } from './scoring';

const MBTIProfiles = [
  { name: 'ENTP', traits: { openness: 0.85, conscientiousness: 0.55, extraversion: 0.8, agreeableness: 0.35, neuroticism: 0.25 }, mode: 'Fight' },
  { name: 'ESTP', traits: { openness: 0.65, conscientiousness: 0.6, extraversion: 0.85, agreeableness: 0.4, neuroticism: 0.3 }, mode: 'Fight' },
  { name: 'INTP', traits: { openness: 0.75, conscientiousness: 0.6, extraversion: 0.35, agreeableness: 0.3, neuroticism: 0.5 }, mode: 'Fight' },
  { name: 'ISTP', traits: { openness: 0.7, conscientiousness: 0.65, extraversion: 0.4, agreeableness: 0.35, neuroticism: 0.45 }, mode: 'Fight' },
  { name: 'ENTJ', traits: { openness: 0.8, conscientiousness: 0.9, extraversion: 0.75, agreeableness: 0.35, neuroticism: 0.25 }, mode: 'Freeze' },
  { name: 'ESTJ', traits: { openness: 0.6, conscientiousness: 0.95, extraversion: 0.7, agreeableness: 0.35, neuroticism: 0.2 }, mode: 'Freeze' },
  { name: 'INTJ', traits: { openness: 0.85, conscientiousness: 0.8, extraversion: 0.3, agreeableness: 0.35, neuroticism: 0.4 }, mode: 'Freeze' },
  { name: 'ISTJ', traits: { openness: 0.5, conscientiousness: 0.9, extraversion: 0.25, agreeableness: 0.3, neuroticism: 0.35 }, mode: 'Freeze' },
  { name: 'ISFJ', traits: { openness: 0.6, conscientiousness: 0.8, extraversion: 0.4, agreeableness: 0.85, neuroticism: 0.4 }, mode: 'Fawn' },
  { name: 'INFJ', traits: { openness: 0.85, conscientiousness: 0.75, extraversion: 0.35, agreeableness: 0.9, neuroticism: 0.45 }, mode: 'Fawn' },
  { name: 'ESFJ', traits: { openness: 0.7, conscientiousness: 0.8, extraversion: 0.6, agreeableness: 0.9, neuroticism: 0.35 }, mode: 'Fawn' },
  { name: 'ENFJ', traits: { openness: 0.8, conscientiousness: 0.85, extraversion: 0.7, agreeableness: 0.95, neuroticism: 0.3 }, mode: 'Fawn' },
  { name: 'ESFP', traits: { openness: 0.75, conscientiousness: 0.5, extraversion: 0.9, agreeableness: 0.7, neuroticism: 0.4 }, mode: 'Flight' },
  { name: 'ENFP', traits: { openness: 0.9, conscientiousness: 0.55, extraversion: 0.85, agreeableness: 0.75, neuroticism: 0.45 }, mode: 'Flight' },
  { name: 'ISFP', traits: { openness: 0.65, conscientiousness: 0.6, extraversion: 0.35, agreeableness: 0.7, neuroticism: 0.5 }, mode: 'Flight' },
  { name: 'INFP', traits: { openness: 0.95, conscientiousness: 0.5, extraversion: 0.3, agreeableness: 0.8, neuroticism: 0.55 }, mode: 'Flight' }
];


export const matchMBTIType = (profile: any, primary4F: any) => {
  const candidates = MBTIProfiles.filter(p => p.mode === primary4F);
  let closestType = '';
  let closestDistance = Infinity;

  candidates.forEach(candidate => {
    const distance = weightedEuclideanDistance(profile, candidate.traits, profile);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestType = candidate.name;
    }
  });

  return closestType;
};
