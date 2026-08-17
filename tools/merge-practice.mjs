// Reads a practice-engine workflow journal and writes data/practice-gen.js.
// Sim ids are normalised to the stable keys that data/paths.js references, and
// every record is validated before it is allowed into the app.
import { readFileSync, writeFileSync } from 'node:fs';

const journalPath = process.argv[2];
if (!journalPath) {
  console.error('usage: node tools/merge-practice.mjs <path to journal.jsonl>');
  process.exit(1);
}

const rows = readFileSync(journalPath, 'utf8').trim().split('\n')
  .map(l => { try { return JSON.parse(l); } catch { return null; } })
  .filter(Boolean);

const results = rows.filter(r => r.type === 'result' && r.result && typeof r.result === 'object').map(r => r.result);

const simRecords = results.filter(r => Array.isArray(r.rubric));
const drillGroups = results.filter(r => Array.isArray(r.drills));

// Later records win: the repair pass re-emits a corrected copy of a flagged sim.
const byOriginalId = new Map();
simRecords.forEach(s => byOriginalId.set(s.id, s));
const sims = [...byOriginalId.values()];

/* ── normalise sim ids to what data/paths.js expects ── */
const KEY_RULES = [
  ['sim-comms', /comms|communication|incident|crisis|holding|spokesperson/i],
  ['sim-service', /support|service|ticket|helpdesk|refund/i],
  ['sim-cro', /\bcro\b|experiment|a\/b|ab[- ]result|test result|significance/i],
  ['sim-lifecycle', /lifecycle|crm|abandon|nurture|retention|email sequence/i],
  ['sim-pmm', /pmm|product marketing|gtm|go-to-market|launch|battle ?card/i],
  ['sim-seo', /seo|aeo|geo|retrofit|answer engine|extract|snippet|search/i],
  ['sim-strategist', /strategist|blog|pillar|content strategy|editorial/i],
  ['sim-copy', /copywriter|copy|hero|landing|headline|objection rewrite/i]
];

function keyFor(sim) {
  const hay = `${sim.id} ${sim.role} ${sim.title}`;
  for (const [key, re] of KEY_RULES) if (re.test(hay)) return key;
  return null;
}

const claimed = new Map();
for (const sim of sims) {
  const key = keyFor(sim);
  if (!key) { console.error(`! no stable key matched: ${sim.id} (${sim.role})`); continue; }
  if (claimed.has(key)) { console.error(`! duplicate key ${key}: ${claimed.get(key).id} vs ${sim.id}`); continue; }
  claimed.set(key, { ...sim, id: key, originalId: sim.id });
}

/* ── validate ── */
const problems = [];
const EXPECTED = ['sim-copy', 'sim-strategist', 'sim-seo', 'sim-pmm', 'sim-lifecycle', 'sim-cro', 'sim-service', 'sim-comms'];
EXPECTED.forEach(k => { if (!claimed.has(k)) problems.push(`missing simulation: ${k}`); });

for (const [key, s] of claimed) {
  const weights = s.rubric.reduce((a, r) => a + r.weight, 0);
  if (weights !== 100) problems.push(`${key}: rubric weights sum to ${weights}, not 100`);
  if (!s.starter || !s.starter.trim()) problems.push(`${key}: empty starter skeleton`);
  if (!s.materials?.length) problems.push(`${key}: no materials`);
  s.materials?.forEach(m => {
    if (m.kind === 'table' && !m.content.includes('|')) problems.push(`${key}: table material "${m.label}" has no pipe delimiters`);
  });
  if (!s.trackRefs?.length) problems.push(`${key}: no trackRefs`);
  s.trackRefs?.forEach(n => { if (!Number.isInteger(n) || n < 1 || n > 18) problems.push(`${key}: bad trackRef ${n}`); });
}

const drills = drillGroups.flatMap(g => g.drills);
const seenDrill = new Set();
const cleanDrills = [];
for (const d of drills) {
  if (seenDrill.has(d.id)) { console.error(`! duplicate drill id dropped: ${d.id}`); continue; }
  seenDrill.add(d.id);
  if (![3, 5, 10, 15].includes(d.minutes)) { problems.push(`drill ${d.id}: odd duration ${d.minutes}`); continue; }
  if (!Number.isInteger(d.trackRef) || d.trackRef < 1 || d.trackRef > 18) { problems.push(`drill ${d.id}: bad trackRef`); continue; }
  if (!d.scoreOn?.length || !d.prompt?.trim()) { problems.push(`drill ${d.id}: incomplete`); continue; }
  cleanDrills.push(d);
}

if (problems.length) {
  console.error('\nVALIDATION PROBLEMS:');
  problems.forEach(p => console.error('  - ' + p));
  if (process.argv[3] !== '--force') { console.error('\nrefusing to write. re-run with --force to override.'); process.exit(1); }
}

/* ── emit ── */
const order = EXPECTED.filter(k => claimed.has(k));
const out = `// GENERATED — do not edit by hand.
// Produced by tools/merge-practice.mjs from a practice-engine workflow journal.
// ${cleanDrills.length} timed drills · ${order.length} take-home simulations.

export const GEN_DRILLS = ${JSON.stringify(cleanDrills, null, 2)};

export const GEN_SIMS = ${JSON.stringify(order.map(k => claimed.get(k)), null, 2)};
`;

writeFileSync(new URL('../data/practice-gen.js', import.meta.url), out);
console.log(`wrote data/practice-gen.js — ${cleanDrills.length} drills, ${order.length} sims`);
order.forEach(k => console.log(`  ${k.padEnd(16)} ← ${claimed.get(k).originalId} (${claimed.get(k).minutes}m)`));
