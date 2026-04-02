/* ════════════════════════════════════════
   MAIN — app entry point
════════════════════════════════════════ */

function init() {
  initSplash();
  initProfile();
  const hasSave = load();
  applyLang();
  if (hasSave && S.name) nav('dashboard');
  else nav('splash');
}

init();
