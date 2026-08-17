// Persistence layer — everything lives in localStorage, nothing leaves the device.
const KEY = 'praxis:v1';
const DEFAULTS = {
  notes: {},      // sectionId -> text
  done: {},       // sectionId -> true   (section studied)
  steps: {},      // "trackId:sIdx" -> true (artifact steps)
  quiz: {},       // trackId -> {best, taken, last}
  cards: {},      // cardId -> {box:1..5, seen, due}
  prefs: { theme: 'dark', last: '' },
  streak: { days: [], count: 0 }
};

let state = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(DEFAULTS);
    return Object.assign(structuredClone(DEFAULTS), JSON.parse(raw));
  } catch { return structuredClone(DEFAULTS); }
}

let pending = null;
function flush() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
  pending = null;
}
function save() {
  if (pending) return;
  pending = setTimeout(flush, 220);
}

export const store = {
  get all() { return state; },

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

  quiz(trackId, score, total) {
    const q = state.quiz[trackId] || { best: 0, taken: 0, last: 0 };
    q.taken++; q.last = score; q.total = total;
    if (score > q.best) q.best = score;
    state.quiz[trackId] = q; save(); return q;
  },
  quizOf(trackId) { return state.quiz[trackId] || null },

  card(id) { return state.cards[id] || { box: 1, seen: 0, due: 0 }; },
  gradeCard(id, ok) {
    const c = this.card(id);
    c.box = ok ? Math.min(5, c.box + 1) : 1;
    c.seen++;
    c.due = Date.now() + [0, 1, 2, 4, 8, 16][c.box] * 864e5;
    state.cards[id] = c; save(); return c;
  },

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

  exportAll() { return JSON.stringify(state, null, 2); },
  importAll(json) {
    const parsed = JSON.parse(json);
    state = Object.assign(structuredClone(DEFAULTS), parsed);
    flush(); return true;
  },
  reset() { state = structuredClone(DEFAULTS); flush(); }
};
