import { TRACKS, FRAMEWORKS, TEMPLATES, INTERVIEW, GLOSSARY, QUIZ, trackById } from '../data/index.js';
import { SIMS } from '../data/practice.js';
import { store } from './store.js';
import { esc, md } from './render.js';
import { brushRule } from '../data/brush.js';
import { trackPct, overallPct, artifactPct } from './progress.js';
import { checkForUpdate } from './pwa.js';
import { APP_VERSION } from './version.js';
import { toast } from './toast.js';

const num = v => { const n = parseFloat(String(v).replace(/[, %$]/g, '')); return isFinite(n) ? n : 0; };
const money = n => '$' + Math.round(n).toLocaleString();
const pct = n => (Math.round(n * 100) / 100) + '%';

/* ═══════════ calculators ═══════════ */
const CALCS = [
  {
    id: 'cr', name: 'Conversion, RPV & the value of a lift',
    fields: [
      ['visitors', 'Monthly visitors', 200000], ['conv', 'Monthly conversions', 4000],
      ['aov', 'Average order value / deal value ($)', 1400], ['target', 'Target conversion rate (%)', 2.5]
    ],
    calc: v => {
      const cr = v.visitors ? v.conv / v.visitors : 0;
      const rpv = cr * v.aov;
      const rev = v.conv * v.aov;
      const tCr = v.target / 100;
      const tRev = v.visitors * tCr * v.aov;
      return [
        ['Conversion rate', pct(cr * 100)],
        ['Revenue per visitor', money(rpv)],
        ['Current monthly revenue', money(rev)],
        ['Revenue at target rate', money(tRev)],
        ['Monthly gain', money(tRev - rev)],
        ['Annualised gain (no decay)', money((tRev - rev) * 12)],
        ['Relative lift required', pct(cr ? ((tCr - cr) / cr) * 100 : 0)]
      ];
    },
    note: 'Always report a lift with its money. State "annualised at current traffic, assuming no decay" — the caveat is what makes the number credible.'
  },
  {
    id: 'ab', name: 'A/B sample size & test duration',
    fields: [
      ['base', 'Baseline conversion rate (%)', 3], ['mde', 'Minimum detectable effect (relative %)', 10],
      ['traffic', 'Daily visitors entering the test', 3000], ['variants', 'Number of variants (incl. control)', 2]
    ],
    calc: v => {
      const p = v.base / 100;
      const rel = v.mde / 100;
      const delta = p * rel;
      const n = delta > 0 ? (16 * p * (1 - p)) / (delta * delta) : 0;
      const perDay = v.variants > 0 ? v.traffic / v.variants : 0;
      const days = perDay > 0 ? n / perDay : 0;
      return [
        ['Absolute effect being detected', pct(delta * 100)],
        ['Sample per variant (≈80% power, 95%)', Math.round(n).toLocaleString()],
        ['Total sample needed', Math.round(n * v.variants).toLocaleString()],
        ['Days to reach it', Math.ceil(days) + ' days'],
        ['Full weeks (round up, always)', Math.ceil(days / 7) + ' weeks'],
        ['Verdict', days > 56 ? 'Too slow — test a bigger swing or a higher-traffic surface' : days < 7 ? 'Run a minimum of one full week regardless' : 'Feasible']
      ];
    },
    note: 'Approximation of the standard two-proportion calculation at 80% power / 95% significance. Use it to decide in ten seconds whether a test is even possible; use a full calculator for the record.'
  },
  {
    id: 'funnel', name: 'Funnel model & biggest leak',
    fields: [
      ['visitors', 'Sessions', 100000], ['pdp', 'Reach product/pricing page (%)', 40],
      ['atc', 'Add to cart / start trial (%)', 8], ['checkout', 'Reach checkout / signup (%)', 60],
      ['buy', 'Complete purchase (%)', 75], ['aov', 'Order value ($)', 180]
    ],
    calc: v => {
      const a = v.visitors * (v.pdp / 100);
      const b = a * (v.atc / 100);
      const c = b * (v.checkout / 100);
      const d = c * (v.buy / 100);
      // each drop carries the product of the rates that follow it, so recovered users are
      // valued at the real downstream conversion rather than at 100%
      const r1 = v.atc / 100, r2 = v.checkout / 100, r3 = v.buy / 100;
      const drops = [
        ['Sessions → product page', v.visitors - a, r1 * r2 * r3],
        ['Product page → cart', a - b, r2 * r3],
        ['Cart → checkout', b - c, r3],
        ['Checkout → purchase', c - d, 1]
      ].sort((x, y) => y[1] - x[1]);
      return [
        ['Reach product page', Math.round(a).toLocaleString()],
        ['Add to cart', Math.round(b).toLocaleString()],
        ['Reach checkout', Math.round(c).toLocaleString()],
        ['Purchases', Math.round(d).toLocaleString()],
        ['End-to-end conversion', pct(v.visitors ? (d / v.visitors) * 100 : 0)],
        ['Revenue', money(d * v.aov)],
        ['Biggest absolute leak', `${drops[0][0]} — ${Math.round(drops[0][1]).toLocaleString()} lost`],
        ['Value of recovering 10% of that leak', money(drops[0][1] * 0.1 * drops[0][2] * v.aov)]
      ];
    },
    note: 'Rank by absolute loss, not by the worst percentage. The recovery estimate assumes the recovered users convert at the downstream rates you entered.'
  },
  {
    id: 'unit', name: 'Unit economics (LTV, CAC, payback)',
    fields: [
      ['arpa', 'Monthly revenue per account ($)', 200], ['margin', 'Gross margin (%)', 80],
      ['churn', 'Monthly churn (%)', 3], ['cac', 'Customer acquisition cost ($)', 1500]
    ],
    calc: v => {
      const gp = v.arpa * (v.margin / 100);
      const ltv = v.churn > 0 ? gp / (v.churn / 100) : 0;
      const payback = gp > 0 ? v.cac / gp : 0;
      const ratio = v.cac > 0 ? ltv / v.cac : 0;
      return [
        ['Monthly gross profit per account', money(gp)],
        ['Average customer lifetime', v.churn > 0 ? (1 / (v.churn / 100)).toFixed(1) + ' months' : '—'],
        ['LTV (gross-profit based)', money(ltv)],
        ['LTV : CAC', ratio.toFixed(2) + ' : 1'],
        ['CAC payback', payback.toFixed(1) + ' months'],
        ['Health read', ratio >= 3 && payback <= 12 ? 'Healthy' : ratio < 3 ? 'Ratio below 3:1 — acquisition or retention needs work' : 'Payback above 12 months — cash-hungry growth']
      ];
    },
    note: 'Use gross profit rather than revenue for LTV, or you will overstate it by the whole cost of delivery. This is the calculation that earns you credibility with finance.'
  },
  {
    id: 'content', name: 'Content ROI & paid equivalent',
    fields: [
      ['sessions', 'Monthly organic sessions at steady state', 30000], ['cr', 'Session → lead rate (%)', 2],
      ['close', 'Lead → customer rate (%)', 8], ['acv', 'Average contract / order value ($)', 5000],
      ['cost', 'Production + distribution cost ($)', 35000], ['cpc', 'Equivalent paid CPC ($)', 2]
    ],
    calc: v => {
      const leads = v.sessions * (v.cr / 100);
      const custs = leads * (v.close / 100);
      const rev = custs * v.acv;
      const roi = v.cost > 0 ? ((rev * 12 - v.cost) / v.cost) * 100 : 0;
      return [
        ['Monthly leads', Math.round(leads).toLocaleString()],
        ['Monthly customers', custs.toFixed(1)],
        ['Monthly influenced revenue', money(rev)],
        ['Annual influenced revenue', money(rev * 12)],
        ['First-year ROI on production cost', Math.round(roi) + '%'],
        ['Equivalent monthly paid spend for this traffic', money(v.sessions * v.cpc)],
        ['Cost per session (content, year 1)', money(v.cost / (v.sessions * 12))]
      ];
    },
    note: 'Say "influenced", not "generated", unless you have run an incrementality test. State the ramp: month 1 will not be steady state, so present the curve alongside this figure.'
  },
  {
    id: 'support', name: 'Support capacity, contact rate & deflection',
    fields: [
      ['tickets', 'Tickets per month', 4000], ['aht', 'Average handle time (minutes)', 11],
      ['agents', 'Agents', 6], ['hours', 'Productive hours per agent per month', 120],
      ['customers', 'Active customers', 9000], ['deflect', 'Expected deflection from KB work (%)', 15]
    ],
    calc: v => {
      const workHrs = (v.tickets * v.aht) / 60;
      const capacity = v.agents * v.hours;
      const util = capacity > 0 ? (workHrs / capacity) * 100 : 0;
      const perAgent = v.agents > 0 ? v.tickets / v.agents : 0;
      const contactRate = v.customers > 0 ? (v.tickets / v.customers) * 100 : 0;
      const saved = workHrs * (v.deflect / 100);
      return [
        ['Handling workload', Math.round(workHrs).toLocaleString() + ' hours/month'],
        ['Team capacity', Math.round(capacity).toLocaleString() + ' hours/month'],
        ['Utilisation', pct(util) + (util > 85 ? ' — above sustainable; quality will slip' : util < 60 ? ' — slack available for KB and QA work' : ' — workable')],
        ['Tickets per agent per month', Math.round(perAgent).toLocaleString()],
        ['Contact rate per 100 customers', (Math.round(contactRate * 10) / 10) + ' per 100'],
        ['Hours freed by deflection target', Math.round(saved).toLocaleString() + ' hours/month'],
        ['Equivalent agents freed', (saved / (v.hours || 1)).toFixed(2)]
      ];
    },
    note: 'Contact rate per 100 customers is the hardest support metric to game and the best signal of whether the product is generating avoidable work. Utilisation above ~85% predicts quality decline before any metric shows it.'
  }
];

export function calcView(el) {
  const state = {};
  CALCS.forEach(c => { state[c.id] = {}; c.fields.forEach(([k, , d]) => state[c.id][k] = d); });

  function draw() {
    el.innerHTML = `<div class="wrap">
      <div class="eyebrow">Workbench</div>
      <h1 class="h-xl">Calculators</h1>
      ${brushRule(1)}
      <p class="lede">The six calculations you should be able to run live in a meeting. Every number here should end up in a sentence with a decision attached.</p>
      ${CALCS.map(c => `<details class="disc" ${c.id === 'cr' ? 'open' : ''} data-c="${c.id}">
        <summary>∑ ${esc(c.name)}</summary>
        <div class="body">
          <div class="grid g2">
            ${c.fields.map(([k, label]) => `<div class="field">
              <label for="${c.id}-${k}">${esc(label)}</label>
              <input id="${c.id}-${k}" inputmode="decimal" data-c="${c.id}" data-k="${k}" value="${state[c.id][k]}">
            </div>`).join('')}
          </div>
          <div class="card card-2" data-out="${c.id}" style="margin-top:6px">
            ${c.calc(state[c.id]).map(([k, v]) => `<div class="out-row"><span class="k">${esc(k)}</span><span class="v">${esc(String(v))}</span></div>`).join('')}
          </div>
          <div class="dim" style="font-size:12.4px">${md(c.note)}</div>
        </div>
      </details>`).join('')}
    </div>`;

    el.querySelectorAll('input[data-c]').forEach(inp => inp.oninput = () => {
      const c = CALCS.find(x => x.id === inp.dataset.c);
      state[c.id][inp.dataset.k] = num(inp.value);
      el.querySelector(`[data-out="${c.id}"]`).innerHTML = c.calc(state[c.id])
        .map(([k, v]) => `<div class="out-row"><span class="k">${esc(k)}</span><span class="v">${esc(String(v))}</span></div>`).join('');
    });
  }
  draw();
}

/* ═══════════ frameworks ═══════════ */
export function frameworksView(el) {
  let q = '';
  function draw() {
    const hits = FRAMEWORKS.filter(f => !q || (f.n + f.src + f.use + f.steps.join(' ')).toLowerCase().includes(q));
    el.innerHTML = `<div class="wrap">
      <div class="eyebrow">Workbench</div>
      <h1 class="h-xl">Framework index</h1>
      ${brushRule(1)}
      <p class="lede">${FRAMEWORKS.length} frameworks with their steps and the situation each one is for. Name it once in an interview, then get specific.</p>
      <div class="field"><input id="fq" placeholder="Search frameworks…" value="${esc(q)}"></div>
      ${hits.map(f => `<details class="disc">
        <summary>⬡ ${esc(f.n)}</summary>
        <div class="body">
          <div class="row" style="margin-bottom:8px">
            <span class="tag">${esc(f.src)}</span>
            <a class="tag" href="#/t/${f.t}/0">Track ${trackById(f.t)?.n ?? f.t}</a>
          </div>
          <p style="margin:0 0 8px"><strong>Use when:</strong> ${md(f.use)}</p>
          <ul class="b-list">${f.steps.map(s => `<li><span>${md(s)}</span></li>`).join('')}</ul>
        </div>
      </details>`).join('') || `<div class="empty">No match.</div>`}
    </div>`;
    const inp = el.querySelector('#fq');
    inp.oninput = e => { q = e.target.value.toLowerCase(); const pos = e.target.selectionStart; draw(); const n = el.querySelector('#fq'); n.focus(); n.setSelectionRange(pos, pos); };
  }
  draw();
}

/* ═══════════ prompt library (harvested from tracks) ═══════════ */
export function promptsView(el) {
  const groups = TRACKS.map(t => {
    const items = [];
    t.sections.forEach(s => s.blocks.forEach(b => {
      if (b.t === 'prompt') items.push({ label: b.label, v: b.v, why: b.why });
      if (b.t === 'code' && /prompt|brief|template|scorecard|record|card|json/i.test(b.label || '')) items.push({ label: b.label, v: b.v });
    }));
    return { t, items };
  }).filter(g => g.items.length);

  el.innerHTML = `<div class="wrap">
    <div class="eyebrow">Workbench</div>
    <h1 class="h-xl">Prompt &amp; document library</h1>
    ${brushRule(1)}
    <p class="lede">Every production prompt and working document from the tracks, in one place. Replace the [BRACKETED] parts — a prompt without your real positioning and proof points will produce average output.</p>
    ${groups.map(g => `<div style="margin:16px 0 6px">
      <div class="row" style="margin-bottom:6px">
        <span class="tag" style="color:var(${g.t.color});border-color:var(${g.t.color})">Track ${String(g.t.n).padStart(2, '0')}</span>
        <a href="#/t/${g.t.id}/0" style="font-size:12.5px">${esc(g.t.title)}</a>
      </div>
      ${g.items.map(i => `<details class="disc">
        <summary>⚙ ${esc(i.label || 'Prompt')}</summary>
        <div class="body">
          <div class="between" style="margin-bottom:6px">
            <span class="eyebrow" style="margin:0">Copy block</span>
            <button class="copy" data-copy="${esc(i.v)}">Copy</button>
          </div>
          <pre class="b-code">${esc(i.v)}</pre>
          ${i.why ? `<div class="dim" style="font-size:12.5px">${md(i.why)}</div>` : ''}
        </div>
      </details>`).join('')}
    </div>`).join('')}
  </div>`;
}

/* ═══════════ templates / swipe ═══════════ */
export function templatesView(el) {
  el.innerHTML = `<div class="wrap">
    <div class="eyebrow">Workbench</div>
    <h1 class="h-xl">Swipe &amp; templates</h1>
    ${brushRule(1)}
    <p class="lede">Structures, not scripts. Copy the shape and rewrite it in your own voice with your own proof — pasting these verbatim is how a team ends up sounding generic.</p>
    ${TEMPLATES.map(c => `<div style="margin:18px 0 6px">
      <div class="eyebrow" style="color:var(--am)">${esc(c.cat)}</div>
      ${c.items.map(i => `<details class="disc">
        <summary>❐ ${esc(i.n)}</summary>
        <div class="body">
          <div class="between" style="margin-bottom:6px">
            <span class="eyebrow" style="margin:0">Template</span>
            <button class="copy" data-copy="${esc(i.v)}">Copy</button>
          </div>
          <pre class="b-code">${esc(i.v)}</pre>
        </div>
      </details>`).join('')}
    </div>`).join('')}
  </div>`;
}

/* ═══════════ interview bank ═══════════ */
export function interviewView(el) {
  const roles = [...new Set(INTERVIEW.map(i => i.role))];
  let sel = 'all';

  function draw() {
    const hits = INTERVIEW.filter(i => sel === 'all' || i.role === sel);
    const shaky = INTERVIEW.filter((_, i) => store.card('iv:' + i).box === 1 && store.card('iv:' + i).seen > 0).length;
    el.innerHTML = `<div class="wrap">
      <div class="eyebrow">Workbench</div>
      <h1 class="h-xl">Interview bank</h1>
      ${brushRule(0)}
      <p class="lede">${INTERVIEW.length} questions with answer scaffolds. Reading them silently builds recognition.
        Rehearsal mode gives you 90 seconds and no notes, which is the actual test.</p>

      <div class="card" style="border-color:var(--am)">
        <div class="between">
          <div>
            <span class="eyebrow" style="margin:0;color:var(--am)">Rehearsal</span>
            <div style="font-weight:600">Answer out loud, 90 seconds, standing up</div>
            <div class="dim" style="font-size:12.3px">${shaky ? shaky + ' marked shaky · they come back first' : 'Nothing marked shaky yet'}</div>
          </div>
          <button class="btn" data-rehearse>Start</button>
        </div>
      </div>

      <div class="chips">
        <button class="chip" data-r="all" aria-pressed="${sel === 'all'}">All roles</button>
        ${roles.map(r => `<button class="chip" data-r="${esc(r)}" aria-pressed="${sel === r}">${esc(r)}</button>`).join('')}
      </div>
      ${hits.map(i => {
        const idx = INTERVIEW.indexOf(i);
        const c = store.card('iv:' + idx);
        return `<details class="disc"><summary>☰ ${esc(i.q)}</summary>
          <div class="body">
            <div class="row" style="margin-bottom:8px">
              <span class="tag">${esc(i.role)}</span>
              ${c.seen ? `<span class="tag" style="color:var(${c.box > 2 ? '--gr' : '--rs'});border-color:var(${c.box > 2 ? '--gr' : '--rs'})">${c.box > 2 ? 'solid' : 'shaky'}</span>` : ''}
            </div>
            <p style="margin:0"><strong>Scaffold:</strong> ${md(i.a)}</p>
          </div>
        </details>`;
      }).join('')}
    </div>`;
    el.querySelectorAll('[data-r]').forEach(b => b.onclick = () => { sel = b.dataset.r; draw(); });
    el.querySelector('[data-rehearse]').onclick = () => rehearse(sel);
  }

  /* 90 seconds, no notes, then an honest verdict */
  function rehearse(roleFilter) {
    const pool = INTERVIEW.map((q, i) => ({ q, i }))
      .filter(x => roleFilter === 'all' || x.q.role === roleFilter)
      .sort((a, b) => {
        const ca = store.card('iv:' + a.i), cb = store.card('iv:' + b.i);
        return (ca.box - cb.box) || (ca.due - cb.due) || (Math.random() - 0.5);
      });
    if (!pool.length) return;

    let n = 0, left = 90, phase = 'ask', timer = null;
    const stop = () => { clearInterval(timer); timer = null; };

    function paint() {
      stop();
      const { q, i } = pool[n % pool.length];
      if (phase === 'ask') {
        el.innerHTML = `<div class="wrap">
          <div class="between">
            <div><div class="eyebrow">Rehearsal · out loud</div><h1 class="h-lg">Answer this</h1></div>
            <span class="mono dim" style="font-size:12px">${n + 1} of ${pool.length}</span>
          </div>
          ${brushRule(2)}
          <div class="timer-bar" data-timer><span class="mono timer-num">1:30</span>
            <span class="dim" style="font-size:12px">no notes, no scrolling</span></div>
          <div class="card" style="min-height:180px;display:grid;place-items:center;text-align:center">
            <div>
              <div style="font-family:var(--serif);font-size:20px;line-height:1.35">${esc(q.q)}</div>
              <div class="dim" style="font-size:12px;margin-top:12px">${esc(q.role)}</div>
            </div>
          </div>
          <div class="pager">
            <button class="btn sec" data-quit>Stop</button>
            <button class="btn" data-reveal>I answered it →</button>
          </div>
        </div>`;
        const num = el.querySelector('.timer-num');
        const bar = el.querySelector('[data-timer]');
        timer = setInterval(() => {
          left--;
          num.textContent = `${Math.floor(Math.abs(left) / 60)}:${String(Math.abs(left) % 60).padStart(2, '0')}`;
          if (left <= 0) { bar.classList.add('over'); num.textContent = 'over'; }
        }, 1000);
        el.querySelector('[data-reveal]').onclick = () => { phase = 'grade'; paint(); };
        el.querySelector('[data-quit]').onclick = () => { stop(); draw(); };
      } else {
        el.innerHTML = `<div class="wrap">
          <div class="eyebrow">Rehearsal · compare</div>
          <h1 class="h-lg">${esc(q.q)}</h1>
          ${brushRule(1)}
          <div class="card"><strong>Scaffold:</strong> ${md(q.a)}</div>
          <div class="card card-2">
            <div class="eyebrow">Honest verdict</div>
            <p class="dim" style="font-size:12.6px;margin:0 0 10px">Did you actually say the substance out loud, inside the time,
              without reading? Shaky answers come back first next time.</p>
            <div class="row" style="gap:8px">
              <button class="btn sec" data-g="0" style="flex:1;color:var(--rs)">Shaky</button>
              <button class="btn" data-g="1" style="flex:1">Nailed it</button>
            </div>
          </div>
          <div class="pager"><button class="btn sec" data-quit>Finish</button></div>
        </div>`;
        el.querySelectorAll('[data-g]').forEach(b => b.onclick = () => {
          store.gradeCard('iv:' + i, b.dataset.g === '1');
          store.touchStreak();
          n++; left = 90; phase = 'ask';
          if (n >= pool.length) { toast({ msg: 'Rehearsal complete.', icon: '✓', timeout: 2400 }); return draw(); }
          paint();
        });
        el.querySelector('[data-quit]').onclick = () => { stop(); draw(); };
      }
    }
    paint();
  }

  draw();
}

/* ═══════════ glossary ═══════════ */
export function glossaryView(el) {
  let q = '';
  function draw() {
    const hits = GLOSSARY.filter(g => !q || (g.k + ' ' + g.d).toLowerCase().includes(q));
    el.innerHTML = `<div class="wrap">
      <div class="eyebrow">Workbench</div>
      <h1 class="h-xl">Glossary</h1>
      ${brushRule(1)}
      <p class="lede">${GLOSSARY.length} terms. These are also the flashcard deck — <a href="#/cards">drill them →</a></p>
      <div class="field"><input id="gq" placeholder="Search terms and definitions…" value="${esc(q)}"></div>
      ${hits.map(g => `<div class="card">
        <div class="between" style="align-items:flex-start">
          <strong style="font-size:14.5px">${esc(g.k)}</strong>
          <a class="tag" href="#/t/${g.s}/0">T${trackById(g.s)?.n ?? g.s}</a>
        </div>
        <div class="muted" style="font-size:13.6px;margin-top:2px">${md(g.d)}</div>
      </div>`).join('') || `<div class="empty">No match.</div>`}
    </div>`;
    const inp = el.querySelector('#gq');
    inp.oninput = e => { q = e.target.value.toLowerCase(); const pos = e.target.selectionStart; draw(); const n = el.querySelector('#gq'); n.focus(); n.setSelectionRange(pos, pos); };
  }
  draw();
}

const portfolioWords = () => TRACKS.reduce((a, t) => a + store.workWords(t.id), 0);
const finishedArtefacts = () => TRACKS.filter(t => t.artifact.steps.every((_, i) => store.hasWork(t.id, i))).length;

/* ═══════════ progress & notes ═══════════ */
export function progressView(el) {
  const notes = store.all.notes;
  const noteKeys = Object.keys(notes);
  const quizzed = Object.entries(store.all.quiz);
  const cardsSeen = Object.keys(store.all.cards).length;

  el.innerHTML = `<div class="wrap">
    <div class="eyebrow">Workbench</div>
    <h1 class="h-xl">Progress &amp; notes</h1>
    ${brushRule(1)}

    <div class="card">
      <div class="between" style="margin-bottom:7px">
        <span class="eyebrow" style="margin:0">Overall</span>
        <span style="font-family:var(--mono);font-size:18px;font-weight:700;color:var(--am)">${overallPct()}%</span>
      </div>
      <div class="bar"><i style="width:${overallPct()}%"></i></div>
      <div class="row dim" style="margin-top:9px;font-size:11.5px;font-family:var(--mono)">
        <span>${store.all.streak.count || 0}-day streak</span><span>·</span>
        <span>${store.activeDays(30)} active days in 30</span><span>·</span>
        <span>${noteKeys.length} notes</span><span>·</span>
        <span>${cardsSeen}/${GLOSSARY.length} cards seen</span><span>·</span>
        <span>${quizzed.length}/${TRACKS.length} quizzes taken</span>
      </div>
    </div>

    <div class="b-h">Work produced</div>
    <div class="card card-2">
      <div class="out-row"><span class="k">Artefact words written</span><span class="v">${portfolioWords().toLocaleString()}</span></div>
      <div class="out-row"><span class="k">Artefacts finished</span><span class="v">${finishedArtefacts()}/${TRACKS.length}</span></div>
      <div class="out-row"><span class="k">Timed drill runs</span><span class="v">${store.drillCount}</span></div>
      <div class="out-row"><span class="k">Simulations submitted</span><span class="v">${SIMS.filter(s => store.sim(s.id)?.submitted).length}/${SIMS.length}</span></div>
      <div class="out-row"><span class="k">Weak spots outstanding</span><span class="v">${store.missedKeys.length}</span></div>
      <div class="row" style="gap:6px;margin-top:10px">
        <a class="chip" href="#/portfolio">Portfolio</a><a class="chip" href="#/practice">Practice</a>
        ${store.missedKeys.length ? '<a class="chip" href="#/weak">Weak spots</a>' : ''}
      </div>
    </div>

    <div class="b-h">Track by track</div>
    <div class="tbl-wrap"><table>
      <thead><tr><th>#</th><th>Track</th><th>Study</th><th>Artefact</th><th>Quiz best</th></tr></thead>
      <tbody>${TRACKS.map(t => {
        const q = store.quizOf(t.id);
        const qn = QUIZ.filter(x => x.t === t.id).length;
        return `<tr>
          <td style="font-family:var(--mono);color:var(--tx-3)">${String(t.n).padStart(2, '0')}</td>
          <td><a href="#/t/${t.id}/0">${esc(t.title)}</a></td>
          <td>${trackPct(t)}%</td>
          <td>${artifactPct(t)}%</td>
          <td>${q ? `${q.best}/${qn}` : '—'}</td>
        </tr>`;
      }).join('')}</tbody>
    </table></div>

    <div class="b-h">App version</div>
    <div class="card card-2">
      <div class="out-row"><span class="k">Running</span><span class="v">${esc(APP_VERSION)}</span></div>
      <div class="out-row"><span class="k">Offline</span><span class="v">${navigator.onLine ? 'online' : 'offline — cached copy'}</span></div>
      <div class="out-row"><span class="k">Installed</span><span class="v">${window.matchMedia('(display-mode: standalone)').matches || navigator.standalone ? 'home screen' : 'browser tab'}</span></div>
      <div class="row" style="margin-top:11px">
        <button class="btn sec" data-x="update">Check for updates</button>
        <span class="dim" style="font-size:12.2px">An update prompt appears automatically when a new build is live.</span>
      </div>
    </div>

    <div class="b-h">Your data</div>
    <p class="muted" style="font-size:13.6px">Everything lives in this browser's local storage. Nothing is uploaded anywhere.
      A browser can evict local storage without warning, so export whenever you have written something you would hate to lose.</p>
    <div class="card card-2" style="margin-bottom:10px">
      <div class="out-row"><span class="k">Last backup</span><span class="v">${lastBackupLabel()}</span></div>
      <div class="out-row"><span class="k">Stored on this device</span><span class="v">${(store.bytesUsed() / 1024).toFixed(0)} KB</span></div>
    </div>
    <div class="row" style="gap:8px;margin:10px 0 18px">
      <button class="btn" data-x="notes">Export notes (.md)</button>
      <button class="btn sec" data-x="json">Export all data (.json)</button>
      <label class="btn sec" style="cursor:pointer">Import .json<input type="file" accept="application/json" hidden data-import></label>
      <button class="btn sec" data-x="reset" style="color:var(--rs)">Reset everything</button>
    </div>

    ${noteKeys.length ? `<div class="b-h">Notes (${noteKeys.length})</div>
      ${noteKeys.map(k => `<details class="disc"><summary>${esc(labelForNote(k))}</summary>
        <div class="body" style="white-space:pre-wrap">${esc(notes[k])}</div></details>`).join('')}`
      : `<div class="empty">No notes yet. Notes live under each section.</div>`}
  </div>`;

  el.querySelector('[data-x="update"]').onclick = () => checkForUpdate({ announce: true });
  el.querySelector('[data-x="notes"]').onclick = () => download('praxis-notes.md', notesMarkdown(), 'text/markdown');
  el.querySelector('[data-x="json"]').onclick = () => {
    download(`praxis-backup-${new Date().toISOString().slice(0, 10)}.json`, store.exportAll(), 'application/json');
    store.pref('lastBackup', Date.now());
    progressView(el);
  };
  el.querySelector('[data-x="reset"]').onclick = () => {
    if (confirm('Delete all notes, progress, quiz scores and flashcard history on this device? This cannot be undone.')) {
      store.reset(); location.hash = '#/'; location.reload();
    }
  };
  el.querySelector('[data-import]').onchange = async e => {
    const f = e.target.files[0]; if (!f) return;
    try { store.importAll(await f.text()); alert('Imported.'); location.reload(); }
    catch { alert('That file could not be read as Praxis data.'); }
  };
}

function lastBackupLabel() {
  const t = store.pref('lastBackup') || 0;
  if (!t) return 'never';
  const d = Math.floor((Date.now() - t) / 864e5);
  return d === 0 ? 'today' : d === 1 ? 'yesterday' : `${d} days ago`;
}

function labelForNote(k) {
  if (k.startsWith('art-')) {
    const t = trackById(k.slice(4));
    return t ? `Artefact — ${t.title}` : k;
  }
  for (const t of TRACKS) {
    const s = t.sections.find(x => x.id === k);
    if (s) return `${t.title} · ${s.title}`;
  }
  return k;
}

function notesMarkdown() {
  const lines = ['# Praxis notes', '', `Exported ${new Date().toISOString().slice(0, 10)}`, ''];
  TRACKS.forEach(t => {
    const secNotes = t.sections.filter(s => store.note(s.id));
    const art = store.note('art-' + t.id);
    if (!secNotes.length && !art) return;
    lines.push(`## ${String(t.n).padStart(2, '0')} · ${t.title}`, '');
    secNotes.forEach(s => lines.push(`### ${s.title}`, '', store.note(s.id), ''));
    if (art) lines.push(`### Artefact — ${t.artifact.title}`, '', art, '');
  });
  return lines.join('\n');
}

function download(name, text, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement('a');
  a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
