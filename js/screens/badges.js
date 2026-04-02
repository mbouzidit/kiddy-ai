/* ════════════════════════════════════════
   BADGES — level + XP progress + badge grid
════════════════════════════════════════ */

function loadBadges() {
  const lvl  = getLevel();
  const next = LEVELS[LEVELS.indexOf(lvl) + 1] || { min: lvl.min + 400 };
  const lvlName = S.lang === 'fr' ? lvl.name_fr : lvl.name;

  document.getElementById('bdg-lvl').textContent   = lvlName;
  document.getElementById('bdg-xp-l').textContent  = `${S.xp} XP`;
  document.getElementById('bdg-xp-r').textContent  = `${next.min} XP`;

  const pct = Math.min(((S.xp - lvl.min) / (next.min - lvl.min)) * 100, 100);
  document.getElementById('bdg-xp-bar').style.width = pct + '%';

  const g = document.getElementById('bdg-grid');
  g.innerHTML = '';
  BADGES.forEach(b => {
    const on    = S.badges.includes(b.id);
    const bName = S.lang === 'fr' ? b.name_fr : b.name;
    const wrap  = document.createElement('div');
    wrap.className = 'bdg-item';
    wrap.innerHTML = `
      <div class="bdg-circle ${on ? 'on' : 'off'}"
           style="${on ? `background:${b.bg};border-color:${b.bdr}` : ''}">
        ${b.ico}
      </div>
      <div class="bdg-name">${bName}</div>`;
    g.appendChild(wrap);
  });
}
