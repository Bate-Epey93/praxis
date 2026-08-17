// Job description mapper — paste an advert, see which competencies it demands,
// where the curriculum covers them, what evidence proves them, and where you are thin.
import { COMPETENCIES } from '../data/taxonomy.js';
import { TRACKS, trackById } from '../data/index.js';
import { PATHS } from '../data/paths.js';
import { store } from './store.js';
import { esc, md } from './render.js';
import { brushRule } from '../data/brush.js';
import { toast } from './toast.js';
import { download } from './build.js';

const NOTE = 'jd-last';

export function jdView(el) {
  let text = store.note(NOTE);

  function analyse(src) {
    const hay = ' ' + src.toLowerCase().replace(/[^a-z0-9+/&.\- ]/g, ' ').replace(/\s+/g, ' ') + ' ';
    const hits = COMPETENCIES.map(c => {
      const found = c.terms.filter(term => hay.includes(' ' + term.toLowerCase()) || hay.includes(term.toLowerCase() + ' '));
      return { c, found, n: found.length };
    }).filter(h => h.n > 0).sort((a, b) => b.n - a.n);

    // coverage per competency, from what the user has actually done
    hits.forEach(h => {
      const tracks = h.c.trackRefs.map(trackById).filter(Boolean);
      const secs = tracks.flatMap(t => t.sections);
      const read = secs.filter(s => store.isDone(s.id)).length;
      const built = tracks.filter(t => t.artifact.steps.some((_, i) => store.hasWork(t.id, i))).length;
      h.tracks = tracks;
      h.coverage = secs.length ? Math.round((read / secs.length) * 100) : 0;
      h.evidence = built > 0;
    });

    // which role path fits best, by overlap of demanded tracks
    const demanded = new Set(hits.flatMap(h => h.c.trackRefs));
    const fit = PATHS.map(p => ({
      p, score: [...demanded].filter(id => p.core.includes(id)).length * 2
        + [...demanded].filter(id => p.supporting.includes(id)).length
    })).sort((a, b) => b.score - a.score);

    return { hits, fit: fit.slice(0, 2), words: src.trim().split(/\s+/).filter(Boolean).length };
  }

  function draw(result) {
    el.innerHTML = `<div class="wrap">
      <div class="eyebrow">Workbench</div>
      <h1 class="h-xl">Job description mapper</h1>
      <div style="color:var(--am)">${brushRule(2)}</div>
      <p class="lede">Paste the advert. This matches its language against ${COMPETENCIES.length} competencies, shows
        where each is covered here, what evidence proves it to a hiring manager, and which of your gaps matter most.
        Nothing is uploaded.</p>

      <textarea class="note jd-area" data-jd rows="8"
        placeholder="Paste the full job description, including the responsibilities and requirements sections…">${esc(text)}</textarea>
      <div class="row" style="gap:8px;margin:8px 0 4px">
        <button class="btn" data-run>Analyse</button>
        ${result ? `<button class="btn sec" data-export>Download the map</button>` : ''}
        <button class="btn sec" data-clear>Clear</button>
      </div>

      ${result ? renderResult(result) : `<div class="card card-2" style="margin-top:14px">
        <div class="eyebrow">Why bother</div>
        <p class="dim" style="font-size:13px;margin:0">Most applications are rejected for a mismatch the candidate
          could have seen in five minutes. This tells you which requirements you can already evidence with an
          artefact, which you can revise in an evening, and which are a genuine gap worth naming honestly in the
          cover note.</p></div>`}
    </div>`;

    const area = el.querySelector('[data-jd]');
    area.oninput = () => { text = area.value; store.note(NOTE, text); };
    el.querySelector('[data-run]').onclick = () => {
      if (!text.trim() || text.trim().split(/\s+/).length < 25) {
        toast({ msg: 'Paste more of the advert — at least the requirements section.', timeout: 3400 });
        return;
      }
      draw(analyse(text));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    el.querySelector('[data-clear]').onclick = () => { text = ''; store.note(NOTE, ''); draw(null); };
    el.querySelector('[data-export]')?.addEventListener('click', () => {
      download(`jd-map-${new Date().toISOString().slice(0, 10)}.md`, exportMD(result), 'text/markdown');
    });
  }

  function renderResult(r) {
    if (!r.hits.length) {
      return `<div class="empty">No competencies matched. Either the advert is unusually vague, which is itself
        worth noting, or it is for a role outside what this curriculum covers.</div>`;
    }
    const strong = r.hits.filter(h => h.coverage >= 60);
    const partial = r.hits.filter(h => h.coverage >= 20 && h.coverage < 60);
    const gaps = r.hits.filter(h => h.coverage < 20);

    const group = (title, list, tone) => list.length ? `
      <div style="margin-top:20px">
        <div class="eyebrow" style="color:var(${tone})">${esc(title)} · ${list.length}</div>
        ${list.map(h => `<div class="card">
          <div class="between" style="align-items:flex-start">
            <div style="min-width:0">
              <strong style="font-size:14.4px">${esc(h.c.label)}</strong>
              <div class="dim" style="font-size:11.8px;margin-top:2px">matched: ${h.found.slice(0, 5).map(esc).join(', ')}${h.found.length > 5 ? '…' : ''}</div>
            </div>
            <span class="ring ${h.coverage >= 60 ? 'full' : h.coverage >= 20 ? 'on' : ''}">${h.coverage}%</span>
          </div>
          <div class="dim" style="font-size:12.8px;margin:8px 0 8px"><strong>Proof:</strong> ${md(h.c.proofHint)}</div>
          <div class="row" style="gap:5px;flex-wrap:wrap">
            ${h.tracks.map(t => `<a class="chip" href="#/t/${t.id}/0">${esc(t.title)}</a>`).join('')}
            ${h.evidence ? `<span class="chip" style="color:var(--gr);border-color:var(--gr)">artefact started</span>` : ''}
          </div>
        </div>`).join('')}
      </div>` : '';

    return `
      <div class="card" style="margin-top:14px">
        <div class="eyebrow">Read on ${r.words} words</div>
        <div class="out-row"><span class="k">Competencies demanded</span><span class="v">${r.hits.length}</span></div>
        <div class="out-row"><span class="k">You can evidence now</span><span class="v" style="color:var(--gr)">${strong.length}</span></div>
        <div class="out-row"><span class="k">Thin</span><span class="v" style="color:var(--am)">${partial.length}</span></div>
        <div class="out-row"><span class="k">Genuine gaps</span><span class="v" style="color:var(--rs)">${gaps.length}</span></div>
        <div class="out-row"><span class="k">Closest role path</span><span class="v">${esc(r.fit[0]?.p.label || '—')}</span></div>
      </div>

      <div class="card card-2">
        <div class="eyebrow">What to do with this</div>
        <ol class="b-steps" style="margin-bottom:0">
          <li><span class="num">1</span><div>Lead the application with the ${strong.length ? 'green' : 'strongest'} competencies, each attached to a named artefact.</div></li>
          <li><span class="num">2</span><div>Spend the evening before the interview on the amber list. Thin is recoverable.</div></li>
          <li><span class="num">3</span><div>Name one red gap honestly in the conversation and say how you would close it. Pretending is what loses offers at reference stage.</div></li>
          ${r.fit[0] ? `<li><span class="num">4</span><div>Run the <a href="#/paths">${esc(r.fit[0].p.label)}</a> path if you have a week.</div></li>` : ''}
        </ol>
      </div>

      ${group('Can evidence now', strong, '--gr')}
      ${group('Thin — revise before the interview', partial, '--am')}
      ${group('Gaps — study or address honestly', gaps, '--rs')}`;
  }

  function exportMD(r) {
    const line = h => `- **${h.c.label}** (${h.coverage}% covered) — matched: ${h.found.join(', ')}. Proof: ${h.c.proofHint}`;
    return [
      `# Job description map`, '', `*${new Date().toISOString().slice(0, 10)} · ${r.hits.length} competencies demanded*`, '',
      `## Can evidence now`, ...r.hits.filter(h => h.coverage >= 60).map(line), '',
      `## Thin`, ...r.hits.filter(h => h.coverage >= 20 && h.coverage < 60).map(line), '',
      `## Gaps`, ...r.hits.filter(h => h.coverage < 20).map(line), '',
      `## Closest path`, r.fit[0]?.p.label || '—', ''
    ].join('\n');
  }

  draw(text.trim() ? analyse(text) : null);
}
