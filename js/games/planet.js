/* ════════════════════════════════════════
   GAME: Planet Protector — Sort the AI Solutions
   Drag an AI tool → drop it into the right category zone (9 items, 3 categories)
════════════════════════════════════════ */

let sortState = { sorted: 0, counts: [0,0,0], dragItem: null };
let sortGhost = null, sortDragEl = null;

function buildPlanetGame(wrap, missionId, done) {
  const L = S.lang;
  sortState = { sorted: 0, counts: [0,0,0], dragItem: null };

  const zones = PLANET_CATS.map((c, i) => `
    <div class="sort-zone" id="sz-${i}" style="background:${c.bg};border-color:${c.color}">
      <div class="sort-zone-head">
        <span class="sort-cat-ico">${c.ico}</span>
        <span class="sort-cat-lbl" style="color:${c.color}">${c[L] || c.en}</span>
        <span class="sort-cat-count" id="sc-cnt-${i}" style="background:${c.color}">0</span>
      </div>
      <div class="sort-zone-chips" id="sz-chips-${i}"></div>
    </div>`).join('');

  const items = PLANET_ITEMS.map((it, i) => `
    <div class="sort-item" id="si-${i}" draggable="true">
      ${it.ico} ${it[L] || it.en}
    </div>`).join('');

  const completeBtnHtml = done
    ? `<button class="btn btn-gray btn-full" style="margin-top:8px" onclick="nav('missions')">${t('mis_btn_done')}</button>`
    : `<button class="btn btn-green btn-full btn-lg" id="sort-cmp-btn" style="display:none;margin-top:8px"
         onclick="completeMission('${missionId}');this.className='btn btn-gray btn-full';this.textContent='${t('mis_btn_after')}'">
         🎯 ${t('mis_btn')}
       </button>`;

  wrap.innerHTML = `
    <div class="game-wrap">
      <div class="game-title">${t('pg_title')}</div>
      <div class="game-inst">${t('pg_inst')}</div>
      <div class="sort-score" id="sort-score">${t('pg_score')} 0 / 9</div>
      <div class="sort-items" id="sort-items-wrap">${items}</div>
      <div class="sort-zones">${zones}</div>
      <div class="game-success" id="sort-success">
        <span class="game-success-ico">🌍</span>
        <div class="game-success-txt">${t('pg_done')}</div>
      </div>
      ${completeBtnHtml}
    </div>`;

  // bind mouse drag on items
  PLANET_ITEMS.forEach((_, i) => {
    const el = document.getElementById('si-' + i);
    el.ondragstart = e => sortDragStart(e, i);
    el.ondragend   = () => sortDragEndMouse();
  });
  // bind mouse drop on category zones
  PLANET_CATS.forEach((_, ci) => {
    const z = document.getElementById('sz-' + ci);
    z.ondragover  = e => { e.preventDefault(); z.classList.add('drag-over'); };
    z.ondragleave = ()  => z.classList.remove('drag-over');
    z.ondrop      = e  => {
      e.preventDefault();
      z.classList.remove('drag-over');
      sortResolve(parseInt(e.dataTransfer.getData('text')), ci);
    };
  });
  // bind touch drag on items
  PLANET_ITEMS.forEach((_, i) => {
    const el = document.getElementById('si-' + i);
    el.addEventListener('touchstart', sortTouchStart, { passive: false });
    el.addEventListener('touchmove',  sortTouchMove,  { passive: false });
    el.addEventListener('touchend',   sortTouchEnd);
  });
}

/* ── MOUSE DRAG ── */
function sortDragStart(e, itemIdx) {
  const el = document.getElementById('si-' + itemIdx);
  if (!el || el.classList.contains('sorted')) { e.preventDefault(); return; }
  sortState.dragItem = itemIdx;
  e.dataTransfer.setData('text', String(itemIdx));
  setTimeout(() => { if (el) el.style.opacity = '.4'; }, 0);
}
function sortDragEndMouse() {
  document.querySelectorAll('.sort-item').forEach(el => el.style.opacity = '');
  sortState.dragItem = null;
}

/* ── TOUCH DRAG ── */
function sortTouchStart(e) {
  const el = e.currentTarget;
  if (el.classList.contains('sorted')) return;
  e.preventDefault();
  sortDragEl = el;
  sortState.dragItem = parseInt(el.id.replace('si-', ''));
  const r = el.getBoundingClientRect();
  sortGhost = el.cloneNode(true);
  sortGhost.style.cssText = `position:fixed;z-index:9999;opacity:.85;pointer-events:none;
    border-radius:50px;background:white;box-shadow:0 8px 24px rgba(0,0,0,.25);
    padding:8px 14px;font-size:13px;font-weight:800;white-space:nowrap;`;
  document.body.appendChild(sortGhost);
  const t0 = e.touches[0];
  sortGhost.style.left = (t0.clientX - r.width / 2) + 'px';
  sortGhost.style.top  = (t0.clientY - r.height / 2) + 'px';
  el.style.opacity = '.4';
}
function sortTouchMove(e) {
  e.preventDefault();
  if (!sortGhost) return;
  const t0 = e.touches[0];
  sortGhost.style.left = (t0.clientX - sortGhost.offsetWidth  / 2) + 'px';
  sortGhost.style.top  = (t0.clientY - sortGhost.offsetHeight / 2) + 'px';
  document.querySelectorAll('.sort-zone').forEach(z => {
    const r = z.getBoundingClientRect();
    if (t0.clientX >= r.left && t0.clientX <= r.right && t0.clientY >= r.top && t0.clientY <= r.bottom)
      z.classList.add('drag-over');
    else
      z.classList.remove('drag-over');
  });
}
function sortTouchEnd(e) {
  if (sortGhost)  { sortGhost.remove(); sortGhost = null; }
  if (sortDragEl) { sortDragEl.style.opacity = ''; sortDragEl = null; }
  document.querySelectorAll('.sort-zone').forEach(z => z.classList.remove('drag-over'));
  if (sortState.dragItem === null) return;
  const t0 = e.changedTouches[0];
  let hitZone = null;
  document.querySelectorAll('.sort-zone').forEach(z => {
    const r = z.getBoundingClientRect();
    if (t0.clientX >= r.left && t0.clientX <= r.right && t0.clientY >= r.top && t0.clientY <= r.bottom)
      hitZone = z;
  });
  if (hitZone) {
    sortResolve(sortState.dragItem, parseInt(hitZone.id.replace('sz-', '')));
  }
  sortState.dragItem = null;
}

/* ── RESOLVE DROP ── */
function sortResolve(itemIdx, catIdx) {
  if (itemIdx === null || itemIdx === undefined) return;
  const item   = PLANET_ITEMS[itemIdx];
  const el     = document.getElementById('si-' + itemIdx);
  const zoneEl = document.getElementById('sz-' + catIdx);
  if (!el || !zoneEl || el.classList.contains('sorted')) return;

  if (item.cat === catIdx) {
    // ✅ Correct category
    playSound('correct');
    el.classList.add('sorted');
    const chip = document.createElement('span');
    chip.className = 'sort-chip';
    chip.textContent = item.ico + ' ' + (item[S.lang] || item.en);
    document.getElementById('sz-chips-' + catIdx).appendChild(chip);
    zoneEl.classList.add('correct-flash');
    setTimeout(() => zoneEl.classList.remove('correct-flash'), 500);
    sortState.counts[catIdx]++;
    document.getElementById('sc-cnt-' + catIdx).textContent = sortState.counts[catIdx];
    sortState.sorted++;
    document.getElementById('sort-score').textContent = `${t('pg_score')} ${sortState.sorted} / 9`;
    if (sortState.sorted === 9) {
      setTimeout(() => {
        document.getElementById('sort-success')?.classList.add('show');
        const btn = document.getElementById('sort-cmp-btn');
        if (btn) btn.style.display = 'block';
        confettiSmall();
      }, 400);
    }
  } else {
    // ❌ Wrong category
    playSound('wrong');
    el.classList.add('wrong');
    setTimeout(() => el.classList.remove('wrong'), 550);
  }
  sortState.dragItem = null;
}
