/* ════════════════════════════════════════
   TRAINING — drag & drop + train + test
════════════════════════════════════════ */

let trDragEl = null, touchEl = null, touchGhost = null;

/* ── LOAD ── */
function loadTraining() {
  buildDragItems();
  restoreDropped();
  updateTrUI();
  if (S.trDone) {
    document.getElementById('tr-done').style.display = 'block';
    const nb = document.getElementById('tr-next-btn');
    if (nb) { nb.textContent = t('tr_next_quiz'); nb.style.display = 'block'; }
    buildTestPhase();
  }
}

function buildDragItems() {
  const g = document.getElementById('drag-grid');
  g.innerHTML = '';
  DRAG_EMOJIS.forEach((e, i) => {
    const used = S.trDone || i < S.trCount;
    const d = document.createElement('div');
    d.className = 'drag-item' + (used ? ' used' : '');
    d.textContent = e;
    d.draggable = !used;
    if (!used) {
      d.ondragstart = ev => { trDragEl = e; ev.dataTransfer.setData('text', e); d.style.opacity = '.4'; };
      d.ondragend   = ()  => { d.style.opacity = ''; };
      d.addEventListener('touchstart', touchStart, { passive: false });
      d.addEventListener('touchmove',  touchMove,  { passive: false });
      d.addEventListener('touchend',   touchEnd);
    }
    g.appendChild(d);
  });
}

function restoreDropped() {
  const dd = document.getElementById('dropped-disp');
  dd.innerHTML = '';
  for (let i = 0; i < S.trCount; i++) {
    const sp = document.createElement('span');
    sp.className = 'ditem';
    sp.textContent = DRAG_EMOJIS[i];
    dd.appendChild(sp);
  }
}

function updateTrUI() {
  const pct = Math.round((S.trCount / DRAG_EMOJIS.length) * 100);
  document.getElementById('items-cnt').textContent = S.trCount;
  document.getElementById('tr-prog').style.width   = pct + '%';
  document.getElementById('tr-stat').textContent   = `${t('tr_prog')} ${pct}%`;
  const btn = document.getElementById('tr-btn');
  if (S.trDone) { btn.textContent = t('tr_done_btn'); btn.disabled = true; }
  else          { btn.textContent = t('tr_start');    btn.disabled = S.trCount < 1; }
}

/* ── ROBOT THOUGHT BUBBLE ── */
function showRoboBubble(txt) {
  const wrap = document.getElementById('robo-bubble-wrap');
  wrap.innerHTML = '';
  const b = document.createElement('div');
  b.className = 'robo-bubble';
  b.textContent = txt;
  wrap.appendChild(b);
  setTimeout(() => b.remove(), 2200);
}

/* ── DRAG & DROP (mouse) ── */
function doDragOver(e)  { e.preventDefault(); document.getElementById('drop-zone').classList.add('over'); }
function doDragLeave()  { document.getElementById('drop-zone').classList.remove('over'); }
function doDrop(e) {
  e.preventDefault();
  document.getElementById('drop-zone').classList.remove('over');
  dropItem(e.dataTransfer.getData('text'));
}

/* ── DRAG & DROP (touch) ── */
function touchStart(e) {
  e.preventDefault();
  touchEl = e.currentTarget;
  touchGhost = touchEl.cloneNode(true);
  touchGhost.style.cssText = 'position:fixed;z-index:9999;opacity:.75;pointer-events:none;font-size:32px;';
  document.body.appendChild(touchGhost);
}
function touchMove(e) {
  e.preventDefault();
  if (!touchGhost) return;
  const t0 = e.touches[0];
  touchGhost.style.left = (t0.clientX - 22) + 'px';
  touchGhost.style.top  = (t0.clientY - 22) + 'px';
  const dz = document.getElementById('drop-zone');
  const r  = dz.getBoundingClientRect();
  if (t0.clientX >= r.left && t0.clientX <= r.right && t0.clientY >= r.top && t0.clientY <= r.bottom)
    dz.classList.add('over');
  else dz.classList.remove('over');
}
function touchEnd(e) {
  if (touchGhost) { touchGhost.remove(); touchGhost = null; }
  if (!touchEl) return;
  const t0 = e.changedTouches[0];
  const dz = document.getElementById('drop-zone');
  const r  = dz.getBoundingClientRect();
  dz.classList.remove('over');
  if (t0.clientX >= r.left && t0.clientX <= r.right && t0.clientY >= r.top && t0.clientY <= r.bottom)
    dropItem(touchEl.textContent);
  touchEl = null;
}

/* ── DROP ITEM ── */
function dropItem(em) {
  if (S.trDone || S.trCount >= DRAG_EMOJIS.length) return;
  S.trCount++;
  const dd = document.getElementById('dropped-disp');
  const sp = document.createElement('span');
  sp.className = 'ditem'; sp.textContent = em;
  dd.appendChild(sp);
  const lbl = document.getElementById('drop-lbl');
  if (lbl) lbl.style.display = 'none';
  // Mark source item as used
  document.querySelectorAll('.drag-item:not(.used)').forEach(el => {
    if (el.textContent === em && el.draggable) {
      el.classList.add('used'); el.draggable = false; el.ondragstart = null;
    }
  });
  updateTrUI();
  showRoboBubble(['🤔','📥','💡','🧐'][Math.floor(Math.random() * 4)]);
  save();
}

/* ── START TRAINING ── */
function startTraining() {
  if (S.trDone) return;
  const btn = document.getElementById('tr-btn');
  btn.textContent = t('tr_going'); btn.disabled = true;
  document.getElementById('tr-robot').textContent = '🤖';

  const robotFrames = ['🤖','😮','🤩','😎','🤯'];
  let rf = 0;
  const ri = setInterval(() => {
    document.getElementById('tr-robot').textContent = robotFrames[rf % robotFrames.length];
    rf++;
  }, 400);

  let p = parseInt(document.getElementById('tr-prog').style.width) || 0;
  const ti = setInterval(() => {
    p = Math.min(p + 2, 100);
    document.getElementById('tr-prog').style.width   = p + '%';
    document.getElementById('tr-stat').textContent   = `${t('tr_prog')} ${p}%`;
    if (p >= 100) {
      clearInterval(ti); clearInterval(ri);
      document.getElementById('tr-robot').textContent = '🎉';
      S.trDone = true; save();
      earn('robot-trainer'); earn('data-detective'); addXP(150);
      playSound('complete');
      toast(t('tr_toast'));
      btn.textContent = t('tr_done_btn');
      document.getElementById('tr-done').style.display = 'block';
      const nb = document.getElementById('tr-next-btn');
      if (nb) { nb.textContent = t('tr_next_quiz'); nb.style.display = 'block'; }
      setTimeout(buildTestPhase, 800);
    }
  }, 60);
}

/* ── TEST PHASE ── */
function buildTestPhase() {
  const inner = document.getElementById('tr-test');
  inner.style.display = 'block';
  document.getElementById('tr-test-title').textContent = t('tr_test_title');
  document.getElementById('tr-test-sub').textContent   = t('tr_test_sub');
  const g = document.getElementById('tr-test-grid');
  g.innerHTML = '';
  DRAG_EMOJIS.forEach((em, i) => {
    const wrap = document.createElement('div'); wrap.className = 'tr-test-item';
    const ico  = document.createElement('div'); ico.className = 'tr-test-ico'; ico.id = 'tti-' + i; ico.textContent = em;
    const lbl  = document.createElement('div'); lbl.className = 'tr-test-lbl'; lbl.id = 'ttl-' + i;
    wrap.appendChild(ico); wrap.appendChild(lbl);
    ico.onclick = () => testItem(i);
    g.appendChild(wrap);
  });
}

function testItem(i) {
  const ico = document.getElementById('tti-' + i);
  const lbl = document.getElementById('ttl-' + i);
  if (!ico || ico.classList.contains('known') || ico.classList.contains('unknown')) return;
  if (i < S.trCount) {
    ico.classList.add('known');  lbl.textContent = t('tr_known');   showRoboBubble('🎉');
  } else {
    ico.classList.add('unknown'); lbl.textContent = t('tr_unknown'); showRoboBubble('🤔');
  }
}
