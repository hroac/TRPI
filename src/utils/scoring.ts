
export const weightedEuclideanDistance = (profile: any, ideal: any, weights: any = {}) => {
  return Math.sqrt(Object.keys(profile).reduce((sum, key) => {
    const diff = profile[key] - ideal[key];
    return sum + weights[key] * Math.pow(diff, 2);
  }, 0));
};


