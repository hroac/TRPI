
export const weightedEuclideanDistance = (profile: any, ideal: any, weights: any = {}) => {
  return Math.sqrt(Object.keys(profile).reduce((sum, key) => {
    const diff = profile[key] - ideal[key];
    return sum + weights[key] * Math.pow(diff, 2);
  }, 0));
};

export const determinePrimary4FType = (profile: any) => {
  const fourFIdealProfiles = {
    "Fight": {
        openness: 0.70,
        conscientiousness: 0.60,
        extraversion: 0.80,
        agreeableness: 0.30,
        neuroticism: 0.50
    },
    "Flight": {
        openness: 0.80,
        conscientiousness: 0.40,
        extraversion: 0.80,
        agreeableness: 0.30,
        neuroticism: 0.70
    },
    "Freeze": {
        openness: 0.40,
        conscientiousness: 0.80,
        extraversion: 0.30,
        agreeableness: 0.30,
        neuroticism: 0.30
    },
    "Fawn": {
        openness: 0.60,
        conscientiousness: 0.70,
        extraversion: 0.70,
        agreeableness: 0.90,
        neuroticism: 0.40
    }
};
  return Object.keys(fourFIdealProfiles).reduce((a, b) => (
    weightedEuclideanDistance(profile, (fourFIdealProfiles as any)[a], profile) <
    weightedEuclideanDistance(profile, (fourFIdealProfiles as any)[b] , profile) ? a : b
  ));
};
