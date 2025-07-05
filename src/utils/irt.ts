/* --------------------------------------------------------------------
    3-PL and 2-PL EM (Bock–Aitkin) with log–space E-step
    - Fits each Big-Five trait separately
    - Returns Lord marginal reliability ρ = 1 - mean(SE²) / Var(θ̂)
    - © 2025 MIT Licence
    -------------------------------------------------------------------- */

export type Trait =
  | 'openness'
  | 'conscientiousness'
  | 'extraversion'
  | 'agreeableness'
  | 'neuroticism';

export interface Bin {
  responses: Record<Trait, number[]>; // 0 or 1 per item
  statements: { trait: Trait; index: string | number }[]; // metadata
  userId: string;
}

interface ItemPar3PL { a: number; b: number; c: number }
interface ItemPar2PL { a: number; b: number }
interface FitOut { theta: number[]; se: number[]; items: (ItemPar2PL | ItemPar3PL)[] }


/* ------------------------------------------------------------------ */
/* Handy Math Helpers                        */
/* ------------------------------------------------------------------ */
const logistic3 = (θ: number, a: number, b: number, c: number) =>
  c + (1 - c) / (1 + Math.exp(-a * (θ - b)));

const logistic2 = (θ: number, a: number, b: number) =>
  1 / (1 + Math.exp(-a * (θ - b)));

const logSumExp = (vals: number[]): number => {
  const m = Math.max(...vals);
  return m + Math.log(vals.reduce((s, v) => s + Math.exp(v - m), 0));
};

/* ---------------------- 21-point Gauss-Hermite --------------------- */
const GH_N = 21;
const GH_X = [
  -5.38748089, -4.60368245, -3.94476404, -3.34785457, -2.78880606,
  -2.25497400, -1.73853771, -1.23407622, -0.73747373, -0.24534071,
   0.24534071,  0.73747373,  1.23407622,  1.73853771,  2.25497400,
   2.78880606,  3.34785457,  3.94476404,  4.60368245,  5.38748089,
   0 // centre node, improves numeric stability
];
const GH_W = [
  2.22939365e-13, 4.39934099e-10, 1.08606937e-07, 7.80255648e-06,
  1.28345739e-04, 5.79977364e-03, 7.46111884e-02, 2.69266719e-01,
  4.91099511e-01, 2.70990141e-01, 2.70990141e-01, 4.91099511e-01,
  2.69266719e-01, 7.46111884e-02, 5.79977364e-03, 1.28345739e-04,
  7.80255648e-06, 1.08606937e-07, 4.39934099e-10, 2.22939365e-13,
  0.00039894228 // φ(0)
];

/* ------------------------------------------------------------------ */
/* Canonical (trait, index) order helper             */
/* ------------------------------------------------------------------ */
export function buildCanonical(
  master: { trait: Trait; index: string | number }[]
): { trait: Trait; index: string }[] {
  const seen = new Set<string>();
  const out: { trait: Trait; index: string }[] = [];
  for (const s of master) {
    const id = `${s.trait}||${s.index}`;
    if (!seen.has(id)) {
      seen.add(id);
      out.push({ trait: s.trait, index: String(s.index) });
    }
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Transform bins ⟶ respondent × item matrix (-1 = missing)  */
/* ------------------------------------------------------------------ */
function makeMatrix(
  bins: Bin[],
  trait: Trait,
  canon: { trait: Trait; index: string }[]
): number[][] {
  const colIds = canon
    .map((c, i) => (c.trait === trait ? i : -1))
    .filter((i) => i >= 0);

  const mat: number[][] = [];

  bins.forEach((bin) => {
    const lookup = new Map<string, number>();
    const st = bin.statements.filter((s) => s.trait === trait);
    (bin.responses[trait] || []).forEach((v, i) => {
      lookup.set(`${trait}||${st[i]?.index}`, v);
    });

    const row = colIds.map((ci) => {
      const v = lookup.get(`${trait}||${canon[ci].index}`);
      return v == null ? -1 : v >= 0.5 ? 1 : 0;
    });

    if (row.some((v) => v >= 0)) mat.push(row);
  });

  return mat;
}


/* ------------------------------------------------------------------ */
/* Core 2-PL EM (log-space)                      */
/* ------------------------------------------------------------------ */
function fit2PL(
  mat: number[][],
  maxIter = 100,
  tol = 1e-4
): FitOut {
  const N = mat.length;
  const J = mat[0].length;

  /* ---------- Parameter start values ---------- */
  let a = Array(J).fill(1);     // discrimination
  let b = Array(J).fill(0);     // difficulty

  /* ---------- Scratch buffers ---------- */
  const logP = Array.from({ length: GH_N }, () => Array(J).fill(0));
  const post = Array.from({ length: N }, () => Array(GH_N).fill(0));

  /* ================= EM loops ================= */
  for (let iter = 0; iter < maxIter; ++iter) {
    /* ---- Pre-compute log P_j(θ_k) ---- */
    for (let k = 0; k < GH_N; ++k)
      for (let j = 0; j < J; ++j)
        logP[k][j] = Math.log(logistic2(GH_X[k], a[j], b[j]) + 1e-9);

    /* ---------- E-step (posterior weights) ---------- */
    for (let i = 0; i < N; ++i) {
      const logLike = GH_W.map((w) => Math.log(w)); // prior

      for (let k = 0; k < GH_N; ++k) {
        for (let j = 0; j < J; ++j) {
          const y = mat[i][j];
          if (y < 0) continue;
          const lp = logP[k][j];
          const log_one_minus_p = Math.log(1 - Math.exp(lp) + 1e-9);
          logLike[k] += y * lp + (1 - y) * log_one_minus_p;
        }
      }
      const norm = logSumExp(logLike);
      for (let k = 0; k < GH_N; ++k) post[i][k] = Math.exp(logLike[k] - norm);
    }

    /* ---------- M-step (update a, b) ---------- */
    const newA = [...a];
    const newB = [...b];

    for (let j = 0; j < J; ++j) {
      let numA = 0, denA = 0, numB = 0, denB = 0;

      for (let i = 0; i < N; ++i) {
        const y = mat[i][j];
        if (y < 0) continue;

        for (let k = 0; k < GH_N; ++k) {
          const θ = GH_X[k];
          const w = post[i][k];
          const P = logistic2(θ, a[j], b[j]);
          const Q = 1 - P;
          const d1 = (y - P); // Simplified for 2PL
          const diff = θ - b[j];

          numA += w * d1 * diff;
          denA += w * P * Q * (diff ** 2);

          numB -= w * d1 * a[j];
          denB += w * P * Q * (a[j] ** 2);
        }
      }
      
      const newton = (old: number, num: number, den: number, floor: number, ceil: number) => {
        if (Math.abs(den) < 1e-6) return old;
        let step = num / den;
        for (let damp = 0; damp < 6; ++damp) {
            const trial = old - step; // Note: standard update is x - g/H
            if (isFinite(trial) && trial > floor && trial < ceil) return trial;
            step *= 0.5;
        }
        return old;
      };

      newA[j] = Math.max(0.25, newton(a[j], -numA, denA, 0.25, 5));
      newB[j] = newton(b[j], -numB, denB, -Infinity, Infinity);
    }

    /* ---------- Convergence ---------- */
    const delta = Math.max(
      ...newA.map((v, j) => Math.abs(v - a[j])),
      ...newB.map((v, j) => Math.abs(v - b[j]))
    );

    a = newA;
    b = newB;
    if (delta < tol) break;
  }

  /* ---------------- MAP θ̂ + SE ---------------- */
  const thetaHat: number[] = Array(N).fill(0);
  const se: number[] = Array(N).fill(0);

  for (let i = 0; i < N; ++i) {
    const logLike = GH_W.map((w) => Math.log(w));

    for (let k = 0; k < GH_N; ++k) {
      for (let j = 0; j < J; ++j) {
        const y = mat[i][j];
        if (y < 0) continue;
        const p = logistic2(GH_X[k], a[j], b[j]);
        const lp = Math.log(p + 1e-9);
        const log_one_minus_p = Math.log(1 - p + 1e-9);
        logLike[k] += y * lp + (1 - y) * log_one_minus_p;
      }
    }

    const norm = logSumExp(logLike);
    const weights = logLike.map((l) => Math.exp(l - norm));

    const m1 = weights.reduce((s, v, k) => s + v * GH_X[k], 0);
    const m2 = weights.reduce((s, v, k) => s + v * GH_X[k] * GH_X[k], 0);
    const variance = Math.max(1e-4, m2 - m1 * m1);

    thetaHat[i] = m1;
    se[i] = Math.sqrt(variance);
  }

  const items = a.map<ItemPar2PL>((ai, j) => ({ a: ai, b: b[j] }));
  return { theta: thetaHat, se, items };
}


/* ------------------------------------------------------------------ */
/* Core 3-PL EM (log-space)                      */
/* ------------------------------------------------------------------ */
function fit3PL(
  mat: number[][],
  maxIter = 120,
  tol = 1e-4
): FitOut {
  const N = mat.length;
  const J = mat[0].length;

  /* ---------- parameter start values ---------- */
  let a = Array(J).fill(1);      // discrimination
  let b = Array(J).fill(0);      // difficulty
  let c = Array(J).fill(0.15);   // guessing

  /* ---------- scratch buffers ---------- */
  const logP = Array.from({ length: GH_N }, () => Array(J).fill(0));
  const post = Array.from({ length: N }, () => Array(GH_N).fill(0));

  /* ================= EM loops ================= */
  for (let iter = 0; iter < maxIter; ++iter) {
    /* ---- pre-compute log P_j(θ_k) ---- */
    for (let k = 0; k < GH_N; ++k)
      for (let j = 0; j < J; ++j)
        logP[k][j] = Math.log(logistic3(GH_X[k], a[j], b[j], c[j]));

    /* ---------- E-step (posterior weights) ---------- */
    for (let i = 0; i < N; ++i) {
      const logLike = GH_W.map((w) => Math.log(w)); // prior

      for (let k = 0; k < GH_N; ++k) {
        for (let j = 0; j < J; ++j) {
          const y = mat[i][j];
          if (y < 0) continue;
          const lp = logP[k][j];
          const p = Math.exp(lp);
          const log_one_minus_p = Math.log(1 - p + 1e-9);
          logLike[k] += y * lp + (1 - y) * log_one_minus_p;
        }
      }
      const norm = logSumExp(logLike);
      for (let k = 0; k < GH_N; ++k) post[i][k] = Math.exp(logLike[k] - norm);
    }

    /* ---------- M-step (update a, b, c) ---------- */
    const newA = [...a];
    const newB = [...b];
    const newC = [...c];

    for (let j = 0; j < J; ++j) {
      let numA = 0, denA = 0, numB = 0, denB = 0, numC = 0, denC = 0;

      for (let i = 0; i < N; ++i) {
        const y = mat[i][j];
        if (y < 0) continue;

        for (let k = 0; k < GH_N; ++k) {
          const θ = GH_X[k];
          const w = post[i][k];
          const P = logistic3(θ, a[j], b[j], c[j]);
          const Q = 1 - P;
          const d1 = (y - P) / (P * Q);      // ∂log L / ∂z
          const diff = θ - b[j];

          numA += w * d1 * diff;
          denA += w * -((diff ** 2) * (Q - P));
          numB -= w * d1 * a[j];
          denB += w * -((a[j] ** 2) * (Q - P));

          if (y === 0) {
            numC += w * P;
            denC += w;
          }
        }
      }

      const newton = (old: number, num: number, den: number, floor: number, ceil: number) => {
        if (Math.abs(den) < 1e-6) return old;
        let step = num / den;
        for (let damp = 0; damp < 6; ++damp) {
          const trial = old + step;
          if (isFinite(trial) && trial > floor && trial < ceil) return trial;
          step *= 0.5;
        }
        return old;
      };

      newA[j] = Math.max(0.20, newton(a[j], numA, denA, 0.2, 6));
      newB[j] = newton(b[j], numB, denB, -Infinity, Infinity);

      if (denC + numC > 0) {
        const cHat = numC / (denC + numC);
        newC[j] = Math.min(0.35, Math.max(0.01, cHat));
      }
    }

    /* ---------- convergence ---------- */
    const delta = Math.max(
      ...newA.map((v, j) => Math.abs(v - a[j])),
      ...newB.map((v, j) => Math.abs(v - b[j])),
      ...newC.map((v, j) => Math.abs(v - c[j]))
    );

    a = newA;
    b = newB;
    c = newC;
    if (delta < tol) break;
  }

  /* ---------------- MAP θ̂ + SE ---------------- */
  const thetaHat: number[] = Array(N).fill(0);
  const se: number[] = Array(N).fill(0);

  for (let i = 0; i < N; ++i) {
    const logLike = GH_W.map((w) => Math.log(w));

    for (let k = 0; k < GH_N; ++k) {
      for (let j = 0; j < J; ++j) {
        const y = mat[i][j];
        if (y < 0) continue;
        const lp = Math.log(logistic3(GH_X[k], a[j], b[j], c[j]));
        logLike[k] += y * lp + (1 - y) * Math.log(1 - Math.exp(lp));
      }
    }

    const norm = logSumExp(logLike);
    const weights = logLike.map((l) => Math.exp(l - norm));

    const m1 = weights.reduce((s, v, k) => s + v * GH_X[k], 0);
    const m2 = weights.reduce((s, v, k) => s + v * GH_X[k] * GH_X[k], 0);
    const variance = Math.max(1e-4, m2 - m1 * m1);

    thetaHat[i] = m1;
    se[i] = Math.sqrt(variance);
  }

  const items = a.map<ItemPar3PL>((ai, j) => ({ a: ai, b: b[j], c: c[j] }));
  return { theta: thetaHat, se, items };
}

/* ---------------- Lord marginal reliability ---------------- */
function lordReliability(θ: number[], se: number[]): number {
  const mean = θ.reduce((s, v) => s + v, 0) / θ.length;
  const varθ =
    θ.reduce((s, v) => s + (v - mean) ** 2, 0) / Math.max(1, θ.length - 1);
  const meanSe2 = se.reduce((s, v) => s + v * v, 0) / se.length;
  
  if (varθ <= 0) {
      console.warn("Variance of theta is zero or negative. Cannot compute reliability.", {varθ, theta: θ});
      return NaN;
  }
  
  return Math.max(0, 1 - meanSe2 / varθ);
}

/* ------------------------------------------------------------------ */
/* Public Façade (2-PL)                          */
/* ------------------------------------------------------------------ */
export function compute2PL(
  bins: Bin[],
  allStatements: any[]
): { trait: Trait; reliability: number }[] {
  const canon = buildCanonical(allStatements);

  const TRAITS: Trait[] = [
    'openness',
    'conscientiousness',
    'extraversion',
    'agreeableness',
    'neuroticism',
  ];

  const results: { trait: Trait; reliability: number }[] = [];

  for (const t of TRAITS) {
    const mat = makeMatrix(bins, t, canon);

    if (mat.length < 20) {
      results.push({ trait: t, reliability: NaN });
      continue;
    }

    const { theta, se } = fit2PL(mat);
    results.push({ trait: t, reliability: lordReliability(theta, se) });
  }

  return results;
}


/* ------------------------------------------------------------------ */
/* Public Façade (3-PL)                          */
/* ------------------------------------------------------------------ */
export function compute3PLReliabilities(
  bins: Bin[],
  allStatements: any[]
): { trait: Trait; reliability: number }[] {
  const canon = buildCanonical(allStatements);

  const TRAITS: Trait[] = [
    'openness',
    'conscientiousness',
    'extraversion',
    'agreeableness',
    'neuroticism',
  ];

  const results: { trait: Trait; reliability: number }[] = [];

  for (const t of TRAITS) {
    const mat = makeMatrix(bins, t, canon);

    if (mat.length < 20) {
      results.push({ trait: t, reliability: NaN });
      continue;
    }

    const { theta, se } = fit3PL(mat);
    results.push({ trait: t, reliability: lordReliability(theta, se) });
  }

  return results;
}
