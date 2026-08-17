// Persistence layer — everything lives in localStorage, nothing leaves the device.
const KEY = 'praxis:v1';
const DEFAULTS = {
  notes: {},      // sectionId -> text
  done: {},       // sectionId -> true   (section studied)
  steps: {},      // "trackId:sIdx" -> true (artifact steps)
  work: {},       // "trackId:sIdx" -> text (artefact builder: the actual deliverable)
  quiz: {},       // trackId -> {best, taken, last}
  missed: {},     // "trackId:qIdx" -> {n, at} (questions got wrong, for the weak-spot deck)
  cards: {},      // cardId -> {box:1..5, seen, due}
  drills: {},     // drillId -> {runs:[{at, secs, words, score}], best}
  drafts: {},     // drillId -> in-progress text, so an interruption does not lose the writing
  sims: {},       // simId -> {at, text, elapsed, scores:{criterion:0-3}, submitted}
  plan: null,     // {role, budget, startedAt, done:{key:true}}
  prefs: { theme: 'dark', last: '', lastBackup: 0, backupNag: 0 },
  streak: { days: [], count: 0 }
};

let state = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(DEFAULTS);
    const parsed = JSON.parse(raw);
    const merged = Object.assign(structuredClone(DEFAULTS), parsed);
    // prefs is nested, so a plain assign would drop new default keys
    merged.prefs = Object.assign(structuredClone(DEFAULTS.prefs), parsed.prefs || {});
    return merged;
  } catch { return structuredClone(DEFAULTS); }
}

let pending = null;
function flush() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); }
  catch (err) {
    // Quota exceeded is the realistic failure here: long-form artefact work.
    document.dispatchEvent(new CustomEvent('praxis:storage-error', { detail: err }));
  }
  pending = null;
}
function save() {
  if (pending) return;
  pending = setTimeout(flush, 220);
}

export const store = {
  get all() { return state; },
  flushNow() { clearTimeout(pending); pending = null; flush(); },

  /* ── notes and study progress ── */
  note(id, val) {
    if (val === undefined) return state.notes[id] || '';
    if (val) state.notes[id] = val; else delete state.notes[id];
    save(); return val;
  },

  isDone(id) { return !!state.done[id]; },
  toggleDone(id) {
    if (state.done[id]) delete state.done[id]; else state.done[id] = true;
    save(); return !!state.done[id];
  },

  stepKey(t, i) { return `${t}:${i}`; },
  isStep(t, i) { return !!state.steps[this.stepKey(t, i)]; },
  toggleStep(t, i) {
    const k = this.stepKey(t, i);
    if (state.steps[k]) delete state.steps[k]; else state.steps[k] = true;
    save(); return !!state.steps[k];
  },

  /* ── artefact builder: the work product itself ── */
  work(t, i, val) {
    const k = this.stepKey(t, i);
    if (val === undefined) return state.work[k] || '';
    if (val.trim()) state.work[k] = val; else delete state.work[k];
    save(); return val;
  },
  workWords(t) {
    return Object.entries(state.work)
      .filter(([k]) => k.startsWith(t + ':'))
      .reduce((a, [, v]) => a + countWords(v), 0);
  },
  hasWork(t, i) { return !!state.work[this.stepKey(t, i)]?.trim(); },

  /* ── quiz + weak spots ── */
  quiz(trackId, score, total) {
    const q = state.quiz[trackId] || { best: 0, taken: 0, last: 0 };
    q.taken++; q.last = score; q.total = total;
    if (score > q.best) q.best = score;
    state.quiz[trackId] = q; save(); return q;
  },
  quizOf(trackId) { return state.quiz[trackId] || null; },

  missQuestion(key) {
    const m = state.missed[key] || { n: 0, at: 0 };
    m.n++; m.at = Date.now();
    state.missed[key] = m; save();
  },
  clearMiss(key) { delete state.missed[key]; save(); },
  get missedKeys() { return Object.keys(state.missed); },

  /* ── flashcards (Leitner) ── */
  card(id) { return state.cards[id] || { box: 1, seen: 0, due: 0 }; },
  gradeCard(id, ok) {
    const c = this.card(id);
    c.box = ok ? Math.min(5, c.box + 1) : 1;
    c.seen++;
    c.due = Date.now() + [0, 1, 2, 4, 8, 16][c.box] * 864e5;
    state.cards[id] = c; save(); return c;
  },

  /* ── timed drills ── */
  drill(id) { return state.drills[id] || null; },
  draft(id, val) {
    if (val === undefined) return state.drafts[id] || '';
    if (val && val.trim()) state.drafts[id] = val; else delete state.drafts[id];
    save(); return val;
  },
  saveDrillRun(id, run) {
    delete state.drafts[id];
    const d = state.drills[id] || { runs: [], best: 0 };
    d.runs.push(run);
    if (d.runs.length > 12) d.runs = d.runs.slice(-12);
    d.best = Math.max(d.best, run.score || 0);
    state.drills[id] = d; save(); return d;
  },
  get drillCount() { return Object.values(state.drills).reduce((a, d) => a + d.runs.length, 0); },

  /* ── take-home simulations ── */
  sim(id) { return state.sims[id] || null; },
  saveSim(id, patch) {
    const s = Object.assign({ at: Date.now(), text: '', elapsed: 0, scores: {}, submitted: false }, state.sims[id], patch);
    s.at = Date.now();
    state.sims[id] = s; save(); return s;
  },

  /* ── prep plan ── */
  get plan() { return state.plan; },
  startPlan(role, budget) {
    state.plan = { role, budget, startedAt: Date.now(), done: {} };
    save(); return state.plan;
  },
  planToggle(key) {
    if (!state.plan) return false;
    if (state.plan.done[key]) delete state.plan.done[key];
    else state.plan.done[key] = true;
    save(); return !!state.plan.done[key];
  },
  planDone(key) { return !!state.plan?.done[key]; },
  endPlan() { state.plan = null; save(); },

  /* ── prefs, streak, data ── */
  pref(k, v) {
    if (v === undefined) return state.prefs[k];
    state.prefs[k] = v; save(); return v;
  },

  touchStreak() {
    const today = new Date().toISOString().slice(0, 10);
    const s = state.streak;
    if (s.days[s.days.length - 1] === today) return s;
    const yest = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    s.count = s.days[s.days.length - 1] === yest ? (s.count || 0) + 1 : 1;
    s.days.push(today);
    if (s.days.length > 400) s.days = s.days.slice(-400);
    save(); return s;
  },
  activeDays(n = 30) {
    const cut = Date.now() - n * 864e5;
    return state.streak.days.filter(d => new Date(d + 'T00:00:00').getTime() >= cut).length;
  },

  // Rough count of things that would hurt to lose, used by the backup nudge.
  valueAtRisk() {
    return Object.keys(state.notes).length
      + Object.keys(state.work).length
      + Object.values(state.sims).filter(s => s.text).length
      + this.drillCount;
  },
  bytesUsed() {
    try { return new Blob([JSON.stringify(state)]).size; } catch { return 0; }
  },

  exportAll() { return JSON.stringify(state, null, 2); },
  importAll(json) {
    const parsed = JSON.parse(json);
    if (typeof parsed !== 'object' || !parsed) throw new Error('not praxis data');
    state = Object.assign(structuredClone(DEFAULTS), parsed);
    state.prefs = Object.assign(structuredClone(DEFAULTS.prefs), parsed.prefs || {});
    flush(); return true;
  },
  reset() { state = structuredClone(DEFAULTS); flush(); }
};

export function countWords(s = '') {
  const t = String(s).trim();
  return t ? t.split(/\s+/).length : 0;
}
