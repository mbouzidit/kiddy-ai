/* ════════════════════════════════════════
   PROFILE — name + avatar selection
════════════════════════════════════════ */

function initProfile() {
  const g = document.getElementById('ava-grid');
  g.innerHTML = '';
  AVATARS.forEach(e => {
    const d = document.createElement('div');
    d.className = 'ava-opt' + (S.ava === e ? ' selected' : '');
    d.textContent = e;
    d.onclick = () => {
      document.querySelectorAll('.ava-opt').forEach(a => a.classList.remove('selected'));
      d.classList.add('selected');
      S.ava = e;
      chkProfile();
    };
    g.appendChild(d);
  });
}

function chkProfile() {
  const v = document.getElementById('name-in').value.trim();
  document.getElementById('profile-go').disabled = v.length < 2;
}

function createProfile() {
  const n = document.getElementById('name-in').value.trim();
  if (n.length < 2) return;
  S.name = n;
  earn('first-steps');
  addXP(50);
  save();
  nav('dashboard');
  toast(t('welcome').replace('{n}', n));
}
