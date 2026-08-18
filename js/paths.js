// Prep paths, the daily brief, and role readiness.
// A plan is generated from curated path data plus a time budget, then tracked as a checklist.
import { TRACKS, QUIZ, GLOSSARY, INTERVIEW, trackById } from '../data/index.js';
import { PATHS, BUDGETS, pathByKey } from '../data/paths.js';
import { DRILLS, SIMS, simById, drillById } from '../data/practice.js';
import { store } from './store.js';
import { esc, md } from './render.js';
import { trackPct } from './progress.js';
import { brushRule, brushCheck, brushDot } from '../data/brush.js';
import { toast } from './toast.js';

/* ═════════ plan generation ═════════ */
export function buildPlan(path, budget) {
  const items = [];
  const push = (kind, key, label, sub, href, mins) => items.push({ kind, key, label, sub, href, mins });

  const sectionItem = (tid, sid) => {
    const t = trackById(tid); if (!t) return;
    const i = t.sections.findIndex(s => s.id === sid); if (i < 0) return;
    push('section', 'sec:' + sid, t.sections[i].title, `Track ${String(t.n).padStart(2, '0')} · ${t.title}`, `#/t/${t.id}/${i}`, 12);
  };

  const allSections = tid => {
    const t = trackById(tid); if (!t) return;
    t.sections.forEach((s, i) =>
      push('section', 'sec:' + s.id, s.title, `Track ${String(t.n).padStart(2, '0')} · ${t.title}`, `#/t/${t.id}/${i}`, 12));
  };

  const quizItem = tid => {
    const t = trackById(tid); if (!t) return;
    const n = QUIZ.filter(q => q.t === t.id).length; if (!n) return;
    push('quiz', 'quiz:' + t.id, `Quiz — ${t.title}`, `${n} questions`, `#/quiz/${t.id}`, 6);
  };

  const drillItems = (tids, n) => {
    DRILLS.filter(d => tids.includes(d.trackRef)).slice(0, n).forEach(d =>
      push('drill', 'drill:' + d.id, `Drill — ${d.title}`, `${d.minutes} minutes, written`, `#/drill/${d.id}`, d.minutes + 3));
  };

  const simItem = id => {
    const s = simById(id); if (!s) return;
    push('sim', 'sim:' + s.id, `Simulation — ${s.title}`, `${s.minutes} minutes, scored`, `#/sim/${s.id}`, s.minutes + 10);
  };

  const artefactItem = tid => {
    const t = trackById(tid); if (!t) return;
    push('artefact', 'art:' + t.id, `Build — ${t.artifact.title}`, `Portfolio piece · track ${t.n}`, `#/build/${t.id}`, 90);
  };

  const rehearse = () =>
    push('interview', 'iv:' + path.key, 'Rehearse the interview answers out loud',
      `${INTERVIEW.filter(i => path.interviewRoles.includes(i.role)).length} questions for this role`, `#/interview`, 25);

  const cards = () => push('cards', 'cards', 'Flashcard session', 'Whatever is due', '#/cards', 10);

  if (budget === 'sprint') {
    path.mustKnow.forEach(sid => sectionItem(sid.split('-')[0].slice(1), sid));
    path.core.slice(0, 3).forEach(quizItem);
    drillItems(path.core, 2);
    simItem(path.sims[0]);
    rehearse();
    cards();
  } else if (budget === 'week') {
    path.core.forEach(allSections);
    path.core.forEach(quizItem);
    drillItems(path.core, 4);
    path.sims.slice(0, 2).forEach(simItem);
    artefactItem(path.artefacts[0]);
    rehearse();
    cards();
  } else {
    path.core.forEach(allSections);
    path.supporting.forEach(allSections);
    [...path.core, ...path.supporting].forEach(quizItem);
    drillItems([...path.core, ...path.supporting], 8);
    path.sims.forEach(simItem);
    path.artefacts.forEach(artefactItem);
    rehearse();
    cards();
    push('review', 'readiness', 'Check readiness and fix the gaps', 'Coverage, artefacts, quiz scores', '#/readiness', 15);
  }

  // de-duplicate while keeping order
  const seen = new Set();
  return items.filter(i => !seen.has(i.key) && seen.add(i.key));
}

// An item counts as done if the plan says so, or if the underlying work is already finished.
function itemDone(it) {
  if (store.planDone(it.key)) return true;
  const [kind, val] = it.key.split(':');
  if (kind === 'sec') return store.isDone(val);
  if (kind === 'quiz') return !!store.quizOf(val);
  if (kind === 'sim') return !!store.sim(val)?.submitted;
  if (kind === 'drill') return !!store.drill(val);
  if (kind === 'art') {
    const t = trackById(val);
    return !!t && t.artifact.steps.every((_, i) => store.hasWork(t.id, i));
  }
  return false;
}

const KIND_ICON = { section: '§', quiz: '?', drill: '✎', sim: '◈', artefact: '◆', interview: '☰', cards: '⚑', review: '◑' };
const KIND_COLOUR = { section: '--cy', quiz: '--vi', drill: '--am', sim: '--or', artefact: '--gr',
  interview: '--rs', cards: '--cy', review: '--am' };

/* ═════════ path chooser ═════════ */
export function pathsView(el) {
  const active = store.plan;

  el.innerHTML = `<div class="wrap">
    <div class="eyebrow">Workbench</div>
    <h1 class="h-xl">Prep paths</h1>
    <div style="color:var(--am)">${brushRule(0)}</div>
    <p class="lede">The curriculum is ordered for learning. A job search is not. Pick the role you are actually
      applying for and how long you have, and this builds the ordered plan: what to read, what to write, what to
      rehearse.</p>

    ${active ? `<div class="card" style="border-color:var(--am)">
      <div class="between">
        <div><span class="eyebrow" style="margin:0">Active plan</span>
          <div style="font-weight:600">${esc(pathByKey(active.role)?.label || active.role)} · ${esc(BUDGETS.find(b => b.key === active.budget)?.label || '')}</div></div>
        <a class="btn" href="#/plan">Open →</a>
      </div>
    </div>` : ''}

    ${PATHS.map(p => `<details class="disc">
      <summary>${brushDot()} ${esc(p.label)}</summary>
      <div class="body">
        <p class="dim" style="font-size:12.3px;margin:0 0 8px">${esc(p.aka)}</p>
        <p style="margin:0 0 10px"><strong>What it proves:</strong> ${md(p.proves)}</p>
        <div class="eyebrow">What the loop tests</div>
        <ul class="b-list">${p.tests.map(t => `<li><span>${md(t)}</span></li>`).join('')}</ul>
        <div class="b-warn"><span class="lbl">Red flag they screen for</span>${md(p.redFlag)}</div>
        <div class="eyebrow" style="margin-top:12px">Core tracks</div>
        <div class="row" style="gap:5px;flex-wrap:wrap;margin-bottom:12px">
          ${p.core.map(id => { const t = trackById(id); return t ? `<a class="chip" href="#/t/${t.id}/0">${esc(t.title)}</a>` : ''; }).join('')}
        </div>
        <div class="eyebrow">Start a plan</div>
        <div class="row" style="gap:6px;flex-wrap:wrap">
          ${BUDGETS.map(b => `<button class="btn sec" data-start="${p.key}:${b.key}">${esc(b.label)} · ${esc(b.hours)}</button>`).join('')}
        </div>
      </div>
    </details>`).join('')}
  </div>`;

  el.querySelectorAll('[data-start]').forEach(b => b.onclick = () => {
    const [role, budget] = b.dataset.start.split(':');
    if (store.plan && !confirm('Replace your current plan? Progress on finished items is kept.')) return;
    store.startPlan(role, budget);
    toast({ msg: 'Plan built. Work top to bottom.', icon: '✓', timeout: 2600 });
    location.hash = '#/plan';
  });
}

/* ═════════ active plan ═════════ */
export function planView(el) {
  const plan = store.plan;
  if (!plan) { location.hash = '#/paths'; return; }
  const path = pathByKey(plan.role);
  const budget = BUDGETS.find(b => b.key === plan.budget);
  if (!path) { store.endPlan(); location.hash = '#/paths'; return; }

  const items = buildPlan(path, plan.budget);
  const done = items.filter(itemDone);
  const pct = Math.round((done.length / items.length) * 100);
  const minsLeft = items.filter(i => !itemDone(i)).reduce((a, i) => a + i.mins, 0);
  const started = Math.floor((Date.now() - plan.startedAt) / 864e5);

  el.innerHTML = `<div class="wrap">
    <div class="row" style="margin-bottom:6px">
      <a class="tag" href="#/paths">← Paths</a>
      <span class="tag">${esc(budget?.label || plan.budget)}</span>
      <span class="tag">day ${started + 1}</span>
    </div>
    <h1 class="h-xl">${esc(path.label)}</h1>
    <div style="color:var(--am)">${brushRule(2)}</div>
    <p class="lede">${md(path.proves)}</p>

    <div class="card">
      <div class="between" style="margin-bottom:7px">
        <span class="eyebrow" style="margin:0">Plan progress</span>
        <span class="out">${pct}%</span>
      </div>
      <div class="bar"><i style="width:${pct}%"></i></div>
      <div class="row dim mono" style="margin-top:9px;font-size:11px">
        <span>${done.length}/${items.length} done</span><span>·</span>
        <span>${Math.round(minsLeft / 60 * 10) / 10}h remaining</span>
      </div>
    </div>

    ${['section', 'quiz', 'drill', 'sim', 'artefact', 'interview', 'cards', 'review'].map(kind => {
      const group = items.filter(i => i.kind === kind);
      if (!group.length) return '';
      const labels = { section: 'Read', quiz: 'Check understanding', drill: 'Write under a clock',
        sim: 'Full simulation', artefact: 'Build the portfolio piece', interview: 'Rehearse',
        cards: 'Retain', review: 'Review' };
      const gDone = group.filter(itemDone).length;
      const gMins = group.filter(i => !itemDone(i)).reduce((a, i) => a + i.mins, 0);
      return `<div class="plan-group" style="color:var(${KIND_COLOUR[kind]})">
        <div class="plan-head">
          <span class="eyebrow" style="color:inherit">${esc(labels[kind])}</span>
          <span class="plan-count">${gDone}/${group.length}${gMins ? ` · ${gMins < 60 ? gMins + 'm' : Math.round(gMins / 6) / 10 + 'h'} left` : ' · done'}</span>
        </div>
        <div class="plan-meter"><i style="width:${(gDone / group.length) * 100}%"></i></div>
        ${group.map(i => {
          const d = itemDone(i);
          return `<div class="plan-row${d ? ' done' : ''}" data-kind="${i.kind}">
            <button class="plan-check" data-key="${esc(i.key)}" aria-pressed="${d}"
              aria-label="${d ? 'Mark not done' : 'Mark done'}: ${esc(i.label)}">
              <span class="box">${brushCheck()}</span></button>
            <a class="plan-link" href="${i.href}">
              <span class="plan-kind mono">${KIND_ICON[i.kind]}</span>
              <span style="min-width:0">
                <span class="plan-label">${esc(i.label)}</span>
                <span class="dim" style="font-size:11.7px;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(i.sub)}</span>
              </span>
              <span class="plan-mins">${i.mins}m</span>
            </a>
          </div>`;
        }).join('')}
      </div>`;
    }).join('')}

    <div class="pager">
      <button class="btn sec" data-end>End this plan</button>
      <a class="btn" href="#/today">Today's brief →</a>
    </div>
  </div>`;

  el.querySelectorAll('[data-key]').forEach(b => b.onclick = () => {
    store.planToggle(b.dataset.key);
    planView(el);
  });
  el.querySelector('[data-end]').onclick = () => {
    if (confirm('End this plan? Your study progress and written work are kept.')) {
      store.endPlan(); location.hash = '#/paths';
    }
  };
}

/* ═════════ today ═════════ */
export function todayView(el) {
  store.touchStreak();
  const plan = store.plan;
  const path = plan ? pathByKey(plan.role) : null;
  const now = Date.now();
  const dayIdx = Math.floor(now / 864e5);

  // 1. cards due
  const dueCards = GLOSSARY.filter(g => store.card('g:' + g.k).due <= now).length;

  // 2. next thing in the plan, or next unstudied section overall
  let next = null;
  if (path) {
    next = buildPlan(path, plan.budget).find(i => !itemDone(i));
  }
  if (!next) {
    for (const t of TRACKS) {
      const i = t.sections.findIndex(s => !store.isDone(s.id));
      if (i >= 0) { next = { kind: 'section', label: t.sections[i].title, sub: `Track ${String(t.n).padStart(2, '0')} · ${t.title}`, href: `#/t/${t.id}/${i}`, mins: 12 }; break; }
    }
  }

  // 3. a drill: prefer one from the active path's core tracks that has never been run
  const drillPool = DRILLS.filter(d => !store.drill(d.id) && (!path || path.core.includes(d.trackRef)));
  const drill = (drillPool.length ? drillPool : DRILLS.filter(d => !store.drill(d.id)))[0]
    || DRILLS[dayIdx % DRILLS.length];

  // 4. one interview question, rotating daily
  const ivPool = path ? INTERVIEW.filter(i => path.interviewRoles.includes(i.role)) : INTERVIEW;
  const iv = ivPool[dayIdx % ivPool.length];

  // 5. artefact in progress
  const inProgress = TRACKS.find(t => {
    const w = t.artifact.steps.filter((_, i) => store.hasWork(t.id, i)).length;
    return w > 0 && w < t.artifact.steps.length;
  });

  // 6. weak spots from missed questions
  const weak = store.missedKeys.length;

  const card = (icon, kicker, title, sub, href, cta) => `<a class="card today-card" href="${href}">
    <span class="today-icon">${icon}</span>
    <span style="min-width:0;flex:1">
      <span class="eyebrow" style="margin:0">${esc(kicker)}</span>
      <span style="font-weight:600;display:block;margin:1px 0">${esc(title)}</span>
      <span class="dim" style="font-size:12.3px">${esc(sub)}</span>
    </span>
    <span class="today-cta mono">${esc(cta)}</span>
  </a>`;

  el.innerHTML = `<div class="wrap">
    <div class="eyebrow">${new Date().toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' })}</div>
    <h1 class="h-xl">Today</h1>
    <div style="color:var(--am)">${brushRule(1)}</div>
    <p class="lede">${plan
      ? `${esc(path.label)} path, ${esc((BUDGETS.find(b => b.key === plan.budget)?.label || '').toLowerCase())} pace, day ${Math.floor((Date.now() - plan.startedAt) / 864e5) + 1}. Work these in order.`
      : 'No active plan. Pick a role path and this becomes a targeted queue instead of a menu.'}
      Streak: ${store.all.streak.count || 0} day${store.all.streak.count === 1 ? '' : 's'}.</p>

    ${!plan ? `<a class="card" href="#/paths" style="border-color:var(--am)">
      <div class="eyebrow" style="color:var(--am)">Start here</div>
      <div style="font-weight:600">Choose a role path</div>
      <div class="dim" style="font-size:12.5px">Nine role families, three time budgets.</div>
    </a>` : ''}

    ${next ? card('§', 'Study', next.label, next.sub, next.href, `${next.mins}m`) : ''}
    ${drill ? card('✎', 'Write under a clock', drill.title, `${drill.minutes} minute drill · ${trackById(drill.trackRef)?.title || ''}`, `#/drill/${drill.id}`, `${drill.minutes}m`) : ''}
    ${dueCards ? card('⚑', 'Retain', `${dueCards} card${dueCards === 1 ? '' : 's'} due`, 'Spaced repetition over the glossary', '#/cards', '10m') : ''}
    ${weak ? card('◑', 'Fix a weak spot', `${weak} question${weak === 1 ? '' : 's'} you got wrong`, 'Re-answer them until they stick', '#/weak', '8m') : ''}
    ${inProgress ? card('◆', 'Finish the artefact', inProgress.artifact.title, `Track ${inProgress.n} · in progress`, `#/build/${inProgress.id}`, '30m') : ''}

    <div class="card">
      <div class="eyebrow">Say this one out loud</div>
      <div style="font-weight:600;font-size:15px;margin-bottom:6px">${esc(iv.q)}</div>
      <details class="disc"><summary>The scaffold</summary><div class="body">${md(iv.a)}</div></details>
      <div class="dim" style="font-size:12.2px;margin-top:8px">${esc(iv.role)} · answer in under 90 seconds, standing up.</div>
    </div>

    <div class="pager">
      <a class="btn sec" href="${plan ? '#/plan' : '#/paths'}">${plan ? 'Full plan' : 'Prep paths'} →</a>
      <a class="btn" href="#/practice">Practice →</a>
    </div>
  </div>`;
}

/* ═════════ readiness ═════════ */
export function readinessView(el) {
  const rows = PATHS.map(p => {
    const tracks = [...new Set([...p.core, ...p.supporting])].map(trackById).filter(Boolean);
    const secs = tracks.flatMap(t => t.sections);
    const read = secs.filter(s => store.isDone(s.id)).length;
    const must = p.mustKnow.filter(sid => store.isDone(sid)).length;
    const arts = p.artefacts.map(trackById).filter(Boolean);
    const built = arts.filter(t => t.artifact.steps.every((_, i) => store.hasWork(t.id, i))).length;
    const sims = p.sims.filter(id => store.sim(id)?.submitted).length;
    const qs = p.core.map(id => ({ id, q: store.quizOf(id), n: QUIZ.filter(x => x.t === id).length }));
    const quizScore = qs.reduce((a, x) => a + (x.q ? x.q.best / (x.n || 1) : 0), 0) / (qs.length || 1);

    const score = Math.round(
      (must / p.mustKnow.length) * 30 +
      (read / secs.length) * 15 +
      (built / arts.length) * 25 +
      (sims / p.sims.length) * 20 +
      quizScore * 10
    );
    return { p, score, read, secs: secs.length, must, built, arts: arts.length, sims, quizScore };
  }).sort((a, b) => b.score - a.score);

  el.innerHTML = `<div class="wrap">
    <div class="eyebrow">Workbench</div>
    <h1 class="h-xl">Readiness</h1>
    <div style="color:var(--am)">${brushRule(0)}</div>
    <p class="lede">How defensible each role application is right now. Weighted toward the things a hiring manager
      can actually see: the must-know set, finished artefacts, and simulations completed under time.</p>

    ${rows.map(r => `<div class="card">
      <div class="between" style="align-items:flex-start">
        <div style="min-width:0">
          <div style="font-weight:600">${esc(r.p.label)}</div>
          <div class="dim" style="font-size:12px">${r.built}/${r.arts} artefacts · ${r.sims}/${r.p.sims.length} simulations · ${r.must}/${r.p.mustKnow.length} must-know sections</div>
        </div>
        <span class="ring ${r.score >= 75 ? 'full' : r.score >= 35 ? 'on' : ''}">${r.score}%</span>
      </div>
      <div class="bar" style="margin-top:9px"><i style="width:${r.score}%"></i></div>
      <div class="row" style="gap:6px;margin-top:10px">
        <a class="chip" href="#/paths">Plan</a>
        ${r.p.sims.map(id => { const s = simById(id); return s ? `<a class="chip trunc" href="#/sim/${id}" title="${esc(s.title)}">${esc(s.title)}</a>` : ''; }).join('')}
      </div>
    </div>`).join('')}

    <div class="card card-2">
      <div class="eyebrow">How this is weighted</div>
      <ul class="b-list">
        <li><span>Must-know sections read — 30%</span></li>
        <li><span>Portfolio artefacts finished — 25%</span></li>
        <li><span>Simulations submitted and scored — 20%</span></li>
        <li><span>All core and supporting sections — 15%</span></li>
        <li><span>Quiz best scores across core tracks — 10%</span></li>
      </ul>
    </div>
  </div>`;
}

/* ═════════ weak spots ═════════ */
export function weakView(el) {
  const keys = store.missedKeys;
  const items = keys.map(k => {
    const [t, i] = k.split(':');
    const pool = QUIZ.filter(q => q.t === Number(t));
    return { key: k, q: pool[+i], track: trackById(t), n: store.all.missed[k].n };
  }).filter(x => x.q);

  if (!items.length) {
    el.innerHTML = `<div class="wrap">
      <div class="eyebrow">Workbench</div><h1 class="h-xl">Weak spots</h1>
      <div style="color:var(--am)">${brushRule(1)}</div>
      <div class="empty">Nothing here. Questions you answer wrongly in a quiz collect here until you get them right.
      <div style="margin-top:10px"><a class="btn sec" href="#/exam">Take the mixed exam →</a></div></div></div>`;
    return;
  }

  let i = 0, answered = false;
  function draw() {
    const it = items[i];
    el.innerHTML = `<div class="wrap">
      <div class="between">
        <div><div class="eyebrow">Weak spots</div><h1 class="h-lg">Questions you got wrong</h1></div>
        <span class="mono dim" style="font-size:12px">${i + 1}/${items.length}</span>
      </div>
      <div style="color:var(--am)">${brushRule(2)}</div>
      <div class="card">
        <div class="dim" style="font-size:11.5px;margin-bottom:6px">${esc(it.track?.title || '')} · missed ${it.n}×</div>
        <div style="font-weight:600;font-size:15.5px;margin-bottom:14px">${md(it.q.q)}</div>
        ${it.q.o.map((o, k) => `<button class="opt" data-o="${k}">${md(o)}</button>`).join('')}
        <div data-explain hidden></div>
      </div>
      <div class="pager">
        <a class="btn sec" href="#/today">← Today</a>
        <button class="btn" data-next hidden>${i === items.length - 1 ? 'Finish' : 'Next →'}</button>
      </div>
    </div>`;

    el.querySelectorAll('[data-o]').forEach(b => b.onclick = () => {
      if (answered) return;
      answered = true;
      const picked = +b.dataset.o;
      el.querySelectorAll('[data-o]').forEach(x => {
        const k = +x.dataset.o;
        if (k === it.q.a) x.classList.add('right');
        else if (k === picked) x.classList.add('wrong');
      });
      const ex = el.querySelector('[data-explain]');
      ex.hidden = false; ex.className = 'explain';
      ex.innerHTML = `<strong style="color:var(${picked === it.q.a ? '--gr' : '--rs'})">${picked === it.q.a ? 'Right this time.' : 'Still not it.'}</strong> ${md(it.q.e)}`;
      if (picked === it.q.a) store.clearMiss(it.key);
      el.querySelector('[data-next]').hidden = false;
    });

    el.querySelector('[data-next]').onclick = () => {
      if (i === items.length - 1) { toast({ msg: 'Weak spots reviewed.', icon: '✓', timeout: 2400 }); location.hash = '#/today'; return; }
      i++; answered = false; draw();
    };
  }
  draw();
}
