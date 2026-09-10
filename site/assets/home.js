(async function () {
  const [tl, db] = await Promise.all([
    fetch('data/timeline.json').then(r => r.json()),
    fetch('data/entries.json').then(r => r.json())
  ]);
  const entries = Object.fromEntries(db.entries.map(e => [e.id, e]));
  const items = tl.items.slice().sort((a, b) => a.date.localeCompare(b.date));
  const MONTH = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const fmt = d => { const [y, m, day] = d.split('-').map(Number); return { y, m: MONTH[m - 1], day }; };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  // header numbers
  document.getElementById('eyebrow').textContent =
    `${db.entries.length} documented cases · ${db.fields.length} fields · every one cited`;

  // ---------------- the strip: time to scale, ticks pile up where history piled up
  const svg = document.getElementById('strip');
  const t0 = Date.UTC(1950, 0, 1), t1 = Date.UTC(2026, 11, 31);
  function drawStrip() {
    const W = Math.max(320, svg.clientWidth || 1000), H = 200, L = 6, R = W - 6, AX = 132;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const x = d => L + (Date.parse(d + 'T00:00:00Z') - t0) / (t1 - t0) * (R - L);
    let s = `<line class="axis" x1="${L}" y1="${AX}" x2="${R}" y2="${AX}"/>`;
    const step = W < 600 ? 20 : 10;
    for (let y = 1950; y <= 2020; y += step) {
      const xx = x(`${y}-01-01`);
      s += `<line class="tick" x1="${xx}" y1="${AX}" x2="${xx}" y2="${AX + 6}"/><text class="yr" x="${xx}" y="${AX + 22}" text-anchor="${y === 1950 ? 'start' : 'middle'}">${y}</text>`;
    }
    const xNow = x('2026-09-10');
    s += `<line class="tick" x1="${xNow}" y1="${AX}" x2="${xNow}" y2="${AX + 6}"/><text class="yr" x="${xNow}" y="${AX + 22}" text-anchor="end">today</text>`;
    // beeswarm: stack a mark upward if it would collide with one already placed
    const placed = [];
    const SZ = 9, GAP = 2.5;
    items.forEach((it, i) => {
      const cx = x(it.date);
      let level = 0;
      while (placed.some(p => p.level === level && Math.abs(p.cx - cx) < SZ + GAP)) level++;
      placed.push({ cx, level });
      const cy = AX - 8 - level * (SZ + GAP);
      let shape;
      if (it.kind === 'achievement') shape = `<rect x="${cx - SZ / 2}" y="${cy - SZ / 2}" width="${SZ}" height="${SZ}"/>`;
      else if (it.kind === 'launch') shape = `<circle cx="${cx}" cy="${cy}" r="${SZ / 2 - .5}"/>`;
      else if (it.kind === 'prize') shape = `<path d="M${cx} ${cy - SZ / 2 - 1} L${cx + SZ / 2 + 1} ${cy} L${cx} ${cy + SZ / 2 + 1} L${cx - SZ / 2 - 1} ${cy} Z"/>`;
      else shape = `<circle cx="${cx}" cy="${cy}" r="3"/>`;
      s += `<a class="m ${it.kind}" href="#m-${i}" data-i="${i}" style="animation-delay:${(i * 45)}ms"><title>${esc(fmt(it.date).y)} — ${esc(it.title)}</title>${shape}</a>`;
    });
    // the callout: how much of this happened just now
    const since = '2025-01-01';
    const recent = items.filter(it => it.date >= since).length;
    const xs = x(since);
    s += `<path class="brace" d="M${xs} ${AX + 34} v6 H${xNow} v-6"/>`;
    const rest = W < 700 ? ' since Jan 2025' : ' items on this timeline are from January 2025 or later';
    s += `<text class="callout" x="${xNow}" y="${AX + 58}" text-anchor="end"><tspan class="n">${recent} of ${items.length}</tspan>${rest}</text>`;
    svg.innerHTML = s;
  }
  drawStrip();
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(drawStrip, 120); });

  // ---------------- the timeline
  const root = document.getElementById('moments');
  let lastYear = null, html = '';
  items.forEach((it, i) => {
    const d = fmt(it.date);
    if (d.y !== lastYear) { html += `<div class="year" aria-hidden="true"><span>${d.y}</span></div>`; lastYear = d.y; }
    const e = it.entry ? entries[it.entry] : null;
    const blurb = it.blurb || (e ? e.hook : '');
    const day = it.date.endsWith('-01') || it.approx ? '' : ` ${d.day}`;
    let meta = '';
    if (e) meta += `<a class="chip" href="explore.html?field=${e.field}">${e.emoji} ${esc(e.fieldName)}</a><a class="go" href="${e.url}">Read the entry ↗</a>`;
    else if (it.source) meta += `<a class="go" href="${esc(it.source)}" target="_blank" rel="noopener">Source: ${esc(it.source_label || 'link')} ↗</a>`;
    html += `<article class="moment ${it.kind}" id="m-${i}">
      <div class="rail"><span class="mark" aria-hidden="true"></span></div>
      <div class="date"><b>${d.m}${day}</b>${d.y}</div>
      <div><h3>${e ? `<a href="${e.url}" style="text-decoration:none;color:inherit">${esc(it.title)}</a>` : esc(it.title)}</h3>
        <p>${esc(blurb)}</p><div class="meta">${meta}</div></div>
    </article>`;
  });
  root.innerHTML = html;

  // ---------------- fields
  document.getElementById('fields').innerHTML = db.fields.map(f =>
    `<a href="explore.html?field=${f.slug}"><span class="fn">${f.emoji} ${esc(f.name)}</span><span class="fc">${f.count} case${f.count === 1 ? '' : 's'}</span></a>`).join('');
  document.getElementById('cta-copy').textContent =
    `${db.entries.length} cases across ${db.fields.length} fields. Each has its sources, its caveats, and a prompt for an AI assistant.`;

  // ---------------- motion: reveal + strip highlight
  const moments = [...root.querySelectorAll('.moment')];
  const marks = () => svg.querySelectorAll('.m');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); }
      const i = +en.target.id.slice(2);
      const mk = marks()[i]; mk && mk.classList.toggle('active', en.isIntersecting);
    }), { rootMargin: '0px 0px -10% 0px', threshold: .15 });
    moments.forEach(m => io.observe(m));
  } else moments.forEach(m => m.classList.add('in'));
})();
