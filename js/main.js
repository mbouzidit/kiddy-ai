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
  if (hasSave && S.name) nav('dashboard');
  else nav('splash');
}

init();
