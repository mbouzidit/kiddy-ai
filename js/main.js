/* ════════════════════════════════════════
   MAIN — app entry point
════════════════════════════════════════ */

function init() {
  initSplash();
  initProfile();
  const hasSave = load();
  applyLang();
  _applyMuteBtn();
  if (hasSave && S.name) nav('dashboard');
  else nav('splash');
}

init();
