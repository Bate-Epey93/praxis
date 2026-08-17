// Artefact builder — the workspace where the portfolio piece is actually written,
// and the export that turns it into something you can send to a hiring manager.
import { TRACKS, trackById } from '../data/index.js';
import { store, countWords } from './store.js';
import { esc, md } from './render.js';
import { brushRule, brushCheck } from '../data/brush.js';
import { toast } from './toast.js';

const stamp = () => new Date().toISOString().slice(0, 10);

/* ─────────── one artefact ─────────── */
export function builderView(el, id) {
  const t = trackById(id);
  if (!t) { location.hash = '#/portfolio'; return; }
  const steps = t.artifact.steps;

  const written = () => steps.filter((_, i) => store.hasWork(t.id, i)).length;
  const words = () => store.workWords(t.id);

  el.innerHTML = `<div class="wrap">
    <div class="row" style="margin-bottom:6px">
      <a class="tag" href="#/t/${t.id}/a">← Track ${String(t.n).padStart(2, '0')}</a>
      <span class="tag" style="color:var(${t.color});border-color:var(${t.color})">Artefact workspace</span>
    </div>
    <h1 class="h-xl">${esc(t.artifact.title)}</h1>
    <div style="color:var(${t.color})">${brushRule(t.n % 3)}</div>
    ${t.artifact.intro ? `<p class="lede">${md(t.artifact.intro)}</p>` : ''}

    <div class="card card-2 build-status">
      <div class="between">
        <span class="eyebrow" style="margin:0">Progress</span>
        <span class="mono" data-status>${written()}/${steps.length} sections · ${words()} words</span>
      </div>
      <div class="bar" style="margin-top:8px"><i data-bar style="width:${(written() / steps.length) * 100}%"></i></div>
      <p class="dim" style="font-size:12.4px;margin:9px 0 0">
        Write the real thing here, not a plan to write it. Everything saves to this device as you type.
        Export when you are ready to send it or paste it into a portfolio.
      </p>
    </div>

    ${steps.map((s, i) => {
      const val = store.work(t.id, i);
      return `<div class="build-step" data-i="${i}">
        <div class="between build-head">
          <div class="build-title">
            <span class="build-n">${String(i + 1).padStart(2, '0')}</span>
            <strong>${md(s.s)}</strong>
          </div>
          <span class="mono dim build-wc" data-wc="${i}">${countWords(val)}w</span>
        </div>
        ${s.guide ? `<details class="disc build-guide"><summary>How to do this well</summary>
          <div class="body">${md(s.guide)}</div></details>` : ''}
        <textarea class="note build-area" data-w="${i}" rows="7"
          placeholder="Write this section of the artefact…">${esc(val)}</textarea>
      </div>`;
    }).join('')}

    <div class="card" style="margin-top:18px">
      <div class="eyebrow">Export</div>
      <p class="dim" style="font-size:12.6px;margin:0 0 10px">
        Markdown pastes into Notion, Docs or a repo. The document view opens a clean, printable page:
        use your browser's print dialogue to save it as a PDF.
      </p>
      <div class="row" style="gap:8px">
        <button class="btn" data-x="doc">Open as document</button>
        <button class="btn sec" data-x="md">Download .md</button>
        <button class="btn sec" data-x="copy">Copy Markdown</button>
      </div>
    </div>

    <div class="pager">
      <a class="btn sec" href="#/t/${t.id}/a">← Artefact brief</a>
      <a class="btn sec" href="#/portfolio">All artefacts →</a>
    </div>
  </div>`;

  const status = el.querySelector('[data-status]');
  const bar = el.querySelector('[data-bar]');

  el.querySelectorAll('[data-w]').forEach(area => {
    autoGrow(area);
    area.oninput = () => {
      const i = +area.dataset.w;
      store.work(t.id, i, area.value);
      // Writing a section is what marks it done. Deleting it un-marks it.
      const has = !!area.value.trim();
      if (has !== store.isStep(t.id, i)) store.toggleStep(t.id, i);
      el.querySelector(`[data-wc="${i}"]`).textContent = countWords(area.value) + 'w';
      status.textContent = `${written()}/${steps.length} sections · ${words()} words`;
      bar.style.width = (written() / steps.length) * 100 + '%';
      autoGrow(area);
    };
  });

  el.querySelector('[data-x="doc"]').onclick = () => openDoc(docHTML([t]));
  el.querySelector('[data-x="md"]').onclick = () => {
    download(`${slug(t.artifact.title)}.md`, artefactMD(t), 'text/markdown');
    toast({ msg: 'Markdown downloaded.', icon: '↓', timeout: 2200 });
  };
  el.querySelector('[data-x="copy"]').onclick = async () => {
    try {
      await navigator.clipboard.writeText(artefactMD(t));
      toast({ msg: 'Markdown copied.', icon: '❐', timeout: 2000 });
    } catch { toast({ msg: 'Clipboard blocked. Use Download .md instead.', timeout: 3400 }); }
  };
}

function autoGrow(a) {
  a.style.height = 'auto';
  a.style.height = Math.min(700, Math.max(120, a.scrollHeight + 4)) + 'px';
}

/* ─────────── portfolio index ─────────── */
export function portfolioView(el) {
  const rows = TRACKS.map(t => {
    const total = t.artifact.steps.length;
    const done = t.artifact.steps.filter((_, i) => store.hasWork(t.id, i)).length;
    return { t, total, done, words: store.workWords(t.id) };
  });
  const started = rows.filter(r => r.done > 0);
  const complete = rows.filter(r => r.done === r.total);
  const totalWords = rows.reduce((a, r) => a + r.words, 0);

  el.innerHTML = `<div class="wrap">
    <div class="eyebrow">Workbench</div>
    <h1 class="h-xl">Portfolio</h1>
    <div style="color:var(--am)">${brushRule(1)}</div>
    <p class="lede">${TRACKS.length} artefacts. ${complete.length} finished, ${started.length - complete.length} in progress,
      ${totalWords.toLocaleString()} words written. Hiring managers buy decisions, so each of these should show the
      reasoning, not only the output.</p>

    ${started.length ? `<div class="card">
      <div class="eyebrow">Export everything</div>
      <div class="row" style="gap:8px;margin-top:4px">
        <button class="btn" data-x="alldoc">Open portfolio document</button>
        <button class="btn sec" data-x="allmd">Download portfolio .md</button>
      </div>
    </div>` : ''}

    ${rows.map(r => `<a class="card build-row" href="#/build/${r.t.id}">
      <span class="mono dim">${String(r.t.n).padStart(2, '0')}</span>
      <span style="min-width:0">
        <span style="font-weight:600;display:block">${esc(r.t.artifact.title)}</span>
        <span class="dim" style="font-size:12.2px">${esc(r.t.title)}</span>
      </span>
      <span style="text-align:right">
        <span class="ring ${r.done === r.total ? 'full' : r.done ? 'on' : ''}">${r.done === r.total ? brushCheck() : r.done + '/' + r.total}</span>
        ${r.words ? `<span class="mono dim" style="display:block;font-size:9.5px;margin-top:3px">${r.words}w</span>` : ''}
      </span>
    </a>`).join('')}
  </div>`;

  const all = () => TRACKS.filter(t => t.artifact.steps.some((_, i) => store.hasWork(t.id, i)));
  el.querySelector('[data-x="alldoc"]')?.addEventListener('click', () => openDoc(docHTML(all())));
  el.querySelector('[data-x="allmd"]')?.addEventListener('click', () => {
    download(`praxis-portfolio-${stamp()}.md`, all().map(artefactMD).join('\n\n---\n\n'), 'text/markdown');
    toast({ msg: 'Portfolio downloaded.', icon: '↓', timeout: 2200 });
  });
}

/* ─────────── export builders ─────────── */
function artefactMD(t) {
  const lines = [`# ${t.artifact.title}`, '', `*${t.title} · built with Praxis · ${stamp()}*`, ''];
  t.artifact.steps.forEach((s, i) => {
    const body = store.work(t.id, i);
    if (!body.trim()) return;
    lines.push(`## ${stripMd(s.s)}`, '', body.trim(), '');
  });
  const notes = store.note('art-' + t.id);
  if (notes.trim()) lines.push('---', '', '### Working notes', '', notes.trim(), '');
  return lines.join('\n');
}

function docHTML(tracks) {
  const body = tracks.map(t => {
    const secs = t.artifact.steps.map((s, i) => {
      const v = store.work(t.id, i);
      return v.trim() ? `<h2>${esc(stripMd(s.s))}</h2>${paras(v)}` : '';
    }).join('');
    if (!secs) return '';
    return `<section><p class="kicker">${esc(t.title)}</p><h1>${esc(t.artifact.title)}</h1>${secs}</section>`;
  }).join('');

  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${tracks.length === 1 ? esc(tracks[0].artifact.title) : 'Portfolio'}</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{color-scheme:light}
  *{box-sizing:border-box}
  body{margin:0;background:#f6f4ef;color:#16161f;
    font:16px/1.65 ui-serif,Georgia,"Iowan Old Style",serif;padding:44px 20px 80px}
  .sheet{max-width:720px;margin:0 auto;background:#fff;padding:52px 56px;
    box-shadow:0 2px 24px rgba(20,18,14,.09);border-radius:4px}
  section+section{margin-top:56px;padding-top:44px;border-top:1px solid #e4e0d6}
  .kicker{font:600 10.5px/1 ui-sans-serif,system-ui,sans-serif;letter-spacing:.18em;
    text-transform:uppercase;color:#9a9484;margin:0 0 10px}
  h1{font-size:30px;line-height:1.18;margin:0 0 22px;letter-spacing:-.015em}
  h2{font-size:18px;margin:32px 0 10px;letter-spacing:-.005em}
  p{margin:0 0 13px}
  .meta{font:11px/1.5 ui-sans-serif,system-ui,sans-serif;color:#9a9484;
    margin-top:52px;padding-top:16px;border-top:1px solid #e4e0d6}
  @media print{
    body{background:#fff;padding:0}
    .sheet{box-shadow:none;padding:0;max-width:none}
    section{break-inside:avoid-page}
    section+section{break-before:page;border-top:0;padding-top:0}
  }
  @media (max-width:640px){ body{padding:16px 12px 60px} .sheet{padding:26px 20px} h1{font-size:24px} }
</style></head><body><div class="sheet">${body || '<p>Nothing written yet.</p>'}
<p class="meta">Prepared ${stamp()} · drafted in Praxis</p></div></body></html>`;
}

function openDoc(html) {
  const url = URL.createObjectURL(new Blob([html], { type: 'text/html' }));
  const w = window.open(url, '_blank');
  if (!w) {
    // Popup blocked (common on iOS): fall back to a download.
    download(`praxis-${stamp()}.html`, html, 'text/html');
    toast({ msg: 'Popup blocked, so the document downloaded instead.', timeout: 3800 });
  }
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

const stripMd = s => String(s).replace(/\*\*/g, '');
const paras = v => v.trim().split(/\n{2,}/).map(p => `<p>${esc(p).replace(/\n/g, '<br>')}</p>`).join('');
const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

export function download(name, text, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement('a');
  a.href = url; a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
