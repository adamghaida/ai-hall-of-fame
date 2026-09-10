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
  const $ = id => document.getElementById(id);

  $('byline').textContent = `${db.entries.length} documented cases · ${db.fields.length} fields · every entry cited`;
  $('gen').textContent = `Data generated ${db.generated}`;

  // ---------------- figure 1: every item placed to scale; marks stack where they collide
  const svg = $('strip');
  const t0 = Date.UTC(1950, 0, 1), t1 = Date.UTC(2026, 11, 31);
  const since = '2025-01-01';
  const recent = items.filter(it => it.date >= since).length;
  function drawStrip() {
    const W = Math.max(320, svg.clientWidth || 900), H = 190, L = 6, R = W - 6, AX = 128;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const x = d => L + (Date.parse(d + 'T00:00:00Z') - t0) / (t1 - t0) * (R - L);
    let s = `<line class="axis" x1="${L}" y1="${AX}" x2="${R}" y2="${AX}"/>`;
    const step = W < 600 ? 20 : 10;
    for (let y = 1950; y <= 2020; y += step) {
      const xx = x(`${y}-01-01`);
      s += `<line class="tick" x1="${xx}" y1="${AX}" x2="${xx}" y2="${AX + 5}"/><text class="yr" x="${xx}" y="${AX + 20}" text-anchor="${y === 1950 ? 'start' : 'middle'}">${y}</text>`;
    }
    const xNow = x('2026-09-10');
    s += `<line class="tick" x1="${xNow}" y1="${AX}" x2="${xNow}" y2="${AX + 5}"/><text class="yr" x="${xNow}" y="${AX + 20}" text-anchor="end">2026</text>`;
    const placed = [];
    const SZ = 8, GAP = 2.5;
    items.forEach((it, i) => {
      const cx = x(it.date);
      let level = 0;
      while (placed.some(p => p.level === level && Math.abs(p.cx - cx) < SZ + GAP)) level++;
      placed.push({ cx, level });
      const cy = AX - 7 - level * (SZ + GAP);
      let shape;
      if (it.kind === 'achievement') shape = `<rect x="${cx - SZ / 2}" y="${cy - SZ / 2}" width="${SZ}" height="${SZ}"/>`;
      else if (it.kind === 'launch') shape = `<circle cx="${cx}" cy="${cy}" r="${SZ / 2 - .4}"/>`;
      else if (it.kind === 'prize') shape = `<path d="M${cx} ${cy - SZ / 2 - 1} L${cx + SZ / 2 + 1} ${cy} L${cx} ${cy + SZ / 2 + 1} L${cx - SZ / 2 - 1} ${cy} Z"/>`;
      else shape = `<circle cx="${cx}" cy="${cy}" r="2.6"/>`;
      s += `<a class="m ${it.kind}" href="#m-${i}" data-i="${i}" style="animation-delay:${i * 30}ms"><title>${esc(fmt(it.date).y)}: ${esc(it.title)}</title>${shape}</a>`;
    });
    const xs = x(since);
    s += `<path class="brace" d="M${xs} ${AX + 32} v5 H${xNow} v-5"/>`;
    const rest = W < 700 ? ' since Jan 2025' : ' items are from January 2025 or later';
    s += `<text class="callout" x="${xNow}" y="${AX + 54}" text-anchor="end"><tspan class="n">${recent} of ${items.length}</tspan>${rest}</text>`;
    svg.innerHTML = s;
  }
  drawStrip();
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(drawStrip, 120); });
  $('figtext').textContent = `All ${items.length} timeline items placed to scale, 1950 to today; ${recent} are from January 2025 or later. Click a mark to jump to it.`;

  // ---------------- timeline rows
  let lastYear = null, html = '';
  items.forEach((it, i) => {
    const d = fmt(it.date);
    if (d.y !== lastYear) { html += `<div class="yr-sep">${d.y}</div>`; lastYear = d.y; }
    const e = it.entry ? entries[it.entry] : null;
    const day = it.date.endsWith('-01') || it.approx ? '' : ` ${d.day}`;
    const tag = it.kind === 'launch' ? '<span class="tag">release</span>' : it.kind === 'prize' ? '<span class="tag">prize</span>' : it.kind === 'origin' ? '<span class="tag">origin</span>' : '';
    let links = '';
    if (e) links = `<a href="explore.html?field=${e.field}">${esc(e.fieldName)}</a><a href="${e.url}">Read the entry ↗</a>`;
    else if (it.source) links = `<a href="${esc(it.source)}" target="_blank" rel="noopener">Source: ${esc(it.source_label || 'link')} ↗</a>`;
    html += `<article class="row ${it.kind}" id="m-${i}">
      <div class="row-date">${d.m}${day} ${d.y}</div>
      <div><h3>${e ? `<a href="${e.url}">${esc(it.title)}</a>` : esc(it.title)}${tag}</h3><p>${esc(it.blurb || (e ? e.hook : ''))}</p><div class="row-links">${links}</div></div>
    </article>`;
  });
  $('moments').innerHTML = html;

  // ---------------- fields table
  document.querySelector('#fields-tbl tbody').innerHTML = db.fields.map(f =>
    `<tr><td><a class="t" href="explore.html?field=${f.slug}">${esc(f.name)}</a></td><td class="n">${f.count}</td><td class="hide-sm" style="color:var(--text-2)">${esc(f.description)}</td></tr>`).join('');

  // ---------------- highlight the figure mark for rows in view
  const rows = [...document.querySelectorAll('.row')];
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(en => {
      const mk = svg.querySelectorAll('.m')[+en.target.id.slice(2)];
      mk && mk.classList.toggle('active', en.isIntersecting);
    }), { rootMargin: '-10% 0px -10% 0px' });
    rows.forEach(r => io.observe(r));
  }
})();
