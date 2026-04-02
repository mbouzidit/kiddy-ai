/* ════════════════════════════════════════
   GAME: Planet Protector — Sort the AI Solutions
   Tap an item → tap its category (9 items, 3 categories)
════════════════════════════════════════ */

let sortState = { selItem: null, sorted: 0, counts: [0,0,0] };

function buildPlanetGame(wrap, missionId, done) {
  const L = S.lang;
  sortState = { selItem: null, sorted: 0, counts: [0,0,0] };

  const cats = PLANET_CATS.map((c, i) => `
    <div class="sort-cat" id="sc-${i}" style="background:${c.bg};border-color:${c.color}" onclick="sortTarget(${i})">
      <span class="sort-cat-ico">${c.ico}</span>
      <div class="sort-cat-lbl" style="color:${c.color}">${c[L] || c.en}</div>
      <div class="sort-cat-count" id="sc-cnt-${i}" style="background:${c.color}">0</div>
    </div>`).join('');

  const items = PLANET_ITEMS.map((it, i) => `
    <div class="sort-item" id="si-${i}" onclick="sortSelect(${i})">
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
      <div class="sort-cats">${cats}</div>
      <div class="sort-items" id="sort-items-wrap">${items}</div>
      <div class="game-success" id="sort-success">
        <span class="game-success-ico">🌍</span>
        <div class="game-success-txt">${t('pg_done')}</div>
      </div>
      ${completeBtnHtml}
    </div>`;
}

function sortSelect(idx) {
  const el = document.getElementById('si-' + idx);
  if (!el || el.classList.contains('sorted')) return;
  document.querySelectorAll('.sort-item.selected').forEach(i => i.classList.remove('selected'));
  if (sortState.selItem === idx) {
    sortState.selItem = null;
  } else {
    sortState.selItem = idx;
    el.classList.add('selected');
  }
}

function sortTarget(catIdx) {
  if (sortState.selItem === null) return;
  const itemIdx = sortState.selItem;
  const item    = PLANET_ITEMS[itemIdx];
  const el      = document.getElementById('si-' + itemIdx);
  const catEl   = document.getElementById('sc-' + catIdx);

  if (item.cat === catIdx) {
    // ✅ Correct category
    el.classList.remove('selected'); el.classList.add('sorted');
    catEl.classList.add('correct-flash');
    setTimeout(() => catEl.classList.remove('correct-flash'), 500);
    sortState.counts[catIdx]++;
    document.getElementById('sc-cnt-' + catIdx).textContent = sortState.counts[catIdx];
    sortState.sorted++;
    sortState.selItem = null;
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
    // ❌ Wrong category — shake item
    el.classList.remove('selected'); el.classList.add('wrong');
    setTimeout(() => el.classList.remove('wrong'), 550);
    sortState.selItem = null;
  }
}
