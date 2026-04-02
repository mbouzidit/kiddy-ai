/* ════════════════════════════════════════
   GAME: Health Hero — AI Doctor Match
   Drag a health problem → drop on its AI solution (4 pairs)
════════════════════════════════════════ */

let mgState = { matched: 0, dragPairIdx: null, probOrder: [], rightOrder: [] };
let mgGhost = null, mgDragEl = null;

function buildHealthGame(wrap, missionId, done) {
  const L = S.lang;
  const probOrder  = [0,1,2,3].sort(() => Math.random() - .5);
  const rightOrder = [0,1,2,3].sort(() => Math.random() - .5);
  mgState = { matched: 0, dragPairIdx: null, probOrder, rightOrder };

  const completeBtnHtml = done
    ? `<button class="btn btn-gray btn-full" style="margin-top:8px" onclick="nav('missions')">${t('mis_btn_done')}</button>`
    : `<button class="btn btn-green btn-full btn-lg" id="mg-cmp-btn" style="display:none;margin-top:8px"
         onclick="completeMission('${missionId}');this.className='btn btn-gray btn-full';this.textContent='${t('mis_btn_after')}'">
         🎯 ${t('mis_btn')}
       </button>`;

  const problems = probOrder.map(pi => `
    <div class="match-prob" id="mp-${pi}" draggable="true">
      <span class="match-ico">${HEALTH_PAIRS[pi].prob.ico}</span>
      <div class="match-lbl">${HEALTH_PAIRS[pi].prob[L] || HEALTH_PAIRS[pi].prob.en}</div>
    </div>`).join('');

  const zones = rightOrder.map((ri, vi) => `
    <div class="match-zone" id="mz-${vi}">
      <span class="match-ico">${HEALTH_PAIRS[ri].sol.ico}</span>
      <div class="match-lbl">${HEALTH_PAIRS[ri].sol[L] || HEALTH_PAIRS[ri].sol.en}</div>
    </div>`).join('');

  wrap.innerHTML = `
    <div class="game-wrap">
      <div class="game-title">${t('hg_title')}</div>
      <div class="game-inst">${t('hg_inst')}</div>
      <div class="match-score" id="mg-score">0 / 4 ✅</div>
      <div class="match-col-ttl">${t('hg_prob')}</div>
      <div class="match-probs" id="match-probs">${problems}</div>
      <div class="match-col-ttl" style="margin-top:14px">${t('hg_sol')}</div>
      <div class="match-zones" id="match-zones">${zones}</div>
      <div class="game-success" id="mg-success">
        <span class="game-success-ico">🎉</span>
        <div class="game-success-txt">${t('hg_done')}</div>
      </div>
      ${completeBtnHtml}
    </div>`;

  // bind mouse drag on problem cards
  probOrder.forEach(pi => {
    const el = document.getElementById('mp-' + pi);
    el.ondragstart = e => mgDragStart(e, pi);
    el.ondragend   = () => mgDragEndMouse();
  });
  // bind mouse drop on solution zones
  rightOrder.forEach((ri, vi) => {
    const z = document.getElementById('mz-' + vi);
    z.ondragover  = e => { e.preventDefault(); if (!z.classList.contains('matched')) z.classList.add('drag-over'); };
    z.ondragleave = ()  => z.classList.remove('drag-over');
    z.ondrop      = e  => {
      e.preventDefault();
      z.classList.remove('drag-over');
      mgResolve(parseInt(e.dataTransfer.getData('text')), vi, ri);
    };
  });
  // bind touch drag on problem cards
  probOrder.forEach(pi => {
    const el = document.getElementById('mp-' + pi);
    el.addEventListener('touchstart', mgTouchStart, { passive: false });
    el.addEventListener('touchmove',  mgTouchMove,  { passive: false });
    el.addEventListener('touchend',   mgTouchEnd);
  });
}

/* ── MOUSE DRAG ── */
function mgDragStart(e, pairIdx) {
  const el = document.getElementById('mp-' + pairIdx);
  if (!el || el.classList.contains('matched')) { e.preventDefault(); return; }
  mgState.dragPairIdx = pairIdx;
  e.dataTransfer.setData('text', String(pairIdx));
  setTimeout(() => { if (el) el.style.opacity = '.4'; }, 0);
}
function mgDragEndMouse() {
  document.querySelectorAll('.match-prob').forEach(el => el.style.opacity = '');
  mgState.dragPairIdx = null;
}

/* ── TOUCH DRAG ── */
function mgTouchStart(e) {
  const el = e.currentTarget;
  if (el.classList.contains('matched')) return;
  e.preventDefault();
  mgDragEl = el;
  mgState.dragPairIdx = parseInt(el.id.replace('mp-', ''));
  const r = el.getBoundingClientRect();
  mgGhost = el.cloneNode(true);
  mgGhost.style.cssText = `position:fixed;z-index:9999;opacity:.85;pointer-events:none;width:${r.width}px;
    border-radius:12px;background:white;box-shadow:0 8px 24px rgba(0,0,0,.25);padding:14px 8px;text-align:center;`;
  document.body.appendChild(mgGhost);
  const t0 = e.touches[0];
  mgGhost.style.left = (t0.clientX - r.width / 2) + 'px';
  mgGhost.style.top  = (t0.clientY - r.height / 2) + 'px';
  el.style.opacity = '.4';
}
function mgTouchMove(e) {
  e.preventDefault();
  if (!mgGhost) return;
  const t0 = e.touches[0];
  mgGhost.style.left = (t0.clientX - mgGhost.offsetWidth  / 2) + 'px';
  mgGhost.style.top  = (t0.clientY - mgGhost.offsetHeight / 2) + 'px';
  document.querySelectorAll('.match-zone:not(.matched)').forEach(z => {
    const r = z.getBoundingClientRect();
    if (t0.clientX >= r.left && t0.clientX <= r.right && t0.clientY >= r.top && t0.clientY <= r.bottom)
      z.classList.add('drag-over');
    else
      z.classList.remove('drag-over');
  });
}
function mgTouchEnd(e) {
  if (mgGhost)  { mgGhost.remove(); mgGhost = null; }
  if (mgDragEl) { mgDragEl.style.opacity = ''; mgDragEl = null; }
  document.querySelectorAll('.match-zone').forEach(z => z.classList.remove('drag-over'));
  if (mgState.dragPairIdx === null) return;
  const t0 = e.changedTouches[0];
  let hitZone = null;
  document.querySelectorAll('.match-zone:not(.matched)').forEach(z => {
    const r = z.getBoundingClientRect();
    if (t0.clientX >= r.left && t0.clientX <= r.right && t0.clientY >= r.top && t0.clientY <= r.bottom)
      hitZone = z;
  });
  if (hitZone) {
    const vi = parseInt(hitZone.id.replace('mz-', ''));
    mgResolve(mgState.dragPairIdx, vi, mgState.rightOrder[vi]);
  }
  mgState.dragPairIdx = null;
}

/* ── RESOLVE DROP ── */
function mgResolve(probPairIdx, zoneVisualIdx, zonePairIdx) {
  const probEl = document.getElementById('mp-' + probPairIdx);
  const zoneEl = document.getElementById('mz-' + zoneVisualIdx);
  if (!probEl || !zoneEl || probEl.classList.contains('matched') || zoneEl.classList.contains('matched')) return;

  if (probPairIdx === zonePairIdx) {
    // ✅ Correct match
    playSound('correct');
    probEl.classList.add('matched');
    zoneEl.classList.add('matched');
    mgState.matched++;
    document.getElementById('mg-score').textContent = `${mgState.matched} / 4 ✅`;
    if (mgState.matched === 4) {
      setTimeout(() => {
        document.getElementById('mg-success')?.classList.add('show');
        const btn = document.getElementById('mg-cmp-btn');
        if (btn) btn.style.display = 'block';
        confettiSmall();
      }, 400);
    }
  } else {
    // ❌ Wrong match
    playSound('wrong');
    probEl.classList.add('wrong');
    setTimeout(() => probEl.classList.remove('wrong'), 550);
    toast(t('hg_wrong'));
  }
}
