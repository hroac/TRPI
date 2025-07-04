import { Matrix, solve, inverse} from 'ml-matrix';

type Trait =
  | 'openness'
  | 'conscientiousness'
  | 'extraversion'
  | 'agreeableness'
  | 'neuroticism';

const TRAITS: Trait[] = [
  'openness',
  'conscientiousness',
  'extraversion',
  'agreeableness',
  'neuroticism',
];

interface Responses extends Record<Trait, number[]> {}
interface User { id: string; responses: Responses }

/* ---------- helpers -------------------------------------------------- */
function traitAverages(r: Responses): number[] {
  return TRAITS.map(t => {
    const arr = r[t];
    return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
  });
}

interface SingleModel {
  target: Trait;
  beta: number[];   // 4 coeffs + intercept
  rmse: number;
}

interface ResidualModels {
  [trait: string]: SingleModel;
}

/* ---------- training ------------------------------------------------- */
export function trainResidualModels(users: User[]): ResidualModels {
  const data = users.map(u => traitAverages(u.responses)); // rows: [O,C,E,A,N]

  const models: ResidualModels = {};

  TRAITS.forEach((target, idx) => {
    // Build X with the OTHER four traits
    const X = new Matrix(
      data.map(row => row.filter((_, j) => j !== idx).concat(1)), // + intercept
    );
    const y = Matrix.columnVector(data.map(row => row[idx]));

    // Least-squares: beta = X.solve(y)
    const betaMat = solve(X,y);                // (5×1)
    const beta = betaMat.to1DArray();

    // RMSE
    const yHat = X.mmul(betaMat);
    const residuals = y.clone().sub(yHat);
    const mse =
      residuals.transpose().mmul(residuals).get(0, 0) /
      (users.length - X.columns);
    const rmse = Math.sqrt(mse);

    models[target] = { target, beta, rmse };
  });

  return models;
}

/* ---------- scoring -------------------------------------------------- */
export function traitResidualZ(
  newUser: User,
  models: ResidualModels,
  trait: Trait,
): number {
  const model = models[trait];
  const traits = traitAverages(newUser.responses); // [O,C,E,A,N]

  // Assemble predictors (other 4) in original order
  const predictors = traits.filter((_, idx) => TRAITS[idx] !== trait);
  const [b1, b2, b3, b4, b0] = model.beta;

  const predicted =
    b1 * predictors[0] +
    b2 * predictors[1] +
    b3 * predictors[2] +
    b4 * predictors[3] +
    b0;

  const residual = traits[TRAITS.indexOf(trait)] - predicted;
  return model.rmse === 0 ? 0 : residual / model.rmse;
}

/* ---------- convenience flagger ------------------------------------- */
export function isInflated(
  newUser: User,
  models: ResidualModels,
  trait: Trait,
  zThreshold = 2.0,
): boolean {
  return traitResidualZ(newUser, models, trait) > zThreshold;
}

export function isAnyInflated(
  newUser: User,
  models: ResidualModels,
  zThreshold = 2.0,
): Array<{[k in Trait]: boolean}> {
  return TRAITS.map(trait => {
    return {[trait as Trait]:  traitResidualZ(newUser, models, trait) > zThreshold}
  }) as Array<{[k in Trait]: boolean}>;
}
