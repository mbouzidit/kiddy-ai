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
  document.getElementById('name-in').classList.toggle('error', false);
}

function createProfile() {
  const n = document.getElementById('name-in').value.trim();
  if (n.length < 2) {
    const inp = document.getElementById('name-in');
    inp.classList.remove('error');
    void inp.offsetWidth; // restart animation if already shaking
    inp.classList.add('error');
    inp.focus();
    return;
  }
  S.name = n;
  earn('first-steps');
  addXP(50);
  save();
  nav('dashboard');
  toast(t('welcome').replace('{n}', n));
}
