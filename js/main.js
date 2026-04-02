/* ════════════════════════════════════════
   MAIN — app entry point
════════════════════════════════════════ */

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
