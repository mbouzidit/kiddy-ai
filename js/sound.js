/* ════════════════════════════════════════
   SOUND — Web Audio API synthesiser
════════════════════════════════════════ */

let _actx = null;

function _ctx() {
  if (!_actx) {
    try { _actx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch(e) {}
  }
  return _actx;
}

function playSound(name) {
  if (S.muted) return;
  const c = _ctx();
  if (!c) return;
  try { _SFX[name]?.(c); } catch(e) {}
}

function toggleMute() {
  S.muted = !S.muted;
  save();
  _applyMuteBtn();
}

function _applyMuteBtn() {
  const btn = document.getElementById('mute-btn');
  if (btn) btn.textContent = S.muted ? '🔇' : '🔊';
}

/* ── tone helper ── */
function _tone(c, freq, type, t0, dur, vol = 0.28) {
  const osc = c.createOscillator();
  const env = c.createGain();
  osc.connect(env);
  env.connect(c.destination);
  osc.type = type;
  osc.frequency.setValueAtTime(freq, c.currentTime + t0);
  env.gain.setValueAtTime(0, c.currentTime + t0);
  env.gain.linearRampToValueAtTime(vol, c.currentTime + t0 + 0.01);
  env.gain.exponentialRampToValueAtTime(0.001, c.currentTime + t0 + dur);
  osc.start(c.currentTime + t0);
  osc.stop(c.currentTime + t0 + dur + 0.05);
}

/* ── sound definitions ── */
const _SFX = {
  click:    c => _tone(c, 800,  'sine',     0,     0.06, 0.12),
  correct:  c => { _tone(c, 520,  'sine',   0,     0.12, 0.22);
                   _tone(c, 780,  'sine',   0.10,  0.18, 0.28); },
  wrong:    c => _tone(c, 200,  'sawtooth', 0,     0.18, 0.18),
  complete: c => { _tone(c, 523, 'sine',    0,     0.18, 0.28);
                   _tone(c, 659, 'sine',    0.15,  0.18, 0.28);
                   _tone(c, 784, 'sine',    0.30,  0.28, 0.35); },
  badge:    c => { _tone(c, 880,  'sine',   0,     0.14, 0.22);
                   _tone(c, 1046, 'sine',   0.12,  0.22, 0.28); },
  levelup:  c => [523, 659, 784, 1046].forEach((f, i) =>
                   _tone(c, f, 'sine', i * 0.1, 0.18, 0.22))
};

/* ── global click sound (buttons + any element with onclick) ── */
document.addEventListener('click', e => {
  if (e.target.closest('button, [onclick]')) playSound('click');
}, { passive: true });
