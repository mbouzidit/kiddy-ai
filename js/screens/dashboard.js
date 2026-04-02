/* ════════════════════════════════════════
   DASHBOARD — lab background + stats
════════════════════════════════════════ */

function initLabBg() {
  const lb = document.getElementById('lab-bg');
  if (!lb || lb.children.length > 0) return;
  const icons = ['🔬','🧬','💉','⚡','🌡️','🤖','💡','🧪','📡','🔭','🛸','🧠'];
  for (let i = 0; i < 14; i++) {
    const el = document.createElement('div');
    el.className = 'lab-ico';
    el.textContent = icons[Math.floor(Math.random() * icons.length)];
    el.style.cssText = `left:${Math.random()*95}%;top:${Math.random()*95}%;animation-duration:${5+Math.random()*5}s;animation-delay:${Math.random()*4}s;font-size:${22+Math.random()*18}px;`;
    lb.appendChild(el);
  }
}

function loadDash() {
  hideResetConfirm();
  initLabBg();
  const L = T[S.lang] || T.en;

  document.getElementById('d-ava').textContent = S.ava;
  document.getElementById('d-xp').textContent  = `⚡ ${S.xp} XP`;

  const msgs = L.sparky;
  document.getElementById('sparky-msg').textContent =
    msgs[Math.floor(Math.random() * msgs.length)].replace('{n}', S.name);

  // Progress bar
  const levels = LEVELS_BY_MODE[_mode] || LEVELS;
  const lvl  = getLevel();
  const next = levels[levels.indexOf(lvl) + 1];
  if (next) {
    const p = ((S.xp - lvl.min) / (next.min - lvl.min)) * 100;
    document.getElementById('d-prog').style.width = Math.min(p, 100) + '%';
    const lvlName = S.lang === 'fr' ? next.name_fr : next.name;
    document.getElementById('d-prog-txt').textContent = `${S.xp} / ${next.min} ${L.d_to} "${lvlName}"`;
  } else {
    document.getElementById('d-prog').style.width = '100%';
    document.getElementById('d-prog-txt').textContent = L.d_max;
  }

  // Section label with player name span
  const sect = document.getElementById('d-sect');
  sect.textContent = '';
  sect.textContent = L.d_sect + ' ';
  const sp = document.createElement('span');
  sp.id = 'd-name';
  sp.textContent = S.name || t('d_explorer');
  sect.appendChild(sp);
  sect.appendChild(document.createTextNode('!'));
}

function showResetConfirm() {
  document.getElementById('reset-btn-wrap').style.display  = 'none';
  document.getElementById('reset-confirm-wrap').style.display = 'flex';
}

function hideResetConfirm() {
  document.getElementById('reset-btn-wrap').style.display  = 'block';
  document.getElementById('reset-confirm-wrap').style.display = 'none';
}

function doReset() {
  const lang  = S.lang;
  const muted = S.muted;
  S = { name:'', ava:'🧑', xp:0, lang, badges:[], missions:[],
        quizBest:-1, quizPlays:0, trDone:false, trCount:0,
        qScore:0, qCurrent:0, qAnswered:false, qQuestions:[], hintUsed:false, muted };
  save();
  nav('splash');
}
