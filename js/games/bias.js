/* ════════════════════════════════════════
   GAME: Spot the Bias — Expert only
   3 scenarios: player labels each as Biased / Fair / Uncertain
════════════════════════════════════════ */

let biasIdx = 0, biasCorrect = 0;

function launchBiasGame() {
  biasIdx = 0; biasCorrect = 0;
  nav('bias-game');
  _renderBiasScenario();
}

function _renderBiasScenario() {
  const wrap = document.getElementById('bias-wrap');
  if (!wrap) return;
  const L  = S.lang;

  if (biasIdx >= BIAS_SCENARIOS.length) {
    _showBiasDone(wrap);
    return;
  }

  const sc = BIAS_SCENARIOS[biasIdx];
  const context = L === 'fr' ? sc.fr : sc.en;
  const decision = L === 'fr' ? sc.decision.fr : sc.decision.en;

  wrap.innerHTML = `
    <div class="game-wrap">
      <button class="back-btn" onclick="nav('missions')" style="margin-bottom:8px">←</button>
      <div class="game-title">${t('bs_title')}</div>
      <div class="game-inst">${t('bs_inst')}</div>
      <div class="bs-progress">${biasIdx + 1} ${t('bs_of')} ${BIAS_SCENARIOS.length}</div>
      <div class="bs-scenario">
        <div class="bs-ico">${sc.ico}</div>
        <div class="bs-context">${context}</div>
        <div class="bs-decision">"${decision}"</div>
      </div>
      <div class="bs-choices">
        <button class="bs-btn bs-biased"   onclick="_checkBias('biased')">${t('bs_biased')}</button>
        <button class="bs-btn bs-fair"     onclick="_checkBias('fair')">${t('bs_fair')}</button>
        <button class="bs-btn bs-uncertain" onclick="_checkBias('uncertain')">${t('bs_uncertain')}</button>
      </div>
      <div class="bs-feedback" id="bs-fb" style="display:none"></div>
      <button class="btn btn-blue btn-full btn-lg" id="bs-next" style="display:none;margin-top:12px"
              onclick="_nextBias()">${biasIdx + 1 < BIAS_SCENARIOS.length ? '→ Next Scenario' : t('bs_done')}</button>
    </div>`;
}

function _checkBias(answer) {
  const sc  = BIAS_SCENARIOS[biasIdx];
  const L   = S.lang;
  const ok  = answer === sc.answer;
  if (ok) biasCorrect++;
  playSound(ok ? 'correct' : 'wrong');

  const fb = document.getElementById('bs-fb');
  if (fb) {
    const expl = L === 'fr' ? sc.expl.fr : sc.expl.en;
    fb.innerHTML = `<div class="fb-ico">${ok ? '✅' : '❌'}</div>
      <div class="fb-txt ${ok ? 'ok' : 'no'}"><strong>${ok ? t('bs_correct') : t('bs_wrong')}</strong></div>
      <div class="fb-expl">${expl}</div>`;
    fb.style.display = 'block';
  }

  document.querySelectorAll('.bs-btn').forEach(b => b.disabled = true);
  const nextBtn = document.getElementById('bs-next');
  if (nextBtn) nextBtn.style.display = 'block';
}

function _nextBias() {
  biasIdx++;
  _renderBiasScenario();
}

function _showBiasDone(wrap) {
  const perfect = biasCorrect === BIAS_SCENARIOS.length;
  if (perfect) {
    earn('bias-buster');
    addXP(100);
    confettiSmall();
  }
  wrap.innerHTML = `
    <div class="game-wrap">
      <div class="game-success show">
        <span class="game-success-ico">🔐</span>
        <div class="game-success-txt">${t('bs_done')}</div>
        <div style="margin-top:8px;font-size:15px;opacity:.8">${biasCorrect} / ${BIAS_SCENARIOS.length} correct</div>
      </div>
      <button class="btn btn-blue btn-full btn-lg" style="margin-top:16px" onclick="nav('missions')">${t('nav_mis')}</button>
    </div>`;
  playSound('complete');
}
