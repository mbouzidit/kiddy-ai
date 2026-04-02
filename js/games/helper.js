/* ════════════════════════════════════════
   GAME: Smart Helper — Choose the Right AI
   3 character scenarios, pick the correct AI tool for each
════════════════════════════════════════ */

let scState = { current: 0, score: 0, answered: false };

function buildHelperGame(wrap, missionId, done) {
  scState = { current: 0, score: 0, answered: false };
  const completeBtnHtml = done
    ? `<button class="btn btn-gray btn-full" onclick="nav('missions')">${t('mis_btn_done')}</button>`
    : `<button class="btn btn-green btn-full btn-lg"
         onclick="completeMission('${missionId}');this.className='btn btn-gray btn-full';this.textContent='${t('mis_btn_after')}'">
         ${t('mis_btn')}
       </button>`;

  wrap.innerHTML = `
    <div id="sc-game-inner"></div>
    <div id="sc-final" style="display:none">
      <div class="game-wrap">
        <div class="game-success show">
          <span class="game-success-ico">🤝</span>
          <div class="game-success-txt">${t('sg_done')}</div>
        </div>
        ${completeBtnHtml}
      </div>
    </div>`;

  renderScenario();
}

function renderScenario() {
  const s = HELPER_SCENARIOS[scState.current];
  const L = S.lang;
  const inner = document.getElementById('sc-game-inner');
  const isLast = scState.current >= HELPER_SCENARIOS.length - 1;

  inner.innerHTML = `
    <div class="game-wrap">
      <div class="game-title">${t('sg_title')}</div>
      <div class="sc-counter">
        ${t('sg_inst')} — ${scState.current + 1} ${t('sg_of')} ${HELPER_SCENARIOS.length}
      </div>
      <span class="sc-char">${s.char}</span>
      <div class="sc-desc">${s[L] || s.en}</div>
      <div class="sc-opts">
        ${s.opts.map((o, i) => `
          <button class="sc-opt" id="so-${i}">
            ${o[L] || o.en}
          </button>`).join('')}
      </div>
      <div class="sc-expl" id="sc-expl">${s.expl[L] || s.expl.en}</div>
      <button class="sc-next-btn" id="sc-next-btn" onclick="scNext()">
        ${isLast ? '🎉 ' + t('sg_done') : t('sg_next')}
      </button>
    </div>`;

  scState.answered = false;
  speak(s[S.lang] || s.en);
  // wrap each option button in a div, place read icon as sibling (never inside button)
  s.opts.forEach((o, i) => {
    const btn = document.getElementById('so-' + i);
    if (!btn) return;
    const wrap = document.createElement('div');
    wrap.style.cssText = 'position:relative;display:block;';
    btn.parentNode.insertBefore(wrap, btn);
    wrap.appendChild(btn);
    btn.style.width = '100%';
    btn.addEventListener('click', () => scPick(i));
    const r = document.createElement('span');
    r.className = 'item-read-btn';
    r.textContent = '🔊';
    r.setAttribute('aria-label', 'Read aloud');
    r.addEventListener('click', function(e) { e.stopPropagation(); speakOnce(o[S.lang] || o.en); });
    wrap.appendChild(r);
  });
}

function scPick(idx) {
  if (scState.answered) return;
  scState.answered = true;
  const s = HELPER_SCENARIOS[scState.current];

  s.opts.forEach((_, i) => {
    const btn = document.getElementById('so-' + i);
    if (btn) btn.disabled = true;
    if (i === idx) {
      if (s.opts[i].ok) {
        playSound('correct');
        btn.classList.add('correct');
        scState.score++;
        toast(t('sg_correct'));
        speak(t('sg_correct'));
      } else {
        playSound('wrong');
        btn.classList.add('wrong');
        toast(t('sg_wrong'));
        speak(t('sg_wrong'));
      }
    } else if (s.opts[i].ok) {
      // Reveal correct answer after a short delay
      setTimeout(() => { const b = document.getElementById('so-' + i); if (b) b.classList.add('correct'); }, 350);
    }
  });

  const expl = document.getElementById('sc-expl');
  if (expl) expl.classList.add('show');
  const nb = document.getElementById('sc-next-btn');
  if (nb) nb.classList.add('show');
}

function scNext() {
  scState.current++;
  if (scState.current >= HELPER_SCENARIOS.length) {
    document.getElementById('sc-game-inner').style.display = 'none';
    document.getElementById('sc-final').style.display      = 'block';
    confettiSmall();
  } else {
    renderScenario();
  }
}
