/* ════════════════════════════════════════
   MISSIONS — list + detail + game launcher
════════════════════════════════════════ */

function loadMissions() {
  earn('ai-explorer');
  ['health', 'planet', 'helper'].forEach(id => {
    const el = document.getElementById('mp-' + id);
    if (S.missions.includes(id)) {
      el.textContent = t('mis_done'); el.classList.add('done');
    } else {
      el.textContent = t('mis_pill'); el.classList.remove('done');
    }
  });
}

function showMission(id) {
  const m     = MISSIONS_DATA[id];
  const done  = S.missions.includes(id);
  const facts = S.lang === 'fr' ? m.facts_fr : m.facts;
  const title = S.lang === 'fr' ? m.title_fr  : m.title;

  const sc = document.getElementById('screen-mission-detail');
  sc.innerHTML = `
    <div class="md-hero" style="background:${m.grad}">
      <div class="md-hero-top">
        <button class="back-btn" onclick="nav('missions')">←</button>
      </div>
      <span class="md-ico">${m.ico}</span>
      <div class="md-title">${title}</div>
    </div>
    <div id="md-info" class="md-content">
      ${facts.map(f => `
        <div class="fact-card">
          <div class="fact-ico">${f.ico}</div>
          <div class="fact-body"><h4>${f.h}</h4><p>${f.t}</p></div>
        </div>`).join('')}
      <button class="game-launch-btn" onclick="launchMissionGame('${id}')">
        ${done ? t('mg_done') : t('mg_play')}
      </button>
    </div>
    <div id="md-game" style="display:none;padding:0 14px 16px"></div>`;

  nav('mission-detail');
}

function launchMissionGame(id) {
  document.getElementById('md-info').style.display = 'none';
  const gw   = document.getElementById('md-game');
  gw.style.display = 'block';
  const done = S.missions.includes(id);
  if (id === 'health') buildHealthGame(gw, id, done);
  if (id === 'planet') buildPlanetGame(gw, id, done);
  if (id === 'helper') buildHelperGame(gw, id, done);
}

function completeMission(id) {
  if (S.missions.includes(id)) return;
  S.missions.push(id);
  addXP(75);
  earn(MISSIONS_DATA[id].badge);
  toast(t('mis_toast'));
  playSound('complete');
  save();
  if (S.missions.length >= 3) {
    setTimeout(() => { earn('mission-master'); addXP(100); toast(t('mis_master')); save(); }, 1400);
  }
  setTimeout(() => _showNextMissionBtn(id), 800);
}

function _showNextMissionBtn(id) {
  const nextMap = { health: 'planet', planet: 'helper' };
  const gw = document.querySelector('#md-game .game-wrap') ||
             document.querySelector('#sc-final .game-wrap');
  if (!gw) return;
  const btn = document.createElement('button');
  btn.className = 'btn btn-blue btn-full btn-lg';
  btn.style.marginTop = '10px';
  if (nextMap[id]) {
    const nextId = nextMap[id];
    btn.textContent = t('mis_next_' + nextId);
    btn.onclick = () => showMission(nextId);
  } else {
    btn.textContent = t('mis_next_training');
    btn.onclick = () => nav('training');
  }
  gw.appendChild(btn);
}
