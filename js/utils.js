/* ════════════════════════════════════════
   UTILS — XP, badges, level, toast, confetti
════════════════════════════════════════ */

/* ── XP & BADGES ── */
function addXP(n) {
  const prevLevel = getLevel();
  S.xp += n;
  const el = document.getElementById('d-xp');
  if (el) el.textContent = `⚡ ${S.xp} XP`;
  if (getLevel().min > prevLevel.min) playSound('levelup');
  save();
}

function earn(id) {
  if (S.badges.includes(id)) return;
  S.badges.push(id);
  const b = [...BADGES, ...BADGES_EXPERT].find(x => x.id === id);
  if (b) {
    const bName = S.lang === 'fr' ? b.name_fr : b.name;
    toast(`${t('badge_prefix')} ${bName}!`);
    speak(t('tts_badge').replace('{badge}', bName));
  }
  playSound('badge');
  save();
}

function getLevel() {
  const levels = LEVELS_BY_MODE[_mode] || LEVELS;
  let lvl = levels[0];
  for (const l of levels) { if (S.xp >= l.min) lvl = l; else break; }
  return lvl;
}

/* ── TOAST ── */
let _toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
}

/* ── CONFETTI (full screen) ── */
function confetti() {
  const cv = document.getElementById('confetti-canvas');
  const ctx = cv.getContext('2d');
  cv.width = window.innerWidth; cv.height = window.innerHeight;
  cv.style.display = 'block';
  const cols = ['#FFD700','#FF6B6B','#4ECDC4','#52C41A','#A855F7','#FF9C42','#2196F3','#FF1493'];
  const ps = Array.from({ length: 220 }, () => ({
    x:   Math.random() * cv.width,
    y:   -10 - Math.random() * 100,
    w:   Math.random() * 13 + 5,
    h:   Math.random() * 6 + 3,
    col: cols[Math.floor(Math.random() * cols.length)],
    vx:  (Math.random() - .5) * 4,
    vy:  Math.random() * 4 + 1.8,
    a:   Math.random() * Math.PI * 2,
    sp:  (Math.random() - .5) * .16
  }));
  let raf;
  function anim() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    let alive = false;
    ps.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += .04; p.a += p.sp;
      if (p.y < cv.height + 20) {
        alive = true;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a);
        ctx.fillStyle = p.col; ctx.globalAlpha = Math.max(0, 1 - p.y / cv.height * .8);
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
      }
    });
    if (alive) raf = requestAnimationFrame(anim);
    else { cv.style.display = 'none'; cancelAnimationFrame(raf); }
  }
  anim();
}

/* ── TTS (READ ALOUD) ── */
function speak(text) {
  if (!S.tts || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = S.lang === 'fr' ? 'fr-FR' : 'en-US';
  window.speechSynthesis.speak(u);
}

function speakOnce(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = S.lang === 'fr' ? 'fr-FR' : 'en-US';
  window.speechSynthesis.speak(u);
}

function toggleTts() {
  S.tts = !S.tts;
  save();
  _applyTtsBtn();
  if (!S.tts && window.speechSynthesis) window.speechSynthesis.cancel();
}

function _applyTtsBtn() {
  const btn = document.getElementById('tts-btn');
  if (!btn) return;
  btn.textContent = S.tts ? '📢' : '📖';
  btn.classList.toggle('active', S.tts);
  btn.setAttribute('aria-pressed', S.tts ? 'true' : 'false');
}

/* ── CONFETTI (mini burst for in-game wins) ── */
function confettiSmall() {
  const cv = document.getElementById('confetti-canvas');
  const ctx = cv.getContext('2d');
  cv.width = window.innerWidth; cv.height = window.innerHeight;
  cv.style.display = 'block';
  const cols = ['#FFD700','#FF6B6B','#4ECDC4','#52C41A','#A855F7'];
  const ps = Array.from({ length: 80 }, () => ({
    x:   Math.random() * cv.width,
    y:   cv.height * .4 + Math.random() * cv.height * .2,
    w:   Math.random() * 10 + 4,
    h:   Math.random() * 5 + 2,
    col: cols[Math.floor(Math.random() * cols.length)],
    vx:  (Math.random() - .5) * 5,
    vy:  -(Math.random() * 5 + 3),
    a:   Math.random() * Math.PI * 2,
    sp:  (Math.random() - .5) * .2
  }));
  let raf;
  function anim() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    let alive = false;
    ps.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += .08; p.a += p.sp;
      if (p.y < cv.height + 20) {
        alive = true;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a);
        ctx.fillStyle = p.col; ctx.globalAlpha = Math.max(0, 1 - p.y / cv.height * 1.2);
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
      }
    });
    if (alive) raf = requestAnimationFrame(anim);
    else { cv.style.display = 'none'; cancelAnimationFrame(raf); }
  }
  anim();
}
