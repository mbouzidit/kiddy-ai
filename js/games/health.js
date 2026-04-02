/* ════════════════════════════════════════
   GAME: Health Hero — AI Doctor Match
   Click a health problem → click its AI solution (4 pairs)
════════════════════════════════════════ */

let mgState = { sel: null, matched: 0, rightOrder: [] };

function buildHealthGame(wrap, missionId, done) {
  const L = S.lang;
  mgState = { sel: null, matched: 0, rightOrder: [0,1,2,3].sort(() => Math.random() - .5) };

  const completeBtnHtml = done
    ? `<button class="btn btn-gray btn-full" style="margin-top:8px" onclick="nav('missions')">${t('mis_btn_done')}</button>`
    : `<button class="btn btn-green btn-full btn-lg" id="mg-cmp-btn" style="display:none;margin-top:8px"
         onclick="completeMission('${missionId}');this.className='btn btn-gray btn-full';this.textContent='${t('mis_btn_after')}'">
         🎯 ${t('mis_btn')}
       </button>`;

  wrap.innerHTML = `
    <div class="game-wrap">
      <div class="game-title">${t('hg_title')}</div>
      <div class="game-inst">${t('hg_inst')}</div>
      <div class="match-score" id="mg-score">0 / 4 ✅</div>
      <div class="match-grid">
        <div>
          <div class="match-col-ttl">${t('hg_prob')}</div>
          ${HEALTH_PAIRS.map((p, i) => `
            <div class="match-item" id="ml-${i}" onclick="mgClick('left',${i})">
              <span class="match-ico">${p.prob.ico}</span>
              <div class="match-lbl">${p.prob[L] || p.prob.en}</div>
            </div>`).join('')}
        </div>
        <div>
          <div class="match-col-ttl">${t('hg_sol')}</div>
          ${mgState.rightOrder.map((ri, vi) => `
            <div class="match-item" id="mr-${vi}" onclick="mgClick('right',${vi})">
              <span class="match-ico">${HEALTH_PAIRS[ri].sol.ico}</span>
              <div class="match-lbl">${HEALTH_PAIRS[ri].sol[L] || HEALTH_PAIRS[ri].sol.en}</div>
            </div>`).join('')}
        </div>
      </div>
      <div class="game-success" id="mg-success">
        <span class="game-success-ico">🎉</span>
        <div class="game-success-txt">${t('hg_done')}</div>
      </div>
      ${completeBtnHtml}
    </div>`;
}

function mgClick(side, visualIdx) {
  // Resolve the actual pair index
  const pairIdx = side === 'left' ? visualIdx : mgState.rightOrder[visualIdx];
  const elId    = side === 'left' ? `ml-${visualIdx}` : `mr-${visualIdx}`;
  const el      = document.getElementById(elId);
  if (!el || el.classList.contains('matched')) return;

  if (!mgState.sel) {
    // First tap — select
    document.querySelectorAll('.match-item.selected').forEach(i => i.classList.remove('selected'));
    mgState.sel = { side, visualIdx, pairIdx };
    el.classList.add('selected');

  } else if (mgState.sel.side === side) {
    // Same column — swap selection
    const prevId = mgState.sel.side === 'left' ? `ml-${mgState.sel.visualIdx}` : `mr-${mgState.sel.visualIdx}`;
    document.getElementById(prevId)?.classList.remove('selected');
    mgState.sel = { side, visualIdx, pairIdx };
    el.classList.add('selected');

  } else {
    // Different columns — check pair
    const leftPair  = side === 'right' ? mgState.sel.pairIdx : pairIdx;
    const rightPair = side === 'right' ? pairIdx : mgState.sel.pairIdx;
    const prevId    = mgState.sel.side === 'left' ? `ml-${mgState.sel.visualIdx}` : `mr-${mgState.sel.visualIdx}`;
    const prevEl    = document.getElementById(prevId);

    if (leftPair === rightPair) {
      // ✅ Correct match
      prevEl?.classList.remove('selected'); prevEl?.classList.add('matched');
      el.classList.add('matched');
      mgState.matched++;
      mgState.sel = null;
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
      prevEl?.classList.remove('selected'); prevEl?.classList.add('wrong');
      el.classList.add('wrong');
      setTimeout(() => { prevEl?.classList.remove('wrong'); el.classList.remove('wrong'); }, 550);
      mgState.sel = null;
      toast(t('hg_wrong'));
    }
  }
}
