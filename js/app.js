import { TRACKS, PHASES, ROLES, QUIZ, GLOSSARY, FRAMEWORKS, TEMPLATES, INTERVIEW, trackById } from '../data/index.js';
import { store } from './store.js';
import { renderBlocks, blocksText, esc, md } from './render.js';
import { quizView, examView, cardsView } from './quiz.js';
import { calcView, frameworksView, promptsView, templatesView, interviewView, glossaryView, progressView } from './tools.js';
import { builderView, portfolioView, download } from './build.js';
import { practiceView, drillView, simView, stopTimers } from './practice.js';
import { pathsView, planView, todayView, readinessView, weakView } from './paths.js';
import { jdView } from './jd.js';
import { DRILLS, SIMS } from '../data/practice.js';
import { PATHS } from '../data/paths.js';
import { COMPETENCIES } from '../data/taxonomy.js';
import { trackPct, overallPct } from './progress.js';
import { ensoMark, brushRule, brushDot, brushCheck, brushFlourish } from '../data/brush.js';
import { initPWA } from './pwa.js';
import { toast } from './toast.js';

const main = document.getElementById('main');
const nav = document.getElementById('sidenavInner');
document.getElementById('brandMark').innerHTML = ensoMark();

/* ─────────── sidebar ─────────── */
const DO = [
  ['#/today', '◐', 'Today'],
  ['#/paths', '◈', 'Prep paths'],
  ['#/practice', '✎', 'Practice & simulations'],
  ['#/portfolio', '❖', 'Portfolio'],
  ['#/jd', '⌖', 'Job description mapper'],
  ['#/readiness', '◑', 'Readiness']
];
const TOOLS = [
  ['#/', '◆', 'All tracks'],
  ['#/frameworks', '⬡', 'Framework index'],
  ['#/templates', '❐', 'Swipe & templates'],
  ['#/prompts', '⚙', 'Prompt library'],
  ['#/calc', '∑', 'Calculators'],
  ['#/cards', '⚑', 'Flashcards'],
  ['#/exam', '★', 'Mixed exam'],
  ['#/interview', '☰', 'Interview bank'],
  ['#/glossary', 'A', 'Glossary'],
  ['#/progress', '◷', 'Progress & notes']
];

function buildNav() {
  const hash = location.hash || '#/';
  const item = ([h, ic, label]) =>
    `<a class="nav-item" href="${h}"${hash === h ? ' aria-current="page"' : ''}><span class="n">${ic}</span>${label}</a>`;

  let html = `<div class="nav-group"><div class="nav-label">Do the work</div>` +
    DO.map(item).join('') + `</div>` +
    `<div class="nav-group"><div class="nav-label">Workbench</div>` +
    TOOLS.map(item).join('') + `</div>`;

  PHASES.forEach(p => {
    const list = TRACKS.filter(t => t.phase === p.k);
    if (!list.length) return;
    html += `<div class="nav-group"><div class="nav-label" style="color:var(${p.c})">${brushDot()}${esc(p.k)}</div>` +
      list.map(t => {
        const pct = trackPct(t);
        const on = hash.startsWith(`#/t/${t.id}/`) || hash === `#/t/${t.id}` || hash === `#/quiz/${t.id}`;
        return `<a class="nav-item${pct === 100 ? ' done' : ''}" href="#/t/${t.id}/0"${on ? ' aria-current="page"' : ''}>
          <span class="n">${String(t.n).padStart(2, '0')}</span>
          <span style="flex:1;min-width:0">${esc(t.title)}</span>
          <span class="pct">${pct === 100 ? '✓' : pct + '%'}</span></a>`;
      }).join('') + `</div>`;
  });
  nav.innerHTML = html;
}

/* ─────────── dashboard ─────────── */
let roleFilter = 'all';

function dashboard() {
  const pct = overallPct();
  const plan = store.plan;
  const streak = store.all.streak;
  const last = store.pref('last');
  const lastTrack = last ? trackById(last.split(':')[0]) : null;
  const quizzes = Object.keys(store.all.quiz).length;
  const notes = Object.keys(store.all.notes).length;

  const shown = TRACKS.filter(t => roleFilter === 'all' || t.roles.includes(roleFilter));

  main.innerHTML = `<div class="wrap">
    <div class="eyebrow">Full-stack marketing, content, GTM &amp; service</div>
    <h1 class="h-xl">The operating system for intermediate&nbsp;→&nbsp;senior practice</h1>
    <div style="color:var(--am)">${brushRule(0)}</div>
    <p class="lede">${TRACKS.length} tracks · ${TRACKS.reduce((a, t) => a + t.sections.length, 0)} sections ·
      ${DRILLS.length} timed drills · ${SIMS.length} take-home simulations · ${QUIZ.length} exam questions ·
      ${FRAMEWORKS.length} frameworks · ${TRACKS.length} portfolio artefacts. Everything stays on this device.</p>

    <div class="row" style="gap:8px;margin-bottom:12px">
      <a class="btn" href="#/today" style="flex:1;text-align:center">Today's brief</a>
      <a class="btn sec" href="${plan ? '#/plan' : '#/paths'}" style="flex:1;text-align:center">${plan ? 'Your plan' : 'Pick a role path'}</a>
    </div>

    <div class="card">
      <div class="between" style="margin-bottom:7px">
        <span class="eyebrow" style="margin:0">Overall progress</span>
        <span style="font-family:var(--mono);font-size:19px;font-weight:700;color:var(--am)">${pct}%</span>
      </div>
      <div class="bar"><i style="width:${pct}%"></i></div>
      <div class="row dim" style="margin-top:9px;font-size:11.5px;font-family:var(--mono)">
        <span>${streak.count || 0}-day streak</span><span>·</span>
        <span>${notes} note${notes === 1 ? '' : 's'}</span><span>·</span>
        <span>${store.drillCount} drill run${store.drillCount === 1 ? '' : 's'}</span><span>·</span>
        <span>${quizzes} quiz${quizzes === 1 ? '' : 'zes'} attempted</span>
      </div>
    </div>

    ${lastTrack ? `<a class="card" href="#/t/${lastTrack.id}/${last.split(':')[1] || 0}" style="display:block">
      <span class="eyebrow" style="margin:0">Continue where you stopped</span>
      <div style="font-weight:600;margin-top:2px">${esc(lastTrack.title)}</div>
      <div class="dim" style="font-size:12.5px">${esc(lastTrack.sections[+(last.split(':')[1] || 0)]?.title || 'Artefact')}</div>
    </a>` : ''}

    <div class="chips" style="margin-top:18px">
      <button class="chip" data-role="all" aria-pressed="${roleFilter === 'all'}">All tracks</button>
      ${ROLES.map(r => `<button class="chip" data-role="${r.k}" aria-pressed="${roleFilter === r.k}">${esc(r.label)}</button>`).join('')}
    </div>

    ${PHASES.map(p => {
      const list = shown.filter(t => t.phase === p.k);
      if (!list.length) return '';
      return `<div style="margin:20px 0 8px">
        <div class="row" style="margin-bottom:8px">
          <span style="color:var(${p.c})">${brushDot()}</span>
          <span class="eyebrow" style="margin:0;color:var(${p.c})">${esc(p.k)}</span>
          <span class="dim" style="font-size:11.5px">${esc(p.blurb)}</span>
        </div>
        ${list.map(t => {
          const tp = trackPct(t);
          return `<a class="card" href="#/t/${t.id}/0" style="display:grid;grid-template-columns:26px 1fr auto;gap:10px;align-items:center">
            <span style="font-family:var(--mono);font-size:10px;color:var(--tx-3)">${String(t.n).padStart(2, '0')}</span>
            <span>
              <span style="font-weight:600;display:block">${esc(t.title)}</span>
              <span class="dim" style="font-size:12.3px">${esc(t.sub)}</span>
            </span>
            <span class="ring ${tp === 100 ? 'full' : tp > 0 ? 'on' : ''}">${tp === 100 ? '✓' : tp + '%'}</span>
          </a>`;
        }).join('')}
      </div>`;
    }).join('')}

    <div class="card card-2" style="margin-top:22px">
      ${brushFlourish()}
      <div class="eyebrow">How to use this</div>
      <ol class="b-steps" style="margin-bottom:0">
        <li><span class="num">1</span><div><span class="nm"><a href="#/paths">Pick the role path</a> you are applying for.</span> It builds an ordered plan from the track you would otherwise browse aimlessly.</div></li>
        <li><span class="num">2</span><div><span class="nm">Open <a href="#/today">Today</a> each morning.</span> One section, one timed drill, whatever cards are due, one answer said out loud.</div></li>
        <li><span class="num">3</span><div><span class="nm"><a href="#/practice">Write under the clock.</a></span> Drills build the muscle; simulations rehearse the real assessment with a rubric.</div></li>
        <li><span class="num">4</span><div><span class="nm"><a href="#/portfolio">Build the artefacts here</a>, not in another app.</span> Each exports as a clean document you can send.</div></li>
        <li><span class="num">5</span><div><span class="nm">Before applying, run the <a href="#/jd">job description mapper</a></span> and check <a href="#/readiness">readiness</a>. Name your real gaps rather than discovering them in the interview.</div></li>
      </ol>
    </div>
  </div>`;

  main.querySelectorAll('[data-role]').forEach(b => b.onclick = () => { roleFilter = b.dataset.role; dashboard(); });
}

/* ─────────── track view ─────────── */
function trackView(id, secRaw) {
  const t = trackById(id);
  if (!t) return dashboard();
  const isArt = secRaw === 'a';
  const si = Math.max(0, Math.min(t.sections.length - 1, parseInt(secRaw, 10) || 0));
  store.pref('last', `${t.id}:${isArt ? 0 : si}`);
  store.touchStreak();

  const sec = t.sections[si];
  const pct = trackPct(t);
  const q = store.quizOf(t.id);
  const qCount = QUIZ.filter(x => x.t === t.id).length;

  const tabs = t.sections.map((s, i) =>
    `<button role="tab" aria-selected="${!isArt && i === si}" data-sec="${i}">${esc(s.title)}</button>`
  ).join('') + `<button role="tab" aria-selected="${isArt}" data-sec="a">◆ Artefact</button>`;

  const body = isArt ? artifactBody(t) : `
    <h2 class="h-lg">${esc(sec.title)}</h2>
    <div style="color:var(${t.color})">${brushRule(t.n % 3)}</div>
    <div class="blocks">${renderBlocks(sec.blocks)}</div>
    <div class="note-wrap">
      <div class="eyebrow">Your notes — ${esc(sec.title)}</div>
      <textarea class="note" data-note="${esc(sec.id)}" placeholder="What you must remember, in your own words. Notes save automatically and stay on this device.">${esc(store.note(sec.id))}</textarea>
    </div>
    <button class="check" data-done="${esc(sec.id)}" aria-pressed="${store.isDone(sec.id)}">
      <span class="box">${brushCheck()}</span><span class="lbl">Mark this section studied</span>
    </button>`;

  main.innerHTML = `<div class="wrap">
    <div class="row" style="margin-bottom:5px">
      <span class="tag" style="color:var(${t.color});border-color:var(${t.color})">Track ${String(t.n).padStart(2, '0')}</span>
      <span class="tag">${esc(t.phase)}</span>
      ${t.roles.map(r => `<span class="tag">${esc(ROLES.find(x => x.k === r)?.label || r)}</span>`).join('')}
    </div>
    <h1 class="h-xl">${esc(t.title)}</h1>
    <p class="lede" style="margin-bottom:10px">${esc(t.sub)}</p>
    <div class="card card-2" style="font-size:12.3px;display:grid;gap:3px">
      <div><strong>Time</strong> · ${esc(t.time)}</div>
      <div><strong>Prerequisite</strong> · ${esc(t.prereq)}</div>
      <div><strong>Downstream</strong> · ${esc(t.feeds)}</div>
      <div><strong>Sources</strong> · ${esc(t.sources || '—')}</div>
      <div><strong>Progress</strong> · ${pct}%${q ? ` · quiz best ${q.best}/${qCount}` : ''}</div>
    </div>

    <div class="tabs" role="tablist" style="margin-top:14px">${tabs}</div>
    ${body}

    <div class="pager">
      <button class="btn sec" data-go="prev">← Previous</button>
      <a class="btn sec" href="#/quiz/${t.id}">Quiz (${qCount}) →</a>
      <button class="btn" data-go="next" style="background:var(${t.color});color:#0a0a0f">Next →</button>
    </div>
  </div>`;

  main.querySelectorAll('[data-sec]').forEach(b => b.onclick = () => go(`#/t/${t.id}/${b.dataset.sec}`));
  const activeTab = main.querySelector('[data-sec][aria-selected="true"]');
  if (activeTab) activeTab.scrollIntoView({ inline: 'center', block: 'nearest' });

  // swipe left/right between sections on touch devices
  swipe(main, dir => {
    if (dir < 0) main.querySelector('[data-go="next"]').click();
    else main.querySelector('[data-go="prev"]').click();
  });

  const noteEl = main.querySelector('[data-note]');
  if (noteEl) noteEl.oninput = e => store.note(e.target.dataset.note, e.target.value);

  const chk = main.querySelector('[data-done]');
  if (chk) chk.onclick = () => {
    const on = store.toggleDone(chk.dataset.done);
    chk.setAttribute('aria-pressed', on);
    buildNav();
  };

  main.querySelectorAll('[data-step]').forEach(b => b.onclick = () => {
    const on = store.toggleStep(t.id, +b.dataset.step);
    b.setAttribute('aria-pressed', on);
    buildNav();
    const pctEl = main.querySelector('[data-artpct]');
    if (pctEl) pctEl.textContent = trackPct(t) + '%';
  });

  main.querySelector('[data-go="prev"]').onclick = () => {
    if (isArt) return go(`#/t/${t.id}/${t.sections.length - 1}`);
    if (si > 0) return go(`#/t/${t.id}/${si - 1}`);
    const prev = TRACKS[t.n - 2];
    go(prev ? `#/t/${prev.id}/${prev.sections.length - 1}` : '#/');
  };
  main.querySelector('[data-go="next"]').onclick = () => {
    if (!isArt && si < t.sections.length - 1) return go(`#/t/${t.id}/${si + 1}`);
    if (!isArt) return go(`#/t/${t.id}/a`);
    const next = TRACKS[t.n];
    go(next ? `#/t/${next.id}/0` : '#/exam');
  };
}

function artifactBody(t) {
  return `
    <div class="between">
      <h2 class="h-lg">◆ ${esc(t.artifact.title)}</h2>
      <span style="font-family:var(--mono);color:var(--am)" data-artpct>${trackPct(t)}%</span>
    </div>
    <div style="color:var(${t.color})">${brushRule(t.n % 3)}</div>
    ${t.artifact.intro ? `<p class="lede">${md(t.artifact.intro)}</p>` : ''}
    <a class="card" href="#/build/${t.id}" style="border-color:var(--am);display:flex;gap:12px;align-items:center">
      <span style="font-size:20px;color:var(--am)">❖</span>
      <span style="flex:1;min-width:0">
        <span class="eyebrow" style="margin:0;color:var(--am)">Workspace</span>
        <span style="font-weight:600;display:block">Write it here and export it</span>
        <span class="dim" style="font-size:12.3px">${t.artifact.steps.filter((_, i) => store.hasWork(t.id, i)).length}/${t.artifact.steps.length} sections drafted · ${store.workWords(t.id)} words</span>
      </span>
      <span class="mono dim">→</span>
    </a>
    ${t.artifact.steps.map((s, i) => `
      <button class="check" data-step="${i}" aria-pressed="${store.isStep(t.id, i)}">
        <span class="box">${brushCheck()}</span><span class="lbl"><strong>${md(s.s)}</strong></span>
      </button>
      ${s.guide ? `<div style="margin:-2px 0 12px 26px;font-size:13.4px;color:var(--tx-2);border-left:2px solid var(--line);padding-left:11px">${md(s.guide)}</div>` : ''}
    `).join('')}
    <div class="note-wrap">
      <div class="eyebrow">Artefact working notes</div>
      <textarea class="note" data-note="art-${t.id}" placeholder="Links, drafts, decisions, what you'd do differently…">${esc(store.note('art-' + t.id))}</textarea>
    </div>`;
}

/* ─────────── search index + palette ─────────── */
const INDEX = [];
TRACKS.forEach(t => {
  t.sections.forEach((s, i) => INDEX.push({
    kind: 'Section', title: s.title, sub: `${t.title} · track ${t.n}`,
    href: `#/t/${t.id}/${i}`, text: (s.title + ' ' + blocksText(s.blocks)).toLowerCase()
  }));
  INDEX.push({
    kind: 'Artefact', title: t.artifact.title, sub: `Track ${t.n} · ${t.title}`,
    href: `#/t/${t.id}/a`,
    text: (t.artifact.title + ' ' + t.artifact.steps.map(s => s.s + ' ' + (s.guide || '')).join(' ')).toLowerCase()
  });
});
DRILLS.forEach(d => INDEX.push({ kind: 'Drill', title: d.title, sub: `${d.minutes} minute timed drill`, href: `#/drill/${d.id}`, text: (d.title + ' ' + d.prompt + ' ' + d.constraints.join(' ')).toLowerCase() }));
SIMS.forEach(s => INDEX.push({ kind: 'Simulation', title: s.title, sub: `${s.role} · ${s.minutes} minutes`, href: `#/sim/${s.id}`, text: (s.title + ' ' + s.role + ' ' + s.scenario + ' ' + s.deliverable).toLowerCase() }));
PATHS.forEach(p => INDEX.push({ kind: 'Path', title: p.label, sub: p.aka, href: '#/paths', text: (p.label + ' ' + p.aka + ' ' + p.proves + ' ' + p.tests.join(' ')).toLowerCase() }));
COMPETENCIES.forEach(c => INDEX.push({ kind: 'Competency', title: c.label, sub: c.proofHint, href: '#/jd', text: (c.label + ' ' + c.terms.join(' ') + ' ' + c.proofHint).toLowerCase() }));
FRAMEWORKS.forEach(f => INDEX.push({ kind: 'Framework', title: f.n, sub: `${f.src} · ${f.use}`, href: '#/frameworks', text: (f.n + ' ' + f.src + ' ' + f.use + ' ' + f.steps.join(' ')).toLowerCase() }));
GLOSSARY.forEach(g => INDEX.push({ kind: 'Term', title: g.k, sub: g.d, href: '#/glossary', text: (g.k + ' ' + g.d).toLowerCase() }));
TEMPLATES.forEach(c => c.items.forEach(i => INDEX.push({ kind: 'Template', title: i.n, sub: c.cat, href: '#/templates', text: (i.n + ' ' + c.cat + ' ' + i.v).toLowerCase() })));
INTERVIEW.forEach(i => INDEX.push({ kind: 'Interview', title: i.q, sub: i.role, href: '#/interview', text: (i.q + ' ' + i.role + ' ' + i.a).toLowerCase() }));

const palette = document.getElementById('palette');
const pInput = document.getElementById('paletteInput');
const pResults = document.getElementById('paletteResults');
let pSel = 0, pHits = [];

function openPalette() {
  palette.hidden = false; pInput.value = ''; pInput.focus(); runSearch('');
}
function closePalette() { palette.hidden = true; }
function runSearch(q) {
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  pHits = terms.length
    ? INDEX.filter(x => terms.every(tm => x.text.includes(tm))).slice(0, 40)
    : INDEX.filter(x => x.kind === 'Section').slice(0, 12);
  pSel = 0;
  pResults.innerHTML = pHits.length
    ? pHits.map((h, i) => `<button class="pr${i === 0 ? ' sel' : ''}" data-i="${i}">
        <span class="k">${h.kind}</span>${esc(h.title)}<span class="s">${esc(h.sub)}</span></button>`).join('')
    : `<div class="empty">Nothing found. Try "objection", "GEO", "de-escalation", "sample size".</div>`;
  pResults.querySelectorAll('.pr').forEach(b => b.onclick = () => { go(pHits[+b.dataset.i].href); closePalette(); });
}
pInput.addEventListener('input', e => runSearch(e.target.value));
palette.addEventListener('click', e => { if (e.target === palette) closePalette(); });
document.getElementById('searchBtn').onclick = openPalette;

document.addEventListener('keydown', e => {
  if (!palette.hidden) {
    if (e.key === 'Escape') return closePalette();
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      pSel = Math.max(0, Math.min(pHits.length - 1, pSel + (e.key === 'ArrowDown' ? 1 : -1)));
      pResults.querySelectorAll('.pr').forEach((b, i) => b.classList.toggle('sel', i === pSel));
      pResults.querySelector('.sel')?.scrollIntoView({ block: 'nearest' });
    }
    if (e.key === 'Enter' && pHits[pSel]) { go(pHits[pSel].href); closePalette(); }
    return;
  }
  const typing = /^(INPUT|TEXTAREA)$/.test(document.activeElement?.tagName);
  if (typing) return;
  if (e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key === 'k')) { e.preventDefault(); openPalette(); }
});

/* ─────────── chrome: nav drawer, theme, copy ─────────── */
const menuBtn = document.getElementById('menuBtn');
const scrim = document.getElementById('scrim');
function setNav(open) {
  document.body.classList.toggle('nav-open', open);
  scrim.hidden = !open;
  menuBtn.setAttribute('aria-expanded', open);
}
menuBtn.onclick = () => setNav(!document.body.classList.contains('nav-open'));
scrim.onclick = () => setNav(false);

const themeBtn = document.getElementById('themeBtn');
function applyTheme(v) {
  document.documentElement.dataset.theme = v;
  document.querySelector('meta[name=theme-color]').setAttribute('content', v === 'dark' ? '#0a0a0f' : '#f7f5f0');
  store.pref('theme', v);
}
applyTheme(store.pref('theme') || 'dark');
themeBtn.onclick = () => applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-copy]');
  if (!btn) return;
  navigator.clipboard?.writeText(btn.dataset.copy).then(() => {
    const old = btn.textContent;
    btn.textContent = 'Copied';
    setTimeout(() => { btn.textContent = old; }, 1300);
    toast({ msg: 'Copied to clipboard.', timeout: 1600, icon: '❐' });
  }).catch(() => toast({ msg: 'Clipboard blocked by the browser — select and copy manually.', timeout: 3600 }));
});

/* ─────────── touch swipe ─────────── */
function swipe(el, handler) {
  let x0 = 0, y0 = 0, active = false;
  el.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) return;
    // ignore swipes that start inside something horizontally scrollable
    if (e.target.closest('.tbl-wrap, .tabs, .b-code, textarea, input')) { active = false; return; }
    x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; active = true;
  }, { passive: true });
  el.addEventListener('touchend', e => {
    if (!active) return;
    active = false;
    const dx = e.changedTouches[0].clientX - x0;
    const dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 70 && Math.abs(dy) < 45) handler(dx < 0 ? -1 : 1);
  }, { passive: true });
}

/* ─────────── mobile tab bar ─────────── */
const tabbar = document.getElementById('tabbar');
const TAB_MATCH = {
  '#/today': h => ['#/today', '#/plan', '#/paths', '#/weak'].includes(h),
  '#/': h => h === '#/' || h.startsWith('#/t/') || h.startsWith('#/quiz/') || h === '#/exam',
  '#/practice': h => h === '#/practice' || h.startsWith('#/drill/') || h.startsWith('#/sim/') || h === '#/cards',
  '#/portfolio': h => h === '#/portfolio' || h.startsWith('#/build/') || h === '#/jd' || h === '#/readiness',
  '#/frameworks': h => ['#/frameworks', '#/templates', '#/prompts', '#/glossary', '#/interview', '#/calc', '#/progress'].includes(h)
};

function markTabbar() {
  const h = location.hash || '#/';
  tabbar.querySelectorAll('a').forEach(a => {
    const target = a.getAttribute('href');
    const on = TAB_MATCH[target]?.(h);
    if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
}

/* ─────────── router ─────────── */
export function go(hash) { if (location.hash === hash) route(); else location.hash = hash; }

function route() {
  const [, seg, a, b] = (location.hash || '#/').split('/');
  setNav(false);
  stopTimers();
  window.scrollTo(0, 0);

  switch (seg) {
    case '': case undefined: dashboard(); break;
    case 't': trackView(a, b); break;
    case 'quiz': quizView(main, a); break;
    case 'exam': examView(main); break;
    case 'cards': cardsView(main); break;
    case 'today': todayView(main); break;
    case 'paths': pathsView(main); break;
    case 'plan': planView(main); break;
    case 'practice': practiceView(main); break;
    case 'drill': drillView(main, a); break;
    case 'sim': simView(main, a); break;
    case 'build': builderView(main, a); break;
    case 'portfolio': portfolioView(main); break;
    case 'jd': jdView(main); break;
    case 'readiness': readinessView(main); break;
    case 'weak': weakView(main); break;
    case 'frameworks': frameworksView(main); break;
    case 'templates': templatesView(main); break;
    case 'prompts': promptsView(main); break;
    case 'calc': calcView(main); break;
    case 'interview': interviewView(main); break;
    case 'glossary': glossaryView(main); break;
    case 'progress': progressView(main); break;
    default: dashboard();
  }
  buildNav();
  markTabbar();
  main.focus({ preventScroll: true });
}

/* ─────────── protecting the written work ─────────── */
// Everything lives in localStorage, which a browser can evict. Once there is real
// work in here, nag for a backup rather than letting months of it vanish silently.
document.addEventListener('praxis:storage-error', () => {
  toast({
    id: 'quota', icon: '!', timeout: 0,
    msg: 'This device refused to save. Export your work now before writing more.',
    action: 'Export', secondary: 'Dismiss',
    onAction: () => { backupNow(); }
  });
});

function backupNow() {
  download(`praxis-backup-${new Date().toISOString().slice(0, 10)}.json`, store.exportAll(), 'application/json');
  store.pref('lastBackup', Date.now());
}

function maybeNagBackup() {
  const risk = store.valueAtRisk();
  const last = store.pref('lastBackup') || 0;
  const nag = store.pref('backupNag') || 0;
  const now = Date.now();
  if (risk < 8) return;
  if (now - last < 14 * 864e5) return;
  if (now - nag < 3 * 864e5) return;
  store.pref('backupNag', now);
  setTimeout(() => toast({
    id: 'backup', icon: '↓', timeout: 0,
    msg: `${risk} pieces of work are saved only on this device.`,
    action: 'Back up', secondary: 'Not now',
    onAction: () => { backupNow(); toast({ msg: 'Backup downloaded. Keep it somewhere else.', icon: '✓', timeout: 3000 }); }
  }), 4000);
}

window.addEventListener('hashchange', route);
window.addEventListener('beforeunload', () => store.flushNow());
buildNav();
route();
initPWA();
maybeNagBackup();
