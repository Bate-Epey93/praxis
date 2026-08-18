// Second opinion — an external reviewer for work you produced here.
//
// Three routes, in order of how much they ask of you:
//   1. Copy a review pack into any AI chat, paste the reply back. Nothing leaves this
//      device unless you paste it somewhere yourself.
//   2. Review in-app with your own API key. One click, one disclosed request.
//   3. Nothing. Self-scoring already works without any of this.
//
// The point is calibration: your own score next to someone else's, and the gap between them.
import { store } from './store.js';
import { esc, md } from './render.js';
import { toast } from './toast.js';

const API_URL = 'https://api.anthropic.com/v1/messages';
export const MODELS = [
  { id: 'claude-sonnet-5', label: 'Sonnet 5', note: 'balanced, the sensible default' },
  { id: 'claude-opus-5', label: 'Opus 5', note: 'hardest marker, slowest' },
  { id: 'claude-haiku-4-5-20251001', label: 'Haiku 4.5', note: 'fast and cheap' }
];

const LEVELS = ['Missing', 'Partial', 'Meets', 'Exceeds'];

/* ═════════ the prompt ═════════ */
export function buildReviewPrompt(job) {
  const L = [];
  L.push(`You are a hiring manager reviewing a candidate submission for a ${job.role || 'marketing'} role.`);
  L.push(`You are not the candidate's friend. Your job is to find what a real reviewer would find, and to say`);
  L.push(`plainly whether this would advance to the next round. Be specific, quote the submission, and never`);
  L.push(`praise something generically.`);
  L.push('');
  L.push(`## The task they were given`);
  L.push(job.brief.trim());
  if (job.deliverable) { L.push(''); L.push(`## What they had to produce`); L.push(job.deliverable.trim()); }
  if (job.constraints?.length) {
    L.push(''); L.push(`## Constraints they had to respect`);
    job.constraints.forEach(c => L.push(`- ${c}`));
  }
  L.push('');
  L.push(`## Scoring rubric`);
  job.rubric.forEach(r => {
    L.push(`- **${r.criterion}** (${r.weight}%)`);
    if (r.meets) L.push(`  - Meets: ${r.meets}`);
    if (r.exceeds) L.push(`  - Exceeds: ${r.exceeds}`);
  });
  if (job.strong?.length) {
    L.push(''); L.push(`## A strong response contains`);
    job.strong.forEach(s => L.push(`- ${s}`));
  }
  if (job.failures?.length) {
    L.push(''); L.push(`## Failures this task commonly produces`);
    job.failures.forEach(f => L.push(`- ${f}`));
  }
  L.push('');
  L.push(`## The submission`);
  L.push('"""');
  L.push((job.submission || '').trim() || '(nothing was written)');
  L.push('"""');
  if (job.selfScores && Object.keys(job.selfScores).length) {
    L.push(''); L.push(`## How the candidate scored themselves`);
    Object.entries(job.selfScores).forEach(([k, v]) =>
      L.push(`- ${k}: ${LEVELS[v] ?? v}`));
    L.push(`Do not be influenced by this. Score independently, then note where you disagree.`);
  }
  L.push('');
  L.push(`## Return format`);
  L.push(`Reply with JSON only, no prose outside it, no code fence:`);
  L.push(`{`);
  L.push(`  "scores": [{"criterion": "exact criterion name", "level": 0-3, "why": "one or two sentences quoting the submission"}],`);
  L.push(`  "missing": ["things a strong response contains that this one does not"],`);
  L.push(`  "failuresPresent": ["common failures this submission actually commits, quoted"],`);
  L.push(`  "edits": [{"quote": "exact text from the submission", "problem": "what is wrong with it", "rewrite": "your replacement"}],`);
  L.push(`  "strengths": ["what genuinely works, specific, maximum three"],`);
  L.push(`  "verdict": "two or three sentences a hiring manager would actually write in their notes",`);
  L.push(`  "wouldAdvance": true or false,`);
  L.push(`  "oneThing": "the single change that would most improve this submission"`);
  L.push(`}`);
  L.push(`Level 0 Missing, 1 Partial, 2 Meets, 3 Exceeds. Give at least three edits unless the submission is empty.`);
  return L.join('\n');
}

/* ═════════ job builders per work type ═════════ */
export function simJob(sim, state) {
  return {
    kind: 'sim', key: 'sim:' + sim.id, role: sim.role, title: sim.title,
    brief: `${sim.company}\n\n${sim.scenario}`,
    deliverable: sim.deliverable,
    rubric: sim.rubric,
    strong: sim.strongResponse,
    failures: sim.commonFailures,
    submission: state?.text || '',
    selfScores: state?.scores || {}
  };
}

export function drillJob(drill, run) {
  return {
    kind: 'drill', key: 'drill:' + drill.id, role: 'marketing writing', title: drill.title,
    brief: drill.prompt,
    deliverable: `A written answer produced in ${drill.minutes} minutes.`,
    constraints: drill.constraints,
    rubric: drill.scoreOn.map(c => ({
      criterion: c, weight: Math.round(100 / drill.scoreOn.length),
      meets: 'The answer satisfies this.', exceeds: 'The answer satisfies this and would survive a follow-up question about it.'
    })),
    strong: [drill.goodLooksLike],
    submission: run?.text || '',
    selfScores: {}
  };
}

export function artefactJob(track, body) {
  return {
    kind: 'artefact', key: 'art:' + track.id, role: 'senior marketing', title: track.artifact.title,
    brief: `Portfolio artefact for a candidate targeting senior roles.\n\n${track.artifact.intro || ''}\n\nIt is meant to demonstrate: ${track.sub}`,
    deliverable: track.artifact.steps.map((s, i) => `${i + 1}. ${String(s.s).replace(/\*\*/g, '')}`).join('\n'),
    rubric: [
      { criterion: 'Diagnosis before solution', weight: 25, meets: 'Evidence is cited before recommendations appear.', exceeds: 'Names what was rejected and why.' },
      { criterion: 'Specificity and evidence', weight: 25, meets: 'Claims carry numbers with sources.', exceeds: 'States assumptions explicitly and labels estimates as estimates.' },
      { criterion: 'Decisions, not description', weight: 25, meets: 'Makes clear choices with reasoning.', exceeds: 'Includes a stop list and names the trade-off taken.' },
      { criterion: 'Craft and readability', weight: 25, meets: 'Structured, scannable, free of hedging.', exceeds: 'A hiring manager could skim the headings alone and get the argument.' }
    ],
    strong: [
      'A reader who was not there could follow the reasoning without asking a question.',
      'Every number has a source or is labelled as an assumption.',
      'It says what was chosen not to do.'
    ],
    failures: [
      'Describes activity rather than deciding anything.',
      'Metrics with no baseline, no timeframe and no source.',
      'Generic advice that would fit any company in the category.'
    ],
    submission: body,
    selfScores: {}
  };
}

/* ═════════ the API call (your key, your request) ═════════ */
export async function runReview(prompt, { key, model }) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model,
      max_tokens: 2400,
      messages: [{ role: 'user', content: prompt }]
    })
  });

  if (!res.ok) {
    let detail = '';
    try { detail = (await res.json())?.error?.message || ''; } catch {}
    if (res.status === 401) throw new Error('That key was rejected. Check it in Progress and notes.');
    if (res.status === 429) throw new Error('Rate limited by the API. Wait a minute and try again.');
    if (res.status === 400 && /credit|balance/i.test(detail)) throw new Error('The account behind that key has no credit.');
    throw new Error(detail || `The API returned ${res.status}.`);
  }
  const data = await res.json();
  const text = (data.content || []).filter(c => c.type === 'text').map(c => c.text).join('\n');
  return parseReview(text);
}

export function parseReview(text) {
  let raw = String(text || '').trim();
  raw = raw.replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
  const first = raw.indexOf('{'), last = raw.lastIndexOf('}');
  if (first === -1 || last === -1) throw new Error('That did not contain a JSON review. Paste the whole reply.');
  const parsed = JSON.parse(raw.slice(first, last + 1));
  if (!Array.isArray(parsed.scores)) throw new Error('The review is missing its scores array.');
  return parsed;
}

/* ═════════ scoring maths ═════════ */
// A reviewer will not always echo criterion names verbatim, and a paraphrase must not
// silently score the work at zero. Match on the normalised name, then on containment,
// then fall back to position when the counts line up.
const norm = s => String(s || '').toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();

export function matchScores(rubric, scores) {
  const out = {};
  const pool = (scores || []).map((s, i) => ({ ...s, i, used: false }));

  rubric.forEach(r => {
    const target = norm(r.criterion);
    let hit = pool.find(s => !s.used && norm(s.criterion) === target);
    if (!hit) hit = pool.find(s => !s.used && (norm(s.criterion).includes(target) || target.includes(norm(s.criterion))));
    // "Policy accuracy & authority discipline" against "Policy accuracy and authority
    // discipline": neither contains the other, so compare meaningful tokens.
    if (!hit) {
      let best = null, bestScore = 0;
      for (const s of pool) {
        if (s.used) continue;
        const score = tokenOverlap(target, norm(s.criterion));
        if (score > bestScore) { best = s; bestScore = score; }
      }
      if (bestScore >= 0.6) hit = best;
    }
    if (hit) { hit.used = true; out[r.criterion] = clampLevel(hit.level); }
  });

  // Positional fallback. A reviewer who renamed the criteria usually still answered them
  // in order, and order is the stronger signal once name matching has mostly failed. One
  // stray token match should not leave four criteria unscored.
  const matched = Object.keys(out).length;
  if (pool.length === rubric.length && matched < Math.ceil(rubric.length / 2)) {
    const positional = {};
    rubric.forEach((r, i) => { positional[r.criterion] = clampLevel(pool[i].level); });
    return positional;
  }
  return out;
}

const clampLevel = v => Math.max(0, Math.min(3, Math.round(Number(v) || 0)));

const STOP = new Set(['and', 'the', 'of', 'a', 'to', 'in', 'for', 'on', 'with', 'under', 'its', 'it']);
const tokens = s => s.split(' ').filter(w => w && !STOP.has(w));

// Share of the shorter name's meaningful words that appear in the longer one.
function tokenOverlap(a, b) {
  const ta = tokens(a), tb = tokens(b);
  if (!ta.length || !tb.length) return 0;
  const [short, long] = ta.length <= tb.length ? [ta, tb] : [tb, ta];
  const set = new Set(long);
  return short.filter(w => set.has(w)).length / short.length;
}

// Scores only over the criteria that were actually marked, so a reviewer who covers
// four of five criteria produces a percentage of the four rather than a false low.
export function weightedScore(rubric, scores) {
  const marked = rubric.filter(r => typeof scores[r.criterion] === 'number');
  if (!marked.length) return 0;
  const total = marked.reduce((a, r) => a + (r.weight || 0), 0) || 100;
  const got = marked.reduce((a, r) => a + (scores[r.criterion] / 3) * (r.weight || 0), 0);
  return Math.round((got / total) * 100);
}

function reviewScoreMap(review, rubric) {
  return matchScores(rubric || [], review.scores);
}

/* ═════════ the panel ═════════ */
export function reviewPanel(container, job, onChange) {
  const saved = store.review(job.key);
  const prompt = buildReviewPrompt(job);
  const hasKey = !!store.pref('apiKey');
  const model = store.pref('reviewModel') || MODELS[0].id;
  const empty = !job.submission?.trim();

  container.innerHTML = `
    <div class="card review-card">
      <div class="between" style="align-items:flex-start">
        <div>
          <span class="eyebrow" style="margin:0">Second opinion</span>
          <div style="font-weight:600">Have someone else mark it</div>
        </div>
        ${saved ? `<span class="mono dim" style="font-size:10px">${saved.source === 'api' ? 'reviewed in-app' : 'pasted in'}</span>` : ''}
      </div>
      <p class="dim" style="font-size:12.6px;margin:8px 0 0">
        Self-scoring is honest practice but it drifts. This marks the same work against the same rubric,
        independently, then shows you the gap between the two.
      </p>
      ${empty ? `<div class="dim" style="font-size:12.6px;margin-top:10px">Write something first.</div>` : `
      <div class="row" style="gap:7px;margin-top:12px;flex-wrap:wrap">
        <button class="btn sec" data-rv="copy">Copy the review pack</button>
        <button class="btn sec" data-rv="paste">Paste a review back</button>
        <button class="btn" data-rv="api">${hasKey ? 'Review it now' : 'Review in-app…'}</button>
      </div>
      <div data-rv-body></div>`}
    </div>
    <div data-rv-result></div>`;

  const body = container.querySelector('[data-rv-body]');
  const result = container.querySelector('[data-rv-result]');

  const rerender = () => reviewPanel(container, job, onChange);

  container.querySelectorAll('[data-rv]').forEach(b => b.onclick = () => {
    const mode = b.dataset.rv;
    if (mode === 'copy') return showCopy();
    if (mode === 'paste') return showPaste();
    return showApi();
  });

  function showCopy() {
    body.innerHTML = `
      <div class="rv-panel">
        <p class="dim" style="font-size:12.6px;margin:0 0 8px">
          Paste this into any AI chat you already use. It contains the brief, the rubric and your submission.
          Nothing is sent from here.
        </p>
        <div class="row" style="gap:7px">
          <button class="copy" data-copy="${esc(prompt)}">Copy to clipboard</button>
          <button class="copy" data-rv-show>Show the text</button>
        </div>
        <pre class="b-code" data-rv-prompt hidden>${esc(prompt)}</pre>
        <p class="dim" style="font-size:12.4px;margin:9px 0 0">Then come back and use <strong>Paste a review back</strong> to keep it with the work.</p>
      </div>`;
    body.querySelector('[data-rv-show]').onclick = e => {
      const pre = body.querySelector('[data-rv-prompt]');
      pre.hidden = !pre.hidden;
      e.target.textContent = pre.hidden ? 'Show the text' : 'Hide the text';
    };
  }

  function showPaste() {
    body.innerHTML = `
      <div class="rv-panel">
        <p class="dim" style="font-size:12.6px;margin:0 0 8px">Paste the reply you got. JSON is parsed into a scored review; anything else is kept as notes.</p>
        <textarea class="note" data-rv-in rows="6" placeholder="Paste the reviewer's reply…"></textarea>
        <div class="row" style="gap:7px;margin-top:8px">
          <button class="btn" data-rv-save>Save the review</button>
        </div>
      </div>`;
    body.querySelector('[data-rv-save]').onclick = () => {
      const txt = body.querySelector('[data-rv-in]').value.trim();
      if (!txt) return;
      try {
        const parsed = parseReview(txt);
        store.saveReview(job.key, { at: Date.now(), source: 'paste', review: parsed, rubric: job.rubric });
      } catch {
        store.saveReview(job.key, { at: Date.now(), source: 'paste', notes: txt, rubric: job.rubric });
      }
      toast({ msg: 'Review saved with the work.', icon: '✓', timeout: 2400 });
      onChange?.(); rerender();
    };
  }

  function showApi() {
    const key = store.pref('apiKey') || '';
    body.innerHTML = `
      <div class="rv-panel">
        <div class="b-warn" style="margin-top:0">
          <span class="lbl">What this sends</span>
          Your submission and this task's brief and rubric go to the Anthropic API using a key you provide.
          One request, only when you press the button. The key is stored on this device and nowhere else.
          Everything else in Praxis stays offline. Costs land on your own account.
        </div>
        <div class="field">
          <label for="rvkey">Anthropic API key</label>
          <input id="rvkey" type="password" autocomplete="off" spellcheck="false"
            placeholder="sk-ant-…" value="${esc(key)}" data-rv-key>
        </div>
        <div class="field">
          <label for="rvmodel">Model</label>
          <select id="rvmodel" data-rv-model>
            ${MODELS.map(m => `<option value="${m.id}"${m.id === model ? ' selected' : ''}>${esc(m.label)} — ${esc(m.note)}</option>`).join('')}
          </select>
        </div>
        <label class="rv-check"><input type="checkbox" data-rv-remember ${key ? 'checked' : ''}> Remember the key on this device</label>
        <div class="row" style="gap:7px;margin-top:10px">
          <button class="btn" data-rv-go>Send for review</button>
          ${key ? `<button class="btn sec" data-rv-forget style="color:var(--rs)">Forget key</button>` : ''}
        </div>
        <div data-rv-status></div>
      </div>`;

    const status = body.querySelector('[data-rv-status]');
    body.querySelector('[data-rv-forget]')?.addEventListener('click', () => {
      store.pref('apiKey', '');
      toast({ msg: 'Key removed from this device.', icon: '✓', timeout: 2200 });
      rerender();
    });

    body.querySelector('[data-rv-go]').onclick = async () => {
      const k = body.querySelector('[data-rv-key]').value.trim();
      const m = body.querySelector('[data-rv-model]').value;
      const remember = body.querySelector('[data-rv-remember]').checked;
      if (!k) { status.innerHTML = `<p class="dim" style="font-size:12.5px;color:var(--rs)">A key is needed for this route. The copy-out route needs nothing.</p>`; return; }
      store.pref('reviewModel', m);
      store.pref('apiKey', remember ? k : '');

      const btn = body.querySelector('[data-rv-go]');
      btn.disabled = true; btn.textContent = 'Reviewing…';
      status.innerHTML = `<p class="dim" style="font-size:12.5px">Sending one request. This takes twenty seconds or so.</p>`;
      try {
        const review = await runReview(prompt, { key: k, model: m });
        store.saveReview(job.key, { at: Date.now(), source: 'api', model: m, review, rubric: job.rubric });
        toast({ msg: 'Reviewed.', icon: '✓', timeout: 2200 });
        onChange?.(); rerender();
      } catch (err) {
        btn.disabled = false; btn.textContent = 'Send for review';
        status.innerHTML = `<p style="font-size:12.8px;color:var(--rs);margin:9px 0 0">${esc(err.message)}</p>
          <p class="dim" style="font-size:12.4px;margin:6px 0 0">The copy-out route always works, and needs no key.</p>`;
      }
    };
  }

  if (saved) result.innerHTML = renderReview(saved, job);
  if (saved) {
    result.querySelector('[data-rv-del]')?.addEventListener('click', () => {
      store.clearReview(job.key);
      onChange?.(); rerender();
    });
  }
}

/* ═════════ rendering a stored review ═════════ */
export function renderReview(saved, job) {
  const when = new Date(saved.at).toISOString().slice(0, 10);
  if (saved.notes) {
    return `<div class="card">
      <div class="between"><span class="eyebrow" style="margin:0">Reviewer notes · ${when}</span>
        <button class="copy" data-rv-del style="color:var(--rs)">Remove</button></div>
      <div class="drill-answer">${esc(saved.notes)}</div>
    </div>`;
  }

  const r = saved.review || {};
  const rubric = saved.rubric || job.rubric;
  const theirs = reviewScoreMap(r, rubric);
  const covered = Object.keys(theirs).length;
  const theirPct = weightedScore(rubric, theirs);
  const mine = job.selfScores || {};
  const minePct = Object.keys(mine).length ? weightedScore(rubric, mine) : null;
  const comparable = covered >= Math.ceil(rubric.length / 2);
  const gap = (minePct === null || !comparable) ? null : minePct - theirPct;

  const calib = gap === null ? '' : `
    <div class="card card-2">
      <div class="eyebrow">Calibration</div>
      <div class="row" style="gap:14px;align-items:baseline;flex-wrap:wrap">
        <span><span class="out">${minePct}%</span> <span class="dim" style="font-size:12px">you</span></span>
        <span><span class="out">${theirPct}%</span> <span class="dim" style="font-size:12px">reviewer</span></span>
        <span class="mono" style="color:var(${Math.abs(gap) <= 8 ? '--gr' : Math.abs(gap) <= 20 ? '--am' : '--rs'})">
          ${gap > 0 ? '+' : ''}${gap} points</span>
      </div>
      <p class="dim" style="font-size:12.5px;margin:8px 0 0">${
        Math.abs(gap) <= 8 ? 'Your judgement of your own work matches an outside read. That is the skill.'
        : gap > 20 ? 'You are marking yourself well above an outside read. Look at the criteria they scored lowest, because that is what an interviewer sees.'
        : gap > 0 ? 'You are marking a little generously. Normal, and worth watching.'
        : 'You are harder on yourself than the reviewer. Do not let that stop you shipping the work.'
      }</p>
    </div>`;

  return `
    <div class="card" style="border-color:var(${r.wouldAdvance ? '--gr' : '--am'})">
      <div class="between" style="align-items:flex-start">
        <div>
          <span class="eyebrow" style="margin:0">Reviewer verdict · ${when}${saved.model ? ' · ' + esc(saved.model) : ''}</span>
          <div style="font-weight:600;color:var(${r.wouldAdvance ? '--gr' : '--am'})">
            ${r.wouldAdvance ? 'Would advance to the next round' : 'Would not advance as written'}
          </div>
        </div>
        <span class="out">${theirPct}%</span>
      </div>
      ${covered && covered < rubric.length ? `<p class="dim" style="font-size:12.3px;margin:8px 0 0">Scored on ${covered} of ${rubric.length} criteria; the reviewer did not mark the rest.</p>` : ''}
      ${!covered ? `<p class="dim" style="font-size:12.3px;margin:8px 0 0;color:var(--am)">The reviewer's criterion names did not line up with the rubric, so this percentage is not comparable. The written feedback below still stands.</p>` : ''}
      ${r.verdict ? `<p style="font-size:13.8px;margin:9px 0 0">${md(r.verdict)}</p>` : ''}
      ${r.oneThing ? `<div class="b-key" style="margin-bottom:0"><span class="lbl">The one change</span>${md(r.oneThing)}</div>` : ''}
    </div>

    ${calib}

    <div class="card">
      <div class="eyebrow">Criterion by criterion</div>
      ${(r.scores || []).map(s => {
        const lvl = clampLevel(s.level);
        // find the rubric criterion this maps to, so "you said" compares like with like
        const own = rubric.find(x => theirs[x.criterion] !== undefined && norm(x.criterion) === norm(s.criterion))
          || rubric.find(x => norm(x.criterion).includes(norm(s.criterion)) || norm(s.criterion).includes(norm(x.criterion)));
        const selfLvl = own ? mine[own.criterion] : undefined;
        return `<div class="rv-row">
        <div class="between">
          <strong style="font-size:13.8px">${esc(s.criterion)}</strong>
          <span class="mono" style="font-size:11px;color:var(${lvl >= 3 ? '--gr' : lvl === 2 ? '--am' : '--rs'})">
            ${LEVELS[lvl]}${selfLvl !== undefined && selfLvl !== lvl ? ` · you said ${LEVELS[selfLvl]}` : ''}
          </span>
        </div>
        ${s.why ? `<div class="dim" style="font-size:12.8px;margin-top:3px">${md(s.why)}</div>` : ''}
      </div>`; }).join('')}
    </div>

    ${r.edits?.length ? `<div class="card">
      <div class="eyebrow">Line edits</div>
      ${r.edits.map(e => `<div class="rv-edit">
        <div class="rv-quote">${esc(e.quote || '')}</div>
        <div class="dim" style="font-size:12.7px;margin:5px 0">${md(e.problem || '')}</div>
        <div class="rv-fix">${esc(e.rewrite || '')}</div>
      </div>`).join('')}
    </div>` : ''}

    ${r.missing?.length ? `<div class="card card-2">
      <div class="eyebrow" style="color:var(--rs)">Missing against a strong response</div>
      <ul class="b-list">${r.missing.map(x => `<li><span>${md(x)}</span></li>`).join('')}</ul>
    </div>` : ''}

    ${r.failuresPresent?.length ? `<div class="card card-2">
      <div class="eyebrow" style="color:var(--rs)">Common failures present</div>
      <ul class="b-list">${r.failuresPresent.map(x => `<li><span>${md(x)}</span></li>`).join('')}</ul>
    </div>` : ''}

    ${r.strengths?.length ? `<div class="card card-2">
      <div class="eyebrow" style="color:var(--gr)">What works</div>
      <ul class="b-list">${r.strengths.map(x => `<li><span>${md(x)}</span></li>`).join('')}</ul>
    </div>` : ''}

    <div class="row" style="justify-content:flex-end;margin-bottom:10px">
      <button class="copy" data-rv-del style="color:var(--rs)">Remove this review</button>
    </div>`;
}
