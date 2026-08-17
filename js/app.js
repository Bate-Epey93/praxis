import { TRACKS, PHASES, ROLES, QUIZ, GLOSSARY, FRAMEWORKS, TEMPLATES, INTERVIEW, trackById } from '../data/index.js';
import { store } from './store.js';
import { renderBlocks, blocksText, esc, md } from './render.js';
import { quizView, examView, cardsView } from './quiz.js';
import { calcView, frameworksView, promptsView, templatesView, interviewView, glossaryView, progressView } from './tools.js';
import { trackPct, overallPct } from './progress.js';
import { ensoMark, brushRule, brushDot, brushCheck, brushFlourish } from '../data/brush.js';
import { initPWA } from './pwa.js';

const main = document.getElementById('main');
const nav = document.getElementById('sidenavInner');
document.getElementById('brandMark').innerHTML = ensoMark();

/* ─────────── sidebar ─────────── */
const TOOLS = [
  ['#/', '◆', 'Dashboard'],
  ['#/frameworks', '⬡', 'Framework index'],
  ['#/templates', '❐', 'Swipe & templates'],
  ['#/prompts', '⚙', 'Prompt library'],
  ['#/calc', '∑', 'Calculators'],
  ['#/cards', '⚑', 'Flashcards'],
  ['#/exam', '★', 'Mixed exam'],
  ['#/interview', '☰', 'Interview bank'],
  ['#/glossary', 'A', 'Glossary'],
  ['#/progress', '◑', 'Progress & notes']
];

function buildNav() {
  const hash = location.hash || '#/';
  let html = `<div class="nav-group"><div class="nav-label">Workbench</div>` +
    TOOLS.map(([h, ic, label]) =>
      `<a class="nav-item" href="${h}"${hash === h ? ' aria-current="page"' : ''}><span class="n">${ic}</span>${label}</a>`
    ).join('') + `</div>`;

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
    <p class="lede">17 tracks · ${TRACKS.reduce((a, t) => a + t.sections.length, 0)} sections · ${QUIZ.length} exam questions ·
      ${FRAMEWORKS.length} frameworks · ${GLOSSARY.length} glossary terms · ${TRACKS.length} portfolio artefacts.
      Everything is stored on this device.</p>

    <div class="card">
      <div class="between" style="margin-bottom:7px">
        <span class="eyebrow" style="margin:0">Overall progress</span>
        <span style="font-family:var(--mono);font-size:19px;font-weight:700;color:var(--am)">${pct}%</span>
      </div>
      <div class="bar"><i style="width:${pct}%"></i></div>
      <div class="row dim" style="margin-top:9px;font-size:11.5px;font-family:var(--mono)">
        <span>${streak.count || 0}-day streak</span><span>·</span>
        <span>${notes} note${notes === 1 ? '' : 's'}</span><span>·</span>
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
        <li><span class="num">1</span><div><span class="nm">Study the sections.</span> Mark each done — that drives your progress and the streak.</div></li>
        <li><span class="num">2</span><div><span class="nm">Run the drills.</span> Five minutes each. They build recall faster than re-reading.</div></li>
        <li><span class="num">3</span><div><span class="nm">Build the artefact.</span> One per track, 17 portfolio pieces. This is what gets you hired.</div></li>
        <li><span class="num">4</span><div><span class="nm">Quiz, then flashcards.</span> Quiz checks understanding; the cards keep it.</div></li>
        <li><span class="num">5</span><div><span class="nm">Rehearse out loud</span> from the interview bank before any assessment.</div></li>
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
  });
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
function markTabbar() {
  const h = location.hash || '#/';
  tabbar.querySelectorAll('a').forEach(a => {
    const target = a.getAttribute('href');
    const on = target === '#/'
      ? (h === '#/' || h.startsWith('#/t/') || h.startsWith('#/quiz/'))
      : h === target || (target === '#/frameworks' && ['#/templates', '#/prompts', '#/glossary', '#/interview', '#/progress'].includes(h));
    if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
}

/* ─────────── router ─────────── */
export function go(hash) { if (location.hash === hash) route(); else location.hash = hash; }

function route() {
  const [, seg, a, b] = (location.hash || '#/').split('/');
  setNav(false);
  window.scrollTo(0, 0);

  switch (seg) {
    case '': case undefined: dashboard(); break;
    case 't': trackView(a, b); break;
    case 'quiz': quizView(main, a); break;
    case 'exam': examView(main); break;
    case 'cards': cardsView(main); break;
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

window.addEventListener('hashchange', route);
buildNav();
route();
initPWA();
