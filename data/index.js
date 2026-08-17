import foundations from './t-foundations.js';
import positioning from './t-positioning.js';
import conversion from './t-conversion.js';
import systems from './t-systems.js';
import strategy from './t-strategy.js';
import comms from './t-comms.js';
import service from './t-service.js';

export { default as QUIZ } from './quiz.js';
export { default as GLOSSARY } from './glossary.js';
export { FRAMEWORKS, TEMPLATES, INTERVIEW } from './library.js';

// Study order: foundations → craft → conversion → systems → GTM/AI → service/career.
// `id` is the stable storage key; `n` is the display sequence.
const ORDER = [
  foundations[0], foundations[1], foundations[2],      // 1 2 3
  positioning[0], positioning[1], positioning[2],      // 4 5 6
  conversion[0], conversion[1],                        // 7 8
  systems[0], systems[1],                              // 9 10
  conversion[2],                                       // 11 lifecycle
  strategy[0],                                         // 12 GTM
  systems[2], systems[3],                              // 13 data, 14 UX
  strategy[1],                                         // 15 AI
  comms[0],                                            // 18 strategic communications
  service[0], service[1]                               // 16 service, 17 career
];

export const TRACKS = ORDER.map((t, i) => ({ ...t, n: i + 1 }));

export const PHASES = [
  { k: 'Foundations', c: '--cy', blurb: 'Desire, jobs, and the reader' },
  { k: 'Strategy craft', c: '--vi', blurb: 'Positioning, messaging, writing' },
  { k: 'Conversion', c: '--am', blurb: 'CRO, experimentation, lifecycle' },
  { k: 'Systems', c: '--gr', blurb: 'Content, discovery, data, UX' },
  { k: 'Go-to-market', c: '--or', blurb: 'Launch and AI orchestration' },
  { k: 'Strategic comms', c: '--bl', blurb: 'Narrative, stakeholders, crisis, reputation' },
  { k: 'Service & career', c: '--rs', blurb: 'Customer service craft and positioning yourself' }
];

export const ROLES = [
  { k: 'co', label: 'Copywriting' },
  { k: 'cs', label: 'Content strategy' },
  { k: 'gtm', label: 'GTM / product marketing' },
  { k: 'cro', label: 'CRO / lifecycle' },
  { k: 'svc', label: 'Customer service / CX' },
  { k: 'comms', label: 'Communications / PR' }
];

export function trackById(id) { return TRACKS.find(t => String(t.id) === String(id)); }
