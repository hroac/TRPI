import { Matrix, inverse } from 'ml-matrix';
import { Trait, Bin } from './irt';

interface Result { trait: Trait; gCoefficient: number; }

function buildDesign(data: {person: string; item: string; score: number}[], persons: string[], items: string[], includePerson: boolean): Matrix {
  const rows = data.map(d => {
    const row: number[] = [1]; // intercept
    if (includePerson) {
      for (let i = 0; i < persons.length - 1; i++) {
        row.push(d.person === persons[i] ? 1 : 0);
      }
    }
    for (let j = 0; j < items.length - 1; j++) {
      row.push(d.item === items[j] ? 1 : 0);
    }
    return row;
  });
  return new Matrix(rows);
}

function ols(y: number[], X: Matrix): { SSE: number; df: number } {
  const Xt = X.transpose();
  const beta = inverse(Xt.mmul(X)).mmul(Xt).mmul(Matrix.columnVector(y));
  const residuals = Matrix.columnVector(y).sub(X.mmul(beta));
  const SSE = residuals.transpose().mmul(residuals).get(0,0);
  const df = y.length - X.columns;
  return { SSE, df };
}

export function computeGStudy(bins: Bin[]): Result[] {
  const TRAITS: Trait[] = ['openness','conscientiousness','extraversion','agreeableness','neuroticism'];
  const long: {person: string; item: string; score: number; trait: Trait}[] = [];

  bins.forEach(b => {
    const byTrait: Record<Trait, string[]> = {openness:[], conscientiousness:[], extraversion:[], agreeableness:[], neuroticism:[]};
    b.statements.forEach((s: any) => {
      const id = (s.index != null ? String(s.index) : s.text);
      byTrait[s.trait as Trait].push(id);
    });
    TRAITS.forEach(t => {
      const scores = b.responses[t] || [];
      scores.forEach((sc, idx) => {
        const item = byTrait[t][idx];
        if (item != null && b.userId) {
          long.push({ person: b.userId, item: `${t}-${item}`, score: sc, trait: t });
        }
      });
    });
  });

  const results: Result[] = [];

  TRAITS.forEach(trait => {
    const data = long.filter(d => d.trait === trait);
    const persons = Array.from(new Set(data.map(d => d.person)));
    const items = Array.from(new Set(data.map(d => d.item)));

    if (persons.length < 2 || items.length < 2) {
      results.push({ trait, gCoefficient: NaN });
      return;
    }

    const y = data.map(d => d.score);
    const X_full = buildDesign(data, persons, items, true);
    const X_item = buildDesign(data, persons, items, false);

    const full = ols(y, X_full);
    const reduced = ols(y, X_item);

    const SS_person = Math.max(0, reduced.SSE - full.SSE);
    const df_person = persons.length - 1;
    const MS_person = SS_person / df_person;
    const MS_error = full.SSE / full.df;

    const counts = persons.map(p => data.filter(d => d.person === p).length);
    const nPrime = persons.length / counts.reduce((s,c) => s + 1/c, 0);

    const var_error = MS_error;
    const var_person = Math.max(0, (MS_person - MS_error) / nPrime);
    const g = var_person / (var_person + var_error / nPrime + 1e-9);

    results.push({ trait, gCoefficient: g });
  });

  return results;
}
