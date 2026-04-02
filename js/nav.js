/* ════════════════════════════════════════
   NAV — screen routing
════════════════════════════════════════ */

const NAV_MAP = {
  dashboard:      'home',
  missions:       'missions',
  'mission-detail':'missions',
  training:       'training',
  'quiz-intro':   'quiz',
  quiz:           'quiz',
  'quiz-results': 'quiz',
  badges:         'badges'
};

const NO_NAV = ['splash', 'profile'];

function nav(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + id);
  if (el) { el.classList.add('active'); window.scrollTo(0, 0); el.scrollTop = 0; }

  const nb = document.getElementById('bottom-nav');
  if (NO_NAV.includes(id)) nb.classList.remove('show');
  else nb.classList.add('show');

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const nk = NAV_MAP[id];
  if (nk) { const ni = document.getElementById('n-' + nk); if (ni) ni.classList.add('active'); }

  onLoad(id);
}

function onLoad(id) {
  if (id === 'dashboard')    loadDash();
  if (id === 'missions')     loadMissions();
  if (id === 'training')     loadTraining();
  if (id === 'quiz-intro')   loadQuizIntro();
  if (id === 'quiz')         renderQ();
  if (id === 'quiz-results') loadResults();
  if (id === 'badges')       loadBadges();
}
