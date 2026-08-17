import { QUIZ, GLOSSARY, TRACKS, trackById } from '../data/index.js';
import { store } from './store.js';
import { esc, md } from './render.js';
import { brushRule } from '../data/brush.js';

/* ───────────── quiz engine ───────────── */
function runQuiz(el, questions, meta) {
  let i = 0, score = 0, answered = false, picked = -1;
  const total = questions.length;

  function draw() {
    const q = questions[i];
    el.innerHTML = `<div class="wrap">
      <div class="between">
        <div>
          <div class="eyebrow">${esc(meta.eyebrow)}</div>
          <h1 class="h-lg">${esc(meta.title)}</h1>
        </div>
        <span style="font-family:var(--mono);font-size:12px;color:var(--tx-2)">${i + 1}/${total} · ${score} right</span>
      </div>
      <div class="bar" style="margin:12px 0 18px"><i style="width:${(i / total) * 100}%"></i></div>

      <div class="card">
        <div style="font-weight:600;font-size:15.5px;margin-bottom:14px">${md(q.q)}</div>
        ${q.o.map((o, k) => `<button class="opt" data-o="${k}">${md(o)}</button>`).join('')}
        <div data-explain hidden></div>
      </div>

      <div class="pager" style="justify-content:space-between">
        <a class="btn sec" href="${meta.back}">← ${esc(meta.backLabel)}</a>
        <button class="btn" data-next hidden>${i === total - 1 ? 'See result' : 'Next question →'}</button>
      </div>
    </div>`;

    el.querySelectorAll('[data-o]').forEach(b => b.onclick = () => {
      if (answered) return;
      answered = true; picked = +b.dataset.o;
      if (picked === q.a) score++;
      else if (q.t != null) {
        // Log the miss so it resurfaces in the weak-spot review.
        const idx = QUIZ.filter(x => x.t === q.t).indexOf(q);
        if (idx >= 0) store.missQuestion(`${q.t}:${idx}`);
      }
      el.querySelectorAll('[data-o]').forEach(x => {
        const k = +x.dataset.o;
        if (k === q.a) x.classList.add('right');
        else if (k === picked) x.classList.add('wrong');
      });
      const ex = el.querySelector('[data-explain]');
      ex.hidden = false;
      ex.className = 'explain';
      ex.innerHTML = `<strong style="color:var(${picked === q.a ? '--gr' : '--rs'})">${picked === q.a ? 'Correct.' : 'Not quite.'}</strong> ${md(q.e)}
        ${q.t ? `<div style="margin-top:7px"><a href="#/t/${q.t}/0">Review track ${trackById(q.t)?.n}: ${esc(trackById(q.t)?.title || '')}</a></div>` : ''}`;
      el.querySelector('[data-next]').hidden = false;
    });

    el.querySelector('[data-next]').onclick = () => {
      if (i === total - 1) return result();
      i++; answered = false; picked = -1; draw();
      window.scrollTo(0, 0);
    };
  }

  function result() {
    const pct = Math.round((score / total) * 100);
    if (meta.trackId) store.quiz(meta.trackId, score, total);
    const verdict = pct >= 85 ? ['Senior-level recall.', '--gr']
      : pct >= 65 ? ['Solid. Re-read the misses and retake in two days.', '--am']
      : ['Study the track again before the artefact — the gaps are structural, not detail.', '--rs'];
    el.innerHTML = `<div class="wrap">
      <div class="eyebrow">${esc(meta.eyebrow)}</div>
      <h1 class="h-xl">${score} / ${total}</h1>
      ${brushRule(1)}
      <p class="lede" style="color:var(${verdict[1]})">${esc(verdict[0])}</p>
      <div class="card">
        <div class="out-row"><span class="k">Score</span><span class="v">${pct}%</span></div>
        ${meta.trackId ? `<div class="out-row"><span class="k">Best for this track</span><span class="v">${store.quizOf(meta.trackId).best}/${total}</span></div>` : ''}
        <div class="out-row"><span class="k">Attempts</span><span class="v">${meta.trackId ? store.quizOf(meta.trackId).taken : '—'}</span></div>
      </div>
      <div class="pager">
        <a class="btn sec" href="${meta.back}">← ${esc(meta.backLabel)}</a>
        <button class="btn" data-retake>Retake</button>
      </div>
      <div style="margin-top:18px"><a href="#/cards">Drill the terms with flashcards →</a></div>
    </div>`;
    el.querySelector('[data-retake]').onclick = () => { i = 0; score = 0; answered = false; draw(); };
  }

  draw();
}

export function quizView(el, id) {
  const t = trackById(id);
  const qs = QUIZ.filter(q => q.t === Number(id));
  if (!t || !qs.length) {
    el.innerHTML = `<div class="wrap"><div class="empty">No questions for this track yet. <a href="#/exam">Try the mixed exam →</a></div></div>`;
    return;
  }
  runQuiz(el, qs, {
    eyebrow: `Track ${String(t.n).padStart(2, '0')} quiz`,
    title: t.title, trackId: t.id,
    back: `#/t/${t.id}/0`, backLabel: 'Back to track'
  });
}

export function examView(el) {
  const pool = [...QUIZ].sort(() => Math.random() - 0.5).slice(0, 25);
  runQuiz(el, pool, {
    eyebrow: 'Mixed exam · 25 random questions',
    title: 'Interview-condition exam',
    back: '#/', backLabel: 'Dashboard'
  });
}

/* ───────────── flashcards (Leitner boxes) ───────────── */
export function cardsView(el) {
  const cards = GLOSSARY.map(g => ({ id: 'g:' + g.k, q: g.k, a: g.d, t: g.s }));
  const now = Date.now();
  const due = cards.filter(c => store.card(c.id).due <= now);
  const deck = (due.length ? due : cards).sort(() => Math.random() - 0.5);
  let i = 0, flipped = false, session = { ok: 0, no: 0 };

  const boxCount = b => cards.filter(c => store.card(c.id).box === b).length;

  function draw() {
    if (i >= deck.length) return done();
    const c = deck[i];
    const box = store.card(c.id).box;
    el.innerHTML = `<div class="wrap">
      <div class="between">
        <div><div class="eyebrow">Flashcards · spaced repetition</div>
        <h1 class="h-lg">${due.length ? due.length + ' cards due' : 'All caught up — free review'}</h1></div>
        <span style="font-family:var(--mono);font-size:12px;color:var(--tx-2)">${i + 1}/${deck.length}</span>
      </div>
      <div class="row dim" style="font-family:var(--mono);font-size:10.5px;margin:8px 0 14px">
        ${[1, 2, 3, 4, 5].map(b => `<span>box ${b}: ${boxCount(b)}</span>`).join('<span>·</span>')}
      </div>

      <div class="fc" data-flip>
        <div>
          <div class="q">${esc(c.q)}</div>
          ${flipped ? `<div class="a">${md(c.a)}</div>
            <div class="dim" style="font-size:11.5px;margin-top:12px;font-family:var(--mono)">box ${box} · track ${trackById(c.t)?.n ?? '—'}</div>`
            : `<div class="dim" style="font-size:12px;margin-top:14px">Tap to reveal</div>`}
        </div>
      </div>

      ${flipped ? `<div class="row" style="margin-top:12px;gap:8px">
        <button class="btn sec" data-grade="0" style="flex:1;color:var(--rs)">Missed it</button>
        <button class="btn" data-grade="1" style="flex:1">Knew it</button>
      </div>` : ''}

      <div class="pager"><a class="btn sec" href="#/">← Dashboard</a>
        <span class="dim" style="font-family:var(--mono);font-size:11px;align-self:center">${session.ok} known · ${session.no} missed</span></div>
    </div>`;

    el.querySelector('[data-flip]').onclick = () => { flipped = !flipped; draw(); };
    el.querySelectorAll('[data-grade]').forEach(b => b.onclick = e => {
      e.stopPropagation();
      const ok = b.dataset.grade === '1';
      store.gradeCard(c.id, ok);
      ok ? session.ok++ : session.no++;
      i++; flipped = false; draw();
    });
  }

  function done() {
    el.innerHTML = `<div class="wrap">
      <div class="eyebrow">Session complete</div>
      <h1 class="h-xl">${session.ok} known · ${session.no} missed</h1>
      ${brushRule(1)}
      <p class="lede">Missed cards return tomorrow. Known cards move up a box and come back in 2, 4, 8 or 16 days.</p>
      <div class="pager"><a class="btn sec" href="#/">← Dashboard</a><a class="btn" href="#/exam">Mixed exam →</a></div>
    </div>`;
  }

  draw();
}
