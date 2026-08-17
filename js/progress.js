import { TRACKS } from '../data/index.js';
import { store } from './store.js';

export function trackPct(t) {
  const total = t.sections.length + t.artifact.steps.length;
  let done = 0;
  t.sections.forEach(s => { if (store.isDone(s.id)) done++; });
  t.artifact.steps.forEach((_, i) => { if (store.isStep(t.id, i)) done++; });
  return Math.round((done / total) * 100);
}

export function overallPct() {
  return Math.round(TRACKS.reduce((a, t) => a + trackPct(t), 0) / TRACKS.length);
}

export function artifactPct(t) {
  const done = t.artifact.steps.filter((_, i) => store.isStep(t.id, i)).length;
  return Math.round((done / t.artifact.steps.length) * 100);
}
