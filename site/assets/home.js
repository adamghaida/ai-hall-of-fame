(async function () {
  const [tl, db] = await Promise.all([
    fetch('data/timeline.json').then(r => r.json()),
    fetch('data/entries.json').then(r => r.json())
  ]);
  const entries = Object.fromEntries(db.entries.map(e => [e.id, e]));
  const items = tl.items.slice().sort((a, b) => a.date.localeCompare(b.date)).map((it, i) => ({ ...it, i, e: it.entry ? entries[it.entry] : null }));
  const MONTH = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const year = d => +d.slice(0, 4);
  const when = it => { const [y, m, d] = it.date.split('-').map(Number); return `${MONTH[m - 1]}${it.date.endsWith('-01') || it.approx ? '' : ' ' + d} ${y}`; };
  const KIND = { achievement: 'Documented case', launch: 'Model release', prize: 'Prize', origin: 'Origin' };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobile = () => matchMedia('(max-width: 720px)').matches;

  // ---------------- filters
  const params = new URLSearchParams(location.search);
  const f = { kind: params.get('type') || '', field: params.get('field') || '', q: params.get('q') || '' };
  const fields = [...new Set(items.filter(it => it.e).map(it => it.e.field))].map(s => db.fields.find(x => x.slug === s)).filter(Boolean).sort((a, b) => a.name.localeCompare(b.name));
  $('field').innerHTML += fields.map(x => `<option value="${x.slug}">${esc(x.name)}</option>`).join('');
  $('field').value = f.field; $('q').value = f.q;
  [...$('chips').children].forEach(c => c.setAttribute('aria-pressed', c.dataset.k === f.kind));
  const matches = it => {
    if (f.kind && it.kind !== f.kind) return false;
    if (f.field && (!it.e || it.e.field !== f.field)) return false;
    const n = f.q.trim().toLowerCase();
    return !n || (it.title + ' ' + (it.blurb || '') + ' ' + (it.e ? it.e.fieldName : '')).toLowerCase().includes(n);
  };
  const syncUrl = () => { const u = new URL(location); for (const [k, v] of [['type', f.kind], ['field', f.field], ['q', f.q.trim()]]) v ? u.searchParams.set(k, v) : u.searchParams.delete(k); history.replaceState(null, '', u); };

  // ---------------- axis (to scale)
  const axis = $('axis');
  const t0 = Date.UTC(1950, 0, 1), t1 = Date.UTC(2026, 11, 31);
  let ax = { x: () => 0 };
  function drawAxis() {
    const W = Math.max(320, axis.clientWidth || 1000), H = 112, L = 6, R = W - 6, AX = 84;
    axis.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const x = d => L + (Date.parse(d + 'T00:00:00Z') - t0) / (t1 - t0) * (R - L);
    ax.x = x;
    let s = `<line class="ax" x1="${L}" y1="${AX}" x2="${R}" y2="${AX}"/>`;
    const step = W < 640 ? 20 : 10;
    for (let y = 1950; y <= 2020; y += step) { const xx = x(`${y}-01-01`); s += `<line class="tk" x1="${xx}" y1="${AX}" x2="${xx}" y2="${AX + 5}"/><text class="yr" x="${xx}" y="${AX + 19}" text-anchor="${y === 1950 ? 'start' : 'middle'}">${y}</text>`; }
    const xNow = x('2026-09-11');
    s += `<line class="tk" x1="${xNow}" y1="${AX}" x2="${xNow}" y2="${AX + 5}"/><text class="yr" x="${xNow}" y="${AX + 19}" text-anchor="end">today</text>`;
    const placed = [], SZ = 8, GAP = 2.5;
    items.forEach(it => {
      const cx = x(it.date); let lv = 0;
      while (placed.some(p => p.level === lv && Math.abs(p.cx - cx) < SZ + GAP)) lv++;
      placed.push({ cx, level: lv });
      const cy = AX - 7 - lv * (SZ + GAP);
      it.ax = cx;
      let sh;
      if (it.kind === 'achievement') sh = `<rect x="${cx - SZ / 2}" y="${cy - SZ / 2}" width="${SZ}" height="${SZ}"/>`;
      else if (it.kind === 'launch') sh = `<circle cx="${cx}" cy="${cy}" r="${SZ / 2 - .4}"/>`;
      else if (it.kind === 'prize') sh = `<path d="M${cx} ${cy - SZ / 2 - 1} L${cx + SZ / 2 + 1} ${cy} L${cx} ${cy + SZ / 2 + 1} L${cx - SZ / 2 - 1} ${cy} Z"/>`;
      else sh = `<circle cx="${cx}" cy="${cy}" r="2.6"/>`;
      s += `<g class="m ${it.kind}" data-i="${it.i}" style="animation-delay:${it.i * 28}ms" tabindex="0" role="button"><title>${esc(when(it))}: ${esc(it.title)}</title>${sh}</g>`;
    });
    const since = '2025-01-01', recent = items.filter(it => it.date >= since).length, xs = x(since);
    s += `<path class="brace" d="M${xs} ${AX + 28} v5 H${xNow} v-5"/>`;
    s += `<text class="callout" x="${xNow}" y="${AX + 49}" text-anchor="end"><tspan class="n">${recent} of ${items.length}</tspan>${W < 700 ? ' since Jan 2025' : ' moments are from January 2025 or later'}</text>`;
    s += `<g class="head" id="head"><line x1="0" y1="${AX - 62}" x2="0" y2="${AX + 8}"/><text x="0" y="${AX - 68}" text-anchor="middle" id="headlbl"></text></g>`;
    axis.innerHTML = s;
    axis.querySelectorAll('.m').forEach(m => {
      m.addEventListener('click', () => { stopPlay(); goTo(+m.dataset.i, true); });
      m.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); stopPlay(); goTo(+m.dataset.i, true); } });
    });
  }
  drawAxis();

  // ---------------- track
  const wrap = $('wrap'), track = $('track');
  let visible = [], active = -1, cards = {};
  function render() {
    visible = items.filter(matches);
    cards = {};
    let html = '', prev = null;
    for (const it of visible) {
      if (prev) {
        const gy = year(it.date) - year(prev.date);
        if (gy >= 1) html += `<div class="gap${gy >= 10 ? ' big' : ''}" aria-hidden="true"><span>+${gy} yr${gy > 1 ? 's' : ''}</span></div>`;
      }
      const foot = it.e ? `<span class="fld">${esc(it.e.fieldName)}</span><span class="go">Read the entry →</span>`
        : it.source ? `<span class="fld">${esc(it.source_label || 'source')}</span><span class="go">Details →</span>` : '';
      html += `<article class="card ${it.kind}" data-i="${it.i}" id="m-${it.i}">
        <div class="kind"><b><i></i>${KIND[it.kind]}</b><span>${it.i + 1} of ${items.length}</span></div>
        <div class="date">${esc(when(it))}</div>
        <h3>${esc(it.title)}</h3>
        <p>${esc(it.blurb || (it.e ? it.e.hook : ''))}</p>
        <div class="foot">${foot}</div>
        <button class="open" aria-label="Open ${esc(it.title)}"></button>
      </article>`;
      prev = it;
    }
    track.innerHTML = html;
    track.querySelectorAll('.card').forEach(c => { cards[+c.dataset.i] = c; c.querySelector('.open').addEventListener('click', () => { stopPlay(); if (+c.dataset.i !== active) goTo(+c.dataset.i, true); openDrawer(+c.dataset.i); }); });
    axis.querySelectorAll('.m').forEach(m => m.classList.toggle('dim', !visible.some(v => v.i === +m.dataset.i)));
    $('empty').classList.toggle('on', visible.length === 0);
    syncUrl();
    const keep = visible.find(v => v.i === active) ? active : (visible[0] ? visible[0].i : -1);
    active = -1;
    if (keep >= 0) goTo(keep, false);
    else { $('counter').textContent = '0 / ' + items.length; }
  }

  // ---------------- active state
  const center = () => mobile() ? wrap.scrollTop + wrap.clientHeight / 2 : wrap.scrollLeft + wrap.clientWidth / 2;
  const pos = c => mobile() ? c.offsetTop + c.offsetHeight / 2 : c.offsetLeft + c.offsetWidth / 2;
  function nearest() {
    let best = -1, bd = Infinity; const c = center();
    for (const v of visible) { const d = Math.abs(pos(cards[v.i]) - c); if (d < bd) { bd = d; best = v.i; } }
    return best;
  }
  function setActive(i) {
    if (i === active || i < 0) return;
    const prevYear = active >= 0 ? year(items[active].date) : null;
    active = i;
    Object.values(cards).forEach(c => c.classList.toggle('active', +c.dataset.i === i));
    const it = items[i];
    if (prevYear !== year(it.date)) {
      const by = $('bigyear');
      if (reduce) by.textContent = year(it.date);
      else { by.classList.add('swap'); setTimeout(() => { by.textContent = year(it.date); by.classList.remove('swap'); }, 160); }
    }
    const k = visible.findIndex(v => v.i === i);
    $('counter').textContent = `${k + 1} / ${visible.length}`;
    axis.querySelectorAll('.m').forEach(m => m.classList.toggle('on', +m.dataset.i === i));
    $('head').setAttribute('transform', `translate(${it.ax},0)`);
    $('headlbl').textContent = year(it.date);
    history.replaceState(null, '', '#m-' + i);
  }
  let snapping = false, snapT;
  function goTo(i, smooth) {
    const c = cards[i]; if (!c) return;
    snapping = true;
    const opts = { behavior: smooth && !reduce ? 'smooth' : 'auto' };
    if (mobile()) wrap.scrollTo({ top: pos(c) - wrap.clientHeight / 2, ...opts });
    else wrap.scrollTo({ left: pos(c) - wrap.clientWidth / 2, ...opts });
    setActive(i);
    clearTimeout(snapT); snapT = setTimeout(() => { snapping = false; }, smooth ? 600 : 50);
  }
  const step = d => { const k = visible.findIndex(v => v.i === active); const n = visible[Math.min(visible.length - 1, Math.max(0, k + d))]; if (n) goTo(n.i, true); };

  let raf = 0, settle;
  wrap.addEventListener('scroll', () => {
    if (!raf) raf = requestAnimationFrame(() => { raf = 0; setActive(nearest()); });
    if (snapping) return;
    clearTimeout(settle); settle = setTimeout(() => { if (!dragging && !playing) { const n = nearest(); if (n >= 0) goTo(n, true); } }, 160);
  }, { passive: true });

  // wheel: vertical scroll drives horizontal time on desktop
  wrap.addEventListener('wheel', ev => {
    if (mobile()) return;
    const d = Math.abs(ev.deltaY) > Math.abs(ev.deltaX) ? ev.deltaY : ev.deltaX;
    ev.preventDefault(); stopPlay(); snapping = false;
    wrap.scrollLeft += d;
  }, { passive: false });

  // drag to pan
  let dragging = false, dx0 = 0, sl0 = 0, moved = 0;
  wrap.addEventListener('pointerdown', ev => { if (mobile() || ev.button !== 0) return; dragging = true; moved = 0; dx0 = ev.clientX; sl0 = wrap.scrollLeft; wrap.classList.add('dragging'); wrap.setPointerCapture(ev.pointerId); stopPlay(); });
  wrap.addEventListener('pointermove', ev => { if (!dragging) return; const d = ev.clientX - dx0; moved = Math.max(moved, Math.abs(d)); snapping = false; wrap.scrollLeft = sl0 - d; });
  const endDrag = () => { if (!dragging) return; dragging = false; wrap.classList.remove('dragging'); const n = nearest(); if (n >= 0) goTo(n, true); };
  wrap.addEventListener('pointerup', endDrag); wrap.addEventListener('pointercancel', endDrag);
  track.addEventListener('click', ev => { if (moved > 6) { ev.stopPropagation(); ev.preventDefault(); } }, true);

  // keys
  addEventListener('keydown', ev => {
    if (ev.target && ev.target.matches && ev.target.matches('input,select,textarea')) return;
    if (ev.key === 'ArrowRight' || ev.key === 'ArrowDown' && !mobile()) { ev.preventDefault(); stopPlay(); step(1); }
    else if (ev.key === 'ArrowLeft' || ev.key === 'ArrowUp' && !mobile()) { ev.preventDefault(); stopPlay(); step(-1); }
    else if (ev.key === 'Home') { stopPlay(); visible[0] && goTo(visible[0].i, true); }
    else if (ev.key === 'End') { stopPlay(); visible.length && goTo(visible[visible.length - 1].i, true); }
    else if (ev.key === 'Enter' && active >= 0 && !$('drawer').classList.contains('on')) openDrawer(active);
    else if (ev.key === 'Escape') closeDrawer();
    else if (ev.key === '/') { ev.preventDefault(); $('q').focus(); }
    else if (ev.key === ' ' && !$('drawer').classList.contains('on')) { ev.preventDefault(); togglePlay(); }
  });
  $('prev').addEventListener('click', () => { stopPlay(); step(-1); });
  $('next').addEventListener('click', () => { stopPlay(); step(1); });

  // autoplay
  let playing = false, timer;
  function togglePlay() { playing ? stopPlay() : startPlay(); }
  function startPlay() { playing = true; $('play').setAttribute('aria-pressed', 'true'); $('play').textContent = '■ Stop'; tick(); timer = setInterval(tick, 3400); }
  function tick() { const k = visible.findIndex(v => v.i === active); const n = visible[(k + 1) % visible.length]; if (n) goTo(n.i, true); }
  function stopPlay() { if (!playing) return; playing = false; clearInterval(timer); $('play').setAttribute('aria-pressed', 'false'); $('play').textContent = '▶ Play'; }
  $('play').addEventListener('click', togglePlay);

  // drawer
  const drawer = $('drawer'), veil = $('veil');
  function openDrawer(i) {
    const it = items[i], e = it.e;
    const k = visible.findIndex(v => v.i === i), pv = visible[k - 1], nx = visible[k + 1];
    $('drawer-in').innerHTML = `
      <div class="top"><span>${KIND[it.kind]}${e ? ' · ' + esc(e.fieldName) : ''}</span><button class="x" id="dx" aria-label="Close">✕</button></div>
      <div class="date">${esc(when(it))}</div>
      <h2>${esc(it.title)}</h2>
      <p>${esc(it.blurb || '')}</p>
      ${e ? `<div class="lbl">From the entry</div><p class="hook">${esc(e.hook.replace(/[*_`]/g, ''))}</p>
             <a class="cta" href="${e.url}">Read the full record →</a>
             <div class="links"><a href="explore.html?field=${e.field}">More in ${esc(e.fieldName)}</a><span style="color:var(--muted)">${e.sources.length} source${e.sources.length === 1 ? '' : 's'} cited</span></div>`
        : it.source ? `<a class="cta" href="${esc(it.source)}" target="_blank" rel="noopener">Source: ${esc(it.source_label || 'link')} ↗</a><p style="font-size:13px;color:var(--muted)">This moment is context for the timeline. It is not a documented case in the collection.</p>` : ''}
      <div class="nav">
        ${pv ? `<button id="dprev"><small>← Earlier</small>${esc(pv.title)}</button>` : '<span></span>'}
        ${nx ? `<button id="dnext" style="text-align:right"><small>Later →</small>${esc(nx.title)}</button>` : '<span></span>'}
      </div>`;
    drawer.classList.add('on'); veil.classList.add('on'); drawer.setAttribute('aria-hidden', 'false');
    $('dx').addEventListener('click', closeDrawer);
    pv && $('dprev').addEventListener('click', () => { goTo(pv.i, true); openDrawer(pv.i); });
    nx && $('dnext').addEventListener('click', () => { goTo(nx.i, true); openDrawer(nx.i); });
    $('dx').focus();
  }
  function closeDrawer() { drawer.classList.remove('on'); veil.classList.remove('on'); drawer.setAttribute('aria-hidden', 'true'); }
  veil.addEventListener('click', closeDrawer);

  // filter controls
  $('chips').addEventListener('click', ev => { const b = ev.target.closest('.chip'); if (!b) return; f.kind = b.dataset.k; [...$('chips').children].forEach(c => c.setAttribute('aria-pressed', c === b)); stopPlay(); render(); });
  $('field').addEventListener('change', ev => { f.field = ev.target.value; stopPlay(); render(); });
  $('q').addEventListener('input', ev => { f.q = ev.target.value; stopPlay(); render(); });

  // resize
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { drawAxis(); axis.querySelectorAll('.m').forEach(m => m.classList.toggle('dim', !visible.some(v => v.i === +m.dataset.i))); const a = active; active = -1; if (a >= 0) goTo(a, false); }, 150); });

  // start
  render();
  const m = location.hash.match(/^#m-(\d+)$/);
  if (m && cards[+m[1]]) goTo(+m[1], false);
})();
