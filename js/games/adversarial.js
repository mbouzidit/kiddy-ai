/* ════════════════════════════════════════
   GAME: Adversarial Challenge — Expert only
   3 scenarios: player picks which change fools the AI
════════════════════════════════════════ */

let advIdx = 0, advCorrect = 0;

function launchAdversarialGame() {
  advIdx = 0; advCorrect = 0;
  nav('adversarial-game');
  _renderAdvScenario();
}

function _renderAdvScenario() {
  const wrap = document.getElementById('adv-wrap');
  if (!wrap) return;
  const L = S.lang;

  if (advIdx >= ADVERSARIAL_SCENARIOS.length) {
    _showAdvDone(wrap);
    return;
  }

  const sc       = ADVERSARIAL_SCENARIOS[advIdx];
  const context  = L === 'fr' ? sc.fr      : sc.en;
  const question = L === 'fr' ? sc.question.fr : sc.question.en;
  const opts     = sc.opts;

  const optsHtml = opts.map((o, i) => `
    <button class="adv-btn" onclick="_checkAdv(${i})">
      ${L === 'fr' ? o.fr : o.en}
    </button>`).join('');

  wrap.innerHTML = `
    <div class="game-wrap">
      <button class="back-btn" onclick="nav('missions')" style="margin-bottom:8px">←</button>
      <div class="game-title">${t('adv_title')}</div>
      <div class="game-inst">${t('adv_inst')}</div>
      <div class="bs-progress">${advIdx + 1} ${t('adv_of')} ${ADVERSARIAL_SCENARIOS.length}</div>
      <div class="bs-scenario">
        <div class="bs-ico">${sc.ico}</div>
        <div class="bs-context">${context}</div>
        <div class="bs-decision">${question}</div>
      </div>
      <div class="adv-choices">${optsHtml}</div>
      <div class="bs-feedback" id="adv-fb" style="display:none"></div>
      <button class="btn btn-blue btn-full btn-lg" id="adv-next" style="display:none;margin-top:12px"
              onclick="_nextAdv()">${advIdx + 1 < ADVERSARIAL_SCENARIOS.length ? '→ Next Scenario' : t('adv_done')}</button>
    </div>`;
  speak(context + '. ' + question);
  const scEl = wrap.querySelector('.bs-scenario');
  if (scEl) {
    scEl.style.position = 'relative';
    const r = document.createElement('span');
    r.className = 'item-read-btn';
    r.textContent = '🔊';
    r.setAttribute('aria-label', 'Read aloud');
    r.addEventListener('click', function(e) { e.stopPropagation(); speakOnce(context + '. ' + question); });
    scEl.appendChild(r);
  }
}

function _checkAdv(idx) {
  const sc  = ADVERSARIAL_SCENARIOS[advIdx];
  const L   = S.lang;
  const ok  = sc.opts[idx].ok;
  if (ok) advCorrect++;
  playSound(ok ? 'correct' : 'wrong');

  const fb = document.getElementById('adv-fb');
  if (fb) {
    const expl = L === 'fr' ? sc.expl.fr : sc.expl.en;
    fb.innerHTML = `<div class="fb-ico">${ok ? '✅' : '❌'}</div>
      <div class="fb-txt ${ok ? 'ok' : 'no'}"><strong>${ok ? t('adv_correct') : t('adv_wrong')}</strong></div>
      <div class="fb-expl">${expl}</div>`;
    fb.style.display = 'block';
    speak((ok ? t('adv_correct') : t('adv_wrong')) + '. ' + expl);
  }

  document.querySelectorAll('.adv-btn').forEach(b => b.disabled = true);
  const nextBtn = document.getElementById('adv-next');
  if (nextBtn) nextBtn.style.display = 'block';
}

function _nextAdv() {
  advIdx++;
  _renderAdvScenario();
}

function _showAdvDone(wrap) {
  const perfect = advCorrect === ADVERSARIAL_SCENARIOS.length;
  if (perfect) {
    earn('adversarial-pro');
    addXP(75);
    confettiSmall();
  }
  wrap.innerHTML = `
    <div class="game-wrap">
      <div class="game-success show">
        <span class="game-success-ico">🎯</span>
        <div class="game-success-txt">${t('adv_done')}</div>
        <div style="margin-top:8px;font-size:15px;opacity:.8">${advCorrect} / ${ADVERSARIAL_SCENARIOS.length} correct</div>
      </div>
      <button class="btn btn-blue btn-full btn-lg" style="margin-top:16px" onclick="nav('missions')">${t('nav_mis')}</button>
    </div>`;
  playSound('complete');
}
