// Practice engine — timed writing drills and full take-home simulations.
// The point is production under constraint, then honest self-assessment.
import { DRILLS, SIMS, drillById, simById } from '../data/practice.js';
import { TRACKS, trackById } from '../data/index.js';
import { PATHS } from '../data/paths.js';
import { store, countWords } from './store.js';
import { esc, md } from './render.js';
import { brushRule, brushCheck } from '../data/brush.js';
import { toast } from './toast.js';
import { download } from './build.js';
import { reviewPanel, simJob, drillJob } from './review.js';

let tick = null;
export function stopTimers() { clearInterval(tick); tick = null; }

const mmss = s => `${Math.floor(Math.abs(s) / 60)}:${String(Math.abs(s) % 60).padStart(2, '0')}`;
const stamp = () => new Date().toISOString().slice(0, 10);
const when = ts => {
  const d = Math.floor((Date.now() - ts) / 864e5);
  return d === 0 ? 'today' : d === 1 ? 'yesterday' : `${d} days ago`;
};

/* ═════════ hub ═════════ */
let drillFilter = 'all';

export function practiceView(el) {
  const runs = store.drillCount;
  const simDone = SIMS.filter(s => store.sim(s.id)?.submitted).length;
  const list = drillFilter === 'all' ? DRILLS
    : drillFilter === 'unrun' ? DRILLS.filter(d => !store.drill(d.id))
    : DRILLS.filter(d => String(d.minutes) === drillFilter);

  el.innerHTML = `<div class="wrap">
    <div class="eyebrow">Workbench</div>
    <h1 class="h-xl">Practice</h1>
    <div style="color:var(--am)">${brushRule(2)}</div>
    <p class="lede">Reading builds recognition. Only writing under a clock builds the skill you are hired for.
      ${DRILLS.length} timed drills and ${SIMS.length} full take-home simulations, each scored against the same
      criteria a hiring team would use.</p>

    <div class="card card-2">
      <div class="row" style="justify-content:space-between">
        <span><span class="out">${runs}</span> <span class="dim" style="font-size:12px">drill runs</span></span>
        <span><span class="out">${simDone}</span><span class="dim" style="font-size:12px">/${SIMS.length} simulations</span></span>
        <button class="btn sec" data-random>Random drill</button>
      </div>
    </div>

    <h2 class="h-lg" style="margin-top:24px">Take-home simulations</h2>
    <p class="dim" style="font-size:13px;margin:2px 0 12px">Realistic assessments with materials to reason from,
      a clock, and a weighted rubric. Do one cold before an interview loop.</p>
    ${SIMS.map(s => {
      const st = store.sim(s.id);
      const p = PATHS.find(p => p.sims.includes(s.id));
      return `<a class="card build-row" href="#/sim/${s.id}">
        <span class="mono dim">${s.minutes}m</span>
        <span style="min-width:0">
          <span style="font-weight:600;display:block">${esc(s.title)}</span>
          <span class="dim" style="font-size:12.2px">${esc(s.role)}${p ? ' · ' + esc(p.label) : ''}</span>
        </span>
        <span class="mono dim" style="font-size:10px;text-align:right">
          ${st?.submitted ? `<span style="color:var(--gr)">${scorePct(s, st)}%</span>` : st?.text ? 'in progress' : 'not started'}
        </span>
      </a>`;
    }).join('')}

    <h2 class="h-lg" style="margin-top:26px">Timed drills</h2>
    <div class="chips" style="margin-top:8px">
      ${[['all', 'All'], ['unrun', 'Not yet run'], ['3', '3 min'], ['5', '5 min'], ['10', '10 min'], ['15', '15 min']]
        .map(([k, l]) => `<button class="chip" data-f="${k}" aria-pressed="${drillFilter === k}">${l}</button>`).join('')}
    </div>
    ${list.length ? list.map(d => {
      const rec = store.drill(d.id);
      const t = trackById(d.trackRef);
      return `<a class="card build-row" href="#/drill/${d.id}">
        <span class="mono dim">${d.minutes}m</span>
        <span style="min-width:0">
          <span style="font-weight:600;display:block">${esc(d.title)}</span>
          <span class="dim" style="font-size:12.2px">${t ? esc(t.title) : ''}</span>
        </span>
        <span class="mono dim" style="font-size:10px;text-align:right">
          ${rec ? `${rec.runs.length}× · best ${rec.best}/${d.scoreOn.length}` : ''}
        </span>
      </a>`;
    }).join('') : `<div class="empty">Nothing matches that filter.</div>`}
  </div>`;

  el.querySelectorAll('[data-f]').forEach(b => b.onclick = () => { drillFilter = b.dataset.f; practiceView(el); });
  el.querySelector('[data-random]').onclick = () => {
    const pool = DRILLS.filter(d => !store.drill(d.id));
    const pick = (pool.length ? pool : DRILLS)[Math.floor(Math.random() * (pool.length || DRILLS.length))];
    location.hash = `#/drill/${pick.id}`;
  };
}

/* ═════════ drill runner ═════════ */
export function drillView(el, id) {
  const d = drillById(id);
  if (!d) { location.hash = '#/practice'; return; }
  const t = trackById(d.trackRef);
  const rec = store.drill(d.id);
  let phase = 'brief', left = d.minutes * 60, text = store.draft(d.id), started = 0;

  function paint() {
    stopTimers();
    if (phase === 'brief') return brief();
    if (phase === 'write') return write();
    return score();
  }

  const shell = inner => `<div class="wrap">
    <div class="row" style="margin-bottom:6px">
      <a class="tag" href="#/practice">← Practice</a>
      <span class="tag">${d.minutes} minute drill</span>
      ${t ? `<a class="tag" href="#/t/${t.id}/0" style="color:var(${t.color});border-color:var(${t.color})">Track ${String(t.n).padStart(2, '0')}</a>` : ''}
    </div>
    <h1 class="h-lg">${esc(d.title)}</h1>
    <div style="color:var(--am)">${brushRule(0)}</div>
    ${inner}</div>`;

  function brief() {
    el.innerHTML = shell(`
      <div class="card"><div class="blocks">${md(d.prompt)}</div></div>
      <div class="card card-2">
        <div class="eyebrow">Constraints</div>
        <ul class="b-list">${d.constraints.map(c => `<li><span>${md(c)}</span></li>`).join('')}</ul>
      </div>
      ${text.trim() ? `<div class="card" style="border-color:var(--am)">
        <div class="eyebrow" style="color:var(--am)">Unfinished draft</div>
        <div class="dim" style="font-size:12.6px">${countWords(text)} words from an interrupted run. Starting the clock again
          keeps what you wrote.</div>
      </div>` : ''}
      ${rec ? `<div class="card">
        <div class="eyebrow">Your runs</div>
        ${rec.runs.slice().reverse().map(r => `<div class="out-row">
          <span class="k">${when(r.at)} · ${r.words} words in ${mmss(r.secs)}</span>
          <span class="v">${r.score}/${d.scoreOn.length}</span></div>`).join('')}
      </div>` : ''}
      <div class="pager">
        <a class="btn sec" href="#/practice">← Back</a>
        <button class="btn" data-start>Start the clock →</button>
      </div>`);
    el.querySelector('[data-start]').onclick = () => { phase = 'write'; started = Date.now(); paint(); };
  }

  function write() {
    el.innerHTML = shell(`
      <div class="timer-bar" data-timer>
        <span class="mono timer-num">${mmss(left)}</span>
        <span class="dim" style="font-size:12px">left · ${d.minutes} minute drill</span>
        <span class="mono dim" style="margin-left:auto;font-size:11px" data-wc>${countWords(text)} words</span>
      </div>
      <details class="disc"><summary>The brief</summary><div class="body blocks">${md(d.prompt)}
        <ul class="b-list">${d.constraints.map(c => `<li><span>${md(c)}</span></li>`).join('')}</ul></div></details>
      <textarea class="note drill-area" data-text placeholder="Write. Do not edit while the clock runs." autofocus>${esc(text)}</textarea>
      <div class="pager">
        <button class="btn sec" data-abandon>Abandon</button>
        <button class="btn" data-done>Done — score it →</button>
      </div>`);

    const area = el.querySelector('[data-text]');
    const wc = el.querySelector('[data-wc]');
    const timer = el.querySelector('[data-timer]');
    const num = timer.querySelector('.timer-num');
    area.focus();
    area.oninput = () => {
      text = area.value;
      wc.textContent = countWords(text) + ' words';
      store.draft(d.id, text);   // survives a reload or an interruption mid-drill
    };

    tick = setInterval(() => {
      left--;
      num.textContent = mmss(left);
      if (left <= 0) timer.classList.add('over');
      if (left <= 0) num.textContent = '+' + mmss(left);
      if (left === 0) toast({ msg: 'Time. Finish the sentence you are on, then score it.', timeout: 4200, icon: '⏱' });
    }, 1000);

    el.querySelector('[data-done]').onclick = () => { phase = 'score'; paint(); };
    el.querySelector('[data-abandon]').onclick = () => {
      stopTimers();
      // keep the draft: abandoning usually means "interrupted", not "delete my writing"
      location.hash = '#/practice';
    };
  }

  function score() {
    const secs = Math.round((Date.now() - started) / 1000);
    el.innerHTML = shell(`
      <div class="card card-2">
        <div class="between"><span class="eyebrow" style="margin:0">Your answer</span>
          <span class="mono dim" style="font-size:11px">${countWords(text)} words · ${mmss(secs)}</span></div>
        <div class="drill-answer">${text.trim() ? esc(text) : '<span class="dim">Nothing written.</span>'}</div>
      </div>

      <div class="card">
        <div class="eyebrow">Score yourself honestly</div>
        <p class="dim" style="font-size:12.5px;margin:0 0 8px">Nobody sees this. Inflated self-scores only cost you
          the interview later.</p>
        ${d.scoreOn.map((c, i) => `<button class="check" data-sc="${i}" aria-pressed="false">
          <span class="box">${brushCheck()}</span><span class="lbl">${md(c)}</span></button>`).join('')}
      </div>

      <div class="card card-2">
        <div class="eyebrow">The bar</div>
        <div class="blocks">${md(d.goodLooksLike)}</div>
      </div>

      <div data-review style="margin-top:14px"></div>

      <div class="pager">
        <button class="btn sec" data-retry>Run it again</button>
        <button class="btn" data-save>Save run →</button>
      </div>`);

    const rvEl = el.querySelector('[data-review]');
    if (rvEl) reviewPanel(rvEl, drillJob(d, { text }), () => paint());

    const picked = new Set();
    el.querySelectorAll('[data-sc]').forEach(b => b.onclick = () => {
      const i = +b.dataset.sc;
      picked.has(i) ? picked.delete(i) : picked.add(i);
      b.setAttribute('aria-pressed', picked.has(i));
    });
    el.querySelector('[data-retry]').onclick = () => {
      store.draft(d.id, '');
      phase = 'brief'; left = d.minutes * 60; text = ''; paint();
    };
    el.querySelector('[data-save]').onclick = () => {
      store.saveDrillRun(d.id, { at: Date.now(), secs, words: countWords(text), score: picked.size, text: text.slice(0, 4000) });
      store.touchStreak();
      toast({ msg: `Saved. ${picked.size}/${d.scoreOn.length} criteria met.`, icon: '✓', timeout: 2600 });
      location.hash = '#/practice';
    };
  }

  paint();
}

/* ═════════ simulation runner ═════════ */
export function simView(el, id) {
  const s = simById(id);
  if (!s) { location.hash = '#/practice'; return; }
  const saved = store.sim(s.id);
  // Always land on the brief, even when resuming: opening a paused simulation should
  // not silently restart the clock while the reader is still reading.
  let phase = saved?.submitted ? 'result' : 'brief';
  let left = (s.minutes * 60) - (saved?.elapsed || 0);
  let text = saved?.text || '';
  let scores = Object.assign({}, saved?.scores);
  let started = 0;

  const shell = inner => `<div class="wrap">
    <div class="row" style="margin-bottom:6px">
      <a class="tag" href="#/practice">← Practice</a>
      <span class="tag">${s.minutes} minutes</span>
      <span class="tag">${esc(s.role)}</span>
    </div>
    <h1 class="h-lg">${esc(s.title)}</h1>
    <div style="color:var(--am)">${brushRule(1)}</div>
    ${inner}</div>`;

  function materials() {
    return s.materials.map(m => `<details class="disc" open><summary>${esc(m.label)}</summary>
      <div class="body">${renderMaterial(m)}</div></details>`).join('');
  }

  function brief() {
    el.innerHTML = shell(`
      <div class="card card-2">
        <div class="eyebrow">The company</div>
        <div class="blocks">${md(s.company)}</div>
      </div>
      <div class="card"><div class="blocks">${md(s.scenario)}</div></div>

      <h2 class="h-md" style="margin-top:20px">Materials</h2>
      ${materials()}

      <div class="card" style="border-color:var(--am)">
        <div class="eyebrow" style="color:var(--am)">What to produce</div>
        <div class="blocks">${md(s.deliverable)}</div>
      </div>

      <div class="card card-2">
        <div class="eyebrow">How it is scored</div>
        ${s.rubric.map(r => `<div class="out-row"><span class="k">${esc(r.criterion)}</span>
          <span class="v">${r.weight}%</span></div>`).join('')}
      </div>

      <div class="pager">
        <a class="btn sec" href="#/practice">← Back</a>
        <button class="btn" data-start>${saved?.text ? 'Resume' : 'Start'} — ${mmss(Math.max(0, left))} →</button>
      </div>`);
    el.querySelector('[data-start]').onclick = () => {
      if (!text.trim()) text = s.starter || '';
      phase = 'work'; started = Date.now(); paint();
    };
  }

  function work() {
    el.innerHTML = shell(`
      <div class="timer-bar ${left <= 0 ? 'over' : ''}" data-timer>
        <span class="mono timer-num">${left <= 0 ? '+' : ''}${mmss(left)}</span>
        <span class="dim" style="font-size:12px">left</span>
        <span class="mono dim" style="margin-left:auto;font-size:11px" data-wc>${countWords(text)} words</span>
      </div>

      <details class="disc"><summary>Brief and deliverable</summary>
        <div class="body blocks">${md(s.scenario)}<div class="b-key"><span class="lbl">Deliverable</span>${md(s.deliverable)}</div></div></details>
      <details class="disc"><summary>Materials</summary><div class="body">${materials()}</div></details>

      <textarea class="note sim-area" data-text placeholder="Your submission…">${esc(text)}</textarea>

      <div class="pager">
        <button class="btn sec" data-pause>Save &amp; pause</button>
        <button class="btn" data-submit>Submit for scoring →</button>
      </div>`);

    const area = el.querySelector('[data-text]');
    const wc = el.querySelector('[data-wc]');
    const timer = el.querySelector('[data-timer]');
    const num = timer.querySelector('.timer-num');
    area.oninput = () => {
      text = area.value;
      wc.textContent = countWords(text) + ' words';
      store.saveSim(s.id, { text, elapsed: (s.minutes * 60) - left });
    };

    tick = setInterval(() => {
      left--;
      num.textContent = (left <= 0 ? '+' : '') + mmss(left);
      if (left <= 0) timer.classList.add('over');
      if (left === 0) toast({ msg: 'Time is up. Real assessments end here — note what you would have done next.', timeout: 5200, icon: '⏱' });
      if (left % 30 === 0) store.saveSim(s.id, { text, elapsed: (s.minutes * 60) - left });
    }, 1000);

    el.querySelector('[data-pause]').onclick = () => {
      store.saveSim(s.id, { text, elapsed: (s.minutes * 60) - left });
      stopTimers();
      toast({ msg: 'Saved. Resume any time.', icon: '✓', timeout: 2200 });
      location.hash = '#/practice';
    };
    el.querySelector('[data-submit]').onclick = () => {
      store.saveSim(s.id, { text, elapsed: (s.minutes * 60) - left });
      phase = 'score'; paint();
    };
  }

  function scoreForm() {
    el.innerHTML = shell(`
      <p class="lede">Score your own submission against the rubric. Be the harsh reader, not the hopeful author.</p>
      ${s.rubric.map((r, i) => `<div class="card">
        <div class="between"><strong style="font-size:14.5px">${esc(r.criterion)}</strong>
          <span class="mono dim" style="font-size:11px">${r.weight}%</span></div>
        <div class="dim" style="font-size:12.8px;margin:6px 0 4px"><strong>Meets:</strong> ${md(r.meets)}</div>
        <div class="dim" style="font-size:12.8px;margin-bottom:9px"><strong>Exceeds:</strong> ${md(r.exceeds)}</div>
        <div class="score-row" data-crit="${i}">
          ${['Missing', 'Partial', 'Meets', 'Exceeds'].map((lbl, v) =>
            `<button class="score-btn" data-v="${v}" aria-pressed="${(scores[r.criterion] ?? -1) === v}">${lbl}</button>`).join('')}
        </div>
      </div>`).join('')}

      <div class="card card-2">
        <div class="eyebrow">A strong response contains</div>
        <ul class="b-list">${s.strongResponse.map(x => `<li><span>${md(x)}</span></li>`).join('')}</ul>
      </div>
      <div class="card">
        <div class="eyebrow" style="color:var(--rs)">What usually goes wrong</div>
        <ul class="b-list">${s.commonFailures.map(x => `<li><span>${md(x)}</span></li>`).join('')}</ul>
      </div>

      <div class="pager">
        <button class="btn sec" data-back>← Keep editing</button>
        <button class="btn" data-finish>Finish →</button>
      </div>`);

    el.querySelectorAll('.score-row').forEach(row => {
      const crit = s.rubric[+row.dataset.crit].criterion;
      row.querySelectorAll('[data-v]').forEach(b => b.onclick = () => {
        scores[crit] = +b.dataset.v;
        row.querySelectorAll('[data-v]').forEach(x => x.setAttribute('aria-pressed', x === b));
      });
    });
    el.querySelector('[data-back]').onclick = () => { phase = 'work'; paint(); };
    el.querySelector('[data-finish]').onclick = () => {
      store.saveSim(s.id, { text, scores, submitted: true });
      store.touchStreak();
      phase = 'result'; paint();
    };
  }

  function result() {
    const st = store.sim(s.id) || { text, scores };
    const pct = scorePct(s, st);
    const verdict = pct >= 80 ? ['Senior-standard submission.', '--gr']
      : pct >= 60 ? ['Competent. The gap to senior is in the criteria you scored Partial.', '--am']
      : ['Below the bar. Re-read the track, then run it cold again in a few days.', '--rs'];

    el.innerHTML = shell(`
      <div class="card">
        <div class="between"><span class="eyebrow" style="margin:0">Weighted self-score</span>
          <span class="out">${pct}%</span></div>
        <div class="bar" style="margin-top:8px"><i style="width:${pct}%"></i></div>
        <p style="color:var(${verdict[1]});margin:10px 0 0;font-size:13.6px">${verdict[0]}</p>
      </div>

      ${s.rubric.map(r => {
        const v = st.scores?.[r.criterion] ?? 0;
        return `<div class="out-row"><span class="k">${esc(r.criterion)}</span>
          <span class="v" style="color:var(${v >= 3 ? '--gr' : v === 2 ? '--am' : '--rs'})">${['Missing', 'Partial', 'Meets', 'Exceeds'][v]}</span></div>`;
      }).join('')}

      <div class="card card-2" style="margin-top:14px">
        <div class="between"><span class="eyebrow" style="margin:0">Your submission</span>
          <span class="mono dim" style="font-size:11px">${countWords(st.text)} words</span></div>
        <div class="drill-answer">${esc(st.text || '')}</div>
      </div>

      <div class="row" style="gap:8px;margin-top:12px">
        <button class="btn sec" data-export>Download submission</button>
        <button class="btn sec" data-again>Run again from scratch</button>
      </div>

      <div data-review style="margin-top:16px"></div>

      <div class="card" style="margin-top:14px">
        <div class="eyebrow">Where to go next</div>
        <div class="row" style="gap:6px;flex-wrap:wrap">
          ${s.trackRefs.map(id => {
            const t = trackById(id);
            return t ? `<a class="chip" href="#/t/${t.id}/0">${esc(t.title)}</a>` : '';
          }).join('')}
        </div>
      </div>

      <div class="pager"><a class="btn sec" href="#/practice">← Practice</a></div>`);

    const rv = el.querySelector('[data-review]');
    if (rv) reviewPanel(rv, simJob(s, st), () => paint());

    el.querySelector('[data-export]').onclick = () => {
      download(`${s.id}-${stamp()}.md`,
        `# ${s.title}\n\n*${s.role} · ${s.minutes} minute simulation · ${stamp()}*\n\n${st.text}\n\n---\n\nSelf-score: ${pct}%\n${s.rubric.map(r => `- ${r.criterion}: ${['Missing', 'Partial', 'Meets', 'Exceeds'][st.scores?.[r.criterion] ?? 0]}`).join('\n')}\n`,
        'text/markdown');
    };
    el.querySelector('[data-again]').onclick = () => {
      store.saveSim(s.id, { text: '', elapsed: 0, scores: {}, submitted: false });
      text = ''; scores = {}; left = s.minutes * 60; phase = 'brief'; paint();
    };
  }

  function paint() {
    stopTimers();
    if (phase === 'brief') return brief();
    if (phase === 'work') return work();
    if (phase === 'score') return scoreForm();
    return result();
  }
  paint();
}

function scorePct(s, st) {
  if (!st?.scores) return 0;
  const total = s.rubric.reduce((a, r) => a + r.weight, 0) || 100;
  const got = s.rubric.reduce((a, r) => a + ((st.scores[r.criterion] ?? 0) / 3) * r.weight, 0);
  return Math.round((got / total) * 100);
}

function renderMaterial(m) {
  if (m.kind === 'table') {
    const rows = m.content.trim().split('\n').map(r => r.split('|').map(c => c.trim()));
    const [head, ...body] = rows;
    return `<div class="tbl-wrap"><table><thead><tr>${head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
      <tbody>${body.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }
  if (m.kind === 'quotes') {
    return m.content.trim().split('\n').filter(Boolean)
      .map(q => `<blockquote class="b-quote">${esc(q.replace(/^["“]|["”]$/g, ''))}</blockquote>`).join('');
  }
  return `<pre class="b-code">${esc(m.content)}</pre>`;
}
