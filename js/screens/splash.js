/* ════════════════════════════════════════
   SPLASH — animated background init
════════════════════════════════════════ */

function initSplash() {
  // Floating circles
  const sc = document.getElementById('splash-circles');
  for (let i = 0; i < 6; i++) {
    const c = document.createElement('div');
    c.className = 'splash-circle';
    const sz = 80 + Math.random() * 180;
    c.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;animation-duration:${4+Math.random()*4}s;animation-delay:${Math.random()*3}s`;
    sc.appendChild(c);
  }

  // Twinkling stars
  const ss = document.getElementById('splash-stars');
  const se = ['⭐','✨','💫','🌟'];
  for (let i = 0; i < 20; i++) {
    const s = document.createElement('div');
    s.className = 'sp-star';
    s.textContent = se[Math.floor(Math.random() * se.length)];
    s.style.cssText = `left:${Math.random()*96}%;top:${Math.random()*96}%;font-size:${14+Math.random()*18}px;animation-delay:${Math.random()*2.5}s;animation-duration:${2+Math.random()*2}s`;
    ss.appendChild(s);
  }
}
