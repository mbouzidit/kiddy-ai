/* ════════════════════════════════════════
   BADGES — level + XP progress + badge grid
════════════════════════════════════════ */

const BADGE_DEST = {
  'ai-explorer':     () => nav('missions'),
  'health-hero':     () => showMission('health'),
  'planet-pro':      () => showMission('planet'),
  'smart-helper':    () => showMission('helper'),
  'nav-master':      () => showMission('labyrinth'),
  'mission-master':  () => nav('missions'),
  'data-detective':  () => nav('training'),
  'robot-trainer':   () => nav('training'),
  'quiz-starter':    () => nav('quiz-intro'),
  'ai-genius':       () => nav('quiz-intro'),
  'bias-buster':     () => launchBiasGame(),
  'adversarial-pro': () => launchAdversarialGame(),
};

function showBadgePopup(b) {
  const on    = S.badges.includes(b.id);
  const bName = S.lang === 'fr' ? b.name_fr : b.name;
  const bDesc = S.lang === 'fr' ? b.desc_fr : b.desc;
  const circle = document.getElementById('bdg-popup-circle');
  circle.textContent       = b.ico;
  circle.style.background  = on ? b.bg  : '#E0E0E0';
  circle.style.borderColor = on ? b.bdr : 'transparent';
  document.getElementById('bdg-popup-name').textContent   = bName;
  document.getElementById('bdg-popup-status').textContent = on ? t('bdg_popup_earned') : t('bdg_popup_locked');
  document.getElementById('bdg-popup-how').textContent    = t('bdg_popup_how');
  document.getElementById('bdg-popup-desc').textContent   = bDesc;
  document.getElementById('bdg-popup-overlay').style.display = 'flex';
  speak(`${bName}. ${bDesc}`);
}

function hideBadgePopup() {
  document.getElementById('bdg-popup-overlay').style.display = 'none';
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}

function loadBadges() {
  const levels = LEVELS_BY_MODE[_mode] || LEVELS;
  const lvl  = getLevel();
  const next = levels[levels.indexOf(lvl) + 1] || { min: lvl.min + 400 };
  const lvlName = S.lang === 'fr' ? lvl.name_fr : lvl.name;

  document.getElementById('bdg-lvl').textContent   = lvlName;
  document.getElementById('bdg-xp-l').textContent  = `${S.xp} XP`;
  document.getElementById('bdg-xp-r').textContent  = `${next.min} XP`;

  const pct = Math.min(((S.xp - lvl.min) / (next.min - lvl.min)) * 100, 100);
  document.getElementById('bdg-xp-bar').style.width = pct + '%';

  const allBadges = _mode === 'expert' ? [...BADGES, ...BADGES_EXPERT] : BADGES;
  const g = document.getElementById('bdg-grid');
  g.innerHTML = '';
  allBadges.forEach(b => {
    const on    = S.badges.includes(b.id);
    const bName = S.lang === 'fr' ? b.name_fr : b.name;
    const wrap  = document.createElement('div');
    wrap.className = 'bdg-item clickable';
    wrap.innerHTML = `
      <div class="bdg-circle ${on ? 'on' : 'off'}"
           style="${on ? `background:${b.bg};border-color:${b.bdr}` : ''}">
        ${b.ico}
      </div>
      <div class="bdg-name">${bName}</div>`;
    const dest = BADGE_DEST[b.id];
    wrap.addEventListener('click', dest || (() => showBadgePopup(b)));
    g.appendChild(wrap);
  });
}
