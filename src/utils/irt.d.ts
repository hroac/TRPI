/*  Public types for IRT helpers  */
export type Trait =
  | 'openness'
  | 'conscientiousness'
  | 'extraversion'
  | 'agreeableness'
  | 'neuroticism';

export interface CanonItem {
  trait: Trait;
  index: string;
}

export interface Bin {
  /* raw TRPI bin (already parsed) */
  responses: Record<Trait, number[]>;
  statements: { trait: Trait; index: string | number }[];
}

export interface IrtReliability {
  trait: Trait;
  reliability: number;      // NaN ⇢ not enough data / non-convergence
}
