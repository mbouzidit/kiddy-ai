/* ════════════════════════════════════════
   MAIN — app entry point
════════════════════════════════════════ */

/* ── GLOBAL CLICK-TO-READ ──
   Capture phase: fires before onclick, so game feedback (which calls speak()) wins by
   cancelling the button text. Nav buttons have their page title win via the 250ms delay. */
document.addEventListener('click', function(e) {
  if (!S.tts) return;
  if (e.target.closest('#lang-toggle')) return;
  if (e.target.closest('.fact-speak-btn, .item-read-btn, .sort-read-btn')) return;
  const el = e.target.closest(
    'button, h1, h2, h3, h4, p, label, ' +
    '.match-lbl, .sort-item, .sc-desc, .sc-char, ' +
    '.bs-context, .bs-decision, .game-inst, .game-title, ' +
    '.ms-mode-card, .fact-body, .opt-btn, .bs-btn, .sc-opt, .adv-btn, .nav-item, ' +
    '.bdg-item, .dc-ttl'
  );
  if (!el) return;
  const text = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 400);
  if (text.length > 2) speak(text);
}, true);

function init() {
  initSplash();
  initProfile();
  try {
    const savedMode = localStorage.getItem('ailab_mode');
    if (savedMode) setMode(savedMode);
  } catch(e) {}
  const hasSave = load();
  applyLang();
  _applyMuteBtn();
  _applyTtsBtn();
  if (!window.speechSynthesis) {
    const btn = document.getElementById('tts-btn');
    if (btn) btn.style.display = 'none';
  }
  if (hasSave && S.name) nav('dashboard');
  else nav('splash');
}

init();
